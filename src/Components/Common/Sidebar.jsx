import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import classNames from "classnames";
import { DASHBOARD_SIDEBAR_LINKS } from "../Constants/SidebarData";
import calendar from '../../Asset/calendar2.png';
import { AiFillSchedule } from "react-icons/ai";

const linkClasses =
  "flex items-center gap-2 px-3 py-2 font-medium hover:no-underline h-14";


const Sidebar = () => {

  return (
    <div className="hidden sm:flex flex-col col-span-1 md:col-span-2 px-2 md:px-4 py-6 bg-primary text-white  text-quicksand overflow-hidden scrollbar-hide">
      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-2 py-2"
      >
        <AiFillSchedule className="w-[30px] h-[30px] fill-[#e11d48]"> <span> Cleavr Schedule</span> </AiFillSchedule>
        {/* <div className="flex mx-[10px] my-[15px] items">
            <img src={calendar} alt="calendar" className="fill-[#134e4a] w-[10px] h-[10px] "/>
            <p className="text-[15px] md:text-[25px] lg:[35px] font-extrabold text-[#e11d48] ">Clever <span className="text-[#e11d48]">Schedule</span></p>
        </div> */}
      </Link>
      <div className="flex-1 py-3 flex-col gap-0.5 text-sm">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
         
        ))}
      </div>
    </div>
  );
};

function SidebarLink({ item }) {
  const { pathname } = useLocation();
//   const id = useParams().id1
// console.log("useParam", id);

  // let projectId = pathname.split("/")[3];
  // console.log(pathname);
  

  return (
    <Link
      to={`/dashboard/${item.path}`}
      className={classNames(
        pathname.includes(item.path)
          ? "bg-[#ccfbf1] px-4 text-black font-semibold"
          : "text-white px-4 h-14",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      <span className=" hidden lg:inline-block font-quicksand">{item.label}</span>
    </Link>
  );
}

export default Sidebar;
