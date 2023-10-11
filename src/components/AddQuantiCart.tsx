import { Minus, Plus, ShoppingCart } from 'lucide-react'

export function AddQuantiCart() {
  return (
    <div className="mt-8 flex items-center gap-2">
      <p className="text-sm text-base-text">
        R$ <span className="font-title text-2xl font-extrabold">9,99</span>
      </p>
      <div className="ml-auto flex items-center justify-between rounded-lg bg-base-button p-2">
        <button>
          <Minus className="text-secondary-700" size={14} />
        </button>
        <input
          value="01"
          readOnly
          className="h-5 w-5 bg-transparent text-center"
          type="text"
        />
        <button>
          <Plus className="text-secondary-700" size={14} />
        </button>
      </div>

      <button className="rounded-lg bg-secondary-700 p-2">
        <ShoppingCart size={22} className="fill-base-card text-base-card" />
      </button>
    </div>
  )
}
