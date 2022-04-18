import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/homePage/homePage"
import Header from "./components/header/header"
import Footer from "./components/footer/footer";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    {/* <Route exact path="/" component={HomePage} /> */}
                    <Route exact path="/" element={<HomePage />}></Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
