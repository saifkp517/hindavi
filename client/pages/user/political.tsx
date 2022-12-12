import Person from '@mui/icons-material/Person';
import Badge from '@mui/icons-material/Badge';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Phone from '@mui/icons-material/Phone';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import { NextPage } from 'next';
import { useRef } from 'react';

import {
  InputFields,
  InputFieldType,
} from '../../components/InputFields/InputFields';
import Button from '@mui/material/Button';
import PocketBase from 'pocketbase';
import Box from '@mui/material/Box';
import Upload from '@mui/icons-material/Upload';
import Avatar from '@mui/material/Avatar';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useS3Upload } from 'next-s3-upload';

const client = new PocketBase('http://127.0.0.1:8090');

const PoliticalProfile: NextPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const des1Ref = useRef<HTMLInputElement>(null);
  const des2Ref = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const fbRef = useRef<HTMLInputElement>(null);
  const instaRef = useRef<HTMLInputElement>(null);
  const twitterRef = useRef<HTMLInputElement>(null);

  const inputsArr: InputFieldType[] = [
    {
      id: 'name',
      icon: <Person />,
      label: 'Name',
      type: 'text',
      reference: nameRef,
      inputProps: {},
    },
    {
      id: 'designation 1',
      icon: <Badge />,
      label: 'Designation 1',
      type: 'text',
      reference: des1Ref,
      inputProps: {},
    },
    {
      id: 'designation 2',
      icon: <Badge />,
      label: 'Designation 2',
      type: 'text',
      reference: des2Ref,
      inputProps: {},
    },
    {
      id: 'phone',
      icon: <Phone />,
      label: 'Phone',
      type: 'tel',
      reference: phoneRef,
      inputProps: {
        minLength: 10,
      },
    },
    {
      id: 'fb',
      icon: <Facebook />,
      label: 'Facebook username',
      type: 'text',
      reference: fbRef,
      inputProps: {},
    },
    {
      id: 'insta',
      icon: <Instagram />,
      label: 'Instagram username',
      type: 'text',
      reference: instaRef,
      inputProps: {},
    },
    {
      id: 'twitter',
      icon: <Twitter />,
      label: 'Twitter username',
      type: 'text',
      reference: twitterRef,
      inputProps: {},
    },
  ];

  const { uploadToS3, files } = useS3Upload();
  const [profileImage, setProfileImage] = useState('');
  const [partyLogo, setPartyLogo] = useState('');

  const profileChange = async (event: any) => {
    try {
      let file = event.target.files[0];
      let { url } = await uploadToS3(file);
      setProfileImage(url);
    } catch (err) {
      console.log(err);
    }
  };

  const partylogoChange = async (event: any) => {
    try {
      let file = event.target.files[0];
      let { url } = await uploadToS3(file);
      setPartyLogo(url);
    } catch (err) {
      console.log(err);
    }
  };

  const addPolitical = async (event: React.FormEvent) => {
    event.preventDefault();
    if (
      fbRef.current &&
      instaRef.current &&
      twitterRef.current &&
      des1Ref.current &&
      des2Ref.current &&
      nameRef.current &&
      phoneRef.current
    ) {
      // axios
      //   .post('http://3.89.137.234:4000/add/political', {
      //     email: email,
      //     facebook: fbRef.current.value,
      //     instagram: instaRef.current.value,
      //     twitter: twitterRef.current.value,
      //     designation1: des1Ref.current.value,
      //     designation2: des2Ref.current.value,
      //   })
      //   .then((data) => console.log(data))
      //   .catch((err) => console.log);

      const data = {
        username: nameRef.current.value,
        phoneno: phoneRef.current.value,
        facebook: fbRef.current.value,
        instagram: instaRef.current.value,
        twitter: twitterRef.current.value,
        designation1: des1Ref.current.value,
        designation2: des2Ref.current.value,
      };

<<<<<<< HEAD
      client.records.create('politicalprofile', data)
        .then(data => {
          console.log(data)
          alert("Created")
        })
        .catch(err => {
          console.log(err.data)
          if (err.status == 400) {
            err.message = "User already exists!, Please try Logging in"
          }
          alert(err.message)
        })
=======
      client.records
        .create('politicalprofile', data)
        .then((data) => {
          console.log(data);
          alert('Created');
        })
        .catch((err) => console.log(err.data));
>>>>>>> 5e1e8e135145d85541bdeaed5c8fbcbac2c1c4c0
    }
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h5' component='h2' sx={{ marginY: 2 }}>
        Political Profile
      </Typography>
      <Box
        sx={{
          marginY: 2,
          textAlign: 'center',
          display: 'flex',
          justifyContent: { md: 'space-evenly', xs: 'space-between' },
          alignItems: 'center',
          gap: {
            md: 0,
            xs: '0.5rem',
          },
        }}
      >
        <Box>
          <Avatar
            alt='User Profile Photo'
            sx={{
              width: { md: '10rem', xs: '7rem' },
              height: { md: '10rem', xs: '7rem' },
              marginX: 'auto',
            }}
            src={profileImage}
          />
          <input
            id='profile'
            type='file'
            accept='image/*'
            onChange={profileChange}
            hidden
          />
          <label htmlFor='profile'>
            <Button
              variant='contained'
              startIcon={<Upload />}
              component='span'
              color='secondary'
              sx={{
                color: 'white',
                marginTop: 2,
                fontSize: {
                  md: '0.9rem',
                  xs: '0.6rem',
                },
              }}
            >
              Upload Profile
            </Button>
          </label>
        </Box>
        <Box>
          <Avatar
            alt='User Profile Photo'
            sx={{
              width: { md: '10rem', xs: '7rem' },
              height: { md: '10rem', xs: '7rem' },
              marginX: 'auto',
            }}
            src={partyLogo}
          />
          <input
            id='party'
            type='file'
            accept='image/*'
            onChange={partylogoChange}
            hidden
          />
          <label htmlFor='party'>
            <Button
              variant='contained'
              startIcon={<Upload />}
              color='secondary'
              component='span'
              sx={{
                color: 'white',
                marginTop: 2,
                fontSize: {
                  md: '0.9rem',
                  xs: '0.6rem',
                },
              }}
            >
              Upload Party Icon
            </Button>
          </label>
        </Box>
      </Box>
      <form onSubmit={addPolitical}>
        {inputsArr.map((el: InputFieldType) => (
          <InputFields
            key={el.id}
            id={el.id}
            icon={el.icon}
            reference={el.reference}
            type={el.type}
            inputProps={el.inputProps}
            label={el.label}
          />
        ))}
        <Button
          variant='contained'
          type='submit'
          sx={{ marginY: 4, color: '#fff', paddingY: 1.5 }}
          fullWidth
        >
          Add Profile
        </Button>
      </form>
      <Typography variant='h6' component='h3' sx={{ marginBottom: 4 }}>
        Profiles :-
      </Typography>
    </Container>
  );
};

export default PoliticalProfile;
