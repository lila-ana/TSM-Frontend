import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function RootLayout() {

  const navigate = useNavigate();
  
  // const handleLogout = () => {
  //   localStorage.removeItem('authToken');
  //   navigate('/login');
  // };

  return(
      <div>
        <header className="flex items-center">
          <nav className="bg-[#F5F5F5] flex items-center justify-between p-[20px] w-full">
            <h1 className="text-[#675D50] font-quicksand font-bold text-[28px]">Task Manager </h1>
            <div className="justify-between font-quicksand">
              <NavLink className="p-[15px] rounded-[8px] font-semibold hover:bg-[#F3DEBA] hover:font-semibold" to="/">Home</NavLink>
              <NavLink className="p-[15px] rounded-[8px] font-semibold hover:bg-[#F3DEBA] hover:font-semibold" to="Login">Login</NavLink>
              <NavLink className="p-[15px] rounded-[8px] font-semibold hover:bg-[#F3DEBA] hover:font-semibold" to="RegistrationForm">Create Account</NavLink>
              <NavLink className="p-[15px] rounded-[8px] font-semibold hover:bg-[#F3DEBA] hover:font-semibold" to="Contact">Contact </NavLink>
              {/* <button className="p-[15px] rounded-[8px] font-semibold hover:bg-[#F3DEBA] hover:font-semibold"  onClick={handleLogout}>Logout</button> */}
            </div>
          </nav>
         </header>

         <main>
            <Outlet/>
         </main>

      </div>
  ) 
};
 