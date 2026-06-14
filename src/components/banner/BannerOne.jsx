"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import ErrorBoundary from "@/components/ErrorBoundary";
import { home } from '@/data/siteContent';
import styles from './BannerOne.module.css';

function HighlightTitle({ title, emphasis }) {
    if (!emphasis || !title.includes(emphasis)) {
        return <>{title}</>;
    }

    const [before, after] = title.split(emphasis);
    return (
        <>
            {before}<span>{emphasis}</span>{after}
        </>
    );
}

function BannerOne() {
    return (
        <ErrorBoundary>
            <div className={styles.heroWrapper} id='banner'>
                <Swiper
                    modules={[Navigation, EffectFade, Autoplay]}
                    className={styles.swiperContainer}
                    speed={1000}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    effect='fade'
                    navigation={{
                        prevEl: `.${styles.navPrev}`,
                        nextEl: `.${styles.navNext}`,
                    }}
                >
                    {home.slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <div className={`${styles.slideInner} ${styles[slide.className]}`}>
                                    <div className={styles.overlay}></div>
                                    <div className={`${styles.contentBox} ${isActive ? styles.activeContent : ''}`}>
                                        <p className={styles.preTitle}>
                                            <span>{slide.preTitle}</span>
                                        </p>
                                        <h1 className={styles.title}>
                                            <HighlightTitle title={slide.title} emphasis={slide.emphasis} />
                                        </h1>
                                        <p className={styles.description}>{slide.description}</p>
                                        <a href={slide.href} className={styles.ctaButton}>
                                            {slide.cta}
                                            <svg style={{ marginLeft: '8px', width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                    
                    <div className={styles.sliderNav}>
                        <div className={styles.navPrev}>
                            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        </div>
                        <div className={styles.navNext}>
                            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    </div>
                </Swiper>
            </div>
        </ErrorBoundary>
    )
}

export default BannerOne;
