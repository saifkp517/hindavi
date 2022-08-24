import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import CurrencyRupee from '@mui/icons-material/CurrencyRupee';
import Menu from '@mui/icons-material/Menu';
import Notifications from '@mui/icons-material/Notifications';
import Share from '@mui/icons-material/Share';
import AppBar from '@mui/material/AppBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { StaticImageData } from 'next/image';
import { useState } from 'react';
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

export interface Design {
  img: StaticImageData;
  title: string;
  designation: string;
}

interface CategoriesType {
  svg: any;
  title: string;
  color: string;
}

const Home: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const ImagesArr: Design[] = [
    {
      title: 'स्वातंत्र्यदिनाच्या शुभेच्छा',
      designation: 'By Hindavi Graphics',
      img: Img1,
    },
    {
      title: 'हिंदवी ग्राफिक्स',
      designation: 'By Hindavi Graphics',
      img: Img2,
    },
    {
      title: 'वापरण्यास सोपे',
      designation: 'By Hindavi Graphics',
      img: Img3,
    },
    {
      title: 'एकाच दिनविशेष',
      designation: 'By Hindavi Graphics',
      img: Img4,
    },
    {
      title: 'आमची वैशिष्ट्ये',
      designation: 'By Hindavi Graphics',
      img: Img5,
    },
    {
      title: 'स्वातंत्र्यदिनाच्या शुभेच्छा',
      designation: 'By Hindavi Graphics',
      img: Img6,
    },
    {
      title: 'हिंदवी ग्राफिक्स',
      designation: 'By Hindavi Graphics',
      img: Img7,
    },
    {
      title: 'वापरण्यास सोपे',
      designation: 'By Hindavi Graphics',
      img: Img8,
    },
    {
      title: 'एकाच दिनविशेष',
      designation: 'By Hindavi Graphics',
      img: Img9,
    },
    {
      title: 'आमची वैशिष्ट्ये',
      designation: 'By Hindavi Graphics',
      img: Img10,
    },
    {
      title: 'स्वातंत्र्यदिनाच्या शुभेच्छा',
      designation: 'By Hindavi Graphics',
      img: Img11,
    },
    {
      title: 'हिंदवी ग्राफिक्स',
      designation: 'By Hindavi Graphics',
      img: Img12,
    },
    {
      title: 'वापरण्यास सोपे',
      designation: 'By Hindavi Graphics',
      img: Img13,
    },
    {
      title: 'एकाच दिनविशेष',
      designation: 'By Hindavi Graphics',
      img: Img14,
    },
    {
      title: 'आमची वैशिष्ट्ये',
      designation: 'By Hindavi Graphics',
      img: Img15,
    },
    {
      title: 'आमची वैशिष्ट्ये',
      designation: 'By Hindavi Graphics',
      img: Img16,
    },
  ];

  const Categories: CategoriesType[] = [
    { svg: <Namaste />, title: 'Thank You', color: '#F2994A' },
    {
      svg: <Shoewear />,
      title: 'Footwear',
      color: '#EB5757',
    },
    { svg: <Jewelry />, title: 'Jewelry', color: '#F2C94C' },
    { svg: <RealEstate />, title: 'Real Estate', color: '#219653' },
    { svg: <Bakery />, title: 'Bakery', color: '#2D9CDB' },
    { svg: <Motorcycle />, title: 'Motorcycle', color: '#BB6BD9' },
  ];

  return (
    <main>
      <Box sx={{ flexGrow: 1 }} color='secondary.light'>
        <Navbar />
        <AppBar position='static' color='primary' className='menu'>
          <Toolbar
            sx={{
              display: 'flex',
              gap: 6,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Menu sx={{ color: '#fff' }} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <HomeIcon sx={{ color: '#fff' }} />
              <Typography
                variant='h6'
                component='p'
                sx={{
                  textAlign: 'center',
                  marginRight: 2,
                  lineHeight: 1,
                  fontSize: 21,
                }}
              >
                <Link href='#' sx={{ color: '#fff', textDecoration: 'none' }}>
                  Home
                </Link>
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <CurrencyRupee sx={{ color: '#fff' }} />
              <Typography
                variant='h6'
                component='p'
                sx={{
                  textAlign: 'center',
                  marginRight: 2,
                  lineHeight: 1,
                  fontSize: 21,
                }}
              >
                <Link href='#' sx={{ color: '#fff', textDecoration: 'none' }}>
                  Recharge
                </Link>
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Share sx={{ color: '#fff' }} />
              <Typography
                variant='h6'
                component='p'
                sx={{
                  textAlign: 'center',
                  marginRight: 2,
                  lineHeight: 1,
                  fontSize: 21,
                }}
              >
                <Link href='#' sx={{ color: '#fff', textDecoration: 'none' }}>
                  Refer and Earn
                </Link>
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Notifications sx={{ color: '#fff' }} />
              <Typography
                variant='h6'
                component='p'
                sx={{
                  textAlign: 'center',
                  marginRight: 2,
                  lineHeight: 1,
                  fontSize: 21,
                }}
              >
                <Link href='#' sx={{ color: '#fff', textDecoration: 'none' }}>
                  Notifications
                </Link>
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Paper
          sx={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            boxShadow: '0 -1px 2px rgba(0, 0, 0, 0.2)',
            zIndex: 100,
          }}
        >
          <BottomNavigation
            className='bottomNav'
            showLabels={false}
            value={value}
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
            sx={{
              paddingY: '1.6rem',
            }}
          >
            <BottomNavigationAction label='Home' icon={<HomeIcon />} />
            <BottomNavigationAction label='Recharge' icon={<CurrencyRupee />} />
            <BottomNavigationAction label='Refer' icon={<Share />} />
            <BottomNavigationAction
              label='Notifications'
              icon={<Notifications />}
            />
            <BottomNavigationAction label='User' icon={<AccountCircle />} />
          </BottomNavigation>
        </Paper>
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
              <Link href='#' underline='none' color='unset'>
                Show All
              </Link>
            </Typography>
          </Box>
          <Grid
            container
            spacing={{ md: 8, xs: 4 }}
            sx={{ paddingTop: 2, paddingX: { md: 2, xs: 0 } }}
          >
            {Categories.map((el, i) => (
              <Grid
                item
                key={i}
                md={2}
                xs={3}
                sx={{
                  display: i > 3 ? { xs: 'none', md: 'block' } : null,
                }}
              >
                <Link href={`/posteredit/${i}`} underline='none'>
                  <Paper
                    elevation={2}
                    sx={{
                      padding: { md: 4, xs: 2 },
                      borderRadius: '50%',
                      fill: 'white',
                      backgroundColor: el.color,
                    }}
                  >
                    {el.svg}
                  </Paper>
                </Link>
                <Typography
                  variant='body1'
                  component='p'
                  sx={{
                    marginTop: 1,
                    textAlign: 'center',
                    fontSize: { md: '1.2rem', xs: '0.6rem' },
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
        <PosterCards
          heading='Today'
          list={ImagesArr.filter((_, i) => i < 4)}
          inc={0} //TODO only static
        />
        {/*
         Stories 
        */}
        <PosterCards
          heading='Stories'
          list={ImagesArr.filter((_, i) => i >= 4 && i < 8)}
          inc={4} //TODO only static
        />
        {/*
         Quotes
        */}
        <PosterCards
          heading='Quotes'
          list={ImagesArr.filter((_, i) => i >= 8 && i < 12)}
          inc={8} //TODO only static
        />
        {/*
         Tomorrow
        */}
        <PosterCards
          heading='Tomorrow'
          list={ImagesArr.filter((_, i) => i >= 12 && i < 16)}
          inc={12} //TODO only static
        />
        <Box sx={{ height: { xs: '3rem', md: 0 } }}></Box>
      </Box>
    </main>
  );
};

export default Home;
