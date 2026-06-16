"use client"
import React from 'react'
import Link from 'next/link';
import { footerLinks, products, site } from '@/data/siteContent';

function FooterOne() {
    const contactRowStyle = {
        display: 'block',
        marginBottom: '18px',
        minWidth: 0,
        width: '100%',
    };
    const contactLabelStyle = {
        color: '#fff',
        fontWeight: 700,
        lineHeight: 1.3,
        margin: '0 0 6px',
    };
    const contactValueStyle = {
        color: '#fff',
        lineHeight: 1.45,
        margin: 0,
        maxWidth: '100%',
        overflowWrap: 'anywhere',
        wordBreak: 'break-word',
    };
    const contactLinkStyle = {
        color: '#fff',
        display: 'inline-block',
        maxWidth: '100%',
        overflowWrap: 'anywhere',
        wordBreak: 'break-word',
    };

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
                                                <h3 className="title">Talk With Resilient Payments</h3>
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
                                    <h5 className="title">About Us</h5>
                                    <img src="/assets/images/footer/under-title.png" alt="" />
                                </div>
                                <div className="quick-link-inner">
                                    <p className="disc" style={{ color: '#fff', fontSize: '15px', lineHeight: '1.7', marginBottom: 0, maxWidth: '360px' }}>
                                        {site.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized margin-left-65">
                                <div className="wized-title">
                                    <h5 className="title">Quick Links</h5>
                                    <img src="/assets/images/footer/under-title.png" alt="" />
                                </div>
                                <div className="quick-link-inner">
                                    <ul className="links">
                                        {footerLinks.map((link) => (
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
                        <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized margin-left-65">
                                <div className="wized-title">
                                    <h5 className="title">Product Links</h5>
                                    <img src="/assets/images/footer/under-title.png" alt="" />
                                </div>
                                <div className="quick-link-inner">
                                    <ul className="links">
                                        {products.map((item) => (
                                            <li key={item.href}>
                                                <Link href={item.href}>
                                                    <i className="far fa-arrow-right" /> {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized mid-bg" style={{ overflow: 'hidden' }}>
                                <div className="wized-title">
                                    <h5 className="title">Get In Touch</h5>
                                    <img src="/assets/images/footer/under-title.png" alt="" />
                                </div>
                                <div className="opening-time-inner" style={{ minWidth: 0 }}>
                                    <div className="single-opening" style={contactRowStyle}>
                                        <p className="day" style={contactLabelStyle}>Phone</p>
                                        <p className="time" style={contactValueStyle}>
                                            <a href={site.phoneHref} style={contactLinkStyle}>{site.phone}</a>
                                        </p>
                                    </div>
                                    <div className="single-opening" style={contactRowStyle}>
                                        <p className="day" style={contactLabelStyle}>Email</p>
                                        <p className="time" style={contactValueStyle}>
                                            <a href={site.emailHref} style={contactLinkStyle}>{site.email}</a>
                                        </p>
                                    </div>
                                    <div className="single-opening mb--30 mb_sm--10" style={contactRowStyle}>
                                        <p className="day" style={contactLabelStyle}>Values</p>
                                        <p className="time" style={contactValueStyle}>The Golden Rule in Business</p>
                                    </div>
                                    <Link href="/contact" className="rts-btn btn-primary contact-us">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="integrity-copyright-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '15px' }}>
                                    <p className="integrity-powered-by" style={{ margin: 0 }}>
                                        Powered by{" "}
                                        <a href="https://theinnovations.tech/company" target="_blank" rel="noreferrer">
                                            The Innovations
                                        </a>
                                    </p>
                                    <div className="integrity-copyright-text" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                                        <p style={{ margin: '0 0 8px 0' }}>© 2025 Resilient Payments, Inc. All rights reserved.</p>
                                        <p style={{ margin: 0, fontSize: '12px', opacity: 0.8 }}>{site.partnerDisclosure}</p>
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

