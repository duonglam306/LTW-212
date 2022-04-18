// import { Input } from "reactstrap";
// import { useRef } from "react";
// import Button from "@mui/material/Button";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControllabel htmlFrom "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import textarea from "@mui/material/textarea";
import { React } from "react";
import account from "../Account.module.css";
import { useState } from "react";
// import { useUserInfo } from "../../../assets/firebase-data/getUserAPI";
// import { useUserContext } from "../../../stores/AppState";
// import {
//     getStorage,
//     ref,
//     getDownloadURL,
//     uploadBytesResumable,
// } from "firebase/storage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
function UserInfo(props) {
    // const { isAdmin } = useUserContext();
    // const { userInfo, updateUserInfo } = useUserInfo();
    const [submitNoti, setSubmitNoti] = useState("");
    // const [img, setImg] = useState("");
    // const [file, setFile] = useState();
    const initState = {
        name: "test name",
        phone: "0123456789",
        bdate: "2020-01-01",
        gender: "undefined",
        email: "dangdangdang@gmail.com",
        img: "",

        // name: userInfo.name,
        // phone: "phone" in userInfo ? userInfo.phone : "",
        // bdate: "bdate" in userInfo ? userInfo.bdate : "",
        // gender: "gender" in userInfo ? userInfo.gender : "",
        // email: userInfo.email,
        // img: userInfo.img,
    };
    const [Info, setInfo] = useState(initState);

    const [gender, setGender] = useState(Info.gender);

    // setGender(Info.gender);

    // const [loading, setLoading] = useState(true);
    console.log("render userInfo: ", Info);
    // const { logoutUser } = useUserContext();
    const navigate = useNavigate();
    // const [pwdPopup, setpwdPopup] = useState(false);

    function onHandleChange(event) {
        const { name, value } = event.target;
        setInfo((prevInfo) => {
            let newInfo = {
                ...prevInfo,
            };
            newInfo[name] = value;
            if (name === "gender") {
                setGender(value);
            }
            return newInfo;
        });
    }
    // function radioChecked() {}

    // const submitHandler = async (event) => {
    //     event.preventDefault();
    //     setSubmitNoti("");
    //     let userInfo = {
    //         name: Info.name,
    //         phone: Info.phone,
    //         bdate: Info.bdate,
    //         gender: Info.gender,
    //         email: Info.email,
    //         img: Info.img,
    //     };
    //     console.log("assign: ", userInfo);
    //     if (Info.name && Info.phone) {
    //         if (file) {
    //             // const strg = getStorage();
    //             const imgRef = ref(strg, `images/${userInfo.email}`);
    //             const upLoadTask = uploadBytesResumable(imgRef, file);
    //             upLoadTask.on(
    //                 "state_changed",
    //                 (snapshot) => {},
    //                 (err) => {
    //                     console.log(err);
    //                 },
    //                 () => {
    //                     getDownloadURL(upLoadTask.snapshot.ref).then(
    //                         async (url) => {
    //                             userInfo.img = url;
    //                             try {
    //                                 await updateUserInfo(userInfo);
    //                                 toast.info(
    //                                     "Chỉnh sửa thông tin thành công"
    //                                 );
    //                             } catch (err) {
    //                                 toast.error("Chỉnh sửa thông tin thất bại");
    //                             }
    //                         }
    //                     );
    //                 }
    //             );
    //         } else {
    //             console.log(userInfo);
    //             try {
    //                 await updateUserInfo(userInfo);
    //                 toast.info("Chỉnh sửa thông tin thành công");
    //             } catch (err) {
    //                 toast.error("Chỉnh sửa thông tin thất bại");
    //             }
    //         }
    //     } else {
    //         toast.warning("Tên và số điện thoại không được để trống");
    //     }
    // };
    // const radiobtn = document.getElementById(Info.gender);
    // radiobtn.checked = true;

    return (
        <div className={account.UserInfo}>
            <h1>Thông tin tài khoản</h1>
            <div className={`${account.MainContent} ${account.info}`}>
                {/* <img src={userInfo.img} alt="Ảnh người dùng" /> */}
                <form name="InfoForm">
                    <div className={`form-group ${account.field}`}>
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input
                            name="name"
                            type="text"
                            id="name"
                            value={Info.name}
                            onChange={onHandleChange}
                            className={`form-control ${account.input}`}
                        />
                    </div>
                    <div className={`form-group ${account.field}`}>
                        <label htmlFor="exampleInputPassword1">Phone</label>
                        <input
                            className={`form-control ${account.input}`}
                            name="phone"
                            type="text"
                            id="phone"
                            onChange={onHandleChange}
                            value={Info.phone}
                        />
                    </div>
                    <div className={`form-group ${account.field}`}>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            className={`form-control ${account.input}`}
                            name="email"
                            type="email"
                            id="email"
                            onChange={onHandleChange}
                            defaultValue={Info.email}
                        />
                    </div>

                    <div className={`form-group ${account.field}`}>
                        <label htmlFor="exampleInputEmail1">Birthday</label>
                        <input
                            className={`form-control ${account.input}`}
                            name="bdate"
                            type="date"
                            id="bdate"
                            onChange={onHandleChange}
                            value={Info.bdate}
                        />
                    </div>

                    <div className={`form-group ${account.field}`}>
                        <label htmlFor="gender">Gender</label>
                        <div
                            className={`${account.gender} d-inline-flex align-items-center`}
                        >
                            <div className="form-check">
                                <label
                                    className={`form-check-label ${account["gender-label"]}`}
                                >
                                    <input
                                        type="radio"
                                        className={`${account.genderSelection} form-check-input`}
                                        // class="form-check-input"
                                        name="gender"
                                        value="male"
                                        onChange={onHandleChange}
                                        checked={gender === "male"}
                                        // checked="false"
                                    />
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <label
                                    className={`form-check-label ${account["gender-label"]}`}
                                >
                                    <input
                                        type="radio"
                                        className={`${account.genderSelection} form-check-input`}
                                        name="gender"
                                        value="female"
                                        onChange={onHandleChange}
                                        checked={gender === "female"}
                                    />
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <label
                                    className={`form-check-label ${account["gender-label"]}`}
                                >
                                    <input
                                        type="radio"
                                        className={`${account.genderSelection} form-check-input`}
                                        name="gender"
                                        value="undefined"
                                        onChange={onHandleChange}
                                        checked={gender === "undefined"}
                                        // checked={true}
                                    />
                                    Undefined
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={`form-group ${account.field}`}>
                        <label htmlFor="exampleInputEmail1">Avatar</label>
                        <input
                            type="file"
                            className={`form-control ${account.input}`}
                            id="file"
                        />
                    </div>

                    {/* <div class="form-group form-check">
                        <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                            Check me out
                        </label>
                    </div> */}
                    {/* <button type="submit" class="btn btn-primary">
                        Submit
                    </button> */}
                    {submitNoti && (
                        <div
                            className={`${account.field} ${account.submitNoti}`}
                        >
                            <span>{submitNoti}</span>
                        </div>
                    )}
                    {/* <div className={account.field}>
                        <label htmlFor="bdate">Chọn ảnh đại diện</label>
                        <input
                            className={account.input}
                            id="files"
                            name="files"
                            type="file"
                            accept="image/png, image/gif, image/jpeg"
                            onChange={(event) => {
                                setFile(event.target.files[0]);
                            }}
                        ></input>
                    </div> */}

                    <button
                        type="button"
                        // type="submit"
                        className={`btn btn-primary ${account.update}`}
                        size="large"
                        // className={`${account.changeInfo} ${account.update}`}
                    >
                        Cập nhật thông tin
                    </button>
                    {/* {isAdmin && (
                    <button
                        type="button"
                        variant="contained"
                        size="large"
                        className={`${account.changeInfo} ${account.update}`}
                        onClick={() => {
                            navigate("/admin");
                        }}
                    >
                        Đi tới trang quản lý
                    </button>
                )} */}
                    <button
                        type="button"
                        variant="contained"
                        size="large"
                        className={`btn btn-danger ${account.update}`}
                        // className={`${account.changePassword} ${account.update}`}
                        // onClick={logoutUser}
                    >
                        Đăng xuất tài khoản
                    </button>
                </form>
            </div>
        </div>
    );
    // }
}
export default UserInfo;
