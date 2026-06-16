import Link from "next/link";
import Image from "next/image";
import HeaderOne from "@/components/header/HeaderOne";
import BackToTop from "@/components/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
import { pageContent, site } from "@/data/siteContent";

const contactCards = [
  {
    image: "assets/images/contact/01.png",
    icon: "assets/images/contact/shape/01.svg",
    label: "Call Us",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    image: "assets/images/contact/02.png",
    icon: "assets/images/contact/shape/02.svg",
    label: "Make A Quote",
    value: site.email,
    href: site.emailHref,
  },
  {
    image: "assets/images/contact/03.png",
    icon: "assets/images/contact/shape/03.svg",
    label: "Service Area",
    value: "Nationwide Business Support",
    href: "/products",
  },
];

export default function ContactUsPage() {
  const content = pageContent.contact;
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Contact Us" },
  ];

  return (
    <div>
      <HeaderOne />
      <Breadcrumb title="Contact Us" breadcrumbs={breadcrumbs} />

      <div className="rts-contact-area rts-section-gap">
        <div className="container">
          <div className="row g-5">
            {contactCards.map((card) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={card.label}>
                <div className="single-contact-one-inner">
                  <div className="thumbnail">
                    <Image src={`/${card.image}`} alt="" width={410} height={280} />
                  </div>
                  <div className="content">
                    <div className="icone">
                      <Image src={`/${card.icon}`} alt="" width={50} height={50} />
                    </div>
                    <div className="info">
                      <span>{card.label}</span>
                      <Link href={card.href}>
                        <h5>{card.value}</h5>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rts-contact-map-area">
        <div className="contaciner-fluid">
          <div className="row">
            <div className="col-12">
              <div className="contact-map-area-fluid integrity-contact-map">
                <div className="integrity-contact-map-panel">
                  <p className="pre-title">Nationwide Consultants</p>
                  <h3>{site.name} is ready to help.</h3>
                  <p>
                    Tell us what you need to improve: payments, payroll, POS,
                    lending, insurance, web development, or a strategic partner
                    program. We will route your request to the right advisor.
                  </p>
                  <Link className="rts-btn btn-primary color-h-black" href={site.phoneHref}>
                    Call {site.phone}
                  </Link>
                </div>
                <Image
                  className="location"
                  src="/assets/images/contact/shape/location.svg"
                  alt="Resilient Payments service area"
                  width={90}
                  height={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-contact-form-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-contact-fluid rts-section-gap">
                <div className="rts-title-area contact-fluid text-center mb--50">
                  <p className="pre-title">Get In Touch</p>
                  <h2 className="title">Needs Help? Let&apos;s Get in Touch</h2>
                  <p className="disc mt--20">{content.description}</p>
                </div>
                <div className="form-wrapper">
                  <div id="form-messages" />
                  <form id="contact-form">
                    <div className="name-email">
                      <input type="text" name="name" placeholder="Your Name" required />
                      <input type="email" name="email" placeholder="Email Address" required />
                    </div>
                    <div className="name-email">
                      <input type="tel" name="phone" placeholder="Phone Number" />
                      <input type="text" name="company" placeholder="Company" />
                    </div>
                    <input type="text" name="subject" placeholder="How can we help?" />
                    <textarea placeholder="Tell us about your business needs" name="message" defaultValue="" />
                    <button type="submit" className="rts-btn btn-primary">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterOne />
      <BackToTop />
    </div>
  );
}

