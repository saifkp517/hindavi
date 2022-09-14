import Container from '@mui/material/Container';
import { useS3Upload } from 'next-s3-upload';
import * as dotenv from "dotenv";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios, { AxiosResponse } from "axios";
import useRazorpay from "react-razorpay";
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

declare global {
  interface Window {
    Razorpay: any;
  }
}

const DashBoard: NextPage = () => {

  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("")
  const [designation, setDesignation] = useState("")
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

  ///uploading images to s3////////////////

  const [imageUrl, setImageUrl] = useState("");
  const { uploadToS3, files } = useS3Upload();

  const fileHandleChange = async (event: any) => {
    try {
      let file = event.target.files[0];
      let { url } = await uploadToS3(file)
      setImageUrl(url)
      axios.post("http://localhost:4000/upload-profile", {
        email: email,
        profilephoto: JSON.stringify(imageUrl)
      })
        .then(data => console.log(data))
        .catch(err => console.log("lmao"))
    } catch (err) {
      console.log(err)
    }
  }

  const ImageHandleChange = async (event: any) => {
    try {
      let file = event.target.files[0];
      let { url } = await uploadToS3(file)
      setImageUrl(url)
      axios.post("http://localhost:4000/upload-image", {
        email: email,
        title: "this is a image title",
        designation: "By Hindavi Graphics",
        image: JSON.stringify(imageUrl)

      })
        .then(data => console.log(data))
        .catch(err => console.log("lmao"))
    } catch (err) {
      console.log(err)
    }
  }


  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      }
      script.onerror = () => {
        resolve(false);
      }
      document.body.appendChild(script);
    })
  }



  const displayRazorpay = async () => {

    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

    if (!res) return alert("Razorpay SDK failed, Check your internet connection.....");

    const result = await axios.post("http://localhost:4000/orders");

    if (!result) {
      alert('Server Error, Please Wait until the servers are back online...')
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      "key": "rzp_test_E4Bsww3mEFYv4e", // Enter the Key ID generated from the Dashboard
      "amount": amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": currency,
      "name": "Hindavi Graphics",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": async function (response: any) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        //verifyying signature confirmation
        const result = await axios.post("http://localhost:4000/verify-success", data);

        alert(result.data.msg);
      },
      "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "orange"
      }
    };
    var razorpay = new window.Razorpay(options);;
    razorpay.open();
  }

  return (
    <div>
      <h1>DashBoard</h1>
      <p>{email}</p>
      <p style={{ color: "red" }}>{error}</p>

      <input type="file" onChange={fileHandleChange} />

      <div>
        {files.map((file, index) => (
          <div key={index}>
            File #{index} progress: {file.progress}%
          </div>
        ))}
        {imageUrl && <img src={imageUrl} height="100%" width="100%" />}
      </div>

      <p>payment</p>

      <button className="App-link" onClick={displayRazorpay}>
        Pay ₹500
      </button><br/>

      upload an Image<br/>



      <input type="file" onChange={ImageHandleChange} />
      {files.map((file, index) => (
        <div key={index}>
          File #{index} progress: {file.progress}%
        </div>
      ))}
      {imageUrl && <img src={imageUrl} height="100%" width="100%" />}


    </div>
  );
};

export default DashBoard;
