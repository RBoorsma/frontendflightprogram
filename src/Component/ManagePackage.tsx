import React, {MouseEventHandler, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useCookies} from "react-cookie";

function ManagePackage() {
    const [cookie] = useCookies(["JWT", "firstName", "lastName", "email"])
    const [Packages, SetPackages] = useState([])
    const navigate = useNavigate();
    const newPackageList: any[] = [];

    const handleEnable = (name: string, description: string, id: string) => {


        if (newPackageList.includes(id)) {

        } else {
            let Package = {
                name: name,
                description: description,
                id: id
            };
            newPackageList.push(Package)
        }
    }
    const handleSubmit = (e : React.MouseEvent<HTMLButtonElement>) =>
    {
        e.preventDefault();
        axios.post('http://localhost:8080/API/Account/updatePackages', {
            packageList: newPackageList,
            jwsString: cookie.JWT
            }
        ).then(function (response) {
                if (response?.status == 200) {
                    navigate("/Account")
                }
            }
        ).catch(function (error) {
            if (error?.response.status == 403) {
                navigate("/Exception/FORBIDDEN");
            }
        })
    }
    const getPackages = () => {
        axios.post('http://localhost:8080/API/Account/AllPackages', {jwsString: cookie.JWT}).then(function (response) {
            if (response?.status === 200) {
                SetPackages(response.data)
            }


        }).catch(function (error) {
            if (error?.response.status === 403) {
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
        <div>
            <div className="user-select-none text-center">
                <h3><b>Select all packages you want, even if you already own them!</b></h3>
                {Packages.map((Package: { name: string, description: string, id: string }) => (

                    <div key={Package.id}>
                        <b className="fs-4">{Package.name}</b>
                        <div className="fs-6"><i>{Package.description} </i></div>
                        <button className="btn btn-success" id={Package.name}
                                onClick={() => handleEnable(Package.name, Package.description, Package.id)}>I want this!
                        </button>
                    </div>
                ))}
            </div>
            <div className="user-select-none text-center p-4">
                <button id="submit" className="btn btn-info" onClick={handleSubmit}> Confirm Changes</button>
            </div>
        </div>
    )
}

export default ManagePackage;