import React from "react";
import "./orderDetail.css";

export default function OrderDetail(props) {
    const formatter = new Intl.NumberFormat("vn", {
        style: "currency",
        currency: "VND",
    });

    return (
        <div className="order_detail">
            <div className="order_detail-header">
                <span>Chi tiết đơn hàng</span>
            </div>
            <table className="order_detail-table">
                <thead>
                    <tr>
                        <td className="order_detail-serial">STT</td>
                        <td className="order_detail-image">Hình ảnh</td>
                        <td className="order_detail-id">Mã sản phẩm</td>
                        <td className="order_detail-name">Tên sản phẩm</td>
                        <td className="order_detail-class">Phân loại</td>
                        <td className="order_detail-quantity">Số lượng</td>
                    </tr>
                </thead>
                <tbody>
                    {props.items &&
                        props.items.length &&
                        props.items.map((item, index) => {
                            const variants =
                                item.product.variantAttributeValues;
                            let variantsIsArrayWithElements = false;
                            let variantsIsObjectWithKeys = false;

                            if (
                                variants &&
                                Array.isArray(variants) &&
                                variants.length
                            ) {
                                variantsIsArrayWithElements = true;
                            } else if (
                                variants &&
                                typeof variants === "object" &&
                                !Array.isArray(variants)
                            ) {
                                variantsIsObjectWithKeys = true;
                            }

                            return (
                                <tr key={index}>
                                    <td className="order_detail-serial">
                                        {index + 1}
                                    </td>
                                    <td className="order_detail-image">
                                        <img
                                            src={item.product.imageURL}
                                            width="70"
                                            height="70"
                                            alt="product img"
                                        ></img>
                                    </td>
                                    <td className="order_detail-id">
                                        {item.productCode}
                                    </td>
                                    <td className="order_detail-name">
                                        {item.productName}
                                    </td>
                                    <td className="order_detail-class">
                                        {variantsIsArrayWithElements &&
                                            variants.map((variant, index) => {
                                                return (
                                                    <span key={index}>
                                                        {variant}<br/>
                                                    </span>
                                                );
                                            })}
                                        {variantsIsObjectWithKeys &&
                                            Object.keys(variants).map((variantKey, index) => {
                                                return (
                                                    <span key={index}>{variantKey + ": " + variants[variantKey]}<br/></span>
                                                );
                                            }
                                        )}
                                        {!variantsIsArrayWithElements &&
                                            !variantsIsObjectWithKeys && (
                                                <span key={index}>
                                                    Không có
                                                </span>
                                            )}
                                    </td>
                                    <td className="order_detail-quantity">
                                        {item.quantity +
                                            " " +
                                            item.product.uom.name}
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <div className="order_detail-mobile_screen">
                {props.items &&
                    props.items.length &&
                    props.items.map((item, index) => {
                        const variants = item.product.variantAttributeValues;
                        let variantsIsArrayWithElements = false;
                        let variantsIsObjectWithKeys = false;

                        if (
                            variants &&
                            Array.isArray(variants) &&
                            variants.length
                        ) {
                            variantsIsArrayWithElements = true;
                        } else if (
                            variants &&
                            typeof variants === "object" &&
                            !Array.isArray(variants)
                        ) {
                            variantsIsObjectWithKeys = true;
                        }

                        return (
                            <div className="order_detail-item" key={index}>
                                <div className="order_detail-serial">
                                    <span>STT:</span>
                                    <span>{index + 1}</span>
                                </div>
                                <div className="order_detail-image">
                                    <span>Hình ảnh:</span>
                                    <img
                                        src={item.product.imageURL}
                                        width="70"
                                        height="70"
                                        alt="product img"
                                    ></img>
                                </div>
                                <div className="order_detail-id">
                                    <span>Mã sản phẩm:</span>
                                    <span>{item.productCode}</span>
                                </div>
                                <div className="order_detail-name">
                                    <span>Tên sản phẩm:</span>
                                    <span>{item.productName}</span>
                                </div>
                                <div className="order_detail-class">
                                    <span>Phân loại:</span>
                                    <div>
                                        {variantsIsArrayWithElements &&
                                            variants.map((variant, index) => {
                                                return (
                                                    <span key={index}>
                                                        {variant}
                                                    </span>
                                                );
                                            })}
                                        {variantsIsObjectWithKeys &&
                                            Object.keys(variants).map((variantKey, index) => {
                                                return (
                                                    <span key={index}>{variantKey + ": " + variants[variantKey]}</span>
                                                );
                                            }
                                        )}
                                        {!variantsIsArrayWithElements &&
                                            !variantsIsObjectWithKeys && (
                                                <span key={index}>
                                                    Không có
                                                </span>
                                            )}
                                    </div>
                                </div>
                                <div className="order_detail-quantity">
                                    <span>Số lượng:</span>
                                    <span>
                                        {item.quantity +
                                            " " +
                                            item.product.uom.name}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <div className="order_detail-total">
                <span>Tổng thanh toán đơn hàng</span>
                <div className="order_detail-total-result">
                    {formatter.format(props.data.total)}
                </div>
            </div>
        </div>
    );
}
