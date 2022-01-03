import React from "react";
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RegisterPage } from "./registerpage"
import { LoginPage } from "./loginpage"
import { Home } from "./home";
import { Friend } from "./friend";
import { OtherUser } from "./otherUser";

import '/style/index.css';
import '/style/navbar.css';
import '/style/login.css';
import '/style/home.css';
import '/style/registerpage.css';
import '/style/profil.css';

import '../js/accordion';

const App = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/register' element={<RegisterPage/>}></Route>
                    <Route path='/login' element={<LoginPage/>}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path="/profil" element={<OtherUser />}></Route>
                    <Route path="/friends" element={<Friend />}></Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))
