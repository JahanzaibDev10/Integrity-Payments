"use client"
import React from 'react'
import Link from 'next/link';
import { site } from '@/data/siteContent';

function MapOne() {
    return (
        <div>
            <div className="rts-map-area bg-light-white" id='address'>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="mapdetails-inner-one">
                                <div className="left-area single-wized">
                                    <h5 className="title">Get in touch</h5>
                                    <div className="details">
                                        <p>Sales, support, careers, and partnerships</p>
                                        <Link className="number" href={site.phoneHref}>
                                            {site.phone}
                                        </Link>
                                        <p className="time-header">Email:</p>
                                        <p className="time">
                                            <Link href={site.emailHref}>{site.email}</Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="right-area single-wized">
                                    <h5 className="title">Company Details</h5>
                                    <div className="details">
                                        <p>{site.legalName}</p>
                                        <Link href={site.url}>{site.url.replace("https://", "")}</Link>
                                        <p className="headoffice">Official Sales Agency & Partner</p>
                                        <p className="office">EPSG, LLC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="integrity-map-card">
                                <img src="/images/integrity-payments/online-payment.jpg" alt="Secure business payment support" />
                                <div>
                                    <h5>Nationwide Business Consultants</h5>
                                    <p>
                                        Resilient Payments supports merchants, referral partners, and
                                        strategic alliances with payment processing, payroll, lending,
                                        insurance, web, and operating solutions.
                                    </p>
                                    <Link className="rts-btn btn-primary" href="/contact">Start a Conversation</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapOne
