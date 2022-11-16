import { NextPage } from 'next';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { PosterType } from './home';
import axios from 'axios';
import { PosterCards } from '../components/PosterCards/PosterCards';

const QuotesPage: NextPage = () => {
  const [posters, setPosters] = useState<PosterType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios
          .get('http://52.23.195.42:8000/api/collections/quotes/records')
          .then((res) => res.data);
        const poster = await getPosters(result.items);
        setPosters(poster);
      } catch (error: any) {
        console.log(error.message);
      }
    })();
  }, []);

  const getPosters = async (posterArr: PosterType[]) => {
    const posters = await Promise.all(
      posterArr.map(async (el: any) => {
        try {
          const posterData = await axios
            .get(
              `http://52.23.195.42:8000/api/collections/posters/records/${el.posterId}`
            )
            .then((res) => res.data);
          return posterData;
        } catch (error: any) {
          console.log(error.message);
        }
      })
    );
    return posters;
  };

  return (
    <Container maxWidth='xl'>
      <PosterCards
        heading='Quotes'
        list={posters}
        showAll={true}
        limit={10000}
      />
    </Container>
  );
};

export default QuotesPage;
