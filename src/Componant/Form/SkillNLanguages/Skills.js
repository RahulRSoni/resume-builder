import * as React from "react";
import { Box, Grid, Typography, Button, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { Controller, useFormContext, useFieldArray } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Skill = () => {
    const { control, register } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        name: "keySkill",
    });

    const skillLevel = [
        { value: "Novice", text: "Novice" },
        { value: "Beginner", text: "Beginner" },
        { value: "Skillful", text: "Skillful" },
        { value: "Experienced", text: "Experienced" },
        { value: "Expert", text: "Widowed" },
    ];
    return (
        <React.Fragment>
            <Box sx={{ width: "620px", maxWidth: "100%", p: 2 }}>
                <Typography variant="h5">Key Skill</Typography>
            </Box>
            {fields.map((Item, index) => {
                // console.log(Item)
                return (
                    <Grid container display="flex" direction="row" justifyContent="space-around" spacing={2} key={Item.id} sx={{ borderLeft: '6px solid red' }}>
                        <Grid item sx={{ width: '1%', mt: 3 }} >{`${index + 1}.`}</Grid>
                        <Grid item sx={{ width: "44%" }}>
                            <Controller
                                control={control}
                                name={`keySkill[${index}].skill`}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        id="keySkill"
                                        label="Skill"
                                        variant="standard"
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item sx={{ width: "45%" }}>
                            <FormControl variant="standard" fullWidth>
                                <InputLabel id="status-selection">Level</InputLabel>
                                <Controller
                                    control={control}
                                    name={`keySkill[${index}].level`}
                                    defaultValues={{}}
                                    render={({ field }) => (<Select labelId="status-selection" {...field} inputRef={register(`keySkill[${index}].level`)}>
                                        {skillLevel.map((status) => (
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
                            <IconButton
                                color="primary"
                                aria-label="remove from cart"
                                onClick={() => index !== 0 ? remove(index) : false}
                            >
                                <ClearOutlinedIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                );
            })}
            <Grid container display="flex" justifyContent="flex-end" mt={4}>
                <Button
                    variant="text"
                    startIcon={<AddIcon color="primary" />}
                    onClick={() => {
                        append({

                            skill: "",
                            level: "",
                        });
                    }}
                >
                    Add more Skills
                </Button>
            </Grid>
        </React.Fragment>
    );
};

export default Skill;
