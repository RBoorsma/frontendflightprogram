import {Link} from "react-router-dom";
import React from "react";

function Home() {
    return (
        <div>
            <div className="text-center"><h1>Welcome to Any Flight!</h1></div>
            <div className="text-center"><h2> Project made by: Rob Boorsma</h2></div>
            <div className="text-center"><h3>Student @ Fontys HBO ICT</h3></div>
            <div className="text-center"><h4>Powered by: Aviation Edge!</h4></div>
            <div className="text-center"><Link className="btn btn-dark" to="/Login">Please Login</Link></div>
            <div className="text-center"><h5>This project has used:</h5></div>

            <div className="text-center"><h5>React (TypeScript) with Libraries:</h5></div>
            <div className="text-center"><h6> - Axios</h6></div>
            <div className="text-center"><h6> - Bootstrap</h6></div>
            <div className="text-center"><h6> - React Router</h6></div>
            <div className="text-center"><h6> - React Cookie</h6></div>
            <div className="text-center"><h5>Spring Boot with Libraries:</h5></div>
            <div className="text-center"><h6> - ModelMapper</h6></div>
            <div className="text-center"><h6> - JWT Tokens</h6></div>
            <div className="text-center"><h6> - Lombok</h6></div>
        </div>

    )
}

export default Home;