import { NextPage } from 'next';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { PosterType } from '../home';
import axios from 'axios';

const LibraryPage: NextPage = () => {
  const [posters, setPosters] = useState<PosterType[]>([]);

  useEffect(() => {
    (async () => {
      const records = await axios
        .get(
          `http://127.0.0.1:8090/api/collections/library/records?filter=(userId='emnxjoo82a7e0rk')&expand=posterId`
        )
        .then((res) => res.data.items[0]);
      setPosters(records['@expand'].posterId);
    })();
  }, []);

  const handleDownload = async (src: string, name: string) => {
    const response = await fetch(src);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Container maxWidth='lg'>
      <Typography
        variant='h5'
        component='h2'
        sx={{ marginY: { xs: 1.5, md: 2 }, fontWeight: 500 }}
      >
        Poster Library
      </Typography>
      <Grid container spacing={2}>
        {posters.map((el) => (
          <Grid key={el.id} xs={6} sm={3}>
            <Card>
              <CardMedia
                component='img'
                src={`http://127.0.0.1:8090/api/files/posters/${el.id}/${el.image}`}
              />
              <CardActions>
                <Button
                  size='small'
                  fullWidth
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                  onClick={() =>
                    handleDownload(
                      `http://127.0.0.1:8090/api/files/posters/${el.id}/${el.image}`,
                      el.title
                    )
                  }
                >
                  Download
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LibraryPage;
