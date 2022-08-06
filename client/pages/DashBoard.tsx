import Container from '@mui/material/Container';
import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from "axios";
import { getCookie } from 'cookies-next';
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import type { NextPage } from 'next';
import { Tag } from '@mui/icons-material';

const DashBoard: NextPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  let message = "";

  const axiosJWT = axios.create();

  useEffect(() => {
    Verify();
  }, []);

  const Verify = async () => {

    const token = getCookie('key')
    axios.post("http://localhost:4000/protected", {
      token: token
    })
    .then(data => {
      console.log(data);
      message = JSON.stringify(data)
    })
    .catch(err => {
      console.log("error"+err)
      setError(err)
    })

  }

  return (
    <div>
      <h1>DashBoard</h1>
      <p>{message}</p>
      <p color='red'>{error}</p>
    </div>
  );
};

export default DashBoard;
