import Image from "next/image";
import Link from "next/link";
import HeaderOne from "@/components/header/HeaderOne";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import { products, site, pageContent } from "@/data/siteContent";

export default function IntegrityPage({ slug }) {
  const content = pageContent[slug];

  if (!content) return null;

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/products" },
    { label: content.title },
  ];

  return (
    <>
      <HeaderOne />
      <Breadcrumb title={content.title} breadcrumbs={breadcrumbs} />

      <main>
        <div className="rts-service-details-area rts-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                <div className="service-detials-step-1">
                  {content.image ? (
                    <div className="thumbnail mb--40">
                      <img
                        src={content.image}
                        alt={content.imageAlt || content.title}
                        style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    </div>
                  ) : null}
                  
                  <h4 className="title">{content.showcaseTitle || content.title}</h4>
                  
                  {content.description ? <p className="disc">{content.description}</p> : null}
                  {content.intro ? <p className="disc">{content.intro}</p> : null}

                  {content.highlights?.length ? (
                    <div className="row g-5 mt--20 mb--40">
                      <div className="col-12">
                        <ul className="integrity-template-list mt--10">
                          {content.highlights.map((item) => (
                            <li key={item} style={{listStyle: 'none', marginBottom: '10px'}}>
                              <i className="far fa-check-circle" style={{color: '#e00a0a', marginRight: '10px'}} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}

                  {(() => {
                    const allCards = [...(content.detailBlocks || []), ...(content.sections || [])];
                    const displayCards = allCards.slice(0, 4);
                    
                    if (displayCards.length === 0) return null;

                    return (
                      <div className="row g-5 mt--30 mb--40" style={{ alignItems: 'stretch' }}>
                        {displayCards.map((card) => {
                          const title = card.label || card.title || card;
                          return (
                            <div className="col-lg-6 col-md-6" key={title}>
                              <article className="service-details-card" style={{ padding: '30px', border: '1px solid #f1f1f1', borderRadius: '8px', background: '#fff', height: '100%', minHeight: '420px', display: 'flex', flexDirection: 'column' }}>
                                {card.icon ? (
                                  <div className="icon-wrapper" style={{ marginBottom: '20px' }}>
                                    <i className={card.icon} style={{ fontSize: '40px', color: '#1a56db' }}></i>
                                  </div>
                                ) : card.image ? (
                                  <div className="thumbnail">
                                    <img src={card.image} alt={title} className="icon" />
                                  </div>
                                ) : null}
                                <div className="details" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                  <h6 className="title">{title}</h6>
                                  {card.description ? <p className="disc">{card.description}</p> : null}
                                  {card.summary ? <p className="disc">{card.summary}</p> : null}
                                  {card.bullets?.length ? (
                                    <ul className="integrity-template-list mt--10 mb--20">
                                      {card.bullets.map((item) => (
                                        <li key={item} style={{listStyle: 'circle', marginLeft: '20px', color: '#596170'}}>{item}</li>
                                      ))}
                                    </ul>
                                  ) : null}
                                  {card.href ? (
                                    <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                                      <Link className="rts-read-more btn-primary" href={card.href}>
                                        <i className="far fa-arrow-right" />
                                        Learn More
                                      </Link>
                                    </div>
                                  ) : null}
                                </div>
                              </article>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}
                </div>

                <div className="service-detials-step-2 mt--40">
                  <h4 className="title">3 Simple Steps to Find the Right Service Mix</h4>
                  <p className="disc mb--25">
                    Every business has a different mix of payment needs, staffing needs, capital needs, risk
                    exposure, and customer expectations. Our process keeps the conversation practical so your
                    services fit the way your team already works.
                  </p>

                  <div className="row mb--40 g-5 mb_md--20 mb_sm--20">
                    {[
                      { title: "Review Needs", description: "We learn how your business accepts payments, pays employees, manages cash flow, and serves customers." },
                      { title: "Match Services", description: "Your options are compared across cost, reliability, workflow, support, and future growth." },
                      { title: "Launch Support", description: "We help you move forward with the right service mix and a clear path for ongoing support." }
                    ].map((step, index) => (
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={step.title}>
                        <div className="single-service-step text-center">
                          <p className="step">{String(index + 1).padStart(2, "0")}</p>
                          <h6 className="title">{step.title}</h6>
                          <p className="disc">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-detials-step-3 mt--70 mt_md--50">
                  <div className="row g-5 align-items-center">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="thumbnail sm-thumb-service">
                        <img src="/images/integrity-payments/hero/payments-payroll-perfect.jpg" alt="Payments and payroll support" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb_md--20 mb_sm--20">
                      <h4 className="title">Customer Benefits</h4>
                      <p className="disc">
                        Resilient Payments is built for owners who want clear options, dependable service, and
                        business tools that help reduce operational headaches.
                      </p>
                      {[
                        "Reduce operating friction across daily business tasks",
                        "Connect core services through one trusted resource",
                        "Support growth with payments, funding, benefits, and digital tools"
                      ].map((benefit) => (
                        <div className="single-banifits" key={benefit}>
                          <i className="far fa-check-circle" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {content.faqs?.length ? (
                  <div className="service-detials-step-2 mt--40">
                    <h4 className="title">Common Questions</h4>
                    <div className="row mb--40 g-5 mb_md--20 mb_sm--20 mt--10">
                      <div className="col-12">
                        {content.faqs.map((faq) => (
                          <details key={faq.question} style={{ marginBottom: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', background: '#fff', overflow: 'hidden' }}>
                            <summary style={{ padding: '18px 24px', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f9f9f9', margin: 0 }}>
                              {faq.question}
                              <i className="far fa-chevron-down" style={{ fontSize: '14px', color: '#e00a0a' }}></i>
                            </summary>
                            <div style={{ padding: '20px 24px', borderTop: '1px solid #e5e7eb' }}>
                              <p className="disc mb--0">{faq.answer}</p>
                            </div>
                          </details>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 pl--50 pl_md--0 pl-lg-controler pl_sm--0">
                <div className="rts-single-wized Categories service">
                  <div className="wized-header">
                    <h5 className="title">Services/Products</h5>
                  </div>
                  <div className="wized-body">
                    {products.map((service) => (
                      <ul className="single-categories" key={service.title}>
                        <li>
                          <Link href={service.href}>
                            {service.title} <i className="far fa-long-arrow-right" />
                          </Link>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>

                <div className="rts-single-wized download service">
                  <div className="wized-header">
                    <h5 className="title">Quick Actions</h5>
                  </div>
                  <div className="wized-body">
                    <div className="single-download-area">
                      <img src="/assets/images/service/icon/07.svg" alt="" />
                      <div className="mid">
                        <h6 className="title">Service Consultation</h6>
                        <span>Talk with us</span>
                      </div>
                      <Link className="rts-btn btn-primary" href="/contact">
                        <i className="fal fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="single-download-area">
                      <img src="/assets/images/service/icon/08.svg" alt="" />
                      <div className="mid">
                        <h6 className="title">Partner Options</h6>
                        <span>Learn more</span>
                      </div>
                      <Link className="rts-btn btn-primary" href="/partner-with-us">
                        <i className="fal fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="rts-single-wized contact service">
                  <div className="wized-header">
                    <Link href="/">
                      <img src="/images/integrity-payments/resilient-logo.png" alt={site.name} style={{ width: '100%', maxWidth: '280px', height: 'auto', objectFit: 'contain' }} />
                    </Link>
                  </div>
                  <div className="wized-body">
                    <h5 className="title">Need Help? We Are Here To Help You</h5>
                    <Link className="rts-btn btn-primary" href="/contact">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterOne />
      <BackToTop />
    </>
  );
}
