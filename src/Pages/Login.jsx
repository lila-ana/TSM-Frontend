import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../api/endpoint';

export default function Login() {

  const [formVals, setFormvals] = useState({});
  const assignValue = (key, value) => {
    const formEle = {};
    formEle[key] = value;
    let formerElements = formVals;
    setFormvals({
      ...formerElements,
      ...formEle,
    });
  };


//Login

const handleSubmit = (e,formVals) => {
  console.log(formVals,"credentials")
  e.preventDefault()
  axios
    .post(`${API_BASE_URL}login`, formVals)
    .then((response) => {
      window.location.replace('/dashboard/Dashboard'); 
      console.log('response', response.data?.data?.api_token);
      localStorage.setItem("apiToken", response.data?.data?.api_token);
      localStorage.setItem("id", response.data?.data?.id);

    })
    .catch((err) => {
      console.error('Login error', err);
    });
};

  return (
    <form onSubmit={(e)=>handleSubmit(e,formVals)}>
      <div
        className="relative flex flex-col justify-center items-center overflow-hidden font-quicksand mt-[120px] "
      >
        <div className=" w-full p-6 m-auto bg-[#f8fafc] bg-opacity-50 rounded-md lg:max-w-xl">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-fourth md:text-2xl dark:text-white justify-center items-center flex m-[20px] p-[10px]">
              Sign in
          </h1>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-fourth">Email</label>
            <input 
                type="email" 
                id="email"
                name="email"
                onChange={(e) => assignValue("email", e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-fourth bg-white border rounded-md focus:border-sixth focus:ring-fifth focus:outline-none focus:ring focus:ring-opacity-20"
                placeholder="example@ienetworks.com"
              />  
            {/* <ErrorMessage name='email'/>        */}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-fourth">Password</label>
            <input 
                type="password" 
                id="password"
                name="password"
                onChange={(e) => assignValue("password", e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-fourth bg-white border rounded-md focus:border-sixth focus:ring-fifth focus:outline-none focus:ring focus:ring-opacity-20"
                placeholder="password"
              />     
            {/* <ErrorMessage name='password'/>            */}
          </div>

          <a href="#" className="text-xs text-[#e11d48] hover:underline"> Forget Password? </a>
          
          <div className="flex m-[10px] gap-[50px] items-center justify-center">
            <button type="submit"  className="bg-[#8A9B6E] font-nunito text-sm text-white rounded-[12px]  p-[10px] w-[150px] "> Login</button>
            <button type="reset" className="bg-[#fcfcfc] border-[#8A9B6E] border-[1px] font-nunito text-sm text-[#e11d48] rounded-[12px]  p-[10px] w-[150px] "> Cancel</button>
          </div>

          <p className="mt-8 text-xs font-light text-center text-[#134e4a]"> Don't have an account?
            <a href="/registrationForm" className="font-bold text-[#e11d48] hover:underline"> Register </a>
          </p>
      </div>
    </div>
  </form>
  )
}