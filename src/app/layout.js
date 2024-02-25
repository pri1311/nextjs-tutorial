import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-dark2 no-underline text-light2 box-border m-0"}>
        <div className='bg-dark2 w-5/6 m-auto px-4 min-h-screen flex flex-col justify-between'>
          <NavBar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}