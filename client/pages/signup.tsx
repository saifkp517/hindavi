import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
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
  Snackbar,
} from '@mui/material';
import {
  AccountCircle,
  Email,
  Lock,
  Phone,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';

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

  const Register = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(
        usernameRef.current,
        passwordRef.current,
        confirmPasswordRef.current,
        emailRef.current,
        phoneRef.current
      );
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
          // await axios
          //   .post('http://localhost:4000/signup/null', {
          //     username: usernameRef.current.value,
          //     email: emailRef.current.value,
          //     password: passwordRef.current.value,
          //     phoneno: phoneRef.current.value,
          //   })
          //   .then((data) => {
          //     console.log(data);
          //   });
          router.push('/emailverify');
        }
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
              <InputLabel htmlFor='username'>Username</InputLabel>
              <OutlinedInput
                id='username'
                label='Username'
                fullWidth={true}
                ref={usernameRef}
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
                ref={emailRef}
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
                ref={phoneRef}
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
                ref={passwordRef}
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
                ref={confirmPasswordRef}
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
        message='Note archived'
      />
    </Container>
  );
};

export default Home;
