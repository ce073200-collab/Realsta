import { Link } from 'react-router-dom'
import TeamMemberCard from '../components/TeamMemberCard'
import StatCard from '../components/StatCard'
import { teamMembers, stats } from '../data/properties'
import {
  MissionIcon,
  VisionIcon,
  ObjectivesIcon,
  IntegrityIcon,
  ExcellenceIcon,
  InnovationIcon,
  CommunityIcon,
} from '../components/ServiceIcons'

const milestones = [
  { year: '2013', event: 'PrimeEstate was founded in Lagos by Oluwaseun Adeyemi with a team of 5 property experts and a vision to make real estate transactions transparent and trustworthy.' },
  { year: '2015', event: 'Expanded operations to Abuja, becoming the first agency to simultaneously operate premium offices in both cities with a unified digital listing platform.' },
  { year: '2017', event: 'Surpassed ₦10 billion in cumulative property transactions. Launched our award-winning Property Management Division.' },
  { year: '2019', event: 'Opened offices in Port Harcourt, Ibadan, and Enugu. Launched the PrimeEstate mobile app with over 50,000 downloads in its first month.' },
  { year: '2021', event: 'Won the "Best Real Estate Agency in Nigeria" award at the PropertyXpo Annual Awards for the second consecutive year.' },
  { year: '2023', event: 'Crossed the 8,000 satisfied client milestone and launched our commercial lettings division with dedicated teams in all major cities.' },
]

const values = [
  {
    icon: <IntegrityIcon />,
    title: 'Integrity',
    description: 'We conduct every transaction with complete honesty and transparency. Our clients trust us because we have earned that trust.',
  },
  {
    icon: <ExcellenceIcon />,
    title: 'Excellence',
    description: 'We hold ourselves to the highest professional standards in every aspect of our service, from initial consultation to key handover.',
  },
  {
    icon: <InnovationIcon />,
    title: 'Innovation',
    description: 'We continuously invest in technology and processes that make property searching, buying, and selling simpler and more efficient.',
  },
  {
    icon: <CommunityIcon />,
    title: 'Community',
    description: 'We believe in building stronger communities by helping Nigerians secure safe, quality homes and strategic investments.',
  },
]

export default function About() {
  return (
    <div className="about">
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="page-hero__bg" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80"
            alt=""
            loading="eager"
          />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">
          <span className="section__eyebrow" style={{color: 'rgba(255,255,255,0.8)'}}>About Us</span>
          <h1 id="about-heading" className="page-hero__title">Who We Are</h1>
          <p className="page-hero__subtitle">
            Over a decade of trusted real estate expertise, transforming how Nigerians buy, sell, and rent property.
          </p>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="section about-intro" aria-labelledby="intro-heading">
        <div className="container about-intro__inner">
          <div className="about-intro__content">
            <span className="section__eyebrow">Our Story</span>
            <h2 id="intro-heading" className="section__title">Building Dreams Since 2013</h2>
            <p>
              PrimeEstate was born out of a simple but powerful idea: that every Nigerian deserves a smooth, transparent, and rewarding real estate experience. Too many buyers and tenants were being misled by opaque pricing, unverified listings, and unreliable agents. We set out to change that.
            </p>
            <p>
              Starting with just five properties and a small team in Victoria Island, Lagos, we have grown into a full-service real estate powerhouse operating across 15+ cities. Our platform now hosts over 2,500 verified listings and has helped more than 8,000 families, businesses, and investors find their perfect property.
            </p>
            <p>
              Today, PrimeEstate is recognised as one of Nigeria's most trusted and innovative real estate brands, combining the warmth of personal advisory service with the power of modern technology.
            </p>
          </div>
          <div className="about-intro__image">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80"
              alt="PrimeEstate team in a professional meeting"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section about-stats" aria-label="Company statistics">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION / VISION / OBJECTIVES ===== */}
      <section className="section mvp-section" aria-labelledby="mvp-heading">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Our Foundation</span>
            <h2 id="mvp-heading" className="section__title">Mission, Vision &amp; Objectives</h2>
          </div>

          <div className="mvp-grid">
            <div className="mvp-card mvp-card--mission">
              <div className="mvp-card__icon-wrapper" aria-hidden="true">
                <MissionIcon />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide every client with an honest, efficient, and rewarding real estate experience by combining expert local knowledge with cutting-edge technology, making property accessible to all Nigerians.
              </p>
            </div>
            <div className="mvp-card mvp-card--vision">
              <div className="mvp-card__icon-wrapper" aria-hidden="true">
                <VisionIcon />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the leading real estate technology company in Africa, renowned for trust, innovation, and the transformative impact we have on communities and families across the continent.
              </p>
            </div>
            <div className="mvp-card mvp-card--objectives">
              <div className="mvp-card__icon-wrapper" aria-hidden="true">
                <ObjectivesIcon />
              </div>
              <h3>Our Objectives</h3>
              <ul>
                <li>Maintain 100% listing verification across all platforms</li>
                <li>Expand to 25 cities across Nigeria by 2026</li>
                <li>Train 500+ certified real estate professionals annually</li>
                <li>Achieve a 95%+ client satisfaction score</li>
                <li>Launch affordable housing advisory services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="section values-section" aria-labelledby="values-heading">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">What Guides Us</span>
            <h2 id="values-heading" className="section__title">Our Core Values</h2>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <div className="value-card__icon-wrapper" aria-hidden="true">
                  {value.icon}
                </div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__desc">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HISTORY / MILESTONES ===== */}
      <section className="section timeline-section" aria-labelledby="history-heading">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Our Journey</span>
            <h2 id="history-heading" className="section__title">Company History</h2>
            <p className="section__subtitle">From a small Lagos agency to a nationwide property powerhouse.</p>
          </div>

          <ol className="timeline" aria-label="Company milestones">
            {milestones.map((milestone, i) => (
              <li key={milestone.year} className={`timeline__item${i % 2 === 0 ? ' timeline__item--left' : ' timeline__item--right'}`}>
                <div className="timeline__dot" aria-hidden="true" />
                <div className="timeline__card">
                  <strong className="timeline__year">{milestone.year}</strong>
                  <p>{milestone.event}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="section team-section" aria-labelledby="team-heading">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">The People Behind PrimeEstate</span>
            <h2 id="team-heading" className="section__title">Meet Our Leadership Team</h2>
            <p className="section__subtitle">
              Our experienced leadership team brings decades of combined expertise across real estate, technology, finance, and customer service.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-banner" aria-labelledby="about-cta-heading">
        <div className="container cta-banner__content">
          <h2 id="about-cta-heading" className="cta-banner__title">Ready to Work With Us?</h2>
          <p className="cta-banner__subtitle">Join thousands of satisfied clients who trust PrimeEstate with their most important investment.</p>
          <div className="cta-banner__actions">
            <Link to="/properties" className="btn btn--white">Browse Properties</Link>
            <Link to="/contact" className="btn btn--outline-white">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

