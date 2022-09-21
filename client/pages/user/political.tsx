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
import Box from '@mui/material/Box';
import Upload from '@mui/icons-material/Upload';
import Avatar from '@mui/material/Avatar';

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
          />
          <Button
            variant='contained'
            startIcon={<Upload />}
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
            <input hidden accept='image/*' type='file' />
          </Button>
        </Box>
        <Box>
          <Avatar
            alt='User Profile Photo'
            sx={{
              width: { md: '10rem', xs: '7rem' },
              height: { md: '10rem', xs: '7rem' },
              marginX: 'auto',
            }}
          />
          <Button
            variant='contained'
            startIcon={<Upload />}
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
            Upload Party Icon
            <input hidden accept='image/*' type='file' />
          </Button>
        </Box>
      </Box>
      <form>
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
