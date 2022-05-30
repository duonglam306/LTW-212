import React, { useState } from "react";
import style from "./member.module.css";
import clsx from "clsx";
import Header from "../header/header";
import Footer from "../footer/footer";

const dataMember = [
    {
        id: 1,
        name: "Lam Thanh Duong",
        email: "duong.lamthanh3006@hcmut.edu.vn",
        user_name: "duonglam3006",
        phone: "0942826536",
        banned: false,
    },
    {
        id: 2,
        name: "Mai Duc Long",
        email: "long.mai1011@hcmut.edu.vn",
        user_name: "longmai106",
        phone: "0942826536",
        banned: true,
    },
    {
        id: 3,
        name: "Nguyen Truong Hai Dang",
        email: "dang.nguyen0406@hcmut.edu.vn",
        user_name: "dangnguyen0406",
        phone: "0942826536",
        banned: false,
    },
];

const dataReview = [
    {
        id: 1,
        name_product: "HUMLA - COFFEE TABLE",
        category: "L - Burnt mango wood",
        comment:
            "Good product, Fast delivery...Good product, Fast delivery...Good product, Fast delivery...Good product, Fast delivery...",
        score: 5,
        images: [
            "https://i.imgur.com/L1LjqK8.png",
            "https://i.imgur.com/7FBVwcY.png",
            "https://i.imgur.com/LnfeyVG.png",
            "https://i.imgur.com/SWV6ANc.png",
            "https://i.imgur.com/i0IfHNs.png",
            "https://i.imgur.com/HFhhr3c.png",
        ],
    },
    {
        id: 2,
        name_product: "TAMI - CHAIR",
        category: "M - Raw oak wood",
        comment: "Good product, Fast delivery...",
        score: 3,
        images: [
            "https://i.imgur.com/L1LjqK8.png",
            "https://i.imgur.com/7FBVwcY.png",
            "https://i.imgur.com/LnfeyVG.png",
            "https://i.imgur.com/SWV6ANc.png",
            "https://i.imgur.com/i0IfHNs.png",
            "https://i.imgur.com/HFhhr3c.png",
        ],
    },
];

function ManageMember() {
    const [currentPageMember, setCurrentPageMember] = useState(1);
    const handlePageMember = (keyword) => {
        if (keyword === "prev" && currentPageMember > 1) {
            setCurrentPageMember((prev) => prev - 1);
        } else if (keyword === "next" && currentPageMember < 3) {
            setCurrentPageMember((prev) => prev + 1);
        } else {
            setCurrentPageMember(keyword);
        }
    };
    const [currentPageReview, setCurrentPageReview] = useState(1);
    const handlePageReview = (keyword) => {
        if (keyword === "prev" && currentPageReview > 1) {
            setCurrentPageReview((prev) => prev - 1);
        } else if (keyword === "next" && currentPageReview < 3) {
            setCurrentPageReview((prev) => prev + 1);
        } else {
            setCurrentPageReview(keyword);
        }
    };

    const [chooseMember, setChooseMember] = useState(-1);
    const [chooseReview, setChooseReview] = useState(-1);
    const [chooseNameMember, setChooseNameMember] = useState("");

    const handleReviewMember = (id, name) => {
        setChooseMember(id);
        setChooseNameMember(name);
    };
    function unbannedMember() {
        console.log("Unbanned Member has id: " + chooseMember);
    }
    function bannedMember() {
        console.log("Ban Member has id: " + chooseMember);
    }
    function deleteMember() {
        console.log("Delete Member has id: " + chooseMember);
    }
    function cellTableMember(item, index) {
        return (
            <tr key={index}>
                <th scope="row">{item.id}</th>
                <td
                    className={clsx(style.tdOpenListRating)}
                    onClick={() => handleReviewMember(item.id, item.name)}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="See a list of user reviews at the bottom of the page"
                >
                    {item.name}
                </td>
                <td>{item.email}</td>
                <td>{item.user_name}</td>
                <td>{item.phone}</td>
                <td className={clsx("text-center")}>
                    <button
                        type="button"
                        className={clsx(
                            item.banned === true
                                ? style.btnUnbanned
                                : style.btnBanned,
                            "btn",
                            item.banned === true
                                ? "btn-outline-success"
                                : "btn-outline-warning"
                        )}
                        data-toggle="modal"
                        data-target={`${
                            item.banned === true
                                ? "#unbannedMemberModal"
                                : "#banMemberModal"
                        }`}
                        onClick={() => setChooseMember(item.id)}
                    >
                        {item.banned === true ? "Unbanned" : "Banned"}
                    </button>
                </td>
                <td className={clsx("text-center")}>
                    <button
                        type="button"
                        className={clsx(
                            style.btnDelete,
                            "btn btn-outline-danger"
                        )}
                        data-toggle="modal"
                        data-target={"#deleteMemberModal"}
                        onClick={() => setChooseMember(item.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }

    function deleteReview() {
        console.log("Delete Review has id: " + chooseReview);
    }
    function cellTableReview(item, index) {
        return (
            <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.name_product}</td>
                <td>{item.category}</td>
                <td className="overflow-auto">{item.comment}</td>
                <td>{item.score}</td>
                <td className={clsx("text-center")}>
                    <button
                        type="button"
                        className={clsx(
                            style.btnViewMore,
                            "btn btn-outline-success"
                        )}
                        data-toggle="modal"
                        data-target={"#seeReviewModal"}
                        onClick={() => setChooseReview(item.id)}
                    >
                        View
                    </button>
                </td>
                <td className={clsx("text-center")}>
                    <button
                        type="button"
                        className={clsx(
                            style.btnDelete,
                            "btn btn-outline-danger"
                        )}
                        data-toggle="modal"
                        data-target={"#deleteReviewModal"}
                        onClick={() => setChooseReview(item.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
    function reviewsOfMember(idMember, nameMember) {
        return (
            <div className={`${idMember === -1 ? "d-none" : "d-block"}`}>
                <div
                    className={clsx(
                        style.titleTableReview,
                        "py-2 d-flex align-items-center"
                    )}
                >
                    <h5>
                        LIST OF REVIEWS OF: {nameMember} (ID: {idMember})
                    </h5>
                    <div
                        className={clsx("btn btn-outline-dark ml-2 rounded-circle", style.btnClose)}
                        onClick={() => setChooseMember(-1)}
                    >
                        <span aria-hidden="true">&times;</span>
                    </div>
                </div>
                <div className={clsx(style.tReview)}>
                    <table className="table table-bordered table-hover table-responsive">
                        <thead className={clsx(style.thReview)}>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name Product</th>
                                <th scope="col">Category</th>
                                <th scope="col">Comment</th>
                                <th scope="col">Score</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataReview.map((item, index) =>
                                cellTableReview(item, index)
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    function imageReview(arrayIamge) {
        return arrayIamge.map((item, index) => {
            return (
                <div key={index} className={clsx(style.image, "col-2")}>
                    <img src={item} alt="" className="d-block w-100" />
                </div>
            );
        });
    }

    function contentReview(item) {
        return (
            <div className={clsx(style.contentReview)}>
                <div className={clsx(style.infoProduct, "d-flex")}>
                    <div className={clsx("col-3 pl-0", style.imgProduct)}>
                        <img
                            src={item.images[0]}
                            alt=""
                            className="d-block w-100"
                        />
                    </div>
                    <div>
                        <div
                            className={clsx(
                                style.nameProduct,
                                "font-weight-bold"
                            )}
                        >
                            {item.name_product}
                        </div>
                        <div className={clsx(style.categoryProduct)}>
                            {item.category}
                        </div>
                    </div>
                </div>
                <div className={clsx(style.reviewScore, "d-flex py-1")}>
                    <div className={clsx("font-weight-bold")}>
                        Review Score:{" "}
                    </div>
                    <div className={clsx("d-flex ml-1")}>
                        {reviewScore(item.score)}
                    </div>
                </div>
                <div className={clsx(style.reviewComment, "d-flex py-1")}>
                    <div className={clsx("font-weight-bold")}>Comment: </div>
                    <div className={clsx("ml-1")}>{item.comment}</div>
                </div>
                <div className={clsx(style.reviewImg, "py-1")}>
                    <div className={clsx("font-weight-bold")}>
                        Review Image:{" "}
                    </div>
                    <div
                        className={clsx(
                            "row justify-content-start",
                            style.listImage
                        )}
                    >
                        {imageReview(item.images)}
                    </div>
                </div>
            </div>
        );
    }
    function reviewScore(score) {
        const divElement = [];
        let restScore = 5 - Math.round(score);
        for (let i = 0; i < Math.round(score); i++) {
            divElement.push(<i className="fa-solid fa-star text-warning"></i>);
        }
        for (let i = 0; i < restScore; i++) {
            divElement.push(
                <i className="fa-solid fa-star text-secondary"></i>
            );
        }
        return divElement.map((item, index) => <div key={index}>{item}</div>);
    }
    return (
        <div className={clsx(style.main)}>
            <Header isLogin={true} role={"admin"} />
            {/* Action Modal */}
            <div
                className="modal fade"
                id={"seeReviewModal"}
                tabIndex="-1"
                aria-labelledby="seeReviewModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="seeReviewModalLabel"
                            >
                                Review of {chooseNameMember} (ID: {chooseReview}
                                )
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
                            <div>
                                {chooseReview !== -1 &&
                                    contentReview(
                                        dataReview.filter(
                                            (item) => item.id === chooseReview
                                        )[0]
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id={"deleteReviewModal"}
                tabIndex="-1"
                aria-labelledby="deleteReviewModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="deleteReviewModalLabel"
                            >
                                Delete Review
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
                            Do you want to delete this member's review?
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
                                onClick={deleteReview}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id={"banMemberModal"}
                tabIndex="-1"
                aria-labelledby="banModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="banModalLabel">
                                Ban Member
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
                            Do you want to ban account activity of this member?
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
                                onClick={bannedMember}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id={"unbannedMemberModal"}
                tabIndex="-1"
                aria-labelledby="unbannedMemberModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="unbannedMemberModalLabel"
                            >
                                Unbanned Member
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
                            Do you want to unblock this member's account
                            activity?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-success"
                                data-dismiss="modal"
                                onClick={unbannedMember}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id={"deleteMemberModal"}
                tabIndex="-1"
                aria-labelledby="deleteMemberModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="deleteMemberModalLabel"
                            >
                                Delete Member
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
                            Do you want to delete this member's account?
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
                                onClick={deleteMember}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(style.body, "container bg-white py-3")}>
                {/* Table Member */}
                <div className={clsx(style.titleTableMember, "py-2")}>
                    <h5>MEMBER</h5>
                </div>
                <div className={clsx(style.tMember)}>
                    <table className="table table-bordered table-hover table-responsive">
                        <thead className={clsx(style.thMember)}>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataMember.map((item, index) =>
                                cellTableMember(item, index)
                            )}
                        </tbody>
                    </table>
                </div>
                <div className={clsx(style.paginationMember, "py-3")}>
                    <nav aria-label="Page navigation member">
                        <ul className="pagination justify-content-end">
                            <li
                                className={clsx(
                                    style.disabledBtn,
                                    "page-item",
                                    currentPageMember === 1 ? "disabled" : ""
                                )}
                            >
                                <div
                                    className="page-link"
                                    onClick={() => {
                                        handlePageMember("prev");
                                    }}
                                >
                                    Prev
                                </div>
                            </li>
                            {[1, 1, 1].map((item, index) => {
                                return (
                                    <li
                                        className={`page-item ${
                                            index + 1 === currentPageMember
                                                ? "active"
                                                : ""
                                        }`}
                                        key={index}
                                    >
                                        <div
                                            className="page-link"
                                            onClick={() => {
                                                handlePageMember(index + 1);
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
                                    currentPageMember === 3 ? "disabled" : ""
                                )}
                            >
                                <div
                                    className="page-link"
                                    onClick={() => {
                                        handlePageMember("next");
                                    }}
                                >
                                    Next
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Table list rating of member */}
                <div
                    className={`${
                        chooseMember === -1 ? "d-flex" : "d-none"
                    } justify-content-center`}
                >
                    <h5>
                        Please select 1 name of member to see their list of
                        reviews
                    </h5>
                </div>
                {reviewsOfMember(chooseMember, chooseNameMember)}
                <div
                    className={clsx(
                        style.paginationReview,
                        "py-3",
                        chooseMember === -1 ? "d-none" : "d-block"
                    )}
                >
                    <nav aria-label="Page navigation review">
                        <ul className="pagination justify-content-end">
                            <li
                                className={clsx(
                                    style.disabledBtn,
                                    "page-item",
                                    currentPageReview === 1 ? "disabled" : ""
                                )}
                            >
                                <div
                                    className="page-link"
                                    onClick={() => {
                                        handlePageReview("prev");
                                    }}
                                >
                                    Prev
                                </div>
                            </li>
                            {[1, 1, 1].map((item, index) => {
                                return (
                                    <li
                                        className={`page-item ${
                                            index + 1 === currentPageReview
                                                ? "active"
                                                : ""
                                        }`}
                                        key={index}
                                    >
                                        <div
                                            className="page-link"
                                            onClick={() => {
                                                handlePageReview(index + 1);
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
                                    currentPageReview === 3 ? "disabled" : ""
                                )}
                            >
                                <div
                                    className="page-link"
                                    onClick={() => {
                                        handlePageReview("next");
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

export default ManageMember;
