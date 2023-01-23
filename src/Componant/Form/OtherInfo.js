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

const OtherInfo = () => {
    return (
        <React.Fragment >
            <Grid container >
                <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                    <Typography variant="h5">Knowledge of Languages</Typography>
                </Box>
                <Grid container px={2} gap={2}>
                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>
                            <TextField fullWidth label="Language" variant="standard" />
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
                            <TextField fullWidth variant="standard" InputProps={{ startAdornment: (<InputAdornment position="start"> <InstagramIcon /> </InputAdornment>), }} />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField fullWidth variant="standard" InputProps={{ startAdornment: (<InputAdornment position="start"> <FacebookOutlinedIcon /> </InputAdornment>), }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container p={2} gap={2}>
                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>
                            <TextField fullWidth variant="standard" InputProps={{ startAdornment: (<InputAdornment position="start"> <TwitterIcon /> </InputAdornment>), }} />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField fullWidth variant="standard" InputProps={{ startAdornment: (<InputAdornment position="start"> <LinkedInIcon /> </InputAdornment>), }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container p={2} gap={2}>
                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>
                            <TextField fullWidth variant="standard" InputProps={{ startAdornment: (<InputAdornment position="start"> <YouTubeIcon /> </InputAdornment>), }} />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField fullWidth variant="standard" InputProps={{ startAdornment: (<InputAdornment position="start"> <GitHubIcon /> </InputAdornment>), }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container px={2} gap={2}>
                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>
                            <TextField fullWidth label="Other Platform Name" variant="standard" />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField fullWidth label="Paste Your Handle Link or url" variant="standard" />
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
                            <TextField fullWidth label="What do you like?" variant="standard" />
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
                            <TextField fullWidth label="Referent Person" variant="standard" />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField fullWidth label="Organization Name (Job Profile)" variant="standard" />
                        </Grid>
                    </Grid>
                    <Grid container display="flex" direction="column" justifyContent="center" alignItems="flex-end" spacing={2}>
                        <Grid item sm={6}>
                            <Box sx={{ width: "280px", maxWidth: '100%' }}>
                                <TextField fullWidth label="Email" variant="standard" />
                            </Box >
                        </Grid>
                        <Grid item sm={6}>
                            <Box sx={{ width: "280px", maxWidth: '100%' }}>
                                <TextField fullWidth label="Mobile or Phone" variant="standard" />
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