import Container from '@mui/material/Container';
import {
  Alert,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  Typography,
} from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Tag } from '@mui/icons-material';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { getCookie } from 'cookies-next';
import axios from 'axios';

interface State {
  error: string;
  showError: boolean;
}

const Verify: NextPage = () => {
  const router = useRouter();

  const otpRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<State>({
    error: '',
    showError: false,
  });


  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (otpRef.current) {
      const otp = getCookie("otp");
      const email = getCookie("userref")

      if (otpRef.current.value === otp) {
        
        axios.post("http://localhost:4000/emailverify", {
          email: email
        })
        .then(data => {
          console.log(data)
        })
        .catch(err => console.log(err));



      }

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
      <Typography
        color='primary'
        variant='h3'
        component='h1'
        sx={{
          width: '100%',
          fontWeight: 700,
        }}
      >
        Email Verification
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
        Please enter the 6 - digit code sent to your email address.
      </Typography>
      <form onSubmit={submitHandler}>
        <FormControl fullWidth={true} variant='outlined' sx={{ marginTop: 4 }}>
          <InputLabel htmlFor='verification'>Verification Code</InputLabel>
          <OutlinedInput
            id='verification'
            label='verification code'
            inputRef={otpRef}
            startAdornment={
              <InputAdornment position='start'>
                <Tag />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          type='submit'
          variant='contained'
          fullWidth={true}
          sx={{ fontWeight: '700', paddingY: 1, color: '#fff', marginTop: 4 }}
        >
          Finish
        </Button>
      </form>
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

export default Verify;
