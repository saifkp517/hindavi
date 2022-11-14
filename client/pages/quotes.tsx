import { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { PosterType } from './home';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

const QuotesPage: NextPage = () => {
  const [posters, setPosters] = useState<PosterType[]>([]);

  useEffect(() => {
    (async () => {
      const result = await axios
        .get('http://52.23.195.42:8000/api/collections/quotes/records')
        .then((res) => res.data);
      const poster = await getPosters(result.items);
      setPosters(poster);
    })();
  }, []);

  const getPosters = async (posterArr: PosterType[]) => {
    const posters = await Promise.all(
      posterArr.map(async (el: any) => {
        try {
          const posterData = await axios
            .get(
              `http://52.23.195.42:8000/api/collections/posters/records/${el.posterId}`
            )
            .then((res) => res.data);
          return posterData;
        } catch (error: any) {
          console.log(error.message);
        }
      })
    );
    return posters;
  };

  return (
    <Container maxWidth='xl'>
      <Typography variant='h6' sx={{ marginY: 2 }}>
        Quotes
      </Typography>
      <Grid container spacing={2} sx={{ paddingY: 1 }}>
        {posters.map((el, i) => {
          return (
            <Grid item key={i} md={3} xs={6}>
              <Link href={`/posteredit/${el.id}`} underline='none'>
                <Card elevation={2}>
                  <CardMedia
                    src={`http://52.23.195.42:8000/api/files/posters/${el.id}/${el.image}`}
                    component='img'
                    alt='image'
                    sx={{ width: '100%', height: '100%' }}
                  />
                </Card>
              </Link>
              <Typography
                variant='body1'
                component='p'
                sx={{
                  marginTop: 1,
                  fontSize: { md: '1.2rem', xs: '1rem' },
                  color: 'gray',
                }}
              >
                {el.title}
              </Typography>
              <Typography
                variant='subtitle2'
                component='p'
                sx={{ fontSize: { md: '0.7rem', xs: '0.6rem' } }}
              >
                {el.designation}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default QuotesPage;
