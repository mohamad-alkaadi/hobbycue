import {
  faBasketShopping,
  faBookmark,
  faLocationDot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const SecTwo = () => {
  return (
    <section
      id="home-two"
      // className="h-screen px-20 bg-blue-300 flex justify-center items-center"
      className="h-screen px-20 bg-[#fff] flex justify-center items-center"
    >
      <div className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-8">
        <div className="border-2 w-[608px] h-[297px] flex flex-col justify-center items-start px-14 rounded-[8px] border-[#CED4DA]">
          <div className="flex justify-center items-center gap-6 mb-5">
            <FontAwesomeIcon
              icon={faUsers}
              className="w-[38px] text-[#8064A2]"
            />
            <h2 className="text-[24px] font-[600]">People</h2>
          </div>
          <p className="w-[520px] mb-8">
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator
          </p>
          <button className="text-[#8064A2] border-2 border-[#8064A2] hover:bg-[#8064A2] hover:text-white w-[112px] h-[40px] rounded-[8px]">
            Connect
          </button>
        </div>
        <div className="border-2 w-[608px] h-[297px] flex flex-col justify-center items-start px-14 rounded-[8px] border-[#CED4DA]">
          <div className="flex justify-center items-center gap-6 mb-5">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="w-[23.33px] h-[33.33px] text-[#77933C]"
            />
            <h2 className="text-[24px] font-[600]">Place</h2>
          </div>
          <p className="w-[520px] mb-8">
            Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through
            hobbycue.
          </p>
          <button className="text-[#8064A2] border-2 border-[#8064A2] hover:bg-[#8064A2] hover:text-white w-[112px] h-[40px] rounded-[8px]">
            Meet up
          </button>
        </div>
        <div className="border-2 w-[608px] h-[297px] flex flex-col justify-center items-start px-14 rounded-[8px] border-[#CED4DA]">
          <div className="flex justify-center items-center gap-6">
            <FontAwesomeIcon
              icon={faBasketShopping}
              className="w-[38px] text-[#C0504D] "
            />
            <h2 className="text-[24px] font-[600] mb-5">Product</h2>
          </div>
          <p className="w-[520px] mb-8">
            Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.
          </p>
          <button className="text-[#8064A2] border-2 border-[#8064A2] hover:bg-[#8064A2] hover:text-white w-[112px] h-[40px] rounded-[8px]">
            Get it
          </button>
        </div>
        <div className="border-2 w-[608px] h-[297px] flex flex-col justify-center items-start px-14 rounded-[8px] border-[#CED4DA]">
          <div className="flex justify-center items-center gap-6 mb-5">
            <FontAwesomeIcon
              icon={faBookmark}
              className="w-[23.33px] h-[33.33px] text-[#0096C8] "
            />
            <h2 className="text-[24px] font-[600]">Program</h2>
          </div>
          <p className="w-[520px] mb-8">
            Find events, meetups and workshops related to your hobby. Register
            or buy tickets online.
          </p>
          <button className="text-[#8064A2] border-2 border-[#8064A2] hover:bg-[#8064A2] hover:text-white w-[112px] h-[40px] rounded-[8px]">
            Attend
          </button>
        </div>
      </div>
    </section>
  )
}

export default SecTwo
