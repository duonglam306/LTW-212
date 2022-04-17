// import { Route, Routes } from "react-router-dom";
// import Address from "../components/Account/Address/Address";
// import Order from "../components/Account/Order/Order";
// import UserInfo from "../components/Account/Info/UserInfo";
// import Noti from "../components/Account/Noti/Noti";
// import OrderDetail from "../components/Account/Order/OrderDetail/OrderDetail";
// import Wallet from "../components/Account/Wallet/Wallet";
import classes from "./Account.module.css";
import bootstrap from "./bootstrap-5.1.3-dist/css/bootstrap.css";
// import AccountNavigation from "../components/Account/AccountNav/AccountNavigation";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
function Account() {
    return (
        <div className={classes.Info}>
            Account page
            <div className={`${bootstrap.container} ${bootstrap.row}`}>
                <div className={bootstrap["col-3"]}>Hello</div>
                <div className={bootstrap["col-9"]}></div>
            </div>
        </div>
    );
}

export default Account;
