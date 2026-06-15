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
                                {/* about founder & get in touch start */}
                                <div className="row about-founder-wrapper align-items-center mt--40">
                                    {/* left area start */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="author-inner">
                                            <a className="thumbnail" href="#">
                                                <img
                                                    src="/images/integrity-payments/logo.png"
                                                    alt={`${site.name} logo`}
                                                />
                                            </a>
                                            <div className="founder-details">
                                                <a href="team-details.html">
                                                    <h6 className="title">{site.name}</h6>
                                                </a>
                                                <span>National Business Consultants</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* left area end */}
                                    {/* right founder area */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_sm--20">
                                        <div className="author-call-option">
                                            <img
                                                className="authore-call"
                                                src="assets/images/about/call.svg"
                                                alt="call_founder"
                                            />
                                            <div className="call-details">
                                                <span>Call us anytime</span>
                                                <a href={site.phoneHref}>
                                                    <h6 className="title">{site.phone}</h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* left founder area */}
                                </div>
                                {/* about founder & get in touch end */}
                            </div>
                        </div>
                        {/* about right */}
                        {/* about-right Start*/}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-sm-1 order-1">
                            <div className="about-one-thumbnail">
                                <img
                                    src="/images/integrity-payments/home/business-brainstorming.jpg"
                                    alt="Business consultants reviewing operating solutions"
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
