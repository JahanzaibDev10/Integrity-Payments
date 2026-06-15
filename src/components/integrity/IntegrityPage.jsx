import Image from "next/image";
import Link from "next/link";
import HeaderOne from "@/components/header/HeaderOne";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import { pageContent } from "@/data/siteContent";

const cardTone = ["one", "two", "three", "four", "five", "six"];

const getFieldType = (field) => {
  const label = field.toLowerCase();

  if (label.includes("email") || label.includes("e-mail")) return "email";
  if (label.includes("phone") || label.includes("telephone") || label.includes("number")) return "tel";
  if (label.includes("zip")) return "text";
  return "text";
};

const getFieldName = (field) => field.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function IntegrityPage({ slug }) {
  const content = pageContent[slug];

  if (!content) return null;

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: content.title },
  ];

  return (
    <>
      <HeaderOne />
      <Breadcrumb title={content.title} breadcrumbs={breadcrumbs} />
      <main>
        <section className={`rts-service-area rts-section-gap integrity-page-${slug}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="rts-title-area integrity-page-title text-center" data-page-title={content.title}>
                  <p className="pre-title">Resilient Payments</p>
                  <h2 className="title">{content.title}</h2>
                  <p className="disc mt--20">{content.description}</p>
                  {content.cta ? (
                    <Link className="rts-btn btn-primary color-h-black mt--30" href="/contact">
                      {content.cta}
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>

            {content.testimonials ? (
              <div className="row g-5 mt--30">
                {content.testimonials.map((item) => (
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12" key={`${item.name}-${item.company}`}>
                    <article className="integrity-template-card">
                      <p className="disc">&quot;{item.quote}&quot;</p>
                      <h5 className="title mt--20">{item.name}</h5>
                      <span>{item.company}</span>
                    </article>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {content.image ? (
                  <div className="row align-items-center g-5 mt--50 integrity-service-showcase">
                    <div className="col-lg-6 col-md-12">
                      <div className="integrity-service-image">
                        <Image src={content.image} alt={content.imageAlt || content.title} width={1280} height={850} sizes="(max-width: 991px) 100vw, 50vw" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="integrity-service-copy">
                        <p className="pre-title">Built Around Your Business</p>
                        <h3 className="title">{content.showcaseTitle || content.title}</h3>
                        {content.intro ? <p className="disc">{content.intro}</p> : null}
                        {content.highlights?.length ? (
                          <ul className="integrity-template-list integrity-service-highlights">
                            {content.highlights.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : null}
                        <Link className="rts-btn btn-primary color-h-black mt--20" href="/contact">
                          Talk to an Advisor
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null}

                {content.detailBlocks?.length ? (
                  <div className="row g-5 mt--50">
                    {content.detailBlocks.map((block, index) => (
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12" key={block.title}>
                        <article className={`integrity-detail-block ${cardTone[index % cardTone.length]}`}>
                          {block.image ? (
                            <div className="integrity-detail-image">
                              <Image src={block.image} alt={block.title} width={720} height={480} sizes="(max-width: 991px) 100vw, 33vw" />
                            </div>
                          ) : null}
                          <div className="integrity-detail-copy">
                            <span>{block.kicker || "What You Get"}</span>
                            <h5>{block.title}</h5>
                            <p>{block.description}</p>
                            {block.bullets?.length ? (
                              <ul className="integrity-template-list">
                                {block.bullets.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                ) : null}

                {content.sections?.length ? (
                  <div className="row g-5 mt--30">
                    {content.sections.map((section, index) => (
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12" key={section.label || section.title || section}>
                        <article className={`service-one-inner ${cardTone[index % cardTone.length]} integrity-template-card`}>
                          <div className="service-details">
                            {section.href ? (
                              <Link href={section.href}>
                                <h5 className="title">{section.label || section.title || section}</h5>
                              </Link>
                            ) : (
                              <h5 className="title">{section.label || section.title || section}</h5>
                            )}
                            {section.description ? <p className="disc">{section.description}</p> : null}
                            {section.summary ? <p className="disc">{section.summary}</p> : null}
                            {section.bullets?.length ? (
                              <ul className="integrity-template-list">
                                {section.bullets.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            ) : null}
                            {section.href ? (
                              <Link className="rts-read-more btn-primary" href={section.href}>
                                <i className="far fa-arrow-right" />
                                Learn More
                              </Link>
                            ) : null}
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center mt--30">
                    <Link className="rts-btn btn-primary color-h-black" href="/contact">
                      Contact Us
                    </Link>
                  </div>
                )}

                {content.formFields?.length ? (
                  <div className="row mt--50 align-items-stretch integrity-contact-form-row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="contact-image-one integrity-contact-card">
                        <Image src="/images/integrity-payments/business-brainstorming.jpg" alt="Resilient Payments consultation" width={1280} height={850} sizes="(max-width: 991px) 100vw, 50vw" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="contact-form-area-one integrity-contact-card">
                        <div className="rts-title-area contact text-start">
                          <p className="pre-title">Contact Resilient Payments</p>
                          <h2 className="title">Send Us Your Details</h2>
                        </div>
                        <form id={`${slug}-contact-form`} action="#" method="post">
                          <div className="name-email">
                            {content.formFields.slice(0, 2).map((field) => (
                              <input
                                key={field}
                                type={getFieldType(field)}
                                placeholder={field}
                                name={getFieldName(field)}
                                required
                              />
                            ))}
                          </div>
                          {content.formFields.slice(2).map((field) =>
                            field.toLowerCase().includes("message") ||
                            field.toLowerCase().includes("why") ||
                            field.toLowerCase().includes("help") ? (
                              <textarea key={field} placeholder={field} name={getFieldName(field)} />
                            ) : (
                              <input key={field} type={getFieldType(field)} placeholder={field} name={getFieldName(field)} />
                            )
                          )}
                          <button type="submit" className="rts-btn btn-primary">
                            Submit Message
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                ) : null}

                {content.faqs?.length ? (
                  <div className="row mt--50">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="rts-title-area text-center mb--30">
                        <p className="pre-title">Helpful Details</p>
                        <h3 className="title">Common Questions</h3>
                      </div>
                      <div className="row g-4">
                        {content.faqs.map((faq) => (
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12" key={faq.question}>
                            <article className="integrity-faq-card">
                              <h5>{faq.question}</h5>
                              <p>{faq.answer}</p>
                            </article>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </section>
      </main>
      <FooterOne />
      <BackToTop />
    </>
  );
}
