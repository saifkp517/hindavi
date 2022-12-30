import { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import PocketBase from 'pocketbase';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PosterType } from '../home';
import { CartCard } from '../../components/CartCard/CartCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const CartPage: NextPage = () => {

  const client = new PocketBase('http://127.0.0.1:8090');

  const userDet = client?.authStore?.model?.profile!;

  const [posters, setPosters] = useState<PosterType[]>([]);
  const [cartId, setCartId] = useState('');

  useEffect(() => {   
    (async () => {

      const userid = userDet?.id


      const records = await axios
        .get(
          `http://127.0.0.1:8090/api/collections/cart/records?userId=rgpyi28sqcfwdix&expand=posterId`
        )
        .then((res) => {
          res.data.items.length > 0 ? setCartId(res.data.items[0].id) : null;
          return res.data.items.length > 0 ? res.data.items[0] : [];
        });
      records['@expand'].posterId.length > 0
        ? setPosters(records['@expand'].posterId)
        : null;
    })();
  }, []);

  const removePoster = async (id: string) => {
    try {
      const ids: string[] = [];
      posters.forEach((el) => (el.id !== id ? ids.push(el.id) : null));
      alert(userDet?.id)

      const records = await axios.patch(
        `http://127.0.0.1:8090/api/collections/cart/records/${cartId}`,
        {
          userId: 'rgpyi28sqcfwdix',
          posterId: ids,
        }
      );
      setPosters(posters.filter((el) => el.id !== id));
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth='md' sx={{ position: 'relative' }}>
      <Typography
        variant='h5'
        sx={{ marginTop: 2, fontWeight: 500, marginBottom: 2.5 }}
      >
        Cart
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexDirection: { md: 'row', xs: 'column-reverse' },
        }}
      >
        <Container
          maxWidth='sm'
          sx={{
            flex: '60%',
          }}
        >
          {posters.map((el) => (
            <CartCard
              key={el.id}
              el={el}
              removePoster={(id: string) => removePoster(id)}
            />
          ))}
        </Container>
        <Container
          maxWidth='sm'
          sx={{
            flex: '40%',
          }}
        >
          <Typography variant='h6'>Order summary:-</Typography>
          <Box>
            <List component='ul' aria-label='mailbox folders'>
              {posters.map((el) => (
                <ListItem
                  divider
                  key={el.id}
                  sx={{
                    '& > div:first-of-type': {
                      display: 'inline-block',
                      width: '100%',
                    },
                  }}
                >
                  <ListItemText secondary={el.title} />
                  <ListItemText primary={el.price} />
                </ListItem>
              ))}
              <ListItem
                sx={{
                  '& > div:first-of-type': {
                    display: 'inline-block',
                    width: '100%',
                  },
                }}
              >
                <ListItemText primary='Total :' />
                <ListItemText
                  primary={posters
                    .reduce((acc, cur) => acc + cur.price, 0)
                    .toString()}
                />
              </ListItem>
            </List>
          </Box>
          <Box>
            <Button
              variant='contained'
              fullWidth
              sx={{ color: 'white', paddingY: 1, marginBottom: 4 }}
            >
              Buy Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default CartPage;
