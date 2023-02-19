import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import OrderRoute from "./components/OrderRoute/OrderRoute";
import OrderInfor from "./components/OrderInfor/OrderInfor";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import Footer from "./components/Footer/Footer";

function App() {
    const [data, setData] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const [shippingType, setShippingType] = useState("Giao hàng nhanh");
    const [fullEvents, setFullEvents] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        function fetchData() {
            fetch("https://mocki.io/v1/e32d215a-360a-45e6-8155-ecae0af80225", {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((rawData) => {
                    console.log("Success:", rawData);
                    const data = rawData.data.order.getByCodeAndPhone;
                    if (data) {
                        let paymentMethod = "COD";
                        let shippingType = "Giao hàng nhanh";

                        switch (data.paymentMethod) {
                            case "DEBT":
                                paymentMethod = "Khách nợ";
                                break;
                            default:
                                break;
                        }

                        switch (data.shippingType) {
                            case "PICK_UP_COUNTER":
                                shippingType = "Khách nhận tại quầy bán hàng";
                                break;
                            default:
                                break;
                        }
                        if (data.fullEvents.length) {
                            setFullEvents(data.fullEvents);
                        }
                        if (data.items.length) {
                            setItems(data.items);
                        }
                        setData(data);
                        setPaymentMethod(paymentMethod);
                        setShippingType(shippingType);
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }

        fetchData();
    }, []);

    return (
        <>
            {data && (
                <div className="App">
                    <h1 className="small-mobile-screen">
                        Please use a device with a larger screen size
                        <br />
                        <br />
                        (Screen width larger than 300 pixels)
                    </h1>
                    <Header></Header>
                    <Banner></Banner>
                    <OrderRoute
                        data={data}
                        fullEvents={fullEvents}
                    ></OrderRoute>
                    <div className="order_content-container">
                        <OrderInfor
                            data={data}
                            shippingType={shippingType}
                            paymentMethod={paymentMethod}
                        ></OrderInfor>
                        <OrderDetail data={data} items={items}></OrderDetail>
                    </div>
                    <Footer></Footer>
                </div>
            )}
        </>
    );
}

export default App;
