import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="position-relative navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="navbar-brand user-select-none">AnyFlight!</div>
            <ul className="navbar nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link " to="/Airport">Airports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/FlightData">FlightData</Link></li>

            </ul>

          <div className="d-flex"><Link to="/Login" className="me-3">Login</Link></div>
            <div className="d-flex"><Link to="/Register" className="me-3">Register</Link></div>
        </nav>
    );
}

export default Navbar;