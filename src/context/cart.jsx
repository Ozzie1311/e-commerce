import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id)

    //Si el producto está en el carrito
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    //Sí el product no está en el carrito
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ])
  }

  const clearCart = () => {
    setCart([])
  }

  const removeFromCart = (product) => {
    //Solamente hacer un filter no nos resuelve el problema, porque en ningún momento estamos actualizando el estado.
    //Es importante no mutar el estado y crear un nuevo array con el producto filtrado y luego de eso es que modificamos el estado.
    const newCart = cart.filter((item) => item.id !== product.id)
    setCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('Context must be used within a provider')
  }

  return context
}
