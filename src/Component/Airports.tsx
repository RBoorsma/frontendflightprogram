import {Cookies} from "react-cookie";

function Airports()
{
    const cookie = new Cookies();

    return(
        <h1>Welcome back, {cookie.get("firstName")}!</h1>
    )
}
export default Airports;