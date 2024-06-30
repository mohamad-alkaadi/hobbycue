import Image from "next/image"
import React from "react"
import footerImg from "@/public/assets/footer-img.png"
const SecFive = () => {
  return (
    <section
      id="home-four"
      className="h-[640px] px-20 py-28 bg-[#F7FDFF] flex flex-col"
    >
      <h4 className="text-[36px] font-[500]">
        Your <span className="text-[#8064A2]">Hobby</span>, Your{" "}
        <span className="text-[#0096C8]">Community...</span>
      </h4>
      <button className="hover:text-[#8064A2] border-2 border-[#8064A2] hover:bg-white bg-[#8064A2] text-white w-fit px-2 h-[40px] rounded-[8px] text-[20px] font-[500] mt-6">
        Get started
      </button>
      <Image src={footerImg} alt="people footer" className="m-auto mt-20" />
    </section>
  )
}
export default SecFive
