import React from 'react'
import {Button, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import { TextField } from 'formik-material-ui';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import * as Yup from 'yup';
import {loginUser} from "../State/Authentication/Action";

// Validation schema using Yup
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

const initialValues = {
    email: "",
    password: ""
}

const LoginForm = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleSubmit = (values) => {
        // dispatch(loginUser({userData:values,navigate}))
        console.log("Form values: ",values)
    }

    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Login
            </Typography>

            <Formik initialValues={initialValues} 
            validationSchema={validationSchema}
            onSubmit={handleSubmit} 

            >
                {({touched,errors}) => (
                    <Form>
                    <Field component={TextField}
                           name="email"
                           type="email"
                           label="email"
                           fullWidth
                           variant="outlined"
                           margin="normal"
                           error={touched.email && Boolean(errors.email)}
                           helperText={touched.email && errors.email}
                    />

                    <Field component={TextField}
                           name="password"
                           type="password"
                           label="password"
                           fullWidth
                           variant="outlined"
                           margin="normal"
                           error={touched.password && Boolean(errors.password)}
                           helperText={touched.password && errors.password}
                    />
                    
                    <Button fullWidth sx={{mt:2,padding:"1rem"}}
                            type='submit' variant='contained'>Login</Button>
                </Form>
                )}
            </Formik>

            <Typography variant='body2' align='center' sx={{mt:3}}>
                Don't have an account?
                <Button size='small' onClick={() => navigate("/account/register")}>
                    Register
                </Button>
            </Typography>
        </div>
    )
}
export default LoginForm
