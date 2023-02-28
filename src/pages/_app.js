import '@/styles/globals.css'
import NavbarLarge from "@/components/NavbarLarge";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
      <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
      </>
  )
}
