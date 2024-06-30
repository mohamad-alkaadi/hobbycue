"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import logo from "@/public/assets/logo-big-screen.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBell,
  faBookmark,
  faCartShopping,
  faChevronDown,
  faChevronUp,
  faCompass,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
  const [exploreOpen, setExploreOpen] = useState(false)
  return (
    <nav className="bg-white flex justify-between px-20 py-2 w-full select-none">
      <div className="flex">
        <Link className="" href="/" draggable={false}>
          <Image
            draggable={false}
            src={logo}
            width={293.25}
            height={60}
            alt="home logo"
          />
        </Link>
        <div className="flex items-center gap-0 ml-10">
          <input
            className="px-2 py-2 text-[12px] border-2 focus:outline-none bg-[#F8F9FA] border-[#EBEDF0] border-r-0 justify-self-center w-[260px] h-[40px] rounded-tl-[8px] rounded-bl-[8px]"
            type="text"
            placeholder="Search here..."
          />
          <button className="bg-[#8064A2] w-[40px] h-[40px] flex justify-center items-center rounded-tr-[15%] rounded-br-[15%]">
            <FontAwesomeIcon
              className="size-[12px] text-white"
              icon={faMagnifyingGlass}
            />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[30px]">
        <div>
          <div
            onClick={() => setExploreOpen(!exploreOpen)}
            className="flex cursor-pointer"
          >
            <FontAwesomeIcon
              className="text-[#8064A2] h-[24px] w-[24px]"
              icon={faCompass}
            />
            <p className="ml-[5px] mr-[7px] font-semibold select-none">
              Explore
            </p>
            <FontAwesomeIcon
              className="w-[13px] self-center"
              icon={exploreOpen ? faChevronUp : faChevronDown}
            />
          </div>
          <div className={`${exploreOpen ? "absolute" : "hidden"} mt-[26px]`}>
            <div className="border-2 pl-[12px] pr-[78px] py-[12px] bg-white border-[#CED4DA] select-none cursor-pointer">
              People - Community
            </div>
            <div className="border-2 border-t-0 pl-[12px] pr-[78px] py-[12px] bg-white border-[#CED4DA] select-none cursor-pointer">
              Places - Venues
            </div>
            <div className="border-2 border-t-0 pl-[12px] pr-[78px] py-[12px] bg-white border-[#CED4DA] select-none cursor-pointer">
              Programs - Events
            </div>
            <div className="border-2 border-t-0 pl-[12px] pr-[78px] py-[12px] bg-white border-[#CED4DA] select-none cursor-pointer">
              Products - Store
            </div>
            <div className="border-2 border-t-0 pl-[12px] pr-[78px] py-[12px] bg-white border-[#CED4DA] select-none cursor-pointer">
              Blogs
            </div>
          </div>
        </div>

        <div className="flex cursor-pointer">
          <div className="bg-[#8064A2] rounded-[100%] h-[24px] w-[24px] flex justify-center items-center">
            <FontAwesomeIcon className="text-white text-[13px]" icon={faStar} />
          </div>
          <p className="ml-[5px] mr-[7px] font-semibold select-none">Hobbies</p>
          <FontAwesomeIcon
            className="w-[13px] self-center"
            icon={faChevronDown}
          />
        </div>
        <div>
          <FontAwesomeIcon
            className="w-[24px] h-[23px] text-[#8064A2]"
            icon={faBookmark}
          />
        </div>
        <div>
          <FontAwesomeIcon
            className="w-[24px] h-[24px] text-[#8064A2]"
            icon={faBell}
          />
        </div>
        <div>
          <FontAwesomeIcon
            className="w-[24px] h-[24px] text-[#8064A2]"
            icon={faCartShopping}
          />
        </div>
        <button className="border-2 border-[#8064A2] hover:bg-[#8064A2] hover:text-white text-[#8064A2] w-[112px] h-[40px] rounded-[8px]">
          Sign In
        </button>
      </div>
    </nav>
  )
}

export default Navbar
