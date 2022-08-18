import Container from '@mui/material/Container';
import { useS3Upload } from 'next-s3-upload';
import * as dotenv from "dotenv";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
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
  const [imagelocation, setImageLocation] = useState('')
  let message = "";

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
        setEmail(JSON.stringify(data.data))
      })
      .catch(err => {
        console.log(err)
        if (err.response.status === 401) {
          setError("Please Login again!")
        }
      })

  }

  const Images = async () => {

    axios.get("http://localhost:4000/images")
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err)
        if (err.response.status === 401) {
          setError("Please Login again!")
        }
      })

  }

  ///uploading images to s3////////////////

  const [imageUrl, setImageUrl] = useState("");
  const { uploadToS3, files } = useS3Upload();

  const fileHandleChange = async (event: any) => {
    try {
      let file = event.target.files[0];
      let {url} = await uploadToS3(file)
      setImageUrl(url)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div>
      <h1>DashBoard</h1>
      <p> {email}</p>
      <p style={{ color: "red" }}>{error}</p>

      <button onClick={Images}>image</button>

      <input type="file" onChange={fileHandleChange} />

      <div>
        {files.map((file, index) => (
          <div key={index}>
            File #{index} progress: {file.progress}%
          </div>
        ))}
        {imageUrl && <img src={imageUrl} height="100%" width="100%" />}
      </div>

    </div>
  );
};

export default DashBoard;
