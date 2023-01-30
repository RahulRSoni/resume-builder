import * as React from 'react';
import { useState, useEffect } from "react";
import { Button, Box, Grid, Typography } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller, useFormContext } from "react-hook-form";

const PersonalInfo = () => {

    const { control, formState: { errors } } = useFormContext();

    const [value, setValue] = useState(null);

    const [selectedImage, setSelectedImage] = useState(null);

    const [imageUrl, setImageUrl] = useState(null);

    // const [gender, setGender] = React.useState('');

    // const handleChange = (event) => {
    //     setGender(event.target.value);
    // };

    // const [marital, setMarital] = React.useState('');

    // const handleChangeMaterial = (event) => {
    //     setMarital(event.target.value);
    // };

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);


    const personGender = [
        { value: "male", text: "Male" },
        { value: "female", text: "Female" },
        { value: "other", text: "Other" },
    ];

    const maritalStatus = [
        { value: "single", text: "Single" },
        { value: "married", text: "Married" },
        { value: "divorced", text: "Divorced" },
        { value: "widowed", text: "Widowed" },
    ];

    return (

        <FormControl>
            <Grid container >
                <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                    <Typography variant="h5">Personal Information</Typography>
                </Box>
                <Grid container display="flex" direction="column" justifyContent="flex-start" alignItems="center" item sm="auto" height="215px">
                    <Grid item>
                        <Avatar src="/broken-image.jpg" sizes="large" sx={{ width: 150, height: 150, }}>
                            {imageUrl && selectedImage && (
                                <Box mt={6} textAlign="center" >
                                    <div>Image Preview:</div>
                                    <img src={imageUrl} alt={selectedImage.name} height="220px" />
                                </Box>)}
                        </Avatar>
                    </Grid>
                    <Grid item >
                        <Button variant="text" component="label" startIcon={<PhotoCamera />} sx={{ m: 2 }} size="small">
                            <input
                                accept="image/*"
                                type="file"
                                id="select-image"
                                style={{ display: "none" }}
                                onChange={(e) => setSelectedImage(e.target.files[0])}
                            />
                            <label htmlFor="select-image">
                                Change Profile Photo
                            </label>
                        </Button>
                    </Grid>
                    <Grid container justifyContent="flex-start" alignItems="center" item sm={6}>
                        <Box sx={{ width: 400, maxWidth: '100%', }} >
                            <Controller
                                control={control}
                                name="jobTitle"
                                rules={{ required: "Please write your required profile name" }}
                                defaultValues=""
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        id="job-title"
                                        label="Wanted Job Title"
                                        variant="standard"
                                        {...field}
                                        error={Boolean(errors.jobTitle)}
                                        helperText={errors.jobTitle ? errors.jobTitle.message : " "}
                                    />)}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container px={2} gap={2}>
                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                name="firstName"
                                rules={{ required: "Please write your First name" }}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label="First-Name"
                                        variant="standard"
                                        {...field}
                                        error={Boolean(errors.firstName)}
                                        helperText={errors.firstName ? errors.firstName.message : " "}
                                    />)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                name="lastName"
                                rules={{ required: "Please write your Last name" }}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label="Last-Name"
                                        variant="standard"
                                        {...field}
                                        error={Boolean(errors.lastName)}
                                        helperText={errors.lastName ? errors.lastName.message : " "}
                                    />)}
                            />
                        </Grid>
                    </Grid>

                    <Grid container item display="flex" direction="row" spacing={2} >
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                name="email"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        id='email'
                                        variant="standard"
                                        {...field}
                                    />)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                rules={{ required: "Please write your Mobile Number" }}
                                name="mobile"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label="Mobile or Phone"
                                        id='mobile'
                                        variant="standard"
                                        {...field}
                                        inputProps={{ type: 'number', placeholder: '+91-0000-000-000', min: "0", }}
                                        error={Boolean(errors.mobile)}
                                        helperText={errors.mobile ? errors.mobile.message : " "}
                                    />)}
                            />
                        </Grid>
                    </Grid>

                    <Grid item >
                        <Box sx={{ width: "620px", maxWidth: '100%', }} >
                            <Controller
                                control={control}
                                name="address"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label="Address"
                                        variant="standard"
                                        {...field}
                                    />)}
                            />
                        </Box>
                    </Grid>

                    <Grid container item display="flex" direction="row" spacing={2} >
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                name="city"
                                rules={{ required: "Please write your city name" }}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label="City"
                                        variant="standard"
                                        {...field}
                                        error={Boolean(errors.city)}
                                        helperText={errors.city ? errors.city.message : " "}
                                    />)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                name="state"
                                rules={{ required: "Please write your state name" }}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label="State"
                                        id='state'
                                        variant="standard"
                                        {...field}
                                        error={Boolean(errors.state)}
                                        helperText={errors.city ? errors.state.message : " "}
                                    />)}
                            />
                        </Grid>
                    </Grid>

                    <Grid container item display="flex" direction="row" spacing={2} >
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                name="pinCode"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label="Postal Code"
                                        id='pinCode'
                                        variant="standard"
                                        {...field}
                                        inputProps={{ type: 'number', pattern: '[0-9]*', step: "none" }}
                                    />)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                name="country"
                                rules={{ required: "Please write your country name" }}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label="Country"
                                        id='country'
                                        variant="standard"
                                        {...field}
                                        error={Boolean(errors.country)}
                                        helperText={errors.city ? errors.country.message : " "}
                                    />)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="space-between" alignItems="flex-end">
                        <Grid item>
                            <FormControl variant="standard" sx={{ width: 150 }} >
                                <Controller
                                    control={control}
                                    name="age"
                                    render={({ field }) => (<LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DatePicker label="DOB" value={value}
                                            inputFormat="DD-MM-YYYY"
                                            onChange={(newValue) => { setValue(newValue); }}
                                            renderInput={(params) => <TextField
                                                {...params}
                                                {...field}
                                                variant="standard" />} />
                                    </LocalizationProvider>
                                    )}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item >
                            <FormControl variant="standard" sx={{ minWidth: 150 }}>
                                <InputLabel id="gender-selection">Gender</InputLabel>
                                <Controller
                                    control={control}
                                    name="gender"
                                    render={({ field }) => (<Select labelId="gender-selection" {...field}>
                                        {personGender.map((person) => (
                                            <MenuItem key={person.value} value={person.value}>
                                                {person.text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    )}
                                />
                            </FormControl>

                        </Grid>
                        <Grid item >
                            <FormControl variant="standard" sx={{ minWidth: 150 }}>
                                <InputLabel id="status-selection">Marital status</InputLabel>
                                <Controller
                                    control={control}
                                    name="maritalStatus"
                                    render={({ field }) => (<Select labelId="status-selection" {...field}>
                                        {maritalStatus.map((status) => (
                                            <MenuItem key={status.value} value={status.value}>
                                                {status.text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    )}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </FormControl >
    )
}

export default PersonalInfo