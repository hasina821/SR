import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import AdminRoutes from "./AdminRoutes";
import Signin from "../pages/Auth/signin"
import Signup from "../pages/Auth/signup";
import ClientHome from "../pages/client";
import Suivi from "../pages/Suivi";
import Addpostclient from "../pages/Addpostclient/Addpostclient";
import Pdf from "../pages/pdf";


function AppRouter() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<AdminRoutes/>}/>
        <Route path="/login" element={<Signin/>} exact={true} />
        <Route path="/signup"  element={<Signup/>} exact={true} />
        <Route path="/clienthome"  element={<ClientHome/>} exact={true} />
        <Route path="/suivi"  element={<Suivi/>} exact={true} />
        <Route path="/addpostclient/:refe/:nom"  element={<Addpostclient/>} exact={true} />
        <Route path="/pdf"  element={<Pdf/>} exact={true} />
    </Routes>
    </>
  );
}

export default AppRouter;
