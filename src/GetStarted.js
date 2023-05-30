import React from 'react';
import { useParams } from 'react-router-dom'
import { Col, Container, Row, NavLink } from 'reactstrap';
import bitcoin from './assets/images/btc.jpeg'
import trading from './assets/images/trading.jpeg'
import seventh from './assets/images/seventh.jpeg'
import law from './assets/images/law.jpeg'
const GetStarted = () => {
    const { srh } = useParams()

    const whatsappNumber = '8688198601'; // Replace with the desired WhatsApp number

    const handleClick = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappUrl = isMobile
            ? `https://api.whatsapp.com/send?phone=${whatsappNumber}`
            : `https://web.whatsapp.com/send?phone=${whatsappNumber}`;

        window.open(whatsappUrl, '_blank');
    };
    return (
        <React.Fragment>
            <div className="bg-overlay bg-overlay-pattern"></div>
            <div style={{ textAlign: 'center', marginTop: 60 }}>
                <hr />
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <div style={{ textAlign: 'center', marginTop: 10 }}>
                                {srh == 1 ? <div style={{ justifyContent: 'center', marginTop: 40 }}>
                                    <div className="m-5" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <h2 style={{ textAlign: 'center', marginRight: 15 }}>Crypto Trading Essentials</h2>
                                        <img src={bitcoin} alt="bitcoins" height="130" width="200" style={{ borderRadius: '10%' }} />
                                    </div>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>This course covers the basics of cryptocurrencies, including crypto language, buying your first crypto, trading on exchanges, securing your crypto, and understanding basics of technical analysis. You will gain a solid foundation in the world of cryptocurrencies and develop the skills and knowledge necessary to navigate the market with confidence.</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}><span style={{ fontWeight: 'bold', fontSize: 20 }}>Aim: </span>Provide essential knowledge and skills to learners for trading cryptocurrencies effectively.</h5>
                                    <span style={{ fontWeight: 'bold', fontSize: 23 }} className="mt-3">Outcomes: </span>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>1. Knowledge of key crypto concepts: Participants will gain an understanding of key crypto concepts such as blockchain, wallets, exchanges, and market trends.</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>2. Familiarity with trading platforms: Participants will become familiar with popular trading platforms used to buy and sell cryptocurrencies.                                    </h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>3. Understanding of risk management: Participants will learn about the importance of risk management in crypto trading and develop basic risk management strategies, including the use of trading tools such as stop-loss (SL), trailing SL, take-profit (TP), and one-cancels-the-other (OCO) orders.</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>4. Technical analysis basics: Participants will gain an introduction to technical analysis concepts, such as chart reading, trend lines, and support and resistance levels.</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>5. Fundamental analysis basics: Participants will gain an introduction to fundamental analysis concepts, such as market news and events that can affect crypto prices.</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>6. Building a trading plan: Participants will learn how to develop a basic trading plan, including setting goals, identifying entry and exit points, and managing risks using trading tools such as SL, trailing SL, TP, and OCO orders.</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>7. Practical trading experience: Participants will have the opportunity to gain practical trading experience by executing trades using a demo trading account and practicing the concepts learned in the course.</h5>
                                    {/* <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}></h5> */}
                                    <div className="mb-5" onClick={handleClick}>
                                        <NavLink className="btn btn-soft-success w-25">Enroll Me</NavLink>
                                    </div>

                                </div> : null}
                                {srh == 2 ? <div style={{ justifyContent: 'center', marginTop: 40 }}>
                                    <div className="m-5" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <h2 style={{ textAlign: 'center', marginRight: 15 }}>Technical analysis</h2>
                                        <img src={trading} alt="bitcoins" height="130" width="200" style={{ borderRadius: '10%' }} />
                                    </div>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>It is a method of analyzing the price movements of cryptocurrencies by examining historical data to identify patterns and trends using statistical tools and charting. It involves the use of indicators and oscillators to identify potential buy or sell opportunities, and support and resistance levels to find entry or exit points in the market.</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}><span style={{ fontWeight: 'bold', fontSize: 20 }}>Aim: </span>The aim of this course is to provide learners with a comprehensive understanding of the tools and techniques used to analyze the price movements of cryptocurrencies. They will gain a strong comprehension of charting, technical </h5>
                                    <span style={{ fontWeight: 'bold', fontSize: 23 }} className="mt-3">Outcomes: </span>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>1. Understand the principles of technical analysis and how they apply to cryptocurrencies. </h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>2. Be able to read and interpret different types of charts used in technical analysis, including line charts, bar charts, and candlestick charts</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>3. Know how to use various technical indicators to identify potential buy or sell opportunity in the market</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>4. Understand the concept of support and resistance levels and be able to identify key levels on price charts.</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>5. Know how to use technical analysis in combination with other forms of analysis, such as fundamental analysis, to make informed trading decisions.</h5>
                                    <div className="mb-5" onClick={handleClick}>
                                        <NavLink className="btn btn-soft-success w-25">Enroll Me</NavLink>
                                    </div>

                                </div> : null}
                                {srh == 3 ? <div style={{ justifyContent: 'center', marginTop: 40 }}>
                                    <div className="m-5" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <h2 style={{ textAlign: 'center', marginRight: 15 }}>Fundamental analysis</h2>
                                        <img src={seventh} alt="bitcoins" height="130" width="200" style={{ borderRadius: '10%' }} />
                                    </div>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>Fundamental analysis is an important tool for evaluating the intrinsic value of a cryptocurrency. By analyzing various economic and financial factors, traders and investors can make informed decisions about when to buy, hold, or sell a particular cryptocurrency.</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}><span style={{ fontWeight: 'bold', fontSize: 20 }}>Aim: </span>The aim of this course is to equip learners with the knowledge and skills to analyze the underlying economic and financial factors that influence the value of cryptocurrencies. Participants will learn how to assess the macroeconomic environment, evaluate market trends, and analyze company financials to make informed investment decisions. Through case studies and practical exercises, learners will develop a deep understanding of the fundamental analysis process and its application in the crypto market. By the end of the course, participants will be able to identify undervalued or overvalued assets and make sound investment decisions.</h5>
                                    <span style={{ fontWeight: 'bold', fontSize: 23 }} className="mt-3">Outcomes: </span>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>1. Develop an understanding of the economic and financial factors that drive the value of cryptocurrencies.</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>2. Learn how to identify the key drivers of value for different cryptocurrencies</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>3. Learn how to perform a fundamental analysis of cryptocurrencies, including evaluating the technology behind the cryptocurrency, its adoption rate, and its competition.</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>4. Understand the impact of news events and market sentiment on the value of cryptocurrencies</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>5. Develop the ability to make informed investment decisions based on a comprehensive analysis of the cryptocurrency market</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>6. Learn to evaluate the long-term potential of different cryptocurrencies, including their ability to disrupt traditional financial systems</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>7. Understand how to use fundamental analysis in conjunction with other forms of analysis, such as technical analysis, to gain a comprehensive understanding of the market.</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>In conclusion, However, it is important to remember that cryptocurrency markets are highly volatile and unpredictable, and traders should always use caution and conduct thorough research before making any investment decisions.</h5>

                                    <div className="mb-5" onClick={handleClick}>
                                        <NavLink className="btn btn-soft-success w-25">Enroll Me</NavLink>
                                    </div>

                                </div> : null}
                                {srh == 4 ? <div style={{ justifyContent: 'center', marginTop: 40 }}>
                                <div className="m-5" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <h2 style={{ textAlign: 'center', marginRight: 15 }}>Risk management</h2>
                                        <img src={law} alt="bitcoins" height="130" width="200" style={{ borderRadius: '10%' }} />
                                    </div>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}><span style={{ fontWeight: 'bold', fontSize: 20 }}>Aim: </span>The aim of this course is to provide traders with the necessary knowledge and skills to identify potential risks associated with trading cryptocurrencies, assess their impact and develop strategies to minimize them. The course aims to help traders manage risks effectively, make more informed trading decisions, and improve their overall trading performance and profitability.</h5>
                                    <span style={{ fontWeight: 'bold', fontSize: 23 }} className="mt-3">Outcomes: </span>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>1. Understanding the different types of risks associated with trading cryptocurrencies and how to identify them. </h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>2. Assessing the impact of each risk identified and calculating the potential losses that may arise. </h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>3. Developing effective risk management strategies to minimize risks associated with trading cryptocurrencies. </h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>4. Monitoring risks associated with trading cryptocurrencies on an ongoing basis and adjusting strategies accordingly.</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>5. Understanding trading psychology, risk tolerance, and portfolio management.</h5>
                                    <h5 className="mt-3" style={{ lineHeight: 1.8, marginBottom: '16px', textAlign: 'justify', hyphens: 'auto' }}>By the end of the course, traders should have a deep understanding of risk management concepts and be able to apply this knowledge to manage risks effectively when trading cryptocurrencies. They should also be able to develop and implement risk management strategies that can help them make more informed trading decisions and improve their overall trading performance.</h5>

                                    <div className="mb-5" onClick={handleClick}>
                                        <NavLink className="btn btn-soft-success w-25">Enroll Me</NavLink>
                                    </div>

                                </div> : null}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default GetStarted