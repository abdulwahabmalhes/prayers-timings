
import './globals.css'
import { Footer, NavBar } from '@/components'

export const metadata = {
  title: 'Car Hub',
  description: 'Discover the Best Car in The World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="relative">
      <NavBar />

        {children}
        <Footer />
        </body>
    </html>
  )
}
