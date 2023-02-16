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