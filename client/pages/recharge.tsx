import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import { useState } from 'react';

const Recharge: NextPage = () => {
  const [value, setValue] = useState('79 coins');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Container maxWidth='sm'>
      <Typography
        variant='h5'
        component='h2'
        sx={{ marginTop: { xs: 1.5, md: 2 }, fontWeight: 500 }}
      >
        Recharge
      </Typography>
      <FormControl
        sx={{
          width: '100%',
          padding: '1rem',
          borderRadius: '5px',
          backgroundColor: '#F27C35',
          color: 'white',
          marginTop: 2,
        }}
      >
        <Typography
          variant='h6'
          component='h3'
          sx={{ color: 'white', marginBottom: 1 }}
        >
          Choose Plans
        </Typography>
        <RadioGroup
          aria-labelledby='recharge plans'
          defaultValue='79 coins'
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value='79 coins'
            control={<Radio color='secondary' sx={{ color: 'white' }} />}
            label='79 coins'
            color='secondary.light'
            sx={{
              width: '100%',
              display: 'block',
              position: 'relative',
              borderRadius: '5px',
              margin: '0.25rem 0',
              border: '2px solid white',
              '&:after': {
                content: '"R. 99"',
                fontWeight: 400,
                fontSize: '1.1rem',
                position: 'absolute',
                top: '50%',
                right: '1rem',
                transform: 'translateY(-55%)',
              },
            }}
          />
          <FormControlLabel
            value='449 coins'
            control={<Radio color='secondary' sx={{ color: 'white' }} />}
            label='449 coins'
            sx={{
              width: '100%',
              display: 'block',
              position: 'relative',
              borderRadius: '5px',
              margin: '0.25rem 0',
              border: '2px solid white',
              '&:after': {
                content: '"R. 499"',
                fontWeight: 400,
                fontSize: '1.1rem',
                position: 'absolute',
                top: '50%',
                right: '1rem',
                transform: 'translateY(-55%)',
              },
            }}
          />
          <FormControlLabel
            value='999 coins'
            control={<Radio color='secondary' sx={{ color: 'white' }} />}
            label='999 coins'
            sx={{
              width: '100%',
              display: 'block',
              position: 'relative',
              borderRadius: '5px',
              margin: '0.25rem 0',
              border: '2px solid white',
              '&:after': {
                content: '"R. 999"',
                fontWeight: 400,
                fontSize: '1.1rem',
                position: 'absolute',
                top: '50%',
                right: '1rem',
                transform: 'translateY(-55%)',
              },
            }}
          />
        </RadioGroup>
      </FormControl>
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Button
          variant='contained'
          color='secondary'
          sx={{ color: 'white', paddingX: 3, marginY: 2, fontSize: '1.1rem' }}
        >
          Recharge
        </Button>
      </Box>
      <Typography variant='h6' component='h3'>
        Payment History :-
      </Typography>
    </Container>
  );
};

export default Recharge;
