import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import CurrencyRupee from '@mui/icons-material/CurrencyRupee';
import Menu from '@mui/icons-material/Menu';
import Notifications from '@mui/icons-material/Notifications';
import Search from '@mui/icons-material/Search';
import Share from '@mui/icons-material/Share';
import AppBar from '@mui/material/AppBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import Card from '@mui/material/Card';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '../public/logo.png';
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

const Home: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const ImagesArr = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,
    Img18,
  ];

  return (
    <main>
      <Box sx={{ flexGrow: 1 }} color='secondary.light'>
        <AppBar
          position='static'
          color='inherit'
          sx={{
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Toolbar
            sx={{
              paddingY: 2,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <div className='logo'>
              <Image src={Logo} alt='logo' layout='responsive' />
            </div>
            <TextField
              id='search'
              className='search'
              placeholder='Search'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Search color='primary' />
                  </InputAdornment>
                ),
              }}
              sx={{
                marginX: 'auto',
                paddingY: 0,
              }}
              variant='outlined'
            />
            <Typography
              variant='h6'
              component='p'
              color='secondary'
              className='balance'
              sx={{ textAlign: 'center', lineHeight: 1 }}
            >
              Balance
              <Typography
                variant='body1'
                component='span'
                sx={{ flexGrow: 1, display: 'block' }}
              >
                250 coins
              </Typography>
            </Typography>
            <IconButton
              className='user'
              size='large'
              aria-label='account'
              sx={{
                marginLeft: 2,
              }}
            >
              <AccountCircle color='primary' fontSize='large' />
            </IconButton>
          </Toolbar>
        </AppBar>
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
        <Box sx={{ paddingX: 3, paddingTop: 1 }}>
          <Typography variant='h6' component='p'>
            Designs
          </Typography>
          <Grid container spacing={2} sx={{ paddingY: 1 }}>
            {ImagesArr.map((el, i) => (
              <Grid item key={i} xs={3}>
                <Link href={`/posteredit/${i}`}>
                  <Card elevation={2}>
                    <Image src={el} alt='img' layout='responsive' />
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </main>
  );
};

export default Home;
