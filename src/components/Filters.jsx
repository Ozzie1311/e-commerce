import { useFilters } from '../context/filters'
import { useId } from 'react'
import '../Styles/Filters.css'

export function Filters() {
  const { filters, setFilters } = useFilters()

  const categoryId = useId()

  const handleCategoryChange = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={categoryId}>Category</label>
        <select
          id={categoryId}
          onChange={handleCategoryChange}
          value={filters.category}
        >
          <option value='all'>All</option>
          <option value='beauty'>Beauty</option>
          <option value='groceries'>Food</option>
          <option value='furniture'>Furniture</option>
          <option value='fragrances'>Fragances</option>
        </select>
      </div>
    </section>
  )
}
