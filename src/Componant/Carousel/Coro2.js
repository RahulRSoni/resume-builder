import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";
import Img2 from "../../Assets/img2.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function Home() {
    const style = {
        textDecoration: "none",
        margin: "10px",
    };

    return (
        <React.Fragment>
            <Paper sx={{height:425}}>
                <Grid container alignItems="center" justifyContent="space-evenly" flexDirection={{ xs: "column-reverse", md: 'row' }}>
                    <Grid item sm={12} md={6} lg={6} m={2}>
                        <Box >
                            <Typography align="center" variant="h2">
                                Easy To Get Your Resume.
                            </Typography>
                            <Typography variant="body1" align="justify">
                                Ones you created your resume, Our text editor has everything you
                                need to customize your resume. Download your resume and send it
                                straight to the hiring manager. Whatever format you choose, we’ve
                                got you covered.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="text" endIcon={<ArrowForwardIosIcon />}>
                                <Link to="/myresume" style={style}>
                                    See maded by you
                                </Link>
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={5} lg={5} m={2}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <img src={Img2} className="App-logo" alt="logo" height="400vh" width="500vh" />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}
