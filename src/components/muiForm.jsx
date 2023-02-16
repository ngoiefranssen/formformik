import { Box, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'


const initialValues = {
    name : "",
    lastname : "",
    email : "",
    mobile : "",
};

const onSubmit = (values) => {
    console.log('Form data', values)
}
const validate =(values) => {
    // values.name values.lastname values.email values.mobile
    // errors.name errors.lastname errors.email errors.mobile
    // errors.name = "This field is required" ...............

    var errors = {}

    if(!values.name){
        errors.name = "Required"
    }
    if(!values.lastname){
        errors.lastname = "Required"
    }
    if(!values.email){
        errors.email = "Required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email = "Invalid email format"  
    }
    if(!values.mobile){
        errors.mobile = "Required"
    }else if(mobile.length >= 9){
        errors.mobile = "Minimum 10 numbers required"
    }

    return errors
}
const muiForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })
    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
        <TextField
          id="name"
          name="name"
          label="Name"
          type="text"
          multiline
          maxRows={4}
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <TextField
          id="lastname"
          name="lastname"
          label="Lastname"
          type="text"
          multiline
          value={formik.values.lastname}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <TextField
          id="email"
          name="email"
          type="email"
          label="Email"
          multiline
          maxRows={4}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <TextField
          id="mobile"
          name="mobile"
          type="text"
          label="Mobile"
          placeholder="Placeholder"
          multiline
          value={formik.values.mobile}
          onChange={formik.handleChange}
        />
      </div>
        </Box>
  )
}

export default muiForm