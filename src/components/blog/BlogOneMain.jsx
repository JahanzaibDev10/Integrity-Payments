import React from 'react'
import Link from 'next/link';

const BlogGridMain = (props) => {
    const { blogID, blogImage, blogTitle, blogPublishedDate, blogCategory, href } = props;
    const targetHref = href || `/blog-grid/${blogID}`;
    const imageSrc = blogImage?.startsWith('/') ? blogImage : `assets/images/blog/${blogImage}`;
    return (
        <>
            <div className="single-blog-one-wrapper">
                <div className="thumbnail">
                    <img src={imageSrc} alt="business_Blog" />
                    <div className="blog-badge">
                        <span>{blogPublishedDate ? blogPublishedDate : 'Charlie Doyle'}</span>
                    </div>
                </div>
                <div className="blog-content">
                    <p>
                        <span>{blogCategory || "Business Solution"} </span>/ Resilient Payments
                    </p>
                    <Link href={targetHref}>
                        <h5 className="title">
                            {blogTitle ? blogTitle : 'How to growing your business'}
                        </h5>
                    </Link>
                    <Link
                        className="rts-read-more btn-primary"
                        href={targetHref}
                    >
                        <i className="far fa-arrow-right" />
                        Learn More
                    </Link>
                </div>
            </div>
        </>

    )
}

export default BlogGridMain
