import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


export default function Templates1() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Paper>
                            <Typography>
            <p>5555</p>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}