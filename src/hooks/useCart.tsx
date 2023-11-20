'use client'
import { produce } from 'immer'
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
  incrementedAmount: (id: string) => void
  decrementedAmount: (id: string) => void
  totalValue: number
}

const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  const totalValue = coffees.reduce(
    (acc, coffee) => coffee.price * coffee.amount + acc,
    0,
  )

  function addCoffee(coffee: Coffee) {
    const coffeeIndex = coffees.findIndex((item) => item.id === coffee.id)

    if (coffeeIndex >= 0) {
      setCoffees((state) => {
        return produce(state, (draft) => {
          draft.splice(coffeeIndex, 1, coffee)
        })
      })
    } else {
      setCoffees([...coffees, coffee])
    }
  }

  function removeCoffee(coffeeId: string) {
    setCoffees((state) => {
      return produce(state, (draft) => {
        const index = draft.findIndex((coffee) => coffee.id === coffeeId)
        draft.splice(index, 1)
      })
    })
  }

  function incrementedAmount(coffeeId: string) {
    const index = coffees.findIndex((coffee) => coffee.id === coffeeId)

    if (index < 0) {
      return
    }

    setCoffees((state) => {
      return produce(state, (draft) => {
        draft[index].amount++
      })
    })
  }

  function decrementedAmount(coffeeId: string) {
    const index = coffees.findIndex((coffee) => coffee.id === coffeeId)

    if (index < 0) {
      return
    }

    if (coffees[index].amount === 1) {
      return
    }

    setCoffees((state) => {
      return produce(state, (draft) => {
        draft[index].amount--
      })
    })
  }

  return (
    <CartContext.Provider
      value={{
        addCoffee,
        removeCoffee,
        coffees,
        incrementedAmount,
        decrementedAmount,
        totalValue,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  return context
}
