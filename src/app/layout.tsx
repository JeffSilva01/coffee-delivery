import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Baloo_2 as Baloo2 } from 'next/font/google'
import { CartContextProvider } from '@/hooks/useCart'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})
const ballo2 = Baloo2({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-ballo',
})

export const metadata: Metadata = {
  title: 'Coffee Delivery',
  description:
    'Desfrute do sabor mais puro e aromático do café fresco. Nosso café Delivre é cuidadosamente selecionado, torrado com maestria e entregue à sua porta. Experimente uma xícara de excelência todos os dias com nossa ampla variedade de grãos de café gourmet. Encontre a sua paixão pelo café conosco.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${ballo2.variable}`}>
      <body>
        <>
          <CartContextProvider>
            <Header />
            {children}
          </CartContextProvider>
        </>
      </body>
    </html>
  )
}
