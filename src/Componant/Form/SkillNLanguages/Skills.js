import * as React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Slider from '@mui/material/Slider';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Controller, useFormContext, useFieldArray } from "react-hook-form";

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

    const { fields, append, remove } = useFieldArray({
        name: "keySkill",
    });

    return (
        <React.Fragment>
            <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                <Typography variant="h5">Key Skill</Typography>
            </Box>
            {fields.map((Item, index) => {
                return (
                    <Grid container item display="flex" direction="row" spacing={2} key={Item.id}>
                        <Grid item sm={6}>
                            <Controller
                                control={control}
                                name={`keySkill[${index}].skill`}
                                render={({ field, formState: { errors } }) => (
                                    <TextField
                                        fullWidth
                                        id="keySkill"
                                        label="Skill"
                                        variant="standard"
                                        {...field}
                                        inputRef={register('skill')}
                                        error={Boolean(errors.skill)}
                                        helperText={errors.skill ? errors.skill.message : " "}
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
                        <Grid item >
                            <Button variant="text" startIcon={<ClearOutlinedIcon color="primary" />} onClick={() => remove(index)}>
                                Remove
                            </Button>
                        </Grid>
                    </Grid>
                )
            })}
            <Grid container display="flex" justifyContent="flex-end" mt={4}>
                <Button variant="text" startIcon={<AddIcon color="primary" />} onClick={() => {
                    append({
                        skill: "",
                        level: "",
                    });
                }}>
                    Add more Skills
                </Button>
            </Grid>
        </React.Fragment>
    )
}

export default Skill
