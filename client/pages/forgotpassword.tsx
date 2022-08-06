import Container from '@mui/material/Container';
import { useState, useRef } from 'react';
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import type { NextPage } from 'next';
import { Email } from '@mui/icons-material';
import React from 'react';

const Verify: NextPage = () => {

  const emailRef = useRef<HTMLInputElement>(null);

  const ForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();


    try {
      if ( emailRef.current ) {

        

      }
    } catch(err: any) {
      console.log(err)
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
      <Typography
        color='primary'
        variant='h3'
        component='h1'
        sx={{
          width: '100%',
          fontWeight: 700,
        }}
      >
        Forgot Password
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
        Please enter the email address associated with the account
      </Typography>
      <form>
        <FormControl fullWidth={true} variant='outlined' sx={{ marginTop: 4 }}>
          <InputLabel htmlFor='email'>Email Address</InputLabel>
          <OutlinedInput
            id='email'
            type='email'
            inputRef={emailRef}
            label='Email Address'
            startAdornment={
              <InputAdornment position='start'>
                <Email />
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
