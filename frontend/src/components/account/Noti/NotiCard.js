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
            <div className={noti.right}>
                <button type="button"  variant="text" className={`${noti.readNoti} ${status}`}>
                    Đánh dấu đã đọc
                </button>
                <button type="button"  variant="text" className={noti.delNoti}>
                    Xóa
                </button>
            </div>
        </div>
    );
}

export default NotiCard;
