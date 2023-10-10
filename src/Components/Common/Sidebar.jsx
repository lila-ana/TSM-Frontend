import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import classNames from "classnames";
import Logo from "../../Asset/images.png";
import { DASHBOARD_SIDEBAR_LINKS } from "../Constants/SidebarData";

const linkClasses =
  "flex items-center gap-2 px-3 py-2 font-medium hover:no-underline h-14";


const Sidebar = () => {

  return (
    <div className="hidden sm:flex flex-col col-span-1 md:col-span-2 px-2 md:px-4 py-6 bg-[#ECF2F7] text-[#0F3A62] overflow-hidden scrollbar-hide">
      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-2 py-2"
      >
        <img src={Logo} alt="IE logo" className="max-w-16 w-16" />
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
  console.log(pathname);
  

  return (
    <Link
      to={`/dashboard/${item.path}`}
      className={classNames(
        pathname.includes(item.path)
          ? "bg-[#96DAFF] px-6 text-[#0F3A62]"
          : "text-[#0F3A62] px-6 h-14",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      <span className=" hidden lg:inline-block">{item.label}</span>
    </Link>
  );
}

export default Sidebar;