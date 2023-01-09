import axios from "axios";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function FlightTracker() {

    const [cookie] = useCookies();
    const navigate = useNavigate();
    const [status, setStatus] = useState(0);
    const [data, setData]: any = useState();
    const getDemo = () => {
        axios.post('http://localhost:8080/API/Aviation/FlightTracker/Demo', {jwsString: cookie.JWT}).then(function (response) {
            if (response?.status == 200) {
                setStatus(200);
                setData(response.data);
            }


        }).catch(function (error) {
            if (error?.response.status == 403) {
                navigate("/Exception/FORBIDDEN");
            } else if (error?.response.status == 401) {
                setStatus(401);
            }
        })

    }
    useEffect(() => {
        if (cookie.JWT == null) {
            navigate("/Exception/FORBIDDEN")
        }
        const interval = setInterval(() => {
            getDemo();
        }, 5000);
        return () => clearInterval(interval);

    }, [])
    return (
        <div className="user-select-none text-center">
            <h1>Welcome to FlightTracker Module</h1>
            {
                status == 401 ? <div>
                        <h2>Sadly, you dont have the right package to access this module! Please add it from your
                            account!</h2>
                    </div> :
                    data?.status == null ? <div>
                            <h2>We are currently loading our data... This can take up to 1 minute</h2>
                        </div> :
                        <div>
                            <h3>Real-Time Data About: {data.aircraftIcao}</h3>
                            <div>
                                <div>AircraftIcao Code {data.aircraftIcao}</div>
                                <div>Status {data.status}</div>
                                <div>Current Horizontal Speed {data.horizontal}</div>
                                <div>Current Vertical Speed {data.vspeed}</div>
                                <div>Current Direction {data.direction}</div>
                                <div>Current Longitude {data.longitude}</div>
                                <div>Current Latitude {data.latitude}</div>
                                <div>Current Altitude {data.altitude}</div>
                            </div>
                        </div>
            }
        </div>
    )
}


    export default FlightTracker;