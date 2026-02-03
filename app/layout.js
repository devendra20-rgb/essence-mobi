import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'   // ✅ ADD THIS

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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-32VKFS31J4"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-32VKFS31J4');
          `}
        </Script>
      </head>

      <body className={jakarta.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
