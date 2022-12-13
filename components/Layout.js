import Head from "next/head"
import dynamic from "next/dynamic"
import Footer from "@components/Footer"

const Navbar = dynamic(
  () => import('./Navbar'),
  { ssr: false },
)

function Layout({ children }) {
  return (
    <div className=" font-roboto">
      <Head>
        <title>Beranda | Kulola</title>
        <meta name="description" content="Copyright by Kulola with next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
export default Layout