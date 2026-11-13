import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/properties', label: 'Properties' },
    { to: '/contact', label: 'Contact' },
  ]

  const services = [
    'Residential Sales',
    'Property Rentals',
    'Commercial Lettings',
    'Property Management',
    'Investment Advisory',
    'Property Valuation',
  ]

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="PrimeEstate Home">
              <svg className="footer__logo-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#1e40af"/>
                <path d="M16 6L6 14v12h8v-7h4v7h8V14L16 6z" fill="white"/>
              </svg>
              <span>Prime<strong>Estate</strong></span>
            </Link>
            <p className="footer__tagline">
              Your trusted partner in finding the perfect property across Nigeria and beyond.
            </p>
            <div className="footer__social" aria-label="Social media links">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                <a
                  key={platform}
                  href={`https://www.${platform}.com`}
                  className="footer__social-link"
                  aria-label={`Follow us on ${platform}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h3 className="footer__section-title">Quick Links</h3>
            <ul className="footer__list" role="list">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__section">
            <h3 className="footer__section-title">Our Services</h3>
            <ul className="footer__list" role="list">
              {services.map((service) => (
                <li key={service}>
                  <span className="footer__list-item">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h3 className="footer__section-title">Contact Us</h3>
            <address className="footer__address">
              <p>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                14 Marina Boulevard, Victoria Island, Lagos, Nigeria
              </p>
              <p>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.63 19.79 19.79 0 01.5 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.21-1.21a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <a href="tel:+2348012345678">+234 801 234 5678</a>
              </p>
              <p>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:ce073200@gmail.com">ce073200@gmail.com</a>
              </p>
            </address>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} PrimeEstate Limited. All rights reserved.</p>
          <div className="footer__developer-credit">
            <span>Developed by: <strong>Odeyale Joshua Mbang</strong></span>
            <span>Matric: <strong>25/sci01/076</strong></span>
            <span>Department: <strong>Computer Science</strong></span>
            <span>Email: <a href="mailto:ce073200@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}><strong>ce073200@gmail.com</strong></a></span>
          </div>
          <p className="footer__disclaimer">
            Academic Project Submission &bull; Real Estate Property Listing Application
          </p>
        </div>
      </div>
    </footer>
  )
}

