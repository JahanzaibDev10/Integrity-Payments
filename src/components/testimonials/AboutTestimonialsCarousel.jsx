"use client"
import React from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { testimonials } from "@/data/siteContent";
import styles from "../../app/(inner-page)/about-us/about-us.module.css";

function AboutTestimonialsCarousel() {
  return (
    <div className="about-testimonials-carousel-wrapper">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={{ nextEl: '.about-swiper-button-next', prevEl: '.about-swiper-button-prev' }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        className={styles.feedbackGrid}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <article className={styles.feedbackCard}>
              <div className={styles.feedbackHead}>
                <Image
                  src="/images/integrity-payments/resilient-logo.png"
                  alt="Resilient Payments"
                  width={220}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
                <div>
                  <h3>{item.name}</h3>
                  <span>{item.company}</span>
                </div>
              </div>
              <p>{item.quote}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom navigation arrows */}
      <div className="about-carousel-nav">
        <div className="about-swiper-button-prev"><i className="far fa-chevron-left"></i></div>
        <div className="about-swiper-button-next"><i className="far fa-chevron-right"></i></div>
      </div>
    </div>
  );
}

export default AboutTestimonialsCarousel;
