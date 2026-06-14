import Image from "next/image";
import Link from "next/link";
import ServiceList from "./ServiceList";
import { businessNeeds } from "@/data/integrityPayments";

export default function BusinessNeedsOverview() {
  return (
    <section className="integrity-section integrity-section-muted">
      <div className="integrity-container integrity-split integrity-split-reverse">
        <div className="integrity-split-copy">
          <h2>Integrity Payments also offers other critical business needs such as:</h2>
          <ServiceList items={businessNeeds} />
          <Link className="integrity-secondary-button" href="/products">
            Learn More
          </Link>
        </div>
        <div className="integrity-split-image">
          <Image src="/images/integrity-payments/home/payment-smartphone.jpg" alt="Payment with smartphone" width={1280} height={850} sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
      </div>
    </section>
  );
}
