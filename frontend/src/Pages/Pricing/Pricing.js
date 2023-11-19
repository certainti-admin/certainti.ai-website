import React from 'react';
import MyNavBar from '../../Navbar/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pricing.css';
import Home from '../../images/Home.svg'
import Arrow from '../../images/arrow.svg'
import { Button } from 'react-bootstrap';
import Check from "../../images/check.svg"
import Delete from '../../images/delete.svg'
import Meetmagic from '../../images/Meetmagic.png'
import nurturev from '../../images/nurturev.png'
import Resilience from '../../images/Resilience 1.png'
import Soulpay from '../../images/Soulpay.png'
import voyagePro from '../../images/voyagePro.png'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import A1 from '../../images/A1.svg'
import A2 from '../../images/A2.svg'
import email from '../../images/email.svg'

function Pricing() {
    return (
        <div>
            <MyNavBar />
            <Container className="pricing-container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Row className="my-3 back  d-flex">
                    <Col className='my-1'><img src={Home} /></Col>
                    <Col className='my-1'>Home</Col>
                    <Col className='my-1'><img src={Arrow} /></Col>
                    <Col className='my-1'>Pricing</Col>
                </Row>
                <Row className="my-3 pricing">
                    <Col>Pricing</Col>
                </Row>
                <Row className="my-3  info">
                    <Col>Get in touch and let us know how we can help.</Col>
                </Row>
            </Container>
            <Container className="d-flex flex-column pricing_con2">
                <Row className="mb-3">
                    <Container className='d-flex flex-column'>
                        <Row className="mb-3 info-price border border-primary">Pricing / Providing varying levels of features or access</Row>

                        <Row className="mb-3 pricing-head">Simple and scalable pricing</Row>
                        <Row className="mb-3 pricing-dec">Tell us a little about yourself and we'll connect you with a
                            Certainti expert who can share more about the product and
                            answer any questions you have.</Row>
                    </Container>
                </Row>

                <Row className="mb-3 pricing-coloumns">
                    <Col className='d-flex pc'>
                        <Container className='d-flex flex-column'>
                            <Row className='pricing-col1 mb-3'>Essentials</Row>
                            <Row className='mb-3 essential-dec'>Ideal for individuals who need quick access to basic features.</Row>
                            <Row className='mb-3 pricemain d-flex'>  <Col className="d-flex align-items-center">
                                <span className="price">$30 / </span>
                            </Col>
                                <Col className="d-flex align-items-center">
                                    Month
                                </Col></Row>
                            <Row className='mb-3 getStarted d-flex justify-content-center align-items-center'><Button className="custom-button">Get Started Now</Button></Row>
                        </Container>
                        <Container>
                            <Row className='mb-3'>
                                <Col ><img src={Check} /></Col>
                                <Col>
                                    Lorem Ipsum
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Check} /></Col>
                                <Col>Lorem Ipsum</Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Delete} /></Col>
                                <Col>Lorem Ipsum</Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Delete} /></Col>
                                <Col>Lorem Ipsum</Col>

                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Delete} /></Col>
                                <Col>Lorem Ipsum</Col>

                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Delete} /></Col>
                                <Col>Lorem Ipsum</Col>

                            </Row>
                        </Container>
                    </Col>
                    <Col className='d-flex pc'>
                        <Container className='d-flex flex-column'>
                            <Row className='pricing-col1 mb-3'>Essentials</Row>
                            <Row className='mb-3 essential-dec'>Ideal for individuals who need quick access to basic features.</Row>
                            <Row className='mb-3 pricemain d-flex'>  <Col className="d-flex align-items-center">
                                <span className="price">$30 / </span>
                            </Col>
                                <Col className="d-flex align-items-center">
                                    Month
                                </Col></Row>
                            <Row className='mb-3 getStarted d-flex justify-content-center align-items-center'><Button className="custom-button">Get Started Now</Button></Row>
                        </Container>
                        <Container>
                            <Row className='mb-3'>
                                <Col ><img src={Check} /></Col>
                                <Col>
                                    Lorem Ipsum
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Check} /></Col>
                                <Col>Lorem Ipsum</Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Delete} /></Col>
                                <Col>Lorem Ipsum</Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Delete} /></Col>
                                <Col>Lorem Ipsum</Col>

                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Delete} /></Col>
                                <Col>Lorem Ipsum</Col>

                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Delete} /></Col>
                                <Col>Lorem Ipsum</Col>

                            </Row>
                        </Container>
                    </Col>
                    <Col className='d-flex pc'>
                        <Container className='d-flex flex-column'>
                            <Row className='pricing-col1 mb-3'>Essentials</Row>
                            <Row className='mb-3 essential-dec'>Ideal for individuals who need quick access to basic features.</Row>
                            <Row className='mb-3 pricemain d-flex'>  <Col className="d-flex align-items-center">
                                <span className="price">$30 / </span>
                            </Col>
                                <Col className="d-flex align-items-center">
                                    Month
                                </Col></Row>
                            <Row className='mb-3 getStarted d-flex justify-content-center align-items-center'><Button className="custom-button">Get Started Now</Button></Row>
                        </Container>
                        <Container>
                            <Row className='mb-3'>
                                <Col ><img src={Check} /></Col>
                                <Col>
                                    Lorem Ipsum
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Check} /></Col>
                                <Col>Lorem Ipsum</Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Delete} /></Col>
                                <Col>Lorem Ipsum</Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Delete} /></Col>
                                <Col>Lorem Ipsum</Col>

                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Delete} /></Col>
                                <Col>Lorem Ipsum</Col>

                            </Row>
                            <Row className='mb-3'>
                                <Col><img src={Delete} /></Col>
                                <Col>Lorem Ipsum</Col>

                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className='d-flex flex-column mb-3'>
                    <Container className='d-flex flex-column mb-3'>
                        <Row className='mb-3 trust justify-content-center align-items-center'>
                            Trusted by industry leader
                        </Row>
                        <Row className='mb-3 d-flex'>
                            <Col>
                                <img src={Soulpay} className="fixed-size-image" />
                            </Col>
                            <Col>
                                <img src={nurturev} className="fixed-size-image" />
                            </Col>
                            <Col>
                                <img src={voyagePro} className="fixed-size-image" />
                            </Col>
                            <Col>
                                <img src={Meetmagic} className="fixed-size-image" />
                            </Col>
                            <Col>
                                <img src={Resilience} className="fixed-size-image" />
                            </Col>
                        </Row>
                    </Container>

                </Row>
                <Row className='d-flex pricing-col3 mb-3'>
                    <Col>
                        <Container className='faq1 d-flex flex-column'>
                            <Row className='faq'>FAQ / Find Answers in our FAQ</Row>
                            <Row className='pricing-explore'>Explore Our Frequently Asked Questions</Row>
                            <Row className='pricing-explore-text'>Now reinvented with Artificial Intelligence—Certainti is the first AI Native Data Provider. Enrich your records, reveal buying intent, and connect with your ideal customers.</Row>
                        </Container>
                    </Col>
                    <Col className='d-flex  mb-3'>

                        <Container className='d-flex flex-column display-info1' >
                            <Row className='d-flex display-info'>
                                <Col className='text-info'>Rorem ipsum dolor sit amet consectetur ?</Col>
                                <Col><Button className="btn btn-primary">&#43;</Button></Col>
                            </Row>
                            <Row className='d-flex display-info'>
                                <Col className='text-info'>Rorem ipsum dolor sit amet consectetur ?</Col>
                                <Col><Button className="btn btn-primary">&#43;</Button></Col>
                            </Row>
                            <Row className='d-flex display-info'>
                                <Col className='text-info'>Rorem ipsum dolor sit amet consectetur ?</Col>
                                <Col><Button className="btn btn-primary">&#43;</Button></Col>
                            </Row>
                            <Row className='d-flex display-info'>
                                <Col className='text-info'>Rorem ipsum dolor sit amet consectetur ?</Col>
                                <Col><Button className="btn btn-primary">&#43;</Button></Col>
                            </Row>

                        </Container>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Container className=' pricing-col4-blog'>
                        <Row className='pricing-col4-blog1'>
                            Blogs / Stay Informed with Our Blog
                        </Row>
                    </Container>
                    <Container className='d-flex mb-3 pricing-col4-blog2'>
                        <Row>Latest insights from our blog</Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <Container className='d-flex flex-column pricing-col4'>
                                    <Row><img src={img1} /></Row>
                                    <Row className='pricing-col4-info'>Faucibus mauris vel rutrum blandit?</Row>
                                    <Row className='pricing-col4-info1'>Lorem ipsum dolor sit amet consectetur. Quisque neque ut nulla augue. Cras morbi risus adipiscing fermentum. </Row>
                                    <Row className='pricing-col4-info2'>Olivia Rhye • 20 Jan 2023</Row>
                                </Container>
                            </Col>
                            <Col>
                                <Container className='d-flex flex-column pricing-col4'>
                                    <Row><img src={img1} /></Row>
                                    <Row className='pricing-col4-info'>Faucibus mauris vel rutrum blandit?</Row>
                                    <Row className='pricing-col4-info1'>Lorem ipsum dolor sit amet consectetur. Quisque neque ut nulla augue. Cras morbi risus adipiscing fermentum. </Row>
                                    <Row className='pricing-col4-info2'>Olivia Rhye • 20 Jan 2023</Row>
                                </Container>
                            </Col>
                            <Col>
                                <Container className='d-flex flex-column pricing-col4'>
                                    <Row><img src={img1} /></Row>
                                    <Row className='pricing-col4-info'>Faucibus mauris vel rutrum blandit?</Row>
                                    <Row className='pricing-col4-info1'>Lorem ipsum dolor sit amet consectetur. Quisque neque ut nulla augue. Cras morbi risus adipiscing fermentum. </Row>
                                    <Row className='pricing-col4-info2'>Olivia Rhye • 20 Jan 2023</Row>
                                </Container>
                            </Col>
                        </Row>

                    </Container>


                </Row>
                <Row className='pricing-footer'>
                    <Container>
                        <Row>
                            <Col>
                                <Container className='d-flex flex-column pricing-footer1' >
                                    <Row className='pricing-footer1'>
                                        <Col><img src={A1} /><img src={A2} /></Col>
                                    </Row>
                                    <Row className='pricing-footer2'>Lorem ipsum dolor sit amet consectetur. Pellentesque quis vulputate massa fames nulla suspendisse quisque. Orci aliquam adipiscing et eget elementum quis imperdiet arcu consectetur. Cras vitae ipsum sodales dui volutpat.</Row>
                                </Container>
                            </Col>
                            <Col>
                                <Container className='pricing-footer3 d-flex flex-column'>
                                    <Row >Product</Row>
                                    <Row className='pricing-details'>Dashboard</Row>
                                    <Row className='pricing-details'>App Integrations</Row>
                                    <Row className='pricing-details'>Reporting</Row>
                                    <Row className='pricing-details'>AI Tools</Row>
                                </Container>
                            </Col>
                            <Col>
                                <Container className='pricing-footer3 d-flex flex-column'>
                                    <Row>Solutions</Row>
                                    <Row className='pricing-details'>R & D Views</Row>
                                    <Row className='pricing-details'>SR & ED Views</Row>
                                    <Row className='pricing-details'>Compliance</Row>
                                    <Row className='pricing-details'>Real-time Updates</Row>
                                 
                                </Container>
                            </Col>
                            <Col>
                                <Container className='pricing-footer3 d-flex flex-column'>
                                    <Row>Sign up to newsletter</Row>
                                    <Row>
                                        <Col xs={12} md={8} className="d-flex align-items-center">
                                            <input type="email" placeholder="Email" className="form-control" />
                                        </Col>
                                        <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
                                            <img src={email} alt="Email" />
                                        </Col>
                                    </Row>
                                    <Row className='pricing-footer4'>Stay up to date with special offers and market trends</Row>
                                    <Row>Social Media</Row>
                                    <Row className='d-flex icons-main'>
                                        <Col className='icons'></Col>
                                        <Col className='icons'></Col>
                                        <Col className='icons'></Col>
                                        <Col className='icons'></Col>
                                        
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row className='d-flex flex-column justify-content-center align-items-center'>© 2023 Certainti.ai</Row>
                    </Container>
                </Row>


            </Container>
        </div>
    );
}

export default Pricing;
