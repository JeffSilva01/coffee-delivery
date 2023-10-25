import Image from 'next/image'
import { Cart } from './Cart'
import { UserLocation } from './UserLocation'

export function Header() {
  return (
    <header className="header fixed w-full">
      <div className="container mx-auto flex h-24 items-center gap-2">
        <Image
          className="mr-auto"
          src="/logo.svg"
          alt=""
          width={85}
          height={40}
        />
        <UserLocation />
        <Cart />
      </div>
    </header>
  )
}
