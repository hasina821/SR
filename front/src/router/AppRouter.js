import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from "../pages/Auth/signin";
import Signup from "../pages/Auth/signup";

import Home from "../pages/Home/Home";

const AppRouter = () => {
    return(
        <>
         <BrowserRouter>
            <div>
                <Switch>
                    <Route component={Home} path="/" exact={true} />
                    <Route component={Signin} path="/login" exact={true} />
                    <Route component={Signup} path="/signup" exact={true} />
                </Switch>
            </div>
        </BrowserRouter>
        
        </>
    )
}

export default AppRouter;