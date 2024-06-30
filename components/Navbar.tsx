"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import logo from "@/public/assets/logo-big-screen.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faBell,
  faBookmark,
  faCartShopping,
  faChevronDown,
  faChevronUp,
  faCompass,
  faMagnifyingGlass,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { usePathname, useRouter } from "next/navigation"
import user from "@/public/assets/record-img.png"
import { SignedIn, UserButton } from "@clerk/nextjs"
import Auth from "./home/Auth"

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const [exploreOpen, setExploreOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const signIn = () => {
    router.push("/after-signin/")
  }
  const signOut = () => {
    router.push("/")
  }
  return (
    <>
      <nav className="bg-white flex  justify-between px-20 max-md:px-5 py-2 w-full select-none">
        <div className="flex">
          <Link className="" href="/" draggable={false}>
            <Image
              draggable={false}
              src={logo}
              width={293.25}
              height={60}
              alt="home logo"
              // className="2xl:block hidden"
            />
            {/* <Image
            draggable={false}
            src={logoSmall}
            width={60}
            height={60}
            alt="home logo"
            className="2xl:hidden block"
          /> */}
          </Link>
          <div className="flex items-center gap-0 ml-10 max-xl:hidden">
            <input
              className="px-2 py-2 text-[12px] border-2 focus:outline-none bg-[#F8F9FA] border-[#EBEDF0] border-r-0 justify-self-center w-[260px] h-[40px] rounded-tl-[8px] rounded-bl-[8px]"
              type="text"
              placeholder="Search here..."
            />
            <button className=" bg-[#8064A2] w-[40px] h-[40px] flex justify-center items-center rounded-tr-[15%] rounded-br-[15%]">
              <FontAwesomeIcon
                className="size-[12px] text-white"
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center xl:gap-[30px] gap-1">
          <button className="text-[#8064A2] xl:hidden w-[40px] h-[40px]">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <div>
            <div
              onClick={() => setExploreOpen(!exploreOpen)}
              className="flex cursor-pointer max-xl:hidden"
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

          <div className="flex cursor-pointer max-xl:hidden">
            <div className="bg-[#8064A2] rounded-[100%] h-[24px] w-[24px] flex justify-center items-center">
              <FontAwesomeIcon
                className="text-white text-[13px]"
                icon={faStar}
              />
            </div>
            <p className="ml-[5px] mr-[7px] font-semibold select-none">
              Hobbies
            </p>
            <FontAwesomeIcon
              className="w-[13px] self-center"
              icon={faChevronDown}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="w-[24px] h-[23px] max-xl:hidden text-[#8064A2]"
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
              className="w-[24px] h-[24px] max-xl:hidden text-[#8064A2]"
              icon={faCartShopping}
            />
          </div>
          {pathname.startsWith("/after-signin") ? (
            <>
              <div className="flex max-xl:hidden">
                <Image
                  src={user}
                  width={30}
                  height={30}
                  draggable={false}
                  alt="user"
                  className="rounded-full mr-2"
                />
                <FontAwesomeIcon
                  className="w-[13px] self-center cursor-pointer"
                  icon={openMenu ? faChevronUp : faChevronDown}
                  onClick={() => {
                    setOpenMenu(!openMenu)
                  }}
                />
              </div>
            </>
          ) : (
            <button
              onClick={() => signIn()}
              className="border-2 max-xl:hidden border-[#8064A2] hover:bg-[#8064A2] hover:text-white text-[#8064A2] w-[112px] h-[40px] rounded-[8px]"
            >
              Sign In
            </button>
          )}
          <div>
            <FontAwesomeIcon
              onClick={() => setOpenMenu(!openMenu)}
              className={`w-[24px] h-[24px] xl:hidden ${
                openMenu ? "hidden" : "block"
              } text-[#8064A2] ml-3 cursor-pointer`}
              icon={faBars}
            />
            <FontAwesomeIcon
              onClick={() => setOpenMenu(!openMenu)}
              className={`w-[24px] h-[24px] xl:hidden ${
                openMenu ? "block" : "hidden"
              } text-[#8064A2] ml-3 cursor-pointer`}
              icon={faXmark}
            />
          </div>
        </div>
      </nav>
      {openMenu ? (
        <div className="w-screen h-fit absolute border-b-2 bg-white flex justify-center items-center pt-5">
          {pathname.startsWith("/after-signin") ? (
            <button className="select-none" onClick={() => signOut()}>
              Sign out
            </button>
          ) : (
            <Auth />
          )}
        </div>
      ) : null}
    </>
  )
}

export default Navbar
