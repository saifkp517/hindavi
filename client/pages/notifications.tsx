import { NextPage } from 'next';
import Container from '@mui/material/Container';
import PocketBase from 'pocketbase';
import Typography from '@mui/material/Typography';
import { pbkdf2 } from 'crypto';
// global.EventSource = require('eventsource');

const Notifications: NextPage = () => {
  const client = new PocketBase('http://127.0.0.1:8090');

  client.realtime.subscribe('notifications', function (e) {
    if (e.action === 'create') {
      alert(e.record.field);
      return <p>{e.record.field}</p>;
    }
  });

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
