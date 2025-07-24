import { useProducts } from '../hooks/useProducts'
import { ProductsItems } from './ProductsItems'
import '../Styles/ProductsList.css'
export const ProductsList = () => {
  const { data } = useProducts()
  return (
    <ul className='products'>
      {data &&
        data.map(({ id, thumbnail, title, category, price }) => (
          <ProductsItems
            key={id}
            thumbnail={thumbnail}
            title={title}
            category={category}
            price={price}
          />
        ))}
    </ul>
  )
}
