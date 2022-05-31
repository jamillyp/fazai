import React from "react";

import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import { DetailsStudent } from "./pages/DetailsStudent";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Portfolio } from "./pages/Portfolio";
import { Register } from "./pages/Register";
import { RegisterCompany } from "./pages/RegisterCompany";
import { RegisterStudent } from "./pages/RegisterStudent";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route element={<Home />} path="/" />
                <Route element={<Login />} path='/login' />
                <Route element={<Register />} path='/register' />
                <Route element={<RegisterStudent />} path='/student-register' />
                <Route element={<RegisterCompany />} path='/company-register' />
                <Route element={<Portfolio />} path='/portfolio' />
                <Route element={<DetailsStudent />} path='/detalhes-estudante' />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
