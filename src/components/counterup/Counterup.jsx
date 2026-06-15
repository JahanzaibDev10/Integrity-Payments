"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ErrorBoundary from "@/components/ErrorBoundary";
import { home } from '@/data/siteContent';

function Counterup() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once when in view
        threshold: 0.5, // 50% of the element needs to be visible for it to trigger
    });
    return (
        <ErrorBoundary>
        <div>
            <div className="rts-counter-up-area rts-section-gap counter-bg">
                <div className="container">
                    <div className="row">
                        {/* counter up area */}
                        {home.stats.map((stat, index) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={stat.label}>
                                <div className={`single-counter ${index === 1 ? "pl--10 justify-content-center two pl--30" : ""} ${index === 2 ? "pl--10 justify-content-center three pl--50" : ""} ${index === 3 ? "pl--10 justify-content-end four" : ""}`}>
                                    <img
                                        src={`assets/images/counterup/icon/0${index + 1}.svg`}
                                        alt=""
                                    />
                                    <div ref={ref} className="counter-details">
                                        {inView && (
                                            <h2 className="title counter animate__animated animate__fadeInDownBig">
                                                <CountUp start={0} end={stat.value} delay={0} duration={1} />{stat.suffix}
                                            </h2>
                                        )}
                                        <p className="disc">{stat.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
        </ErrorBoundary>
    )
}

export default Counterup
