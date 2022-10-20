import React from 'react';
import './App.css';
import './CSS/Colors.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Component/Navbar";
import {Routes, Route} from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
function App() {
    return (
        <div>
        <Navbar></Navbar>
            <Routes>

                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Register" element={<Register />}></Route>
            </Routes>
        </div>

)
    ;
}

export default App;
