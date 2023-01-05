import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import AdminRoutes from "./AdminRoutes";
import Signin from "../pages/Auth/signin"
import Signup from "../pages/Auth/signup";
import ClientHome from "../pages/client";


function AppRouter() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<AdminRoutes/>}/>
        <Route path="/login" element={<Signin/>} exact={true} />
        <Route path="/signup"  element={<Signup/>} exact={true} />
        <Route path="/clienthome"  element={<ClientHome/>} exact={true} />
    </Routes>
    </>
  );
}

export default AppRouter;
