import React from "react";
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <img src="/logo.png" alt="logo"></img>
                <div className="header-right">
                    <button>Liên hệ</button>
                    <button>
                        <img src="/Search.svg" alt="search"></img>
                    </button>
                </div>
            </div>
        </div>
    );
}
