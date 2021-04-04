import React from 'react';
import {Formik} from 'formik';
import * as EmailValidator from 'email-validator';
import NavBar from '../navBar/NavBar';
// import * as Yup from 'yup';
import "./Login.css";


const Login =(props) => (

  <Formik

  validate={values => {
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!EmailValidator.validate(values.email)) {
      errors.email = "Invalid email address.";
    }
  
    const passwordRegex = /(?=.*[0-9])/;
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters long.";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Invalid password. Must contain one number.";
    }
  
    return errors;
  }}


  initialValues={{ email: "", password: "" }}
  
  onSubmit={(values) => {
      //console.log("Logging in", values);
      
      props.history.push('/home');
  }}
>
  {props => {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit
    } = props;

    return (
      <> 
      <NavBar />
      <form onSubmit={handleSubmit}>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email && "error"}
      />
      {errors.email && touched.email && (
        <div className="input-feedback">{errors.email}</div>
      )}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password && "error"}
      />
      {errors.password && touched.password && (
        <div className="input-feedback">{errors.password}</div>
      )}

      <button type="submit">
        Login
      </button>

    </form>
  </>

    );
  }}
</Formik>
);

export default Login;

