import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField
} from 'formik';
import { object, string } from 'yup';
import React from 'react'
import TextError from './TextError';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


const initialValues = {
    name : "",
    lastname : "",
    email : "",
    mobile : "",
    address : "",
    comments: "",
    social:{
      whatsapp: "",
      twitter : "",
    },
    phoneNbers : [""]
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

const validateSchema = object({
  name : string().required("Please complete the name"),
  lastname : string().required("Please complete the lastname"),
  email : string()
    .email("Invalid email format")
    .required("Please complete the email"),
  mobile : string().required("Minimum 10 numbers required"),
})

// console.log('Form errors', formik?.errors)

const validateComments = (value) => {
  let error
  if(!value)
    error = "Required"
  return error
}

const muiForm = () => {
    
  // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validateSchema,
    //     // validate,
    // })
    return (
      <Paper sx={{ width:"50%", margin:"50px auto 0px auto" }}>
        <Formik 
          initialValues={initialValues}
          onSubmit={onSubmit}
          validateSchema={validateSchema}
        >
          {
            formik => {
              return(
                <Form
                  sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
                  // noValidate
                  autoComplete="off"
                  // sx={{  }}
                >
                  <Grid>
                    <Field
                      id="name"
                      name="name"
                      label="Name"
                      type="text"
                    />
                    <ErrorMessage name='name' component={TextError} />
                  </Grid>
                  <Grid>
                    <Field
                      id="lastname"
                      name="lastname"
                      label="Lastname"
                      type="text"
                      maxRows={4}
                    />
                    <ErrorMessage name='email'>
                      {
                        (errorMesg) => {
                          <div style="color:red">{errorMesg}</div>
                        }
                      }
                      </ErrorMessage>
                    <ErrorMessage name='lastname' />
                  </Grid>
                  <Grid>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      label="E-mail"
                      maxRows={4}
                    />
                    <ErrorMessage name='email' />
                  </Grid>
                  <Grid>
                    <Field
                      id="mobile"
                      name="mobile"
                      type="text"
                      label="Mobile"
                    />
                      <ErrorMessage name='mobile' />
                  </Grid>
                  <Grid>
                    {/* as="textarea" or component="textarea" */}
                    <Field as="textarea"
                      id="comments"
                      name="comments"
                      type="text"
                      label="Comments"
                      validate={validateComments}
                    />
                    <ErrorMessage name="comments" component={TextError} />
                  </Grid>
                  <Grid>
                    <FastField id="address" name="address" label="address">
                      {
                        (props) => {
                          const {field, form, meta} = props
                          console.log('Render props', props)
                          return(
                            <>
                              <TextField name='address' id="address" {...field}/>
                              { meta.touched && meta.error ? <div>{meta.error}</div> : null }
                            </>
                          )
                        }
                      }
                    </FastField>
                  </Grid>
                  <Grid>
                    <Field
                      label="Whatsapp profile"
                      id="whatsapp"
                      name="social.whatsapp"
                      type="text"
                    />
                    <Field
                      label="Twitter profile"
                      id="twitter"
                      name="social.twitter"
                      type="text"
                    />
                  </Grid>
                  <Grid>
                  <FieldArray name="phoneNbers">
                    {
                      fieldArrayProps => {
                        // console.log("fieldArrayProps", fieldArrayProps)
                        const { push, remove, form } = fieldArrayProps
                        const { values } = form
                        const { phoneNbers} = values
                        console.log('Form error', form.errors)
                        return(
                          <Grid>
                            {
                              phoneNbers.map((phoneNumber, index) => (
                                <Grid2 key={index}>
                                  <Field name={`phoneNbers[${index}]`} />
                                  {
                                    index > 0 && (
                                      <Button type="button" onClick={() => remove(index)}>
                                        {' '}
                                        -
                                        {' '}
                                      </Button>
                                    )
                                  }
                                
                                  <Button type="button" onClick={() => push("")}> 
                                    {' '}
                                    +
                                    {' '} 
                                  </Button>
                                </Grid2>
                              ))
                            }
                          </Grid>
                        )
                      }
                    }
                  </FieldArray>
                  </Grid>            
                  <Button variant='contained' type='submit' padding="30px">Register</Button>
                </Form>
              )
            }
          }
       
        </Formik>
      </Paper>   
  )
}

export default muiForm