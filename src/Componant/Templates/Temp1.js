import { Box } from '@mui/system';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import img7 from "../../Assets/Template/C1.png"
import img3 from "../../Assets/Template/C2.png"
import img8 from "../../Assets/Template/C3.png"
import img4 from "../../Assets/Template/C4.png"
import img5 from "../../Assets/Template/M1.jpg"
import img6 from "../../Assets/Template/M2.jpg"
import img12 from "../../Assets/Template/M3.png"
import img1 from "../../Assets/Template/M4.png"
import img9 from "../../Assets/Template/P1.png"
import img10 from "../../Assets/Template/P2.png"
import img11 from "../../Assets/Template/P3.png"
import img2 from "../../Assets/Template/P4.png"


const images = [
  {
    url: `${img1}`,
    title: 'Use Template',
    width: '24%',
  },
  {
    url: `${img2}`,
    title: 'Use Template',
    width: '24%',
  },
  {
    url: `${img3}`,
    title: 'Use Template',
    width: '24%',
  },
  {
    url: `${img4}`,
    title: 'Use Template',
    width: '24%',
  },
  {
    url: `${img5}`,
    title: 'Use Template',
    width: '24%',
  },
  {
    url: `${img6}`,
    title: 'Use Template',
    width: '24%',
  },
  {
    url: `${img7}`,
    title: 'Use Template',
    width: '24%',
  },
  {
    url: `${img8}`,
    title: 'Use Template',
    width: '24%',
  },
  {
    url: `${img9}`,
    title: 'Use Template',
    width: '24%',
  },
  {
    url: `${img10}`,
    title: 'Use Template',
    width: '24%',
  },
  {
    url: `${img11}`,
    title: 'Use Template',
    width: '24%',
  },
  {
    url: `${img12}`,
    title: 'Use Template',
    width: '24%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 450,
  width: 350,
  [theme.breakpoints.between('xs','lg')]: {
    width: '100% !important', // Overrides inline-style
    height: "100vh",
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
      backgroundColor:"#42a5f5",
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
  bottom:0,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 0,
  width: 0,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Temp1() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, m: 1 }}>
      {images.map((image, i) => (
        <ImageButton
          focusRipple variant="contained"
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
  )
}  