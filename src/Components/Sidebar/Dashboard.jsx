import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import UseFetch from "../../CRUD/Get/UseFetch";
import { API_BASE_URL } from "../../api/endpoint";

export default function Dashboard() {
  
  const id=localStorage.getItem('id')
  const {data: ProgressDevation =[]} = UseFetch(`${API_BASE_URL}tasks/${id}`)
  const {data: ActualProgress =[]} = UseFetch(`${API_BASE_URL}tasks/${id}/compare-progress`)
  console.log(ActualProgress);
  
  
  const [value, setValue] = useState(); 
  const handleRangeChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Layout>

      {/* Planned Progress */}
      <div className="">
        <div className="gap-4 font-quicksand">
          {ProgressDevation?.tasks?.map((progress)=>(
            <div className="grid m-[10px] p-[10px] rounded bg-[#f8fafc] "> 
              <div className="flex"><span className="font-">Task Title: </span> { progress.title}</div> 
              <div className="flex"><span className="font-">Planned Progress: </span> { progress.planned_progress}%</div>
              <div className="flex"><span className="font-">Actual Progress: </span> { progress.planned_progress}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Actuall Progress */}
      <div>

      </div>
    </Layout>
  );
}

