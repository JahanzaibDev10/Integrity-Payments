export const site = {
  name: "Integrity Payments",
  legalName: "Integrity Payments, Inc.",
  url: "https://integritypayments.com",
  phone: "877-639-1000",
  phoneHref: "tel:+18776391000",
  email: "info@integritypayments.com",
  emailHref: "mailto:info@integritypayments.com",
  logo: "/images/integrity-payments/integrity-logo-grey.jpg",
  footerLogo: "/images/integrity-payments/integrity-logo-white.png",
  favicon: "/images/integrity-payments/integrity-favicon.png",
  etaLogo: "/images/integrity-payments/eta-logo.png",
  description:
    "Integrity Payments, Inc. is a team of national business consultants connecting our clients to numerous and beneficial partners and products.",
  partnerDisclosure:
    "Integrity Payments, Inc. is an official Sales Agency and Partner of EPSG, LLC, a registered ISO/MSP of Wells Fargo Bank and Merrick Bank.",
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
      { label: "The CHAMP Plan", href: "/champ" },
      { label: "Lending", href: "/lending" },
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
  { label: "Careers", href: "/careers" },
  { label: "About Us", href: "/about-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const productLinks = navigation[1].children;

export const home = {
  slides: [
    {
      className: "one",
      preTitle: "Welcome to Integrity Payments",
      title: "Payments. Payroll. Perfect.",
      emphasis: "Payroll",
      description:
        "Best-in-class business operating solutions with personalized service, low-cost options, and transparent support.",
      cta: "View Products",
      href: "/products",
    },
    {
      className: "two",
      preTitle: "Accept payments securely",
      title: "Accept Payments Securely. Anywhere.",
      emphasis: "Securely",
      description:
        "Card-present, eCommerce, invoicing, mobile, B2B/B2G, subscription, and text-to-pay solutions tailored to your business.",
      cta: "Explore Payments",
      href: "/payments",
    },
    {
      className: "three",
      preTitle: "Pay your employees with ease",
      title: "Payroll and HR Support Built Around You",
      emphasis: "HR Support",
      description:
        "Dedicated U.S.-based payroll support, HR resources, tax services, time and attendance, benefits, and retirement plan options.",
      cta: "Payroll & HR",
      href: "/payroll",
    },
  ],
  overviewTitle: "We Make Operating Your Business Easier",
  overview:
    "Our mission at Integrity Payments is to provide our customers with the best personalized service in the industry. We tailor fit best-in-class, low-cost solutions for merchants with honesty, transparency, and Integrity.",
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
  },
  {
    title: "POS Systems",
    href: "/pos-systems",
    summary:
      "Point of sale options for retail, restaurant, mobile, contactless, and integrated payment acceptance.",
    bullets: ["Point of Sale systems", "Self-service kiosks", "Mobile payment acceptance", "Contactless payments", "QuickBooks payment integration"],
    icon: "assets/images/service/icon/02.svg",
  },
  {
    title: "Payroll",
    href: "/payroll",
    summary:
      "Payroll services, human resource assistance, workers comp, time and attendance, 401(k), and employee benefits.",
    bullets: ["Payroll Services", "Human Resource assistance", "Workers Comp", "Time and Attendance", "401K", "Employee Benefits"],
    icon: "assets/images/service/icon/03.svg",
  },
  {
    title: "The CHAMP Plan",
    href: "/champ",
    summary:
      "Employee retention tools that can provide basic healthcare and prescriptions, help employees take home more pay, and create new employer revenue.",
    bullets: ["Employee Retention Tools", "Free basic healthcare and prescriptions", "Give employees a free pay raise", "No cost to you as the employer"],
    icon: "assets/images/service/icon/04.svg",
  },
  {
    title: "Lending",
    href: "/lending",
    summary:
      "Working capital, SBA loans, asset based lending, equipment leasing, lines of credit, and cash advances.",
    bullets: ["Working Capital", "SBA Loans", "Asset Based Lending", "Equipment Leasing", "Lines of Credit", "Cash Advances"],
    icon: "assets/images/service/icon/05.svg",
  },
  {
    title: "401 K",
    href: "/401-k",
    summary:
      "Retirement plan support including traditional and Roth 401(k)s, Safe Harbor plans, and profit-sharing plan options.",
    bullets: ["Traditional 401(k)", "Roth 401(k)", "Safe Harbor plans", "Profit-sharing options", "Employee benefits support"],
    icon: "assets/images/service/icon/06.svg",
    image: "/images/integrity-payments/hero/payroll-hr.jpg",
  },
  {
    title: "Text Messaging Tools",
    href: "/text-message-tools",
    summary:
      "Text to pay, text invoicing, text to give or donate, text message marketing, and customer specials or promotions.",
    bullets: ["Text to Pay", "Text Invoicing", "Text to Give/Donate", "Text Message Marketing", "Text Specials and Promos"],
    icon: "assets/images/service/icon/07.svg",
    image: "/images/integrity-payments/hero/text-message-tools.jpg",
  },
  {
    title: "Website Development & SEO",
    href: "/web-development",
    summary:
      "Website starter packages through advanced eCommerce builds, hosting, newsletters, live chat, and digital marketing services.",
    bullets: ["Website starter packages", "Shopping Carts", "eCommerce", "Hosting", "Newsletters", "Live Chat"],
    icon: "assets/images/service/icon/08.svg",
    image: "/images/integrity-payments/hero/website-development.jpg",
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
    icon: "assets/images/service/icon/08.svg",
    image: "/images/integrity-payments/hero/business-insurance.jpg",
  },
];

export const testimonials = [
  {
    quote:
      "Our Integrity Payments agent, James Reville, has been an integral part of the success of my business. He built a custom package that perfectly aligned with my operations, allowing me to focus on growth.",
    name: "Matthew Abrantes",
    company: "Patriotic Distributors",
  },
  {
    quote:
      "Thanks to Theresa Hairston for making the switch over to Integrity Payments very easy and effective for our business. Integrity Payments was able to work out a much lower discount rate than our previous provider.",
    name: "John Wisdom",
    company: "Quitman Health Services",
  },
  {
    quote:
      "We recently began working with Integrity Payments for our Payroll system. This has been the easiest system I have worked with. The platform is easy to navigate and the reporting is phenomenal.",
    name: "Shawn Lewis",
    company: "Christ's Church Kids",
  },
  {
    quote:
      "Integrity Payments has been such a great company to work with. The customer service is top notch, and everyone at Integrity Payments has been completely professional.",
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

export const pageContent = {
  products: {
    title: "Services",
    description: "Payments, payroll, lending, web development, ATM, insurance, and messaging tools in one business operating platform.",
    sections: products,
  },
  payments: {
    title: "Credit Card Processing",
    description:
      "Experience the very best in payment solutions with Integrity Payments. Whether you are a brick-and-mortar business or an eCommerce business, our tailored solutions make payments easier with Integrity and reliability.",
    cta: "Request a Free Consultation",
    image: "/images/integrity-payments/hero/accept-payments-anywhere.jpg",
    imageAlt: "Customer paying securely with a mobile card terminal",
    showcaseTitle: "Accept Payments Securely Anywhere",
    intro:
      "Give customers a smooth way to pay in store, online, by invoice, or by text. Integrity Payments helps match your business with practical payment tools, transparent reporting, and support that makes daily transactions feel simple.",
    highlights: ["In-person, online, mobile, invoice, and text-to-pay options", "Cost-reduction programs built around your business model", "Clear reporting with support from a real Integrity Payments advisor"],
    sections: [
      { title: "Eliminate or Reduce Processing Costs", bullets: ["Compliant Discount for Cash Programs", "Dual Pricing programs", "Visa compliant 3% surcharge programs", "Ecommerce cost reduction programs"] },
      { title: "Card Present, Card Not Present & eCommerce Solutions", bullets: ["Stand-alone terminals", "Self-service kiosks", "Point of Sale systems", "Mobile payment acceptance", "Contactless/Apple Pay/Tap to Pay/NFC", "QuickBooks payment integration", "Recurring billing", "Invoicing by text or email", "B2B/B2G solutions"] },
      { title: "High Risk Merchants", description: "If your business type is classified as high risk, we prefer to call you a specialty account. We may be able to help with CBD, dispensaries, nutraceuticals, MLM, travel, firearms, credit repair, and other specialty account types." },
      { title: "Text to Pay, Text to Give, Text to Donate", description: "Send invoices by email or text, offer easy text payment, create donation programs, and use QR codes to collect payments." },
      { title: "Business to Business, Business to Government", description: "Automate Level 2 and Level 3 processing to help qualifying card types reach lower interchange rates without manual effort." },
      { title: "Reporting and Customer Support", description: "Clear reporting with fees shown, premium and Tier 2 support available 24/7, and an Integrity Payments agent assigned directly to your account." },
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
      { title: "Retail and Restaurant Ready", description: "Match your front counter, table service, quick service, or mobile checkout workflow with reliable POS hardware and payment acceptance." },
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
      "Payroll should feel dependable, accurate, and easy to manage. Integrity Payments connects you with payroll and HR support designed to reduce manual work, improve confidence, and keep your team paid on time.",
    highlights: ["Dedicated U.S.-based payroll support", "Payroll tax, time and attendance, HR, and workers comp options", "Employee benefits and retirement support in one conversation"],
    sections: [
      { title: "Traditional or Internet Payroll", description: "We provide traditional payroll services and internet payroll services customized to reduce your workload and simplify operations." },
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
      { title: "Plan Options", description: "Explore traditional 401(k), Roth 401(k), Safe Harbor, and profit-sharing choices that align with your business." },
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
      { title: "SBA Loans", description: "Save up to thousands monthly by refinancing high-interest business debt with an SBA loan." },
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
    title: "Text Tools to Help Your Business",
    description: "Text-to-pay, text invoicing, text-to-give, donation tools, and text marketing solutions for easier billing and customer communication.",
    cta: "Learn More",
    image: "/images/integrity-payments/hero/text-message-tools.jpg",
    imageAlt: "Customer messaging and text payment tools",
    showcaseTitle: "Make Billing and Customer Messages Easier",
    intro:
      "Text tools help you meet customers where they already are. Send invoices, payment links, donation prompts, promotions, and helpful updates with less friction.",
    highlights: ["Text-to-pay and text invoice workflows", "Donation and text-to-give options", "Customer communication and marketing support"],
    sections: [
      { title: "Text to Pay/Text Message Invoicing", description: "Send a customer a Text-To-Pay message with a link to pay their invoice. Two-way text messaging helps answer questions, adjust bills, and manage recurring or monthly subscriptions." },
      { title: "Text to Give/Text to Donate", description: "Nonprofits and religious organizations can receive donations quickly by advertising a QR code or asking donors to text a keyword to donate." },
      { title: "All Solutions in One Portal", description: "A simple portal helps manage text billing, customer communication, online payment, and in-person payment options." },
    ],
  },
  "web-development": {
    title: "Website Development",
    description:
      "Integrity Payments can assist with website development, design, eCommerce, and digital marketing services.",
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
    description: "Need an ATM machine in your business? Contact Integrity Payments for MobilePay ATM services.",
    cta: "Speak with our ATM division",
    image: "/images/integrity-payments/hero/atm-machines.png",
    imageAlt: "ATM machine service and equipment",
    showcaseTitle: "Reliable ATM Solutions for Busy Locations",
    intro:
      "An ATM can improve convenience for customers while supporting cash access and business traffic. Integrity Payments helps with ATM equipment, processing, monitoring, and support.",
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
    description: "Need business insurance? Integrity Payments can help connect you with coverage support.",
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
    formFields: ["DBA Name", "Contact Name", "Best number to reach", "Email address", "Website Link", "Type of Insurance requested", "Integrity Payments Sales Agent", "Best time for our Insurance Expert to call you"],
  },
  "partner-with-us": {
    title: "Partner With Us",
    description:
      "Integrity Payments believes in true win/win partnerships. We make partnerships easy and represent referral partners with professionalism and Integrity.",
    sections: [
      { title: "Strategic Alliances", bullets: ["Banks/Financial Institutions", "Software Companies", "Point of Sale Companies", "Payment Gateways", "Agent/Reseller Programs"] },
      { title: "Referral Partners", bullets: ["Associations", "Accountants", "Business to Business Companies", "Business Attorneys", "People who know a lot of business owners"] },
    ],
  },
  "strategic-alliances": {
    title: "Strategic Alliances",
    description:
      "If you are a bank, financial institution, software company, point of sale company, gateway solution, or someone seeking an agent/reseller deal, you have come to the right place.",
    sections: [
      { title: "We Will Take Care of Your Customers", description: "Aligning with Integrity Payments can offer your merchants best-in-class solutions, low rates, no hidden fees, excellent customer service, and a stronger relationship with your business." },
    ],
    formFields: ["Name", "Company", "Phone Number", "Email Address", "Why I am a good fit for a partnership with Integrity"],
  },
  "referral-partners-2": {
    title: "Referral Partners",
    description:
      "If you are an association, accounting firm, B2B company, legal firm, consultant, or simply know business owners, partnering with Integrity Payments may be one of the best decisions you make.",
    sections: [
      { title: "White Glove Referral Support", description: "Integrity Payments will take care of your referral customers, build custom solutions for their specific needs, offer affordable costs, and provide White Glove Treatment." },
    ],
    formFields: ["Name", "Company", "Phone Number", "Email Address", "Why I am a good fit for a partnership with Integrity"],
  },
  careers: {
    title: "Careers",
    description:
      "Seeking the final stop in your sales or sales management career? Integrity Payments offers lifetime residuals at some of the industry's highest payouts, with options for large upfront bonuses on your deals.",
    cta: "Learn More",
    sections: [
      { title: "Build Referral Sources and Networks", bullets: ["Your referral partner wins", "Your portfolio and income win", "Most importantly, your customers win"] },
      { title: "Careers at Integrity Payments", description: "Because we think you are worth it. If you take care of your people, your people will take care of you." },
    ],
  },
  "about-us": {
    title: "About Us",
    description:
      "Integrity Payments brings decades of experience to your doorstep. Founded by industry executives from Fortune 500 companies in payments, payroll, and insurance, our experience brings your business a wealth of knowledge.",
    sections: [
      { title: "Why This Matters", description: "We know the games competitors play to pad profits while customers unknowingly pay the price. We refuse to operate this way. Being honest is our greatest strategy and biggest advantage." },
      { title: "The Golden Rule in Business", description: "Our company was founded on the philosophy of always practicing the Golden Rule in Business. This means treating customers, partners, and sales agents exactly the way we would expect to be treated." },
      { title: "Welcome", description: "Integrity Payments always has your best interest at heart. We want to earn your business and your trust every single day." },
    ],
  },
  testimonials: {
    title: "Testimonials",
    description: "Hear from businesses that use Integrity Payments for processing, payroll, funding, and other essential business services.",
    testimonials,
  },
  contact: {
    title: "Contact Us",
    description: "Please complete the form below and we will be in touch with you shortly.",
    formFields: ["Name", "Email Address", "Phone Number", "Company", "How can we help?", "Message"],
  },
};

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Partner with Us", href: "/partner-with-us" },
  { label: "Careers", href: "/careers" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];
