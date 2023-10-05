import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../api/endpoint';
import { Navigate, useNavigate } from 'react-router-dom';
import { Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object ({
    email: Yup.string().email('Invalid email format').required ('Required'),
    password: Yup.string().required('Password is required'),    
  })

  // useEffect(() => {
  //   setIsLoggedIn(true);
  // }, []);

  // if (isLoggedIn) {
  //   return <Navigate to="/home" />;
  // }


//Login
const handleSubmit = (credentials) => {
  axios
    .post(`${API_BASE_URL}login`, credentials)
    .then((response) => {
      // setIsLoggedIn(true);
      // navigate("/home");
      window.location.replace('/home'); 
      console.log('response', response.data);
    })
    .catch((err) => {
      console.error('Login error', err);
    });
};

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form
        className="relative flex flex-col justify-center items-center overflow-hidden font-quicksand mt-[120px] "
      >
        <div className=" w-full p-6 m-auto bg-[#f8fafc] bg-opacity-50 rounded-md   lg:max-w-xl">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-fourth md:text-2xl dark:text-white justify-center items-center flex m-[20px] p-[10px]">
              Login to your account
          </h1>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-fourth">Email</label>
            <Field 
                type="email" 
                id="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-fourth bg-white border rounded-md focus:border-sixth focus:ring-fifth focus:outline-none focus:ring focus:ring-opacity-20"
                placeholder="example@ienetworks.com"
              />                          
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-fourth">Password</label>
            <Field 
                type="password" 
                id="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-fourth bg-white border rounded-md focus:border-sixth focus:ring-fifth focus:outline-none focus:ring focus:ring-opacity-20"
                placeholder="password"
              />                          
          </div>

          <a href="#" className="text-xs text-[#e11d48] hover:underline"> Forget Password? </a>
          
          <div className="flex m-[10px] gap-[50px] items-center justify-center">
            <button type="submit"  className="bg-[#8A9B6E] font-nunito text-sm text-white rounded-[12px]  p-[10px] w-[150px] "> Login</button>
            <button type="reset" className="bg-[#fcfcfc] border-[#8A9B6E] border-[1px] font-nunito text-sm text-[#e11d48] rounded-[12px]  p-[10px] w-[150px] "> Cancel</button>
          </div>

          <p className="mt-8 text-xs font-light text-center text-134e4a["> Don't have an account?
            <a href="/registrationForm" className="font-bold text-[#e11d48] hover:underline"> Register </a>
          </p>
      </div>
    </Form>
  </Formik>
  )
}