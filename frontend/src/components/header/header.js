import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import style from "./header.module.css";
import logo from "../../image/logo.png";
function Header({ isLogin, role = '' }) {
    function navigation(role) {
        return isLogin && role !== "admin" ? (
            <>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    SOFAS <i className="ml-1 fa-solid fa-angle-down"></i>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    FURNITURES <i className="ml-1 fa-solid fa-angle-down"></i>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    ACCESSORIES <i className="ml-1 fa-solid fa-angle-down"></i>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    KIDS <i className="ml-1 fa-solid fa-angle-down"></i>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    BRANCHS <i className="ml-1 fa-solid fa-angle-down"></i>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    NEWS <i className="ml-1 fa-solid fa-angle-down"></i>
                </div>
            </>
        ) : (
            <>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    STORE INFO 
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    PRODUCT 
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    MEMBER 
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    NEWS 
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                    CONTACT CUSTOMER 
                </div>
            </>
        );
    }
    function authBtn(isAuth) {
        return isAuth ? (
            <div className="col-1 d-flex justify-content-between align-items-center">
                <div className={clsx(style.account)}>
                    <i className="fa-solid fa-circle-user"></i>
                </div>
                <div className={clsx(style.cart)}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        ) : (
            <div className="col-2 d-flex justify-content-between align-items-center">
                <Link to="/signin">
                    <div className={clsx(style.signIn, "btn btn-warning")}>
                        <div>Sign In</div>
                    </div>
                </Link>
                <Link to="/signup">
                    <div className={clsx(style.signUp, "btn btn-secondary")}>
                        <div>Sign Up</div>
                    </div>
                </Link>
            </div>
        );
    }
    return (
        <div className={clsx(style.main)}>
            <div className="row justify-content-around align-items-center px-2 py-1">
                <div className={clsx("col-2", style.logo)}>
                    <img src={logo} alt="logoWeb" />
                </div>
                <div className={clsx("col-5", style.search)}>
                    <form className="form-inline my-0">
                        <input
                            className="form-control w-100"
                            type="search"
                            placeholder="Search here..."
                            aria-label="Search"
                        />
                    </form>
                </div>
                {authBtn(isLogin)}
            </div>
            <div
                className={clsx(
                    style.categories,
                    "d-flex justify-content-center pb-1"
                )}
            >
                <div className="col-10 d-flex justify-content-around align-items-center">
                {navigation(role)}
                </div>
            </div>
        </div>
    );
}

export default Header;
