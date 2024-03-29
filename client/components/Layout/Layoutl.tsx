import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import CurrencyRupee from '@mui/icons-material/CurrencyRupee';
import Menu from '@mui/icons-material/Menu';
import Notifications from '@mui/icons-material/Notifications';
import Share from '@mui/icons-material/Share';
import AppBar from '@mui/material/AppBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import { Navbar } from '../../components/Navbar/Navbar';
import { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

interface Props {
  children?: JSX.Element;
}

export const Layout: NextPage<Props> = ({ children }) => {
  const router = useRouter();
  const [value, setValue] = useState('Home');

  return (
    <>
      <Navbar />
      <AppBar position='static' color='primary' className='menu'>
        <Toolbar
          sx={{
            display: 'flex',
            gap: 4,
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
              <NextLink href='/home'>
                <Link
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  Home
                </Link>
              </NextLink>
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
              <NextLink href='/recharge'>
                <Link
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  Recharge
                </Link>
              </NextLink>
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
              <NextLink href='/refer'>
                <Link
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  Refer and Earn
                </Link>
              </NextLink>
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
              <NextLink href='/notifications'>
                <Link
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  Notifications
                </Link>
              </NextLink>
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
            <ShoppingCart sx={{ color: '#fff' }} />
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
              <NextLink href='/cart'>
                <Link
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  Cart
                </Link>
              </NextLink>
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
            width: '100%',
            paddingY: '1.6rem',
          }}
        >
          <BottomNavigationAction
            label='Home'
            value='Home'
            icon={<HomeIcon />}
            onClick={() => router.push('/home')}
          />
          <BottomNavigationAction
            label='Recharge'
            value='Recharge'
            onClick={() => router.push('/recharge')}
            icon={<CurrencyRupee />}
          />
          <BottomNavigationAction
            label='Cart'
            value='Cart'
            icon={<ShoppingCart />}
            onClick={() => router.push('/cart')}
          />
          <BottomNavigationAction
            label='Notifications'
            value='Notifications'
            onClick={() => router.push('/notifications')}
            icon={<Notifications />}
          />
          <BottomNavigationAction
            label='User'
            value='User'
            onClick={() => router.push('/user')}
            icon={<AccountCircle />}
          />
        </BottomNavigation>
      </Paper>
      {children}
      <Box sx={{ height: { xs: '3.5rem', md: 0 } }}></Box>
    </>
  );
};
