import Navbar from './Navbar/navbar'
import Footer from './Footer/footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
} 