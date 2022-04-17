import React, { useState } from "react";
import order from "../Order.module.css";
import OrderDetailCard from "./OrderDetailCard";
// import { useUserInfo } from "../../../../assets/firebase-data/getUserAPI";

function OrderDetail() {
    // const { orderDetail } = useUserInfo();
    const a = new Date(2018, 11, 24, 10, 33, 30, 0);
    const b = new Date(2018, 11, 26, 11, 33, 38, 0);
    console.log(a);
    console.log(b);
    const orderDetail = {
        id: "firstOrder",
        data: {
            books: [
                {
                    bookName: "The Overstory (Pulitzer Prize Winner)",
                    id: "the-overstory",
                    img: "https://demo3leotheme.b-cdn.net/prestashop/leo_bookery_demo/167-home_default/mug-the-best-is-yet-to-come.jpg",
                    price: 350000,
                    quantity: 1,
                },
                {
                    bookName: "The Sanatorium",
                    id: "the-sanatorium",
                    img: "https://demo3leotheme.b-cdn.net/prestashop/leo_bookery_demo/163-home_default/the-adventure-begins-framed-poster.jpg",
                    price: 256000,
                    quantity: 1,
                },
                {
                    bookName: "The Song of Achilles",
                    id: "the-song-of-achilles",
                    img: "https://demo3leotheme.b-cdn.net/prestashop/leo_bookery_demo/161-home_default/the-best-is-yet-to-come-framed-poster.jpg",
                    price: 50000,
                    quantity: 1,
                },
            ],
            createAt: "10.35AM November 12 2020",
            deliveryAt: "11.35AM November 13 2020",
            location_1: "TP. HCM",
            location_2: "Thủ Đức",
            location_3: "Linh Trung",
            location_detail: "KTX khu A",
            method: "ViBK",
            name: "Hải Đăng",
            phone: "0987654321",
            status: "complete",
            totalPay: 2521000,
        },
    };
    console.log("callOrderdetail: ", orderDetail);
    const getCost = (bookList) => {
        // var bookList = order.data.books;
        var i = 0;
        var res = 0;
        for (i = 0; i < bookList.length; i++) {
            res += bookList[i].price * bookList[i].quantity;
        }
        return res;
    };
    const getStatus = () => {
        switch (orderDetail.data.status) {
            case "unconfirmed":
                return "Đang xử lý";
            case "complete":
                return "Giao hàng thành công";
            case "in transit":
                return "Đang vận chuyển";
            default:
                return "Error";
        }
    };
    return (
        <div className={order.OrderDetail}>
            <h1>
                Chi tiết đơn hàng #<span>{orderDetail.id}</span>
            </h1>
            <div className={`${order.MainContent} ${order.orderDetail}`}>
                <div className={order.orderInsideContent}>
                    <ul>
                        <li>
                            <div
                                className={`${order.sideInfo} ${order.orderAddress}`}
                            >
                                <span className={order.infoName}>
                                    {orderDetail.data.name}
                                </span>
                                <span className={order.infoAddress}>
                                    {orderDetail.data.location_detail}
                                    {", "}
                                    {orderDetail.data.location_3}
                                    {", "}
                                    {orderDetail.data.location_2}
                                    {", "}
                                    {orderDetail.data.location_1}
                                </span>
                                <span className={order.infoNumber}>
                                    Số điện thoại: {orderDetail.data.phone}
                                </span>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`${order.sideInfo} ${order.orderTransport}`}
                            >
                                {/* <span className={order.transportName}>
                                    {"Thời gian đặt hàng: "}
                                    {orderDetail.data.createAt
                                        .toDate()
                                        .toLocaleDateString("pt-PT")}
                                </span>
                                <span className={order.transportTime}>
                                    {"Thời gian nhận hàng: "}
                                    {orderDetail.data.deliveryAt
                                        .toDate()
                                        .toLocaleDateString("pt-PT")}
                                </span>    */}
                                <span className={order.transportName}>
                                    {"Thời gian đặt hàng: "}
                                    {orderDetail.data.createAt}
                                </span>
                                <span className={order.transportTime}>
                                    {"Thời gian nhận hàng: "}
                                    {orderDetail.data.deliveryAt}
                                </span>
                                <span className={order.transportStatus}>
                                    {"Trạng thái: "}
                                    {getStatus()}
                                </span>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`${order.sideInfo} ${order.orderPayment}`}
                            >
                                <span className={order.paymentName}>
                                    {"Hình thức thanh toán: "}
                                    {orderDetail.data.method}
                                </span>
                                <span className={order.paymentStatus}>
                                    Trạng thái: Thanh toán thành công
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div className={order.lower}>
                        <div className={order.titlebar}>
                            <div className={order.orderProduct}>
                                <span>Sản phẩm</span>
                            </div>
                            <div className={order.unitPrice}>
                                <span>Đơn giá</span>
                            </div>
                            <div className={order.productQty}>
                                <span>Số lượng</span>
                            </div>
                            <div className={order.totalPrice}>
                                <span>Tạm tính</span>
                            </div>
                        </div>
                        {orderDetail.data.books.map((book) => {
                            console.log(book);
                            return <OrderDetailCard data={book} />;
                        })}
                    </div>

                    <div className={order.totalCalc}>
                        <div className={order.field}>
                            <span className={order.totalField}>Tổng cộng:</span>{" "}
                            <span
                                className={`${order.totalValue} ${order.totalCost}`}
                            >
                                {getCost(
                                    orderDetail.data.books
                                ).toLocaleString()}
                                ₫
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
