import React from "react";

import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import { AvailableServices } from "./pages/AvailableServices";
import { DetailsStudent } from "./pages/DetailsStudent";

import { Home } from "./pages/Home2";
import { Login } from "./pages/Login";
import { Negotiations } from "./pages/Negotiations";
import { Portfolio } from "./pages/Portfolio";
import { Register } from "./pages/Register";
import { RegisterCompany } from "./pages/RegisterCompany";
import { RegisterOffer } from "./pages/RegisterOffer";
import { RegisterStudent } from "./pages/RegisterStudent";
import { ServicesExpand } from "./pages/ServicesExpand";


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
                <Route element={<RegisterOffer />} path='/register-offer' />
                <Route element={<AvailableServices />} path='/services' />
                <Route element={<ServicesExpand />} path='/services-expand' />
                <Route element={<Negotiations />} path='/negotiation' />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
