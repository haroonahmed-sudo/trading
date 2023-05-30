import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, NavLink, Row } from 'reactstrap';

// Import Images
// import logolight from "./assets/images/logo-light.png";

const Footer = () => {
    return (
        <React.Fragment>
            <hr/>
            <footer className="custom-footer bg-dark py-5 position-relative">
                <Container>
                    <Row>
                        <Col lg={9} >
                            <div>
                                <div>
                                    <h5 className="text-white mb-0">Disclaimer</h5>
                                </div>
                                <div className="mt-4">
                                    <p style={{lineHeight:1.5}}>Cryptocurrency trading involves a high level of risk and may not be suitable for everyone. The value of cryptocurrencies can fluctuate widely and can result in significant losses in a short period.</p>
                                    <p style={{lineHeight:1.5}} className="ff-secondary">It is important to do your own research and understand the potential risks involved. We strongly advise that you only trade with money you can afford to lose. While we strive to provide best trading techniquies, we do not guarantee profits or success. Additionally, please note that the cryptocurrency market is unregulated and subject to price volatility, and there is always a risk of exchange hacks or other security breaches. </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={2} className="ms-lg-auto">
                            <Row>
                                
                                <Col sm={12} >
                                    <h5 className="text-white mb-0">Support</h5>
                                    <div className="text-muted mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><NavLink href="#faq">FAQ</NavLink></li>
                                            <li><NavLink href="#contact">Contact</NavLink></li>
                                            <li><NavLink href="#about">About Us</NavLink></li>

                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>

                    <Row className="text-center text-sm-start align-items-center mt-2">
                        <Col sm={6}>

                            <div>
                                <p className="copy-rights mb-0">
                                    {new Date().getFullYear()} ©
                                </p>
                            </div>
                        </Col>
                        {/* <Col sm={6}>
                            <div className="text-sm-end mt-3 mt-sm-0">
                                <ul className="list-inline mb-0 footer-social-link">
                                    <li className="list-inline-item">
                                        <Link to="#" className="avatar-xs d-block">
                                            <div className="avatar-title rounded-circle">
                                                <i className="ri-facebook-fill"></i>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="avatar-xs d-block">
                                            <div className="avatar-title rounded-circle">
                                                <i className="ri-github-fill"></i>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="avatar-xs d-block">
                                            <div className="avatar-title rounded-circle">
                                                <i className="ri-linkedin-fill"></i>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="avatar-xs d-block">
                                            <div className="avatar-title rounded-circle">
                                                <i className="ri-google-fill"></i>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="avatar-xs d-block">
                                            <div className="avatar-title rounded-circle">
                                                <i className="ri-dribbble-line"></i>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </footer>
        </React.Fragment >
    );
};

export default Footer;