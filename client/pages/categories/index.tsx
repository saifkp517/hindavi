import { NextPage } from 'next';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import { CategoryType } from '../home';
import axios from 'axios';

import { PosterCards } from '../../components/PosterCards/PosterCards';

const Categories: NextPage = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios
          .get('http://52.23.195.42:8000/api/collections/categories/records')
          .then((res) => res.data);
        setCategories(result.items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container maxWidth='xl'>
      <PosterCards
        heading='Categories'
        limit={10000}
        list={[]}
        showAll={true}
        categories={categories}
      />
    </Container>
  );
};

export default Categories;
