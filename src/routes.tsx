import React from "react";

import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";

import { StudentRegister } from "./components/StudentRegister";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route element={<Home />} path="/" />
                <Route element={<Login />} path='/login' />
                <Route element={<Register />} path='/register' />
                <Route element={<StudentRegister />} path='/student-register' />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
