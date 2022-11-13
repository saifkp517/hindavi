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
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Img18,
  Img1,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
} from '../public/index';
import { PosterCards } from '../components/PosterCards/PosterCards';
import { Navbar } from '../components/Navbar/Navbar';
import { Namaste } from '../public/svg/Namaste';
import { Shoewear } from '../public/svg/Shoewear';
import { Jewelry } from '../public/svg/Jewelry';
import { RealEstate } from '../public/svg/RealEstate';
import { Bakery } from '../public/svg/Bakery';
import { Motorcycle } from '../public/svg/Motorcycle';
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

  // const ImagesArr: Design[] = [
  //   // {
  //   //   title: 'स्वातंत्र्यदिनाच्या शुभेच्छा',
  //   //   designation: 'By Hindavi Graphics',
  //   //   img: 'https://hindavidatabucket.s3.ap-south-1.amazonaws.com/next-s3-uploads/2010ab96-eb96-4d51-8b38-6b886213bf5d/first%2520ace.png',
  //   //   // https://hindavidatabucket.s3.ap-south-1.amazonaws.com/next-s3-uploads/2010ab96-eb96-4d51-8b38-6b886213bf5d/first%2520ace.png
  //   // },
  //   {
  //     title: 'हिंदवी ग्राफिक्स',
  //     designation: 'By Hindavi Graphics',
  //     img: Img2,
  //   },
  //   {
  //     title: 'वापरण्यास सोपे',
  //     designation: 'By Hindavi Graphics',
  //     img: Img3,
  //   },
  //   {
  //     title: 'एकाच दिनविशेष',
  //     designation: 'By Hindavi Graphics',
  //     img: Img4,
  //   },
  //   {
  //     title: 'आमची वैशिष्ट्ये',
  //     designation: 'By Hindavi Graphics',
  //     img: Img5,
  //   },
  //   {
  //     title: 'स्वातंत्र्यदिनाच्या शुभेच्छा',
  //     designation: 'By Hindavi Graphics',
  //     img: Img6,
  //   },
  //   {
  //     title: 'हिंदवी ग्राफिक्स',
  //     designation: 'By Hindavi Graphics',
  //     img: Img7,
  //   },
  //   {
  //     title: 'वापरण्यास सोपे',
  //     designation: 'By Hindavi Graphics',
  //     img: Img8,
  //   },
  //   {
  //     title: 'एकाच दिनविशेष',
  //     designation: 'By Hindavi Graphics',
  //     img: Img9,
  //   },
  //   {
  //     title: 'आमची वैशिष्ट्ये',
  //     designation: 'By Hindavi Graphics',
  //     img: Img10,
  //   },
  //   {
  //     title: 'स्वातंत्र्यदिनाच्या शुभेच्छा',
  //     designation: 'By Hindavi Graphics',
  //     img: Img11,
  //   },
  //   {
  //     title: 'हिंदवी ग्राफिक्स',
  //     designation: 'By Hindavi Graphics',
  //     img: Img12,
  //   },
  //   {
  //     title: 'वापरण्यास सोपे',
  //     designation: 'By Hindavi Graphics',
  //     img: Img13,
  //   },
  //   {
  //     title: 'एकाच दिनविशेष',
  //     designation: 'By Hindavi Graphics',
  //     img: Img14,
  //   },
  //   {
  //     title: 'आमची वैशिष्ट्ये',
  //     designation: 'By Hindavi Graphics',
  //     img: Img15,
  //   },
  //   {
  //     title: 'आमची वैशिष्ट्ये',
  //     designation: 'By Hindavi Graphics',
  //     img: Img16,
  //   },
  // ];

  // const Categories: CategoriesType[] = [
  //   { svg: <Namaste />, title: 'Thank You', color: '#F2994A' },
  //   {
  //     svg: <Shoewear />,
  //     title: 'Footwear',
  //     color: '#EB5757',
  //   },
  //   { svg: <Jewelry />, title: 'Jewelry', color: '#F2C94C' },
  //   { svg: <RealEstate />, title: 'Real Estate', color: '#219653' },
  //   { svg: <Bakery />, title: 'Bakery', color: '#2D9CDB' },
  //   { svg: <Motorcycle />, title: 'Motorcycle', color: '#BB6BD9' },
  // ];

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
                    <Link href={`/posteredit/${i}`} underline='none'>
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
              <Link href='#' underline='none' color='unset'>
                Show All
              </Link>
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ paddingY: 1 }}>
            {today.map((el, i) => {
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
              <Link href='#' underline='none' color='unset'>
                Show All
              </Link>
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ paddingY: 1 }}>
            {stories.map((el, i) => {
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
              <Link href='#' underline='none' color='unset'>
                Show All
              </Link>
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ paddingY: 1 }}>
            {quotes.map((el, i) => {
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
              <Link href='#' underline='none' color='unset'>
                Show All
              </Link>
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ paddingY: 1 }}>
            {tomorrow.map((el, i) => {
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