import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Aboutimg from "./Assets/Aboutimg.jpg";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from "@mui/material/IconButton";
import Link from '@mui/material/Link'
import ul from "./Assets/ul.png";
import { styled } from '@mui/material/styles';


const Aboutus = () => {
const Item = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0, 2, 0, 2),
  color: theme.palette.text.secondary,
}));

  return (
    <>
      <Box sx={{ display: "flex", ml: 3, mr: 3 }} >
        <Grid container >
          <Grid item >
            <Item>
            <Typography align="left" variant="h2" sx={{ fontWeight: 'medium' }}>
              Resume <br></br>
              Builder
            </Typography>
            <img src={ul} className="App-logo" alt="logo" height="20vh" />
            <Typography variant="body1" align="justify" sx={{ fontWeight: 'medium', mt: 2 }}>
              The job market is more competitive today than it’s ever been before. Whenever you apply for an open position, it’s safe to assume that dozens if not hundreds of other people are applying for the exact same position as well.
              You’ll need an excellent resume in order to stand out from the competition. But writing effective resumes can be hard — you must elaborate enough on your background and skill set to impress prospective employers, yet you also need to be concise enough to make sure a hiring manager adds you to the “yes” pile quickly.
             </Typography>
            </Item>
          </Grid>
        </Grid>
        <Grid item style={{ borderRadius: 200 }}>.
        <Item>
          <img src={Aboutimg} className="App-logo" alt="logo" height="350vh" width="550vw" />
        </Item>
        </Grid>
      </Box>

     <Box sx={{ ml: 3 }}>
      <Item>
        <Typography align="left" variant="h4" sx={{ fontWeight: 'medium' }}>
          Share with your friends
        </Typography>
        <Grid container rows={{ xs: 12, sm: 12 }}>
          <Grid item >
            <IconButton color="primary" component="label" sx={{ p: 2 }}>
              <Link href="https://web.whatsapp.com/" target="_blank" rel="noopener">
                <WhatsAppIcon />
              </Link>
            </IconButton>
            <IconButton color="primary" component="label" sx={{ p: 2 }}>
              <Link href="https://www.linkedin.com/" target="_blank" rel="noopener">
                <LinkedInIcon />
              </Link>
            </IconButton>
            <IconButton color="primary" component="label" sx={{ p: 2 }}>
              <Link href="https://www.facebook.com" target="_blank" rel="noopener">
                <FacebookIcon />
              </Link>
            </IconButton>
            <IconButton color="primary" component="label" sx={{ p: 2 }}>
              <Link href="https://twitter.com/login?lang=en" target="_blank" rel="noopener">
                <TwitterIcon />
              </Link>
            </IconButton>
            <IconButton color="primary" component="label" sx={{ p: 2 }}>
              <EmailIcon />
              <Link href="https://mail.google.com/mail/u/0/" target="_blank" rel="noopener">
              </Link>
            </IconButton>
          </Grid>
          </Grid>
        </Item>
      </Box>
    </>
  )
}

export default Aboutus
