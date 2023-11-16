import "./style_blog.css";
import { Footer } from "./Footer.jsx";

import { Navbar } from "./Navbar.jsx";
import { Header } from "./Header.jsx";

const Blog = () => {
    return (
        <>
            <Navbar />
            <section className="blog">
                <div className="header"><svg xmlns="http://www.w3.org/2000/svg" opacity="0.3" width="1000" height="250" viewBox="0 0 1423 360" fill="none">
                    <g filter="url(#filter0_f_682_170)">
                        <path d="M586.803 180.548C586.803 265.822 517.675 334.95 432.402 334.95C347.128 334.95 278 265.822 278 180.548C278 95.2745 347.128 26.1465 432.402 26.1465C517.675 26.1465 586.803 95.2745 586.803 180.548Z" fill="#1CCDF3" />
                        <path d="M711.888 25.6579C711.888 95.0102 655.667 151.231 586.314 151.231C516.962 151.231 460.741 95.0102 460.741 25.6579C460.741 -43.6944 516.962 -99.9155 586.314 -99.9155C655.667 -99.9155 711.888 -43.6944 711.888 25.6579Z" fill="#03C3B6" />
                        <path d="M680.617 13.4426H1025.58V358.403H680.617V13.4426Z" fill="#FF915C" />
                        <path d="M806.67 200.883L701.495 644.338L372.414 339.217L806.67 200.883Z" fill="#78AEFF" />
                        <path d="M965.966 198.138L1008.31 328.461H1145.34L1034.48 409.004L1076.83 539.327L965.966 458.783L855.107 539.327L897.452 409.004L786.593 328.461H923.622L965.966 198.138Z" fill="#FFD680" />
                    </g>

                    <defs>
                        <filter id="filter0_f_682_170" x="0.68048" y="-377.447" width="1422.4" height="1299.32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="138.766" result="effect1_foregroundBlur_682_170" />

                        </filter>
                    </defs>
                </svg>
                    <div className="heading">
                        Blogs
                    </div>
                    <div className="heading-description">Connect with the CERTAINTY.AI community at conferences, meetups, and
                        hackathons around the world..</div>
                </div>
                <div className="top_stories">Top stories</div>
                <div className="image1">
                    <img style={{ width: '70%', height: '70%' }} src="/Rectangle 5048.png" alt="Description of the image" />

                </div>
                <div className="image1_category">It has survived not only five centuries, but also the leap into electronic</div>
                <div className="image2">
                    <img style={{ width: '70%', height: '70%' }} src="/Rectangle 5049.png" alt="Description of the image" />

                </div>
                <div className="image3">
                    <img style={{ width: '70%', height: '70%' }} src="/Rectangle 5050.png" alt="Description of the image" />

                </div>
                <div className="image4">
                    <img style={{ width: '70%', height: '70%' }} src="/Rectangle 5051.png" alt="Description of the image" />

                </div>
                <div className="blog_category">It has survived not only five centuries, but also the leap into electronic</div>
                <div className="heading-short_description">Connect with the CERTAINTY.AI community at conferences, meetups, and
                    hackathons around the world..</div>
                <div className="image2_category">It has survived not only five centuries, but also the leap into electronic</div>
                <div className="image3_category">It has survived not only five centuries, but also the leap into electronic</div>
                <div className="latest_blogs">
                    <div className="latest_blog_heading">Latest Blogs</div>
                    <div className="latest-blogs_images">
                        <div className="latest_blogs_image1">
                            <img style={{ width: '65%', height: '70%' }} src="/Rectangle 1208.png" alt="Description of the image" />
                            <div className="latest_blogs_image1_heading">Faucibus mauris vel rutrum blandit?</div>
                            <div className="latest_blogs_image1_heading_description">Lorem ipsum dolor sit amet consectetur. Quisque neque ut nulla augue. Cras morbi risus adipiscing fermentum.</div>
                        </div>
                        <div className="latest_blogs_image2">
                            <img style={{ width: '95%', height: '70%' }} src="/Rectangle 1207.png" alt="Description of the image" />
                        </div>
                        <div className="latest_blogs_image3">
                            <img style={{ width: '95%', height: '70%' }} src="/Rectangle 1206.png" alt="Description of the image" />
                        </div>
                    </div>
                </div>



            </section>






        </>

    );
};

export default Blog;