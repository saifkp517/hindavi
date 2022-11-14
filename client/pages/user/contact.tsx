import Container from '@mui/system/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { NextPage } from 'next';

interface Contact {
  title: string;
  heading1: string;
  heading2?: string;
  link1: string;
  link2?: string;
}

const ContactPage: NextPage = () => {
  const contactList: Contact[] = [
    { title: 'Contact :', heading1: '7887 439 405', link1: '#' },
    {
      title: 'Email :',
      heading1: 'teamhindavi@gmail.com',
      link1: 'http://teamhindavi@gmail.com',
    },
    {
      title: 'Website :',
      heading1: 'www.hindavigraphics.com',
      link1: 'http://www.hindavigraphics.com',
      heading2: 'www.hindavigraphicsapp.com',
      link2: 'http://www.hindavigraphicsapp.com',
    },
    {
      title: 'Whatsapp :',
      link1: 'http://bit.ly/hgsupportteam',
      heading1: 'http://bit.ly/hgsupportteam',
    },
  ];

  return (
    <Container maxWidth='sm'>
      <Typography variant='h5' component='h2' sx={{ marginY: 2 }}>
        Contact Us:-
      </Typography>
      <Box>
        {contactList.map((el, i) => (
          <Paper
            key={i}
            sx={{
              padding: { xs: 1, md: 2 },
              marginBottom: 2,
              border: '2px solid #F27C35',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: { xs: '24%', md: '25%' },
                fontSize: { xs: '0.8rem', md: '1.2rem' },
              }}
            >
              {el.title}
            </Box>
            <Box>
              <Typography
                variant='body1'
                component='p'
                sx={{ fontSize: { xs: '0.7rem', md: '1.1rem' } }}
              >
                <Link key={i} href={el.link1} underline='none'>
                  {el.heading1}
                </Link>
              </Typography>
              {el.heading2 ? (
                <Typography
                  variant='body1'
                  component='p'
                  sx={{ fontSize: { xs: '0.7rem', md: '1.2rem' } }}
                >
                  <Link key={i} href={el.link2} underline='none'>
                    {el.heading2}
                  </Link>
                </Typography>
              ) : null}
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default ContactPage;
