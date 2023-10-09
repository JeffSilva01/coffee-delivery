import Image from 'next/image'
import { AddQuantiCart } from './AddQuantiCart'

export function Card() {
  return (
    <div className="flex flex-col items-center rounded-card bg-base-card p-5 pt-0">
      <Image
        className="-mt-8"
        src="/cafe-com-leite.png"
        width={120}
        height={120}
        alt=""
      />
      <div className="mt-4 flex flex-wrap items-center justify-center gap-1">
        <span className="rounded-full bg-primary-300 px-2 font-bold text-primary-700">
          Tradicional
        </span>
        <span className="rounded-full bg-primary-300 px-2 font-bold text-primary-700">
          Tradicional
        </span>
        <span className="rounded-full bg-primary-300 px-2 font-bold text-primary-700">
          Tradicional
        </span>
      </div>

      <h4 className="mt-5 font-title text-xl">Expresso Tradicional</h4>
      <p className="mt-2 text-center text-sm text-base-label">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <AddQuantiCart />
    </div>
  )
}
