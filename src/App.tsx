import './App.css';
import './CSS/CustomCSS.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Component/Navbar";
import {Routes, Route} from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Account from "./Component/Account";
import {useCookies} from "react-cookie";
import MainAPI from "./Component/MainAPI";
import FORBIDDEN from "./Component/FORBIDDEN";
import Home from "./Component/Home";
import NOTFOUND from "./Component/NOTFOUND";
import {useEffect, useState} from "react";
import ManagePackage from "./Component/ManagePackage";
import FlightTracker from "./Component/FlightTracker";

function App() {
    const [cookie, , removecookie] = useCookies(["JWT", "firstName", "lastName", "email"]);
    const [loggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        if(cookie.JWT != null)
        {
            setLoggedIn(true);
        }
        else
        {
            setLoggedIn(false);
        }
    }, [cookie, removecookie])


    return (

        <div>

            <Navbar isloggedin={loggedIn}></Navbar>
            <Routes>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
                <Route path="/Account" element={<Account/>}></Route>
                <Route path="/Main" element={<MainAPI/>}></Route>
                <Route path="/Exception/FORBIDDEN" element={<FORBIDDEN/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="*" element={<NOTFOUND/>}></Route>
                <Route path="/ManagePackage" element={<ManagePackage/>}></Route>
                <Route path="/FlightTracker" element={<FlightTracker/>}></Route>
            </Routes>
        </div>

    )
}

export default App;
