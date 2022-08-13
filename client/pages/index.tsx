import type { NextPage } from 'next';
import axios from 'axios';
import Container from '@mui/material/Container';
import { setCookie } from 'cookies-next';
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
  Snackbar,
  Alert,
} from '@mui/material';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

interface State {
  error: string;
  showError: boolean;
  showPassword: boolean;
}

const Home: NextPage = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [state, setState] = useState<State>({
    error: '',
    showError: false,
    showPassword: false,
  });

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (emailRef.current && passwordRef.current) {
        await axios
          .post('http://localhost:4000/signin', {
            email: emailRef.current.value,
            password: passwordRef.current.value,
          })
          .then((data: any) => {
              setCookie('key', data.data.token);
              router.push('/DashBoard')
          })
          .catch(err => {
            console.log(err);
          });
      }
    } catch (err: any) {
      setState({ ...state, error: err.message, showError: true });
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
          color='secondary.light'
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
                inputRef={emailRef}
                required
                inputProps={{
                  minLength: 8,
                }}
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
                type={state.showPassword ? 'text' : 'password'}
                inputRef={passwordRef}
                required
                startAdornment={
                  <InputAdornment position='start'>
                    <Lock />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() =>
                        setState({
                          ...state,
                          showPassword: !state.showPassword,
                        })
                      }
                    >
                      {state.showPassword ? <VisibilityOff /> : <Visibility />}
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
      <Snackbar
        open={state.showError}
        autoHideDuration={6000}
        onClose={() => setState({ ...state, showError: false })}
      >
        <Alert
          severity='error'
          variant='filled'
          elevation={4}
          onClose={() => setState({ ...state, showError: false })}
        >
          {state.error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Home;
