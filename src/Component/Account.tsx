import React, {ChangeEvent, useState} from 'react';
import {useCookies} from "react-cookie";
import axios from "axios";
function Account()
{

    const [cookie, setcookie, removecookie] = useCookies(["JWT", "firstName", "lastName", "email"]);
    return (
        <div>
        <h1>Your Account:</h1>
            <div>Not Fully Implemented yet</div>
        </div>
    )
}
export default Account;