import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const Verify: NextPage = () => {
  return (
    <Container maxWidth='sm'>
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
        color='primary.light'
        variant='body1'
        component='p'
        marginTop={0.5}
        sx={{
          width: '100%',
          marginLeft: 1,
        }}
      >
        Please enter the 6 - digit code sent to your email address.
      </Typography>
    </Container>
  );
};

export default Verify;
