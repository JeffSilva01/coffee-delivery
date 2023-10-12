'use client'
import { useCartContext } from '@/context/CartContext'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export function Cart() {
  const { coffees } = useCartContext()

  return (
    <div className="group relative flex items-center justify-center rounded bg-primary-300 p-2">
      <Link href="/cart">
        <ShoppingCart size={22} className="fill-primary-700 text-primary-700" />
      </Link>
      <div className="absolute top-full hidden group-hover:block">
        {Object.entries(coffees).map(([key, coffee]) => (
          <p key={key}>
            {coffee.title} - {coffee.quantity}
          </p>
        ))}
      </div>
    </div>
  )
}
