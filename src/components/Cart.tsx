'use client'
import { useCartContext } from '@/context/CartContext'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export function Cart() {
  const { coffees } = useCartContext()

  return (
    <Link
      data-hidden="teste"
      data-count={coffees.length}
      className="relative rounded-md bg-primary-300 p-2 before:absolute before:-right-2 before:-top-2 before:h-5 before:w-5 before:rounded-full before:bg-primary-500 before:text-center before:text-sm before:font-bold  before:text-white before:content-[attr(data-count)] before:data-[count='0']:hidden"
      href="/cart"
    >
      <ShoppingCart size={22} className="fill-primary-700 text-primary-700" />
    </Link>
  )
}
