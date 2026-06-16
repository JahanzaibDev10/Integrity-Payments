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
                        <div className="row align-items-stretch">
                            <div className="col-xl-7 col-lg-6 d-flex">
                                <div className="business-goal-one integrity-business-goal-image integrity-consultancy-card">
                                    <img src="/images/integrity-payments/home/consultancy-built-success.png" alt="Resilient Payments consultancy" />
                                    <span className="integrity-consultancy-label">Get Consultancy</span>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 mt_md--70 mt_sm--70 d-flex">
                                <div className="business-goal-right">
                                    <div className="rts-title-area business text-start pl--30">
                                        <p className="pre-title">Just A Consultancy</p>
                                        <h2 className="title">{home.operationsTitle}</h2>
                                        <p className="disc mt--20">{home.operationsDescription}</p>
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
                                                    <span className="outer-text">Watch Video</span>
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
