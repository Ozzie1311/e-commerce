import { Header } from './components/Header'
import { useFilters } from './context/filters'
import { Routes, Route, Link } from 'react-router-dom'
import { CartProvider } from './context/cart'
import { Cart } from './components/Cart'
import { Suspense } from 'react'
import { HomePage } from './components/HomePage'

export default function App() {
  return (
    <main className='wrapper'>
      <CartProvider>
        <Header />
        <Cart />
        <Routes>
          <Route
            path='/'
            index
            element={<HomePage />}
          />
          <Route
            path='*'
            element={<h2>Eror 404, page not found!</h2>}
          />
        </Routes>
      </CartProvider>
    </main>
  )
}
