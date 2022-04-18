import { useState } from "react";
import { Link } from "react-router-dom";
import "./Account.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitLogin(e) {
        console.log(email);
        console.log(password);
    }

    return (
        <div className="loginContainer">
            <div className="shadow-lg p-3 mb-5 bg-white rounded modal-login">
                <form method="post">
                    <div className="center">
                        <p className="headerFont">Đăng nhập</p>
                    </div>
                    <div className="mb-3">
                        <label className="labelForm">
                            <span className="star">*</span>Email
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="labelForm">
                            <span className="star">*</span>Mật khẩu
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="center addMargin">
                        <button type="submit" className="btn btn-primary">
                            Đăng nhập
                        </button>
                    </div>
                </form>
                <div className="center addMargin">
                    <p>
                        Quên mật khẩu?{" "}
                        <span>
                            <Link to="/forgetPass">Nhấn tại đây</Link>{" "}
                        </span>{" "}
                    </p>
                </div>
                <div className="center addMargin">
                    <p>
                        Bạn chưa có tài khoản?{" "}
                        <span>
                            <Link to="/register">Đăng ký</Link>{" "}
                        </span>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}
