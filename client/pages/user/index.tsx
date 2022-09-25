import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useS3Upload } from 'next-s3-upload';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Container from '@mui/system/Container';
import Edit from '@mui/icons-material/Edit';
import Business from '@mui/icons-material/Business';
import Gavel from '@mui/icons-material/Gavel';
import Watermark from '@mui/icons-material/BrandingWatermark';
import ContactUs from '@mui/icons-material/Contacts';
import Fab from '@mui/material/Fab';
import Logout from '@mui/icons-material/Logout';
import { NextPage } from 'next';
import { getCookie } from 'cookies-next';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

type options = {
  title: string;
  icon: JSX.Element;
  link: string;
};

const UserPage: NextPage = () => {
  const optionsArr: options[] = [
    { title: 'Edit your profile', icon: <Edit />, link: './user/edit' },
    {
      title: 'Create business profile',
      icon: <Business />,
      link: './user/business',
    },
    {
      title: 'Create political profile',
      icon: <Gavel />,
      link: './user/political',
    },
    {
      title: 'Create watermark',
      icon: <Watermark />,
      link: './user/watermark',
    },
    { title: 'Contact us', icon: <ContactUs />, link: './user/contact' },
  ];

  const [email, setEmail] = useState('');
  const [coins, setCoins] = useState(0);
  const [name, setName] = useState('');
  const [id, setId] = useState<any>('');
  const [error, setError] = useState('');

  useEffect(() => {
    Verify();
  }, []);

  const Verify = async () => {
    const token = getCookie('key');
    axios
      .post('http://localhost:4000/protected', {
        token: token,
      })
      .then((data) => {
        console.log(data);
        UserInfo(data.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          setError('Please Login again!');
        }
      });
  };

  const UserInfo = async (id: any) => {
    if (id !== '') {
      console.log('sa');
      axios
        .post('http://localhost:4000/userinfo', {
          id: id,
        })
        .then((res) => {
          setEmail('Saif Khan');
          setName(res.data.username);
          setCoins(res.data.coins);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container maxWidth='xl'>
      <Box
        sx={{
          width: '100%',
          paddingY: 2,
          textAlign: 'center',
        }}
      >
        <Avatar
          alt='User Profile Photo'
          sx={{
            width: { md: '10rem', xs: '8rem' },
            height: { md: '10rem', xs: '8rem' },
            marginX: 'auto',
          }}
        />
        <Typography
          variant='h4'
          component='h2'
          sx={{ marginTop: 2, fontSize: { xs: '1.8rem', md: '2rem' } }}
        >
          {name}
        </Typography>
        <Typography
          variant='h6'
          component='p'
          sx={{ fontSize: { xs: '1rem', md: '1.4rem' } }}
        >
          {email}
        </Typography>
        <h1 style={{ color: 'red' }}>{error}</h1>
      </Box>
      <Box>
        {optionsArr.map((el, i) => (
          <Link key={i} href={el.link} underline='none'>
            <Paper
              sx={{
                padding: 2,
                marginBottom: 2,
                border: '2px solid #F27C35',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 2,
              }}
            >
              {el.icon}
              <Typography variant='body1' component='p'>
                {el.title}
              </Typography>
            </Paper>
          </Link>
        ))}
      </Box>
      <Fab
        color='primary'
        variant='extended'
        size='large'
        sx={{
          position: 'fixed',
          bottom: { md: '1.5rem', xs: '4rem' },
          right: { md: '1.8rem', xs: '1rem' },
        }}
      >
        <Logout sx={{ fill: 'white' }} />
        <Typography
          variant='body1'
          component='p'
          sx={{
            color: 'white',
            marginLeft: 1,
            display: { md: 'block', xs: 'none' },
          }}
        >
          Logout
        </Typography>
      </Fab>
    </Container>
  );
};

export default UserPage;
