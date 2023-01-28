import React from "react";
import { Box, Grid, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Controller, useFormContext } from "react-hook-form";

const OtherInfo = () => {

    const { control, register } = useFormContext();

    return (
        <React.Fragment >
            <Grid container >
                <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                    <Typography variant="h5">Knowledge of Languages</Typography>
                </Box>
                <Grid container px={2} gap={2}>
                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                name="language"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="language"
                                        label="Language"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('language')}
                                        error={Boolean(errors.language)}
                                        helperText={errors.language ? errors.language.message : " "}
                                    />)}
                            />

                        </Grid>
                        <Grid item sm={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Level
                                    </InputLabel>
                                    <NativeSelect
                                        defaultValue={30}
                                        inputProps={{
                                            name: 'Level',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        <option value={15}>Native Speaker</option>
                                        <option value={30}>Working Knowledge</option>
                                        <option value={45}>Very Good Command</option>
                                        <option value={60}>Highly Proficient</option>
                                    </NativeSelect>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container display="flex" justifyContent="flex-end" mt={4}>
                <Button variant="text" startIcon={<AddIcon color="primary" />}>
                    Add more Languages
                </Button>
            </Grid>
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
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="link1"
                                        label=""
                                        variant="standard"
                                        InputProps={{ startAdornment: (<InputAdornment position="start"> <InstagramIcon /> </InputAdornment>), }}
                                        {...field}
                                        inputRef={register('link1')}
                                    />)}
                            />

                        </Grid>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="link2"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="link2"
                                        label=""
                                        variant="standard"
                                        InputProps={{ startAdornment: (<InputAdornment position="start"> <FacebookOutlinedIcon /> </InputAdornment>), }}
                                        {...field}
                                        inputRef={register('link2')}
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
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="link3"
                                        label=""
                                        variant="standard"
                                        InputProps={{ startAdornment: (<InputAdornment position="start"> <TwitterIcon /> </InputAdornment>), }}
                                        {...field}
                                        inputRef={register('link3')}
                                    />)}
                            />

                        </Grid>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="link4"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="link4"
                                        label=""
                                        variant="standard"
                                        InputProps={{ startAdornment: (<InputAdornment position="start"> <LinkedInIcon /> </InputAdornment>), }}
                                        {...field}
                                        inputRef={register('link4')}
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
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="link5"
                                        label=""
                                        variant="standard"
                                        InputProps={{ startAdornment: (<InputAdornment position="start"> <YouTubeIcon /> </InputAdornment>), }}
                                        {...field}
                                        inputRef={register('link5')}
                                    />)}
                            />

                        </Grid>
                        <Grid item sm={6}>


                            <Controller
                                control={control}
                                name="link6"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="link6"
                                        label=""
                                        variant="standard"
                                        InputProps={{ startAdornment: (<InputAdornment position="start"> <GitHubIcon /> </InputAdornment>), }}
                                        {...field}
                                        inputRef={register('link6')}
                                    />)}
                            />

                        </Grid>
                    </Grid>
                </Grid>
                <Grid container px={2} gap={2}>
                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="otherPlatform"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="otherPlatform"
                                        label="Other Platform Name"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('otherPlatform')}
                                    />)}
                            />

                        </Grid>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="otherPlatformLink"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="otherPlatformLink"
                                        label="Paste Your Handle Link or url"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('otherPlatformLink')}
                                    />)}
                            />

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container display="flex" justifyContent="flex-end" mt={4}>
                <Button variant="text" startIcon={<AddIcon color="primary" />}>
                    Add more Platforms
                </Button>
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
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="hobbies"
                                        label="What do you like?"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('hobbies')}
                                    />)}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container display="flex" justifyContent="flex-end" mt={4}>
                <Button variant="text" startIcon={<AddIcon color="primary" />}>
                    Add more Hobbies
                </Button>
            </Grid>


            <Grid container >
                <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                    <Typography variant="h5" >References</Typography>
                </Box>
                <Grid container px={2} gap={2}>

                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="RefName"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="RefName"
                                        label="Referent Person"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('RefName')}
                                    />)}
                            />

                        </Grid>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="RefDetail"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="RefDetail"
                                        label="Organization Name (Job Profile)"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('RefDetail')}
                                    />)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container display="flex" direction="column" justifyContent="center" alignItems="flex-end" spacing={2}>
                        <Grid item sm={6}>
                            <Box sx={{ width: "280px", maxWidth: '100%' }}>

                                <Controller
                                    control={control}
                                    name="RefEmail"
                                    render={({ field, formState: { errors } }) => (
                                        <TextField
                                            fullWidth
                                            id="RefEmail"
                                            label="Email"
                                            variant="standard"
                                            {...field}
                                            inputRef={register('RefEmail')}
                                        />)}
                                />
                            </Box >
                        </Grid>
                        <Grid item sm={6}>
                            <Box sx={{ width: "280px", maxWidth: '100%' }}>

                                <Controller
                                    control={control}
                                    name="RefMobile"
                                    render={({ field, formState: { errors } }) => (
                                        <TextField
                                            fullWidth
                                            id="RefMobile"
                                            label="Mobile or Phone"
                                            inputProps={{ type: 'number', pattern: '[0-9]*', step: "none" }}
                                            variant="standard"
                                            {...field}
                                            inputRef={register('RefMobile')}
                                        />)}
                                />
                            </Box >
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container display="flex" justifyContent="flex-end" mt={4}>
                <Button variant="text" startIcon={<AddIcon color="primary" />}>
                    Add more Hobbies
                </Button>
            </Grid>

        </ React.Fragment >
    )
}
export default OtherInfo