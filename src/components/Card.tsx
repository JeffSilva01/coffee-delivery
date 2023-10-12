import Image from 'next/image'
import { AddQuantiCart } from './AddQuantiCart'

type cardProps = {
  coffee: {
    id: string
    title: string
    description: string
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

export function Card({ coffee }: cardProps) {
  return (
    <div className="flex flex-col items-center rounded-card bg-base-card p-5 pt-0">
      <Image
        className="-mt-8"
        src={coffee.image.url}
        width={coffee.image.width}
        height={coffee.image.height}
        alt=""
      />
      <div className="mt-4 flex flex-wrap items-center justify-center gap-1">
        {coffee.tag.map((tag) => (
          <span
            key={tag.id}
            className="rounded-full bg-primary-300 px-2 font-bold text-primary-700"
          >
            {tag.tag}
          </span>
        ))}
      </div>

      <h4 className="mt-5 font-title text-xl">{coffee.title}</h4>
      <p className="mt-2 text-center text-sm text-base-label">
        {coffee.description}
      </p>
      <AddQuantiCart coffee={coffee} />
    </div>
  )
}
