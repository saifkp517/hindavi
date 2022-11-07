import { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { CategoryType } from '../home';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';

const Categories: NextPage = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios
          .get('http://127.0.0.1:8090/api/collections/categories/records')
          .then((res) => res.data);
        setCategories(result.items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container maxWidth='xl'>
      <Typography variant='h6' sx={{ marginY: 2 }}>
        Categories
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        {categories.map((el, i) => (
          <Grid
            item
            key={el.id}
            md={2}
            xs={3}
            sx={{
              display: i > 3 ? { xs: 'none', md: 'block' } : null,
            }}
          >
            <Box sx={{ marginTop: 2, marginBottom: 1 }}>
              <Link href={`/posteredit/${i}`} underline='none'>
                <Paper
                  elevation={2}
                  sx={{
                    width: { md: '6rem', xs: '3.5rem' },
                    height: { md: '6rem', xs: '3.5rem' },
                    borderRadius: '50%',
                    padding: { md: 3, xs: 2 },
                    marginX: 'auto',
                    fill: 'white',
                    backgroundColor: 'grey',
                  }}
                >
                  <img
                    src={`http://127.0.0.1:8090/api/files/categories/${el.id}/${el.icon}`}
                    alt='category image'
                    style={{ width: '100%', height: '100%' }}
                  />
                </Paper>
              </Link>
            </Box>
            <Typography
              variant='body1'
              component='p'
              sx={{
                textAlign: 'center',
                fontSize: { md: '1.2rem', xs: '1rem' },
                color: 'gray',
              }}
            >
              {el.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Categories;
