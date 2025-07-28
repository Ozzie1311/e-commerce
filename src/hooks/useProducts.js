import { useState, useEffect } from 'react'

export function useProducts() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  const URL = 'https://dummyjson.com/products'

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error('Error while fetching data')
        }
        const { products } = await response.json()
        setData(products)
      } catch (err) {
        console.log(err.message)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  return { data, loading }
}
