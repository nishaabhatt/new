import HeaderTop from "@/components/HeaderTop"
import Navbar from "@/components/Navbar"
import NavbarBottom from "@/components/NavbarBottom"
import Banner from "@/components/Banner"
import Head from "next/head"

export default function Home() {
  return (
    <main className="bg-white">
      <HeaderTop />
        <Navbar />
        <NavbarBottom />
      <div className="max-w-container mx-auto bg-white"> 
        <Banner />
      </div>
    </main>
  )
}
