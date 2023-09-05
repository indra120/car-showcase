import './globals.css'

import { NavBar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Car Showcase',
  description: "Discover world's best car showcase application",
}

const RootLayout = (props: ParentProps) => (
  <html lang="en">
    <body className="relative">
      <NavBar />
      {props.children}
      <Footer />
    </body>
  </html>
)

export default RootLayout