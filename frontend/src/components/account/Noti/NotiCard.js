import React from "react";
// import { Link } from 'react-router-dom'
// import { Button } from 'reactstrap'
// import Button from "@mui/material/Button";
import noti from "./Noti.module.css";

function NotiCard(props) {
    var status = props.status === "read" ? noti.read : noti.unread;
    return (
        <div className={noti.notiCard}>
            <div className={noti.left}>
                <div className={noti.notiDate}>{props.date}</div>
                <div className={noti.notiDescription}>{props.description}</div>
            </div>
            <div className={`${noti.right} row`}>
                <button
                    type="button"
                    variant="text"
                    className={`btn btn-oulined-primary col-7 ${noti.readNoti} ${status}`}
                >
                    Đánh dấu đã đọc
                </button>
                <button
                    type="button"
                    variant="text"
                    className={`btn btn-oulined-danger col-5 ${noti.delNoti}`}
                >
                    Xóa
                </button>
            </div>
        </div>
    );
}

export default NotiCard;
