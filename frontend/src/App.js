import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/homePage/homePage"
import ManageMember from "./components/manageMember/member"
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {/* <Route exact path="/" component={HomePage} /> */}
                    <Route exact path="/" element={<ManageMember />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
