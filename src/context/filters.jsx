import { createContext, useState, useContext } from 'react'
import { useCallback } from 'react'

const FiltersContext = createContext()

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  if (filters === undefined) {
    throw new Error('Context must be within the scope')
  }

  const filterProducts = useCallback((products) => {
    console.log('Creando nuevamente filterPRoducts')
    return products
      ?.filter(({ price, category }) => {
        return (
          price >= filters.minPrice &&
          (filters.category === 'all' || filters.category === category)
        )
      })
      .sort((a, b) => a.price - b.price)
  })

  return { filters, setFilters, filterProducts }
}
