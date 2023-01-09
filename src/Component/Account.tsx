import React, {ChangeEvent, useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function Account() {

    const [cookie, setcookie, removecookie] = useCookies(["JWT", "firstName", "lastName", "email"]);
    const [Packages, SetPackages] = useState([])
    const navigate = useNavigate();
    const getPackages = () => {
        axios.post('http://localhost:8080/API/Account/UserPackages', {jwsString: cookie.JWT}).then(function (response)
        {
            if(response?.status == 200)
            {SetPackages(response.data)}


        }).catch(function (error) {
            if(error?.response.status == 403)
            {
                navigate("/Exception/FORBIDDEN");
            }
        })

    }
    useEffect(() => {
        if(cookie.JWT == null)
        {
            navigate("/Exception/FORBIDDEN")
        }
        getPackages();
    }, [])
    return (
        <div className="user-select-none text-center">
            <div><h1>Hi, {cookie.firstName}!</h1></div>
            {Packages.length == 0 ?
                //IF TRUE:
                <div id="packages">
                    <div>You currently don't have any packages!</div>
                    <div> Please buy one more packages to gain access to more
                        features!
                    </div>
                </div>

                : // IF FALSE:
                <div id="packages">
                    <div>You currently have access to the following packages:</div>
                    {Packages.map((Package: { name: string, description: string, id: number }) => (
                        <div key={Package.id}>
                            <b className="fs-4">{Package.name}</b>
                            <div className="fs-6"><i>{Package.description} </i></div>
                        </div>
                    ))}

                </div>
            }
            <Link id="managepackage" to="/ManagePackage" className="btn btn-dark"> Press me to manage Packages!</Link>
        </div>
    )
}

export default Account;