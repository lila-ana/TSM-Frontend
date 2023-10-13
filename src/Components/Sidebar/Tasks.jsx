import React from "react";
import UseFetch from "../../CRUD/Get/UseFetch";
import { API_BASE_URL } from "../../api/endpoint";
import Layout from "../../Layouts/Layout";
import { useParams } from "react-router-dom";

export default function Tasks() {
  const id=localStorage.getItem('id')
  const {data: Tasks =[]} = UseFetch(`${API_BASE_URL}tasks/${id}`)
  console.log(Tasks,"tasks");
  
  return (
    <Layout>
      <div className="grid grid-auto-fit gap-4 justify-between items-center m-[10px] hover:border-[#f3f4f6] bg-white bg-opacity-25 rounded-md">
          {Tasks?.tasks?.map ((task)=> (
            <a href={`/dashboard/taskdetails/${task?.id}`} className="block max-w-sm p-6 bg-[#f3f4f6] bg-opacity-75 rounded-md font-quicksand">
              <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-primary">{task.title} </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">{task.description}</p>
            </a>
          ))}
      </div>
    </Layout>
  )
}
