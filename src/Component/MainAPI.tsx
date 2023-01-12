import {Cookies, useCookies} from "react-cookie";
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


function MainAPI() {
    const [cookie] = useCookies(["JWT", "firstName", "lastName", "email"])
    const [DemoData, SetDemoData]: any = useState();
    const navigate = useNavigate();
    const startDemo = () => {
        axios.post('http://localhost:8080/API/Aviation/Demo/Run', {jwsString: cookie.JWT}).then(function (response) {
            if (response?.status == 200) {
                SetDemoData(response.data)
            }


        }).catch(function (error) {
            if (error?.status == 403) {
                navigate("/Exception/FORBIDDEN");
            }
        })

    }
    useEffect(() => {
        if(cookie.JWT == null)
        {
            navigate("/Exception/FORBIDDEN")
        }
        startDemo()
    }, [])


    return (
        <div className="user-select-none text-center">
            <div className="text-center"><h1>Welcome back, {cookie.firstName}!</h1></div>
            <h2>This is the demo page of our API. Please check your account to check your packages</h2>
            {DemoData != null ?
                <div>
                    <h3>Flight: </h3>
                    <div id="Flight">
                        <div>Status {DemoData.flight.status}</div>
                        <div>Departure ICAO Airport: {DemoData.flight.departureIcao}</div>
                        <div>Arrival ICAO Airport: {DemoData.flight.arrivalIcao}</div>
                        <div>Flight Code: {DemoData.flight.flightIcao}</div>
                    </div>
                    <h3>Airport:</h3>
                    <div id="Airport">
                        <div>ICAO code: {DemoData.airport.icao}</div>
                        <div>name: {DemoData.airport.name}</div>
                        <div>country: {DemoData.airport.country}</div>
                        <div>Timezone: {DemoData.airport.timezone}</div>
                    </div>
                    <h3>Country:</h3>
                    <div  id="Country">
                        <div>Name: {DemoData.country.name}</div>
                        <div>Capital: {DemoData.country.capital}</div>
                        <div>iso2Code: {DemoData.country.iso2Code}</div>
                        <div>iso3Code: {DemoData.country.iso3Code}</div>
                        <div>currency: {DemoData.country.currency}</div>
                        <div>PhonePrefix: {DemoData.country.phonePrefix}</div>

                    </div>
                </div>
                :
                <div id="data">We are loading our Demo Data... Please Wait</div>
            }


        </div>
    )
}

export default MainAPI;