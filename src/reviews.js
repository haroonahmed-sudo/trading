import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

const Reviews = () => {
    return (
        <React.Fragment>
            <section className="section bg-primary" id="reviews">
                <div className="bg-overlay bg-overlay-pattern"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <div className="text-center">
                                <div>
                                    <i className="ri-double-quotes-l text-success display-3"></i>
                                </div>
                                <h4 className="text-white mb-5"><span className="text-success">19k</span>+ Satisfied clients</h4>

                                <Swiper modules={[Navigation, Pagination, Autoplay]} pagination={{ clickable: true }} navigation={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper client-review-swiper rounded">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="row justify-content-center">
                                                <div className="col-10">
                                                    <div className="text-white-50">
                                                        <p className="fs-20 ff-secondary mb-4" style={{ textAlign: 'left' }}>" Highly recommend Mr.Safi to everyone who wants to be an independent trader. Before I joined him I was purely gambling but after the course I understood the power of TA and started to take trading seriously. The way he explains the concepts is really amazing...joining him was one of my best decisions in life... "</p>

                                                        <div>
                                                            <h5 className="text-white">- Yaser</h5>
                                                            {/* <p>- Skote User</p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="row justify-content-center">
                                                <div className="col-10">
                                                    <div className="text-white-50">
                                                        <p className="fs-20 ff-secondary mb-4" style={{ textAlign: 'left' }}>" He has the drive to help other people learn the art of trading so that they can earn life changing returns.

                                                            His teachings techniques are very thorough and it gives the student a clear understanding of price action.

                                                            After taking his classes I feel very confident in taking trades to achieve desired profits and avoid losses. "</p>

                                                        <div>
                                                            <h5 className="text-white">Zoheb</h5>
                                                            <p>- Veltrix User</p>                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="row justify-content-center">
                                                <div className="col-10">
                                                    <div className="text-white-50">
                                                        <p className="fs-20 ff-secondary mb-4" style={{ textAlign: 'left' }}>" The technical analysis course for crypto has been a game-changer for me. I learned how to analyze price charts, identify trends, and make informed trading decisions. Thanks to this course, I have seen significant improvements in my trading results. Highly recommended!"</p>

                                                        <div>
                                                            <h5 className="text-white">- Ravi</h5>
                                                            {/* <p>- Skote User</p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="row justify-content-center">
                                                <div className="col-10">
                                                    <div className="text-white-50">
                                                        <p className="fs-20 ff-secondary mb-4" style={{ textAlign: 'left' }}>"I took class and it is very satisfied and helpful.
                                                            After all the knowledge i can easily take decisions on trades
                                                            Big thank you "</p>

                                                        <div>
                                                            <h5 className="text-white">- Amor</h5>
                                                            {/* <p>- Amor</p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                    </div>
                                    <div className="swiper-button-next bg-white rounded-circle"></div>
                                    <div className="swiper-button-prev bg-white rounded-circle"></div>
                                    <div className="swiper-pagination position-relative mt-2"></div>
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Reviews;