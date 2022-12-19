import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Share from '@mui/icons-material/Share';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import PocketBase from 'pocketbase';
import Card from '@mui/material/Card';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Container from '@mui/system/Container';
import { deepOrange } from '@mui/material/colors';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  Frame1,
  Frame10,
  Frame2,
  Frame3,
  Frame4,
  Frame5,
  Frame6,
  Frame7,
  Frame8,
  Frame9,
} from '../../public/svg/index';
import { EditTools } from '../../components/EditTools/EditTools';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { PosterType } from '../home';

interface Props {
  id: { id: string };
}

const Poster: NextPage<Props> = ({ id }) => {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const client = new PocketBase('http://127.0.0.1:8090');

  const userDet = client?.authStore?.model?.profile!;
  console.log(userDet)

  const [frameIndex, setFrameIndex] = useState(0);
  const [img, setImg] = useState('');

  const ColorButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: '#F27C35',
    '&:hover': {
      backgroundColor: deepOrange.A200,
    },
  }));

  const framesArr = [
    '',
    Frame1,
    Frame2,
    Frame3,
    Frame4,
    Frame5,
    Frame6,
    Frame7,
    Frame8,
    Frame9,
    Frame10,
  ];

  const frameHeights = [0, 80, 100, 155, 141, 160, 160, 160, 100, 50, 850];

  useEffect(() => {
    (async () => {
      console.log(id);
      const result: PosterType = await axios
        .get(
          `http://127.0.0.1:8090/api/collections/posters/records/${id}`
        )
        .then((res) => res.data);
      setImg(result.image);
    })();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context && img) {
      const image: HTMLImageElement = new (window as any).Image();
      const frame: HTMLImageElement = new (window as any).Image();
      image.src = `http://127.0.0.1:8090/api/files/posters/${id}/${img}`;
      frame.src = framesArr[frameIndex].src;
      image.addEventListener(
        'load',
        () => {
          if (canvas?.width && canvas.height) {
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            context.drawImage(image, 0, 0, canvas?.width, canvas?.height);
          }
        },
        false
      );
      frame.addEventListener(
        'load',
        () => {
          if (canvas?.width && canvas?.height) {
            context.drawImage(
              frame,
              0,
              canvas.height - frame.naturalHeight - frameHeights[frameIndex]
            );
          }
        },
        false
      );
    }
  }, [frameIndex, img]);

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
      <ul>
        <li>PhoneNo: {userDet?.phoneno}</li>
        <li>Username: {userDet?.username}</li>
        <li>Userid: {userDet?.userId}</li>
        <li>Coins: {userDet?.coins}</li>
      </ul>
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
          {/* <Image src={ImagesArr[Number(id.id)]} alt='image' id='img' /> */}
        </Card>
      </Box>
      <EditTools
        frameIndex={frameIndex}
        setFrameIndex={setFrameIndex}
        framesLength={framesArr.length}
      />
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
  const { id } = context.query;
  return {
    props: {
      id,
    },
  };
};
