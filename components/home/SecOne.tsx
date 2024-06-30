import Image from "next/image"
import React from "react"
import heroImg from "@/public/assets/hero-img.png"
import Auth from "./Auth"
const SecOne = () => {
  return (
    <section id="home-one" className="px-20 bg-[#F7F5F9] flex justify-between">
      <div className="h-full pl-20 flex flex-col text-[36px] font-[600] w-[50%]">
        <h1 className="mt-24 mb-10">
          Explore your <span className="text-[#0096C8]">hobby</span> or{" "}
          <span className="text-[#8064A2]">passion</span>
        </h1>
        <p className="text-[14px] font-[300] mb-8">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities…
        </p>
        <p className="text-[14px] font-[300] mb-28">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
        <Image
          src={heroImg}
          alt="hero img"
          className="self-center justify-self-end"
        />
      </div>
      <div>
        <Auth />
      </div>
    </section>
  )
}

export default SecOne
