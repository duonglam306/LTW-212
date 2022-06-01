import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import ManageMember from "./components/manageMember/member";
import ManageContact from "./components/manageContact/contact";
import ManageStoreInfo from "./components/manageStoreInfo/storeInfo";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<HomePage />}></Route>
                    <Route exact path="/manage-member" element={<ManageMember />}></Route>
                    <Route exact path="/store-info" element={<ManageStoreInfo />}></Route>
                    <Route exact path="/manage-product" element={<ManageMember />}></Route>
                    <Route exact path="/manage-news" element={<ManageMember />}></Route>
                    <Route exact path="/manage-contact" element={<ManageContact />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
