import { useContactForm } from '../hooks/useContactForm'

const subjects = [
  'General Enquiry',
  'Property Viewing Request',
  'Buying a Property',
  'Renting a Property',
  'Property Management',
  'Investment Advisory',
  'Property Valuation',
  'Other',
]

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Head Office',
    value: '14 Marina Boulevard, Victoria Island, Lagos, Nigeria',
    href: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.63 19.79 19.79 0 01.5 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.21-1.21a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+234 801 234 5678',
    href: 'tel:+2348012345678',
    note: '(Sample contact number)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'ce073200@gmail.com',
    href: 'mailto:ce073200@gmail.com',
    note: '(Official project contact email)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    label: 'Office Hours',
    value: 'Mon–Fri: 8:00am – 6:00pm · Sat: 9:00am – 3:00pm',
    href: null,
  },
]

export default function Contact() {
  const {
    formData,
    errors,
    submitted,
    submitting,
    handleChange,
    handleSubmit,
    resetForm,
  } = useContactForm()

  return (
    <div className="contact-page">
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero page-hero--short" aria-labelledby="contact-heading">
        <div className="page-hero__bg" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&auto=format&fit=crop&q=80"
            alt=""
            loading="eager"
          />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">
          <span className="section__eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>Get in Touch</span>
          <h1 id="contact-heading" className="page-hero__title">Contact Us</h1>
          <p className="page-hero__subtitle">
            Our expert advisors are ready to help you find, buy, rent, or manage your perfect property.
          </p>
        </div>
      </section>

      <div className="container contact-page__body">
        <div className="contact-page__grid">

          {/* ===== CONTACT INFO PANEL ===== */}
          <aside className="contact-info" aria-label="Contact information">
            <h2 className="contact-info__title">We&apos;d Love to Hear From You</h2>
            <p className="contact-info__intro">
              Whether you have a question about a listing, need expert advice, or want to arrange a property viewing, our team is just a message away.
            </p>

            <ul className="contact-info__list" role="list">
              {contactInfo.map((item) => (
                <li key={item.label} className="contact-info__item">
                  <span className="contact-info__icon" aria-hidden="true">{item.icon}</span>
                  <div>
                    <strong className="contact-info__label">{item.label}</strong>
                    {item.href ? (
                      <a href={item.href} className="contact-info__value contact-info__value--link">{item.value}</a>
                    ) : (
                      <span className="contact-info__value">{item.value}</span>
                    )}
                    {item.note && <small className="contact-info__note">{item.note}</small>}
                  </div>
                </li>
              ))}
            </ul>

            {/* Map placeholder */}
            <div className="contact-info__map" aria-label="Map placeholder showing our location">
              <div className="contact-info__map-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Victoria Island, Lagos</span>
                <small>Interactive map available after launch</small>
              </div>
            </div>
          </aside>

          {/* ===== CONTACT FORM ===== */}
          <section className="contact-form-section" aria-labelledby="form-heading">
            <h2 id="form-heading" className="contact-form-section__title">Send Us a Message</h2>

            {submitted ? (
              /* Success state */
              <div className="contact-form__success" role="alert" aria-live="polite">
                <div className="contact-form__success-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"/><polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for reaching out to PrimeEstate. One of our expert advisors will get back to you within 24 hours during business days.
                </p>
                <button className="btn btn--primary" onClick={resetForm}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                {/* Full Name */}
                <div className={`form-group${errors.fullName ? ' form-group--error' : ''}`}>
                  <label className="form-label" htmlFor="fullName">
                    Full Name <span aria-hidden="true" className="form-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-input"
                    placeholder="e.g. Chinonso Okafor"
                    value={formData.fullName}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    autoComplete="name"
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="form-error" role="alert">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
                  <label className="form-label" htmlFor="email">
                    Email Address <span aria-hidden="true" className="form-required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="e.g. chinonso@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p id="email-error" className="form-error" role="alert">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div className={`form-group${errors.subject ? ' form-group--error' : ''}`}>
                  <label className="form-label" htmlFor="subject">
                    Subject <span aria-hidden="true" className="form-required">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="form-input form-select"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  >
                    <option value="">— Select a subject —</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p id="subject-error" className="form-error" role="alert">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div className={`form-group${errors.message ? ' form-group--error' : ''}`}>
                  <label className="form-label" htmlFor="message">
                    Message <span aria-hidden="true" className="form-required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  <small className="form-hint">{formData.message.length} / 1000 characters</small>
                  {errors.message && (
                    <p id="message-error" className="form-error" role="alert">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className={`btn btn--primary contact-form__submit${submitting ? ' contact-form__submit--loading' : ''}`}
                  disabled={submitting}
                  aria-busy={submitting}
                >
                  {submitting ? (
                    <>
                      <span className="contact-form__spinner" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="contact-form__privacy">
                  By submitting this form, you agree to our Privacy Policy. We will never share your information with third parties.
                </p>
              </form>
            )}
          </section>
        </div>
      </div>

      {/* ===== FAQ SECTION ===== */}
      <section className="section faq-section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Common Questions</span>
            <h2 id="faq-heading" className="section__title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid">
            {[
              {
                q: 'How do I schedule a property viewing?',
                a: 'Simply fill out the contact form above, select "Property Viewing Request" as the subject, and mention the property you are interested in. Our team will arrange a convenient time within 24 hours.',
              },
              {
                q: 'Are all your property listings verified?',
                a: 'Yes. Every listing on PrimeEstate undergoes our rigorous 10-point verification process including title document checks, physical inspection, and legal clearance before it goes live.',
              },
              {
                q: 'What are your agency fees?',
                a: 'Our standard agency fee is 5% of the annual rent for rental properties and 5% of the sale price for purchase transactions. These are negotiable for high-value properties.',
              },
              {
                q: 'Do you offer property management services?',
                a: 'Absolutely. Our Property Management Division handles everything from tenant screening and rent collection to maintenance coordination and legal compliance on your behalf.',
              },
              {
                q: 'How quickly can you find me a suitable property?',
                a: 'Our average response time for matched listings is 48 hours. With over 2,500 live listings and a network of off-market properties, we can usually find the right fit very quickly.',
              },
              {
                q: 'Do you help with mortgage and financing?',
                a: 'Yes, we partner with leading Nigerian banks and mortgage institutions to help our clients access affordable financing. Our advisors will guide you through the best available options.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="faq-item">
                <summary className="faq-item__question">{q}</summary>
                <p className="faq-item__answer">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

