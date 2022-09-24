import { NextPage } from 'next';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const Navbar: NextPage = () => {
  return (
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
        <Link href='/user' underline='none'>
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
        </Link>
      </Toolbar>
    </AppBar>
  );
};
