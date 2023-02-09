import * as React from 'react';
import { useState } from "react";
import { Box, Grid, Typography, IconButton, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Controller, useFormContext, useFieldArray } from "react-hook-form";

const WorkExp = () => {

    const { control, register } = useFormContext();

    const [startDate, setStartDate] = useState(null);

    const [endDate, setEndDate] = useState(null);

    const { fields, append, remove } = useFieldArray({
        name: "companyDetails"
    });

    return (
        <Grid container >
            <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                <Typography variant="h5" >Professional Summary</Typography>
            </Box>
            <Grid container px={2}>
                <Box sx={{ width: "620px", maxWidth: '100%', }} >
                    <Controller
                        control={control}
                        name="objective"
                        rules={{ required: "Please write at least 300 words summary." }}
                        render={({ field, formState: { errors } }) => (
                            <TextField
                                fullWidth
                                label="Objective"
                                variant="standard"
                                placeholder='Write your work experience in a summary'
                                inputRef={register("objective", { minLength: { value: 300, message: "Please write at least 300 words summary." } })}
                                multiline rows={4}
                                {...field}
                                error={Boolean(errors.objective)}
                                helperText={errors.objective ? errors.objective.message : " "}
                            />)}
                    />
                </Box>
            </Grid>
            <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                <Typography variant="h5">Work Experience</Typography>
            </Box>
            {fields.map((Item, index) => {
                return (
                    <Grid container p={2} key={Item.id}>
                        <Grid container item display="flex" direction="row" justifyContent="space-between" alignItems="center" sx={{ borderBottom: "1px solid #cccccc", mb: 2, pl: 1, borderLeft: '6px solid red' }}>
                            <Grid item>
                                {`${index + 1}.`}
                            </Grid>
                            <Grid item >
                                <IconButton color="primary" aria-label="remove from cart" onClick={() => remove(index)}>
                                    <ClearOutlinedIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container item display="flex" direction="row" spacing={2} >
                            <Grid item sm={6}>
                                <Controller
                                    control={control}
                                    name={`companyDetails[${index}].workedProfile`}
                                    render={({ field, formState: { errors } }) => (
                                        
                                        <TextField
                                            fullWidth
                                            id="workedProfile"
                                            label="Job Title"
                                            variant="standard"
                                            {...field}
                                            inputRef={register(`companyDetails[${index}].workedProfile`)}
                                        />)}
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <Controller
                                    control={control}
                                    name={`companyDetails[${index}].companyName`}
                                    rules={{ required: "Please fill your previous employer" }}
                                    render={({ field:{name, restField}, formState: { errors } }) => (
                                        <TextField
                                            fullWidth
                                            id="companyName"
                                            label="Organization / Employer"
                                            variant="standard"
                                            {...restField}
                                            inputRef={register(`companyDetails[${index}].companyName`)}
                                            error={Boolean(errors.name)}
                                            helperText={errors.name ? errors.name.message : " "}
                                        />)}
                                />
                            </Grid>
                        </Grid>

                        <Grid container item display="flex" direction="row" spacing={2} >
                            <Grid item sm={6}>
                                <Controller
                                    control={control}
                                    name={`companyDetails[${index}].companyCity`}
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
                                    name={`companyDetails[${index}].companyState`}
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
                                    name={`companyDetails[${index}].jobSummary`}
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
                        <Grid container display="flex" direction="row" justifyContent="flex-start" alignItems="center" gap={1}>
                            <Grid item >
                                <Controller
                                    control={control}
                                    name={`companyDetails[${index}].jobStarted`}
                                    render={({ field: { onChange } }) => (
                                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                                            <DatePicker label="Started On"
                                                inputFormat="DD-MM-YYYY"
                                                value={startDate}
                                                onChange={(newValue) => { setStartDate(newValue); onChange(newValue) }}
                                                renderInput={(params) => <TextField
                                                    {...params}
                                                    variant="standard" />} />
                                        </LocalizationProvider>
                                    )}
                                />
                            </Grid>
                            <Grid item>

                                <Controller
                                    control={control}
                                    name={`companyDetails[${index}].jobEnd`}
                                    render={({ field: { onChange, restField } }) => (
                                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                                            <DatePicker label="End On"
                                                inputFormat="DD-MM-YYYY"
                                                value={endDate}
                                                onChange={(newValue) => { setEndDate(newValue); onChange(newValue) }}
                                                renderInput={(params) => <TextField
                                                    {...params}
                                                    {...restField}
                                                    variant="standard" />} />
                                        </LocalizationProvider>
                                    )}
                                />

                            </Grid>
                        </Grid>
                    </Grid>

                )
            })}

            <Grid container display="flex" justifyContent="flex-end" mt={3}>
                <Button variant="text" startIcon={<AddIcon color="primary" />} onClick={() => {
                    append({
                        workedProfile: "",
                        companyName: "",
                        companyCity: "",
                        companyState: "",
                        jobSummary: "",
                        jobStarted: null,
                        jobEnd: null
                    });
                }}>
                    Add more Employment history
                </Button>
            </Grid>
        </Grid>
    )
}
export default WorkExp