import Image from "next/image";
import Link from "next/link";
import ServiceList from "./ServiceList";
import { paymentServices } from "@/data/integrityPayments";

export default function PaymentsOverview() {
  return (
    <section className="integrity-section">
      <div className="integrity-container integrity-split">
        <div className="integrity-split-image">
          <Image src="/images/integrity-payments/home/online-payment.jpg" alt="Online payment with smartphone or laptop" width={1280} height={854} sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
        <div className="integrity-split-copy">
          <h2>Resilient Payments makes Credit Card acceptance easy</h2>
          <ServiceList items={paymentServices} />
          <Link className="integrity-secondary-button" href="/payments">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
