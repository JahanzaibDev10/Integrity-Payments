import Image from "next/image";
import Link from "next/link";
import { footerLinks, site } from "@/data/integrityPayments";

export default function Footer() {
  return (
    <footer className="integrity-footer">
      <div className="integrity-container integrity-footer-main">
        <div className="integrity-footer-brand">
          <Image src={site.footerLogo} alt="Resilient Payments" width={600} height={200} sizes="(max-width: 700px) 280px, 380px" style={{ objectFit: 'contain', maxWidth: '380px', height: 'auto' }} />
          <ul>
            {site.footerBenefits.map((benefit) => (
              <li key={benefit}>- {benefit}</li>
            ))}
          </ul>
        </div>
        <nav className="integrity-footer-links" aria-label="Footer quick links">
          <h2>Quick Links</h2>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="integrity-footer-contact">
          <h2>Get In Touch</h2>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.emailHref}>{site.email}</a>
        </div>
      </div>
      <div className="integrity-container integrity-footer-legal">
        <p>
          <em>
            {site.description}
            <br />
            {site.disclosure}
            <br />
            © 2025 Resilient Payments, Inc. All rights reserved.
          </em>
        </p>
      </div>
    </footer>
  );
}

