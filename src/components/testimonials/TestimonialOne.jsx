"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ErrorBoundary from "@/components/ErrorBoundary";
import { testimonials } from '@/data/siteContent';

function TestimonialOne() {
    return (
        <ErrorBoundary>
            <div>
                <div className="rts-client-feedback integrity-home-testimonial-page">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12">
                                <div className="rts-title-area reviews text-start pl--30 pt--70 integrity-home-testimonial-copy">
                                    <p className="pre-title">Our Testimonials</p>
                                    <h2 className="title">Client Feedback</h2>
                                    <div className="swiper mySwipertestimonial">
                                        <Swiper
                                            modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                            className="mySwipers"
                                            speed={500}
                                            slidesPerView={1}
                                            spaceBetween={0}
                                            loop={true}
                                            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                                        >
                                            {testimonials.slice(0, 3).map((item) => (
                                                <SwiperSlide key={`${item.name}-${item.company}`}>
                                                    <div className="testimonial-inner">
                                                        <p className="disc text-start">"{item.quote}"</p>
                                                        <div className="testimonial-bottom-one">
                                                            <div className="thumbnail">
                                                                <img src="assets/images/testimonials/02.png" alt="" />
                                                            </div>
                                                            <div className="details">
                                                                <a href="#">
                                                                    <h5 className="title">{item.name}</h5>
                                                                </a>
                                                                <span>{item.company}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        <div className="swiper-button-next" />
                                        <div className="swiper-button-prev" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="rts-test-one-image-inner">
                                    <img src="assets/images/testimonials/01.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default TestimonialOne
