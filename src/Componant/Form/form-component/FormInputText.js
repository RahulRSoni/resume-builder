import { TextField } from '@mui/material';
import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'


const FormInputText = ( name, label, variant = "standard", ...restProps  ) => {

  const formContext = useFormContext();

  return (
    <Controller
    name={name}
    control = {formContext}
      render={({ 
        field: { onChange, onBlur, value, ref }, 
        fieldState: { error },
        formState, 
      }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          label={label}
          onBlur={onBlur}
          value={value}
          variant={variant}
          ref={ref}
          {...restProps}
        />
      )}
      // rules={{required: "Required!"}}
    />

  )
}

export default FormInputText
