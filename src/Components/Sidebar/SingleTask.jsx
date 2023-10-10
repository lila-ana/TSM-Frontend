import React, { useEffect } from "react";
import UseFetch from "../../CRUD/Get/UseFetch";
import { API_BASE_URL } from "../../api/endpoint";
import Layout from "../../Layouts/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SingleTask() {

 const {data: Tasks=[]} = UseFetch(`${API_BASE_URL}tasks`)
 const id = useParams().id1
 useEffect(()=>{
    const fetchdata =()=>{
        axios.get(`http://localhost:3000/${id}`)
    }
    fetchdata()
 },[])

 return (
    <Layout>
    <div className="grid grid-auto-fit gap-4 m-[20px] font-quicksand">
        {Tasks?.tasks?.map((task) =>(
            <div >
                <div className="bg-gray-50 border font-extrabold text-[16px] text-primary border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                  {task.title}
                    <div className="mx-[20px]">
                        <div className="bg-gray-50 p-0 mt-[5px] font-normal m-0 text-primary text-sm  block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <span className="font-semibold">Assigned to: </span>{task.user.name}
                        </div>
                        <div className="bg-gray-50 p-0 font-normal text-primary text-sm  block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <span className="font-semibold">Start date: </span>{task.start_date}
                        </div>
                        <div className="bg-gray-50 p-0  font-normal text-primary text-sm  block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <span className="font-semibold">End date: </span>{task.end_date}
                        </div>
                        <div className="bg-gray-50 p-0  font-normal text-primary text-sm  block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <span className="font-semibold">Planned progress: </span>{task.actual_progress}%
                        </div>
                        <div className="bg-gray-50 p-0  font-normal text-primary text-sm  block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <span className="font-semibold">Description: </span>{task.description}
                        </div>
                    </div>
                </div>
                
            </div>
        ))}
    </div>
    </Layout>
  )
}
