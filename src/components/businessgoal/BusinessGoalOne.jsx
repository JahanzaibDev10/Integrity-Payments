"use client"
import React from 'react';
import Link from 'next/link';
import ErrorBoundary from "@/components/ErrorBoundary";
import { home, site } from '@/data/siteContent';

function BusinessGoalOne() {
    return (
        <ErrorBoundary>
            <div>
                <div className="rts-business-goal mt--0 rts-section-gapBottom" id='goal'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="business-goal-one">
                                    <img src="assets/images/business-goal/01.jpg" alt="" />
                                    <img className="small" src="assets/images/business-goal/sm-01.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 mt--35 mt_md--70 mt_sm--70">
                                <div className="business-goal-right">
                                    <div className="rts-title-area business text-start pl--30">
                                        <p className="pre-title">A One Stop Shop</p>
                                        <h2 className="title">Payments, payroll, funding, web, and business support</h2>
                                    </div>
                                    <div className="rts-business-goal pl--30">
                                        <div className="single-goal">
                                            <img src="assets/images/business-goal/icon/01.svg" alt="" className="thumb" />
                                            <div className="goal-wrapper">
                                                <h6 className="title">{home.benefits[0].title}</h6>
                                                <p className="disc">{home.benefits[0].description}</p>
                                            </div>
                                        </div>
                                        <div className="single-goal">
                                            <img src="assets/images/business-goal/icon/02.svg" alt="" className="thumb" />
                                            <div className="goal-wrapper">
                                                <h6 className="title">{home.benefits[2].title}</h6>
                                                <p className="disc">{home.benefits[2].description}</p>
                                            </div>
                                        </div>
                                        <div className="goal-button-wrapper mt--70">
                                            <Link href="/contact" className="rts-btn btn-primary color-h-black">
                                                Contact Us
                                            </Link>
                                            <div className="vedio-icone">
                                                <Link id="play-video" className="video-play-button" href={site.phoneHref}>
                                                    <span />
                                                    <span className="outer-text">{site.phone}</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default BusinessGoalOne
