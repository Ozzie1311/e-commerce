import { lazy, Suspense, useMemo } from 'react'
import { useProducts } from '../hooks/useProducts'
import { useFilters } from '../context/filters'
import { Products } from '../components/Products'

const Productss = lazy(() => import('../components/Products'))

export function HomePage() {
  const { data, loading } = useProducts()
  const { filterProducts } = useFilters()

  const filteredData = useMemo(() => {
    if (!data) return []
    return filterProducts(data)
  }, [data, filterProducts])

  return (
    <>
      <Suspense fallback={<h2>Loading products...</h2>}>
        <Products products={filteredData} />
      </Suspense>
    </>
  )
}
