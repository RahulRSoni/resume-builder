import { TextField } from '@mui/material';
import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'


const FormInputText = ( name, label, rules  ) => {

  const { control, formState: { errors } } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) =>
      (<TextField
        fullWidth
        label={label}
        variant="standard"
        {...field}
        error={Boolean(errors.name)}
        helperText={errors.name ? errors.jobTitle.name : " "}
      />)}
    />
  )
}

export default FormInputText
