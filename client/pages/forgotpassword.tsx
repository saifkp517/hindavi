import Container from '@mui/material/Container';
import { useState, useRef } from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import PocketBase from 'pocketbase';
import OutlinedInput from '@mui/material/OutlinedInput';
import axios from 'axios'
import type { NextPage } from 'next';
import { Email } from '@mui/icons-material';
import React from 'react';

const Verify: NextPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const client = new PocketBase('http://127.0.0.1:8090');

  const ForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    await client.admins.requestPasswordReset('saifkhan501721@gmail.com')

    try {
      if (emailRef.current) {

        // client.records.getFullList('profiles')
        //   .then(data => {
        //     const check = data.find(element => element.id)
        //     console.log(data[0].id);
        //   })


        // await axios
        //   .post('http://localhost:4000/forgotpassword', {
        //     email: emailRef.current.value,
        //     link: `http://localhost:3000/passwordreset/${userid}`
        //   })
        //   .then((data: any) => {
        //     console.log(data);
        //   })
        //   .catch((err: any) => console.log(err));

        await client.admins.requestPasswordReset('saifkhan501721@gmail.com')
      }
    } catch (err: any) {
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
        Please enter the email address associated with the account and you will recieve an email containing the password reset link
      </Typography>
      <form onSubmit={ForgotPassword}>
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
