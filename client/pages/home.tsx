import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { StaticImageData } from 'next/image';
import axios from 'axios';
import Card from '@mui/material/Card';
import { useEffect, useState } from 'react';
import CardMedia from '@mui/material/CardMedia';

export interface Design {
  img: StaticImageData | string;
  title: string;
  designation: string;
}

interface CategoriesType {
  svg: any;
  title: string;
  color: string;
}

export type CategoryType = {
  title: string;
  id: string;
  icon: string;
};

export type PosterType = {
  collectionId: string;
  id: string;
  title: string;
  designation: string;
  image: string;
  field: string[];
};

const Home: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [today, setToday] = useState<PosterType[]>([]);
  const [stories, setStories] = useState<PosterType[]>([]);
  const [quotes, setQuotes] = useState<PosterType[]>([]);
  const [tomorrow, setTomorrow] = useState<PosterType[]>([]);

  useEffect(() => {
    getCategories();
    (async () => {
      try {
        const todayRes = await axios
          .get('http://52.23.195.42:8000/api/collections/today/records')
          .then((res) => res.data);
        const todayPosters = await getPosters(todayRes.items);
        setToday(todayPosters);
        const storyResult = await axios
          .get('http://52.23.195.42:8000/api/collections/stories/records')
          .then((res) => res.data);
        const storyPosters = await getPosters(storyResult.items);
        setStories(storyPosters);
        const quotesResult = await axios
          .get('http://52.23.195.42:8000/api/collections/quotes/records')
          .then((res) => res.data);
        const quotePosters = await getPosters(quotesResult.items);
        setQuotes(quotePosters);
        const tomorrowResult = await axios
          .get('http://52.23.195.42:8000/api/collections/tomorrow/records')
          .then((res) => res.data);
        const tomorrowPosters = await getPosters(tomorrowResult.items);
        setTomorrow(tomorrowPosters);
      } catch (error: any) {
        console.log(error);
      }
    })();
  }, []);

  const getCategories = async () => {
    try {
      const result = await axios
        .get('http://52.23.195.42:8000/api/collections/categories/records')
        .then((res) => res.data);
      setCategories(result.items);
    } catch (error) {
      console.log(error);
    }
  };

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
    <main>
      <Box sx={{ flexGrow: 1 }} color='secondary.light'>
        {/* 
          Categories
        */}
        <Box sx={{ paddingX: 3, paddingTop: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant='h6' component='p' sx={{ color: 'black' }}>
              Categories
            </Typography>
            <Typography
              variant='subtitle2'
              component='p'
              sx={{ fontSize: { md: '0.9rem', xs: '0.8rem' } }}
            >
              <Link href='/categories' underline='none' color='unset'>
                Show All
              </Link>
            </Typography>
          </Box>
          <Grid container spacing={0} sx={{ paddingX: { md: 1, xs: 0 } }}>
            {categories
              .filter((el, i) => i < 6)
              .map((el, i) => (
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
                    <Link href={`/categories/${el.id}`} underline='none'>
                      <Paper
                        elevation={2}
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
                          src={`http://52.23.195.42:8000/api/files/categories/${el.id}/${el.icon}`}
                          alt='category image'
                          style={{ width: '100%', height: '100%' }}
                        />
                      </Paper>
                    </Link>
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
              ))}
          </Grid>
        </Box>
        {/* 
          Today
        */}
        <Box sx={{ paddingX: 3, paddingTop: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant='h6' component='p' sx={{ color: 'black' }}>
              Today
            </Typography>
            <Typography
              variant='subtitle2'
              component='p'
              sx={{ fontSize: { md: '0.9rem', xs: '0.8rem' } }}
            >
              <Link href='/today' underline='none' color='unset'>
                Show All
              </Link>
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ paddingY: 1 }}>
            {today
              .filter((_, i) => i < 4)
              .map((el, i) => {
                return (
                  <Grid
                    item
                    key={i}
                    md={3}
                    xs={6}
                    sx={{
                      display: i > 1 ? { xs: 'none', md: 'block' } : null,
                    }}
                  >
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
        </Box>
        {/*
         Stories 
        */}
        <Box sx={{ paddingX: 3, paddingTop: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant='h6' component='p' sx={{ color: 'black' }}>
              Stories
            </Typography>
            <Typography
              variant='subtitle2'
              component='p'
              sx={{ fontSize: { md: '0.9rem', xs: '0.8rem' } }}
            >
              <Link href='/stories' underline='none' color='unset'>
                Show All
              </Link>
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ paddingY: 1 }}>
            {stories
              .filter((_, i) => i < 4)
              .map((el, i) => {
                return (
                  <Grid
                    item
                    key={i}
                    md={3}
                    xs={6}
                    sx={{
                      display: i > 1 ? { xs: 'none', md: 'block' } : null,
                    }}
                  >
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
        </Box>
        {/*
         Quotes
        */}
        <Box sx={{ paddingX: 3, paddingTop: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant='h6' component='p' sx={{ color: 'black' }}>
              Quotes
            </Typography>
            <Typography
              variant='subtitle2'
              component='p'
              sx={{ fontSize: { md: '0.9rem', xs: '0.8rem' } }}
            >
              <Link href='/quotes' underline='none' color='unset'>
                Show All
              </Link>
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ paddingY: 1 }}>
            {quotes
              .filter((_, i) => i < 4)
              .map((el, i) => {
                return (
                  <Grid
                    item
                    key={i}
                    md={3}
                    xs={6}
                    sx={{
                      display: i > 1 ? { xs: 'none', md: 'block' } : null,
                    }}
                  >
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
        </Box>
        {/*
         Tomorrow
        */}
        <Box sx={{ paddingX: 3, paddingTop: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant='h6' component='p' sx={{ color: 'black' }}>
              Tomorrow
            </Typography>
            <Typography
              variant='subtitle2'
              component='p'
              sx={{ fontSize: { md: '0.9rem', xs: '0.8rem' } }}
            >
              <Link href='/tomorrow' underline='none' color='unset'>
                Show All
              </Link>
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ paddingY: 1 }}>
            {tomorrow
              .filter((_, i) => i < 4)
              .map((el, i) => {
                return (
                  <Grid
                    item
                    key={i}
                    md={3}
                    xs={6}
                    sx={{
                      display: i > 1 ? { xs: 'none', md: 'block' } : null,
                    }}
                  >
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
        </Box>
      </Box>
    </main>
  );
};

export default Home;
