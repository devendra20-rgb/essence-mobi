import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Essence Mobi - Affiliate Marketing Network',
  description: 'Next-generation affiliate marketing platform connecting brands with publishers for measurable growth and success.',
  keywords: 'affiliate marketing, performance marketing, advertisers, publishers, CPA network',
    icons: {
    icon: '/fav-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

