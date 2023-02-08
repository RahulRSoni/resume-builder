import * as React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Controller, useFormContext } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const Languages = () => {
    const { control, register } = useFormContext();
   return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Languages
