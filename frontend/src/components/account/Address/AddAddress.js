import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import { input } from "reactstrap";
import address from "./Address.module.css";
import { useNavigate } from "react-router";
// import account from '../address.module.css'
// import { useUserInfo } from "../../../assets/firebase-data/getUserAPI";
function AddAddress(props) {
    const history = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loc1, setLoc1] = useState("");
    const [loc2, setLoc2] = useState("");
    const [loc3, setLoc3] = useState("");
    const [locDetail, setLocDetail] = useState("");
    const [err, setErr] = useState("");
    // const { addAddress } = useUserInfo();

    const onSubmit = (event) => {
        event.preventDefault();
        setErr("");
        if (
            name.value &&
            phone.value &&
            loc1.value &&
            loc2.value &&
            loc3.value &&
            locDetail.value &&
            phone.value
        ) {
            const newAddress = {
                name: name.value,
                phone: phone.value,
                location_1: loc1.value,
                location_2: loc2.value,
                location_3: loc3.value,
                location_detail: locDetail.value,
                defaultAddr: false,
            };
            console.log(newAddress);
            // addAddress(newAddress);
            props.onAdd();
        } else {
            console.log("error");
            setErr("Bạn cần nhập đầy đủ thông tin trên");
        }

        // history('/account/address');
    };
    return (
        <div className={address.AddressPopup}>
            <h1 className="mt-4">Thêm địa chỉ</h1>
            <div className={`${address.MainContent} ${address.add}`}>
                <div className={address.infoInsideContent}>
                    <form name="InfoForm">
                        <div className={`form-group ${address.field}`}>
                            <label htmlFor="exampleInputEmail1">Tên</label>
                            <input
                                name="name"
                                type="text"
                                id="name"
                                className={`form-control ${address.input}`}
                                innerRef={(input) => {
                                    setName(input);
                                }}
                            />
                        </div>
                        <div className={`form-group ${address.field}`}>
                            <label htmlFor="exampleInputPassword1">
                                Số điện thoại
                            </label>
                            <input
                                className={`form-control ${address.input}`}
                                name="phone"
                                type="text"
                                id="phone"
                                innerRef={(input) => {
                                    setPhone(input);
                                }}
                            />
                        </div>
                        <div className={`form-group ${address.field}`}>
                            <label htmlFor="exampleInputEmail1">
                                Tỉnh/Thành phố
                            </label>
                            <input
                                className={`form-control ${address.input}`}
                                name="province"
                                type="text"
                                id="province"
                                innerRef={(input) => {
                                    setLoc1(input);
                                }}
                            />
                        </div>
                        <div className={`form-group ${address.field}`}>
                            <label htmlFor="exampleInputEmail1">
                                Quận/Huyện
                            </label>
                            <input
                                className={`form-control ${address.input}`}
                                name="district"
                                type="text"
                                id="district"
                                innerRef={(input) => {
                                    setLoc2(input);
                                }}
                            />
                        </div>{" "}
                        <div className={`form-group ${address.field}`}>
                            <label htmlFor="exampleInputEmail1">
                                Xã/Phường
                            </label>
                            <input
                                className={`form-control ${address.input}`}
                                name="commune"
                                type="text"
                                id="commune"
                                innerRef={(input) => {
                                    setLoc3(input);
                                }}
                            />
                        </div>{" "}
                        <div className={`form-group ${address.field}`}>
                            <label htmlFor="exampleInputEmail1">
                                Địa chỉ cụ thể
                            </label>
                            <input
                                className={`form-control ${address.input}`}
                                name="addrDetail"
                                type="text"
                                id="addrDetail"
                                innerRef={(input) => {
                                    setLocDetail(input);
                                }}
                            />
                        </div>
                        <button
                            type="button"
                            variant="contained"
                            onClick={onSubmit}
                            className={`btn btn-primary ${address.confirmAdd} ${address.update}`}
                        >
                            Thêm địa chỉ
                        </button>
                        <button
                            type="button"
                            variant="contained"
                            onClick={props.onCancel}
                            className={`btn btn-danger ${address.cancelAdd} ${address.update}`}
                        >
                            Hủy
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddAddress;
