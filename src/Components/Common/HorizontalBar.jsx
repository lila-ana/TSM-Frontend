import React from "react";
import { useNavigate } from 'react-router-dom';


export default function HorizontalBar() {
  
  const token = localStorage.getItem('apiToken');
  const navigate = useNavigate(); 

  const logOut = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <div className="flex border-b-[2px] border-primary mb-[20px]">
       <div className="font-quicksand m-[5px] px-[5px]">
            Breadcrumb 
       </div>
       <div className="">
        <button onClick={logOut} className="rounded-[10px] border-[1px] border-primary font-quicksand m-[5px] p-[5px]">
            Logout
        </button>
       </div>

    </div>
);
}
