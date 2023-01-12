import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Img1 from "../../Assets/img-1.svg"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function Caro1() {
    const style = {
        textDecoration: "none",
        margin: "10px",
    };

    return (
        <React.Fragment>

            <Grid>
                <Grid container alignItems="center" justifyContent="space-evenly" flexDirection={{ xs: "column", md: 'row' }}>
                    <Grid item sm={12} md={5} lg={5} m={2}>
                        <Box>
                            <img src={Img1} className="App-logo" alt="logo" height="400vh" width="500vh" />
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6} m={2}>
                        <Box >
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
        </React.Fragment>
    );
}
