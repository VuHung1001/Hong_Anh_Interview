import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-small-qr"></div>
                    <div className="footer-downloads">
                        <img src="/App Store.png" alt="App Store"></img>
                        <img src="/Google Play.png" alt="Google Play"></img>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-right-1">
                        <span>Giới thiệu</span>
                        <span>Sản phẩm</span>
                        <span>Chính sách</span>
                    </div>
                    <div className="footer-right-2">
                        <span>Tin tức</span>
                        <span>Câu hỏi thường gặp</span>
                    </div>
                    <div className="footer-right-3"></div>
                </div>
            </div>
        </div>
    );
}
