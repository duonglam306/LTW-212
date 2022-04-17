import OrderCard from "./OrderCard";
// import "./Order.css";
import order from "./Order.module.css";
import style from "../Account.module.css";
// import { useUserInfo } from "../../../assets/firebase-data/getUserAPI";

function Order() {
    // const { orders } = useUserInfo();
    // console.log("orders: ", orders);

    const getDescription = (order) => {
        const firstbook = order.data.books[0].bookName;
        const numberleft = order.data.books.length - 1;
        if (numberleft)
            return firstbook + " và " + numberleft + " sản phẩm khác";
        else return firstbook;
    };

    const getCost = (order) => {
        var bookList = order.data.books;
        var i = 0;
        var res = 0;
        for (i = 0; i < bookList.length; i++) {
            res += bookList[i].price * bookList[i].quantity;
        }
        return res;
    };

    const orders = [
        {
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
        },
    ];

    return (
        <div className={order.UserOrder}>
            <h1>Đơn hàng của tôi</h1>
            <div className={`${style.MainContent} ${order.order}`}>
                <div className={style.orderInsideContent}>
                    {orders.length !== 0 && (
                        <div className={order.orderList}>
                            <div className={`${order.orderCard} ${order.bar}`}>
                                <div className={order.orderId}>
                                    <span>Mã đơn</span>
                                </div>
                                <div className={order.orderDate}>
                                    <span>Ngày đặt</span>
                                </div>
                                <div
                                    className={`${order.orderDescription} ${order.bar}`}
                                >
                                    <span>Mô tả</span>
                                </div>
                                <div className={order.orderPrice}>
                                    <span>Giá</span>
                                </div>
                                <div className={order.orderStatus}>
                                    <span>Trạng thái</span>
                                </div>
                            </div>
                            {orders.map((order) => {
                                return (
                                    <OrderCard
                                        key={order.id}
                                        id={order.id}
                                        // date={order.data.createAt
                                        //     .toDate()
                                        //     .toLocaleDateString("pt-PT")}
                                        date={order.data.createAt}
                                        description={getDescription(order)}
                                        cost={getCost(order)}
                                        status={order.data.status}
                                    />
                                );
                            })}
                        </div>
                    )}
                    {orders.length === 0 && (
                        <div className={order.empty}>
                            Bạn chưa có đơn hàng nào
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Order;
