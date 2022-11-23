import Typography from '@mui/material/Typography';
import Container from '@mui/system/Container';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { NextPage } from 'next';
import { useState } from 'react';

const Refer: NextPage = () => {
  return (
    <Container maxWidth='sm'>
      <Typography
        variant='h5'
        component='h2'
        sx={{ color: 'black', marginTop: 2, fontWeight: 500 }}
      >
        Refer and earn reward
      </Typography>
      <Typography variant='body2' component='p'>
        Refer your friend and earn 20 coins.
      </Typography>
      <Stepper orientation='vertical' sx={{ margin: 3 }}>
        <Step
          active={true}
          sx={{
            '.MuiSvgIcon-root > text': {
              fill: 'white',
            },
          }}
        >
          <StepLabel>Invite your friends</StepLabel>
        </Step>
        <Step
          active={true}
          sx={{
            '.MuiSvgIcon-root > text': {
              fill: 'white',
            },
          }}
        >
          <StepLabel>They hit their first recharge</StepLabel>
        </Step>
        <Step
          active={true}
          sx={{
            '.MuiSvgIcon-root > text': {
              fill: 'white',
            },
          }}
        >
          <StepLabel>You earn 20 coins</StepLabel>
        </Step>
      </Stepper>
      <Paper
        sx={{
          border: '2px solid #F27C35',
          padding: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography
          variant='body1'
          component='p'
          sx={{ flex: '100%', textAlign: 'center' }}
        >
          Referral code: mvm1f3
        </Typography>
      </Paper>
      <Button
        variant='contained'
        sx={{ width: '100%', marginTop: 3, color: 'white', padding: 1 }}
      >
        Refer now
      </Button>
    </Container>
  );
};

export default Refer;
