import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Share from '@mui/icons-material/Share';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Container from '@mui/system/Container';
import { deepOrange } from '@mui/material/colors';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  Img18,
  Img1,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
} from '../../public/index';
import Frame from '../../public/svg/frame.png';
import { EditTools } from '../../components/EditTools/EditTools';
import { useEffect, useRef } from 'react';

interface Props {
  id: { id: string };
}

const Poster: NextPage<Props> = ({ id }) => {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const ColorButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: '#F27C35',
    '&:hover': {
      backgroundColor: deepOrange.A200,
    },
  }));

  const ImagesArr = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,
    Img18,
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context) {
      const image: any = document.getElementById('img');
      const frame: any = document.getElementById('frame');
      // context.drawImage(frame, 0, 0);
      context.drawImage(image, 0, 0, 150, 150);
    }
  }, []);

  return (
    <Container
      className='Poster__main'
      maxWidth='lg'
      sx={{
        paddingY: 2,
        minHeight: '95vh',
        overflowY: 'hidden',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ width: '100%', marginBottom: 1 }}>
        <ColorButton onClick={() => router.back()}>
          <ChevronLeft />
        </ColorButton>
      </Box>
      <Box
        className='Poster__display'
        sx={{
          height: '18rem',
          display: 'grid',
          placeItems: 'center',
          marginY: 'auto',
        }}
      >
        <Card
          className='Poster__display'
          variant='outlined'
          sx={{ height: '18rem', aspectRatio: '1 / 1' }}
        >
          <canvas ref={canvasRef} />
          <Image src={ImagesArr[Number(id.id)]} alt='image' id='img' />
          <Image src={Frame} alt='image' id='frame' />
        </Card>
      </Box>
      <EditTools />
      <Button
        variant='contained'
        fullWidth={true}
        startIcon={<Share />}
        sx={{
          color: '#fff',
          paddingY: 1.5,
          marginTop: 1.5,
        }}
      >
        <Typography variant='body1' component='p'>
          Download / Share
        </Typography>
      </Button>
    </Container>
  );
};

export default Poster;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.params,
    },
  };
};
