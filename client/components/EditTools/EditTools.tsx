import { NextPage } from 'next';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

export const EditTools: NextPage = () => {
  return (
    <>
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
              padding: 0.5,
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
      </Box>
    </>
  );
};
