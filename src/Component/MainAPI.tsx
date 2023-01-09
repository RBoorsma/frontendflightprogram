import {Cookies} from "react-cookie";

function Airports() {
    const cookie = new Cookies();

    return (
        <div className="user-select-none">
            <div className="text-center"> <h1>Welcome back, {cookie.get("firstName")}!</h1> </div>
            <div className="text-center"><label>You currently don't have any packages!</label> </div>
            <div className="text-center"><label>Please go to your account to access our packages</label> </div>
        </div>
    )
}

export default MainAPI;