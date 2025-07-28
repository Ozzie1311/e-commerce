import { createContext, useState, useContext, useReducer } from 'react'

const CartContext = createContext()

const initialState = []

const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  DECREMENT: 'DECREMENT',
}

function cartReducer(state, action) {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const productIndex = state.findIndex((item) => item.id === payload.id)
      if (productIndex >= 0) {
        const newCart = structuredClone(state)
        newCart[productIndex].quantity += 1
        return newCart
      }
      return [
        ...state,
        {
          ...payload,
          quantity: 1,
        },
      ]
    }
    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const productIndex = state.findIndex((item) => item.id === payload.id)
      if (productIndex < 0) return state
      return state.filter((item) => item.id !== payload.id)
    }
    case CART_ACTION_TYPES.CLEAR_CART: {
      return initialState
    }
    case CART_ACTION_TYPES.DECREMENT: {
      const productIndex = findIndex((item) => item.id === payload.id)
      if (productIndex < 0) return state
      const findProduct = state[productIndex]

      if (findProduct === 1) {
        return state.filter((item) => item.id !== payload.id)
      }

      const newCart = structuredClone(state)
      newCart[productIndex].quantity -= 1
      return newCart
    }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider
      value={{
        cart: state,
        dispatch,
        CART_ACTION_TYPES,
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
