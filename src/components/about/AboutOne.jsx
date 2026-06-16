"use client"
import React, { useEffect } from 'react';
import { home, site } from '@/data/siteContent';
// import WOW from 'wow.js';


function AboutOne() {

    return (
        <div>

            {/* rts about us section start */}
            <div className="rts-about-area rts-section-gap bg-about-sm-shape" id="about">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        {/* about left */}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-2 order-sm-2 order-2 mt_md--50 mt_sm--50">
                            <div className="rts-title-area">
                                <p className="pre-title">More About Resilient Payments</p>
                                <h2 className="title">{home.overviewTitle}</h2>
                            </div>
                            <div className="about-inner">
                                <p className="disc">{home.overview}</p>
                                {/* start about success area */}
                                <div className="row about-success-wrapper">
                                    {/* left wrapper start */}
                                    <div className="col-lg-6 col-md-6">
                                        {home.overviewBullets.slice(0, 3).map((item) => (
                                            <div className="single" key={item}>
                                                <i className="far fa-check" />
                                                <p className="details">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* left wrapper end */}
                                    <div className="col-lg-6 col-md-6">
                                        {home.overviewBullets.slice(3, 6).map((item) => (
                                            <div className="single" key={item}>
                                                <i className="far fa-check" />
                                                <p className="details">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* start about success area */}

                            </div>
                        </div>
                        {/* about right */}
                        {/* about-right Start*/}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-sm-1 order-1">
                            <div className="about-one-thumbnail">
                                <img
                                    src="/images/integrity-payments/home/businessman-portrait.png"
                                    alt="Resilient Payments business professional"
                                />
                                <img
                                    className="small-img"
                                    src="/images/integrity-payments/home/payment-smartphone.jpg"
                                    alt="Secure mobile payment acceptance"
                                />
                                <div className="experience">
                                    <div className="left single">
                                        <h2 className="title">25+</h2>
                                        <p className="time">Years</p>
                                    </div>
                                    <div className="right single">
                                        <p className="disc">Of payment, payroll, and business service experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* about-right end */}
                    </div>
                </div>
            </div>
            {/* rts about us section end */}

        </div >
    )
}

export default AboutOne

