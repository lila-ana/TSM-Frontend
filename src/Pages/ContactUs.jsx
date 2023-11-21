import React from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { API_BASE_URL } from '../api/endpoint';
import axios from 'axios';
import Layout from '../Layouts/Layout';

export default function ContactUs() { 

  const initialValues = {
      name: "",
      email: "",
      message: "",
  }
  console.log(initialValues);
  
  const validationSchema = Yup.object ({
      name: Yup.string().required ('Required'),
      email: Yup.string().email('Invalid email format').required ('Required'),
      message: Yup.string().required ('Required').min(10 , "Too short!").max(500, "Too Long!"),
      
  })
  
    //Register Users
  const onSubmit = values => {
      axios.post(`${API_BASE_URL}contact`, values, {
        headers: { 
          "Content-Type": "application/json" ,
          accept: "application/json",
        },
      })
      .then(response => {
        console.log("Success:", response.data);
      })
      .catch(error => {
        console.error("hello", error);
      });
      console.log("first", values);
    } 

return (
  <Layout>
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
                Contact Us
            </h1>
            <div className="mb-[10px]">
                <label htmlFor='name'className="block text-sm font-semibold text-fourth">Name</label>
                <Field
                    type='text'
                    id='name'
                    name='name'
                    placeholder="Enter your name"
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
            <label htmlFor='message'className="block text-sm font-semibold text-fourth">message</label>
                <Field
                    as= "textarea"
                    id='message'
                    name='message'
                    placeholder="Enter the message here"
                    className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage name='message'/>
            </div>
            
          
            <div className="flex m-[10px] gap-[50px] items-center justify-center mt-[20px]">
                <button type='submit' className="bg-[#8A9B6E] font-nunito text-sm text-white rounded-[12px] p-[10px] w-[150px] "  > Submit </button>
                <button type='reset' className="bg-[#8A9B6E] font-nunito text-sm text-white rounded-[12px] p-[10px] w-[150px] "> Reset </button>
            </div>
        </div>
      </Form> 
    {/* )}}    */}
    </Formik>
  </Layout>
  );
}
