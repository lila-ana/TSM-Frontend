import React, { useEffect } from "react";
import {Formik, Form, Field, ErrorMessage, FieldArray, useFormik} from 'formik';
import * as Yup from 'yup';
import UseFetch from "../../CRUD/Get/UseFetch";
import { API_BASE_URL } from "../../api/endpoint";
import axios from "axios";
import Layout from "../../Layouts/Layout";

export default function CreateTaskForm() { 
 
    const {data: AssignedTo = []} = UseFetch(`${API_BASE_URL}users`)
    // console.log(AssignedTo);


    const initialValues = {
        title: "",
        description: "",
        start_date: "",
        end_date: "",
        assigned_to: "",
        actual_progress: "",
    }
    console.log(initialValues);
    
    const validationSchema = Yup.object ({
        title: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required ('Required'),
        description: Yup.string().min(10, "To short description").max(150, "Too large description" ).required ('Required'),
        start_date: Yup.string().required ('Required'),
        end_date: Yup.string().required ('Required'),
        assigned_to: Yup.string().required ('Required'),
        actual_progress: Yup.string().required ('Required'),      
    })
    
    //Create Tasks
    const onSubmit = values => {
        axios.post(`${API_BASE_URL}tasks`, values, {
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
    //   console.log(formVals,"initialValues");

return (
    <Layout>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

    {formik => {
        return ( 
            <Form 
                className="relative flex flex-col justify-center items-center mt-[80px] overflow-hidden font-quicksand"
            >
            <div className=" w-full p-6 m-auto bg-[#f8fafc] bg-opacity-50 rounded-md lg:max-w-xl">
                <h1 className="text-xl font-extrabold leading-tight tracking-tight text-fourth md:text-2xl dark:text-white justify-center items-center flex mb-[20px]">
                    Create Task
                </h1>
                <div className="mb-[10px]">
                    <label htmlFor='name'className="block text-sm font-semibold text-fourth">Title</label>
                    <Field
                        type='text'
                        id='title'
                        name='title'
                        placeholder="Task Ttile"
                        className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name='title'/>
                </div>
                <div className="grid grid-cols-3 gap-[20px]">
                    <div className="mb-[10px] col-span-1 ">
                    <label htmlFor='start_date'className="block text-sm font-semibold text-fourth">Start Date</label>
                        <Field
                            type='date'
                            id='start_date'
                            name='start_date'
                            placeholder="start_date"
                            className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <ErrorMessage name='start_date'/>
                    </div>
                    <div className="mb-[10px] col-span-1">
                    <label htmlFor='end_date'className="block text-sm font-semibold text-fourth">End Date</label>
                        <Field
                            type='date'
                            id='end_date'
                            name='end_date'
                            placeholder="end_date"
                            className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <ErrorMessage name='end_date'/>
                    </div>
                    <div className="mb-[10px] col-span-1">
                    <label htmlFor='actual_progress'className="block text-sm font-semibold text-fourth">Planned Progress </label>
                        <Field 
                            type="number"
                            id='actual_progress'
                            name='actual_progress'
                            placeholder="Planned progress"
                            className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <ErrorMessage name='actual_progress'/>
                    </div>
                </div>
                <div className="mb-[10px]">
                <label htmlFor='description'className="block text-sm font-semibold text-fourth">Task Decsription </label>
                    <Field 
                        as="textarea"
                        id='description'
                        name='description'
                        placeholder="Task description"
                        className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name='description'/>
                </div>
                <div className="mb-[10px]">
                    <label htmlFor='assigned_to'className="block text-sm font-semibold text-fourth">Assigned To</label>
                    <Field as="select" name="assigned_to" className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" label="Select user" />
                            {AssignedTo?.users?.map((users) => (
                                <option key={users.id} value={users.id} label={users.name} />
                            ))}
                    </Field>
                    <ErrorMessage name='assigned_to'/>
                </div>
                <div className="flex m-[10px] gap-[50px] items-center justify-center mt-[20px]">
                    <button type='submit' className="bg-[#8A9B6E] font-nunito text-sm text-white rounded-[12px] p-[10px] w-[150px] " > Submit </button>
                    <button type='reset' className="bg-[#8A9B6E] font-nunito text-sm text-white rounded-[12px] p-[10px] w-[150px] "> Reset </button>
                </div>
            </div>
        </Form> 
        )}}   
        </Formik>
    </Layout>
    );
}
