import * as React from 'react';
import { Box, Grid, Typography, Button, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Controller, useFormContext, useFieldArray } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';


const Languages = () => {
    const { control, register } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        name: "language",
    });

    const levels = [
        { value: "Working-Knowledge", text: "Working Knowledge" },
        { value: "Good-Working-Knowledge", text: "Good Working Knowledge" },
        { value: "Native-Speaker", text: "Native Speaker" },
        { value: "Highly-Proficient", text: "Highly Proficient" },
    ];
    return (
        <React.Fragment>
            <Grid container >
                <Box sx={{ width: "620px", maxWidth: '100%', p: 2 }}>
                    <Typography variant="h5">Knowledge of Languages</Typography>
                </Box>
                {fields.map((Item, index) => {
                    return (
                        <Grid container item display="flex" direction="row" justifyContent="space-around" spacing={2} key={Item.id} sx={{borderLeft: '6px solid red' }}>

                            <Grid item sx={{ width: '1%', mt:3 }} >{`${index + 1}.`}</Grid>
                            <Grid item sx={{ width: '44%' }}>
                                <Controller
                                    control={control}
                                    name={`language[${index}].languageName`}
                                    render={({ field }) => (
                                        <TextField
                                            fullWidth
                                            label="Language"
                                            variant="standard"
                                            {...field}
                                        />)}
                                />

                            </Grid>
                            <Grid item sx={{ width: '45%' }}>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel id="status-selection">Level</InputLabel>
                                    <Controller
                                        control={control}
                                        name={`language[${index}].level`}
                                        defaultValues={{}}
                                        render={({ field }) => (<Select labelId="status-selection" {...field} inputRef={register(`language[${index}].level`)}>
                                            {levels.map((status) => (
                                                <MenuItem key={status.value} value={status.value}>
                                                    {status.text}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        )}
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item sx={{ mt: 2 }}>
                                <IconButton color="primary" aria-label="remove from cart" onClick={() => index !== 0 ? remove(index) : false}>
                                    <ClearOutlinedIcon />
                                </IconButton>
                            </Grid>

                        </Grid>
                    )
                })}
            </Grid>
            <Grid container display="flex" justifyContent="flex-end" mt={4}>
                <Button variant="text" startIcon={<AddIcon color="primary" />} onClick={() => {
                    append({
                        languageName: "",
                        level: "",
                    });
                }}>
                    Add more Languages
                </Button>
            </Grid>
        </React.Fragment>
    )
}

export default Languages
