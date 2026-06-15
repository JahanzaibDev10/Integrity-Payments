"use client"
import React from 'react'
import { pageContent } from '@/data/siteContent'

function ContactForm() {
    return (
        <div>
            {/* contact area start */}
            <div className="rts-contact-area contact-one">
                <div className="container">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="contact-image-one">
                                <img src="assets/images/contact/01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="contact-form-area-one">
                                <div className="rts-title-area contact text-start">
                                    <p className="pre-title">Contact Resilient Payments</p>
                                    <h2 className="title">Request a Free Consultation</h2>
                                </div>
                                <div id="form-messages" />
                                <form id="contact-form" action="mailer.php" method="post">
                                    <div className="name-email">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            name="name"
                                            required=""
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            name="email"
                                            required=""
                                        />
                                    </div>
                                    <input type="text" placeholder="How can we help?" name="subject" />
                                    <textarea
                                        placeholder={pageContent.contact.description}
                                        name="message"
                                        defaultValue={""}
                                    />
                                    <button type="submit" className="rts-btn btn-primary">
                                        Submit Message
                                    </button>
                                </form>
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
