import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {Cookies, useCookies} from "react-cookie";

function FORBIDDEN() {
    const [, , removecookie] = useCookies(["JWT", "firstName", "lastName", "email"]);

    useEffect(() => {
       removecookie("JWT");
       removecookie("firstName");
       removecookie("lastName");
       removecookie("email");
    }, [])
    return (
        <div>
            <div className="text-center"><h1> FORBIDDEN!</h1></div>
            <div className="text-center"><h1>Oh no! </h1></div>
            <div className="text-center"><h1>It looks you are currently not allowed to access this page.</h1></div>
            <div className="text-center"> <h2>Press the button below to login</h2> </div>
           <div  className="text-center">  <Link className="btn btn-dark" to="/Login">Login</Link></div>
        </div>

    )
}
export default FORBIDDEN;