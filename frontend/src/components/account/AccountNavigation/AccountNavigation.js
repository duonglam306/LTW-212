import { NavLink } from "react-router-dom";
import classes from "../Account.module.css";
// import { useUserInfo } from "../../../assets/firebase-data/getUserAPI";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
function AccountNavigation() {
    // const { userInfo } = useUserInfo();
    return (
        <div>
            <div className={classes.InfoNav}>
                <div className={classes.Avatar}>
                    <div
                        className={classes.img}
                        // style={{
                        //     background: userInfo.img
                        //         ? `url(${userInfo.img}) center / cover no-repeat`
                        //         : `url("https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=") center / cover no-repeat`,
                        // }}
                        style={{
                            background: `url("https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=") center / cover no-repeat`,
                        }}
                    ></div>
                </div>
                <NavLink
                    end
                    className={(navData) =>
                        navData.isActive
                            ? `${classes.linkBtnActive} ${classes.linkBtn}`
                            : classes.linkBtn
                    }
                    to="./"
                >
                    {" "}
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className={`bi bi-person-fill ${classes.icon}`}
                            viewBox="0 0 16 16"
                        >
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        {"    "}
                        Thông tin cá nhân
                    </span>{" "}
                </NavLink>
                <NavLink
                    className={(navData) =>
                        navData.isActive
                            ? `${classes.linkBtnActive} ${classes.linkBtn}`
                            : classes.linkBtn
                    }
                    to="/account/noti/"
                >
                    {" "}
                    <span>
                        {" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className={`${classes.icon} bi bi-bell-fill`}
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                        </svg>
                        {"    "}
                        Thông báo
                    </span>{" "}
                </NavLink>
                <NavLink
                    className={(navData) =>
                        navData.isActive
                            ? `${classes.linkBtnActive} ${classes.linkBtn}`
                            : classes.linkBtn
                    }
                    to="./orders/"
                >
                    {" "}
                    <span>
                        {" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className={`${classes.icon} bi bi-card-checklist`}
                            viewBox="0 0 16 16"
                        >
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                        </svg>
                        {"    "}
                        Danh sách đơn hàng
                    </span>{" "}
                </NavLink>
                <NavLink
                    className={(navData) =>
                        navData.isActive
                            ? `${classes.linkBtnActive} ${classes.linkBtn}`
                            : classes.linkBtn
                    }
                    to="./address/"
                >
                    {" "}
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className={`${classes.icon} bi bi-geo-alt-fill`}
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        {"    "}
                        Danh sách địa chỉ
                    </span>{" "}
                </NavLink>
                {/* <NavLink
                    className={(navData) =>
                        navData.isActive
                            ? `${classes.linkBtnActive} ${classes.linkBtn}`
                            : classes.linkBtn
                    }
                    to="./wallet/"
                >
                    <span>Ví</span>{" "}
                </NavLink> */}
            </div>
        </div>
    );
}
export default AccountNavigation;
