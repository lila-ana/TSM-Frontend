/* eslint-disable react/prop-types */

import Sidebar from "../Components/Common/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="sm:grid sm:grid-cols-12 gap-3 bg-white h-screen w-screen">
      <Sidebar />
      <div className="flex flex-col col-span-10">
        <div className="scrollbar-hide pr-2 py-6 min-w-[680px]  ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
