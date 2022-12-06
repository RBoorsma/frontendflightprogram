import React, {ChangeEvent, useState} from 'react';
import {Container} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useCookies} from "react-cookie";

function Login() {
    const [cookie, setcookie, removecookie] = useCookies(["JWT", "firstName", "lastName", "email"]);
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("")
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");

    const handleMailChange = (event: ChangeEvent<HTMLInputElement>) => {
        SetEmail(event.target.value);
    }
    const handlePWChange = (event: ChangeEvent<HTMLInputElement>) => {
        SetPassword(event.target.value);

    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        axios.post('http://localhost:8080/API/Auth/Login', {
            email: email,
            password: password
        }).then(function (response) {
                if (response?.status == 200) {
                    let expireTime = new Date();
                    expireTime.setDate(expireTime.getDate() + 7);
                    setcookie("firstName", response.data.firstName, {path: "/", expires: expireTime});
                    setcookie("JWT", response.data.jwsString, {path: "/", expires: expireTime});
                    setcookie("lastName", response.data.lastName, {path: "/", expires: expireTime});
                    setcookie("email", response.data.email, {path: "/", expires: expireTime});
                    return navigate("/Airport");
                }
            }
        ).catch(function (error) {
            if (!error?.response) {
                setErrorMsg("No response from server");
            } else if (error?.response?.status == 401) {
                setErrorMsg("Wrong email or password");
            } else {
                setErrorMsg("Login failed");
            }
        })
    }

    return (
        <Container>
            <p className={errorMsg ? "error" : "dontshow"} aria-live="assertive">{errorMsg}</p>
            <h1 className="">Login here</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Enter your email here</label>
                    <input type="email" className="form-control" aria-describedby="emailInfo"
                           onChange={handleMailChange} placeholder="myemail@anyflight.com"/>
                    <div className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter your Password here</label>
                    <input type="password" className="form-control" aria-describedby="passwordInfo"
                           onChange={handlePWChange} placeholder="my fantastic password"/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div className="me-0">Don't have an account? <Link to="/Register">Click here!</Link></div>
        </Container>
    )
}

export default Login;