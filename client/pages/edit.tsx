import { NextPage } from 'next';
import Container from '@mui/material/Container';
import PocketBase from 'pocketbase';
import Typography from '@mui/material/Typography';
import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";


const Notifications: NextPage = () => {

  const client = new PocketBase('http://127.0.0.1:8090');

  


  return (
    <Container maxWidth='sm'>
      <Typography
        variant='h5'
        color='initial'
        sx={{ marginY: 2, fontWeight: 500 }}
      >
        
      </Typography>
    </Container>
  );
};

export default Notifications;
