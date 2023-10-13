import React, { useEffect, useState } from "react";
import UseFetch from "../../CRUD/Get/UseFetch";
import { API_BASE_URL } from "../../api/endpoint";
import axios from "axios";
import Layout from "../../Layouts/Layout";
import Select from "react-select";

export default function CreateTaskForm() { 

    const [selectedUsers, setSelectedUsers] = useState([]); 
    const [formVals, setFormvals] = useState({});

    const handleSelectChange = (selectedOptions) => {
        setSelectedUsers(selectedOptions?.map((items)=>items?.value));
    };

    const assignValue = (key, value) => {
      const formEle = {};
      formEle[key] = value;
      let formerElements = formVals;
      setFormvals({
        ...formerElements,
        ...formEle,
      });
    };

    const {data: AssignedTo = []} = UseFetch(`${API_BASE_URL}users`)
    const userList = AssignedTo?.users?.map((items) => ({
        label: items?.name,
        value: items?.id
      })) || [];
    console.log(selectedUsers,"AssignedTo");
      
    
    // Create Tasks
    const handleSubmit = (e, formVals) => {
        e.preventDefault()
        axios.post(`${API_BASE_URL}tasks`, formVals, {
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
        console.log("first", formVals);
      } 
console.log(formVals,"formVals");


return (
    <Layout>
        <form
            onSubmit={(e)=>handleSubmit(e,formVals)}
        >
            <div 
                className="relative flex flex-col justify-center items-center mt-[80px] overflow-hidden font-quicksand"
            >
                <div className=" w-full p-6 m-auto bg-[#f8fafc] bg-opacity-50 rounded-md lg:max-w-xl">
                    <h1 className="text-xl font-extrabold leading-tight tracking-tight text-fourth md:text-2xl dark:text-white justify-center items-center flex mb-[20px]">
                        Create Task
                    </h1>
                    <div className="mb-[10px]">
                        <label htmlFor='name'className="block text-sm font-semibold text-fourth">
                            Title
                        </label>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            placeholder="Task Ttile"
                            onChange={(e) => assignValue("title", e.target.value)}
                            className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-[20px]">
                        <div className="mb-[10px] col-span-1 ">
                        <label htmlFor='start_date'className="block text-sm font-semibold text-fourth">
                            Start Date
                        </label>
                            <input
                                type='date'
                                id='start_date'
                                name='start_date'
                                placeholder="start_date"
                                onChange={(e) => assignValue("start_date", e.target.value)}
                                className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-[10px] col-span-1">
                        <label htmlFor='end_date'className="block text-sm font-semibold text-fourth">
                            End Date
                        </label>
                            <input
                                type='date'
                                id='end_date'
                                name='end_date'
                                placeholder="end_date"
                                onChange={(e) => assignValue("end_date", e.target.value)}
                                className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-[10px] col-span-1">
                        <label htmlFor='actual_progress'className="block text-sm font-semibold text-fourth">
                            Planned Progress 
                        </label>
                            <input 
                                type="number"
                                id='planned_progress'
                                name='planned_progress'
                                placeholder="Planned progress"
                                onChange={(e) => assignValue("planned_progress", e.target.value)}
                                className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="mb-[10px]">
                    <label htmlFor='description'className="block text-sm font-semibold text-fourth">
                        Task Description
                    </label>
                        <textarea 
                            type="text"
                            id='description'
                            name='description'
                            placeholder="Task description"
                            onChange={(e) => assignValue("description", e.target.value)}
                            className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-[10px]">
                        <label htmlFor='assigned_to'className="block text-sm font-semibold text-fourth">
                            Assigned To
                        </label>
                        <Select 
                            isMulti
                            cacheOptions
                            defaultOptions
                            options={userList}
                            onChange={handleSelectChange}
                            className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </Select>
                    </div>
                    <div className="flex m-[10px] gap-[50px] items-center justify-center mt-[20px]">
                        <button type='submit' className="bg-[#8A9B6E] font-nunito text-sm text-white rounded-[12px] p-[10px] w-[150px] " > Submit </button>
                        <button type='reset' className="bg-[#8A9B6E] font-nunito text-sm text-white rounded-[12px] p-[10px] w-[150px] "> Reset </button>
                    </div>
                </div>
            </div> 
        </form>
    </Layout>
    );
}
