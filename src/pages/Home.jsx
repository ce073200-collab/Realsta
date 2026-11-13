import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import TestimonialCard from '../components/TestimonialCard'
import StatCard from '../components/StatCard'
import { properties, testimonials, stats } from '../data/properties'
import {
  ResidentialSalesIcon,
  CommercialLettingsIcon,
  PropertyManagementIcon,
  InvestmentAdvisoryIcon,
  PropertyValuationIcon,
  LegalDocumentationIcon,
} from '../components/ServiceIcons'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, setSearchType] = useState('all')
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [counter, setCounter] = useState(0)

  // Animate hero on mount (useEffect demo)
  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Interactive counter (useState + event handling demo)
  useEffect(() => {
    if (counter >= stats.length) return
    const id = setInterval(() => setCounter((c) => c + 1), 300)
    return () => clearInterval(id)
  }, [counter])

  const featuredProperties = properties.filter((p) => p.featured)

  const handleSearch = (e) => {
    e.preventDefault()
    // Navigate to properties page with query (simulated)
    window.location.href = `/properties?search=${encodeURIComponent(searchQuery)}&type=${searchType}`
  }

  const services = [
    {
      icon: <ResidentialSalesIcon />,
      title: 'Residential Sales',
      variant: 'residential',
      description: 'Find your dream family home from our curated collection of houses, villas, and apartments.',
    },
    {
      icon: <CommercialLettingsIcon />,
      title: 'Commercial Lettings',
      variant: 'commercial',
      description: 'Discover premium office spaces, retail units, and commercial properties for your business.',
    },
    {
      icon: <PropertyManagementIcon />,
      title: 'Property Management',
      variant: 'management',
      description: 'Let us manage your investment property while you enjoy stress-free rental income.',
    },
    {
      icon: <InvestmentAdvisoryIcon />,
      title: 'Investment Advisory',
      variant: 'advisory',
      description: 'Get expert insights and data-driven advice to maximise your real estate returns.',
    },
    {
      icon: <PropertyValuationIcon />,
      title: 'Property Valuation',
      variant: 'valuation',
      description: 'Receive accurate, certified property valuations for buying, selling, or insurance purposes.',
    },
    {
      icon: <LegalDocumentationIcon />,
      title: 'Legal & Documentation',
      variant: 'legal',
      description: 'Navigate title deeds, certificates of occupancy, and all property documentation with ease.',
    },
  ]

  return (
    <div className="home">
      {/* ===== HERO SECTION ===== */}
      <section className={`hero${heroLoaded ? ' hero--loaded' : ''}`} aria-labelledby="hero-heading">
        <div className="hero__bg" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=80"
            alt=""
            loading="eager"
          />
          <div className="hero__overlay" />
        </div>

        <div className="hero__content container">
          <span className="hero__eyebrow">Welcome to PrimeEstate</span>
          <h1 id="hero-heading" className="hero__title">
            Find Your <span className="hero__title-accent">Perfect</span> Property
          </h1>
          <p className="hero__subtitle">
            Nigeria&apos;s most trusted real estate platform. Browse thousands of residential and commercial listings across Lagos, Abuja, Port Harcourt and beyond.
          </p>

          {/* Search Bar – interactive element */}
          <form className="hero__search" onSubmit={handleSearch} role="search" aria-label="Property search">
            <div className="hero__search-inner">
              <select
                className="hero__search-select"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                aria-label="Property type filter"
              >
                <option value="all">All Types</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
              </select>
              <input
                type="text"
                className="hero__search-input"
                placeholder="Search by location, type, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search properties"
              />
              <button type="submit" className="btn btn--primary hero__search-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                Search
              </button>
            </div>
          </form>

          <div className="hero__ctas">
            <Link to="/properties" className="btn btn--primary">Browse All Properties</Link>
            <Link to="/contact" className="btn btn--outline-white">Talk to an Agent</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll-indicator" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="stats-section" aria-label="Company statistics">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={i < counter ? stat : { ...stat, value: '...' }} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROPERTIES ===== */}
      <section className="section featured-section" aria-labelledby="featured-heading">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Hand-picked</span>
            <h2 id="featured-heading" className="section__title">Featured Properties</h2>
            <p className="section__subtitle">
              Explore our most exclusive and sought-after listings, personally selected by our senior property advisors.
            </p>
          </div>

          <div className="properties-grid">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="section__cta">
            <Link to="/properties" className="btn btn--primary">
              View All Listings
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="section services-section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">What We Offer</span>
            <h2 id="services-heading" className="section__title">Our Services</h2>
            <p className="section__subtitle">
              A full suite of real estate services, designed to make your property journey seamless from start to finish.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.title} className={`service-card service-card--${service.variant}`}>
                <div className="service-card__icon-wrapper" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="section why-section" aria-labelledby="why-heading">
        <div className="container why-section__inner">
          <div className="why-section__image" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&auto=format&fit=crop&q=80"
              alt="Real estate agent consulting with clients"
              loading="lazy"
            />
          </div>
          <div className="why-section__content">
            <span className="section__eyebrow">Why PrimeEstate?</span>
            <h2 id="why-heading" className="section__title">The Trusted Name in Nigerian Real Estate</h2>
            <p>
              Founded in 2013, PrimeEstate has grown from a modest Lagos-based agency to a nationwide property powerhouse. We combine deep local expertise with cutting-edge technology to deliver unparalleled value to our clients.
            </p>
            <ul className="why-section__list" role="list">
              {[
                'Over 2,500 verified property listings',
                'Dedicated support from certified property experts',
                'Transparent pricing with no hidden fees',
                'Secure, legally-backed transaction processes',
                'Post-purchase property management services',
              ].map((point) => (
                <li key={point}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn--primary">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="section testimonials-section" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Client Stories</span>
            <h2 id="testimonials-heading" className="section__title">What Our Clients Say</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner" aria-labelledby="cta-heading">
        <div className="container cta-banner__content">
          <h2 id="cta-heading" className="cta-banner__title">Ready to Find Your Dream Home?</h2>
          <p className="cta-banner__subtitle">Talk to our expert advisors today and take the first step toward the perfect property.</p>
          <div className="cta-banner__actions">
            <Link to="/properties" className="btn btn--white">Browse Properties</Link>
            <Link to="/contact" className="btn btn--outline-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

