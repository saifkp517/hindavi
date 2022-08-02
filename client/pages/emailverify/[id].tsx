import Container from '@mui/material/Container';
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Tag } from '@mui/icons-material';
import { useEffect } from 'react';
import axios from 'axios';

const Verify: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      sendRequest(router.query.id);
    }
  }, []);

  const sendRequest = async (email: string | string[] | undefined) => {
    try {
      await axios
        .post('http://localhost:4000/email', {
          email,
          otp: Math.floor(Math.random() * 1000000 + 1),
        })
        .then((data: any) => {
          console.log(data);
        });
    } catch (err) {}
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
      <form>
        <FormControl fullWidth={true} variant='outlined' sx={{ marginTop: 4 }}>
          <InputLabel htmlFor='verification'>Verification Code</InputLabel>
          <OutlinedInput
            id='verification'
            label='verification code'
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
    </Container>
  );
};

export default Verify;
