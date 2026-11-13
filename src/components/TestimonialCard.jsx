/**
 * Reusable TestimonialCard component.
 * Receives a testimonial object as a prop.
 */
export default function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card" aria-label={`Testimonial from ${testimonial.name}`}>
      <div className="testimonial-card__stars" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} aria-hidden="true">★</span>
        ))}
      </div>
      <blockquote className="testimonial-card__text">
        <p>&ldquo;{testimonial.text}&rdquo;</p>
      </blockquote>
      <footer className="testimonial-card__author">
        <div className="testimonial-card__avatar" aria-hidden="true">{testimonial.avatar}</div>
        <div>
          <strong className="testimonial-card__name">{testimonial.name}</strong>
          <span className="testimonial-card__role">{testimonial.role}</span>
        </div>
      </footer>
    </article>
  )
}

