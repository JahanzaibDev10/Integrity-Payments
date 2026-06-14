import Image from "next/image";
import { intro } from "@/data/integrityPayments";

export default function HomepageIntro() {
  return (
    <section className="integrity-section integrity-intro-section">
      <div className="integrity-container integrity-intro-grid">
        <div className="integrity-intro-copy">
          <h2>{intro.title}</h2>
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="integrity-intro-image">
          <Image src={intro.image} alt="Brainstorming business chart company concept" width={1280} height={1280} sizes="(max-width: 900px) 100vw, 46vw" />
        </div>
      </div>
    </section>
  );
}
