import React from 'react';
import {Link} from "react-router-dom";
import {useCookies, Cookies} from "react-cookie";

interface Props {
    isloggedin : boolean,
}

function Navbar(props : Props) {

    const handleLogout = () =>
    {
        if(props.isloggedin) {
            const cookie = new Cookies();
            cookie.remove("JWT");
            cookie.remove("firstName");
            cookie.remove("lastName");
            cookie.remove("email");
        }

    }
    return (
        <nav className="position-relative navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="navbar-brand user-select-none">AnyFlight!</div>
            <ul className="navbar nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link " to="/Airport">Airports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/FlightData">FlightData</Link></li>

            </ul>

            <div className="d-flex"><Link to={props.isloggedin ? "/Account" : "/Login"} className="me-3">{props.isloggedin ? "My Account" : "Login"}</Link></div>
            <div className="d-flex"><Link to={props.isloggedin ? "/Login" : "/Register"} onClick={handleLogout} className="me-3">{props.isloggedin ? "Logout" : "Register"}</Link></div>
        </nav>
    );
}
export default Navbar;