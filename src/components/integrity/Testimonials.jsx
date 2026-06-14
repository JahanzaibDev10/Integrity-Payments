import { testimonials } from "@/data/integrityPayments";

export default function Testimonials({ items = testimonials }) {
  return (
    <section className="integrity-section integrity-testimonials" id="testimonials">
      <div className="integrity-container">
        <h2>Testimonials</h2>
        <div className="integrity-testimonial-grid">
          {items.map((item) => (
            <article className="integrity-testimonial" key={`${item.name}-${item.company}`}>
              <p>&quot;{item.quote}&quot;</p>
              <strong>{item.name}</strong>
              <span>{item.company}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
