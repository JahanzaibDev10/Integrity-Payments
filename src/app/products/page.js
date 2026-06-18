import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import { products, site } from "@/data/siteContent";

export const metadata = {
  title: "Services | Resilient Payments",
  description:
    "Resilient Payments services for payments, POS systems, payroll, The Champ Plan, lending, 401 K, ATM machines, business insurance, and website development.",
};

const featuredCards = [
  {
    title: "One Business Partner",
    description: "Payments, payroll, POS, lending, insurance, ATM, 401 K, and web support in one practical conversation.",
    icon: "assets/images/service/icon/09.svg",
  },
  {
    title: "Cost-Conscious Guidance",
    description: "Solutions are reviewed with your bottom line, reliability, and daily workflow in mind.",
    icon: "assets/images/service/icon/10.svg",
  },
  {
    title: "Flexible Service Mix",
    description: "Choose one service or combine multiple products as your business needs change.",
    icon: "assets/images/service/icon/11.svg",
  },
  {
    title: "Customer-First Support",
    description: "Work with a team focused on practical answers, clear recommendations, and long-term fit.",
    icon: "assets/images/service/icon/12.svg",
  },
];

const processSteps = [
  {
    title: "Review Needs",
    description: "We learn how your business accepts payments, pays employees, manages cash flow, and serves customers.",
  },
  {
    title: "Match Services",
    description: "Your options are compared across cost, reliability, workflow, support, and future growth.",
  },
  {
    title: "Launch Support",
    description: "We help you move forward with the right service mix and a clear path for ongoing support.",
  },
];

const benefits = [
  "Reduce operating friction across daily business tasks",
  "Connect core services through one trusted resource",
  "Support growth with payments, funding, benefits, and digital tools",
];

export default function Page() {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Services" },
  ];

  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Services" breadcrumbs={breadcrumbs} />

      <main>
        <div className="rts-service-details-area rts-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                <div className="service-detials-step-1">
                  <div className="thumbnail">
                    <img
                      src="/images/integrity-payments/home/business-brainstorming.jpg"
                      alt="Resilient Payments service consultation"
                    />
                  </div>
                  <h4 className="title">Services/Products Built Around Your Business</h4>
                  <p className="disc">
                    Resilient Payments helps business owners simplify the daily work of running a company. From
                    payment acceptance and POS systems to payroll, lending, insurance, ATM machines, 401 K support,
                    and website development, our services are selected around how your business actually operates.
                  </p>
                  <p className="disc">
                    The goal is simple: reduce friction, improve reliability, protect your business, and give you
                    practical tools that can grow with your team. You can explore one service or build a broader
                    operating solution with guidance from people who understand the business side of payments,
                    payroll, lending, and support.
                  </p>

                  <div className="row g-5 mt--30 mb--40">
                    {featuredCards.map((card) => (
                      <div className="col-lg-6" key={card.title}>
                        <div className="service-details-card">
                          <div className="thumbnail">
                            <img src={card.icon} alt="" className="icon" />
                          </div>
                          <div className="details">
                            <h6 className="title">{card.title}</h6>
                            <p className="disc">{card.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
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
                      <img src="assets/images/service/icon/07.svg" alt="" />
                      <div className="mid">
                        <h6 className="title">Service Consultation</h6>
                        <span>Talk with us</span>
                      </div>
                      <Link className="rts-btn btn-primary" href="/contact">
                        <i className="fal fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="single-download-area">
                      <img src="assets/images/service/icon/08.svg" alt="" />
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

              <div className="col-12">
                <div className="row g-4 integrity-products-full-grid mt--40">
                  {products.map((service) => (
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" key={service.title}>
                      <article className="service-details-card">
                        <div className="thumbnail">
                          <img src={service.icon} alt="" className="icon" />
                        </div>
                        <div className="details">
                          <h6 className="title">{service.title}</h6>
                          <p className="disc">{service.summary}</p>
                          <Link className="rts-read-more btn-primary" href={service.href}>
                            <i className="far fa-arrow-right" />
                            Learn More
                          </Link>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-12">
                <div className="service-detials-step-2 mt--40">
                  <h4 className="title">3 Simple Steps to Find the Right Service Mix</h4>
                  <p className="disc mb--25">
                    Every business has a different mix of payment needs, staffing needs, capital needs, risk
                    exposure, and customer expectations. Our process keeps the conversation practical so your
                    services fit the way your team already works.
                  </p>

                  <div className="row mb--40 g-5 mb_md--20 mb_sm--20">
                    {processSteps.map((step, index) => (
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
                      {benefits.map((benefit) => (
                        <div className="single-banifits" key={benefit}>
                          <i className="far fa-check-circle" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
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
