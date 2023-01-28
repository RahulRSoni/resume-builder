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
import { Controller, useFormContext } from "react-hook-form";

const EduInfo = () => {
    const [startDate, setStartDate] = useState(null);

    const { control, register } = useFormContext();

    return (
        <React.Fragment>
            <Grid container >
                <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                    <Typography variant="h5" >Education Details</Typography>
                </Box>
                <Grid container px={2} gap={2}>
                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="qualification"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="qualification"
                                        label="Qualification"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('qualification')}
                                        error={Boolean(errors.qualification)}
                                        helperText={errors.qualification ? errors.qualification.message : " "}
                                    />)}
                            />
                        </Grid>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="university"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="university"
                                        label="University / School"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('university')}
                                        error={Boolean(errors.university)}
                                        helperText={errors.university ? errors.university.message : " "}
                                    />)}
                            />
                        </Grid>
                    </Grid>

                    <Grid container item display="flex" direction="row" spacing={2} >
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="universityCity"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="universityCity"
                                        label="City"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('universityCity')}
                                        error={Boolean(errors.universityCity)}
                                        helperText={errors.universityCity ? errors.universityCity.message : " "}
                                    />)}
                            />

                        </Grid>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="universityState"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="universityState"
                                        label="State"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('universityState')}
                                        error={Boolean(errors.universityState)}
                                        helperText={errors.universityState ? errors.universityState.message : " "}
                                    />)}
                            />


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

                            <Controller
                                control={control}
                                name="courseName"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="courseName"
                                        label="Course Name"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('courseName')}
                                        error={Boolean(errors.courseName)}
                                        helperText={errors.courseName ? errors.courseName.message : " "}
                                    />)}
                            />
                        </Grid>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="courseBy"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="courseBy"
                                        label="University / Institute"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('courseBy')}
                                        error={Boolean(errors.courseBy)}
                                        helperText={errors.courseBy ? errors.courseBy.message : " "}
                                    />)}
                            />

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