import * as React from 'react';
import { useState, useEffect } from "react";
import { Button, Box, Grid } from '@mui/material';
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
            <Grid container display="flex" direction="column" justifyContent="flex-start" alignItems="center" item sm="auto">
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
        </Grid >
    )
}
export default PersonalInfo



            // <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 } }>
            //     <Grid item sm={12} display="flex" direction="row">
            //         <Grid item sm={6}>
            //             <TextField label="First Name" variant="standard" />
            //         </Grid>
            //         <Grid item sm={6}>
            //             <TextField label="Last Name" variant="standard" />
            //         </Grid>
            //     </Grid>

            //     <Grid item sm={12} display="flex" direction="row">
            //         <Grid item sm={6}>
            //             <TextField label="Email" variant="standard" />
            //         </Grid>
            //         <Grid item sm={6}>
            //             <TextField label="Mobile" variant="standard" />
            //         </Grid>
            //     </Grid>
            //     <Grid item sm={12}>
            //         <TextField label="Address" variant="standard" />
            //     </Grid>



            //     <Grid item sm={12} display="flex" direction="row">
            //         <Grid item sm={6}>
            //             <TextField label="City" variant="standard" />
            //         </Grid>
            //         <Grid item sm={6}>
            //             <TextField label="State" variant="standard" />
            //         </Grid>
            //     </Grid>


            //     <Grid item sm={12} display="flex" direction="row">
            //         <Grid item sm={6}>
            //         <TextField label="Postal Code" variant="standard" />
            //     </Grid>
            //         <Grid item sm={6}>
            //         <LocalizationProvider dateAdapter={AdapterDayjs} >
            //             <DatePicker label="Date Of Birth" value={value}
            //                 onChange={(newValue) => { setValue(newValue); }}
            //                 views={['day', 'month', 'year']}
            //                 renderInput={(params) => <TextField {...params} variant="standard" />} />
            //         </LocalizationProvider>
            //         </Grid>
            //     </Grid>
            //     <Grid item sm={12}>
            //             <TextField
            //                 id="outlined-multiline-static"
            //                 label="Objective"
            //                 multiline
            //                 rows={4}
            //                 // defaultValue="Default Value"
            //             />
            //     </Grid>
            // </Grid>