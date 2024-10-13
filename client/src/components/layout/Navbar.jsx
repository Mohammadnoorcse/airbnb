import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const[isState,setIsState] =useState('stay');
  const[searchActive,setSearchActive] = useState('');
  console.log(searchActive)

  return (
    <div className="w-full h-auto">
      <div className="container border border-red-400 flex justify-between ">
        {/* item-1 */}
        <div className="">
          <span className="text-xl font-semibold text-[black] ">airbnp</span>
        </div>
        {/* item-2 */}
        <div className="flex flex-col gap-8 items-center">
          <div className="flex gap-4">
            <span
              className={`text-base text-[#6a6a6a] cursor-pointer ${
                isState === "stay" ? "text-black font-bold " : ""
              }`}
              onClick={() => setIsState("stay")}
            >
              Stays
            </span>
            <span
              className={`text-base text-[#6a6a6a] cursor-pointer ${
                isState === "experience" ? "text-black font-bold " : ""
              }`}
              onClick={() => setIsState("experience")}
            >
              Experiences
            </span>
          </div>
          <div
            className={`w-[60rem] h-[4rem] border shadow-lg rounded-full flex gap-2 ${
              searchActive !== "" ? "bg-[#EBEBEB]" : ""
            }`}
          >
            {/* child -1 */}
            <div
              className={`w-[20rem] h-full border-r hover:bg-[#EBEBEB] hover:rounded-full flex flex-col pl-6 justify-center cursor-pointer ${
                searchActive === "searchChild1"
                  ? "bg-[#FFFFFF] shadow-md rounded-full"
                  : ""
              }`}
              onClick={() => setSearchActive("searchChild1")}
            >
              <span className="text-sm font-semibold text-[#4D4D4D]">
                Where
              </span>
              <input
                type="text"
                placeholder="search destinations"
                className="text-sm bg-transparent border-none outline-none"
              />
            </div>
            {/* child -2 */}
            <div
              className={`w-[10rem] h-full border-r hover:bg-[#EBEBEB] hover:rounded-full flex flex-col pl-6 justify-center cursor-pointer ${
                searchActive === "searchChild2"
                  ? "bg-[#FFFFFF] shadow-md rounded-full"
                  : ""
              }`}
              onClick={() => setSearchActive("searchChild2")}
            >
              <span className="text-sm font-semibold text-[#4D4D4D]">
                check in
              </span>
              {/* <input
                type="text"
                placeholder="search destinations"
                className="text-sm bg-transparent border-none outline-none"
              /> */}
              <span className="text-[12px] font-normal text-[#A1A8B3] ">
                Add dates
              </span>
            </div>
            {/* child -3 */}
            <div
              className={`w-[10rem] h-full border-r hover:bg-[#EBEBEB] hover:rounded-full flex flex-col pl-6 justify-center cursor-pointer ${
                searchActive === "searchChild3"
                  ? "bg-[#FFFFFF] shadow-md rounded-full"
                  : ""
              }`}
              onClick={() => setSearchActive("searchChild3")}
            >
              <span className="text-sm font-semibold text-[#4D4D4D]">
                check out
              </span>
              {/* <input
                type="text"
                placeholder="search destinations"
                className="text-sm bg-transparent border-none outline-none"
              /> */}
              <span className="text-[12px] font-normal text-[#A1A8B3] ">
                Add dates
              </span>
            </div>
            {/* child -4 */}
            <div
              className={`w-[20rem] h-full border-r hover:bg-[#EBEBEB] hover:rounded-full flex justify-between items-center pl-6 cursor-pointer ${
                searchActive === "searchChild4"
                  ? "bg-[#FFFFFF] shadow-md rounded-full"
                  : ""
              }`}
              onClick={() => setSearchActive("searchChild4")}
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#4D4D4D]">
                  who
                </span>
                {/* <input
                type="text"
                placeholder="search destinations"
                className="text-sm bg-transparent border-none outline-none"
              /> */}
                <span className="text-[12px] font-normal text-[#A1A8B3] ">
                  Add guests
                </span>
              </div>
              <div className="w-[2rem] h-[2rem] rounded-full bg-[#DE1262] mr-4 text-white flex justify-center items-center  font-bold">
                <CiSearch />
              </div>
            </div>
          </div>
        </div>
        {/* item-3 */}
        <div></div>
      </div>
    </div>
  );
}

export default Navbar