import React from 'react';
import { Col, Container, NavLink, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import Swiper styles
const Home = () => {
    return (
        <React.Fragment>
            <section className="section pb-0 hero-section" id="hero">
                <div className="bg-overlay bg-overlay-pattern"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12} sm={12}>
                            <div className="mt-lg-5 pt-5" style={{ textAlign: 'justify' }}>
                                <h2 className="display-8 fw-semibold mb-3 lh-base" style={{ textAlign: 'center', hyphens: 'auto', fontSize: 27 }}>Unlock Your Potential in Crypto Trading with Our Comprehensive  <span
                                    className="text-success">Course </span></h2>
                            </div>
                        </Col>
                        <Col lg={11} sm={10}>
                            <div className='mt-3' style={{textAlign: 'center'}}>
                                <p className="text-uted mb-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>Are you interested in exploring the exciting world of cryptocurrencies and profiting from the dynamic crypto market? Look no further! Our comprehensive Cryptocurrency Trading Course is designed to equip you with the knowledge, skills, and strategies needed to navigate this rapidly evolving industry and maximize your trading potential. </p>
                                <p className="text-uted mb-3" style={{ lineHeight: 1.8, marginBottom: '16px',  hyphens: 'auto', fontSize: 18 }}>Why choose our Cryptocurrency Trading Course?</p>
                                <p className="text-uted mb-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>1. Expert Guidance: Learn from an experienced cryptocurrency trader who has a deep understanding of the market. Our trainer will guide you every step of the way, sharing valuable insights, practical tips, and real-world trading strategies.</p>
                                <p className="text-uted mb-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>2. Comprehensive Curriculum: Our course covers all the essential aspects of cryptocurrency trading, from understanding the basics of blockchain technology to mastering technical and fundamental analysis. You will learn how to identify profitable trading opportunities, manage risks effectively, and optimize your trading performance. </p>
                                <p className="text-uted mb-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>3. One-to-One Training: Unlike generic online courses, we provide personalized one-to-one training tailored to your specific needs and skill level. This ensures that you receive focused attention and can progress at your own pace, gaining a thorough understanding of each concept and technique. </p>
                                <p className="text-uted mb-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>4. Practical Approach: We believe in learning by doing. Our course emphasizes practical exercises, hands-on trading simulations, and real-time market analysis. You will gain practical experience and develop the confidence to apply your knowledge in real trading situations.</p>
                                <p className="text-uted mb-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>5. Ongoing Support: Learning doesn't stop after the course completion. We provide ongoing support and mentorship to our students, even beyond the course duration. Our goal is to help you succeed as a cryptocurrency trader and achieve your financial goals.  </p>
                                <p className="text-uted mb-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>Who can benefit from this course?</p>
                                <p className="text-uted mb-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>- Beginners: If you're new to cryptocurrency trading and want to build a strong foundation, our course will give you the necessary skills and knowledge to start your trading journey on the right foot.</p>
                                <p className="text-uted mb-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>- Intermediate Traders: If you already have some experience in crypto trading but want to enhance your strategies and improve your results, our course will provide advanced techniques and insights to take your trading to the next level.</p>
                                <p className="text-uted mb-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>- Investors: Even if you're primarily an investor and not an active trader, understanding cryptocurrency trading is crucial for making informed investment decisions. Our course will empower you with the knowledge to evaluate potential investment opportunities and manage your crypto portfolio effectively.</p>
                                <p className="text-uted mb-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>Don't miss out on the exciting opportunities that the cryptocurrency market has to offer. Enroll in our Cryptocurrency Trading Course today and take the first step towards becoming a skilled and profitable trader. Join us and unlock your trading potential!</p>
                                <p className="text-uted mb-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto', fontSize: 18 }}>Ready to get started? Contact us now to learn more or enroll in the course. Let's embark on this transformative journey together!</p>
                                <div className="d-flex gap-2 justify-content-center mt-4">
                                    {/* <Link to="/register" className="btn btn-primary">Get Started <i className="ri-arrow-right-line align-middle ms-1"></i></Link> */}
                                    <NavLink href="#plans" className="btn btn-primary mb-5">View Plans <i className="ri-eye-line align-middle ms-1"></i></NavLink>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>

            </section>
        </React.Fragment >
    );
};

export default Home;