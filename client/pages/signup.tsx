import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import Lock from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface State {
  showPassword: boolean;
  showError: boolean;
  error: string;
}

const Home: NextPage = () => {
  const router = useRouter();

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const [state, setState] = useState<State>({
    showPassword: false,
    showError: false,
    error: '',
  });

  const [id, setId] = useState('null');
  const [err, setErr] = useState('');

  const otp = Math.floor(100000 + Math.random() * 900000);

  const sendEmail = async () => {
    try {
      if (emailRef.current) {
        await axios
          .post('http://localhost:4000/email', {
            email: emailRef.current.value,
            otp: otp,
          })
          .then((data) => {
            console.log(data);
          })
          .catch((err) => console.log(err));
      }
    } catch (err: any) {
      console.log(err.message);
      setState({ ...state, error: err.message, showError: true });
    }
  };

  const Register = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (
        usernameRef.current &&
        passwordRef.current &&
        confirmPasswordRef.current &&
        emailRef.current &&
        phoneRef.current
      ) {
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
          console.log('error');
          setState({
            ...state,
            error: "Passwords don't match",
            showError: true,
          });
        } else {
          setCookie('otp', otp);
          setCookie('userref', emailRef.current.value);

          const data = await axios.post(`http://localhost:4000/signup/${id}`, {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            phoneno: phoneRef.current.value,
          });
          try {
            if (data) {
              console.log(data);
              await sendEmail();
              router.push('/emailverify');
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    } catch (err: any) {
      console.log(err);
      setErr(err.response.data);
      setState({ ...state, error: err.message, showError: true });
    }
  }

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
          color='secondary.light'
          variant='body1'
          component='p'
          marginTop={0.5}
          sx={{
            width: '100%',
            marginLeft: 0.5,
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
          <form onSubmit={Register}>
            <FormControl
              fullWidth={true}
              variant='outlined'
              sx={{
                marginTop: 2,
              }}
            >
              <p color='red'>{err}</p>
              <InputLabel htmlFor='username'>Username</InputLabel>
              <OutlinedInput
                id='username'
                label='Username'
                fullWidth={true}
                inputRef={usernameRef}
                inputProps={{
                  maxLength: 25,
                }}
                required={true}
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
                inputRef={emailRef}
                required
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
                inputRef={phoneRef}
                inputProps={{
                  minLength: 10,
                }}
                required
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
                inputRef={passwordRef}
                required
                inputProps={{
                  minLength: 8,
                }}
                type={state.showPassword ? 'text' : 'password'}
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
                inputRef={confirmPasswordRef}
                required
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
      <Typography
        variant='body1'
        component='p'
        sx={{ placeSelf: 'end center', marginTop: 6 }}
      >
        Already have an account
        <Link href='/' sx={{ marginLeft: 1, textDecoration: 'none' }}>
          Login
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
