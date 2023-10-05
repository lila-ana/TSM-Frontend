import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {


return (
    <div>
        <h2>Website Help</h2>
        <p></p>
        <nav>
            <NavLink to = "faq"> View the FAQ </NavLink>
            <NavLink to = "Contactus"> Contact Us </NavLink>
        </nav>

        <Outlet/>
    </div>
    )
};
