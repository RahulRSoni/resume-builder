import React from "react";
import { Box, Grid, Typography, Button, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Controller, useFormContext, useFieldArray } from "react-hook-form";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const OtherInfo = () => {

    const { control } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        name: "references",
    });

    return (
        <React.Fragment >

            <Grid container >
                <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                    <Typography variant="h5" >Social Media Handle / Websites</Typography>
                </Box>
                <Grid container p={2} gap={2}>
                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="link1"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        id="link1"
                                        label=""
                                        variant="standard"
                                        InputProps={{ startAdornment: (<InputAdornment position="start"> <InstagramIcon /> </InputAdornment>), }}
                                        {...field}
                                    />)}
                            />

                        </Grid>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="link2"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        id="link2"
                                        label=""
                                        variant="standard"
                                        InputProps={{ startAdornment: (<InputAdornment position="start"> <FacebookOutlinedIcon /> </InputAdornment>), }}
                                        {...field}
                                    />)}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container p={2} gap={2}>
                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="link3"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        id="link3"
                                        label=""
                                        variant="standard"
                                        InputProps={{ startAdornment: (<InputAdornment position="start"> <TwitterIcon /> </InputAdornment>), }}
                                        {...field}
                                    />)}
                            />

                        </Grid>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="link4"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        id="link4"
                                        label=""
                                        variant="standard"
                                        InputProps={{ startAdornment: (<InputAdornment position="start"> <LinkedInIcon /> </InputAdornment>), }}
                                        {...field}
                                    />)}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container p={2} gap={2}>
                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="link5"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        id="link5"
                                        label=""
                                        variant="standard"
                                        InputProps={{ startAdornment: (<InputAdornment position="start"> <YouTubeIcon /> </InputAdornment>), }}
                                        {...field}

                                    />)}
                            />

                        </Grid>
                        <Grid item sm={6}>


                            <Controller
                                control={control}
                                name="link6"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        id="link6"
                                        label=""
                                        variant="standard"
                                        InputProps={{ startAdornment: (<InputAdornment position="start"> <GitHubIcon /> </InputAdornment>), }}
                                        {...field}
                                    />)}
                            />

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container >
                <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                    <Typography variant="h5" >Interest / Hobbies</Typography>
                </Box>

                <Grid container px={2} gap={2}>
                    <Grid container item display="flex" direction="row">
                        <Box sx={{ width: "620px", maxWidth: '100%', }} >

                            <Controller
                                control={control}
                                name="hobbies"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        id="hobbies"
                                        label="What do you like?"
                                        variant="standard"
                                        {...field}
                                    />)}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                <Typography variant="h5" >References</Typography>
            </Box>
            {fields.map((Item, index) => {
                return (
                    <Grid container p={1} key={Item.id}>
                        <Grid container item display="flex" direction="row" justifyContent="space-between" alignItems="center" sx={{ borderBottom: "1px solid #cccccc", mb: 2, pl: 1, borderLeft: '6px solid red' }}>
                            <Grid item>
                                {`${index + 1}.`}
                            </Grid>
                            <Grid item >
                                <IconButton color="primary" aria-label="remove from cart" onClick={() => index !== 0 ? remove(index) : false}>
                                    <ClearOutlinedIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container item display="flex" direction="row" spacing={2}>

                            <Grid item sm={6}>
                                <Controller
                                    control={control}
                                    name={`references[${index}].RefName`}
                                    render={({ field }) => (
                                        <TextField
                                            fullWidth
                                            id="RefName"
                                            label="Referent Person"
                                            variant="standard"
                                            {...field}
                                        />)}
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <Controller
                                    control={control}
                                    name={`references[${index}].RefDetail`}
                                    render={({ field }) => (
                                        <TextField
                                            fullWidth
                                            id="RefDetail"
                                            label="Organization Name (Job Profile)"
                                            variant="standard"
                                            {...field}
                                        />)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container display="flex" direction="column" justifyContent="center" alignItems="flex-end" spacing={2}>
                            <Grid item sm={6}>
                                <Box sx={{ width: "280px", maxWidth: '100%' }}>
                                    <Controller
                                        control={control}
                                        name={`references[${index}].RefEmail`}
                                        render={({ field }) => (
                                            <TextField
                                                fullWidth
                                                id="RefEmail"
                                                label="Email"
                                                variant="standard"
                                                {...field}
                                            />)}
                                    />
                                </Box >
                            </Grid>
                            <Grid item sm={6}>
                                <Box sx={{ width: "280px", maxWidth: '100%' }}>
                                    <Controller
                                        control={control}
                                        name={`references[${index}].RefMobile`}
                                        render={({ field }) => (
                                            <TextField
                                                fullWidth
                                                id="RefMobile"
                                                label="Mobile or Phone"
                                                inputProps={{ type: 'number', pattern: '[0-9]*', step: "none" }}
                                                variant="standard"
                                                {...field}
                                            />)}
                                    />
                                </Box >
                            </Grid>
                        </Grid>
                    </Grid>
                )
            })}
            <Grid container display="flex" justifyContent="flex-end" mt={4}>
                <Button variant="text" startIcon={<AddIcon color="primary" />} onClick={() => {
                    append({
                        refName: "",
                        RefDetail: '',
                        RefEmail: '',
                        RefMobile: '',
                    });
                }}>
                    Add more person
                </Button>
            </Grid>

        </ React.Fragment >
    )
}
export default OtherInfo