import { Routes, Route, BrowserRouter } from "react-router-dom";
import Account from "./components/account/Account.js"
import Main from "./Page/Header.js"

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {/* <Route exact path="/" component={HomePage} /> */}
                    <Route path="/account/*" element={<Account/>}></Route>
                    <Route path="/haha" element={<Account/>}></Route>
                    <Route exact path="/" element={<Main/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
