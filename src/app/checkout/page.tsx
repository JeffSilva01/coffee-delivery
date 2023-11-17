import { Input } from '@/components/Input'
import { MapPin } from 'lucide-react'

export default function Page() {
  return (
    <div className="container mx-auto pt-24">
      <div className="w-3/5">
        <p>Complete seu pedido</p>
        <div className="rounded-md bg-base-card p-10">
          <div>
            <MapPin />
            <span>Endereço de entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
          <form action="" className="grid grid-cols-9 gap-4">
            <Input placeholder="CEP" className="col-span-3" />
            <Input placeholder="Rua" className="col-span-9" />
            <Input placeholder="Número" className="col-span-3" />
            <Input
              placeholder="Complemento"
              className="col-span-6"
              isOptional
            />
            <Input placeholder="Bairro" className="col-span-3" />
            <Input placeholder="Cidade" className="col-span-5" />
            <Input placeholder="UF" className="col-span-1" />
          </form>
        </div>
      </div>
      <div className="w-2/5"></div>
    </div>
  )
}
