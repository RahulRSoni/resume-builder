import * as React from 'react';
import { useState, useEffect } from "react";
import { Button, Box, Grid, Typography } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PersonalInfo = () => {
    const [value, setValue] = useState(null);

    const [selectedImage, setSelectedImage] = useState(null);

    const [imageUrl, setImageUrl] = useState(null);


    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    return (
        <Grid container >
            <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                <Typography variant="h5" component="subtitle2">Personal Details</Typography>
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
                        <TextField fullWidth label="Wanted Job Title" variant="standard" id="fullWidth" />
                    </Box>
                </Grid>
            </Grid>

            <Grid container px={2} gap={2}>
                <Grid container item display="flex" direction="row" spacing={2}>
                    <Grid item sm={6}>
                        <TextField fullWidth label="First Name" variant="standard" id="fullWidth" />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField fullWidth label="Last Name" variant="standard" id="fullWidth" />
                    </Grid>
                </Grid>

                <Grid container item display="flex" direction="row" spacing={2} >
                    <Grid item sm={6}>
                        <TextField fullWidth label="Email" variant="standard" id="fullWidth" />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField fullWidth label="Mobile or Phone" variant="standard" id="fullWidth" />
                    </Grid>
                </Grid>

                <Grid item >
                    <Box sx={{ width: "620px", maxWidth: '100%', }} >
                        <TextField fullWidth label="Address" variant="standard" id="fullWidth" />
                    </Box>
                </Grid>

                <Grid container item display="flex" direction="row" spacing={2} >
                    <Grid item sm={6}>
                        <TextField fullWidth label="City" variant="standard" id="fullWidth" />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField fullWidth label="State" variant="standard" id="fullWidth" />
                    </Grid>
                </Grid>

                <Grid container item display="flex" direction="row" spacing={2} >
                    <Grid item sm={6}>
                        <TextField fullWidth label="Postal Code" variant="standard" id="fullWidth" />
                    </Grid>
                    <Grid item sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker label="Date Of Birth" value={value}
                                onChange={(newValue) => { setValue(newValue); }}
                                renderInput={(params) => <TextField {...params} variant="standard" fullWidth id="fullWidth" />} />
                        </LocalizationProvider>
                    </Grid>
                </Grid>

                <Grid item >
                    <Box sx={{ width: "620px", maxWidth: '100%', }} >
                        <TextField fullWidth id="outlined-multiline-static" label="Objective" multiline rows={4} ></TextField>
                    </Box>
                </Grid>

            </Grid>
        </Grid >
    )
}
export default PersonalInfo