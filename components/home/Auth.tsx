"use client"

import * as React from "react"
import google from "@/public/assets/google.png"
import facebook from "@/public/assets/facebook.png"
import Image from "next/image"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Auth = () => {
  const [signInActive, setSignInActive] = React.useState(true)
  return (
    <div className="h-full w-[384px] select-none flex flex-col justify-start l:mt-24 my-12">
      <div className="flex  text-[20px] gap-6">
        <button
          onClick={() => setSignInActive(true)}
          className={`${
            signInActive
              ? "text-[#8064A2] border-b-2 border-[#8064A2]"
              : "text-[#939CA3]"
          }  font-[600] `}
        >
          Sign In
        </button>
        <button
          onClick={() => setSignInActive(false)}
          className={`${
            !signInActive
              ? "text-[#8064A2] border-b-2 border-[#8064A2]"
              : "text-[#939CA3]"
          } font-[600]`}
        >
          Join In
        </button>
      </div>
      <button className="border-2 mt-10 py-2 border-[#8064A2] flex items-center justify-center font-[600] text-[14px] rounded-[8px]">
        <Image src={google} alt="google" className="mr-3" />
        <p className="">Continue with Google</p>
      </button>
      <button className="border-2 mt-10 py-2 border-[#8064A2] flex items-center justify-center font-[600] text-[14px] rounded-[8px]">
        <Image src={facebook} alt="facebook" className="mr-2" />
        <p>Continue with Facebook</p>
      </button>
      <div className="flex justify-center items-center mt-6 mb-6">
        <div className="2xl:w-[206px] w-[50px] h-[2px] bg-[#CED4DA]"></div>
        <p className="text-[12px] font-[600] text-center w-[93px]">
          Or connect with
        </p>
        <div className="2xl:w-[206px] w-[50px] h-[2px] bg-[#CED4DA]"></div>
      </div>
      <input
        type="email"
        placeholder="Email"
        className=" h-[40px] pl-2 border-[1px] border-[#EBEDF0] rounded-[8px] focus:outline-0 mb-6"
      />
      <input
        type="password"
        placeholder="Password"
        className=" h-[40px] pl-2 border-[1px] border-[#EBEDF0] rounded-[8px] focus:outline-0 mb-6"
      />
      {signInActive ? (
        <>
          <div className="flex justify-between">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-2">
                Remember me
              </label>
            </div>

            <div className="flex justify-center items-center text-[#939CA3] text-[14px] gap-3">
              <FontAwesomeIcon icon={faLock} />
              <p>Forgot password?</p>
            </div>
          </div>
          <div className="border-[1px] cursor-pointer border-[#8064A2] text-[#8064A2] font-[600] text-[14px] rounded-[8px] mt-4 flex justify-center items-center h-[40px]">
            {/* <div className="border-[1px] border-black rounded-[8px] mt-4 flex justify-center items-center h-[40px]"> */}
            Continue
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center text-[#939CA3] text-[14px] gap-3">
            <div className="flex">
              <div className="w-[60px] h-[4px] bg-white ml-1"></div>
              <div className="w-[60px] h-[4px] bg-white ml-1"></div>
              <div className="w-[60px] h-[4px] bg-white ml-1"></div>
            </div>
            <p>Password strength</p>
          </div>
          <p className="font-[400] text-[12px] text-[#6D747A] mt-2">
            By continuing, you agree to our{" "}
            <span className="text-black">Terms of Service</span> and{" "}
            <span className="text-black">Privacy Policy.</span>
          </p>
          <div className="border-[1px] cursor-pointer bg-[#8064A2] text-white font-[600] text-[14px] rounded-[8px] mt-4 flex justify-center items-center h-[40px]">
            Agree and Continue
          </div>
        </>
      )}
    </div>
  )
}

export default Auth
