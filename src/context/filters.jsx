import { createContext, useState, useContext } from 'react'
import { useProducts } from '../hooks/useProducts'

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

  const filterProducts = (products) => {
    return products.filter(({ price, category }) => {
      return (
        price >= filters.minPrice &&
        (filters.category === 'all' || filters.category === category)
      )
    })
  }

  return { filters, setFilters, filterProducts }
}
