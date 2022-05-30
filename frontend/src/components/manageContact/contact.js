import React, { useState } from "react";
import style from "./contact.module.css";
import clsx from "clsx";
import Header from "../header/header";
import Footer from "../footer/footer";

const dataContact = [
    {
        id: 1,
        name: "Lam Thanh Duong",
        email: "duong.lamthanh3006@hcmut.edu.vn",
        phone: "0942826536"
    },
    {
        id: 2,
        name: "Mai Duc Long",
        email: "long.mai1011@hcmut.edu.vn",
        phone: "0942826536"
    },
    {
        id: 3,
        name: "Nguyen Truong Hai Dang",
        email: "dang.nguyen0406@hcmut.edu.vn",
        phone: "0942826536"
    },
];

function ManageContact() {
    const [currentPageContact, setCurrentPageMember] = useState(1);
    const handlePageContact = (keyword) => {
        if (keyword === "prev" && currentPageContact > 1) {
            setCurrentPageMember((prev) => prev - 1);
        } else if (keyword === "next" && currentPageContact < 3) {
            setCurrentPageMember((prev) => prev + 1);
        } else {
            setCurrentPageMember(keyword);
        }
    };

    const [chooseContact, setChooseContact] = useState(-1);

    function cellTableContact(item, index) {
        return (
            <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>
                    {item.name}
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td className={clsx("text-center")}>
                    <button
                        type="button"
                        className={clsx(
                            style.btnDelete,
                            "btn btn-outline-danger"
                        )}
                        data-toggle="modal"
                        data-target={"#deleteContactModal"}
                        onClick={() => setChooseContact(item.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }

    function deleteContact() {
        console.log("Delete Contact has id: " + chooseContact);
    }
    
    return (
        <div className={clsx(style.main)}>
            <Header isLogin={true} role={"admin"} />
            {/* Action Modal */}
            <div
                className="modal fade"
                id={"deleteContactModal"}
                tabIndex="-1"
                aria-labelledby="deleteContactModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="deleteContactModalLabel"
                            >
                                Delete Contact
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
                            Do you want to delete this contact?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={deleteContact}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(style.body, "container bg-white py-3")}>
                {/* Table Contact */}
                <div className={clsx(style.titleTableContact, "py-2")}>
                    <h5>Contact</h5>
                </div>
                <div className={clsx(style.tContact)}>
                    <table className="table table-bordered table-hover">
                        <thead className={clsx(style.thContact)}>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataContact.map((item, index) =>
                                cellTableContact(item, index)
                            )}
                        </tbody>
                    </table>
                </div>
                <div className={clsx(style.paginationContact, "py-3")}>
                    <nav aria-label="Page navigation contact">
                        <ul className="pagination justify-content-end">
                            <li
                                className={clsx(
                                    style.disabledBtn,
                                    "page-item",
                                    currentPageContact === 1 ? "disabled" : ""
                                )}
                            >
                                <div
                                    className="page-link"
                                    onClick={() => {
                                        handlePageContact("prev");
                                    }}
                                >
                                    Prev
                                </div>
                            </li>
                            {[1, 1, 1].map((item, index) => {
                                return (
                                    <li
                                        className={`page-item ${
                                            index + 1 === currentPageContact
                                                ? "active"
                                                : ""
                                        }`}
                                        key={index}
                                    >
                                        <div
                                            className="page-link"
                                            onClick={() => {
                                                handlePageContact(index + 1);
                                            }}
                                        >
                                            {index + 1}
                                        </div>
                                    </li>
                                );
                            })}
                            <li
                                className={clsx(
                                    style.disabledBtn,
                                    "page-item",
                                    currentPageContact === 3 ? "disabled" : ""
                                )}
                            >
                                <div
                                    className="page-link"
                                    onClick={() => {
                                        handlePageContact("next");
                                    }}
                                >
                                    Next
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ManageContact;
