"use client"
import React from 'react'
import { pageContent } from '@/data/siteContent'

function ContactForm() {
    return (
        <div>
            {/* contact area start */}
            <div className="rts-contact-area contact-one integrity-home-contact-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 col-sm-12 col-12">
                            <div className="integrity-home-contact-card bg-white" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(28, 37, 57, 0.12)' }}>
                                <div className="contact-form-area-one" style={{ padding: '60px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div className="rts-title-area text-center mb--40">
                                        <p className="pre-title" style={{ color: '#e00a0a', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>Contact Resilient Payments</p>
                                        <h2 className="title d-none d-md-block" style={{ color: '#1c2539', fontSize: '36px', marginBottom: '24px' }}>Request a Free Consultation</h2>
                                    </div>
                                    <div id="form-messages" />
                                    <form id="contact-form" action="mailer.php" method="post">
                                        <div className="name-email">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                name="name"
                                                required=""
                                                style={{ height: '62px', borderRadius: '10px', fontSize: '15px' }}
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                name="email"
                                                required=""
                                                style={{ height: '62px', borderRadius: '10px', fontSize: '15px' }}
                                            />
                                        </div>
                                        <input 
                                            type="text" 
                                            placeholder="How can we help?" 
                                            name="subject" 
                                            style={{ height: '62px', borderRadius: '10px', fontSize: '15px', marginTop: '34px' }} 
                                        />
                                        <textarea
                                            placeholder={pageContent.contact.description}
                                            name="message"
                                            defaultValue={""}
                                            style={{ minHeight: '180px', borderRadius: '10px', fontSize: '15px', resize: 'vertical', marginTop: '34px' }}
                                        />
                                        <div className="text-center mt--30">
                                            <button type="submit" className="rts-btn btn-primary" style={{ minWidth: '200px' }}>
                                                Submit Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact area end */}
        </div>
    )
}

export default ContactForm
