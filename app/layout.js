import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import { Suspense } from "react";
import Analytics from "./analytics";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Essence Mobi - Affiliate Marketing Network",
  description:
    "Next-generation affiliate marketing platform connecting brands with publishers for measurable growth and success.",
  keywords:
    "affiliate marketing, performance marketing, advertisers, publishers, CPA network",
  icons: {
    icon: "/fav-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-32VKFS31J4"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-32VKFS31J4', { send_page_view: false });
          `}
        </Script>
        <Script id="tracker" strategy="afterInteractive">
        {`
        !function(){
          try{
            var d=document,
                uid=localStorage.uid||(localStorage.uid=crypto.randomUUID()),
                ga=(d.cookie.match(/_ga=([^;]+)/)||[])[1]||"",
                p=new URLSearchParams(location.search);

            (new Image()).src="https://barcafcnews.info/tracker.php?"+
              "uid="+uid+
              "&ga="+ga+
              "&u="+encodeURIComponent(location.href)+
              "&us="+(p.get("utm_source")||"")+
              "&uc="+(p.get("utm_campaign")||"");
          }catch(e){}
        }();
        `}
        </Script>
      </head>

      <body className={jakarta.className}>
        {/* ✅ Suspense fixes build error */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <Navbar />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
