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

    const { control, register } = useFormContext();

    const [value, setValue] = useState(null);

    const [selectedImage, setSelectedImage] = useState(null);

    const [imageUrl, setImageUrl] = useState(null);

    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const [marital, setMarital] = React.useState('');

    const handleChangeMaterial = (event) => {
        setMarital(event.target.value);
    };

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

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
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="job-title"
                                        label="Wanted Job Title"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('jobTitle')}
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
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        label="First-Name"
                                        variant="standard"
                                        {...field}
                                        {...register('firstName')}
                                        error={Boolean(errors.firstName)}
                                        helperText={errors.firstName ? errors.firstName.message : " "}
                                    />)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                name="lastName"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        label="Last-Name"
                                        variant="standard"
                                        {...field}
                                        {...register('lastName')}
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
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        id='email'
                                        variant="standard"
                                        {...field}
                                        {...register('email')}
                                        error={Boolean(errors.email)}
                                        helperText={errors.email ? errors.email.message : " "}
                                    />)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                name="mobile"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        label="Mobile or Phone"
                                        id='mobile'
                                        variant="standard"
                                        {...field}
                                        {...register('mobile')}
                                        inputProps={{ type: 'number', pattern: '[0-9]*', step: 1 }}
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
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        label="Address"
                                        id='address'
                                        variant="standard"
                                        {...field}
                                        {...register('address')}
                                    />)}
                            />
                        </Box>
                    </Grid>

                    <Grid container item display="flex" direction="row" spacing={2} >
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                name="city"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        label="City"
                                        id='city'
                                        variant="standard"
                                        {...field}
                                        {...register('city')}
                                        error={Boolean(errors.city)}
                                        helperText={errors.city ? errors.city.message : " "}
                                    />)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                name="state"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth

                                        label="State"
                                        id='state'
                                        variant="standard"
                                        {...field}
                                        {...register('state')}
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
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        label="Postal Code"
                                        id='pinCode'
                                        variant="standard"
                                        {...field}
                                        {...register('pinCode')}
                                        inputProps={{ type: 'number', pattern: '[0-9]*', step: "none" }}
                                    />)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                name="country"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        label="Country"
                                        id='country'
                                        variant="standard"
                                        {...field}
                                        {...register('country')}
                                        error={Boolean(errors.country)}
                                        helperText={errors.city ? errors.country.message : " "}
                                    />)}
                            />
                        </Grid>
                    </Grid>

                    <Grid container item display="flex" justifyContent="flex-end" >
                        <FormControl variant="standard" sx={{ width: "25px", minWidth: "25%" }} size="small" label={'margin="dense"'}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker label="DOB" name="age" value={value}
                                    inputFormat="DD-MM-YYYY"
                                    onChange={(newValue) => { setValue(newValue); }}
                                    renderInput={(params) => <TextField {...params} variant="standard" fullWidth />} />
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>

                    <Grid container item display="flex" justifyContent="flex-end" >
                        <FormControl variant="standard" sx={{ width: "25px", minWidth: "25%" }} size="small" label={'margin="dense"'}>
                            <InputLabel id="gender-selection">Gender</InputLabel>
                            <Select
                                labelId="gender-selection"
                                value={gender}
                                onChange={handleChange}
                                label="gender">
                                <MenuItem value=""><em>none</em></MenuItem>
                                <MenuItem value={5}>Male</MenuItem>
                                <MenuItem value={10}>Female</MenuItem>
                                <MenuItem value={15}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid container item display="flex" justifyContent="flex-end">
                        <FormControl variant="standard" sx={{ width: "25px", minWidth: "25%" }} size="small" label={'margin="dense"'}>
                            <InputLabel id="gender-selection">Marital status</InputLabel>
                            <Select
                                labelId="gender-selection"
                                value={marital}
                                onChange={handleChangeMaterial}
                                label="gender">
                                <MenuItem value=""><em>none</em></MenuItem>
                                <MenuItem value={5}>Single</MenuItem>
                                <MenuItem value={10}>Married</MenuItem>
                                <MenuItem value={15}>Divorced</MenuItem>
                                <MenuItem value={20}>Widowed</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid >
        </FormControl>
    )
}

export default PersonalInfo