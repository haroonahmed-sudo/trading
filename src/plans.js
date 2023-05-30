import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, NavLink, Row } from 'reactstrap';

const Plans = () => {
    const [plan, setPlan] = useState(true);
    const toggle = () => setPlan(!plan);
    return (
        <React.Fragment>
            <section className="section" id="plans">

                <div className="bg-overlay bg-overlay-pattern"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-5">
                                <h3 className="mb-3 fw-semibold">Choose the plan that's right for you</h3>
                                <p className="lead text-muted lh-base" style={{ fontSize: 16, }}>Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime. </p>

                            </div>
                        </Col>
                    </Row>

                    <Row className="gy-4">
                        <Col lg={3}>
                            <Card className="plan-box mb-0" >
                                <CardBody style={{ height: 420 }} className="m-2 ">

                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1 fw-semibold">Crypto trading essentials</h5>
                                            {/* <p className="text-muted mb-0">For Startup</p> */}
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <h2 className="month"><sup><small>$</small></sup><span className="ff-secondary fw-bold">100</span> </h2>
                                    </div>

                                    <div className='mt-4'>
                                        <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                                            {/* <p style={{ textAlign: 'left', hyphens: 'auto', lineHeight: 1.5 }}><span style={{ color: '#fff' }}>AIM :</span> Provide essential knowledge and skills to learners for trading cryptocurrencies effectively.</p> */}
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>Great Educational Content</b>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <b>Member livestreams</b>
                                                    </div>

                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <b>Market Education</b>
                                                    </div>

                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <b>great place for beginners to start to learn!</b>
                                                    </div>

                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>24/7</b> Support
                                                    </div>

                                                </div>
                                            </li>
                                        </ul>
                                        <div >
                                            <NavLink href="/start/1" className="btn btn-soft-success w-100">Get
                                                Started</NavLink>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={3}>
                            <Card className="plan-box mb-0">
                                <CardBody style={{ height: 420 }} className="m-2">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-4 fw-semibold">Technical analysis</h5>
                                            {/* <p className="text-muted mb-0">For Startup</p> */}
                                        </div>

                                    </div>
                                    <div className="">
                                        <h2 className="month"><sup><small>$</small></sup><span className="ff-secondary fw-bold">500</span> </h2>
                                    </div>

                                    <div className='mt-4'>
                                        <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                                            {/* <p style={{ textAlign: 'left', hyphens: 'auto', lineHeight: 1.5 }}><span style={{ color: '#fff' }}>AIM :</span> Provide essential knowledge and skills to learners for trading cryptocurrencies effectively.</p> */}
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>Great Educational Content</b>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <b>Member livestreams</b>
                                                    </div>

                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <b>Market Education</b>
                                                    </div>

                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <b>great place for beginners to start to learn!</b>
                                                    </div>

                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>24/7</b> Support
                                                    </div>

                                                </div>
                                            </li>
                                        </ul>
                                        <div className="">
                                            <NavLink href="/start/2" className="btn btn-soft-success w-100">Get
                                                Started</NavLink>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* <!--end col--> */}
                        <Col lg={3}>
                            <Card className="plan-box mb-0 ribbon-box right">
                                <CardBody style={{ height: 420 }} className="m-2">
                                    <div className="ribbon-two ribbon-two-danger"><span>Popular</span></div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-4 fw-semibold">Fundamental analysis</h5>
                                            {/* <p className="text-muted mb-0">For Startup</p> */}
                                        </div>

                                    </div>
                                    <div className="">
                                        <h2 className="month"><sup><small>$</small></sup><span className="ff-secondary fw-bold">300</span> </h2>
                                    </div>

                                    <div className='mt-4'>
                                        <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                                            {/* <p style={{ textAlign: 'left', hyphens: 'auto', lineHeight: 1.5 }}><span style={{ color: '#fff' }}>AIM :</span> Provide essential knowledge and skills to learners for trading cryptocurrencies effectively.</p> */}
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>Great Educational Content</b>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <b>Member livestreams</b>
                                                    </div>

                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <b>Market Education</b>
                                                    </div>

                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <b>great place for beginners to start to learn!</b>
                                                    </div>

                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>24/7</b> Support
                                                    </div>

                                                </div>
                                            </li>
                                        </ul>
                                        <div className="">
                                            <NavLink href="/start/3" className="btn btn-soft-success w-100">Get
                                                Started</NavLink>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={3}>
                            <Card className="plan-box mb-0">
                                <CardBody style={{ height: 420 }} className="m-2">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-4 fw-semibold">Risk management:</h5>
                                            {/* <p className="text-muted mb-0">For Startup</p> */}
                                        </div>

                                    </div>
                                    <div className="">
                                        <h2 className="month"><sup><small>$</small></sup><span className="ff-secondary fw-bold">300</span> </h2>
                                    </div>
                                    <div className='mt-4'>
                                        <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                                            {/* <p style={{ textAlign: 'left', hyphens: 'auto', lineHeight: 1.5 }}><span style={{ color: '#fff' }}>AIM :</span> Provide essential knowledge and skills to learners for trading cryptocurrencies effectively.</p> */}
                                            <li>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>Great Educational Content</b>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <b>Member livestreams</b>
                                                    </div>

                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <b>Market Education</b>
                                                    </div>

                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <b>great place for beginners to start to learn!</b>
                                                    </div>

                                                </div>
                                                <div className="d-flex mt-3">
                                                    <div className="flex-shrink-0 text-success me-1">
                                                        <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <b>24/7</b> Support
                                                    </div>

                                                </div>
                                            </li>
                                        </ul>
                                        <div className="">
                                            <NavLink href="/start/4" className="btn btn-soft-success w-100">Get
                                                Started</NavLink>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Plans;