import Footer from './footer'
import './globals.css'
import Header from './header'
import { SessionProvider } from 'next-auth/react'


export default function RootLayout({ children, session }) {

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className=' bg-body-backdground'>
          <Header />
          <div className=' h-full min-h-screen'>
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </SessionProvider>
  )
}
