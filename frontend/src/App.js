import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/homePage/homePage"

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {/* <Route exact path="/" component={HomePage} /> */}
                    <Route exact path="/" element={<HomePage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
