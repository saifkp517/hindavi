import Language from '@mui/icons-material/Language';
import Email from '@mui/icons-material/Email';
import Home from '@mui/icons-material/Home';
import LocalOffer from '@mui/icons-material/LocalOffer';
import Phone from '@mui/icons-material/Phone';
import Upload from '@mui/icons-material/Upload';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import PocketBase from 'pocketbase';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import { useRef } from 'react';
import {
  InputFields,
  InputFieldType,
} from '../../components/InputFields/InputFields';


import axios from 'axios';
import { useState, useEffect } from 'react';
import { useS3Upload } from 'next-s3-upload';

const client = new PocketBase('http://127.0.0.1:8090');

const BusinessProfile: NextPage = () => {
  const taglineRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const websiteRef = useRef<HTMLInputElement>(null);

  const inputsArr: InputFieldType[] = [
    {
      icon: <LocalOffer />,
      id: 'tagline',
      label: 'Tagline',
      type: 'text',
      reference: taglineRef,
      inputProps: {},
    },
    {
      icon: <Email />,
      id: 'email',
      label: 'Email Address',
      type: 'email',
      reference: emailRef,
      inputProps: {},
    },
    {
      icon: <Phone />,
      id: 'phone',
      label: 'Phone Number',
      type: 'text',
      reference: phoneRef,
      inputProps: {
        minLength: 10,
      },
    },
    {
      icon: <Home />,
      id: 'address',
      label: 'Address',
      type: 'text',
      reference: addressRef,
      inputProps: {},
    },
    {
      icon: <Language />,
      id: 'website',
      label: 'Website',
      type: 'url',
      reference: websiteRef,
      inputProps: {},
    },
  ];

  const { uploadToS3, files } = useS3Upload();
  const [profileImage, setProfileImage] = useState('');

  const profileImageChange = async (event: any) => {
    try {
      let file = event.target.files[0];
      let { url } = await uploadToS3(file);
      setProfileImage(url);
    } catch (err) {
      console.log(err);
    }
  };

  const addBusiness = async (event: any) => {
    event.preventDefault();
    if (
      taglineRef.current &&
      emailRef.current &&
      phoneRef.current &&
      addressRef.current &&
      websiteRef.current
    ) {
      const data = {
        tagline: taglineRef.current.value,
        email: emailRef.current.value,
        phoneno: phoneRef.current.value,
        address: addressRef.current.value,
        website: websiteRef.current.value,
      };

      client.records.create('businessprofile', data)
      .then(data => {
        console.log(data)
        alert("Created")
      })
      .catch(err => {
        console.log(err.data)
        if(err.status == 400)
        {
          err.message = "User already exists!, Please try Logging in"
        }
        alert(err.message)
      })
    }
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h5' component='h2' sx={{ marginY: 2 }}>
        Businesss Profile
      </Typography>
      <Box sx={{ marginY: 2, textAlign: 'center' }}>
        <Avatar
          alt='User Profile Photo'
          sx={{
            width: { md: '10rem', xs: '8rem' },
            height: { md: '10rem', xs: '8rem' },
            marginX: 'auto',
          }}
          src={profileImage}
        />
        <input
          id='logo'
          accept='images/*'
          type='file'
          onChange={profileImageChange}
          hidden
        />
        <label htmlFor='logo'>
          <Button
            variant='contained'
            component='span'
            startIcon={<Upload />}
            color='secondary'
            sx={{ color: 'white', marginTop: 2 }}
          >
            Upload Logo
          </Button>
        </label>
      </Box>
      <form onSubmit={addBusiness}>
        {inputsArr.map((el: InputFieldType, i) => (
          <InputFields
            key={i}
            id={el.id}
            icon={el.icon}
            label={el.label}
            inputProps={el.inputProps}
            reference={el.reference}
            type={el.type}
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

export default BusinessProfile;
