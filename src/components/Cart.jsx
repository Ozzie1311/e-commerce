import { useId } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/cart'

export function Cart() {
  const inputCheckBoxId = useId()
  const { cart, addToCart, removeFromCart } = useCart()

  return (
    <>
      <div>
        <label htmlFor={inputCheckBoxId}>
          <FaShoppingCart />
          <input
            id={inputCheckBoxId}
            hidden
            type='checkbox'
          />
        </label>
      </div>

      <aside>
        <ul>
          {cart.map((product) => {
            return (
              <li key={product.id}>
                <img
                  loading='lazy'
                  width={200}
                  height={200}
                  src={product.thumbnail}
                  alt={product.description}
                />
                <div>
                  <strong>{product.title}</strong>
                </div>
                <footer>
                  <small>Qty: {product.quantity}</small>
                  <button onClick={() => addToCart(product)}>+</button>
                </footer>
                <button onClick={() => removeFromCart(product)}>
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
