import { ReactNode, createContext, useEffect, useState } from 'react'
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
  const [cartIsOpen, setCartIsOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => setCartIsOpen(false), 3000)
  }, [cartIsOpen])

  function addCoffee(coffee: Coffee) {
    setCoffees([...coffees, coffee])
    setCartIsOpen(true)
  }

  function removeCoffee(coffeeId: string) {
    setCoffees(coffees.filter((coffee) => coffee.id !== coffeeId))
  }

  return (
    <CartContext.Provider value={{ addCoffee, removeCoffee, coffees }}>
      {children}
    </CartContext.Provider>
  )
}
