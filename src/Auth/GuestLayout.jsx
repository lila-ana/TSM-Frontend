import React from "react";
import { Navigate, Outlet } from "react-router";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

export default function GuestLayout() {
  const isAuth = useAuth();
  return isAuth ? <Navigate to="/" /> : <Outlet />;
}
