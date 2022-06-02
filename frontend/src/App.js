import { Routes, Route, BrowserRouter } from "react-router-dom";
import Account from "./components/account/Account.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Login/Register.js";
import Menu from "./components/Menu/menu.js";
import Mapbox from "./components/Mapbox/Mapbox.js";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/* <Route exact path="/" component={HomePage} /> */}
                    <Route path="/account" element={<Account />}></Route>
                    <Route path="/haha" element={<Account />}></Route>
                    <Route exact path="login" element={<Login />}></Route>
                    <Route exact path="register" element={<Register />}></Route>
                    <Route exact path="menu" element={<Menu />}></Route>
                    <Route exact path="mapbox" element={<Mapbox />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
