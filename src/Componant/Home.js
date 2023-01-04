import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Img1 from "./Assets/img-1.svg";
import Img2 from "./Assets/img2.svg";
import Img3 from "./Assets/img3.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function Home() {
  const style = {
    textDecoration: "none",
    margin: "15px",
  };

  return (
    <>
      <Box sx={{ display: "flex", mr: 6, ml: 6 }}>
        <Grid container rows={{ xs: 12, sm: 12, md: 6 }} rowSpacing={2}>
          <Grid item sm={12} md={6} sx={{ p: 2 }}>
            <img src={Img1} className="App-logo" alt="logo" height="400vh" />
          </Grid>
          <Grid item sm={12} md={6} sx={{ p: 2, mt: 6 }}>
            <Typography align="center" variant="h2">
              Made Your Own Online Resume
            </Typography>
            <Typography variant="body1" align="justify">
              You create your professional resume in a quick and easy way. 15+
              all type of templates like Professional, Tradisnal,and Morden way.
              All of which can be customized to your liking. Fast and Easy to
              Use Our resume builder lets you easily and quickly create a resume
              using our resume wizard.
            </Typography>
            <IconButton color="primary" component="label">
              <Link to="/templates">
                <ArrowForwardIosIcon />
              </Link>
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: "flex", ml: 6 }}>
        <Grid container rows={{ xs: 12, sm: 12, md: 6 }} rowSpacing={2}>
          <Grid item sm={12} md={6} sx={{ p: 2, mt: 15 }}>
            <Typography align="center" variant="h2">
              Easy To Get Your Resume.
            </Typography>
            <Typography variant="body1" align="justify">
              Ones you created your resume, Our text editor has everything you
              need to customize your resume. Download your resume and send it
              straight to the hiring manager. Whatever format you choose, we’ve
              got you covered.
            </Typography>
            <IconButton color="primary" component="label">
              <Link to="/myresume">
                <ArrowForwardIosIcon />
              </Link>
            </IconButton>
          </Grid>
          <Grid item sm={12} md={6} sx={{ p: 2 }}>
            <img src={Img2} className="App-logo" alt="logo" height="400vh" />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: "flex", mr: 6, ml: 6 }}>
        <Grid container rows={{ xs: 12, sm: 12, md: 6 }} rowSpacing={2}>
          <Grid item sm={12} md={6} sx={{ p: 2, mt: 10 }}>
            <img src={Img3} className="App-logo" alt="logo" height="400vh" />
          </Grid>
          <Grid item sm={12} md={6} sx={{ p: 2, mt: 6 }}>
            <Typography align="center" variant="h2">
              Chose Your Template & Build Your Resume
            </Typography>
            <Typography variant="h6" align="justify">
              <CheckIcon />
              10+ Professional Resume Templates
            </Typography>
            <Typography variant="body1" align="justify">
              Choose from over tem modern and professional templates. All of
              which can be customized to your liking.
            </Typography>
            <Typography variant="h6" align="justify">
              <CheckIcon />
              Fast and Easy to Use
            </Typography>
            <Typography variant="body1" align="justify">
              Our free resume builder lets you easily and quickly create a
              resume using our resume wizard.
            </Typography>
            <Typography variant="h6" align="justify">
              Robust Text Editor
            </Typography>
            <Typography variant="body1" align="justify">
              Our text editor has everything you need to customize your resume.
              Choose different fonts, sizes, bullets and much more.
            </Typography>
            <Typography variant="h6" align="justify">
              <CheckIcon />
              Download your resume as PDF
            </Typography>
            <Typography variant="body1" align="justify">
              Download your resume and send it straight to the hiring manager.
              Whatever format you choose, we’ve got you covered.
            </Typography>
            <IconButton color="primary" component="label">
              <Link to="/templates">
                <ArrowForwardIosIcon />
              </Link>
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ bgcolor: "#cfe8fc", height: 250 }}>
        <List>
          <ListItem>
            <Link to="/templates" underline="none" style={style}>
              Resume Templates
            </Link>

            <Link to="/myresume" underline="none" style={style}>
              My Resume
            </Link>

            <Link to="/about" underline="none" style={style}>
              About Us
            </Link>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
