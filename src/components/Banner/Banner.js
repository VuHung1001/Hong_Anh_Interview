import React from "react";
import "./banner.css";

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner-container">
                <span className="banner-span-1">Trang chủ</span>
                <span className="banner-span-2">{">"}</span>
                <span className="banner-span-3">
                    Tra cứu hành trình đơn hàng
                </span>
            </div>
        </div>
    );
}
