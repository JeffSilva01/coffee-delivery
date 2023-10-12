'use client'
import { useCartContext } from '@/context/CartContext'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { ChangeEvent, useState } from 'react'

type AddQuantiCartProps = {
  coffee: {
    id: string
    title: string
    image: {
      url: string
      width: number
      height: number
    }
    value: number
    tag: {
      id: string
      tag: string
    }[]
  }
}

export function AddQuantiCart({ coffee }: AddQuantiCartProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffee } = useCartContext()

  function handleQuantity(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target

    const quantity = Number(value)

    if (!Number.isInteger(quantity)) {
      return
    }

    setQuantity(quantity)
  }

  function handleAddQuantity() {
    setQuantity(quantity + 1)
  }

  function handleRemoveQuantity() {
    setQuantity(quantity - 1)
  }

  function handleAddCart() {
    addCoffee({
      ...coffee,
      quantity,
    })
  }

  return (
    <div className="mt-8 flex items-center gap-2">
      <p className="text-sm text-base-text">
        R$ <span className="font-title text-2xl font-extrabold">9,99</span>
      </p>
      <div className="ml-auto flex items-center justify-between rounded-lg bg-base-button p-2">
        <button onClick={handleRemoveQuantity}>
          <Minus className="text-secondary-700" size={14} />
        </button>
        <input
          value={quantity}
          className="h-5 w-5 bg-transparent text-center"
          onChange={handleQuantity}
          type="text"
        />
        <button onClick={handleAddQuantity}>
          <Plus className="text-secondary-700" size={14} />
        </button>
      </div>

      <button
        onClick={handleAddCart}
        className="rounded-lg bg-secondary-700 p-2"
      >
        <ShoppingCart size={22} className="fill-base-card text-base-card" />
      </button>
    </div>
  )
}
