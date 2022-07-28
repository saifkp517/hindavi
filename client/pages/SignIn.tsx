import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';

const SignIn: NextPage = () => {

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const baseUrl = ""

  function onSubmit() {

  }

  function onChange() {

  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder='Email' onChange={onChange} />
      </form>
    </div>
  );
};

export default SignIn;
