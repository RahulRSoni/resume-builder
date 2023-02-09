import * as React from 'react';
import { useState } from "react";
import { Box, Grid, Typography, Button, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddIcon from '@mui/icons-material/Add';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Controller, useFormContext, useFieldArray } from "react-hook-form";

const Qualification = () => {
    const [startDate, setStartDate] = useState(null);

    // const [certificateDate, setCertificateDate] = useState(null);

    const { control, register } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        name: "qualificationDetails",
    });


    return (
        <React.Fragment>
            <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                <Typography variant="h5" >Education Details</Typography>
            </Box>
            {fields.map((Item, index) => {
                return (
                    <Grid container px={2} key={Item.id}>
                        <Grid container item display="flex" direction="row" justifyContent="space-between" alignItems="center" sx={{ borderBottom: "1px solid #cccccc", mb: 2, pl:1 ,  borderLeft: '6px solid red'}}>
                            <Grid item>
                                {`${index + 1}.`}
                            </Grid>
                            <Grid item >
                                <IconButton color="primary" aria-label="remove from cart" onClick={() => remove(index)}>
                                    <ClearOutlinedIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container item display="flex" direction="row" spacing={2}>
                            <Grid item sm={6}>
                                <Controller
                                    control={control}
                                    name={`qualificationDetails[${index}].qualification`}
                                    render={({ field, formState: { errors } }) => (
                                        <TextField
                                            fullWidth
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
                                    name={`qualificationDetails[${index}].university`}
                                    render={({ field, formState: { errors } }) => (
                                        <TextField
                                            fullWidth
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
                                    name={`qualificationDetails[${index}].universityCity`}
                                    render={({ field, formState: { errors } }) => (
                                        <TextField
                                            fullWidth
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
                                    name={`qualificationDetails[${index}].universityState`}
                                    render={({ field, formState: { errors } }) => (
                                        <TextField
                                            fullWidth
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
                        <Grid container item display="flex" direction="row" spacing={2} sm={8}>
                            <Grid item sm={6}>
                                <Controller
                                    control={control}
                                    name={`qualificationDetails[${index}].certificateDate`}
                                    render={({ field: { onChange } }) => (
                                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                                            <DatePicker
                                                label="Certificate Date"
                                                value={startDate}
                                                inputFormat="DD-MM-YYYY"
                                                onChange={(newValue) => { setStartDate(newValue); onChange(newValue) }}
                                                renderInput={(params) => <TextField
                                                    {...params}
                                                    variant="standard" />} />
                                        </LocalizationProvider>
                                    )}
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <Controller
                                    control={control}
                                    name={`qualificationDetails[${index}].grade`}
                                    render={({ field, formState: { errors } }) => (
                                        <TextField fullWidth
                                            label="Grade/Percentage%"
                                            variant="standard"
                                            {...field}
                                            inputRef={register('grade')}
                                            error={Boolean(errors.grade)}
                                            helperText={errors.grade ? errors.grade.message : " "}
                                        />)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                )
            })}
            <Grid container display="flex" justifyContent="flex-end" mt={1}>
                <Button variant="text" startIcon={<AddIcon color="primary" />} onClick={() => {
                    append({
                        qualification: "",
                        university: "",
                        universityCity: "",
                        universityState: "",
                        certificateDate: null,
                        grade: "",
                    });
                }}>
                    Add more Educational history
                </Button>
            </Grid>
       </React.Fragment>
    )
}
export default Qualification

