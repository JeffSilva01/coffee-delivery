'use client'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type Coffee = {
  id: string
  title: string
  image: {
    url: string
    width: number
    height: number
  }
  value: number
  quantity: number
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
    setCoffees((state) => [...state, coffee])
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

export function useCartContext() {
  const context = useContext(CartContext)

  return context
}
