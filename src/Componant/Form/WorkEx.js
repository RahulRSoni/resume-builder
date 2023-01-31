import * as React from 'react';
import { useState } from "react";
import { Box, Grid, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';
import AddIcon from '@mui/icons-material/Add';
// import dayjs from 'dayjs';
import { Controller, useFormContext } from "react-hook-form";

const WorkExp = () => {

    const { control, register } = useFormContext();

    const [startDate, setStartDate] = useState(null);

    const [endDate, setEndDate] = useState(null);

    return (
        <Grid container >
            <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                <Typography variant="h5" >Professional Summary</Typography>
            </Box>
            <Grid container px={2} gap={2}>
                <Box sx={{ width: "620px", maxWidth: '100%', }} >
                    <Controller
                        control={control}
                        name="objective"
                        defaultValues=""
                        rules={{ required: "Please write at least 300 words summary." }}
                        render={({ field, formState: { errors } }) => (
                            <TextField
                                fullWidth
                                id="objective"
                                label="Objective"
                                variant="standard"
                                placeholder='Write your work experience in a summary'
                                {...register("objective", { minLength: { value: 300, message: "Please write at least 300 words summary." } })}
                                multiline rows={4}
                                {...field}
                                inputRef={register('objective')}
                                error={Boolean(errors.objective)}
                                helperText={errors.objective ? errors.objective.message : " "}
                            />)}
                    />
                </Box>
            </Grid>
            <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                <Typography variant="h5">Work Experience</Typography>
            </Box>
            <Grid container px={2} gap={2}>
                <Grid container item display="flex" direction="row" spacing={2}>
                    <Grid item sm={6}>
                        <Controller
                            control={control}
                            name="jobName"
                            defaultValues=""
                            rules={{ required: "Please fill your previous job roll" }}
                            render={({ field, formState: { errors } }) => (
                                <TextField
                                    fullWidth
                                    id="jobName"
                                    label="Job Title"
                                    variant="standard"
                                    {...field}
                                    inputRef={register('jobName')}
                                    error={Boolean(errors.jobName)}
                                    helperText={errors.jobName ? errors.jobName.message : " "}
                                />)}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <Controller
                            control={control}
                            name="companyName"
                            defaultValues=""
                            rules={{ required: "Please fill your previous employer" }}
                            render={({ field, formState: { errors } }) => (
                                <TextField
                                    fullWidth
                                    id="companyName"
                                    label="Organization / Employer"
                                    variant="standard"
                                    {...field}
                                    inputRef={register('companyName')}
                                    error={Boolean(errors.companyName)}
                                    helperText={errors.companyName ? errors.companyName.message : " "}
                                />)}
                        />
                    </Grid>
                </Grid>

                <Grid container item display="flex" direction="row" spacing={2} >
                    <Grid item sm={6}>
                        <Controller
                            control={control}
                            name="companyCity"
                            defaultValues=""
                            rules={{ required: "Please fill your previous employment city" }}
                            render={({ field, formState: { errors } }) => (
                                <TextField
                                    fullWidth
                                    id="companyCity"
                                    label="City"
                                    variant="standard"
                                    {...field}
                                    inputRef={register('companyCity')}
                                    error={Boolean(errors.companyCity)}
                                    helperText={errors.companyCity ? errors.companyCity.message : " "}
                                />)}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <Controller
                            control={control}
                            name="companyState"
                            defaultValues=""
                            rules={{ required: "Please fill your previous employment state" }}
                            render={({ field, formState: { errors } }) => (
                                <TextField
                                    fullWidth
                                    id="companyState"
                                    label="State"
                                    variant="standard"
                                    {...field}
                                    inputRef={register('companyState')}
                                    error={Boolean(errors.companyState)}
                                    helperText={errors.companyState ? errors.companyState.message : " "}
                                />)}
                        />
                    </Grid>
                </Grid>
                <Grid item >
                    <Box sx={{ width: "620px", maxWidth: '100%', }} >
                        <Controller
                            control={control}
                            name="jobSummary"
                            defaultValues=""
                            rules={{ required: "Please mention your job roll above as on your previous job profile" }}
                            render={({ field, formState: { errors } }) => (
                                <TextField
                                    fullWidth
                                    id="jobSummary"
                                    label="Job Duties / Responsibilities"
                                    variant="standard"
                                    multiline rows={3}
                                    {...field}
                                    inputRef={register('jobSummary')}
                                    error={Boolean(errors.jobSummary)}
                                    helperText={errors.jobSummary ? errors.jobSummary.message : " "}
                                />)}
                        />
                    </Box>
                </Grid>
                
                <Grid container item display="flex" direction="row" justifyContent="flex-end" spacing={2} >
                    <Grid item>
                        <FormControl variant="standard" sx={{ width: 150 }} >
                            <Controller
                                control={control}
                                name="jobStarted"
                                defaultValues={null}
                                render={({ field: { name , ...field } }) => (<LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DatePicker label="Started On" 
                                        inputFormat="MMM-YYYY"
                                        views={['year', 'month']}
                                        value={startDate}
                                        onChange={(newValue) => { setStartDate(newValue); }}
                                        renderInput={(params) => <TextField
                                            {...params}
                                            name={name}
                                            {...field}
                                            variant="standard" />} />
                                </LocalizationProvider>
                                )}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item>
                        <FormControl variant="standard" sx={{ width: 150 }}>
                            <Controller
                                control={control}
                                name="jobEnd"
                                defaultValues={null}
                                render={({ field: { name, ...field } }) => (<LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DatePicker label="End On" 
                                    inputFormat="MMM-YYYY"
                                    views={['year', 'month']}
                                        value={endDate}
                                        onChange={(newValue) => { setEndDate(newValue); }}
                                        renderInput={(params) => <TextField
                                            {...params}
                                            name={name}
                                            {...field}
                                            variant="standard" />} />
                                </LocalizationProvider>
                                )}
                            />
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