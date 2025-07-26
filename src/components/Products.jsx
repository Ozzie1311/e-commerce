import '../Styles/ProductsList.css'
import { useCart } from '../context/cart'

export function Products({ products }) {
  const { addToCart } = useCart()
  return (
    <section className='products'>
      <ul>
        {products?.map((product) => {
          return (
            <li key={product.id}>
              <img
                width={200}
                height={200}
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <div>
                <button onClick={() => addToCart(product)}>Add to cart</button>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
