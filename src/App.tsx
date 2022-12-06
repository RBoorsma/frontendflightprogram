import './App.css';
import './CSS/CustomCSS.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Component/Navbar";
import {Routes, Route} from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Account from "./Component/Account";
import {useCookies} from "react-cookie";
import Airports from "./Component/Airports";

function App() {
    const [cookie, setcookie, removecookie] = useCookies(["JWT", "firstName", "lastName", "email"]);

    let loggedIn: boolean = false;

    if (cookie.firstName != null) {
        loggedIn = true;
    } else {
        loggedIn = false;
    }

    return (

        <div>

            <Navbar isloggedin={loggedIn}></Navbar>
            <Routes>

                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
                <Route path="/Account" element={<Account/>}></Route>
                <Route path="/Airport" element={<Airports/>}></Route>
            </Routes>
        </div>

    )
}

export default App;
