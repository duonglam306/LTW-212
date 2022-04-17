import AddressCard from "./AddressCard";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
import address from "./Address.module.css";
import { useState } from "react";
import AddAddress from "./AddAddress";
// import { useUserInfo } from "../../../assets/firebase-data/getUserAPI";
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
                        <button type="button" 
                            variant="contained"
                            onClick={() => {
                                setaddPopup(true);
                            }}
                            className={`btn btn-primary ${address.addButton}`}
                        >
                            {/* <AddIcon /> */}
                            <span>Thêm địa chỉ mới</span>
                        </button>
                    </div>
                    {addPopup && (
                        <AddAddress
                            onAdd={() => setaddPopup(false)}
                            onCancel={() => setaddPopup(false)}
                        />
                    )}
                    <div className={address.addressList}>
                        {/* {addressInfo.map((doc) => {
                            return <AddressCard key={doc.id} data={doc} />;
                        })} */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Address;
