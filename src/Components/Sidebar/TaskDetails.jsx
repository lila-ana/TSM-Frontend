import React, { useEffect } from "react";
import UseFetch from "../../CRUD/Get/UseFetch";
import { API_BASE_URL } from "../../api/endpoint";
import Layout from "../../Layouts/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TaskDetails() {
    const id = useParams(`${API_BASE_URL}tasks`).id
    const {data: TaskDetails=[]} = UseFetch(`${API_BASE_URL}taskdetails/${id}`)
    console.log("taskdetails", TaskDetails);
    
 

 return (
    <Layout>
    <div className="grid grid-auto-fit gap-4 m-[20px] font-quicksand">
        <>
            <div >
                <div className="bg-gray-50 border font-extrabold text-[16px] text-primary border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                {TaskDetails?.tasks?.title}
                    <div className="mx-[20px]">
                        <div className="bg-gray-50 p-0 mt-[5px] font-normal m-0 text-primary text-sm  block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <span className="f-">Assigned to: </span>
                            {TaskDetails?.user?.name}
                        </div>
                        <div className="bg-gray-50 p-0 font-normal text-primary text-sm  block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <span className="">Start date: </span>{TaskDetails?.tasks?.start_date}
                        </div>
                        <div className="bg-gray-50 p-0  font-normal text-primary text-sm  block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <span className="">End date: </span>{TaskDetails?.tasks?.end_date}
                        </div>
                        <div className="bg-gray-50 p-0  font-normal text-primary text-sm  block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <span className="">Planned progress: </span>{TaskDetails?.tasks?.planned_progress}%
                        </div>
                        <div className="bg-gray-50 p-0  font-normal text-primary text-sm  block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <span className="">Description: </span>{TaskDetails?.tasks?.description}
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    </div>
    </Layout>
  )
}
