import { NextPage } from 'next';
import { CategoryType, PosterType } from '../../pages/home';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
  heading: string;
  list: PosterType[];
  limit: number;
  showAll?: boolean;
  categories?: CategoryType[];
}

export const PosterCards: NextPage<Props> = ({
  heading,
  list,
  categories,
  limit,
  showAll,
}) => {
  const router = useRouter();

  const posters = () => {
    if (categories) {
      return categories
        .filter((_: CategoryType, i: number) => i < limit)
        .map((el: CategoryType, i: number) => (
          <Grid
            item
            key={el.id}
            md={2}
            xs={3}
            sx={{
              display: i > 3 ? { xs: 'none', md: 'block' } : null,
            }}
          >
            <Box sx={{ marginTop: 2, marginBottom: 1 }}>
              <Paper
                elevation={2}
                onClick={() => router.push(`/posteredit/${el.id}`)}
                sx={{
                  width: { md: '6rem', xs: '3.5rem' },
                  height: { md: '6rem', xs: '3.5rem' },
                  borderRadius: '50%',
                  padding: { md: 3, xs: 2 },
                  marginX: 'auto',
                  fill: 'white',
                  backgroundColor: 'grey',
                }}
              >
                <img
                  src={`https://hindavi-pocketbase.herokuapp.com/api/files/categories/${el.id}/${el.icon}`}
                  alt='category image'
                  style={{ width: '100%', height: '100%' }}
                />
              </Paper>
            </Box>
            <Typography
              variant='body1'
              component='p'
              sx={{
                textAlign: 'center',
                fontSize: { md: '1.2rem', xs: '1rem' },
                color: 'gray',
              }}
            >
              {el.title}
            </Typography>
          </Grid>
        ));
    } else {
      return list
        .filter((_: PosterType, i: number) => i < limit)
        .map((el: PosterType, i: number) => {
          const [loading, setLoading] = useState(true);
          return (
            <Grid item key={i} md={3} xs={6}>
              <Card
                elevation={2}
                onClick={() => router.push(`/posteredit/${el.id}`)}
              >
                {loading && (
                  <Skeleton
                    variant='rectangular'
                    sx={{ height: '100%', aspectRatio: '1/1' }}
                  />
                )}
                <CardMedia
                  src={`https://hindavi-pocketbase.herokuapp.com/api/files/posters/${el.id}/${el.image}`}
                  component='img'
                  alt='image'
                  onLoad={() => setLoading(false)}
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: !loading ? 'block' : 'none',
                  }}
                />
              </Card>
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
        });
    }
  };

  return (
    <Box sx={{ paddingTop: 1 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h6' component='p' sx={{ color: 'black' }}>
          {heading}
        </Typography>
        {!showAll ? (
          <Typography
            variant='subtitle2'
            component='p'
            sx={{ fontSize: { md: '0.9rem', xs: '0.8rem' } }}
          >
            <Link
              href={`/${heading.toLowerCase()}`}
              underline='none'
              color='unset'
            >
              Show All
            </Link>
          </Typography>
        ) : null}
      </Box>
      <Grid container spacing={2} sx={{ paddingY: 1 }}>
        {posters()}
      </Grid>
    </Box>
  );
};
