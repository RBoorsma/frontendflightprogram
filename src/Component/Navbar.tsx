import {Link, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

interface Props {
    isloggedin : boolean,
}

function Navbar(props : Props) {
    const navigate = useNavigate();
    const [, , removecookie] = useCookies(["JWT", "firstName", "lastName", "email"]);
    const handleLogout = () =>
    {
        if(props.isloggedin) {
            removecookie("JWT");
            removecookie("firstName");
            removecookie("lastName");
            removecookie("email");
            navigate("/")

        }

    }
    return (
        <nav id="navbar" className="position-relative navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="navbar-brand user-select-none">AnyFlight!</div>
            <ul className="navbar nav me-auto mb-2 mb-lg-0">
                {props.isloggedin ? <li className="nav-item"><Link className="btn btn-dark" to="/Main">Home</Link></li> : ""}
                {props.isloggedin ? <li className="nav-item"><Link className="btn btn-dark" to="/FlightTracker">FlightTracker</Link></li> : ""}
            </ul>

            <div className="d-flex"><Link to={props.isloggedin ? "/Account" : "/Login"} className="me-3 btn btn-dark">{props.isloggedin ? "My Account" : "Login"}</Link></div>
            <div className="d-flex">
                {props.isloggedin ?
                    <button className="me-3 btn btn-dark" onClick={handleLogout}>Logout</button>
                 :
                    <Link to="/Register" className="me-3 btn btn-dark">Register</Link>
                }


            </div>
        </nav>
    );
}
export default Navbar;