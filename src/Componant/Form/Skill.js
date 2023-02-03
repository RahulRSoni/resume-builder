import * as React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Slider from '@mui/material/Slider';
import { Controller, useFormContext } from "react-hook-form";

const Skill = () => {
    const [value, setValue] = React.useState(3);

    const { control, register } = useFormContext();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function valueLabelFormat(newValue) {
        const units = ['Novice', 'Beginner', 'Skillful', 'Experienced', 'Expert'];
        return `${units[newValue - 1]}`;
    }

    return (
        <React.Fragment>
            <Grid container >
                <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                    <Typography variant="h5">Key Skill</Typography>
                </Box>
                <Grid container px={2} gap={2}>
                    <Grid container item display="flex" direction="row" spacing={2}>
                        <Grid item sm={6}>

                            <Controller
                                control={control}
                                name="keySkill"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="keySkill"
                                        label="Skill"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('keySkill')}
                                        error={Boolean(errors.keySkill)}
                                        helperText={errors.keySkill ? errors.keySkill.message : " "}
                                    />)}
                            />

                        </Grid>
                        <Grid item sm={6}>
                            <Box sx={{ width: "100%" }}>
                                <Typography id="non-linear-slider" gutterBottom>
                                    Level: {valueLabelFormat(value)}
                                </Typography>
                                <Slider
                                    value={value}
                                    min={1}
                                    step={1}
                                    max={5}
                                    getAriaValueText={valueLabelFormat}
                                    valueLabelFormat={valueLabelFormat}
                                    onChange={handleChange}
                                    aria-labelledby="non-linear-slider"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container display="flex" justifyContent="flex-end" mt={4}>
                <Button variant="text" startIcon={<AddIcon color="primary" />}>
                    Add more Skills
                </Button>
            </Grid>

            <Grid container >
                <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                    <Typography variant="h5">Other Skills</Typography>
                </Box>
                <Grid container px={2} gap={2}>
                    <Grid container item display="flex" direction="row">
                        <Box sx={{ width: "620px", maxWidth: '100%', }} >

                            <Controller
                                control={control}
                                name="otherSkill"
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        label="Mention hare your other key skill."
                                        variant="standard"
                                        {...field}
                                        inputRef={register('otherSkill')}
                                        error={Boolean(errors.otherSkill)}
                                        helperText={errors.otherSkill ? errors.otherSkill.message : " "}
                                    />)}
                            />

                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container display="flex" justifyContent="flex-end" mt={4}>
                <Button variant="text" startIcon={<AddIcon color="primary" />}>
                    Add more Skills
                </Button>
            </Grid>
        </React.Fragment>
    )
}

export default Skill
