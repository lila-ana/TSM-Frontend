import React from "react";
import AuthenticatedLayout from '../Layouts/AuthLayout'
import { Head } from "@inertiajs/inertia-react";

export const Home = ({auth}) => {
 
  return (
    <div>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
  

      {/* <div className="font-singleUse text-[25px] md:text-[35px] lg:text-[50px] font-bold text-center justify-items-center text-fifth m-[20px] p-[20px] ">Efficient Task Mangement Strategies </div>
     
      <div className="grid grid-cols-3 p-6 bg-white  gap-4 justify-between items-center m-[10px] hover:border-[#3F2305]  ">
          <div className="col-span-2">
            <p className="font-quicksand text-gray-700 dark:text-gray-400 justify-evenly">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>           
        <div  className="col-span-1 items-center justify-items-center">
          <img src={image} alt="Task Management items-center"  />
        </div>
      </div> */}

      {/* <button onClick={handleLogout}>Logout</button> */}
      {/* <Cards/> */}
    </div>
  ) 
};
