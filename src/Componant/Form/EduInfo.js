import * as React from 'react';
import { useState } from "react";
import { Box, Grid, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';
import AddIcon from '@mui/icons-material/Add';
import dayjs from 'dayjs';

const EduInfo = () => {
    const [startDate, setStartDate] = useState(null);


    return (
        <React.Fragment>
            <Grid container >
                <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                    <Typography variant="h5" >Education Details</Typography>
                </Box>
                <Grid container px={2} gap={2}>
                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>
                            <TextField fullWidth label="Qualification" variant="standard" />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField fullWidth label="University / School" variant="standard" />
                        </Grid>
                    </Grid>

                    <Grid container item display="flex" direction="row" spacing={2} >
                        <Grid item sm={6}>
                            <TextField fullWidth label="City" variant="standard" />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField fullWidth label="State" variant="standard" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container display="flex" direction="row" justifyContent="flex-end" alignItems="flex-end" p={2} gap={2}>
                    <Grid item >
                        <FormControl variant="standard" sx={{ width: "150px", minWidth: "100%" }} size="small" >
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker label="Certificate Date" value={startDate}
                                    views={['month', 'year']}
                                    minDate={dayjs('2012-03-01')}
                                    maxDate={dayjs('2023-06-01')}
                                    onChange={(newValue) => { setStartDate(newValue); }}
                                    renderInput={(params) => <TextField {...params} variant="standard" />} />
                            </LocalizationProvider>

                        </FormControl>
                    </Grid>
                    <Grid item >
                        <FormControl variant="standard" sx={{ width: "150px", minWidth: "100%" }} size="small">
                            <TextField fullWidth label="Grade/Percentage%" variant="standard" />
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container display="flex" justifyContent="flex-end" mt={4}>
                <Button variant="text" startIcon={<AddIcon color="primary" />}>
                    Add more Educational history
                </Button>
            </Grid>

            <Grid container >
                <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                    <Typography variant="h5" >Education Details</Typography>
                </Box>
                <Grid container px={2} gap={2}>
                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>
                            <TextField fullWidth label="Course Name" variant="standard" />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField fullWidth label="University / Institute" variant="standard" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container display="flex" direction="row" justifyContent="flex-end" alignItems="flex-end" p={2} gap={2}>
                    <Grid item >
                        <FormControl variant="standard" sx={{ width: "150px", minWidth: "100%" }} size="small" >
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker label="Certificate Date" value={startDate}
                                    views={['month', 'year']}
                                    minDate={dayjs('2012-03-01')}
                                    maxDate={dayjs('2023-06-01')}
                                    onChange={(newValue) => { setStartDate(newValue); }}
                                    renderInput={(params) => <TextField {...params} variant="standard" />} />
                            </LocalizationProvider>

                        </FormControl>
                    </Grid>
                    <Grid item >
                        <FormControl variant="standard" sx={{ width: "150px", minWidth: "100%" }} size="small">
                            <TextField fullWidth label="Grade" variant="standard" />
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container display="flex" justifyContent="flex-end" mt={4}>
                <Button variant="text" startIcon={<AddIcon color="primary" />}>
                    Add more Certificate
                </Button>
            </Grid>
        </React.Fragment>
    )
}
export default EduInfo