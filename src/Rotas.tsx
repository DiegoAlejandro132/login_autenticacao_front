import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./login/Login"

export interface IApplicationProps {}

const Rotas: React.FunctionComponent<IApplicationProps> = (props) =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas