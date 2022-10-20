import React, {ChangeEvent, useState} from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Login() {
   const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("")
   const handleMailChange = (event : ChangeEvent<HTMLInputElement>) => {
       SetEmail(event.target.value);
   }
    const handlePWChange = (event : ChangeEvent<HTMLInputElement>) => {
        SetPassword(event.target.value);
    }

    const handleSubmit = () =>
    {
      // TODO Implementation not done yet
    }
    return (
        <Container>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"  aria-describedby="emailInfo"  onChange={handleMailChange} placeholder="myemail@anyflight.com"/>
                    <div className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" aria-describedby="passwordInfo" onChange={handlePWChange}  placeholder="my fantastic password"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" aria-describedby="passwordInfo" onChange={handlePWChange}  placeholder="my fantastic password"/>
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
            <div className="me-0">Already have an account? <Link to="/Login" >Click here!</Link></div>
        </Container>
    )
}

export default Login;