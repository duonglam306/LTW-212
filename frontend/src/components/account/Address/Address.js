import AddressCard from "./AddressCard";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
import address from "./Address.module.css";
import { useState } from "react";
import AddAddress from "./AddAddress";
// import { useUserInfo } from "../../../assets/firebase-data/getUserAPI";

const addressInfo = [
    {
        id: "address1",
        data: {
            name: "Dang",
            phone: "0987654321",
            location_1: "Ho Chi Minh",
            location_2: "Thu Duc",
            location_3: "Linh Trung",
            location_detail: "VNU Dormitory Zone A",
            defaultAddr: true,
        },
    },
    {
        id: "address2",
        data: {
            name: "Dang",
            phone: "0123456789",
            location_1: "Ho Chi Minh",
            location_2: "Thu Duc",
            location_3: "Linh Trung",
            location_detail: "VNU Dormitory Zone A",
            defaultAddr: false,
        },
    },
];
function Address() {
    // const {getAddress} = useUserContext;
    const [addPopup, setaddPopup] = useState(false);
    // const [addr, setAddr] = useState([]);
    // const { getAddress, addressOfUser, user } = useUserContext();
    // const ctx = useUserContext();
    // const { addressInfo } = useUserInfo();

    return (
        <div className={address.UserAddress}>
            <h1>Địa chỉ</h1>
            <div className={address.MainContent}>
                <div className={address.addressInsideContent}>
                    <div className={address.buttonBar}>
                        <button
                            type="button"
                            variant="contained"
                            onClick={() => {
                                setaddPopup(true);
                            }}
                            className={`btn btn-primary ${address.addButton}`}
                        >
                            {/* <AddIcon /> */}
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-plus"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                                {/* <span
                                    className={`${address["material-icons-round"]} accIcon`}
                                >
                                    add
                                </span> */}
                                {/* <i className="bi bi-plus"></i> */}
                                Thêm địa chỉ mới
                            </span>
                        </button>
                    </div>
                    {addPopup && (
                        <AddAddress
                            onAdd={() => setaddPopup(false)}
                            onCancel={() => setaddPopup(false)}
                        />
                    )}
                    <div className={address.addressList}>
                        {addressInfo.map((doc) => {
                            return <AddressCard key={doc.id} data={doc} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Address;
