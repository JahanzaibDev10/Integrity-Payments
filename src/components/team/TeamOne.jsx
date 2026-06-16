"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { teamMembers } from '@/data/siteContent';

function TeamOne() {
    return (
        <div>
            <div className="rts-team-area rts-section-gap bg-team integrity-home-team-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-title-area team text-center">
                                <p className="pre-title">Our Team</p>
                                <h2 className="title">Meet the Resilient Payments Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--0">
                        <Swiper
                            modules={[Navigation, Scrollbar, A11y, Autoplay]}
                            className="mySwiperh1_team"
                            speed={1500}
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            autoplay={true}
                            navigation={{ nextEl: '.rts-next', prevEl: '.rts-prev' }}
                            breakpoints={{
                                1200: { slidesPerView: 3 },
                                900: { slidesPerView: 2 },
                                768: { slidesPerView: 2 },
                                580: { slidesPerView: 1 },
                                0: { slidesPerView: 1 },
                            }}
                        >
                            {teamMembers.map((member) => (
                                <SwiperSlide key={member.name}>
                                    <div className="team-single-one-start">
                                        <div className="team-image-area">
                                            <Link href="/about-us">
                                                <img src={member.image} alt={member.name} />
                                                <div className="team-social">
                                                    <div className="main">
                                                        <i className="fal fa-plus" />
                                                    </div>
                                                    <div className="team-social-one">
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="single-details">
                                            <Link href="/about-us">
                                                <h5 className="title">{member.name}</h5>
                                            </Link>
                                            <p>{member.role}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamOne
