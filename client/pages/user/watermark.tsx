import Upload from '@mui/icons-material/Upload';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';

const watermark: NextPage = () => {
  return (
    <Container maxWidth='sm'>
      <Typography
        variant='h5'
        component='h2'
        sx={{ marginTop: 2, marginBottom: 4 }}
      >
        Create Watermark
      </Typography>
      <TextField
        variant='outlined'
        placeholder='Enter watermark text'
        sx={{ width: '100%' }}
      />
      <Button
        variant='contained'
        sx={{
          color: 'white',
          marginTop: { md: 4, xs: 3 },
          paddingY: { md: 1.5, xs: 1.2 },
          width: '100%',
        }}
      >
        Submit
      </Button>
    </Container>
  );
};

export default watermark;
