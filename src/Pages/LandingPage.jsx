import React from "react";
import SectionOne from "../Components/LandingPage/SectionOne";
import Footer from "../Components/Common/Footer";
import SectionTwo from "../Components/LandingPage/SectionTwo";

export default function LandingPage() {

  return (
    <div className="grid grid-cols-2 ">
      <section className="col-span-1 justify-between items-center bg-white w-full h-screen ">
          <SectionOne/> 
          <Footer/>   
      </section>

      <section className="col-span-1 justify-self-end bg-[#134e4a] w-full h-screen">
        <SectionTwo/>
      </section>
        
    </div>
  );
}



