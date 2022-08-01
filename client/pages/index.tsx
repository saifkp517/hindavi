import type { NextPage } from 'next';
import axios from 'axios';
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
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useRef, useState } from 'react';

interface State {
  error: string;
  showPassword: boolean;
}

const Home: NextPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const state = useState<State>({
    error: '',
    showPassword: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      if (emailRef.current && passwordRef.current) {
        await axios
          .post('http://localhost:4000/signin', {
            email: emailRef.current.value,
            password: passwordRef.current.value,
          })
          .then((data: any) => console.log('data: ' + data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container
      maxWidth='sm'
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          placeSef: 'center center',
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
          Login
        </Typography>

        <Typography
          color='primary.light'
          variant='body1'
          component='p'
          marginTop={0.5}
          sx={{
            width: '100%',
            marginLeft: 0.5,
          }}
        >
          Please login to continue
        </Typography>
        <Box
          sx={{
            width: '100%',
            paddingX: 1,
            marginTop: 6,
          }}
        >
          <form onSubmit={submitHandler}>
            <FormControl fullWidth={true} variant='outlined'>
              <InputLabel htmlFor='email'>Email Address</InputLabel>
              <OutlinedInput
                id='email'
                label='email address'
                fullWidth={true}
                type='email'
                inputProps={{
                  maxLength: 25,
                }}
                ref={emailRef}
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
              <InputLabel htmlFor='password'>Password</InputLabel>
              <OutlinedInput
                id='password'
                label='Password'
                fullWidth={true}
                type={showPassword ? 'text' : 'password'}
                ref={passwordRef}
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
            <Typography align='right' sx={{ marginTop: 1 }}>
              <Link
                href='/forgotpassword'
                color='secondary.light'
                sx={{
                  textDecoration: 'none',
                }}
              >
                forgot password
              </Link>
            </Typography>
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
              Login
            </Button>
          </form>
        </Box>
      </Box>
      <Typography
        variant='body1'
        component='p'
        sx={{ placeSelf: 'end center', marginTop: 6 }}
      >
        New user?
        <Link href='/signup' sx={{ marginLeft: 1, textDecoration: 'none' }}>
          Sign up
        </Link>
      </Typography>
    </Container>
  );
};

export default Home;
