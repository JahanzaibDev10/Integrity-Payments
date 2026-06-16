"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import ErrorBoundary from "@/components/ErrorBoundary";
import { home } from '@/data/siteContent';

function GalleryOne() {
    const featured = home.featuredSolutions;

    return (
        <ErrorBoundary>
            <div>
                <div className="rts-gallery-area rts-section-gap gallery-bg bg_image">
                    <div className="container">
                        <div className="row">
                            <div className="rts-title-area gallery text-start pl_sm--20">
                                <p className="pre-title">Popular Projects</p>
                                <h2 className="title">Our Completed Projects</h2>
                            </div>
                        </div>
                        <div className="row mt--45">
                            <div className="col-12">
                                <div className="swiper mygallery mySwipers">
                                    <Swiper
                                        modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                        className="mySwipers"
                                        speed={1500}
                                        effect='fade'
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        loop={true}
                                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                                    >
                                        {featured.map((item, index) => (
                                            <SwiperSlide key={item.href}>
                                                <div className="row g-5 w-g-100 integrity-gallery-equal-slide">
                                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex">
                                                        <div className="thumbnail-gallery">
                                                            <img src={item.image} alt={item.title} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex">
                                                        <div className="bg-right-gallery">
                                                            <div className="icon">
                                                                <img src="assets/images/gallery/icon/01.svg" alt="" />
                                                            </div>
                                                            <Link href={item.href}>
                                                                <h4 className="title">{item.title}</h4>
                                                            </Link>
                                                            <span>{item.category}</span>
                                                            <p className="disc">{item.description}</p>
                                                            <Link className="rts-btn btn-primary" href={item.href}>
                                                                Learn More
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                    <div className="swiper-pagination" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default GalleryOne
