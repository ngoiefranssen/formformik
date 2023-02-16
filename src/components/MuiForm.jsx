import { Box, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
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
    errors.name = "Please complete the name"
  }
  if(!values.lastname){
    errors.lastname = "Please complete the lastname"
  }
  if(!values.email){
    errors.email = "Please complete the email"
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = "Invalid email format"  
  }
  if(!values.mobile >= 9){
    errors.mobile = "Minimum 10 numbers required"
  }
  return errors
}

const validateSchema = yup.object({
  name : yup.name.string().required("Please complete the name"),
  lastname : yup.lastname.string().required("Please complete the lastname"),
  email : yup.email.string()
    .email("Invalid email format")
    .required("Please complete the email"),
  mobile : yup.mobile.string().required("Minimum 10 numbers required"),
})

console.log('Form errors', formik?.errors)

const muiForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validateSchema,
        // validate,
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
            <Grid>
              <TextField
                id="name"
                name="name"
                label="Name"
                type="text"
                multiline
                maxRows={4}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik?.touched.mobile && formik?.errors?.name ? <>{formik.errors.name}</> : null}
            </Grid>
            <Grid>
              <TextField
                id="lastname"
                name="lastname"
                label="Lastname"
                type="text"
                multiline
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik?.touched.mobile && formik?.errors?.lastname ? <>{formik?.errors?.lastname}</> : null}
            </Grid>
          </div>
          <div>
            <Grid>
              <TextField
                id="email"
                name="email"
                type="email"
                label="E-mail"
                multiline
                maxRows={4}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik?.touched.mobile && formik?.errors?.email ? <>{formik?.errors?.email}</> : null}
            </Grid>
            <Grid>
              <TextField
                id="mobile"
                name="mobile"
                type="text"
                label="Mobile"
                placeholder="Placeholder"
                multiline
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik?.touched.mobile && formik?.errors?.mobile ? <>{formik?.errors?.mobile}</> : null}
            </Grid>
           
          </div>
        </Box>
  )
}

export default muiForm