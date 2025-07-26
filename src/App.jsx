import { Header } from './components/Header'
import { Products } from './components/Products'
import { FilterProvider, useFilters } from './context/filters'
import { CartProvider } from './context/cart'
import { Cart } from './components/Cart'
import { useProducts } from './hooks/useProducts'
import { lazy, useMemo } from 'react'
import { Suspense } from 'react'

const Productss = lazy(() => import('./components/Products'))

export default function App() {
  const { data } = useProducts()
  const { filterProducts } = useFilters()

  const filteredData = useMemo(() => {
    console.log('Ejecutando useMemo')
    return filterProducts(data)
  }, [data, filterProducts])

  if (!data) {
    return <p>Loading products...</p>
  }

  return (
    <main className='wrapper'>
      <Header />
      <CartProvider>
        <Cart />
        <Suspense fallback={<p>Loading products...</p>}>
          <Products products={filteredData} />
        </Suspense>
      </CartProvider>
    </main>
  )
}
