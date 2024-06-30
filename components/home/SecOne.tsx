import Image from "next/image"
import React from "react"
import heroImg from "@/public/assets/hero-img.png"
import Auth from "./Auth"
const SecOne = () => {
  return (
    <section
      id="home-one"
      className="px-20 bg-[#F7F5F9] flex justify-between max-md:px-5"
    >
      <div className="h-full md:pl-20 md:pr-25 l:pr-28 flex flex-col  l:w-[70%]">
        <h1 className="mt-24 mb-10 text-[36px] font-[600] max-l:text-[24px]">
          Explore your <span className="text-[#0096C8]">hobby</span> or{" "}
          <span className="text-[#8064A2]">passion</span>
        </h1>
        <p className="text-[14px] font-[300] mb-8 max-l:text-[12px]">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities…
        </p>
        <p className="text-[14px] max-l:text-[12px] font-[300] l:mb-28">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
        <div className="l:hidden w-[100%] flex justify-center ">
          <Auth />
        </div>
        <Image
          src={heroImg}
          alt="hero img"
          className="self-center justify-self-end"
        />
      </div>
      <div className="l:w-[30%] l:block hidden">
        <Auth />
      </div>
    </section>
  )
}

export default SecOne
