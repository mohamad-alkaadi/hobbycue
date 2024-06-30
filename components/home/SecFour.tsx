import {
  faMicrophone,
  faPlay,
  faPlus,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import userImg from "@/public/assets/record-img.png"
import Image from "next/image"
const SecFour = () => {
  return (
    <section
      id="home-four"
      className="h-[640px] px-20 py-28 bg-[#fff] flex justify-center items-center "
    >
      <div className="border-2 bg-[#F7F5F9] border-[#CED4DA] w-full max-w-[1248px] h-full px-16 flex flex-col justify-center rounded-[8px]">
        <div className="flex gap-0 mb-6">
          <div className="bg-[#8064A2] w-[31px] h-[31px] flex justify-center items-center rounded-full">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="w-[18px] text-white"
            />
          </div>
          <h3 className="text-[24px] font-[600] ml-6">Testimonials</h3>
        </div>
        <p className="text-[18px] text-[#6D747A] font-[300] mb-10">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>

        <div className="flex justify-between">
          <div className="w-[776px] h-[100px] bg-[#CCC1DA] flex items-center rounded-[8px]">
            <div className="bg-white ml-10 w-[40px] h-[40px] flex justify-center items-center rounded-full">
              <FontAwesomeIcon
                className="w-[18px] h-[18px] text-[#8064A2]"
                icon={faPlay}
              />
            </div>
            <div className="ml-10 flex justify-center items-center">
              <div className="w-3 h-3 bg-[#8064A2] rounded-full"></div>
              <div className="w-[468px] bg-white h-[3px]"></div>
            </div>
            <p className="ml-3 text-[12px] text-[#8064A2]">0:00</p>
            <div className="flex w-[60px] h-[60px] ml-10 relative">
              <Image
                className="rounded-full z-0"
                src={userImg}
                draggable={false}
                width={60}
                height={60}
                alt="recording img"
              />
              <FontAwesomeIcon
                className="text-white absolute w-5 h-5 mt-9 mr-3 z-40"
                icon={faMicrophone}
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Image
              className="rounded-full h-[100px] w-[100px]"
              src={userImg}
              draggable={false}
              width={60}
              height={60}
              alt="user img"
            />
            <div>
              <p className="text-[#8064A2] text-[18px] font-[600]">
                Shubha Nagarajan
              </p>
              <p className="text-[#0096C8] text-[14px] font-[400]">
                Classical Dancer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecFour
