'use client'
import { useCart } from '@/hooks/useCart'
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
    price: number
    tag: {
      id: string
      tag: string
    }[]
  }
}

export function AddQuantiCart({ coffee }: AddQuantiCartProps) {
  const [amount, setQuantity] = useState(1)
  const { addCoffee } = useCart()

  function handleQuantity(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target

    const quantity = Number(value)

    if (!Number.isInteger(quantity)) {
      return
    }

    setQuantity(quantity)
  }

  function handleAddQuantity() {
    setQuantity(amount + 1)
  }

  function handleRemoveQuantity() {
    setQuantity(amount - 1)
  }

  function handleAddCart() {
    const newProduct = {
      id: coffee.id,
      title: coffee.title,
      imageURL: coffee.image.url,
      price: coffee.price,
      amount,
    }
    addCoffee(newProduct)
  }

  return (
    <div className="mt-8 flex items-center gap-2">
      <p className="text-sm text-base-text">
        R${' '}
        <span className="font-title text-2xl font-extrabold">
          {coffee.price}
        </span>
      </p>
      <div className="ml-auto flex items-center justify-between rounded-lg bg-base-button p-2">
        <button onClick={handleRemoveQuantity}>
          <Minus className="text-secondary-700" size={14} />
        </button>
        <input
          value={amount}
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
