import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Container from '@mui/system/Container';
import Edit from '@mui/icons-material/Edit';
import Business from '@mui/icons-material/Business';
import Gavel from '@mui/icons-material/Gavel';
import Watermark from '@mui/icons-material/BrandingWatermark';
import ContactUs from '@mui/icons-material/Contacts';
import { NextPage } from 'next';

type options = {
  title: string;
  icon: JSX.Element;
};

const UserPage: NextPage = () => {
  const optionsArr: options[] = [
    { title: 'Edit your profile', icon: <Edit /> },
    { title: 'Create business profile', icon: <Business /> },
    { title: 'Create political profile', icon: <Gavel /> },
    { title: 'Create watermark', icon: <Watermark /> },
    { title: 'Contact us', icon: <ContactUs /> },
  ];

  return (
    <Container maxWidth='xl'>
      <Box
        sx={{
          width: '100%',
          paddingY: 2,
          textAlign: 'center',
        }}
      >
        <Avatar
          alt='User Profile Photo'
          sx={{
            width: { md: '10rem', xs: '8rem' },
            height: { md: '10rem', xs: '8rem' },
            marginX: 'auto',
          }}
        />
        <Typography
          variant='h4'
          component='h2'
          sx={{ marginTop: 2, fontSize: { xs: '1.8rem', md: '2rem' } }}
        >
          Mark Sepcter
        </Typography>
        <Typography
          variant='h6'
          component='p'
          sx={{ fontSize: { xs: '1rem', md: '1.4rem' } }}
        >
          marksepcter2002@gmail.com
        </Typography>
      </Box>
      <Box>
        {optionsArr.map((el, i) => (
          <Link key={i} href='#' underline='none'>
            <Paper
              sx={{
                padding: 2,
                marginBottom: 2,
                border: '2px solid #F27C35',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 2,
              }}
            >
              {el.icon}
              <Typography variant='body1' component='p'>
                {el.title}
              </Typography>
            </Paper>
          </Link>
        ))}
      </Box>
    </Container>
  );
};

export default UserPage;
