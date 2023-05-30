import React, { useState } from 'react';
import { Col, Container, Row, Collapse } from 'reactstrap';
import classnames from "classnames";

const Faqs = () => {

    const [col1, setcol1] = useState(true);
    const [col2, setcol2] = useState(false);
    const [col3, setcol3] = useState(false);
    const [col4, setcol4] = useState(false);

    const [col9, setcol5] = useState(false);
    const [col10, setcol6] = useState(true);
    const [col11, setcol7] = useState(false);
    const [col12, setcol8] = useState(false);
    const [col20, setcol20] = useState(false);
    const [col21, setcol21] = useState(false);

    const t_col1 = () => {
        setcol1(!col1);
        setcol2(false);
        setcol3(false);
        setcol4(false);
        setcol20(false);

    };

    const t_col2 = () => {
        setcol2(!col2);
        setcol1(false);
        setcol3(false);
        setcol4(false);
        setcol20(false);

    };

    const t_col3 = () => {
        setcol3(!col3);
        setcol1(false);
        setcol2(false);
        setcol4(false);
        setcol20(false);

    };

    const t_col4 = () => {
        setcol4(!col4);
        setcol1(false);
        setcol2(false);
        setcol3(false);
        setcol20(false);
    };

    const t_col20 = () => {
        setcol20(!col20);
        setcol4(false);
        setcol1(false);
        setcol2(false);
        setcol3(false);
    };

    const t_col5 = () => {
        setcol5(!col9);
        setcol6(false);
        setcol7(false);
        setcol8(false);

    };

    const t_col6 = () => {
        setcol6(!col10);
        setcol7(false);
        setcol8(false);
        setcol5(false);

    };

    const t_col7 = () => {
        setcol7(!col11);
        setcol5(false);
        setcol6(false);
        setcol8(false);

    };

    const t_col8 = () => {
        setcol8(!col12);
        setcol5(false);
        setcol6(false);
        setcol7(false);
    };
    const t_col21 = () => {
        setcol21(!col21);
        setcol5(false);
        setcol6(false);
        setcol7(false);
    };

    return (
        <React.Fragment>
            <section className="section" id="faq">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-5">
                                <h3 className="mb-3 fw-semibold">Frequently Asked Questions</h3>
                                <p className="text-muted mb-4 ff-secondary">If you can not find answer to your question in our FAQ, you can
                                    always contact us or email us. We will answer you shortly!</p>

                                <div className="">
                                    <button type="button" className="btn btn-primary btn-label rounded-pill me-1"><i className="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"></i> Email Us</button>
                                    <button type="button" className="btn btn-info btn-label rounded-pill"><i className="ri-twitter-line label-icon align-middle rounded-pill fs-16 me-2"></i> Send Us Tweet</button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-lg-5 g-4">
                        <Col lg={6}>
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0 me-1">
                                    <i className="ri-question-line fs-24 align-middle text-success me-1"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="mb-0 fw-semibold">General Questions</h5>
                                </div>
                            </div>
                            <div className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
                                id="genques-accordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="genques-headingOne">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col1 }
                                            )}
                                            type="button"
                                            onClick={t_col1}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Do I need any prior experience in trading to take this course?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col1} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            No, you don't need any prior experience in trading to take this course. Our course is designed in a way that anyone, regardless of their background, can learn and understand the concepts of cryptocurrency trading. We start with the basics and gradually move to more advanced topics.
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="genques-headingTwo">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col2 }
                                            )}
                                            type="button"
                                            onClick={t_col2}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Is it safe to trade cryptocurrencies?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col2} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            Like any investment, trading cryptocurrencies carries risks. It's important to research and understand the market and potential risks before investing.
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="genques-headingThree">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col3 }
                                            )}
                                            type="button"
                                            onClick={t_col3}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Is cryptocurrency trading legal?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col3} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            Yes, cryptocurrency trading is legal in many countries, but it is important to note that regulations regarding cryptocurrencies and their trading vary from country to country. It is recommended to research the laws and regulations in your country before investing in cryptocurrency.
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="genques-headingFour">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col4 }
                                            )}
                                            type="button"
                                            onClick={t_col4}
                                            style={{ cursor: "pointer" }}
                                        >
                                            What topics will be covered in the cryptocurrency trading course?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col4} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            The course will cover topics such as technical analysis, fundamental analysis, risk management,  trading psychology, and much more.
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="genques-headingFour">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col20 }
                                            )}
                                            type="button"
                                            onClick={t_col20}
                                            style={{ cursor: "pointer" }}
                                        >
                                            What can I expect after completing the cryptocurrency trading course?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col20} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                        You can expect to have a solid understanding of cryptocurrency trading and the ability to independently make informed trading decisions. You will also have the necessary skills to manage risks and maximize profits. It is important to note that trading is a continuous learning process, and the skills acquired during the course will need to be honed with experience and practice.                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0 me-1">
                                <i className="ri-question-line fs-24 align-middle text-success me-1"></i>
                                </div>
                                {/* <div className="flex-grow-1">
                                    <h5 className="mb-0 fw-semibold">Privacy &amp; Security</h5>
                                </div> */}
                            </div>

                            <div className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
                                id="privacy-accordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="privacy-headingOne">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col9 }
                                            )}
                                            type="button"
                                            onClick={t_col5}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Do I need to have a lot of money to start trading cryptocurrencies?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col9} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            No, you don't need a lot of money to start trading cryptocurrencies. In fact, you can start with a small amount of money and gradually increase your investment as you gain more experience and confidence in the market. However, it's important to remember that trading always involves risk, and you should only invest what you can afford to lose.                                         </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="privacy-headingTwo">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col10 }
                                            )}
                                            type="button"
                                            onClick={t_col6}
                                            style={{ cursor: "pointer" }}
                                        >
                                            How long does the course take to complete?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col10} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            The duration of our course is one month, and it involves one-hour sessions three days a week.
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="privacy-headingThree">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col11 }
                                            )}
                                            type="button"
                                            onClick={t_col7}
                                            style={{ cursor: "pointer" }}
                                        >
                                            How much time do I need to devote to the course?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col11} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            The course is designed to accommodate your schedule, with classes held three days a week for one hour each day. You can also work on your own time to complete the homework and assignments. While the course duration is one month, you can revisit the course material at any time to reinforce your knowledge.
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="privacy-headingFour">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col12 }
                                            )}
                                            type="button"
                                            onClick={t_col8}
                                            style={{ cursor: "pointer" }}
                                        >
                                            What do I need to start trading cryptocurrencies?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col12} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            You will need a computer or mobile device with internet access along with free version of Tradingview software and an account with any crypto exchange.
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="privacy-headingFour">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col21 }
                                            )}
                                            type="button"
                                            onClick={t_col21}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Can I trade cryptocurrencies on any exchange?
                                        </button>
                                    </h2>
                                    <Collapse isOpen={col21} className="accordion-collapse">
                                        <div className="accordion-body ff-secondary">
                                            While there are many exchanges to choose from, it is important to research and choose a reputable exchange with proper security measures in place to prevent hacking and theft.                                        </div>
                                    </Collapse>
                                </div>
                            </div>

                            {/* <!--end accordion--> */}
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Faqs;