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
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663151706353!5m2!1sen!2sbd"
                                width={600}
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapOne
