import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import Lock from '@mui/icons-material/Lock';
import Upload from '@mui/icons-material/Upload';
import HomeIcon from '@mui/icons-material/Home';
import {
  InputFields,
  InputFieldType,
} from '../components/InputFields/InputFields';

export interface State {
  showPassword: boolean;
  showError: boolean;
  error: string;
  usernameValue?: string;
  emailValue?: string;
  phoneValue?: string;
  addressValue?: string;
  passwordValue?: string;
}

const Home: NextPage = () => {
  const router = useRouter();

  const usernamereference = useRef<HTMLInputElement>(null);
  const emailreference = useRef<HTMLInputElement>(null);
  const addressreference = useRef<HTMLInputElement>(null);
  const passwordreference = useRef<HTMLInputElement>(null);
  const confirmPasswordreference = useRef<HTMLInputElement>(null);
  const phonereference = useRef<HTMLInputElement>(null);

  const [state, setState] = useState<State>({
    showPassword: false,
    showError: false,
    error: '',
  });

  const [id, setId] = useState('null');
  const [err, setErr] = useState('');

  const fieldsArr: InputFieldType[] = [
    {
      icon: <AccountCircle />,
      label: 'Username',
      id: 'username',
      type: 'text',
      inputProps: {
        maxLength: 25,
      },
      reference: usernamereference,
    },
    {
      icon: <Email />,
      label: 'Email Address',
      id: 'email',
      type: 'email',
      inputProps: {},
      reference: emailreference,
    },
    {
      icon: <Phone />,
      label: 'Phone number',
      id: 'phone',
      type: 'number',
      inputProps: {
        minLength: 10,
      },
      reference: phonereference,
    },
    {
      icon: <HomeIcon />,
      label: 'Address',
      id: 'address',
      type: 'text',
      inputProps: {},
      reference: addressreference,
    },
    {
      icon: <Lock />,
      label: 'Password',
      id: 'password',
      type: '',
      inputProps: {
        minLength: 8,
      },
      reference: passwordreference,
      displayVisibility: true,
      state,
      setState,
    },
    {
      icon: <Lock />,
      label: 'Confirm Password',
      id: 'confirm-password',
      type: 'text',
      inputProps: {
        minLength: 8,
      },
      reference: confirmPasswordreference,
    },
  ];

  const otp = Math.floor(100000 + Math.random() * 900000);

  const sendEmail = async () => {
    try {
      if (emailreference.current) {
        await axios
          .post('http://localhost:4000/email', {
            email: emailreference.current.value,
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
        usernamereference.current &&
        passwordreference.current &&
        confirmPasswordreference.current &&
        emailreference.current &&
        phonereference.current
      ) {
        if (
          passwordreference.current.value !==
          confirmPasswordreference.current.value
        ) {
          console.log('error');
          setState({
            ...state,
            error: "Passwords don't match",
            showError: true,
          });
        } else {
          setCookie('otp', otp);
          setCookie('userreference', emailreference.current.value);

          const data = await axios.post(`http://localhost:4000/signup/${id}`, {
            username: usernamereference.current.value,
            email: emailreference.current.value,
            password: passwordreference.current.value,
            phoneno: phonereference.current.value,
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
        <Box sx={{ marginY: 2, textAlign: 'center' }}>
          <Avatar
            alt='User Profile Photo'
            sx={{
              width: { md: '10rem', xs: '8rem' },
              height: { md: '10rem', xs: '8rem' },
              marginX: 'auto',
            }}
          />
          <Button
            variant='contained'
            startIcon={<Upload />}
            color='secondary'
            sx={{ color: 'white', marginTop: 2 }}
          >
            Upload Profile Picture
            <input hidden accept='image/*' type='file' />
          </Button>
        </Box>
        <Box
          sx={{
            width: '100%',
            paddingX: 1,
            marginTop: 2,
          }}
        >
          <form onSubmit={Register}>
            <p color='red'>{err}</p>
            {fieldsArr.map((el: InputFieldType, i) => {
              if (el.displayVisibility) {
                return (
                  <InputFields
                    key={i}
                    icon={el.icon}
                    label={el.label}
                    id={el.id}
                    type={el.type}
                    reference={el.reference}
                    inputProps={el.inputProps}
                    displayVisibility={el.displayVisibility}
                    state={el.state}
                    setState={el.setState}
                  />
                );
              }
              return (
                <InputFields
                  key={i}
                  icon={el.icon}
                  label={el.label}
                  id={el.id}
                  type={el.type}
                  reference={el.reference}
                  inputProps={el.inputProps}
                />
              );
            })}
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
        sx={{ placeSelf: 'end center', marginTop: 6, marginBottom: 3 }}
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
