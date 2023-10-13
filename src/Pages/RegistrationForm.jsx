import React, { useEffect } from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import UseFetch from "../CRUD/Get/UseFetch";
import { API_BASE_URL } from "../api/endpoint";
import axios from "axios";

export default function RegistrationForm({setTab}) { 
    const {data: Roles = []} = UseFetch(`${API_BASE_URL}role`)

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",   
    }
    console.log(initialValues);
    
    const validationSchema = Yup.object ({
        name: Yup.string().required ('Required'),
        email: Yup.string().email('Invalid email format').required ('Required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters long')
            // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least one letter and one number')
            .required('Password is required'),    
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm Password is required'),
    })
    
      //Register Users
    const onSubmit = values => {
        axios.post(`${API_BASE_URL}register`, values, {
          headers: { 
            "Content-Type": "application/json" ,
            accept: "application/json",
          },
        })
        .then(response => {
          console.log("Success:", response.data);
          setTab("login")
        })
        .catch(error => {
          console.error("hello", error);
        });
        console.log("first", values);
      } 

return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >

{/* {formik => {
     return ( */}
        <Form 
            className="relative flex flex-col justify-center items-center mt-[80px] overflow-hidden font-quicksand"
        >
        <div className=" w-full p-6 m-auto bg-[#f8fafc] bg-opacity-50 rounded-md lg:max-w-xl">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-fourth md:text-2xl dark:text-white justify-center items-center flex">
                Sign Up
            </h1>
            <div className="mb-[10px]">
                <label htmlFor='name'className="block text-sm font-semibold text-fourth">Name</label>
                <Field
                    type='text'
                    id='name'
                    name='name'
                    placeholder="Full Name"
                    className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 />
                <ErrorMessage name='name'/>
            </div>
            <div className="mb-[10px]">
            <label htmlFor='email'className="block text-sm font-semibold text-fourth">Email</label>
                <Field
                    type='email'
                    id='email'
                    name='email'
                    placeholder="example@ienetworks.com"
                    className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {/* {formik.touched.email && formik.errors.email ? <div> {formik.errors.email}</div> :  null} */}
                <ErrorMessage name='email'/>
            </div>
            <div className="mb-[10px]">
            <label htmlFor='password'className="block text-sm font-semibold text-fourth">Password</label>
                <Field
                    type='password'
                    id='password'
                    name='password'
                    placeholder="Password"
                    className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name='password'/>
            </div>
            <div className="mb-[10px]">
            <label htmlFor='confirmPassword'className="block text-sm font-semibold text-fourth">Confirm Password</label>
                <Field
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    placeholder="Confirm password"
                    className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name='confirmPassword'/>
            </div>
            <div className="mb-[10px]">
                <label htmlFor='role'className="block text-sm font-semibold text-fourth">Role</label>
                <Field as="select" name="role" className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="" label="Select role" />s                    
                    {Roles?.Roles?.map((role) => (
                        <option key={role.id} value={role.id} label={role.name} />
                    ))}
                </Field>
                <ErrorMessage name='role'/>
            </div>
            <div className="flex m-[10px] gap-[50px] items-center justify-center mt-[20px]">
                <button type='submit' className="bg-[#8A9B6E] font-nunito text-sm text-white rounded-[12px] p-[10px] w-[150px] "  > Submit </button>
                <button type='reset' className="bg-[#8A9B6E] font-nunito text-sm text-white rounded-[12px] p-[10px] w-[150px] "> Reset </button>
            </div>
        </div>
       </Form> 
    {/* )}}    */}
    </Formik>
    );
}
