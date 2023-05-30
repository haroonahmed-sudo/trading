import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Owner from './assets/images/safi bhai.jpeg'

const About = () => {
    return (
        <React.Fragment>
            <section className="about" id="about">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="text-center mb-5 mt-5">
                                <h2 className="mb-4 fw-semibold" style={{ color: 'whitesmoke' }}>Get To Know About Us</h2>
                                <img src={Owner} alt="bitcoins" className='mb-4 mr-4' height="350" width="330" style={{ borderRadius: '2%' }} />

                                <h5 className="text-uted mb-4" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>If you have found your way to this page, it is likely that you are either seeking to refine your trading skills or you are an aspiring trader preparing to enter the market for the first time. In either case, you have arrived at the right place, as I am here to teach you how to fish, imparting the skill sets and discipline that I have cultivated over a decade of trading experience.</h5>
                                <h5 className="text- mb-4" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>I am Safi, your mentor, and my journey into the capital market began in 2008 when I started trading Forex. Initially, I had thought it would be easy, but like many new traders, I entered the market at the worst possible time, just as the recession was beginning. It didn't take me long to realize that trading wasn't as simple as it appeared. I incurred losses, but I didn't give up. I kept learning and exploring, and eventually, I gained a deeper understanding of trading and investing. Along the way, I became interested in cryptocurrencies and purchased my first Bitcoin in 2017, recognizing the potential of blockchain technology to transform the financial system.</h5>
                                <h5 className="text- mb-4" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>This course is designed to provide personalized attention to each student through one-to-one training, with me as your trainer. With over a decade of trading experience and a passion for teaching, I will share valuable insights and help you develop the necessary skills and discipline to succeed in the crypto market. The course is tailored to your individual needs, allowing you to progress at your own pace and receive customized feedback.</h5>
                                <h5 className="text- mb-4" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>I assure you by the end of this course you will understand that "Trading is not gambling," but rather an endeavor that is both technical and psychological.</h5>

                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
            <hr />
        </React.Fragment>
    );
};

export default About;