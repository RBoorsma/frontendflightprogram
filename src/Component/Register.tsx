import React, {ChangeEvent, useState} from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

function Login() {
    const [sucMsg, SetSucMsg] = useState("")
    const [errorMsg, SetErrorMsg] = useState("")
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("")
    const [confirmpassword, SetConfirmPassword] = useState("")
    const [firstName, SetFirstName] = useState("")
    const [lastName, SetLastName] = useState("")
    const handleMailChange = (event: ChangeEvent<HTMLInputElement>) => {
        SetEmail(event.target.value);
    }
    const handlePWChange = (event: ChangeEvent<HTMLInputElement>) => {
        SetPassword(event.target.value);
    }
    const handleConfirmPWChange = (event: ChangeEvent<HTMLInputElement>) => {
        SetConfirmPassword(event.target.value);

    }
    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        SetFirstName(event.target.value);
    }
    const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        SetLastName(event.target.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            SetErrorMsg("Your passwords are not equal!");
        } else {
            axios.post("http://localhost:8080/API/Auth/Register", {
                email: email,
                password: password,
                confirmpassword: confirmpassword,
                firstName: firstName,
                lastName: lastName
            }).then(function (response) {
                if (response?.status === 201) {
                    SetSucMsg("Account created, you can now login!");
                }
                else if(response?.status == 200)
                {
                    SetErrorMsg("This mail is already in our Database!");
                }
            })
        }
    }
    return (
        <Container>
            <p  id="succesfull" className={sucMsg ? "successful" : "dontshow"} aria-live="assertive">{sucMsg}</p>
            <p  id="error" className={errorMsg ? "error" : "dontshow"} aria-live="assertive">{errorMsg}</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">FirstName</label>
                    <input name="firstName" type="text" className="form-control" aria-describedby="firstNameInfo" required
                           onChange={handleFirstNameChange} placeholder="MyFirstName"/>
                    <div className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label className="form-label">LastName</label>
                    <input name="lastName" type="text" className="form-control" aria-describedby="lastNameInfo" required
                           onChange={handleLastNameChange} placeholder="MyLastName"/>
                    <div className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input name="mailInput" type="email" className="form-control" aria-describedby="emailInfo" required
                           onChange={handleMailChange} placeholder="myemail@anyflight.com"/>
                    <div className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input name="passwordInput" type="password" className="form-control" aria-describedby="passwordInfo" required
                           onChange={handlePWChange} placeholder="my fantastic password"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input name="confirmPasswordInput" type="password" className="form-control" aria-describedby="confirmPasswordInfo" required
                           onChange={handleConfirmPWChange} placeholder="my fantastic password"/>
                </div>
                <button id="submit" type="submit" className="btn btn-primary">Create Account</button>
            </form>
            <div className="me-0">Already have an account? <Link to="/Login">Click here!</Link></div>
        </Container>
    )
}

export default Login;