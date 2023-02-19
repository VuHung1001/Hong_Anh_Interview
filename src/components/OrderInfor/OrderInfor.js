import React from "react";
import "./orderInfor.css";

export default function OrderInfor(props) {
    return (
        <div className="order_infor">
            <div className="order_infor-title">Thông tin đơn hàng</div>
            <div className="order_infor-content">
                <div className="order_infor-receiver">
                    <span>Người nhận</span>
                    <div className="order_infor-receiver-detail">
                        <span className="order_infor-receiver-name">
                            {props.data.receiverContactName}
                        </span>
                        <span className="order_infor-receiver-phone">
                            {props.data.receiverContactPhone}
                        </span>
                        <span className="order_infor-receiver-address">
                            {props.data.receiverContactAddress}
                        </span>
                    </div>
                </div>
                <div className="order_infor-line"></div>
                <div className="order_infor-sender">
                    <span>Người gửi</span>
                    <div className="order_infor-sender-detail">
                        <span className="order_infor-sender-name">
                            {props.data.senderName}
                        </span>
                        <span className="order_infor-sender-phone">
                            {props.data.senderPhone}
                        </span>
                        <span className="order_infor-sender-address">
                            {props.data.senderAddress}
                        </span>
                    </div>
                </div>
                <div className="order_infor-line"></div>
                <div className="order_infor-other">
                    <div className="order_infor-shipping_unit">
                        <div className="order_infor-shipping_unit-title">
                            Đơn vị vận chuyển
                        </div>
                        <div className="order_infor-shipping_unit-name">
                            {props.shippingType}
                        </div>
                    </div>
                    <div className="order_infor-payment_method">
                        <div className="order_infor-payment_method-title">
                            Phương thức thanh toán
                        </div>
                        <div className="order_infor-payment_method-name">
                            {props.paymentMethod}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
