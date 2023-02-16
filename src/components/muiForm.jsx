import React from 'react'


const initialValues = {
    name : "",
    lastname : "",
    email : "",
    mobile : "",
};

const submit = (values) => {
    console.log('Form data', values)
}
const validate =(values) => {
    // values.name values.lastname values.email values.mobile
    // errors.name errors.lastname errors.email errors.mobile
    // errors.name = "This field is required"

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
  return (
    <div>
        <form>
            <></>
        </form>
    </div>
  )
}

export default muiForm