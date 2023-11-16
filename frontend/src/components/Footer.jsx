import React from "react";
import "../styles/styles.css";
import { Square_dot } from "./Dot.jsx";

export const Footer = () => {
    return (
        <footer style={{ padding: "5rem 0 5rem 0", backgroundColor: "#000d2d" }}>
            <div className="footer-box">
                <div className="footer-about">
                    <a href="/home">
                        <svg width="35" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 1000002572">
                                <path id="Vector 2999" d="M30.6197 9L24 0H34V9H30.6197Z" fill="#03C3B6" />
                                <path id="Certainti" d="M21.9691 8.63241C13.172 8.63241 11.1022 13.3281 11.1022 18.0237C11.1022 22.7194 13.172 27.3676 22.0161 27.3676H35L30.2957 36H22.0161C4.84543 36 0 26.9881 0 17.9763C0 8.96443 4.79839 0 21.9691 0V8.63241Z" fill="#FD5707" />
                            </g>
                        </svg>
                    </a>

                </div>
                <div className="footer_dot"><svg width="8" height="6" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="." d="M0.517822 9V0H10.5178V9H0.517822Z" fill="#03C3B6" />
                </svg></div>

                <div className="footer_ai"><svg width="35" height="36" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 1000002571">
                        <rect id="Rectangle 1177" x="40.0356" width="11" height="7" fill="#03C3B6" />
                        <g id="Ai">
                            <path d="M30.7635 15.3202L38.3866 36H27.2342L19.6111 15.3202H30.7635ZM13.3526 0H24.505L14.3878 27.3676H22.3874L17.6818 36H0.0356445L13.3526 0Z" fill="#FD5707" />
                            <path d="M39.5891 18.1186L44.2948 9.48617H50.0356V36H39.5891V18.1186Z" fill="#FD5707" />
                        </g>
                    </g>
                </svg></div>

                <div className="grid1">Lorem ipsum dolor sit amet consectetur. Pellentesque quis vulputate massa fames nulla suspendisse quisque. Orci aliquam adipiscing et eget elementum quis imperdiet arcu consectetur. Cras vitae ipsum sodales dui volutpat.
                </div>
            </div>

        </footer>
    );
};

