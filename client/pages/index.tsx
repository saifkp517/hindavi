import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import IconButton from '@mui/material/IconButton';
import PocketBase from 'pocketbase';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Link from '@mui/material/Link';
import Email from '@mui/icons-material/Email';
import Lock from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ErrorDisplay } from '../components/ErrorDisplay/ErrorDisplay';

interface State {
  error: string;
  showError: boolean;
  showPassword: boolean;
}

const Home: NextPage = () => {
  const client = new PocketBase('http://127.0.0.1:8090');

  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [state, setState] = useState<State>({
    error: '',
    showError: false,
    showPassword: false,
  });

  const [err, setErr] = useState('');

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (emailRef.current && passwordRef.current) {
        // await axios
        //   .post('http://54.242.34.13:4000/signin', {
        //     email: emailRef.current.value,
        //     password: passwordRef.current.value,
        //   })
        //   .then((data: any) => {
        //     setCookie('key', data.data.token);
        //     router.push('/home');
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     setErr(err.response.data);
        //   });

        const authData = await client.users.authViaEmail(
          emailRef.current.value,
          passwordRef.current.value
        );

        //console.log(authData.user.profile.username);

        console.log(client.authStore.isValid);
        console.log(authData);

        // after the above you can also access the auth data from the authStore

        if (client.authStore.isValid == true) {
          router.push('/home');
        }
      }
    } catch (err: any) {
      if (err.message == 'Failed to authenticate.') {
        err.message = 'Incorrect Email or Password';
      }
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
            <p>{err}</p>
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
      <ErrorDisplay
        open={state.showError}
        error={state.error}
        setError={(value: boolean) => setState({ ...state, showError: value })}
        color='error'
      />
    </Container>
  );
};

export default Home;
