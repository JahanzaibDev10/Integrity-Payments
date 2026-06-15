"use client"
import React from 'react'
import { site, home } from '@/data/siteContent'

function BrandOne() {
    return (
        <div>
            {/* start trusted client section */}
            <div className="rts-trusted-client rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-area-client text-center">
                                <p className="client-title">{site.footerValueProps.join("  |  ")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="client-wrapper-one">
                            {home.otherNeeds.map((need) => (
                                <a href="/products" key={need} aria-label={need}>
                                    <span>{need}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* end trusted client section */}

        </div>
    )
}

export default BrandOne
