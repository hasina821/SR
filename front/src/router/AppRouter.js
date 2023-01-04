import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "../pages/Home/Home";

const AppRouter = () => {
    return(
        <>
         <BrowserRouter>
            <div>
                <Switch>
                    <Route component={Home} path="/" exact={true} />
                </Switch>
            </div>
        </BrowserRouter>
        
        </>
    )
}

export default AppRouter;