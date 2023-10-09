import { Card } from '@/components/Card'
import { Coffee, Package, ShoppingCart, Timer } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className="flex h-[544px] w-full items-center">
        <Image
          className="absolute -z-10 w-full object-cover"
          src="/Background.jpg"
          alt=""
          width={1440}
          height={544}
        />
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-[588px]">
            <h1 className="font-title text-5xl text-base-title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="mt-4 text-xl text-base-subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <div className="mt-16 grid grid-cols-2 gap-y-5 text-base-text">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary-700">
                  <ShoppingCart
                    size={16}
                    className="m-2 text-base-background"
                  />
                </div>
                <span>Compra simples e segura</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-base-text">
                  <Package size={16} className="m-2 text-base-background" />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary-500">
                  <Timer size={16} className="m-2 text-base-background" />
                </div>
                <span>Entrega rápida e rastreada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-secondary-500">
                  <Coffee size={16} className="m-2 text-base-background" />
                </div>
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </div>
          <Image src="/Imagem.png" alt="" width={476} height={360} />
        </div>
      </section>
      <section className="container mx-auto">
        <h2 className="font-title text-3xl text-base-title">Nossos cafés</h2>
        <div className="grid-cols-cards mt-14 grid gap-8 border">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  )
}
