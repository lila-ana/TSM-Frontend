import React from "react";

export default function Cards() {
  return (
    <div className="grid grid-auto-fit gap-4 justify-between items-center m-[10px] hover:border-[#3F2305]  ">
          <a href="#" className="block max-w-sm p-6 bg-white ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Task Name </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </a>
      </div>
  ) 
};
