import { GetServerSideProps, NextPage } from 'next';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PosterType } from '../home';
import { PosterCards } from '../../components/PosterCards/PosterCards';

type Props = {
  id: string;
};

const CategoryPoster: NextPage<Props> = ({ id }) => {
  const [fields, setFields] = useState<string[]>([]);
  const [heading, setHeading] = useState<string>('');
  const [posters, setPosters] = useState<PosterType[]>([]);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const result: PosterType = await axios
            .get(
              `http://127.0.0.1:8090/api/collections/categories/records/${id}`
            )
            .then((res) => res.data);
          setHeading(result.title);
          setFields(result.field);
        } catch (error: any) {
          console.log(error);
        }
      })();
    }
  }, []);

  useEffect(() => {
    getPosters();
  }, [fields]);

  const getPosters = async () => {
    const postersRes = fields.map(async (el) => {
      try {
        return await axios
          .get(`http://127.0.0.1:8090/api/collections/posters/records/${el}`)
          .then((res) => res.data);
      } catch (error: any) {
        console.log(error.message);
        return {};
      }
    });
    setPosters(await Promise.all(postersRes));
  };

  return (
    <Container maxWidth='xl'>
      <PosterCards
        heading={heading}
        list={posters}
        limit={10000}
        showAll={true}
      />
    </Container>
  );
};

export default CategoryPoster;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  return {
    props: {
      id,
    },
  };
};
