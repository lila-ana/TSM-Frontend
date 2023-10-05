import React from "react";
import calendar from '../../Asset/calendar2.png'


export default function SectionOne() {
  return(
    <div>
        <div className="flex mx-[10px] my-[15px] items">
            <img src={calendar} alt="calendar" className="fill-[#134e4a] "/>
            <p className="text-[15px] md:text-[25px] lg:[35px] font-extrabold text-[#134e4a] ">Clever <span className="text-[#e11d48]">Schedule</span></p>
        </div>
        <div className="text-[30px] md:text-[38px] lg:text-[50px] font-extrabold text-start justify-items-center text-[#134e4a] mt-[100px] m-[20px] p-[20px] leading-tight ">Efficient Task <span className="text-[#e11d48]">Mangement</span> Strategies </div>
        <p className="font-quicksand m-[20px] font-normal sm:text-[15px] md:text-[20px] lg-[28px] p-[20px] text-[#134e4a]">An integrated platform designed to efficiently manage and coordinate all tasks and activities through their various stages from start to finish.</p>
        <button className="m-[40px] p-[10px] border rounded-[8px] border-[#134e4a] font-quicksand font-bold text-[#134e4a] hover:bg-[#ccfbf1] hover:border-none text-[15px]">Contact Us </button>    
    </div>
);
}
