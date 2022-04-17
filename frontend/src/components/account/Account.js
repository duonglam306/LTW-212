import { Route, Routes } from "react-router-dom";
import Address from "./Address/Address";
import Order from "./Order/Order";
import UserInfo from "./Info/UserInfo";
import Noti from "./Noti/Noti";
import OrderDetail from "./Order/OrderDetail/OrderDetail";
// import Wallet from "./Wallet/Wallet";
import classes from "./Account.module.css";
import "./bootstrap-5.1.3-dist/css/bootstrap.css";
import Nav from "./AccountNavigation/AccountNavigation.js";
function Account() {
    return (
        <div className={`mx-auto ${classes.Info}`}>
            <div className={`mx-auto container row w-100 ${classes.test}`}>
                <div className={"col-3"}>
                    <Nav />
                </div>
                <div className={"col-9"}>
                    <div className={classes.Content}>
                        <Routes>
                            <Route path="/" element={<UserInfo />} />
                            <Route path="/address/" element={<Address />} />
                            <Route path="/orders/" element={<Order />} />
                            <Route path="/noti/" element={<Noti />} />
                            <Route
                                path="/orderdetail"
                                element={<OrderDetail />}
                            />
                            {/* <Route
                                        path="/wallet"
                                        element={<Wallet />}
                                    /> */}
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
