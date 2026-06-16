import Image from "next/image";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import styles from "./about-us.module.css";

export const metadata = {
  title: "About Us | Resilient Payments",
  description:
    "Resilient Payments brings decades of experience to your doorstep with honest business solutions for payments, payroll, insurance, lending, and more.",
};

const valuePoints = [
  "Decades of Experience",
  "Solid, Reliable Solutions",
  "Reduced Costs",
  "Impeccable Customer Support",
  "The Golden Rule in Business",
];

const services = [
  {
    title: "Payments",
    description:
      "Payment processing solutions for card-present, card-not-present, online, mobile, invoicing, and text-to-pay transactions with practical cost-saving support.",
    route: "/payments",
    image: "/images/integrity-payments/hero/accept-payments-anywhere.jpg",
    icon: "fas fa-credit-card",
  },
  {
    title: "POS Sytems",
    description:
      "Point-of-sale systems that help businesses process sales, improve checkout flow, manage daily operations, and support customer payment options.",
    route: "/pos-systems",
    image: "/images/integrity-payments/smartphone-payment.jpg",
    icon: "fas fa-cash-register",
  },
  {
    title: "Payroll",
    description:
      "Payroll support for employee payments, tax handling, HR assistance, time tracking, workers' compensation, and employee benefit administration.",
    route: "/payroll",
    image: "/images/integrity-payments/hero/payroll-hr.jpg",
    icon: "fas fa-users-cog",
  },
  {
    title: "The Champ Plan",
    description:
      "Employee value and retention support for eligible employers who want to strengthen benefits, support W2 employees, and improve workforce stability.",
    route: "/champ",
    image: "/images/integrity-payments/hero/payments-payroll-perfect.jpg",
    icon: "fas fa-medal",
  },
  {
    title: "Lending",
    description:
      "Business funding options including working capital, SBA loans, asset-based lending, equipment leasing, lines of credit, and cash advances.",
    route: "/lending",
    image: "/images/integrity-payments/hero/business-lending.jpg",
    icon: "fas fa-hand-holding-usd",
  },
  {
    title: "401 K",
    description:
      "Retirement plan support that helps businesses offer 401 K options and strengthen long-term employee financial wellness.",
    route: "/401-k",
    image: "/images/integrity-payments/home/business-brainstorming.jpg",
    icon: "fas fa-piggy-bank",
  },
  {
    title: "ATM Machines",
    description:
      "ATM machine solutions for retail and service businesses, including equipment, reporting, monitoring, support, and reliable customer access to cash.",
    route: "/atm",
    image: "/images/integrity-payments/hero/atm-machines.png",
    icon: "fas fa-money-check-alt",
  },
  {
    title: "Business Insurance",
    description:
      "Business protection options for liability, property, commercial auto, cyber, workers' compensation, employee benefits, and other coverage needs.",
    route: "/business-insurance",
    image: "/images/integrity-payments/hero/business-insurance.jpg",
    icon: "fas fa-shield-alt",
  },
  {
    title: "Website Development &SEO",
    description:
      "Website development, redevelopment, SEO, eCommerce, hosting, content updates, newsletters, live chat, and digital growth tools.",
    route: "/web-development",
    image: "/images/integrity-payments/hero/website-development.jpg",
    icon: "fas fa-laptop-code",
  },
];

const teamMembers = [
  {
    name: "James Reville",
    role: "Resilient Payments Agent",
    image: "/assets/images/team/tm/lg-01.jpg",
  },
  {
    name: "Theresa Hairston",
    role: "Resilient Payments Agent",
    image: "/assets/images/team/tm/lg-02.jpg",
  },
  {
    name: "Payments Consulting Team",
    role: "Business Solutions",
    image: "/assets/images/team/tm/lg-03.jpg",
  },
];

const faqs = [
  {
    question: "What makes Resilient Payments different?",
    answer:
      "Resilient Payments was founded on honest guidance, transparent business practices, and the Golden Rule in Business. We focus on helping clients reduce costs and find reliable solutions.",
  },
  {
    question: "What services does Resilient Payments provide?",
    answer:
      "Resilient Payments provides payments, POS sytems, payroll, The Champ Plan, lending, 401 K support, ATM machines, business insurance, and website development &SEO solutions.",
  },
  {
    question: "Can Resilient Payments help reduce business operating costs?",
    answer:
      "Yes. The company focuses on solutions that help businesses reduce costs, improve operations, and access trusted partners across multiple service areas.",
  },
  {
    question: "How can I get started?",
    answer:
      "You can contact the Resilient Payments team to discuss your business needs and find the right solution for your company.",
  },
];

export default function AboutUsPage() {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "About Us" },
  ];

  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About Us" breadcrumbs={breadcrumbs} />

      <main className={styles.aboutPage}>
        <section className={`${styles.introSection} rts-section-gap`}>
          <div className="container">
            <div className={`row g-5 align-items-stretch ${styles.introRow}`}>
              <div className={`col-lg-6 ${styles.introImageColumn}`}>
                <div className={styles.consultImageGroup}>
                  <Image
                    src="/images/integrity-payments/home/payment-smartphone.jpg"
                    alt="Resilient Payments customer payment support"
                    width={390}
                    height={500}
                    className={styles.leftIntroImage}
                    priority
                  />
                  <Image
                    src="/images/integrity-payments/home/business-brainstorming.jpg"
                    alt="Resilient Payments business consultation"
                    width={330}
                    height={460}
                    className={styles.rightIntroImage}
                  />
                  <div className={styles.playBadge}>
                    <i className="fas fa-play" />
                  </div>
                </div>
              </div>

              <div className={`col-lg-6 ${styles.introTextColumn}`}>
                <div className={styles.introTextPanel}>
                  <div className="rts-title-area">
                    <p className="pre-title">ABOUT RESILIENT PAYMENTS</p>
                    <h2 className="title">
                      Resilient Payments brings decades of experience to your doorstep
                    </h2>
                  </div>
                  <div className={styles.introCopy}>
                    <p>
                      Founded by Industry Executives from Fortune 500 companies in the
                      payments, payroll, and insurance spaces - our experience brings
                      your business a wealth of knowledge.
                    </p>
                  </div>
                  <div className={styles.valueBox}>
                    {valuePoints.map((point) => (
                      <div className={styles.valueBar} key={point}>
                        <div className={styles.valueBarHeader}>
                          <span>{point}</span>
                          <i className="far fa-check" />
                        </div>
                        <span className={styles.valueLine} />
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className={styles.redButton}>
                    Make an Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.servicesSection} rts-section-gap`}>
          <div className="container">
            <span className={styles.bigWatermark}>Services</span>
            <div className="row">
              <div className="col-12">
                <div className="text-center title-service-three">
                  <p className="pre-title">Services/Products</p>
                  <h2 className="title">Services/Products</h2>
                </div>
              </div>
            </div>
            <div className={styles.serviceGrid}>
              {services.map((service) => (
                <article className={styles.serviceCard} key={service.title}>
                  <Link href={service.route} className={styles.serviceImageLink}>
                    <Image
                      src={service.image}
                      alt={`${service.title} from Resilient Payments`}
                      width={420}
                      height={270}
                      className={styles.serviceImage}
                    />
                  </Link>
                  <div className={styles.serviceOverlay}>
                    <span className={styles.serviceIcon}>
                      <i className={service.icon} />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <Link href={service.route} className={styles.readMore}>
                    Read More <i className="fal fa-arrow-right" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2>Let's discuss how Resilient Payments can help make your business easier</h2>
              <Link href="/contact" className={styles.whiteButton}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <section className={`${styles.teamSection} rts-section-gap`}>
          <div className="container">
            <span className={styles.bigWatermark}>Members</span>
            <div className="row">
              <div className="col-12">
                <div className="rts-title-area team text-center">
                  <p className="pre-title">Professionals Team</p>
                  <h2 className="title">Professionals Team</h2>
                </div>
              </div>
            </div>
            <div className={styles.teamGrid}>
              {teamMembers.map((member) => (
                <article className={styles.teamCard} key={member.name}>
                  <div className={styles.teamImageWrap}>
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      width={420}
                      height={510}
                      className={styles.teamImage}
                    />
                    <div className={styles.teamSocial}>
                      <span>
                        <i className="fal fa-plus" />
                      </span>
                    </div>
                  </div>
                  <div className={styles.teamDetails}>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.faqSection} rts-section-gap`}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="title-area-faq">
                  <span className="sub">COMMON QUESTIONS</span>
                  <h2 className="title">
                    Business Support <br />
                    <span className="sm-title">
                      Questions <span>Answered</span>
                    </span>
                  </h2>
                </div>
                <div className={styles.faqList}>
                  {faqs.map((item, index) => (
                    <details className={styles.faqItem} key={item.question} open={index === 0}>
                      <summary>
                        <span>{String(index + 1).padStart(2, "0")}.</span>
                        {item.question}
                      </summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.faqCollage}>
                  <Image
                    src="/images/integrity-payments/support.png"
                    alt="Resilient Payments customer support"
                    width={360}
                    height={230}
                    className={styles.faqImageOne}
                  />
                  <Image
                    src="/images/integrity-payments/home/business-brainstorming.jpg"
                    alt="Resilient Payments business planning"
                    width={340}
                    height={290}
                    className={styles.faqImageTwo}
                  />
                  <Image
                    src="/images/integrity-payments/home/online-payment.jpg"
                    alt="Resilient Payments online payment solutions"
                    width={360}
                    height={220}
                    className={styles.faqImageThree}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.feedbackSection}>
          <div className="container">
            <span className={styles.bigWatermark}>Testimonial</span>
            <div className="row">
              <div className="col-12">
                <div className="rts-title-area reviews text-center">
                  <p className="pre-title">CUSTOMER TRUST</p>
                  <h2 className="title">Built On Integrity, Experience, And Support</h2>
                </div>
              </div>
            </div>
            <div className={styles.feedbackGrid}>
              {[0, 1].map((item) => (
                <article className={styles.feedbackCard} key={item}>
                  <div className={styles.feedbackHead}>
                    <Image
                      src="/images/integrity-payments/logo.png"
                      alt="Resilient Payments"
                      width={66}
                      height={66}
                    />
                    <div>
                      <h3>Resilient Payments</h3>
                      <span>Business Solutions Partner</span>
                    </div>
                  </div>
                  <p>
                    Resilient Payments is committed to earning your business and your
                    trust every single day through honest guidance, reliable solutions,
                    and customer-first support.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterOne />
      <BackToTop />
    </>
  );
}

