'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

type Coffee = {
  id: string
  title: string
  imageURL: string
  price: number
  amount: number
}

type CartContextData = {
  coffees: Coffee[]
  addCoffee: (coffee: Coffee) => void
  removeCoffee: (id: string) => void
}

const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  function addCoffee(coffee: Coffee) {
    setCoffees((state) => {
      const productExists = state.findIndex((item) => item.id === coffee.id)

      if (productExists < 0) {
        return [...state, coffee]
      }

      state.splice(productExists, 1, coffee)

      return state
    })
  }

  function removeCoffee(coffeeId: string) {
    setCoffees((state) => {
      return state.filter((coffee) => coffee.id !== coffeeId)
    })
  }

  return (
    <CartContext.Provider value={{ addCoffee, removeCoffee, coffees }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  return context
}
