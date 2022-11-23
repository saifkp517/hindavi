import { NextPage } from 'next';
import axios from 'axios';
import Box from '@mui/system/Box';
import { useEffect, useState } from 'react';
import { PosterCards } from '../components/PosterCards/PosterCards';
import Container from '@mui/material/Container';
import { SkeletonLoading } from '../components/SkeletonLoading/SkeletonLoading';

export type CategoryType = {
  title: string;
  id: string;
  icon: string;
};

export type PosterType = {
  collectionId: string;
  id: string;
  title: string;
  designation: string;
  image: string;
  field: string[];
  price: number;
};

const Home: NextPage = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [today, setToday] = useState<PosterType[]>([]);
  const [stories, setStories] = useState<PosterType[]>([]);
  const [quotes, setQuotes] = useState<PosterType[]>([]);
  const [tomorrow, setTomorrow] = useState<PosterType[]>([]);

  useEffect(() => {
    getCategories();
    (async () => {
      try {
        const todayPosters = await getResults('today');
        todayPosters && setToday(todayPosters);
        const storiesPosters = await getResults('stories');
        storiesPosters && setStories(storiesPosters);
        const quotesPosters = await getResults('quotes');
        quotesPosters && setQuotes(quotesPosters);
        const tomorrowPosters = await getResults('tomorrow');
        tomorrowPosters && setTomorrow(tomorrowPosters);
      } catch (error: any) {
        console.log(error.message);
      }
    })();
  }, []);

  const getResults = async (table: string) => {
    try {
      const result: any = await axios
        .get(
          `https://hindavi-pocketbase.herokuapp.com/api/collections/${table}/records`
        )
        .then((res) => res.data);
      if (result) {
        const posters = getPosters(result.items);
        if (posters) return posters;
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getCategories = async () => {
    try {
      const result = await axios
        .get(
          'https://hindavi-pocketbase.herokuapp.com/api/collections/categories/records'
        )
        .then((res) => res.data);
      setCategories(result.items);
    } catch (error) {
      console.log(error);
    }
  };

  const getPosters = async (posterArr: PosterType[]) => {
    const posters = await Promise.all(
      posterArr.map(async (el: any) => {
        try {
          const posterData = await axios
            .get(
              `https://hindavi-pocketbase.herokuapp.com/api/collections/posters/records/${el.posterId}`
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
      <Box sx={{ flexGrow: 1 }} color='secondary.light'>
        {/* 
          Categories
        */}
        {categories.length > 0 ? (
          <PosterCards
            heading='Categories'
            limit={6}
            list={[]}
            categories={categories}
          />
        ) : (
          <SkeletonLoading type='categories' />
        )}
        {/* 
          Today
        */}
        {today.length > 0 ? (
          <PosterCards heading='Today' limit={4} list={today} />
        ) : (
          <SkeletonLoading />
        )}
        {/*
         Stories 
        */}
        {stories.length > 0 ? (
          <PosterCards heading='Stories' limit={4} list={stories} />
        ) : (
          <SkeletonLoading />
        )}
        {/*
         Quotes
        */}
        {quotes.length > 0 ? (
          <PosterCards heading='Quotes' limit={4} list={quotes} />
        ) : (
          <SkeletonLoading />
        )}
        {/*
         Tomorrow
        */}
        {tomorrow.length > 0 ? (
          <PosterCards heading='Tomorrow' limit={4} list={tomorrow} />
        ) : (
          <SkeletonLoading />
        )}
      </Box>
    </Container>
  );
};

export default Home;
