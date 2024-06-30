"use client"
import {
  faBasketShopping,
  faBookmark,
  faLocationDot,
  faPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"

const AfterSignOne = () => {
  const [overOne, setOverOne] = useState(false)
  const [overTwo, setOverTwo] = useState(false)
  const [overThree, setOverThree] = useState(false)
  const [overFour, setOverFour] = useState(false)
  return (
    <section
      id="home-two"
      className="md:h-screen md:mt-0 max-md:px-5 mt-20 px-20 bg-[#fff] flex flex-col justify-center items-center"
    >
      <div>
        <div className="flex gap-0 mb-6">
          <div className="bg-[#0096C8] w-[31px] h-[31px] flex justify-center items-center rounded-full">
            <FontAwesomeIcon
              className="w-[18px]  max-sm:text-[16px] text-white"
              icon={faPlus}
            />
          </div>
          <h3 className="text-[24px] font-[600] ml-6 max-sm:text-[16px]">
            Add your own
          </h3>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1 justify-center items-center gap-8">
        <div
          onMouseOver={() => setOverOne(true)}
          onMouseLeave={() => setOverOne(false)}
          className="hover:bg-[#8064A2] border-2 2xl:w-[608px] h-[297px] flex flex-col justify-center items-start px-14 rounded-[8px] border-[#8064A2]"
        >
          <div className={`flex justify-center items-center gap-6 mb-5 `}>
            <FontAwesomeIcon
              icon={faUsers}
              className={`w-[38px] h-[38px] ${
                overOne ? "text-white" : "text-[#8064A2]"
              } `}
            />
            <h2
              className={`text-[24px] font-[600] ${
                overOne ? "text-white" : "text-black"
              } `}
            >
              People
            </h2>
          </div>
          <p
            className={`2xl:w-[520px] mb-8 ${
              overOne ? "text-white" : "text-black"
            }`}
          >
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator
          </p>
        </div>
        <div
          onMouseOver={() => setOverTwo(true)}
          onMouseLeave={() => setOverTwo(false)}
          className="border-2 hover:bg-[#77933C] 2xl:w-[608px] h-[297px] flex flex-col justify-center items-start px-14 rounded-[8px] border-[#77933C]"
        >
          <div className="flex  justify-center items-center gap-6 mb-5">
            <FontAwesomeIcon
              icon={faLocationDot}
              className={`w-[23.33px] h-[33.33px] ${
                overTwo ? "text-white" : "text-[#77933C]"
              }`}
            />
            <h2
              className={`text-[24px] font-[600] ${
                overTwo ? "text-white" : "text-black"
              }`}
            >
              Place
            </h2>
          </div>
          <p
            className={`2xl:w-[520px] mb-8 ${
              overTwo ? "text-white" : "text-black"
            }`}
          >
            Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through
            hobbycue.
          </p>
        </div>
        <div
          onMouseOver={() => setOverThree(true)}
          onMouseLeave={() => setOverThree(false)}
          className="border-2 hover:bg-[#C0504D] 2xl:w-[608px] h-[297px] flex flex-col justify-center items-start px-14 rounded-[8px] border-[#C0504D]"
        >
          <div className="flex justify-center items-center gap-6 mb-5">
            <FontAwesomeIcon
              icon={faBasketShopping}
              className={`w-[38px] h-[38px] ${
                overThree ? "text-white" : "text-[#C0504D]"
              }`}
            />
            <h2
              className={`text-[24px] font-[600] ${
                overThree ? "text-white" : "text-black"
              }`}
            >
              Product
            </h2>
          </div>
          <p
            className={`2xl:w-[520px] mb-8 ${
              overThree ? "text-white" : "text-black"
            }`}
          >
            Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.
          </p>
        </div>
        <div
          onMouseOver={() => setOverFour(true)}
          onMouseLeave={() => setOverFour(false)}
          className="border-2 hover:bg-[#0096C8] 2xl:w-[608px] h-[297px] flex flex-col justify-center items-start px-14 rounded-[8px] border-[#0096C8]"
        >
          <div className="flex justify-center items-center gap-6 mb-5">
            <FontAwesomeIcon
              icon={faBookmark}
              className={`w-[23.33px] h-[33.33px] ${
                overFour ? "text-white" : "text-[#0096C8]"
              }`}
            />
            <h2
              className={`text-[24px] font-[600] ${
                overFour ? "text-white" : "text-black"
              }`}
            >
              Program
            </h2>
          </div>
          <p
            className={`2xl:w-[520px] mb-8 ${
              overFour ? "text-white" : "text-black"
            }`}
          >
            Find events, meetups and workshops related to your hobby. Register
            or buy tickets online.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AfterSignOne
