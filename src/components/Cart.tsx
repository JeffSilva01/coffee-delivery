'use client'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export function Cart() {
  return (
    <Link className="rounded-md bg-primary-300 p-2" href="/cart">
      <ShoppingCart size={22} className="fill-primary-700 text-primary-700" />
    </Link>
  )
}
