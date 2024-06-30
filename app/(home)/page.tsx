import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SecFive from "@/components/home/SecFive"
import SecFour from "@/components/home/SecFour"
import SecOne from "@/components/home/SecOne"
import SecThree from "@/components/home/SecThree"
import SecTwo from "@/components/home/SecTwo"

export default function Home() {
  return (
    // <>
    //   <div className="h-screen w-screen">
    //     <Navbar />
    //   </div>
    //   <main className="h-screen w-screen bg-[#F7F5F9]"></main>
    // </>
    <>
      <Navbar />
      <main className="select-none">
        <SecOne />
        <SecTwo />
        <SecThree />
        <SecFour />
        <SecFive />
        <Footer />
      </main>
    </>
  )
}
