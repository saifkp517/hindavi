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
  Paper,
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
            onChange={(event, newValue) => {
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
      </Box>
    </main>
  );
};

export default Home;
