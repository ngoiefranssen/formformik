import { Button, Grid, TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import React from 'react'


const initialValues = {
    name : "",
    lastname : "",
    email : "",
    mobile : "",
    address : "",
    comments: "",
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
    
  // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validateSchema,
    //     // validate,
    // })
    return (
      <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateSchema={validateSchema}
      >
        <Form
            // onSubmit={formik.handleSubmit}
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
            // noValidate
            autoComplete="off"
        >
          <div>
            <Grid>
              <Field
                id="name"
                name="name"
                label="Name"
                type="text"
                multiline
                maxRows={4}
                // value={formik.values.name}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // {...formik.getFieldProps('name')}
              />
              {/* {formik?.touched.mobile && formik?.errors?.name ? <>{formik.errors.name}</> : null} */}
              <ErrorMessage name='name' />
            </Grid>
            <Grid>
              <Field
                id="lastname"
                name="lastname"
                label="Lastname"
                type="text"
                multiline
                // value={formik.values.lastname}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // {...formik.getFieldProps('lastname')}
              />
              {/* {formik?.touched.mobile && formik?.errors?.lastname ? <>{formik?.errors?.lastname}</> : null} */}
              <ErrorMessage name='lastname' />
            </Grid>
          </div>
          <div>
            <Grid>
              <Field
                id="email"
                name="email"
                type="email"
                label="E-mail"
                multiline
                maxRows={4}
                // value={formik.values.email}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // {...formik.getFieldProps('email')}
              />
              {/* {formik?.touched.mobile && formik?.errors?.email ? <>{formik?.errors?.email}</> : null} */}
              <ErrorMessage name='email' />
            </Grid>
            <Grid>
              <Field
                id="mobile"
                name="mobile"
                type="text"
                label="Mobile"
                multiline
                // value={formik.values.mobile}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // {...formik.getFieldProps('mobile')}sss
              />
              {/* {formik?.touched.mobile && formik?.errors?.mobile ? <>{formik?.errors?.mobile}</> : null} */}
              <ErrorMessage name='mobile' />
            </Grid>
          </div>
          <div>
            <Grid>
              {/* as="textarea" or component="textarea" */}
              <Field as="textarea"
                id="comments"
                name="comments"
                type="text"
                label="Comments"
                multiline
                // value={formik.values.mobile}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // {...formik.getFieldProps('mobile')}
              />
            </Grid>
            <Grid>
              <Field id="address" name="address">
                {
                  (props) => {
                    const {field, form, meta} = props
                    console.log('Render props', props)
                    return(
                      <>
                        <TextField id="address" {...field}/>
                        { meta.touched && meta.error ? <>{meta.error}</> : null }
                      </>
                    )
                  }
                }
              </Field>
            </Grid>
          </div>
          <Button variant='contained' type='submit'>Register</Button>
        </Form>
      </Formik>
        
  )
}

export default muiForm