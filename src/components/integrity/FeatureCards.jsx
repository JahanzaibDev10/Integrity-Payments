import Image from "next/image";
import { featureCards } from "@/data/integrityPayments";

export default function FeatureCards() {
  return (
    <section className="integrity-feature-band" aria-label="Resilient Payments advantages">
      <div className="integrity-container integrity-feature-grid">
        {featureCards.map((feature) => (
          <article className="integrity-feature-card" key={feature.title}>
            <Image src={feature.image} alt="" width={128} height={128} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

