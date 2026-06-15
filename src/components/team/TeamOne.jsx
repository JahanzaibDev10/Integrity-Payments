"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { testimonials } from '@/data/siteContent';

const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "04.jpg"];

function TeamOne() {
    return (
        <div>
            <div className="rts-team-area rts-section-gap bg-team">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-title-area team text-center">
                                <p className="pre-title">Testimonials</p>
                                <h2 className="title">Businesses Using Resilient Payments</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--0">
                        <Swiper
                            modules={[Navigation, Scrollbar, A11y, Autoplay]}
                            className="mySwiperh1_team"
                            speed={1500}
                            slidesPerView={4}
                            spaceBetween={30}
                            loop={true}
                            autoplay={true}
                            navigation={{ nextEl: '.rts-next', prevEl: '.rts-prev' }}
                            breakpoints={{
                                1200: { slidesPerView: 4 },
                                900: { slidesPerView: 3 },
                                768: { slidesPerView: 2 },
                                580: { slidesPerView: 2 },
                                450: { slidesPerView: 1 },
                                0: { slidesPerView: 1 },
                            }}
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={`${item.name}-${item.company}`}>
                                    <div className="team-single-one-start">
                                        <div className="team-image-area">
                                            <Link href="/testimonials">
                                                <img src={`assets/images/team/tm/${images[index % images.length]}`} alt="" />
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
                                            <Link href="/testimonials">
                                                <h5 className="title">{item.name}</h5>
                                            </Link>
                                            <p>{item.company}</p>
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
