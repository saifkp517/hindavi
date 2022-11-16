import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

type Props = {
  type?: 'categories';
};

export const SkeletonLoading: NextPage<Props> = ({ type }) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 900) {
      console.log(window.innerWidth > 900);
      setMobile(true);
    }
  }, []);

  if (type === 'categories') {
    return (
      <Box
        sx={{
          marginTop: 2,
        }}
      >
        <Skeleton
          variant='text'
          sx={{ fontSize: '2rem', width: '10rem', marginBottom: 1 }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {[...Array(mobile ? 6 : 4)].map((_, i) => (
            <Stack spacing={1} key={i}>
              <Skeleton
                variant='circular'
                sx={{
                  width: { md: '6rem', xs: '3.5rem' },
                  height: { md: '6rem', xs: '3.5rem' },
                }}
              />
              <Skeleton
                variant='text'
                sx={{ fontSize: { md: '1.2rem', xs: '1rem' } }}
              />
            </Stack>
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        marginTop: 2,
      }}
    >
      <Skeleton
        variant='text'
        sx={{ fontSize: '2rem', width: '10rem', marginBottom: 1 }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {[...Array(mobile ? 4 : 2)].map((_, i) => (
          <Stack spacing={1} key={i}>
            <Skeleton
              variant='rectangular'
              width={mobile ? 310 : 180}
              height={mobile ? 310 : 180}
            />
            <Skeleton
              variant='text'
              sx={{ fontSize: { md: '1.2rem', xs: '1rem' } }}
            />
          </Stack>
        ))}
      </Box>
    </Box>
  );
};
