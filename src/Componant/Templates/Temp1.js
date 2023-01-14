import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';


const images = [
  {
    url: 'C:/Users/rahul/Videos/Resume-builder/resume-builder/src/Assets/Template/M3.png ',
    title: 'image1',
    width: '24%',
  },
  {
    url: '/static/media/C2.792df2f4.png',
    title: 'image2',
    width: '24%',
  },
  {
    url: '/static/media/C3.fb04863b.png',
    title: 'image3',
    width: '24%',
  },
  {
    url: '/static/media/C4.9295ed20.png',
    title: 'image4',
    width: '24%',
  },
  {
    url: '/static/media/M1.5ab6fa21.jpg',
    title: 'image1',
    width: '24%',
  },
  {
    url: '/static/media/M2.b9884756.jpg',
    title: 'image2',
    width: '24%',
  },
  {
    url: '/static/media/M3.27de647f.png',
    title: 'image3',
    width: '24%',
  },
  {
    url: '/static/media/M4.121ed14d.png',
    title: 'image4',
    width: '24%',
  },
  {
    url: '/static/media/P1.0a3481f9.png',
    title: 'image1',
    width: '24%',
  },
  {
    url: '/static/media/P2.941e90f9.png',
    title: 'image2',
    width: '24%',
  },
  {
    url: '/static/media/P3.3f989501.png',
    title: 'image3',
    width: '24%',
  },
  {
    url: '/static/media/P4.dff1012d.png',
    title: 'image4',
    width: '24%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 450,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.5,
    },
    '& .MuiImageMarked-root': {
      opacity: 0.5,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 10,
  right: 10,
  top: 10,
  bottom: 10,
  backgroundSize: 'cover',
  backgroundPosition: 'center 10%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Temp1() {

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-evenly", width: "99%", gap: 2, m: 1 }}>
      {images.map((image, i) => (
        <ImageButton
          focusRipple
          key={image.url}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}