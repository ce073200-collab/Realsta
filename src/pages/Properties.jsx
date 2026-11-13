import { useState, useEffect, useMemo } from 'react'
import PropertyCard from '../components/PropertyCard'
import { properties } from '../data/properties'
import { useFavourites } from '../context/FavouritesContext'

const CATEGORIES = ['All', 'Villa', 'Apartment', 'Townhouse', 'Commercial', 'Bungalow', 'Penthouse']
const TYPES = ['All', 'For Sale', 'For Rent']
const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'area-desc', label: 'Largest First' },
  { value: 'newest', label: 'Newest First' },
]

export default function Properties() {
  // Read URL search params on mount
  const getInitialSearch = () => {
    try {
      return new URLSearchParams(window.location.search).get('search') || ''
    } catch { return '' }
  }
  const getInitialType = () => {
    try {
      const t = new URLSearchParams(window.location.search).get('type')
      return TYPES.includes(t) ? t : 'All'
    } catch { return 'All' }
  }

  const [searchQuery, setSearchQuery] = useState(getInitialSearch)
  const [activeType, setActiveType] = useState(getInitialType)
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')
  const [maxPrice, setMaxPrice] = useState(10000000)
  const [minBeds, setMinBeds] = useState(0)
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'list'
  const { favourites } = useFavourites()
  const [showFavouritesOnly, setShowFavouritesOnly] = useState(false)

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  // Filtered & sorted properties (useMemo for performance)
  const filteredProperties = useMemo(() => {
    let result = [...properties]

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }

    // Type filter
    if (activeType !== 'All') {
      result = result.filter((p) => p.type === activeType)
    }

    // Category filter
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory)
    }

    // Max price
    result = result.filter((p) => p.price <= maxPrice)

    // Min bedrooms
    if (minBeds > 0) {
      result = result.filter((p) => p.bedrooms >= minBeds)
    }

    // Favourites only
    if (showFavouritesOnly) {
      result = result.filter((p) => favourites.includes(p.id))
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'area-desc':
        result.sort((a, b) => b.area - a.area)
        break
      case 'newest':
        result.sort((a, b) => b.yearBuilt - a.yearBuilt)
        break
      default:
        break
    }

    return result
  }, [searchQuery, activeType, activeCategory, sortBy, maxPrice, minBeds, showFavouritesOnly, favourites])

  const resetFilters = () => {
    setSearchQuery('')
    setActiveType('All')
    setActiveCategory('All')
    setSortBy('default')
    setMaxPrice(10000000)
    setMinBeds(0)
    setShowFavouritesOnly(false)
  }

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
      notation: 'compact',
      compactDisplay: 'short',
    }).format(price)

  return (
    <div className="properties-page">
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero page-hero--short" aria-labelledby="prop-heading">
        <div className="page-hero__bg" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1600&auto=format&fit=crop&q=80"
            alt=""
            loading="eager"
          />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">
          <span className="section__eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>Listings</span>
          <h1 id="prop-heading" className="page-hero__title">Our Properties</h1>
          <p className="page-hero__subtitle">
            {properties.length} verified listings across Nigeria. Use the filters below to find your perfect match.
          </p>
        </div>
      </section>

      <div className="container properties-page__body">
        {/* ===== SEARCH & FILTER BAR ===== */}
        <div className="filter-bar" role="search" aria-label="Property filters">
          {/* Search */}
          <div className="filter-bar__search">
            <svg className="filter-bar__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search by location, type, or keyword..."
              className="filter-bar__search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search properties"
            />
            {searchQuery && (
              <button className="filter-bar__clear-search" onClick={() => setSearchQuery('')} aria-label="Clear search">✕</button>
            )}
          </div>

          {/* Type tabs */}
          <div className="filter-bar__tabs" role="tablist" aria-label="Property type">
            {TYPES.map((type) => (
              <button
                key={type}
                role="tab"
                aria-selected={activeType === type}
                className={`filter-bar__tab${activeType === type ? ' filter-bar__tab--active' : ''}`}
                onClick={() => setActiveType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Sort + Advanced filters toggle */}
          <div className="filter-bar__controls">
            <select
              className="filter-bar__sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort properties"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            <button
              className={`filter-bar__advanced-btn${showFilters ? ' filter-bar__advanced-btn--active' : ''}`}
              onClick={() => setShowFilters((p) => !p)}
              aria-expanded={showFilters}
              aria-controls="advanced-filters"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
              </svg>
              Filters
            </button>

            {/* View toggle */}
            <div className="filter-bar__view-toggle" role="group" aria-label="View mode">
              <button
                className={`filter-bar__view-btn${viewMode === 'grid' ? ' filter-bar__view-btn--active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
                aria-pressed={viewMode === 'grid'}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
                </svg>
              </button>
              <button
                className={`filter-bar__view-btn${viewMode === 'list' ? ' filter-bar__view-btn--active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
                aria-pressed={viewMode === 'list'}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
                  <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ===== ADVANCED FILTERS PANEL ===== */}
        {showFilters && (
          <div id="advanced-filters" className="advanced-filters" aria-label="Advanced filters">
            {/* Categories */}
            <div className="advanced-filters__group">
              <label className="advanced-filters__label">Property Category</label>
              <div className="advanced-filters__chips" role="group">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`advanced-filters__chip${activeCategory === cat ? ' advanced-filters__chip--active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price range */}
            <div className="advanced-filters__group">
              <label className="advanced-filters__label" htmlFor="price-range">
                Max Price: <strong>{formatPrice(maxPrice)}</strong>
              </label>
              <input
                id="price-range"
                type="range"
                min={100000}
                max={10000000}
                step={50000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="advanced-filters__range"
                aria-label={`Max price: ${formatPrice(maxPrice)}`}
              />
              <div className="advanced-filters__range-labels">
                <span>{formatPrice(100000)}</span>
                <span>{formatPrice(10000000)}</span>
              </div>
            </div>

            {/* Min bedrooms */}
            <div className="advanced-filters__group">
              <label className="advanced-filters__label">Minimum Bedrooms</label>
              <div className="advanced-filters__chips" role="group">
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    className={`advanced-filters__chip${minBeds === n ? ' advanced-filters__chip--active' : ''}`}
                    onClick={() => setMinBeds(n)}
                    aria-pressed={minBeds === n}
                  >
                    {n === 0 ? 'Any' : `${n}+`}
                  </button>
                ))}
              </div>
            </div>

            {/* Favourites only */}
            <div className="advanced-filters__group">
              <label className="advanced-filters__checkbox-label">
                <input
                  type="checkbox"
                  checked={showFavouritesOnly}
                  onChange={(e) => setShowFavouritesOnly(e.target.checked)}
                />
                Show saved properties only ({favourites.length})
              </label>
            </div>

            <button className="btn btn--outline advanced-filters__reset" onClick={resetFilters}>
              Reset All Filters
            </button>
          </div>
        )}

        {/* ===== RESULTS COUNT ===== */}
        <div className="properties-page__results-bar" aria-live="polite" aria-atomic="true">
          <p className="properties-page__count">
            Showing <strong>{filteredProperties.length}</strong> of {properties.length} properties
            {searchQuery && <span> for &ldquo;<em>{searchQuery}</em>&rdquo;</span>}
          </p>
          {(searchQuery || activeType !== 'All' || activeCategory !== 'All' || minBeds > 0 || maxPrice < 10000000 || showFavouritesOnly) && (
            <button className="btn btn--text properties-page__reset-btn" onClick={resetFilters}>
              Clear all filters
            </button>
          )}
        </div>

        {/* ===== LISTINGS ===== */}
        {filteredProperties.length > 0 ? (
          <div className={`properties-grid${viewMode === 'list' ? ' properties-grid--list' : ''}`}>
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="properties-page__empty" role="status">
            <span aria-hidden="true">🔍</span>
            <h2>No properties found</h2>
            <p>Try adjusting your search terms or clearing some filters to see more results.</p>
            <button className="btn btn--primary" onClick={resetFilters}>Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  )
}

