import { GetServerSideProps, NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { PosterType } from '../home';

type Props = {
  id: string;
};

const CategoryPoster: NextPage<Props> = ({ id }) => {
  const [fields, setFields] = useState<string[]>([]);
  const [posters, setPosters] = useState<PosterType[]>([]);

  useEffect(() => {
    if (id) {
      (async () => {
        const result: PosterType = await axios
          .get(
            `http://52.23.195.42:8000/api/collections/categories/records/${id}`
          )
          .then((res) => res.data);
        setFields(result.field);
      })();
    }
  }, []);

  useEffect(() => {
    getPosters();
  }, [fields]);

  const getPosters = async () => {
    const postersRes = fields.map(async (el) => {
      return await axios
        .get(`http://52.23.195.42:8000/api/collections/posters/records/${el}`)
        .then((res) => res.data);
    });
    setPosters(await Promise.all(postersRes));
  };

  return (
    <Container maxWidth='xl'>
      <Typography variant='h6' sx={{ marginY: 2 }}>
        Category
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

export default CategoryPoster;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  return {
    props: {
      id,
    },
  };
};
