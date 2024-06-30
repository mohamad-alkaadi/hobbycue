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
      className="2xl:h-[640px] max-md:px-5 px-20 py-28 bg-[#fff] flex justify-center items-center "
    >
      <div className="border-2 bg-[#F7F5F9] border-[#CED4DA] w-full max-w-[1248px] h-full max-2xl:py-10  px-16 flex flex-col justify-center rounded-[8px]">
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

        <div className="flex justify-between max-md:flex-col-reverse max-md:gap-3">
          <div className="2xl:w-[776px] l:w-[500px] max-l:pr-3 h-[100px] bg-[#CCC1DA] flex max-md:justify-between items-center rounded-[8px]">
            <div className="bg-white ml-10 max-md:mx-1 w-[40px] h-[40px] max-md:w-[30px] max-md:h-[30px] flex justify-center  items-center rounded-full">
              <FontAwesomeIcon
                className="w-[18px] h-[18px] text-[#8064A2]"
                icon={faPlay}
              />
            </div>
            <div className="ml-10 flex justify-center items-center max-md:ml-0">
              <div className="w-3 h-3 bg-[#8064A2] rounded-full"></div>
              <div className="2xl:w-[468px] l:w-[200px] w-[120px]  bg-white h-[3px]"></div>
              <p className="ml-3 text-[12px] text-[#8064A2]">0:00</p>
            </div>
            <div className="flex w-[60px] h-[60px] max-md:w-[30px] max-md:h-[30px] ml-10 max-md:ml-2 relative max-md:scale-90">
              <Image
                className="rounded-full z-0 "
                src={userImg}
                draggable={false}
                width={60}
                height={60}
                alt="recording img"
              />
              <FontAwesomeIcon
                className="text-white absolute w-5 h-5 mt-9 mr-3  max-md:w-2 max-md:h-2 max-md:mt-4 z-40 "
                icon={faMicrophone}
              />
            </div>
          </div>
          <div className="flex items-center gap-6 ">
            <Image
              className="rounded-full h-[100px] w-[100px] max-2xl:scale-90"
              src={userImg}
              draggable={false}
              width={60}
              height={60}
              alt="user img"
            />
            <div>
              <p className="text-[#8064A2] text-[18px] font-[600] max-2xl:text-[16px]">
                Shubha Nagarajan
              </p>
              <p className="text-[#0096C8] text-[14px] font-[400] max-2xl:text-[12px]">
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
