import React from "react";
import clsx from "clsx";
import style from "./footer.module.css";
import logo from "../../image/logo_footer.png";
import lalamove from "../../image/lalamove.png";
import paypal from "../../image/paypal.png";
import momo from "../../image/momo.png";
import shipcod from "../../image/shipcod.png";
function Footer() {
    // function newsLetter(isLogin) {
    //     return isLogin ? (
    //         <div className="col-7">
    //             <div className={clsx(style.address, "col-6")}>
    //                 We are here <i className="fa-solid fa-hand-point-down"></i>
    //             </div>
    //         </div>
    //     ) : (
    //         <>
    //             <div className="col-4">
    //                 <div className={clsx(style.newsLetter)}>
    //                     <h5>NEWSLETTER</h5>
    //                     <h6>
    //                         Leave your email to receive new decoration ideas and
    //                         information, offers from Hola House.
    //                     </h6>
    //                     <form className="form-inline justify-content-around my-2 my-lg-0">
    //                         <label htmlFor="newLetter-name" className="w-25">
    //                             Name:
    //                         </label>
    //                         <input
    //                             className="form-control w-75 my-1 rounded-0"
    //                             type="input"
    //                             id="newLetter-name"
    //                             placeholder="Nguyen Van A"
    //                             aria-label="Input_name"
    //                         />
    //                         <label htmlFor="newLetter-email" className="w-25">
    //                             E-mail:
    //                         </label>
    //                         <input
    //                             className="form-control w-75 my-1 rounded-0"
    //                             type="input"
    //                             id="newLetter-email"
    //                             placeholder="nguyenvana@gmail.com"
    //                             aria-label="Input_email"
    //                         />
    //                         <label htmlFor="newLetter-phone" className="w-25">
    //                             Phone:
    //                         </label>
    //                         <input
    //                             className="form-control w-75 my-1 rounded-0"
    //                             type="input"
    //                             id="newLetter-phone"
    //                             placeholder="0123 456 789"
    //                             aria-label="Input_phone"
    //                         />
    //                         <button
    //                             className="btn btn-warning rounded-0 my-1"
    //                             type="submit"
    //                         >
    //                             Register
    //                         </button>
    //                     </form>
    //                 </div>
    //             </div>
    //             <div className="col-3">
    //                 <div className={clsx(style.address)}>
    //                     We are here{" "}
    //                     <i className="fa-solid fa-hand-point-down"></i>
    //                 </div>
    //             </div>
    //         </>
    //     );
    // }
    return (
        <div className={clsx(style.main, "d-block p-3")}>
            <div className="d-lg-flex d-block justify-content-center col-12">
                <div className="col-lg-5 col-12">
                    <div className={clsx("col-4 col-md-3 col-lg-5 pl-0", style.logo)}>
                        <img src={logo} alt="logoWeb" />
                    </div>
                    <div className={clsx(style.timeWork, "mt-1")}>
                        Monday - Sunday | 8:30 - 21:30
                    </div>
                    <div className={clsx(style.address, "mt-1")}>
                        268 Ly Thuong Kiet, Ward 14, District 10, Ho Chi Minh
                        City
                    </div>
                    <div className={clsx(style.phone, "mt-1")}>
                        (+84) 914 851 501
                    </div>
                    <div className={clsx(style.mail, "mt-1")}>
                        bk.furniture.hcmut@gmail.com
                    </div>
                    <div className={clsx(style.social, "d-flex mt-1")}>
                        <div className={clsx(style.iconFb, style.iconSocial)}>
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className={clsx(style.iconIs, style.iconSocial)}>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div className={clsx(style.iconTg, style.iconSocial)}>
                            <i className="fa-solid fa-paper-plane"></i>
                        </div>
                    </div>
                </div>
                <div className="col-7 mt-3">
                    <div className={clsx(style.address, "col-6 px-0")}>
                        We are here{" "}
                        <i className="fa-solid fa-hand-point-down"></i>
                    </div>
                </div>
            </div>
            <div className={clsx("col-12 mt-3 bg-white", style.divider)}></div>
            <div className={clsx(style.listPrivacy,"row justify-content-start")}>
                <div className="col-6 col-lg-3 mt-3">
                    <h5>Customer Support</h5>
                    <a href="/1" className="text-decoration-none text-white">
                        <h6>Exchange Policy</h6>
                    </a>
                    <a href="/2" className="text-decoration-none text-white">
                        <h6>Privacy Policy</h6>
                    </a>
                    <a href="/3" className="text-decoration-none text-white">
                        <h6>Delivery Policy</h6>
                    </a>
                    <a href="/4" className="text-decoration-none text-white">
                        <h6>Waranty Policy</h6>
                    </a>
                    <a href="/5" className="text-decoration-none text-white">
                        <h6>Terms of Service</h6>
                    </a>
                </div>
                <div className="col-6 col-lg-3 mt-3">
                    <h5>Official Partners</h5>
                    <a href="/1" className="text-decoration-none text-white">
                        <h6>Carbono Design</h6>
                    </a>
                    <a href="/2" className="text-decoration-none text-white">
                        <h6>Sketch Interior</h6>
                    </a>
                    <h5>Delivery Partner</h5>
                    <a href="/4">
                        <img
                            className={style.logoPartner}
                            src={lalamove}
                            alt="logoLalamove"
                        />
                    </a>
                </div>
                <div className="col-6 col-lg-3 mt-3">
                    <h5>About Hola House</h5>
                    <a href="/1" className="text-decoration-none text-white">
                        <h6>Story</h6>
                    </a>
                    <a href="/1" className="text-decoration-none text-white">
                        <h6>Partners</h6>
                    </a>
                    <a href="/2" className="text-decoration-none text-white">
                        <h6>Member Benefits</h6>
                    </a>
                </div>
                <div className="col-6 col-lg-3 mt-3 pb-3">
                    <h5>Payment Methods</h5>
                    <div
                        className={clsx(
                            style.methods,
                            "row justify-content-start"
                        )}
                    >
                        <div className="col-6 col-md-4 col-lg-6 mb-1 mb-lg-3">
                            <a href="/4">
                                <img
                                    className={style.logoPaymentMethod}
                                    src={paypal}
                                    alt="logoPaypal"
                                />
                            </a>
                        </div>
                        <div className="col-6 col-md-4 col-lg-6 mb-1 mb-lg-3">
                            <a href="/4">
                                <img
                                    className={style.logoPaymentMethod}
                                    src={momo}
                                    alt="logoMomo"
                                />
                            </a>
                        </div>
                        <div className="col-6 col-md-4 col-lg-6 mb-1 mb-lg-3">
                            <a href="/4">
                                <img
                                    className={style.logoPaymentMethod}
                                    src={shipcod}
                                    alt="logoShipcod"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
