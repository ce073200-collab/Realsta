import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <span className="not-found__code" aria-hidden="true">404</span>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__text">
          Oops! It looks like the page you are looking for has moved or does not exist. Perhaps the property has already been sold? 🏠
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">Go to Home</Link>
          <Link to="/properties" className="btn btn--outline">Browse Properties</Link>
        </div>
      </div>
    </div>
  )
}

