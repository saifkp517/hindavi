import { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Notifications: NextPage = () => {
  return (
    <Container maxWidth='sm'>
      <Typography
        variant='h5'
        color='initial'
        sx={{ marginY: 2, fontWeight: 500 }}
      >
        Notifications
      </Typography>
    </Container>
  );
};

export default Notifications;
