"use client"
import React from 'react'
import Link from 'next/link';
import { products } from '@/data/siteContent';

function ServiceOne() {
    return (
        <div>
            <>
                <div className="rts-service-area rts-section-gapBottom" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="rts-title-area service text-center">
                                    <p className="pre-title">Our Services</p>
                                    <h2 className="title">Business Operating Solutions</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid service-main plr--120-service mt--50 plr_md--0 pl_sm--0 pr_sm--0">
                        <div className="background-service row">
                            {products.slice(0, 6).map((service, index) => (
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12" key={service.href}>
                                    <div className={`service-one-inner ${["one", "two", "three", "four", "five", "six"][index]}`}>
                                        <div className="thumbnail">
                                            <img src={service.icon} alt="" />
                                        </div>
                                        <div className="service-details">
                                            <Link href={service.href}>
                                                <h5 className="title">{service.title}</h5>
                                            </Link>
                                            <p className="disc">{service.summary}</p>
                                            <Link className="rts-read-more btn-primary" href={service.href}>
                                                <i className="far fa-arrow-right" />
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <div className="cta-one-bg col-12">
                                <div className="cta-one-inner">
                                    <div className="cta-left">
                                        <h3 className="title">
                                            Let us tailor-fit a low-cost solution for your business.
                                        </h3>
                                    </div>
                                    <div className="cta-right">
                                        <Link className="rts-btn btn-white" href="/contact">
                                            Request a Free Consultation
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default ServiceOne
