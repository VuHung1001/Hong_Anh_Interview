import React from "react";
import "./orderRoute.css";

export default function OrderRoute(props) {
    console.log("props", props);
    return (
        <div className="order_route">
            {props && (
                <div className="order_route-container">
                    <div className="order_route-top">
                        <div className="order_route-id">
                            <span>Lộ trình đơn hàng</span>
                            <div className="order_route-id-bottom">
                                <span className="order_route-id-bottom-left">
                                    Mã đơn hàng:{" "}
                                </span>
                                <span className="order_route-id-bottom-right">
                                    {props.data.number}
                                </span>
                            </div>
                        </div>
                        <div className="order_route-address">
                            <div className="order_route-address-top">
                                <div className="order_route-address-status_blue"></div>
                                <div className="order_route-address-line"></div>
                                <div className="order_route-address-status_gray"></div>
                            </div>
                            <div className="order_route-address-bottom">
                                <div className="order_route-address-from">
                                    {props.data.senderAddress}
                                </div>
                                <div className="order_route-address-to">
                                    {props.data.receiverContactAddress}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order_route-status">
                        <div className="order_route-status-time">
                            {props.fullEvents &&
                                props.fullEvents.length &&
                                props.fullEvents.map((event, index) => {
                                    const timeStr = event.createdAt;

                                    if (timeStr) {
                                        const time = new Date(timeStr);
                                        const day = time.getDate();
                                        const month = time.getMonth() + 1;
                                        const year = time.getFullYear();
                                        const seconds = time.getSeconds();
                                        const minutes = time.getMinutes();
                                        const hours = time.getHours();

                                        return (
                                            <div
                                                className="order_route-status-block-time"
                                                key={index}
                                            >
                                                <div className="order_route-status-block-hour">
                                                    {hours + ":" + minutes + ":" + seconds}
                                                </div>
                                                <div className="order_route-status-block-day">
                                                    {day + "/" + month + "/" + year}
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return <></>;
                                    }
                                })}
                        </div>
                        <div className="order_route-status-lines-bulbs">
                            {props.fullEvents &&
                                props.fullEvents.length &&
                                props.fullEvents.map((event, index) => {
                                    if (event.state === "PAST") {
                                        return (
                                            <div key={index}>
                                                <span className="order_route-status-bulb-blue">
                                                    <img
                                                        src="/check_big.svg"
                                                        alt="checked"
                                                    ></img>
                                                </span>
                                                <span className="order_route-status-line-blue"></span>
                                            </div>
                                        );
                                    } else if (event.state === "CURRENT") {
                                        return (
                                            <div key={index}>
                                                <span className="order_route-status-bulb-blue">
                                                    <img
                                                        src="/check_big.svg"
                                                        alt="checked"
                                                    ></img>
                                                </span>
                                                <span className="order_route-status-line-gray"></span>
                                            </div>
                                        );
                                    } else if (event.state === "FUTURE") {
                                        return (
                                            <div key={index}>
                                                <span className="order_route-status-bulb-gray">
                                                    <span>{index + 1}</span>
                                                </span>
                                                <span className="order_route-status-line-gray"></span>
                                            </div>
                                        );
                                    } else {
                                        return <></>;
                                    }
                                })}
                        </div>
                        <div className="order_route-status-stage">
                            {props.fullEvents &&
                                props.fullEvents.length &&
                                props.fullEvents.map((event, index) => (
                                    <div
                                        className="order_route-status-block-stage"
                                        key={index}
                                    >
                                        {event.name}
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="order_route-buttons">
                        <button className="order_route-button-left">
                            Thông tin chi tiết
                        </button>
                        <button className="order_route-button-right">
                            Khiếu nại
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
