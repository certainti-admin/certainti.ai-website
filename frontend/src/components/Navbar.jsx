// Navbar.jsx
import React from "react";
import "../styles/styles.css";
import { Frame } from "./Login.jsx";
import { Label } from "./Label.jsx";
import { Square_dot } from "./Dot.jsx";

export const Navbar = () => {
    return (
        <nav className="nav">
            <div className="logo">
                <a href="/home">
                    <svg width="155" height="23" viewBox="0 0 155 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Certainti">
                            <path d="M13.7391 5.96406C8.23759 5.96406 6.94311 8.88704 6.94311 11.81C6.94311 14.733 8.23759 17.6264 13.7685 17.6264H21.8885L18.9465 23H13.7685C3.03026 23 0 17.3902 0 11.7805C0 6.17073 3.00084 0.5905 13.7391 0.5905V5.96406Z" fill="#03C3B6" />
                            <path d="M43.2363 11.3671L35.0281 17.6264H42.8833L39.9413 23H32.498C25.8785 23 22.4364 18.7779 22.4364 14.5854C22.4364 10.5109 25.702 6.49551 32.498 6.49551H37.0875V10.6585L40.9121 7.85366L43.2363 11.3671ZM35.4106 11.8691H32.498C30.5269 11.8691 29.5266 13.3158 29.5266 14.7625C29.5266 15.1759 29.6149 15.6187 29.7914 16.0026L35.4106 11.8691Z" fill="#03C3B6" />
                            <path d="M58.1093 12.8139C57.6091 12.2529 56.8442 11.8691 55.8439 11.8691H51.2838V23H44.7526V6.49551L49.2538 9.12323L50.6954 6.49551H55.8439C58.8742 6.49551 61.1984 7.41078 62.7576 8.82799L58.1093 12.8139Z" fill="#03C3B6" />
                            <path d="M63.3952 17.4198V0H69.9264V6.46598H75.4574L72.5154 11.8395H69.9264V17.6264H74.31L77.252 23H69.9264C66.3078 23 63.3952 20.4904 63.3952 17.4198Z" fill="#03C3B6" />
                            <path d="M98.2059 6.43646V22.941H91.6747V11.81H87.1146C85.1434 11.81 84.1432 13.2567 84.1432 14.7035C84.1432 16.1502 85.1434 17.5674 87.1146 17.5674H89.3799V22.941H87.1146C80.4951 22.941 77.053 18.7189 77.053 14.5263C77.053 10.4519 80.3186 6.43646 87.1146 6.43646H98.2059Z" fill="#03C3B6" />
                            <path d="M101.121 11.8691L104.063 6.49551H107.652V23H101.121V11.8691Z" fill="#03C3B6" />
                            <path d="M115.104 9.12323L116.546 6.49551H121.694C128.108 6.49551 131.197 10.5995 131.197 14.7625L131.256 23H124.724L124.665 14.7625C124.665 13.3158 123.665 11.8691 121.694 11.8691H117.134V23H110.603V6.49551L115.104 9.12323Z" fill="#03C3B6" />
                            <path d="M133.928 17.4198V0H140.46V6.46598H145.991L143.049 11.8395H140.46V17.6264H144.843L147.785 23H140.46C136.841 23 133.928 20.4904 133.928 17.4198Z" fill="#03C3B6" />
                            <path d="M148.469 11.8691L151.411 6.49551H155V23H148.469V11.8691Z" fill="#03C3B6" />
                        </g>
                    </svg>

                </a>
                <div className="dot"><svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector 2999" d="M3.97183 5L0 0H6V5H3.97183Z" fill="#FD5707" />
                </svg></div>
                <Square_dot />
                <div className="square_dot_2"><Square_dot /></div>
                <div className="square_dot_3"><Square_dot /></div>
                <div className="ai">
                    <svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Ai">
                            <path d="M19.0513 9.36232L23.7776 22H16.8631L12.1368 9.36232H19.0513ZM8.25652 0H15.171L8.89837 16.7246H13.8581L10.9406 22H0L8.25652 0Z" fill="#03C3B6" />
                            <path d="M24.5232 11.0725L27.4407 5.7971H31V22H24.5232V11.0725Z" fill="#03C3B6" />
                        </g>
                    </svg>
                    <div className="ai_dot"><Square_dot /></div>
                </div>

            </div>

            <div className="menu-link">
                <ul>
                    <li>
                        <a href="">Product</a>
                    </li>
                    <li>
                        <a href="/solution">Solution</a>
                    </li>
                    <li>
                        <a href="/clients">Clients</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/pricing">Pricing</a>
                    </li>
                    <li>
                        <a href="/about us">About Us</a>
                    </li>
                </ul>
            </div>
            <div className="contact_sales-and-login">
                <div className="contact-sales">
                    <Label />
                </div>
                <div>
                    <a href="https://gouravchavan.github.io/Registration_Form/7">
                        <Frame />
                    </a>
                </div>
            </div>
        </nav>
    );
};
