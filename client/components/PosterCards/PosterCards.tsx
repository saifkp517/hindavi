import { NextPage } from 'next';
import { Design } from '../../pages/[id]';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Image from 'next/image';

interface Props {
  heading: string;
  list: Design[];
  inc: number; //TODO only during development
}

export const PosterCards: NextPage<Props> = ({ heading, list, inc }) => {
  return (
    <Box sx={{ paddingX: 3, paddingTop: 1 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h6' component='p' sx={{ color: 'black' }}>
          {heading}
        </Typography>
        <Typography
          variant='subtitle2'
          component='p'
          sx={{ fontSize: { md: '0.9rem', xs: '0.8rem' } }}
        >
          <Link href='#' underline='none' color='unset'>
            Show All
          </Link>
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ paddingY: 1 }}>
        {list.map((el, i) => (
          <Grid
            item
            key={i}
            md={3}
            xs={6}
            sx={{
              display: i > 1 ? { xs: 'none', md: 'block' } : null,
            }}
          >
            <Link href={`/posteredit/${i + inc}`} underline='none'>
              <Card elevation={2}>
                <Image src={el.img} alt='img' layout='responsive' />
              </Card>
            </Link>
            <Typography
              variant='body1'
              component='p'
              sx={{
                marginTop: 1,
                fontSize: { md: '1.2rem', xs: '1rem' },
                color: 'gray',
              }}
            >
              {el.title}
            </Typography>
            <Typography
              variant='subtitle2'
              component='p'
              sx={{ fontSize: { md: '0.7rem', xs: '0.6rem' } }}
            >
              {el.designation}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
