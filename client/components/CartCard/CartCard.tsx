import { NextPage } from 'next';
import { useState } from 'react';
import { PosterType } from '../../pages/home';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';

type Props = {
  el: PosterType;
};

export const CartCard: NextPage<Props> = ({ el }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Card
      key={el.id}
      elevation={2}
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        marginBottom: 2,
      }}
    >
      <CardContent
        sx={{
          flex: '100%',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box>
          <Typography
            variant='h6'
            sx={{ fontSize: { xs: '1rem', md: '1.3rem' } }}
          >
            {el.title}
          </Typography>
          <Typography
            variant='body2'
            sx={{ fontSize: { xs: '0.7rem', md: '0.9rem' } }}
          >
            {el.designation}
          </Typography>
        </Box>
        <Box sx={{ marginY: 1 }}>
          <Typography
            variant='body1'
            sx={{
              fontSize: { xs: '0.9rem', md: '1.1rem' },
              fontWeight: '450',
            }}
          >
            Coins: {el.price}
          </Typography>
        </Box>
        <Box>
          <Button
            size='small'
            variant='contained'
            color='primary'
            sx={{
              color: '#fff',
              fontSize: { xs: '0.75rem', md: '0.9rem' },
              paddingY: { xs: '0.1rem', md: '0.2rem' },
            }}
          >
            Buy
          </Button>
        </Box>
      </CardContent>
      {loading && (
        <Skeleton
          variant='rectangular'
          sx={{
            height: { xs: '8rem', md: '12rem' },
            width: '90%',
          }}
        />
      )}
      <CardMedia
        src={`http://127.0.0.1:8090/api/files/posters/${el.id}/${el.image}`}
        component='img'
        alt='poster'
        sx={{
          height: { xs: '8rem', md: '12rem' },
          width: { xs: '10rem', md: '12rem' },
          boxShadow: '1px 0 5px 1px rgba(0, 0, 0, 0.25)',
          display: !loading ? 'block' : 'none',
        }}
        onLoad={() => setLoading(false)}
      />
    </Card>
  );
};
