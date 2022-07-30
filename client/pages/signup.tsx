import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import {
  FormControl,
  InputAdornment,
  Typography,
  Box,
  IconButton,
  Button,
  InputLabel,
  OutlinedInput,
  Link,
} from '@mui/material';
import {
  AccountCircle,
  Email,
  Lock,
  Phone,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useState } from 'react';

const Home: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container
      maxWidth='sm'
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Typography
          color='primary'
          variant='h3'
          component='h1'
          sx={{
            width: '100%',
            fontWeight: 700,
          }}
        >
          Sign up
        </Typography>

        <Typography
          color='primary.light'
          variant='body1'
          component='p'
          marginTop={0.5}
          sx={{
            width: '100%',
            marginLeft: 1,
          }}
        >
          Please sign up to continue
        </Typography>
        <Box
          sx={{
            width: '100%',
            paddingX: 1,
            marginTop: 2,
          }}
        >
          <form>
            <FormControl
              fullWidth={true}
              variant='outlined'
              sx={{
                marginTop: 2,
              }}
            >
              <InputLabel htmlFor='username'>Username</InputLabel>
              <OutlinedInput
                id='username'
                label='Username'
                fullWidth={true}
                startAdornment={
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              fullWidth={true}
              variant='outlined'
              sx={{
                marginTop: 2,
              }}
            >
              <InputLabel htmlFor='email'>Email Address</InputLabel>
              <OutlinedInput
                id='email'
                type='email'
                label='email address'
                fullWidth={true}
                startAdornment={
                  <InputAdornment position='start'>
                    <Email />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              fullWidth={true}
              variant='outlined'
              sx={{
                marginTop: 2,
              }}
            >
              <InputLabel htmlFor='phone'>Phone number</InputLabel>
              <OutlinedInput
                id='phone'
                label='phone number'
                fullWidth={true}
                startAdornment={
                  <InputAdornment position='start'>
                    <Phone />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              fullWidth={true}
              variant='outlined'
              sx={{
                marginTop: 2,
              }}
            >
              <InputLabel htmlFor='password'>Password</InputLabel>
              <OutlinedInput
                id='password'
                label='Password'
                fullWidth={true}
                type={showPassword ? 'text' : 'password'}
                startAdornment={
                  <InputAdornment position='start'>
                    <Lock />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              fullWidth={true}
              variant='outlined'
              sx={{
                marginTop: 2,
              }}
            >
              <InputLabel htmlFor='confirm'>Confirm Password</InputLabel>
              <OutlinedInput
                id='confirm'
                label='confirm password'
                fullWidth={true}
                startAdornment={
                  <InputAdornment position='start'>
                    <Lock />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              type='submit'
              fullWidth={true}
              variant='contained'
              sx={{
                color: '#fff',
                fontWeight: '700',
                marginTop: 4,
                paddingY: 1,
              }}
            >
              Sign up
            </Button>
          </form>
        </Box>
      </Box>
      <Typography variant='body1' component='p'>
        Already have an account
        <Link href='/' sx={{ marginLeft: 1, textDecoration: 'none' }}>
          Login
        </Link>
      </Typography>
    </Container>
  );
};

export default Home;
