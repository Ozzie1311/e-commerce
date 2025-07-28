import '../Styles/ProductsList.css'
import { useCart } from '../context/cart'
import { Link, useParams } from 'react-router-dom'

export function Products({ products }) {
  const { dispatch, CART_ACTION_TYPES } = useCart()
  return (
    <section className='products'>
      <ul>
        {products?.map((product) => {
          const { id } = useParams()
          console.log(id)
          return (
            <Link
              key={product.id}
              to='/products/:id'
            >
              <li>
                <img
                  fetchPriority='high'
                  width={200}
                  height={200}
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>

                <div>
                  <button
                    onClick={() =>
                      dispatch({
                        type: CART_ACTION_TYPES.ADD_TO_CART,
                        payload: product,
                      })
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </li>
            </Link>
          )
        })}
      </ul>
    </section>
  )
}
