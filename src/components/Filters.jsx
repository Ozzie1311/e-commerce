import { useFilters } from '../context/filters'
import { useId } from 'react'
import '../Styles/Filters.css'

export function Filters() {
  const { filters, setFilters } = useFilters()

  const priceId = useId()
  const categoryId = useId()

  const handleChangePrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }

  const handleCategoryChange = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={priceId}>Price</label>
        <input
          type='range'
          id={priceId}
          onChange={handleChangePrice}
          min={0}
          max={1500}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}$</span>
      </div>

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
