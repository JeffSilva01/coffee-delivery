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
  coffees: { [key: string]: Coffee }
  addCoffee: (coffee: Coffee) => void
  removeCoffee: (id: string) => void
}

const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [coffees, setCoffees] = useState<{ [key: string]: Coffee }>({})

  const [cartIsOpen, setCartIsOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => setCartIsOpen(false), 3000)
  }, [cartIsOpen])

  function addCoffee(coffee: Coffee) {
    setCoffees((state) => ({ ...state, [coffee.id]: coffee }))
    setCartIsOpen(true)
  }

  function removeCoffee(coffeeId: string) {
    setCoffees((state) => {
      delete state[coffeeId]
      return state
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
