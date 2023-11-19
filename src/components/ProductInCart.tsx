import { Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'

type ProductInCartProps = {
  coffee: {
    id: string
    title: string
    imageURL: string
    price: number
    amount: number
  }
}

export function ProductInCart({ coffee }: ProductInCartProps) {
  return (
    <div className="flex w-full items-center gap-5 border-b-2 py-6">
      <Image src={coffee.imageURL} width={64} height={64} alt="" />
      <div className="grid grid-cols-2 gap-2">
        <span className="col-span-2 to-base-subtitle">{coffee.title}</span>
        <div className="flex items-center justify-around gap-1 rounded-md bg-base-button p-2">
          <button>
            <Minus className="text-secondary-500" />
          </button>
          <span className="to-base-title">{coffee.amount}</span>
          <button>
            <Plus className="text-secondary-500" />
          </button>
        </div>
        <button className="flex items-center gap-1 rounded-md bg-base-button p-2 text-base-text">
          <Trash className="text-secondary-500" /> Remover
        </button>
      </div>
      <span className="ml-auto font-bold text-base-text">{coffee.price}</span>
    </div>
  )
}
