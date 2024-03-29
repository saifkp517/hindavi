import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import axios from 'axios';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import Paper from '@mui/material/Paper';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export type PaymentHistoryType = {
  id: string;
  paymentamount: number;
  coinspurchased: number;
};

const Recharge: NextPage = () => {
  const [value, setValue] = useState('79');
  const [coins, setCoins] = useState(79);
  const [rows, setRows] = useState<PaymentHistoryType[]>([]);
  const [id, setId] = useState('');

  const router = useRouter();

  useEffect(() => {
    Verify();
  }, []);

  const Verify = async () => {
    const token = getCookie('key');
    axios
      .post('http://54.242.34.13:4000/protected', {
        token: token,
      })
      .then((data) => {
        setId(data.data);
        axios
          .get(`http://54.242.34.13:4000/payment-history/${data.data}`)
          .then((data) => {
            setRows(data.data);
          })
          .catch((err) => console.log('err: ' + err));
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          router.push('/');
        }
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    console.log(value);

    const res = await loadScript('http://checkout.razorpay.com/v1/checkout.js');

    if (!res)
      return alert('Razorpay SDK failed, Check your internet connection.....');

    const result = await axios.post(`http://54.242.34.13:4000/orders/${value}`);

    if (!result) {
      alert('Server Error, Please Wait until the servers are back online...');
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: 'rzp_test_ZDiZoAdUC8Q9ol', // Enter the Key ID generated from the Dashboard
      amount: amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: currency,
      name: 'Hindavi Graphics',
      description: 'Test Transaction',
      image: 'http://example.com/your_logo',
      order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response: any) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        //verifyying signature confirmation
        const result = await axios.post(
          'http://54.242.34.13:4000/verify-success',
          data
        );

        if (result) {
          if (parseInt(value) === 99) {
            setCoins(79);
            console.log('79');
          } else if (parseInt(value) === 499) {
            setCoins(449);
            console.log('449');
          } else {
            setCoins(999);
            console.log('999');
          }

          const updateCoins = await axios.post(
            'http://54.242.34.13:4000/update-coins',
            {
              id: id,
              coins: coins,
            }
          );

          if (updateCoins) {
            axios
              .post('http://54.242.34.13:4000/payment-history', {
                buyer: id,
                paymentamount: value,
                coinspurchased: coins,
              })
              .then((data) => console.log(data))
              .catch((err) => console.log(err));

            axios
              .get(`http://54.242.34.13:4000/payment-history/${id}`)
              .then((data) => {
                setRows(data.data);
              });
          }
        }

        alert(result.data.msg);
      },
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: 'orange',
      },
    };
    var razorpay = new window.Razorpay(options);
    razorpay.open();
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
          defaultValue='79'
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value='99'
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
            value='499'
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
            value='999'
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
          onClick={displayRazorpay}
        >
          Recharge
        </Button>
      </Box>
      <Typography variant='h6' component='h3' sx={{ marginBottom: 2 }}>
        Payment History :-
      </Typography>
      {rows.map((row) => {
        return (
          <div id={row.id}>
            <hr />
            <p>
              Amount Paid: {row.paymentamount} | Coins Purchased:{' '}
              {row.coinspurchased}
            </p>
          </div>
        );
      })}
      <Paper
        sx={{
          padding: 1.5,
          marginBottom: 1.5,
          border: '2px solid #F27C35',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box>
          <Typography variant='body1' component='p'>
            &#8377; 5900
          </Typography>
          <Typography
            variant='subtitle2'
            component='p'
            sx={{ color: 'gray', fontSize: '0.7rem' }}
          >
            Date purchased:{' '}
            {new Date().toLocaleDateString('en-UK', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='body1' component='p' sx={{ fontWeight: 500 }}>
            Coins:
            <Typography variant='h6' component='span' sx={{ marginX: 1 }}>
              99
            </Typography>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Recharge;
