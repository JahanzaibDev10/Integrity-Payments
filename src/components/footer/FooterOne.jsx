"use client"
import React from 'react'
import Link from 'next/link';
import { footerLinks, products, site } from '@/data/siteContent';

function FooterOne() {
    return (
        <div>
            <div className="rts-footer-area footer-one rts-section-gapTop bg-footer-one" id='f-contact'>
                <div className="container bg-shape-f1">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-cta-wrapper">
                                <div className="background-cta">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="cta-left-wrapepr">
                                                <p className="cta-disc">Payments. Payroll. Perfect.</p>
                                                <h3 className="title">Talk With Integrity Payments</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <form className="cta-input-arae">
                                                <input type="email" name="email" placeholder="Enter Email Address" required="" />
                                                <button type="submit" className="rts-btn btn-primary">
                                                    Request Information
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt--120 pt_sm--80 pb--80 pb_sm--40">
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized">
                                <div className="wized-title">
                                    <h5 className="title">Quick Links</h5>
                                    <img src="/assets/images/footer/under-title.png" alt="" />
                                </div>
                                <div className="quick-link-inner">
                                    <ul className="links">
                                        {footerLinks.slice(0, 3).map((link) => (
                                            <li key={link.href}>
                                                <Link href={link.href}>
                                                    <i className="far fa-arrow-right" /> {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="links margin-left-70">
                                        {footerLinks.slice(3).map((link) => (
                                            <li key={link.href}>
                                                <Link href={link.href}>
                                                    <i className="far fa-arrow-right" /> {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized mid-bg">
                                <div className="wized-title">
                                    <h5 className="title">Get In Touch</h5>
                                    <img src="/assets/images/footer/under-title.png" alt="" />
                                </div>
                                <div className="opening-time-inner">
                                    <div className="single-opening">
                                        <p className="day">Phone</p>
                                        <p className="time">{site.phone}</p>
                                    </div>
                                    <div className="single-opening">
                                        <p className="day">Email</p>
                                        <p className="time">{site.email}</p>
                                    </div>
                                    <div className="single-opening mb--30 mb_sm--10">
                                        <p className="day">Values</p>
                                        <p className="time">The Golden Rule in Business</p>
                                    </div>
                                    <Link href="/contact" className="rts-btn btn-primary contact-us">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized margin-left-65">
                                <div className="wized-title">
                                    <h5 className="title">Popular Solutions</h5>
                                    <img src="/assets/images/footer/under-title.png" alt="" />
                                </div>
                                <div className="post-wrapper">
                                    {products.slice(0, 2).map((item, index) => (
                                        <div className={`single-footer-post ${index === 0 ? "mb--30" : ""}`} key={item.href}>
                                            <div className="left-thumbnail">
                                                <img src={`/assets/images/footer/post/0${index + 1}.png`} alt="" />
                                            </div>
                                            <div className="post-right">
                                                <p><i className="fal fa-check" /> {item.bullets[0]}</p>
                                                <Link href={item.href}>
                                                    <h6 className="title">{item.title}</h6>
                                                </Link>
                                                <Link className="red-more" href={item.href}>
                                                    Learn More
                                                    <i className="far fa-arrow-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="integrity-copyright-wrap">
                                    <p className="integrity-powered-by">
                                        Powered by{" "}
                                        <a href="https://theinnovations.tech/company" target="_blank" rel="noreferrer">
                                            The Innovations
                                        </a>
                                    </p>
                                    <div className="integrity-copyright-text">
                                        <p>{site.legalName} - Copyright 2025. All rights reserved.</p>
                                        <p>{site.partnerDisclosure}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterOne
