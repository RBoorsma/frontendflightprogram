import {Link} from "react-router-dom";
import React from "react";

function NOTFOUND() {
    return (
        <div>
            <div className="text-center"><h1> ERROR 404: PAGE NOT FOUND</h1></div>
            <div className="text-center"><h1>Oh no!</h1></div>
            <div className="text-center"><h1>It looks like this page doesnt Exist</h1></div>
            <div className="text-center"><h2>Press the button below to go back to the home page</h2></div>
            <div className="text-center"><Link className="btn btn-dark" to="/">Go back</Link></div>
        </div>

    )
}

export default NOTFOUND;