import { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PosterType } from '../home';
import { CartCard } from '../../components/CartCard/CartCard';

const CartPage: NextPage = () => {
  const [posters, setPosters] = useState<PosterType[]>([]);

  useEffect(() => {
    (async () => {
      const records = await axios
        .get(
          'https://hindavi-pocketbase.herokuapp.com/api/collections/cart/records?userId=ge890clfoykvdqu&expand=posterId'
        )
        .then((res) => res.data.items[0]);
      setPosters(records['@expand'].posterId);
    })();
  }, []);

  return (
    <Container maxWidth='sm'>
      <Typography variant='h5' sx={{ marginY: 2, fontWeight: 500 }}>
        Cart
      </Typography>
      {posters.map((el) => (
        <CartCard el={el} />
      ))}
    </Container>
  );
};

export default CartPage;
