import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
  faPinterest,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Footer = () => {
  return (
    <div className="grid grid-cols-4 mt-8">
      <div className="col-span-1 flex flex-col ">
        <h5 className="font-[700] text-[14px] mb-4">Hobbycue</h5>
        <p className="font-[400] text-[14px]">About Us</p>
        <p className="font-[400] text-[14px]">Our Services</p>
        <p className="font-[400] text-[14px]">Work with Us</p>
        <p className="font-[400] text-[14px]">FAQ</p>
        <p className="font-[400] text-[14px]">Contact Us</p>
      </div>
      <div className="col-span-1 flex flex-col">
        <h5 className="font-[700] text-[14px] mb-4">How Do I</h5>
        <p className="font-[400] text-[14px]">Sign Up</p>
        <p className="font-[400] text-[14px]">Add a Listing</p>
        <p className="font-[400] text-[14px]">Claim Listing</p>
        <p className="font-[400] text-[14px]">Post a Query</p>
        <p className="font-[400] text-[14px]">Add a Blog Post</p>
        <p className="font-[400] text-[14px]">Other Queries</p>
      </div>
      <div className="col-span-1 flex flex-col">
        <h5 className="font-[700] text-[14px] mb-4">Quick Links</h5>
        <p className="font-[400] text-[14px]">Listings</p>
        <p className="font-[400] text-[14px]">Blog Posts</p>
        <p className="font-[400] text-[14px]">Shop / Store</p>
        <p className="font-[400] text-[14px]">Community</p>
      </div>
      <div className="col-span-1 flex flex-col">
        <div>
          <h5 className="font-[700] text-[14px] mb-4">Social Media</h5>
          <div className="flex">
            <div className="bg-[#CCC] p-1 rounded-full mr-5">
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-[#6D747A]"
                icon={faFacebookF}
              />
            </div>
            <div className="bg-[#CCC] p-1 rounded-full  mr-5">
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-[#6D747A]"
                icon={faTwitter}
              />
            </div>
            <div className="bg-[#CCC] p-1 rounded-full  mr-5">
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-[#6D747A]"
                icon={faInstagram}
              />
            </div>
            <div className="bg-[#CCC] p-1 rounded-full  mr-5">
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-[#6D747A]"
                icon={faPinterest}
              />
            </div>
            <div className="bg-[#CCC] p-1 rounded-full  mr-5">
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-[#6D747A]"
                icon={faGooglePlusG}
              />
            </div>
            <div className="bg-[#CCC] p-1 rounded-full  mr-5">
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-[#6D747A]"
                icon={faYoutube}
              />
            </div>
            <div className="bg-[#CCC] p-1 rounded-full  mr-5">
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-[#6D747A]"
                icon={faTelegram}
              />
            </div>
            <div className="bg-[#CCC] p-1 rounded-full">
              <FontAwesomeIcon
                className="w-[20px] h-[20px] text-[#6D747A]"
                icon={faEnvelope}
              />
            </div>
          </div>
        </div>
        <div>
          <h5 className="font-[700] text-[14px] mb-4 mt-8">Invite Friends</h5>
          <div className="flex items-center gap-0 ">
            <input
              className="px-2 py-2 text-[12px] border-2 focus:outline-none bg-[#F8F9FA] border-[#EBEDF0] border-r-0 justify-self-center w-[260px] h-[40px] rounded-tl-[8px] rounded-bl-[8px]"
              type="text"
              placeholder="Email ID"
            />
            <button className="bg-[#8064A2] w-fit px-3 text-white h-[40px] flex justify-center items-center rounded-tr-[15%] rounded-br-[15%]">
              Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
