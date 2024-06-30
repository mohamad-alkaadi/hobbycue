import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const SecThree = () => {
  return (
    <section
      id="home-three"
      className="md:h-[540px] max-md:px-5 px-20 py-28 bg-[#F7FDFF] flex justify-center items-center "
    >
      <div className="border-2 border-[#CED4DA] max-md:py-6 w-full max-w-[1248px] h-full px-16 flex flex-col justify-center rounded-[8px]">
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
        <p className="text-[18px] font-[300]  max-sm:text-[14px] mb-8">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </p>
        <button className="text-[#8064A2] border-2 border-[#8064A2] hover:bg-[#8064A2] hover:text-white max-sm:scale-90 w-[112px] h-[40px] rounded-[8px]">
          Add new
        </button>
      </div>
    </section>
  )
}

export default SecThree
