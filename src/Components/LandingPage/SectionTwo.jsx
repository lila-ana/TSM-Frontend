import React, { useState } from "react";
import RegistrationForm from "../../Pages/RegistrationForm";
import Login from "../../Pages/Login";

export default function SectionTwo() {
    
  const [tab, setTab] = useState("login");

  const handleTab = (value) => {
    setTab(value);
  };

  return (
    <div className="felx flex-col">
        <div className="flex mx-[160px] m-[20px] p-[5px] items-center justify-center gap-[20px]">
            <div onClick={()=> handleTab("login")} className="text-[#ffffff] px-[20px] py-[10px] font-quicksand hover:font-extrabold border rounded-[8px] border-[#8A9B6E]">Login</div>
            <div onClick={()=> handleTab("Register")} className="text-[#ffffff] px-[20px] py-[10px] font-quicksand hover:font-extrabold border rounded-[8px] border-[#8A9B6E]">Create Account</div>
        </div>
        <div className="fade">
            {tab=="login" ? <Login/> : <RegistrationForm setTab={setTab}/> }
        </div>
    </div>
    
  );
}
