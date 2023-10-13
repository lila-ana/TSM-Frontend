import React from "react";
import { createContext, useContext, useState } from "react";
// import axios from 
import { useNavigate } from "react-router-dom";
import UseFetch from "../CRUD/Get/UseFetch";
import { API_BASE_URL } from "../api/endpoint";
import axios from "axios";

export default function AuthContext({children}) {
    const navigate = useNavigate()
    const csrf = () => axios.get("/sanctum/csrf-cookie");

    const [errors, setErrors] = useState();
    const {data: Users= []} = UseFetch(`${API_BASE_URL}users`)

    const login = async ({ ...Users}) => {
        await csrf ();
        try {
            await axios.post(`${API_BASE_URL}login`);
            Users;
            navigate("/landingpage");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.Users.errors);
            }
        }
    }

  return (
    <div>
        
    </div>
);
}
