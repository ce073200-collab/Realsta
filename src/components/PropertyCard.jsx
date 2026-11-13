import { useFavourites } from '../context/FavouritesContext'

/**
 * Reusable PropertyCard component.
 * Receives a single property object as a prop and renders its details.
 */
export default function PropertyCard({ property }) {
  const { toggleFavourite, isFavourite } = useFavourites()
  const liked = isFavourite(property.id)

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price)

  return (
    <article className="property-card" aria-label={property.title}>
      {/* Image */}
      <div className="property-card__image-wrapper">
        <img
          src={property.image}
          alt={property.title}
          className="property-card__image"
          loading="lazy"
        />
        {/* Type badge */}
        <span className={`property-card__badge property-card__badge--${property.type === 'For Sale' ? 'sale' : 'rent'}`}>
          {property.type}
        </span>
        {/* Category tag */}
        <span className="property-card__category">{property.category}</span>
        {/* Favourite button */}
        <button
          className={`property-card__fav${liked ? ' property-card__fav--active' : ''}`}
          onClick={() => toggleFavourite(property.id)}
          aria-label={liked ? `Remove ${property.title} from favourites` : `Save ${property.title} to favourites`}
          aria-pressed={liked}
        >
          <svg viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="property-card__content">
        {/* Price */}
        <p className="property-card__price">
          {formatPrice(property.price)}
          {property.priceLabel && <span className="property-card__price-label">{property.priceLabel}</span>}
        </p>
        <h3 className="property-card__title">{property.title}</h3>

        {/* Location */}
        <p className="property-card__location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {property.location}
        </p>

        <p className="property-card__description">{property.description}</p>

        {/* Features */}
        <ul className="property-card__features" role="list">
          {property.bedrooms > 0 && (
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
              <span>{property.bedrooms} Bed{property.bedrooms !== 1 ? 's' : ''}</span>
            </li>
          )}
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12H2a10 10 0 0020 0h-3M2 12V8a3 3 0 013-3h14a3 3 0 013 3v4"/></svg>
            <span>{property.bathrooms} Bath{property.bathrooms !== 1 ? 's' : ''}</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            <span>{property.area} m²</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4a2 2 0 012 2v5a2 2 0 01-2 2h-4"/><line x1="12" y1="22" x2="8" y2="17"/></svg>
            <span>{property.parking} Parking</span>
          </li>
        </ul>

        {/* Footer */}
        <div className="property-card__footer">
          <span className="property-card__year">Built {property.yearBuilt}</span>
          <button
            className="btn btn--outline property-card__details-btn"
            onClick={() => alert(`📋 Full details for "${property.title}" coming soon!\n\nLocation: ${property.location}\nPrice: ${formatPrice(property.price)}${property.priceLabel || ''}\nBedrooms: ${property.bedrooms}\nBathrooms: ${property.bathrooms}\nArea: ${property.area} m²`)}
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  )
}

