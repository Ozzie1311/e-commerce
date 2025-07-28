// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FilterProvider } from './context/filters.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FilterProvider>,
)
