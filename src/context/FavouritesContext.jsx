import { createContext, useContext, useState, useEffect } from 'react'

const FavouritesContext = createContext()

export function FavouritesProvider({ children }) {
  // Load favourites from localStorage on mount
  const [favourites, setFavourites] = useState(() => {
    try {
      const stored = localStorage.getItem('primeestate_favourites')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  // Persist to localStorage whenever favourites change
  useEffect(() => {
    localStorage.setItem('primeestate_favourites', JSON.stringify(favourites))
  }, [favourites])

  const toggleFavourite = (propertyId) => {
    setFavourites((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    )
  }

  const isFavourite = (propertyId) => favourites.includes(propertyId)

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite, isFavourite }}>
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavourites() {
  const context = useContext(FavouritesContext)
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider')
  }
  return context
}

