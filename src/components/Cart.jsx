import { useId } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/cart'
import '../Styles/Cart.css'

export function Cart() {
  const inputCheckBoxId = useId()
  const { cart, dispatch, CART_ACTION_TYPES } = useCart()

  return (
    <>
      <label
        className='cart-button'
        htmlFor={inputCheckBoxId}
      >
        <FaShoppingCart />
      </label>
      <input
        id={inputCheckBoxId}
        hidden
        type='checkbox'
      />

      <aside className='cart'>
        <ul>
          {cart.map((product) => {
            return (
              <li key={product.id}>
                <img
                  loading='lazy'
                  src={product.thumbnail}
                  alt={product.description}
                />
                <div>
                  <strong>{product.title}</strong>
                </div>
                <footer>
                  <small>Qty: {product.quantity}</small>
                  <button
                    onClick={() =>
                      dispatch({
                        type: CART_ACTION_TYPES.ADD_TO_CART,
                        payload: product,
                      })
                    }
                  >
                    +
                  </button>
                </footer>
                <button
                  onClick={() =>
                    dispatch({
                      type: CART_ACTION_TYPES.REMOVE_FROM_CART,
                      payload: product,
                    })
                  }
                >
                  Remove from cart
                </button>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}
