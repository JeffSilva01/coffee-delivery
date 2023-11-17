import { Input } from '@/components/Input'
import { InputRadio } from '@/components/InputRadio'
import { MapPin } from 'lucide-react'

export default function Page() {
  return (
    <div className="container mx-auto flex gap-8 pt-24">
      <div className="w-3/5 space-y-3">
        <p className="font-title text-lg font-bold text-base-subtitle">
          Complete seu pedido
        </p>
        <div className="rounded-md bg-base-card p-10">
          <div className="mb-8 flex gap-2">
            <MapPin className="text-primary-700" />
            <div>
              <span className="text-base-subtitle">Endereço de entrega</span>
              <p className="text-sm text-base-text">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
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
        <div className="rounded-md bg-base-card p-10">
          <div className="mb-8 flex gap-2">
            <MapPin className="text-primary-700" />
            <div>
              <span className="text-base-subtitle">Pagamento</span>
              <p className="text-sm text-base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <InputRadio className="block" name="payment">
              Cartão de credito
            </InputRadio>
            <InputRadio className="block" name="payment">
              Cartão de debito
            </InputRadio>
            <InputRadio className="block" name="payment">
              Dinheiro
            </InputRadio>
          </div>
        </div>
      </div>
    </div>
  )
}
