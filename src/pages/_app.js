import '@/styles/globals.css'
import NavbarLarge from "@/components/NavbarLarge";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
      <>
          <NavbarLarge />
          <Component {...pageProps} />
          <Footer />
      </>
  )
}
