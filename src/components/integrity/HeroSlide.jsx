import Link from "next/link";

export default function HeroSlide({ slide, active }) {
  const lines = slide.headingLines || [slide.heading];

  return (
    <article
      className={`integrity-hero-slide ${active ? "is-active" : ""}`}
      aria-hidden={!active}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.16), rgba(0,0,0,.16)), url(${slide.image})`,
        backgroundPosition: slide.position,
      }}
    >
      <div className="integrity-hero-content">
        <h1>
          {lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <Link className="integrity-primary-button" href={slide.href}>
          {slide.cta}
        </Link>
      </div>
    </article>
  );
}
