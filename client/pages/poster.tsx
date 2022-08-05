import { ChevronLeft, ChevronRight, Share } from '@mui/icons-material';
import {
  Button,
  Card,
  FormControlLabel,
  IconButton,
  IconButtonProps,
  Paper,
  styled,
  Switch,
  Typography,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Box, Container } from '@mui/system';
import { NextPage } from 'next';
import Image from 'next/image';
import Img from '../public/images/image.jpeg';

const Poster: NextPage = () => {
  const ColorButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: '#F27C35',
    '&:hover': {
      backgroundColor: deepOrange.A200,
    },
  }));

  return (
    <Container
      className='Poster__main'
      maxWidth='lg'
      sx={{
        marginY: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <ColorButton>
          <ChevronLeft />
        </ColorButton>
      </Box>
      <Box
        className='Poster__display'
        sx={{
          height: '18rem',
          display: 'grid',
          placeItems: 'center',
          marginY: 1,
        }}
      >
        <Card
          className='Poster__display'
          variant='outlined'
          sx={{ height: '18rem', aspectRatio: '1 / 1' }}
        >
          <Image src={Img} alt='image' style={{ aspectRatio: '1 / 1' }} />
        </Card>
      </Box>
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <FormControlLabel
          value='start'
          control={<Switch color='primary' />}
          label='Watermark'
          labelPlacement='start'
        />
      </Box>
      <Box
        className='Poster__container'
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginY: 2,
        }}
      >
        <Box>
          <Typography variant='h6' component='h2' sx={{ marginBottom: 1 }}>
            Choose frame:-
          </Typography>
          <Paper
            variant='outlined'
            className='Poster__card'
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              padding: 0.5,
              border: '2px solid #F27C35',
            }}
          >
            <IconButton aria-label='previous'>
              <ChevronLeft color='primary' />
            </IconButton>
            <Typography color='primary' variant='body1' component='p'>
              No Frame
            </Typography>
            <IconButton aria-label='next'>
              <ChevronRight color='primary' />
            </IconButton>
          </Paper>
        </Box>
        <Box>
          <Typography variant='h6' component='h2' sx={{ marginBottom: 1 }}>
            Choose profile:-
          </Typography>
          <Paper
            variant='outlined'
            className='Poster__card'
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              paddingY: 0.5,
              border: '2px solid #F27C35',
            }}
          >
            <IconButton aria-label='previous'>
              <ChevronLeft color='primary' />
            </IconButton>
            <Typography color='primary' variant='body1' component='p'>
              User Profile
            </Typography>
            <IconButton aria-label='next'>
              <ChevronRight color='primary' />
            </IconButton>
          </Paper>
        </Box>
      </Box>
      <Button
        variant='contained'
        fullWidth={true}
        startIcon={<Share />}
        sx={{
          color: '#fff',
          paddingY: 1.5,
          marginTop: 1.5,
        }}
      >
        <Typography variant='body1' component='p'>
          Download / Share
        </Typography>
      </Button>
    </Container>
  );
};

export default Poster;
