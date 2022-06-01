import React, { useState } from "react";
import style from "./storeInfo.module.css";
import clsx from "clsx";
import Header from "../header/header";
import Footer from "../footer/footer";

const dataStoreInfo = {
    name: "Hola housè",
    address: "268, Ly Thuong Kiet, Ward 14, District 10, Ho Chi Minh City",
    phone: "(+84) 914 851 501",
    email: "bk.furniture.hcmut@gmail.com",
    work_time: "Monday - Sunday | 8:30 AM - 9:30 PM"
}

function ManageStoreInfo() {
    const [name, setName] = useState(dataStoreInfo.name);
    const [address, setAddress] = useState(dataStoreInfo.address);
    const [phone, setPhone] = useState(dataStoreInfo.phone);
    const [email, setEmail] = useState(dataStoreInfo.email);
    const [workTime, setWorkTime] = useState(dataStoreInfo.work_time);
    
    function updateStoreInfo(e) {
        e.preventDefault();
        console.log("Update store info" + name + address + phone + email + workTime);
    }

    return (
        <div className={clsx(style.main)}>
            <Header isLogin={true} role={"admin"} />
            {/* Action Modal */}
            <div
                className="modal fade"
                id={"editInfoModal"}
                tabIndex="-1"
                aria-labelledby="editInfoModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="editInfoModalLabel"
                            >
                                Edit Store Info 
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="inputName">Name store</label>
                                <input type="text" className="form-control" id="inputName" placeholder={dataStoreInfo.name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder={dataStoreInfo.address} onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPhone">Phone</label>
                                <input type="tel" className="form-control" id="inputPhone" placeholder={dataStoreInfo.phone} onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder={dataStoreInfo.email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputWorkTime">Work time</label>
                                <input type="text" className="form-control" id="inputWorkTime-1" placeholder={dataStoreInfo.work_time} onChange={(e) => setWorkTime(e.target.value)}/>
                            </div>
                            <div className="d-flex justify-content-around">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={(e) => updateStoreInfo(e)}
                            >
                                Update
                            </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(style.body, "container bg-white py-3")}>
                <div className={clsx(style.titleStoreInfo, "py-2")}>
                    <h5>STORE INFO</h5>
                </div>
                <div className={clsx("col-12 d-flex justify-content-center")}>
                    <div className={clsx(style.imageStore, "col-8")}>
                        <img
                            src={"https://i.imgur.com/tnc0XG5.png"}
                            alt=""
                            className={clsx("d-block w-100")}
                        />
                    </div>
                </div>
                <div
                    className={clsx(
                        "col-12 d-flex justify-content-center mt-3"
                    )}
                >
                    <div
                        className={clsx(
                            style.infoStore,
                            "col-9 border border-dark"
                        )}
                    >
                        <div className={clsx(style.name, "d-flex my-2")}>
                            <div className={clsx(style.iconName, "mr-2")}>
                            <i className="fa-solid fa-pen-nib"></i>
                            </div>
                            <div className={clsx(style.contentName, "col-10")}>
                                <strong>Name store: </strong> {dataStoreInfo.name}
                            </div>
                        </div>
                        <div className={clsx(style.address, "d-flex my-2")}>
                            <div className={clsx(style.iconAddress, "mr-2")}>
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div
                                className={clsx(style.contentAddress, "col-10")}
                            >
                                <strong>Address: </strong> {dataStoreInfo.address}
                            </div>
                        </div>
                        <div className={clsx(style.phone, "d-flex my-2")}>
                            <div className={clsx(style.iconPhone, "mr-2")}>
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className={clsx(style.contentPhone, "col-10")}>
                                <strong>Phone: </strong> {dataStoreInfo.phone}
                            </div>
                        </div>
                        <div className={clsx(style.email, "d-flex my-2")}>
                            <div className={clsx(style.iconEmail, "mr-2")}>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className={clsx(style.contentEmail, "col-10")}>
                                <strong>Email: </strong>{" "}
                                {dataStoreInfo.email}
                            </div>
                        </div>
                        <div className={clsx(style.workTime, "d-flex my-2")}>
                            <div className={clsx(style.iconWorkTime, "mr-2")}>
                                <i className="fa-solid fa-clock"></i>
                            </div>
                            <div
                                className={clsx(
                                    style.contentWorkTime,
                                    "col-10"
                                )}
                            >
                                <strong>Work time: </strong> {dataStoreInfo.work_time}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center my-3">
                    <button
                        type="button"
                        className={clsx(
                            style.btnUpdate,
                            "btn btn-primary"
                        )}
                        data-toggle="modal"
                        data-target={"#editInfoModal"}
                    >
                        Edit store info
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ManageStoreInfo;
