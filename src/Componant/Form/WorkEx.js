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

const WorkExp = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <Grid container >
            <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                <Typography variant="h5" component="subtitle2">Professional Summary</Typography>
            </Box>
            <Grid container px={2} gap={2}>
                <Box sx={{ width: "620px", maxWidth: '100%', }} >
                    <TextField fullWidth label="Objective" multiline rows={4} ></TextField>
                </Box>
            </Grid>
            <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                <Typography variant="h5" component="subtitle2">Work Experience</Typography>
            </Box>
            <Grid container px={2} gap={2}>
                <Grid container item display="flex" direction="row" spacing={2}>
                    <Grid item sm={6}>
                        <TextField fullWidth label="Job Title" variant="standard" />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField fullWidth label="Organization / Employer" variant="standard" />
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

                <Grid container item display="flex" direction="row" spacing={2} >
                    <Grid item >
                        <Box sx={{ width: "620px", maxWidth: '100%', }} >
                            <TextField fullWidth variant="standard" label="Job Duties / Responsibilities" multiline rows={3} />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container display="flex" justifyContent="flex-End" direction="row" spacing={2}>
                    <Grid item>
                        <FormControl variant="standard" size="small" label={'margin="dense"'}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker label="Start Date" 
                                    views={['month', 'year']}
                                    minDate={dayjs('2012-03-01')}
                                    maxDate={dayjs('2023-06-01')} 
                                    value={startDate}
                                    onChange={(newValue) => { setStartDate(newValue); }}
                                    renderInput={(params) => <TextField {...params} variant="standard" fullWidth />} />
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl variant="standard" size="small" label={'margin="dense"'}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker label="End Date"
                                    views={['month', 'year']}
                                    minDate={dayjs('2012-03-01')}
                                    maxDate={dayjs('2023-06-01')}
                                    value={endDate}
                                    onChange={(newValue) => { setEndDate(newValue); }}
                                    renderInput={(params) => <TextField {...params} variant="standard" fullWidth />} />
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container display="flex" justifyContent="flex-end" mt={4}>
                <Button variant="text" startIcon={<AddIcon color="primary" />}>
                    Add more Employment history
                </Button>
            </Grid>
        </Grid>
    )
}
export default WorkExp