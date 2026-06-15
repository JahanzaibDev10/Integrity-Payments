"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import BlogOneMain from './BlogOneMain';
import ErrorBoundary from "@/components/ErrorBoundary";
import { products } from '@/data/siteContent';
function BlogOne() {
    return (
        <ErrorBoundary>
            <div>

                {/* blog area start */}
                <div className="rts-blog-area rts-section-gap bg-secondary" id='blog-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-area text-center">
                                    <span>Products</span>
                                    <h2 className="title">More Resilient Payments Solutions</h2>
                                </div>
                            </div>
                        </div>
                        <div className="g-5 mt--20">
                            <div className="swiper ">
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="mySwiperh1_blog"
                                    speed={500}
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={true}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                        },
                                        640: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                    }}

                                >

                                    {products.slice(5).map((data, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                {
                                                        <BlogOneMain
                                                        blogID={data.href}
                                                        blogImage={data.image || `${index + 7 < 10 ? '0' : ''}${index + 7}.jpg`}
                                                        blogPublishedDate={data.title}
                                                        blogCategory="Resilient Payments"
                                                        blogTitle={data.summary}
                                                        href={data.href}
                                                    />
                                                }
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                {/* blog area end */}

            </div>
        </ErrorBoundary>
    )
}

export default BlogOne
