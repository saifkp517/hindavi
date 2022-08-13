import {
  AccountCircle,
  CurrencyRupee,
  Home as HomeIcon,
  Menu,
  Notifications,
  Search,
  Share,
} from '@mui/icons-material';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '../public/logo.png';
import { useState } from 'react';

const Home: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  return (
    <main>
      <Box sx={{ flexGrow: 1 }} color='secondary.light'>
        <AppBar position='static' color='inherit'>
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
        <BottomNavigation
          className='bottomNav'
          showLabels={false}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            paddingY: '1.8rem',
            backgroundColor: '#52428B',
          }}
        >
          <BottomNavigationAction
            sx={{ color: '#fff' }}
            label='Home'
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            sx={{ color: '#fff' }}
            label='Recharge'
            icon={<CurrencyRupee />}
          />
          <BottomNavigationAction
            sx={{ color: '#fff' }}
            label='Refer'
            icon={<Share />}
          />
          <BottomNavigationAction
            sx={{ color: '#fff' }}
            label='Notifications'
            icon={<Notifications />}
          />
          <BottomNavigationAction
            sx={{ color: '#fff' }}
            label='User'
            icon={<AccountCircle />}
          />
        </BottomNavigation>
      </Box>
    </main>
  );
};

export default Home;
