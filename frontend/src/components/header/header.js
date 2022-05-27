import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import style from "./header.module.css";
import logo from "../../image/logo_header.png";
function Header({ isLogin, role = "" }) {
    function navigation(role) {
        return role !== "admin" ? (
            <div
                className={clsx(
                    style.navBar,
                    "col-12 px-0 col-xl-10 d-flex justify-content-around align-items-center"
                )}
            >
                <div className="col-1  col-md-2 d-flex justify-content-center align-items-center text-center">
                    SOFAS <i className="ml-1 fa-solid fa-angle-down"></i>
                </div>
                <div className="col-2  d-flex justify-content-center align-items-center text-center">
                    FURNITURES <i className="ml-1 fa-solid fa-angle-down"></i>
                </div>
                <div className="col-2  d-flex justify-content-center align-items-center text-center">
                    ACCESSORIES <i className="ml-1 fa-solid fa-angle-down"></i>
                </div>
                <div className="col-1  col-md-2 d-flex justify-content-center align-items-center text-center">
                    KIDS <i className="ml-1 fa-solid fa-angle-down"></i>
                </div>
                <div className="col-1  col-md-2 d-flex justify-content-center align-items-center text-center">
                    BRANCHS <i className="ml-1 fa-solid fa-angle-down"></i>
                </div>
                <div className="col-1  col-md-2 d-flex justify-content-center align-items-center text-center">
                    NEWS <i className="ml-1 fa-solid fa-angle-down"></i>
                </div>
            </div>
        ) : (
            <div
                className={clsx(
                    style.navBar,
                    "col-12 col-xl-10 d-flex justify-content-around align-items-center"
                )}
            >
                <div className="col-2  d-flex justify-content-center align-items-center text-center">
                    STORE INFO
                </div>
                <div className="col-2  d-flex justify-content-center align-items-center text-center">
                    PRODUCT
                </div>
                <div className="col-2  d-flex justify-content-center align-items-center text-center">
                    MEMBER
                </div>
                <div className="col-2  d-flex justify-content-center align-items-center text-center">
                    NEWS
                </div>
                <div className="col-3  d-flex justify-content-center align-items-center text-center">
                    CONTACT CUSTOMER
                </div>
            </div>
        );
    }
    function authBtn(isAuth) {
        return isAuth ? (
            <div
                className={clsx(
                    style.listAuthBtn,
                    "col-2 col-md-3 col-lg-2 d-flex justify-content-around align-items-center"
                )}
            >
                <div className={clsx(style.account)}>
                    <i className="fa-solid fa-circle-user"></i>
                </div>
                <div className={clsx(style.cart)}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        ) : (
            <div
                className={clsx(
                    style.listAuthBtn,
                    "col-2 col-md-3 pl-0 d-block d-md-flex justify-content-around align-items-center"
                )}
            >
                <Link to="/signin">
                    <div
                        className={clsx(
                            style.signIn,
                            "btn w-100 btn-warning rounded-0 mb-1 mb-md-0"
                        )}
                    >
                        <div>Sign In</div>
                    </div>
                </Link>
                <Link to="/signup">
                    <div
                        className={clsx(
                            style.signUp,
                            "btn w-100 btn-secondary rounded-0 mt-1 mt-md-0"
                        )}
                    >
                        <div>Sign Up</div>
                    </div>
                </Link>
            </div>
        );
    }
    return (
        <div className={clsx(style.main)}>
            <div className="d-flex justify-content-around align-items-center py-3">
                <div className={clsx("col-4 col-md-3 col-xl-2", style.logo)}>
                    <img src={logo} alt="logoWeb" className="d-block w-100" />
                </div>
                <div className={clsx("col-5 col-xl-6", style.search)}>
                    <form className="form-inline my-0">
                        <input
                            className="form-control border-warning w-75 rounded-0"
                            type="search"
                            placeholder="Search here..."
                            aria-label="Search"
                        />
                        <button
                            class="btn btn-warning my-2 w-25 my-sm-0 rounded-0 d-flex justify-content-center align-items-center"
                            type="submit"
                        >
                            Search
                        </button>
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
                {navigation(role)}
            </div>
        </div>
    );
}

export default Header;
