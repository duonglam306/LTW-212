import React from "react";
import clsx from "clsx";
import style from "./footer.module.css";
import logo from "../../image/logo.png";
import lalamove from "../../image/lalamove.png";
import paypal from "../../image/paypal.png";
import momo from "../../image/momo.png";
import shipcod from "../../image/shipcod.png";
function Footer() {
    return (
        <div className={clsx(style.main, "d-block p-2")}>
            <div className="d-flex justify-content-center col-12">
                <div className="col-6">
                    <div className={clsx("col-3 pl-0", style.logo)}>
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
                        (+84) 942 826 536
                    </div>
                    <div className={clsx(style.mail, "mt-1")}>
                        lamduong11201@gmail.com
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
                <div className="col-6">
                    <div className={clsx(style.address)}>
                        Image on Google Maps
                    </div>
                </div>
            </div>
            <div className={clsx("col-12 mt-3 bg-white", style.divider)}></div>
            <div className="d-flex col-12">
                <div className="col-3 mt-3">
                    <h5>Customer Support</h5>
                    <a href="/1" className="text-decoration-none text-white"><h6>Exchange Policy</h6></a>
                    <a href="/2" className="text-decoration-none text-white"><h6>Privacy Policy</h6></a>
                    <a href="/3" className="text-decoration-none text-white"><h6>Delivery Policy</h6></a>
                    <a href="/4" className="text-decoration-none text-white"><h6>Waranty Policy</h6></a>
                    <a href="/5" className="text-decoration-none text-white"><h6>Terms of Service</h6></a>
                </div>
                <div className="col-3 mt-3">
                <h5>Official Partners</h5>
                    <a href="/1" className="text-decoration-none text-white"><h6>Carbono Design</h6></a>
                    <a href="/2" className="text-decoration-none text-white"><h6>Sketch Interior</h6></a>
                    <h5>Delivery Partner</h5>
                    <a href="/4"><img className={style.logoPartner} src={lalamove} alt="logoLalamove" /></a>
                </div>
                <div className="col-3 mt-3">
                <h5>About Hola House</h5>
                    <a href="/1" className="text-decoration-none text-white"><h6>Partners</h6></a>
                    <a href="/2" className="text-decoration-none text-white"><h6>Member Benefits</h6></a>
                </div>
                <div className="col-3 mt-3">
                <h5>Payment Methods</h5>
                <div className={clsx(style.methods, "row justify-content-around")}>
                    <div className="col-5 m-1">
                        
                <a href="/4"><img className={style.logoPaymentMethod} src={paypal} alt="logoPaypal" /></a>
                    </div>
                    <div className="col-5 m-1">

                <a href="/4" ><img className={style.logoPaymentMethod} src={momo} alt="logoMomo" /></a>
                    </div>
                    <div className="col-5 m-1">

                <a href="/4" ><img className={style.logoPaymentMethod} src={shipcod} alt="logoShipcod" /></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
