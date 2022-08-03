import Container from '@mui/material/Container';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
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

    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState(0);
    const [users, setUsers] = useState([]);
 
    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);

    interface Token {
        email: string,
        exp: number
    }
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:4000/refreshtoken');
            setToken(response.data.accessToken);
            const decoded = jwt_decode<Token>(response.data.accessToken);
            setEmail(decoded.email);
            setExpire(decoded.exp);
        } catch (error) {
            console.log(error)
        }
    }
 
    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:4000/refreshtoken');
            config!.headers!.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode<Token>(response.data.accessToken);
            setEmail(decoded.email);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
 
    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:4000', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response)
    }


  return (
    <div>
        <h1>DashBoard</h1>
    </div>
  );
};

export default DashBoard;
