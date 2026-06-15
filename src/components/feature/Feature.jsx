"use client"
import React from 'react'
import { home } from '@/data/siteContent'

function Feature() {
    return (
        <div>
            {/* rts features area start */}
            <div className="rts-feature-area rts-section-gap">
                <div className="container-fluid padding-controler plr--120">
                    <div className="row bg-white-feature  pt--120 pb--120">
                        <div className="col-xl-6 col-lg-12">
                            <div className="feature-left-area">
                                <img src="/images/integrity-payments/hero/accept-payments-anywhere.jpg" alt="Customer accepting secure payments anywhere" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="rts-title-area feature text-start pl--30 pl_sm--0">
                                <p className="pre-title">Credit Card Processing</p>
                                <h2 className="title feature-title">
                                    Resilient Payments makes <br />
                                    acceptance easy
                                </h2>
                                <p>
                                    Accept payments through face-to-face transactions, eCommerce,
                                    invoicing, mobile payments, subscription billing, and text-to-pay
                                    solutions with transparent support.
                                </p>
                            </div>
                            <div className="feature-one-wrapper pl--30 mt--40 pl_sm--0">
                                {home.paymentFeatures.slice(0, 4).map((feature) => (
                                    <div className="single-feature-one" key={feature}>
                                        <i className="fal fa-check" />
                                        <p>{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts features area end */}
        </div>
    )
}

export default Feature
