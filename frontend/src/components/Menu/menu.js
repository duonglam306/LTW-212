import React from "react";
import "./menu.css";
import urlImg from "./fakeImgUrl.json";

function Menu() {
    return (
        <div className="menu">
            <div className="menu-header position-relative d-flex justify-content-center align-items-center">
                <h3 style={{ color: "white" }}>Sofas</h3>
            </div>
            <div className="container mt-5" style={{ color: "rgba(0,0,0,0.5)" }}>
                <div
                    className="row justify-content-between"
                    style={{ borderBottom: "1px solid rgba(0,0,0,0.5)" }}
                >
                    <h5 className="col-5">HOLA HOUSÈ - FURNITURE</h5>
                    <h6 className="col-5 d-flex justify-content-end">Home / Furnitures / Sofas</h6>
                </div>
            </div>
            <div className="menu-search mt-5 mb-5">
                <div
                    className=" d-flex justify-content-center"
                    style={{ color: "rgba(0,0,0,0.5)" }}
                >
                    <h3>Search</h3>
                </div>
                <div className="d-flex justify-content-center menu-search-fontsize container">
                    <input
                        className="w-100"
                        style={{
                            height: "41px",
                            paddingLeft: "10px",
                            borderRadius: "5px",
                            border: "1px solid black",
                        }}
                        type="text"
                        placeholder="Type to search"
                    />
                </div>
            </div>

            <div className="container-fluid">
                <div className="menu-content d-flex">
                    <div className="menu-lefContent col-2">
                        <div className="mb-3">
                            <div className="mb-3" style={{ fontSize: "20px" }}>
                                PRODUCT ORDER
                            </div>
                            <select
                                className="w-100 pl-2 font-weight-bold"
                                style={{ height: "40px" }}
                            >
                                <option>Best Seller</option>
                                <option>By Newest</option>
                                <option>By Oldest</option>
                                <option>By Name (A-Z)</option>
                                <option>By Name (Z-A)</option>
                            </select>
                        </div>
                        <div>
                            <div className="mb-2" style={{ fontSize: "20px" }}>
                                PRICE RANGE (USD)
                            </div>
                            <div>
                                <input
                                    style={{ width: "45%", paddingLeft: "5px", height: "35px" }}
                                    type="number"
                                />
                                {" - "}
                                <input
                                    style={{ width: "45%", paddingLeft: "5px", height: "35px" }}
                                    type="number"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="menu-rightContent col-10">
                        <div className="d-flex w-100 flex-wrap">
                            {urlImg.map((product) => (
                                <div
                                    className="text-center mb-5 position-relative"
                                    style={{
                                        width: "28%",
                                        height: "450px",
                                        marginLeft: "3%",
                                        marginRight: "2%",
                                    }}
                                >
                                    <img
                                        className="image-menu"
                                        style={{ width: "100%", height: 230 }}
                                        src={product.link}
                                        alt=""
                                    />
                                    <h4
                                        className="mt-5"
                                        style={{ color: "#324d6b", fontStyle: "italic" }}
                                    >
                                        {product.name.toLocaleUpperCase()}
                                    </h4>
                                    <div style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }}>
                                        {product.price}
                                    </div>
                                    <div className="position-absolute bottom-0 w-100">
                                        <button
                                            type="button"
                                            className="btn btn-light w-75 mt-2 font-weight-bold"
                                            style={{ border: "2px solid black" }}
                                        >
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menu;
