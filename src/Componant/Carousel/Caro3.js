import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Img3 from "../../Assets/img3.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";

export default function Home() {
    const style = {
        textDecoration: "none",
        margin: "10px",
    };

    return (
        <>
            <Grid>
                <Grid container alignItems="center" justifyContent="space-evenly" flexDirection={{ xs: "column", md: 'row' }}>
                    <Grid item sm={12} md={5} lg={5} m={2}>
                        <Box>
                            <img src={Img3} className="App-logo" alt="logo" height="400vh" width="500vh" />
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6} m={2}>
                        <Box >
                            <Typography align="center" variant="h2">
                                Chose Your Template & Build Your Resume
                            </Typography>
                            <Typography variant="h6" align="justify">
                                <CheckIcon />
                                10+ Professional Resume Templates
                            </Typography>
                            <Typography variant="body1" align="justify" ml={3}>
                                Choose from over tem modern and professional templates. All of
                                which can be customized to your liking.
                            </Typography>
                            <Typography variant="h6" align="justify">
                                <CheckIcon />
                                Fast and Easy to Use
                            </Typography>
                            <Typography variant="body1" align="justify" ml={3}>
                                Our free resume builder lets you easily and quickly create a
                                resume using our resume wizard.
                            </Typography>
                            <Typography variant="h6" align="justify">
                                <CheckIcon />
                                Robust Text Editor
                            </Typography>
                            <Typography variant="body1" align="justify" ml={3}>
                                Our text editor has everything you need to customize your resume.
                                Choose different fonts, sizes, bullets and much more.
                            </Typography>
                            <Typography variant="h6" align="justify">
                                <CheckIcon />
                                Download your resume as PDF
                            </Typography>
                            <Typography variant="body1" align="justify" ml={3}>
                                Download your resume and send it straight to the hiring manager.
                                Whatever format you choose, we’ve got you covered.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="text" endIcon={<ArrowForwardIosIcon />}>
                                <Link to="/templates" style={style}>
                                    Go to templates
                                </Link>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
