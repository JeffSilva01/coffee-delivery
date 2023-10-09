import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export function Cart() {
  return (
    <div className="group relative flex items-center justify-center rounded bg-primary-300 p-2">
      <Link href="/cart">
        <ShoppingCart size={22} className="fill-primary-700 text-primary-700" />
      </Link>
      <div className="absolute top-full hidden group-hover:block">cart</div>
    </div>
  )
}

// 316534520 - 2023
