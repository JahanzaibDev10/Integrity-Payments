export const site = {
  name: "Resilient Payments",
  legalName: "Resilient Payments, Inc.",
  url: "https://resilientpayments.com",
  phone: "877-639-1000",
  phoneHref: "tel:+18776391000",
  email: "info@resilientpayments.com",
  emailHref: "mailto:info@resilientpayments.com",
  logo: "/images/integrity-payments/logo.png",
  footerLogo: "/images/integrity-payments/integrity-logo-white.png",
  favicon: "/images/integrity-payments/integrity-favicon.png",
  etaLogo: "/images/integrity-payments/eta-logo.png",
  description:
    "Resilient Payments, Inc. is a team of national business consultants connecting our clients to numerous beneficial partners and products.",
  partnerDisclosure:
    "Resilient Payments, Inc. is an official Sales Agency & Partner of EPSG, LLC, a registered ISO/MSP of Wells Fargo Bank & Merrick Bank.",
  footerValueProps: [
    "Decades of Experience",
    "Solid, Reliable Solutions",
    "Reduced Costs",
    "Impeccable Customer Support",
    "The Golden Rule in Business",
  ],
};

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/products",
    children: [
      { label: "Payments", href: "/payments" },
      { label: "POS Systems", href: "/pos-systems" },
      { label: "Payroll", href: "/payroll" },
      { label: "Lending", href: "/lending" },
      { label: "The Champ Plan", href: "/champ" },
      { label: "401 K", href: "/401-k" },
      { label: "ATM Machines", href: "/atm" },
      { label: "Business Insurance", href: "/business-insurance" },
      { label: "Website Development & SEO", href: "/web-development" },
    ],
  },
  {
    label: "Partner with us",
    href: "/partner-with-us",
    children: [
      { label: "Partnerships", href: "/partner-with-us" },
      { label: "Strategic Alliances", href: "/strategic-alliances" },
      { label: "Referral Partners", href: "/referral-partners-2" },
    ],
  },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export const productLinks = navigation.find(item => item.label === "Services")?.children?.filter(item => item.label !== "All Products") ?? [];

export const home = {
  slides: [
    {
      className: "one",
      preTitle: "Welcome! Start Growing Your Business Today",
      title: "Make Business Easier With Resilient Payments",
      emphasis: "Business Easier",
      description:
        "Best-in-class payment, payroll, lending, insurance, and web solutions with personalized service and transparent support.",
      cta: "Get Consultancy",
      href: "/products",
    },
    {
      className: "two",
      preTitle: "Accept Payments Securely",
      title: "Make Payment Acceptance Simple Anywhere",
      emphasis: "Payment Acceptance",
      description:
        "Card-present, eCommerce, invoicing, mobile, B2B/B2G, subscription, and text-to-pay solutions tailored to your business.",
      cta: "Get Consultancy",
      href: "/payments",
    },
    {
      className: "three",
      preTitle: "Pay Your Employees With Ease",
      title: "Make Payroll and HR Work With Confidence",
      emphasis: "Payroll and HR",
      description:
        "Dedicated U.S.-based payroll support, HR resources, tax services, time and attendance, benefits, and retirement plan options.",
      cta: "Get Consultancy",
      href: "/payroll",
    },
  ],
  overviewTitle: "We Make Operating Your Business Easier",
  overview:
    "Our mission at Resilient Payments is to provide customers with personalized service, practical business tools, and transparent recommendations. We tailor-fit low-cost solutions for merchants with honesty, clarity, and the Golden Rule in Business.",
  overviewBullets: [
    "Accept payments",
    "Pay your employees",
    "Take your business online",
    "Raise business capital",
    "Reduce operating costs",
    "Work with honesty and transparency",
  ],
  benefits: [
    {
      title: "A One Stop Shop",
      description:
        "We help you accept payments, pay employees, take your business online, insure your business, or raise business capital.",
      image: "/images/integrity-payments/shopping-cart.png",
    },
    {
      title: "Reduce Costs",
      description:
        "Reduce current business expenses and gain features, functionality, and flexibility without sacrificing your level of service.",
      image: "/images/integrity-payments/low-prices.png",
    },
    {
      title: "Integrity",
      description:
        "We do everything with the utmost Integrity. We practice the Golden Rule; it is the only way we know.",
      image: "/images/integrity-payments/support.png",
    },
  ],
  stats: [
    { value: 24, suffix: "/7", label: "Support Availability" },
    { value: 10, suffix: "+", label: "Service Categories" },
    { value: 25, suffix: "+", label: "Years of Industry Experience" },
    { value: 100, suffix: "%", label: "Integrity-First Approach" },
  ],
  operationsTitle: "Business support that fits the way you work",
  operationsDescription:
    "From the first transaction to payroll, benefits, lending, insurance, and digital tools, Resilient Payments helps owners simplify the daily work of running a business.",
  featuredSolutions: [
    {
      title: "Payments Built Around You",
      href: "/payments",
      image: "/images/integrity-payments/hero/accept-payments-anywhere.jpg",
      category: "Credit Card Processing, Text-to-Pay",
      description:
        "Accept payments in person, online, by invoice, by subscription, or by text with options designed around cost reduction and customer convenience.",
    },
    {
      title: "Payroll and HR Without the Guesswork",
      href: "/payroll",
      image: "/images/integrity-payments/hero/payroll-hr.jpg",
      category: "Payroll, HR, Benefits",
      description:
        "Get payroll, tax services, time and attendance, workers comp, employee benefits, and retirement support in one conversation.",
    },
    {
      title: "Capital, Coverage, and Growth Tools",
      href: "/lending",
      image: "/images/integrity-payments/hero/business-lending.jpg",
      category: "Lending, Insurance, Web",
      description:
        "Explore working capital, insurance support, websites, eCommerce, and tools that help your business move forward with confidence.",
    },
  ],
  insights: [
    {
      title: "401 K Options for Growing Teams",
      href: "/401-k",
      label: "401 K",
      summary:
        "Explore retirement plan support that can help strengthen employee confidence, hiring, and long-term retention.",
      image: "/images/integrity-payments/home/business-brainstorming.jpg",
    },
    {
      title: "Choosing Payment Tools for Modern Checkout",
      href: "/payments",
      label: "Payments",
      summary:
        "Compare in-person, online, mobile, invoice, recurring, and B2B payment options before choosing a processing setup.",
      image: "/images/integrity-payments/hero/accept-payments-anywhere.jpg",
    },
    {
      title: "Payroll Support That Keeps Owners Focused",
      href: "/payroll",
      label: "Payroll",
      summary:
        "Dedicated payroll and HR support can reduce manual work, improve reporting, and help teams get paid accurately.",
      image: "/images/integrity-payments/hero/payroll-hr.jpg",
    },
    {
      title: "Funding Options for the Next Business Move",
      href: "/lending",
      label: "Lending",
      summary:
        "Working capital, lines of credit, equipment financing, and SBA options can support expansion, inventory, or cash flow.",
      image: "/images/integrity-payments/hero/business-lending.jpg",
    },
  ],
  paymentFeatures: [
    "Face to Face Transactions",
    "eCommerce",
    "Business To Business",
    "Invoicing",
    "High Risk Accounts",
    "Mobile Payments",
    "EMV/Contactless",
    "Business To Government",
    "Subscription Billing",
    "Text-to-Pay solutions",
  ],
  otherNeeds: [
    "Payroll",
    "Human Resources",
    "Lending",
    "Business Insurance",
    "Business Tax Credits",
    "Website Design/eCommerce",
  ],
};

export const products = [
  {
    title: "Payments",
    href: "/payments",
    summary:
      "Lowered cost of acceptance, current payment technology, card-present and card-not-present solutions, high risk merchant support, and text to pay.",
    bullets: ["Lowered cost of acceptance", "Today's technology and solutions", "Card Present/Card Not Present", "High Risk Merchants", "Text To Pay"],
    icon: "assets/images/service/icon/01.svg",
    image: "/images/integrity-payments/hero/accept-payments-anywhere.jpg",
  },
  {
    title: "POS Systems",
    href: "/pos-systems",
    summary:
      "Point-of-sale systems for retail, restaurant, service, and mobile businesses that need reliable checkout, integrated payments, and clearer reporting.",
    bullets: ["Retail and restaurant workflows", "Integrated payments", "Contactless checkout", "Mobile payment options", "Business reporting"],
    icon: "assets/images/service/icon/02.svg",
    image: "/images/integrity-payments/smartphone-payment.jpg",
  },
  {
    title: "Payroll",
    href: "/payroll",
    summary:
      "Payroll services, human resource assistance, workers comp, time and attendance, 401(k), and employee benefits.",
    bullets: ["Payroll Services", "Human Resource assistance", "Workers Comp", "Time and Attendance", "401K", "Employee Benefits"],
    icon: "assets/images/service/icon/03.svg",
    image: "/images/integrity-payments/hero/payroll-hr.jpg",
  },
  {
    title: "Lending",
    href: "/lending",
    summary:
      "Working capital, SBA loans, asset based lending, equipment leasing, lines of credit, and cash advances.",
    bullets: ["Working Capital", "SBA Loans", "Asset Based Lending", "Equipment Leasing", "Lines of Credit", "Cash Advances"],
    icon: "assets/images/service/icon/05.svg",
    image: "/images/integrity-payments/hero/business-lending.jpg",
  },
  {
    title: "The Champ Plan",
    href: "/champ",
    summary:
      "Employee retention tools that can provide basic healthcare and prescriptions, help employees take home more pay, and create new employer revenue.",
    bullets: ["Employee Retention Tools", "Free basic healthcare and prescriptions", "Give employees a free pay raise", "No cost to you as the employer"],
    icon: "assets/images/service/icon/04.svg",
    image: "/images/integrity-payments/hero/payroll-hr.jpg",
  },
  {
    title: "401 K",
      href: "/401-k",
      summary:
        "Retirement plan support including traditional 401(k), Roth 401(k), Safe Harbor plans, and profit-sharing options for growing teams.",
      bullets: ["Traditional 401(k)", "Roth 401(k)", "Safe Harbor plans", "Profit-sharing plan options", "Employee retirement support"],
      icon: "assets/images/service/icon/06.svg",
      image: "/images/integrity-payments/home/business-brainstorming.jpg",
  },
  {
    title: "ATM Machines",
    href: "/atm",
    summary:
      "Retail and financial institution ATM sales and service, customized ATM solutions, access to cash, reporting, and reliable support.",
    bullets: ["Retail and FI ATM Sales & Services", "Customizable ATM solutions", "Access to cash", "24/7/365 support and reporting"],
    icon: "assets/images/service/icon/09.svg",
    image: "/images/integrity-payments/hero/atm-machines.png",
  },
  {
    title: "Business Insurance",
    href: "/business-insurance",
    summary:
      "Coverage support for liability, property, commercial auto, EPLI, employee benefits, workers comp, cyber, and more.",
    bullets: ["Liability", "Property", "Commercial Auto", "EPLI", "Employee benefits"],
    icon: "assets/images/service/icon/14.svg",
    image: "/images/integrity-payments/hero/business-insurance.jpg",
  },
  {
    title: "Website Development & SEO",
    href: "/web-development",
    summary:
      "Website starter packages through advanced eCommerce builds, hosting, newsletters, live chat, SEO, and digital marketing services.",
    bullets: ["Website starter packages", "Shopping Carts", "eCommerce", "Hosting", "SEO", "Live Chat"],
    icon: "assets/images/service/icon/15.svg",
    image: "/images/integrity-payments/hero/website-development.jpg",
  },
];

export const testimonials = [
  {
    quote:
      "Our Resilient Payments agent, James Reville, has been an integral part of the success of my business. He built a custom package that perfectly aligned with my operations, allowing me to focus on growth.",
    name: "Matthew Abrantes",
    company: "Patriotic Distributors",
  },
  {
    quote:
      "Thanks to Theresa Hairston for making the switch over to Resilient Payments very easy and effective for our business. Resilient Payments was able to work out a much lower discount rate than our previous provider.",
    name: "John Wisdom",
    company: "Quitman Health Services",
  },
  {
    quote:
      "We recently began working with Resilient Payments for our Payroll system. This has been the easiest system I have worked with. The platform is easy to navigate and the reporting is phenomenal.",
    name: "Shawn Lewis",
    company: "Christ's Church Kids",
  },
  {
    quote:
      "Resilient Payments has been such a great company to work with. The customer service is top notch, and everyone at Resilient Payments has been completely professional.",
    name: "Daniel Yaniv",
    company: "Lavelier",
  },
  {
    quote:
      "The pay-by-text processing is a very robust solution that our patients absolutely love. It offered our patients a better way to communicate while saving our staff time.",
    name: "Michelle Wilkinson",
    company: "Sparrow Psychological Services",
  },
];

export const teamMembers = [
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

export const pageContent = {
  products: {
    title: "Services",
    description:
      "Explore practical business services from Resilient Payments: payment processing, POS systems, payroll, The Champ Plan, lending, retirement support, ATM machines, business insurance, and website development.",
    cta: "Request a Service Consultation",
    image: "/images/integrity-payments/home/business-brainstorming.jpg",
    imageAlt: "Business owners reviewing Resilient Payments service options",
    showcaseTitle: "One Business Partner for Daily Operations",
    intro:
      "The right service mix should reduce friction, improve cash flow, protect the business, and make everyday operations easier. Resilient Payments helps owners compare options and choose tools that fit how they already work.",
    highlights: [
      "Payment, POS, payroll, lending, insurance, website, ATM, and retirement support",
      "Solutions tailored for brick-and-mortar, mobile, service, nonprofit, and eCommerce teams",
      "A consultative process focused on cost, reliability, support, and long-term fit",
    ],
    sections: products,
  },
  payments: {
    title: "Credit Card Processing",
    description:
      "Experience the very best in payment solutions with Resilient Payments. Whether you are a brick-and-mortar business or an eCommerce business, our tailored solutions make payments easier with Integrity and reliability.",
    cta: "Request a Free Consultation",
    image: "/images/integrity-payments/hero/accept-payments-anywhere.jpg",
    imageAlt: "Customer paying securely with a mobile card terminal",
    showcaseTitle: "Accept Payments Securely Anywhere",
    intro:
      "Give customers a smooth way to pay in store, online, by invoice, or by text. Resilient Payments helps match your business with practical payment tools, transparent reporting, and support that makes daily transactions feel simple.",
    highlights: ["In-person, online, mobile, invoice, and text-to-pay options", "Cost-reduction programs built around your business model", "Clear reporting with support from a real Resilient Payments advisor"],
    sections: [
      { title: "Eliminate or Reduce Processing Costs", icon: "fal fa-piggy-bank", bullets: ["Compliant Discount for Cash Programs", "Dual Pricing programs", "Visa compliant 3% surcharge programs", "Ecommerce cost reduction programs"] },
      { title: "Card Present, Card Not Present & eCommerce Solutions", bullets: ["Stand-alone terminals", "Self-service kiosks", "Point of Sale systems", "Mobile payment acceptance", "Contactless/Apple Pay/Tap to Pay/NFC", "QuickBooks payment integration", "Recurring billing", "Invoicing by text or email", "B2B/B2G solutions"] },
      { title: "High Risk Merchants", description: "If your business type is classified as high risk, we prefer to call you a specialty account. We may be able to help with CBD, dispensaries, nutraceuticals, MLM, travel, firearms, credit repair, and other specialty account types." },
      { title: "Text to Pay, Text to Give, Text to Donate", description: "Send invoices by email or text, offer easy text payment, create donation programs, and use QR codes to collect payments." },
      { title: "Business to Business, Business to Government", description: "Automate Level 2 and Level 3 processing to help qualifying card types reach lower interchange rates without manual effort." },
      { title: "Reporting and Customer Support", description: "Clear reporting with fees shown, premium and Tier 2 support available 24/7, and a Resilient Payments agent assigned directly to your account." },
    ],
  },
  "pos-systems": {
    title: "POS Systems",
    description:
      "Point of sale systems that help retail, restaurant, service, and mobile businesses accept payments while keeping operations organized.",
    cta: "Find the Right POS",
    image: "/images/integrity-payments/smartphone-payment.jpg",
    imageAlt: "Modern point of sale payment setup",
    showcaseTitle: "A Checkout Experience That Works the Way You Do",
    intro:
      "The right POS system should do more than process a card. It should help your team move faster, keep customers flowing, and connect payments with the tools you already use.",
    highlights: ["Retail, restaurant, mobile, and contactless payment options", "Self-service kiosks, terminals, and integrated payment tools", "QuickBooks and business workflow integrations"],
    sections: [
      { title: "Retail and Restaurant Ready", icon: "fal fa-store", description: "Match your front counter, table service, quick service, or mobile checkout workflow with reliable POS hardware and payment acceptance." },
      { title: "Integrated Payments", description: "Connect checkout, invoicing, contactless payments, and reporting so your sales activity is easier to manage." },
      { title: "Flexible Growth", description: "Add terminals, kiosks, mobile acceptance, or online payment options as your business grows." },
    ],
  },
  payroll: {
    title: "Get a Dedicated U.S. Based Representative",
    description:
      "Our payroll services go above and beyond by providing a dedicated U.S.-based representative who becomes part of your payroll management team.",
    cta: "Speak with a Payroll Agent Today",
    image: "/images/integrity-payments/hero/payroll-hr.jpg",
    imageAlt: "Payroll and HR team reviewing employee information",
    showcaseTitle: "Payroll Support With a Human Touch",
    intro:
      "Payroll should feel dependable, accurate, and easy to manage. Resilient Payments connects you with payroll and HR support designed to reduce manual work, improve confidence, and keep your team paid on time.",
    highlights: ["Dedicated U.S.-based payroll support", "Payroll tax, time and attendance, HR, and workers comp options", "Employee benefits and retirement support in one conversation"],
    sections: [
      { title: "Traditional or Internet Payroll", icon: "fal fa-laptop-code", description: "We provide traditional payroll services and internet payroll services customized to reduce your workload and simplify operations." },
      { title: "Human Resources", description: "Reliable advice on hiring, onboarding, compliance, performance management, compensation and benefits, termination, and more." },
      { title: "Payroll Tax Services", description: "We deposit tax liabilities on your behalf and assume responsibility for accuracy and timeliness of payroll tax deposits and filings." },
      { title: "Time & Attendance", description: "Import payroll information from time and attendance into your payroll account to save time and reduce data entry errors." },
      { title: "Worker's Comp Payment Services", description: "Easy workers comp payment service that does not require a large deposit or difficult audit." },
      { title: "Employee Benefits and Retirement Plans", description: "Integrated benefits, traditional and Roth 401(k)s, 403(b)s, Safe Harbor plans, and profit-sharing plan options." },
    ],
  },
  "401-k": {
    title: "401 K",
    description:
      "Retirement plan support for employers who want to offer meaningful benefits without making the process harder than it needs to be.",
    cta: "Discuss Retirement Plans",
    image: "/images/integrity-payments/hero/payroll-hr.jpg",
    imageAlt: "Business team discussing employee retirement benefits",
    showcaseTitle: "Help Employees Plan for What Comes Next",
    intro:
      "A thoughtful retirement plan can strengthen hiring, retention, and employee confidence. We help you explore practical 401(k) options that fit your team and your operating needs.",
    highlights: ["Traditional and Roth 401(k) options", "Safe Harbor and profit-sharing plan support", "Employee benefit conversations connected with payroll support"],
    sections: [
      { title: "Plan Options", icon: "fal fa-clipboard-list", description: "Explore traditional 401(k), Roth 401(k), Safe Harbor, and profit-sharing choices that align with your business." },
      { title: "Employee Value", description: "Offer benefits that help employees feel more secure while strengthening your overall compensation package." },
      { title: "Connected Support", description: "Coordinate retirement plan conversations alongside payroll, benefits, and HR needs." },
    ],
  },
  lending: {
    title: "Working Capital for Business Owners",
    description:
      "Assisting business owners to get the working capital they need to maintain and grow their businesses without all the headaches.",
    cta: "See What You Qualify For",
    image: "/images/integrity-payments/hero/business-lending.jpg",
    imageAlt: "Business owner reviewing lending and working capital options",
    showcaseTitle: "Capital for the Next Move",
    intro:
      "Whether you are managing cash flow, expanding, buying equipment, or refinancing debt, the right funding path can give your business room to breathe and grow.",
    highlights: ["Working capital, SBA loans, lines of credit, and equipment financing", "Options for growth, refinancing, inventory, and daily operations", "Guidance that helps you compare practical funding routes"],
    sections: [
      { title: "SBA Loans", icon: "fal fa-hand-holding-usd", description: "Save up to thousands monthly by refinancing high-interest business debt with an SBA loan." },
      { title: "Business Line of Credit", description: "Pay interest only on the funds you are using. A line is useful for inventory, marketing, and day-to-day operations." },
      { title: "Contract Financing", description: "Close more business by accessing funds for supplier needs or by getting paid faster on current account receivables." },
      { title: "Short-Term Working Capital", description: "Options for businesses with at least six months in business and $25k per month in deposits." },
      { title: "Commercial Real Estate or Rental Financing", description: "Stop leasing your space and buy your own building with as little as 10% down." },
      { title: "Equipment Financing & Sales Leasebacks", description: "If you own equipment outright and need cash, consider a sale/leaseback to get the cash you need." },
    ],
  },
  champ: {
    title: "The CHAMP Plan",
    description:
      "Employee retention tools for employers with W2 employees who want to attract and retain valuable team members.",
    cta: "Need Help with Employee Retention?",
    image: "/images/integrity-payments/business-brainstorming.jpg",
    imageAlt: "Team planning employee retention benefits",
    showcaseTitle: "Retention Benefits That Can Help Everyone Win",
    intro:
      "The CHAMP Plan is designed for employers who want to improve employee value without adding unnecessary complexity. It can support retention, take-home pay, and basic healthcare access.",
    highlights: ["Employee retention tools for W2 teams", "Potential basic healthcare and prescription benefits", "Designed to support employees while helping employers manage cost"],
    sections: [
      { title: "Employers Get Benefits Without Additional Costs", description: "Give free basic benefits to employees, improve retention, and use new capital for growth, debt reduction, or current financial needs." },
      { title: "Employees Get More Take-Home Pay", description: "Employees may receive additional bring-home pay and basic medical benefits with no cost and no co-pay." },
      { title: "Enhanced Benefits", description: "The plan can enhance current benefits by eliminating some out-of-pocket costs without interfering with existing benefits." },
    ],
  },
  "text-message-tools": {
    title: "401 K",
    description:
      "Retirement plan support including traditional 401(k), Roth 401(k), Safe Harbor plans, and profit-sharing options.",
    cta: "Learn More",
    image: "/images/integrity-payments/home/business-brainstorming.jpg",
    imageAlt: "401 K retirement plan support",
    showcaseTitle: "Support Long-Term Employee Financial Wellness",
    intro:
      "A thoughtful retirement plan can strengthen hiring, retention, and employee confidence while keeping the conversation practical for business owners.",
    highlights: ["Traditional and Roth 401(k) options", "Safe Harbor and profit-sharing plan support", "Employee benefit conversations connected with payroll support"],
    sections: [
      { title: "Plan Options", description: "Explore traditional 401(k), Roth 401(k), Safe Harbor, and profit-sharing choices that align with your business." },
      { title: "Employee Confidence", description: "Retirement support can help employees plan for the future and strengthen long-term retention." },
      { title: "Business-Focused Guidance", description: "Get practical guidance around retirement benefit conversations without unnecessary complexity." },
    ],
  },
  "web-development": {
    title: "Website Development",
    description:
      "Resilient Payments can assist with website development, design, eCommerce, and digital marketing services.",
    cta: "Speak to a Designer",
    image: "/images/integrity-payments/hero/website-development.jpg",
    imageAlt: "Website development and ecommerce planning",
    showcaseTitle: "A Better Online Home for Your Business",
    intro:
      "Your website should help customers understand, trust, and buy from you. From starter websites to eCommerce builds, we help turn your online presence into a cleaner business tool.",
    highlights: ["Starter, standard, and professional website packages", "eCommerce, shopping cart, hosting, and live chat options", "Digital marketing and SEO support for growth"],
    sections: [
      { title: "Developer Support", description: "Support is available when content updates need to be made." },
      { title: "Shopping Carts and eCommerce", description: "Standard and Professional packages integrate shopping cart technology and eCommerce into your website." },
      { title: "On Time Delivery", description: "After consultation, you receive a development timeframe and a set number of modifications and changes." },
      { title: "Cost Effective", description: "Pay less and get more than many basic and complex eCommerce website options." },
      { title: "Web Design Packages", bullets: ["Starter informational website", "Standard eCommerce website", "Professional POS and online store connectivity"] },
    ],
  },
  atm: {
    title: "ATM Machines",
    description: "Need an ATM machine in your business? Contact Resilient Payments for MobilePay ATM services.",
    cta: "Speak with our ATM division",
    image: "/images/integrity-payments/hero/atm-machines.png",
    imageAlt: "ATM machine service and equipment",
    showcaseTitle: "Reliable ATM Solutions for Busy Locations",
    intro:
      "An ATM can improve convenience for customers while supporting cash access and business traffic. Resilient Payments helps with ATM equipment, processing, monitoring, and support.",
    highlights: ["ATM sales, service, processing, and equipment support", "Remote monitoring, reporting, eJournal, and settlement options", "Branding, wraps, toppers, and advertising tools"],
    sections: [
      { title: "Partnership Solutions", description: "Partnership solutions for merchants and operators nationwide." },
      { title: "Processor Support", description: "Servicing on behalf of nationwide processors." },
      { title: "Settlement Options", description: "Customized settlement solutions, including next-day settlement options." },
      { title: "ATM Processing, Equipment, Support", bullets: ["Free realtime reporting", "Remote ATM monitoring", "eJournal", "Wholesale equipment pricing", "EMV compliant", "Cash Assist Program", "Branding solutions", "ATM wraps, toppers, and advertising tools"] },
    ],
  },
  "business-insurance": {
    title: "Business Insurance",
    description: "Need business insurance? Resilient Payments can help connect you with coverage support.",
    cta: "Submit Insurance Request",
    image: "/images/integrity-payments/hero/business-insurance.jpg",
    imageAlt: "Business insurance coverage planning",
    showcaseTitle: "Coverage Support for the Unexpected",
    intro:
      "Protecting a business means thinking beyond one policy. We help connect owners with coverage conversations for liability, property, cyber, workers comp, employee benefits, and more.",
    highlights: ["Coverage support for liability, property, auto, cyber, and workers comp", "Options for group health, professional coverage, and business interruption", "A simpler path to request the coverage conversation you need"],
    sections: [
      { title: "Coverage Options", bullets: ["Workers Comp", "General Liability", "Commercial Property", "Commercial Auto", "Professional", "Cyber", "Business Interruption", "Errors and Omissions", "Garage Keepers", "Directors", "Product", "Property", "Group Health", "Home Based Businesses", "Business Owner's Policies"] },
    ],
    formFields: ["DBA Name", "Contact Name", "Best number to reach", "Email address", "Website Link", "Type of Insurance requested", "Resilient Payments Sales Agent", "Best time for our Insurance Expert to call you"],
  },
  "partner-with-us": {
    title: "Partner With Us",
    description:
      "Resilient Payments believes in true win/win partnerships. We make partnerships easy and represent referral partners with professionalism and Integrity.",
    cta: "Start a Partnership Conversation",
    image: "/images/integrity-payments/partner-with-us.png",
    imageAlt: "Partner with Resilient Payments",
    showcaseTitle: "Partnerships Built on Trust and Follow-Through",
    intro:
      "Your referrals and customer relationships deserve careful handling. Resilient Payments works to protect your reputation while giving your clients access to useful business operating solutions.",
    highlights: [
      "Professional follow-up with your referred clients",
      "Payment, payroll, lending, web, ATM, insurance, and messaging solutions",
      "Programs for strategic alliances, referral partners, and sales organizations",
    ],
    sections: [
      {
        title: "Strategic Alliances",
        description: "A fit for organizations that already serve merchants and want to expand their customer value.",
        bullets: ["Banks/Financial Institutions", "Software Companies", "Point of Sale Companies", "Payment Gateways", "Agent/Reseller Programs"],
      },
      {
        title: "Referral Partners",
        description: "A straightforward way to introduce business owners to helpful services without becoming the service provider yourself.",
        bullets: ["Associations", "Accountants", "Business to Business Companies", "Business Attorneys", "People who know a lot of business owners"],
      },
    ],
    formFields: ["Name", "Company", "Phone Number", "Email Address", "Partnership Type", "Tell us about your clients or network"],
  },
  "strategic-alliances": {
    title: "Strategic Alliances",
    description:
      "If you are a bank, financial institution, software company, point of sale company, gateway solution, or someone seeking an agent/reseller deal, you have come to the right place.",
    sections: [
      {
        title: "We Will Take Care of Your Customers",
        description: "Aligning with Resilient Payments can offer your merchants best-in-class solutions, low rates, no hidden fees, excellent customer service, and a stronger relationship with your business.",
        bullets: ["Merchant-first consultation", "Transparent service discussions", "Support for payments, payroll, lending, insurance, and web needs"],
      },
      {
        title: "Alliance Fit",
        description: "Ideal for organizations that want a dependable service partner without building every solution internally.",
        bullets: ["Financial institutions", "Software platforms", "Point of sale vendors", "Payment gateways", "Agent and reseller programs"],
      },
    ],
    formFields: ["Name", "Company", "Phone Number", "Email Address", "Why I am a good fit for a partnership with Integrity"],
  },
  "referral-partners-2": {
    title: "Referral Partners",
    description:
      "If you are an association, accounting firm, B2B company, legal firm, consultant, or simply know business owners, partnering with Resilient Payments may be one of the best decisions you make.",
    sections: [
      {
        title: "White Glove Referral Support",
        description: "Resilient Payments will take care of your referral customers, build custom solutions for their specific needs, offer affordable costs, and provide White Glove Treatment.",
        bullets: ["Respectful client outreach", "Needs-based solution matching", "Ongoing support after the introduction"],
      },
      {
        title: "Who Makes a Strong Referral Partner",
        description: "If your work puts you near business owners, operators, or decision makers, a referral partnership can create value for everyone involved.",
        bullets: ["Associations", "Accounting firms", "Consultants", "Legal firms", "Business service providers"],
      },
    ],
    formFields: ["Name", "Company", "Phone Number", "Email Address", "Why I am a good fit for a partnership with Integrity"],
  },
  careers: {
    title: "Careers",
    description:
      "Seeking the final stop in your sales or sales management career? Resilient Payments offers lifetime residuals at some of the industry's highest payouts, with options for large upfront bonuses on your deals.",
    cta: "Learn More",
    image: "/images/integrity-payments/home/online-payment.jpg",
    imageAlt: "Sales professional discussing business service opportunities",
    showcaseTitle: "A Sales Career Built Around Real Business Value",
    intro:
      "If you want to build a book of business around services owners actually need, Resilient Payments gives you a broad product set, consultative positioning, and long-term residual opportunity.",
    highlights: [
      "Payment, payroll, lending, insurance, web, ATM, and messaging solutions",
      "Referral-source development and relationship-driven selling",
      "Lifetime residual opportunities and strong payout potential",
    ],
    sections: [
      { title: "Build Referral Sources and Networks", description: "Create relationships with people and organizations that already know business owners.", bullets: ["Your referral partner wins", "Your portfolio and income win", "Most importantly, your customers win"] },
      { title: "Careers at Resilient Payments", description: "Because we think you are worth it. If you take care of your people, your people will take care of you.", bullets: ["Consultative selling", "Multiple service categories", "Long-term account value"] },
    ],
    formFields: ["Name", "Phone Number", "Email Address", "Sales Experience", "Preferred Market", "Tell us why you are interested"],
  },
  "about-us": {
    title: "About Us",
    description:
      "Resilient Payments brings decades of experience to your doorstep. Founded by industry executives from Fortune 500 companies in payments, payroll, and insurance, our experience brings your business a wealth of knowledge.",
    cta: "Talk With Our Team",
    image: "/images/integrity-payments/home/business-brainstorming.jpg",
    imageAlt: "Resilient Payments business consultation",
    showcaseTitle: "Experience, Transparency, and the Golden Rule",
    intro:
      "Business owners deserve clear recommendations and service that feels human. Resilient Payments was built to combine industry knowledge with the kind of direct, respectful support owners should expect.",
    highlights: [
      "Decades of experience across payments, payroll, insurance, and business services",
      "A practical one-stop approach for owners who want fewer vendor headaches",
      "A company philosophy centered on honesty, transparency, and Integrity",
    ],
    sections: [
      { title: "Why This Matters", description: "We know the games competitors play to pad profits while customers unknowingly pay the price. We refuse to operate this way. Being honest is our greatest strategy and biggest advantage.", bullets: ["Clear conversations", "No unnecessary complexity", "Recommendations based on fit"] },
      { title: "The Golden Rule in Business", description: "Our company was founded on the philosophy of always practicing the Golden Rule in Business. This means treating customers, partners, and sales agents exactly the way we would expect to be treated.", bullets: ["Respectful service", "Transparent guidance", "Long-term relationships"] },
      { title: "Welcome", description: "Resilient Payments always has your best interest at heart. We want to earn your business and your trust every single day.", bullets: ["Payments", "Payroll", "Lending", "Insurance", "Web and messaging tools"] },
    ],
  },
  testimonials: {
    title: "Testimonials",
    description: "Hear from businesses that use Resilient Payments for processing, payroll, funding, and other essential business services.",
    testimonials,
  },
  contact: {
    title: "Contact Us",
    description:
      "Share a few details about your business and the type of support you need. A Resilient Payments advisor can help with payments, POS, payroll, lending, insurance, web development, ATM machines, text tools, partnerships, or careers.",
    formFields: ["Name", "Email Address", "Phone Number", "Company", "How can we help?", "Message"],
  },
};

Object.assign(pageContent.payments, {
  detailBlocks: [
    {
      kicker: "Payment Channels",
      title: "Take Payments Wherever Customers Are",
      icon: "fal fa-credit-card",
      description: "Support in-store, online, mobile, invoice, subscription, B2B/B2G, and text-to-pay workflows without forcing every customer into one checkout path.",
      bullets: ["Card present and card not present", "Contactless and mobile acceptance", "Recurring, invoice, and text payment options"],
    },
    {
      kicker: "Cost Control",
      title: "Programs Built Around Your Margins",
      icon: "fal fa-chart-pie",
      description: "We help review your current acceptance setup and discuss compliant cost-reduction programs that fit your business model.",
      bullets: ["Dual pricing options", "Surcharge and discount-for-cash conversations", "Ecommerce cost-reduction review"],
    },
    {
      kicker: "Support",
      title: "Clear Reporting and Real Help",
      icon: "fal fa-headset",
      description: "Payment tools work best when reporting is understandable and support is reachable. Resilient Payments focuses on both.",
      bullets: ["Assigned advisor support", "Transparent fee conversations", "Premium and Tier 2 support options"],
    },
    {
      kicker: "Eliminate Costs",
      title: "Eliminate or Reduce Processing Costs",
      icon: "fal fa-piggy-bank",
      bullets: ["Compliant Discount for Cash Programs", "Dual Pricing programs", "Visa compliant 3% surcharge programs", "Ecommerce cost reduction programs"],
    },
  ],
  faqs: [
    { question: "Can you support both retail and online payments?", answer: "Yes. Resilient Payments can help with terminals, POS, eCommerce, invoicing, recurring billing, mobile payments, and text-to-pay." },
    { question: "Do you work with specialty or high-risk merchants?", answer: "We may be able to help specialty account types by reviewing the business model and matching it with suitable processing options." },
  ],
});

Object.assign(pageContent["pos-systems"], {
  detailBlocks: [
    {
      kicker: "Checkout",
      title: "POS Tools for Faster Daily Sales",
      icon: "fal fa-cash-register",
      description: "Choose checkout tools that match the way your staff works: countertop, mobile, contactless, kiosk, restaurant, retail, or service-based workflows.",
      bullets: ["Retail and restaurant options", "Mobile and countertop acceptance", "Self-service kiosk possibilities"],
    },
    {
      kicker: "Operations",
      title: "Connect Payments With Your Workflow",
      icon: "fal fa-sync-alt",
      description: "A useful POS system should help organize transactions, reporting, customer convenience, and integrations rather than only taking a card.",
      bullets: ["QuickBooks payment integration", "Invoicing and reporting", "Contactless, Apple Pay, Tap to Pay, and NFC"],
    },
    {
      kicker: "Growth",
      title: "Add Tools as Your Business Changes",
      icon: "fal fa-expand-arrows-alt",
      description: "As your business grows, your checkout can expand into online payments, mobile terminals, kiosks, or integrated service tools.",
      bullets: ["Add locations or terminals", "Support online and in-person sales", "Build around your customer experience"],
    },
    {
      kicker: "Restaurant",
      title: "Retail and Restaurant Ready",
      icon: "fal fa-store",
      description: "Match your front counter, table service, quick service, or mobile checkout workflow with reliable POS hardware and payment acceptance.",
    },
  ],
  faqs: [
    { question: "Can a POS system work with online payments?", answer: "Depending on the platform, Resilient Payments can help connect POS needs with online checkout, invoicing, or eCommerce payment tools." },
    { question: "Do you help choose hardware?", answer: "Yes. The goal is to match terminals, mobile tools, or POS hardware to your actual checkout environment." },
  ],
});

Object.assign(pageContent.payroll, {
  detailBlocks: [
    {
      kicker: "Payroll",
      title: "Pay Teams Accurately and On Time",
      icon: "fal fa-users-cog",
      description: "Payroll support should reduce manual work and give owners confidence that employees, taxes, and reporting are handled with care.",
      bullets: ["Traditional and internet payroll", "Dedicated U.S.-based representative", "Payroll tax service support"],
    },
    {
      kicker: "HR",
      title: "Human Resources Help When You Need It",
      icon: "fal fa-hands-helping",
      description: "Get practical HR resources for common employer needs such as onboarding, compliance, performance management, benefits, and termination questions.",
      bullets: ["Hiring and onboarding support", "Compliance and documentation help", "Benefits and compensation conversations"],
    },
    {
      kicker: "Benefits",
      title: "Connect Payroll With Employee Value",
      icon: "fal fa-hand-holding-usd",
      description: "Payroll conversations can also include workers comp, employee benefits, time and attendance, and retirement plan options.",
      bullets: ["Time and attendance", "Workers comp payment services", "401(k), 403(b), Safe Harbor, and profit sharing"],
    },
    {
      kicker: "Tax",
      title: "Traditional or Internet Payroll",
      icon: "fal fa-laptop-code",
      description: "We provide traditional payroll services and internet payroll services customized to reduce your workload and simplify operations.",
    },
  ],
  faqs: [
    { question: "Can payroll include HR support?", answer: "Yes. Payroll conversations can include HR assistance, payroll tax services, time and attendance, workers comp, and benefits." },
    { question: "Can you help if we already have payroll?", answer: "Yes. Resilient Payments can review your current process and discuss whether another payroll or HR setup would reduce workload." },
  ],
});

Object.assign(pageContent["401-k"], {
  detailBlocks: [
    {
      kicker: "Plan Options",
      title: "Retirement Support That Fits Your Team",
      icon: "fal fa-piggy-bank",
      description: "Explore retirement plan conversations that make sense for your company size, benefit goals, and employee expectations.",
      bullets: ["Traditional 401(k)", "Roth 401(k)", "Safe Harbor plans"],
    },
    {
      kicker: "Retention",
      title: "Use Benefits to Strengthen Hiring",
      icon: "fal fa-user-plus",
      description: "A thoughtful retirement plan can help employees see a future with your company and improve the strength of your compensation package.",
      bullets: ["Employee retention support", "Compensation package value", "Profit-sharing plan options"],
    },
    {
      kicker: "Connected Support",
      title: "Coordinate With Payroll and HR",
      icon: "fal fa-link",
      description: "Coordinate retirement plan conversations alongside payroll, benefits, and HR needs for a smoother employee experience.",
    },
    {
      kicker: "Employee Value",
      title: "Strengthen Your Compensation Package",
      icon: "fal fa-award",
      description: "Offer benefits that help employees feel more secure while making your business a more attractive place to work.",
    },
  ],
  faqs: [
    { question: "Can retirement plan support connect with payroll?", answer: "Yes. Retirement and benefit conversations often work best when coordinated with payroll and employee data workflows." },
    { question: "Do you only discuss one type of plan?", answer: "No. The conversation can include traditional, Roth, Safe Harbor, and profit-sharing plan options." },
  ],
});

Object.assign(pageContent.lending, {
  detailBlocks: [
    {
      kicker: "Working Capital",
      title: "Funding for Cash Flow and Growth",
      icon: "fal fa-chart-line",
      description: "Business funding can support inventory, staffing, equipment, marketing, refinancing, expansion, or everyday operating needs.",
      bullets: ["Working capital", "Business lines of credit", "Short-term funding options"],
    },
    {
      kicker: "Expansion",
      title: "Support Bigger Business Moves",
      icon: "fal fa-building",
      description: "When a business is ready to buy equipment, expand locations, refinance debt, or buy property, the right lending conversation matters.",
      bullets: ["SBA loan conversations", "Equipment financing", "Commercial real estate or rental financing"],
    },
    {
      kicker: "Receivables",
      title: "Unlock Money Tied Up in Work",
      icon: "fal fa-unlock-alt",
      description: "Contract financing and receivables support may help businesses close deals, pay suppliers, or get paid faster.",
      bullets: ["Contract financing", "Accounts receivable support", "Supplier funding conversations"],
    },
    {
      kicker: "SBA Loans",
      title: "Refinance High-Interest Business Debt",
      icon: "fal fa-hand-holding-usd",
      description: "Save up to thousands monthly by refinancing high-interest business debt with an SBA loan or other structured funding option.",
    },
  ],
  faqs: [
    { question: "What can business funding be used for?", answer: "Funding may support working capital, equipment, inventory, refinancing, expansion, marketing, or other business operating needs." },
    { question: "Do you compare different funding routes?", answer: "Yes. The goal is to discuss practical options such as SBA loans, lines of credit, equipment financing, and working capital." },
  ],
});

Object.assign(pageContent.champ, {
  detailBlocks: [
    {
      kicker: "Retention",
      title: "Employee Value Without Extra Complexity",
      icon: "fal fa-medal",
      description: "The CHAMP Plan is designed for employers who want to improve retention and employee value while keeping the conversation practical.",
      bullets: ["Employee retention tools", "Basic healthcare and prescription benefit possibilities", "Designed for W2 employee teams"],
    },
    {
      kicker: "Employer Impact",
      title: "Support Employees and the Business",
      icon: "fal fa-handshake",
      description: "The plan can help employers strengthen benefits, support take-home pay, and create useful business value when structured properly.",
      bullets: ["Retention support", "Potential take-home pay improvement", "Potential employer-side value"],
    },
    {
      kicker: "Take-Home Pay",
      title: "Employees Get More Take-Home Pay",
      icon: "fal fa-wallet",
      description: "Employees may receive additional bring-home pay and basic medical benefits with no cost and no co-pay.",
    },
    {
      kicker: "Enhanced Benefits",
      title: "Enhance Your Current Benefits",
      icon: "fal fa-star",
      description: "The plan can enhance current benefits by eliminating some out-of-pocket costs without interfering with existing benefits.",
    },
  ],
  faqs: [
    { question: "Who is The CHAMP Plan for?", answer: "It is designed for employers with W2 employees who want to improve retention and employee benefit value." },
    { question: "Does it replace existing benefits?", answer: "The plan may enhance current benefits without interfering with existing benefit structures, depending on the situation." },
  ],
});

Object.assign(pageContent["text-message-tools"], {
  detailBlocks: [
    {
      kicker: "Billing",
      title: "Make Invoices Easier to Pay",
      icon: "fal fa-file-invoice-dollar",
      description: "Text-to-pay and text invoicing help customers receive a secure link and complete payment from the device they already use every day.",
      bullets: ["Text-to-pay links", "Text message invoicing", "Recurring and subscription conversations"],
    },
    {
      kicker: "Communication",
      title: "Two-Way Messaging for Faster Answers",
      icon: "fal fa-comments",
      description: "Text tools can help staff answer customer questions, clarify bills, send updates, and reduce avoidable phone tag.",
      bullets: ["Two-way text messaging", "Customer reminders", "Payment and support communication"],
    },
    {
      kicker: "Giving",
      title: "Donation and Text-to-Give Tools",
      icon: "fal fa-donate",
      description: "Nonprofits and religious organizations can use QR codes, keywords, and text prompts to make giving easier.",
      bullets: ["Text to give", "Text to donate", "QR code payment prompts"],
    },
    {
      kicker: "QR Codes",
      title: "QR Code Payment Prompts",
      icon: "fal fa-qrcode",
      description: "Use QR codes to let customers initiate payments, donations, or service requests without needing staff to hand them a device.",
    },
  ],
  faqs: [
    { question: "Can customers pay from a text message?", answer: "Yes. A text-to-pay workflow can send customers a secure link to review and pay an invoice." },
    { question: "Can this help nonprofits?", answer: "Yes. Text-to-give and text-to-donate options can simplify donor response through keywords or QR codes." },
  ],
});

Object.assign(pageContent["web-development"], {
  detailBlocks: [
    {
      kicker: "Website Packages",
      title: "From Starter Sites to eCommerce",
      icon: "fal fa-laptop-code",
      description: "Build or rebuild a website that helps customers understand your business, take action, and buy online when needed.",
      bullets: ["Starter informational websites", "Standard eCommerce websites", "Professional POS and store connectivity"],
    },
    {
      kicker: "Conversion",
      title: "A Cleaner Path for Customers",
      icon: "fal fa-mouse-pointer",
      description: "Your site should make services clear, support trust, and guide customers toward contact, checkout, booking, or inquiry.",
      bullets: ["Shopping carts", "Live chat possibilities", "Content updates and support"],
    },
    {
      kicker: "Growth",
      title: "Digital Marketing and SEO Support",
      icon: "fal fa-chart-bar",
      description: "A website should be part of a wider growth system that includes visibility, messaging, hosting, and useful customer follow-up.",
      bullets: ["SEO and digital marketing", "Hosting conversations", "Newsletters and customer updates"],
    },
    {
      kicker: "Cost Effective",
      title: "Pay Less, Get More Online",
      icon: "fal fa-tags",
      description: "Pay less and get more than many basic and complex eCommerce website options, with on-time delivery and dedicated developer support.",
    },
  ],
  faqs: [
    { question: "Can you help with eCommerce?", answer: "Yes. Resilient Payments can help discuss shopping cart and eCommerce website options." },
    { question: "Can existing websites be improved?", answer: "Yes. Website redevelopment, content updates, hosting, SEO, live chat, and digital marketing can all be part of the conversation." },
  ],
});

Object.assign(pageContent.atm, {
  detailBlocks: [
    {
      kicker: "Equipment",
      title: "ATM Machines for Busy Locations",
      icon: "fal fa-money-bill-wave",
      description: "ATM solutions can improve customer convenience, support cash access, and create a useful onsite service for retail or service locations.",
      bullets: ["ATM sales and service", "Wholesale equipment pricing", "EMV-compliant equipment"],
    },
    {
      kicker: "Monitoring",
      title: "Reporting and Remote Oversight",
      icon: "fal fa-desktop",
      description: "Reliable ATM programs need visibility. Reporting, monitoring, eJournal access, and settlement options help owners stay informed.",
      bullets: ["Realtime reporting", "Remote ATM monitoring", "Customized settlement options"],
    },
    {
      kicker: "Branding",
      title: "Make the ATM Fit Your Location",
      icon: "fal fa-paint-brush",
      description: "ATM wraps, toppers, and advertising tools can help the machine feel integrated into your business rather than an afterthought.",
      bullets: ["Branding solutions", "ATM wraps and toppers", "Advertising tools"],
    },
    {
      kicker: "Partnership",
      title: "Nationwide Partnership Solutions",
      icon: "fal fa-handshake",
      description: "Partnership solutions for merchants and operators nationwide, including processor servicing and customized settlement options.",
    },
  ],
  faqs: [
    { question: "Can you support both merchants and ATM operators?", answer: "Yes. ATM solutions can be discussed for merchants, operators, and processor relationships." },
    { question: "Is reporting included in the conversation?", answer: "Yes. Reporting, monitoring, eJournal access, and settlement options are part of the ATM support discussion." },
  ],
});

Object.assign(pageContent["business-insurance"], {
  detailBlocks: [
    {
      kicker: "Coverage",
      title: "Protection for Business Risks",
      icon: "fal fa-shield-alt",
      description: "Business insurance support can help owners think through liability, property, cyber, auto, workers comp, professional, and interruption risks.",
      bullets: ["General liability", "Commercial property", "Cyber and professional coverage"],
    },
    {
      kicker: "Employees",
      title: "Coverage Connected to Your Team",
      icon: "fal fa-user-shield",
      description: "Insurance conversations may also include workers comp, group health, employee benefits, and business owner policy needs.",
      bullets: ["Workers comp", "Group health", "Employee benefits"],
    },
    {
      kicker: "Request",
      title: "A Simpler Insurance Conversation",
      icon: "fal fa-comments",
      description: "Share your business type and coverage needs so the right insurance expert can follow up with a more focused conversation.",
      bullets: ["Coverage request routing", "Business-type review", "Advisor follow-up"],
    },
    {
      kicker: "Commercial Auto",
      title: "Commercial and Specialty Coverage",
      icon: "fal fa-car",
      description: "Coverage options also include commercial auto, EPLI, garage keepers, directors, product liability, and home-based business policies.",
    },
  ],
  faqs: [
    { question: "What types of insurance can be discussed?", answer: "Workers comp, liability, property, commercial auto, professional, cyber, group health, business interruption, and other business coverage needs." },
    { question: "Can I request a specific insurance type?", answer: "Yes. The insurance request form includes a field for the coverage type you want to discuss." },
  ],
});

Object.assign(pageContent["partner-with-us"], {
  faqs: [
    { question: "What makes a good partner?", answer: "A strong partner already serves business owners and wants to introduce useful services without damaging client trust." },
    { question: "Will Resilient Payments handle referred clients carefully?", answer: "Yes. The partnership approach is built around professionalism, clear communication, and protecting your relationship." },
  ],
});

Object.assign(pageContent.careers, {
  faqs: [
    { question: "What kind of sales background fits?", answer: "Relationship-driven sales experience, referral-source building, merchant services, payroll, insurance, lending, or B2B consulting can all be relevant." },
    { question: "What makes the opportunity different?", answer: "You can discuss multiple services with business owners instead of relying on only one product category." },
  ],
});

Object.assign(pageContent["about-us"], {
  faqs: [
    { question: "What does the Golden Rule in Business mean?", answer: "It means treating merchants, partners, employees, and sales agents the way we would expect to be treated: clearly, honestly, and respectfully." },
    { question: "Why offer multiple services?", answer: "Business owners often need several connected operating tools. A one-stop conversation can reduce vendor confusion and help owners make better decisions." },
  ],
});

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/products" },
  { label: "Partner with Us", href: "/partner-with-us" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

