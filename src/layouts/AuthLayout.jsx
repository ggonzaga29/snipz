import React from "react";
import { Outlet } from "react-router-dom";

import AuthNavbar from "../components/AuthNavbar";

const AuthLayout = () => {
  return (
    <div className="dark">
      <div className="min-h-screen min-w-screen dark:bg-slate-800 text-white">
        <AuthNavbar />
        <Outlet /> {/* Render nested child routes */}
      </div>
    </div>
  )
}

export default AuthLayout