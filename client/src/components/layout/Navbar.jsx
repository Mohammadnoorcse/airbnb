import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const Navbar = () => {
  const[isState,setIsState] =useState('stay');
  const[searchActive,setSearchActive] = useState('');
  const [value, setValue] = useState(null);
  const[count,setCount] = useState(0);
  const[countIndex,setCountIndex] = useState('');

  const handleCounter =(id)=>{
    setCount(count+1);
    setCountIndex(id);
  }
  const handleSubCounter =(id)=>{
    setCount(count-1);
    setCountIndex(id);
  }

  return (
    <div className="w-full h-auto">
      <div className="container border border-red-400 flex justify-between ">
        {/* item-1 */}
        <div className="">
          <span className="text-xl font-semibold text-[black] ">airbnp</span>
        </div>
        {/* item-2 */}
        <div className="flex flex-col gap-8 items-center relative">
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
          {/* child condition -1 */}
          <div
            className={`absolute top-[7.5rem] left-0  w-1/2 h-auto  z-[1] bg-white shadow-lg rounded-md p-4  flex-col gap-4 ${
              searchActive === "searchChild1" ? "flex" : "hidden"
            }`}
          >
            <h4 className="text-sm font-bold text-black">Search by region</h4>
            <div className="flex gap-4 flex-wrap">
              <div className="flex flex-col gap-2">
                <img
                  src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320"
                  alt=""
                  className="w-[8rem] h-[8rem] bg-cover border rounded-md"
                />
                <span className="text-base text-[#808080]">I’m flexible</span>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320"
                  alt=""
                  className="w-[8rem] h-[8rem] bg-cover border rounded-md"
                />
                <span className="text-base text-[#808080]">Southeast Asia</span>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="https://a0.muscache.com/im/pictures/cd9f2bf0-eefc-4980-b7cb-9c8ca3dae883.jpg?im_w=320"
                  alt=""
                  className="w-[8rem] h-[8rem] bg-cover border rounded-md"
                />
                <span className="text-base text-[#808080]">Canada</span>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"
                  alt=""
                  className="w-[8rem] h-[8rem] bg-cover border rounded-md"
                />
                <span className="text-base text-[#808080]">Europe</span>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="https://a0.muscache.com/im/pictures/111ce2d7-d281-457c-b355-beb5bbcb57d9.jpg?im_w=320"
                  alt=""
                  className="w-[8rem] h-[8rem] bg-cover border rounded-md"
                />
                <span className="text-base text-[#808080]">Malaysia</span>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320"
                  alt=""
                  className="w-[8rem] h-[8rem] bg-cover border rounded-md"
                />
                <span className="text-base text-[#808080]">United States</span>
              </div>
            </div>
          </div>
          {/* child condition-2 or 3*/}
          <div
            className={`absolute top-[7.5rem] left-0  w-full h-auto  z-[1] bg-white shadow-lg rounded-md p-4  flex-col gap-4 ${
              searchActive === "searchChild2" || searchActive === "searchChild3"
                ? "flex"
                : "hidden"
            }`}
          >
            <Calendar
              onChange={setValue}
              value={value}
              style={{ width: "100%" }}
            />
          </div>
          {/* child condition -4 */}
          <div
            className={`absolute top-[7.5rem] right-0  w-1/2 h-auto z-[1] bg-white shadow-lg rounded-md p-4 flex flex-col gap-4 ${
              searchActive === "searchChild4" ? "flex" : "hidden"
            }`}
          >
            {/* card-1 */}
            <div className=" flex justify-between items-center border-b pb-2">
              <div className="flex flex-col leading-none ">
                <h2 className="text-base font-bold">Adults</h2>
                <p className="text-sm font-normal text-[#808080]">
                  Ages 13 or above
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-[2rem] h-[2rem] rounded-full border border-[#808080] cursor-pointer justify-center items-center text-base font-medium hover:border-[black] hover:text-black ${
                    count > 0 && countIndex === "index1" ? "flex" : "hidden"
                  }`}
                  onClick={() => handleSubCounter("index1")}
                >
                  -
                </div>
                <span>{countIndex === "index1" ? count : 0}</span>
                <div
                  className="w-[2rem] h-[2rem] rounded-full border border-[#808080] cursor-pointer flex justify-center items-center text-base font-medium hover:border-[black]
                hover:text-black "
                  onClick={() => handleCounter("index1")}
                >
                  +
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className=" flex justify-between items-center border-b pb-2">
              <div className="flex flex-col leading-none ">
                <h2 className="text-base font-bold">Children</h2>
                <p className="text-sm font-normal text-[#808080]">
                  Ages 2 – 12
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-[2rem] h-[2rem] rounded-full border border-[#808080] cursor-pointer justify-center items-center text-base font-medium hover:border-[black] hover:text-black ${
                    count > 0 && countIndex === "index2" ? "flex" : "hidden"
                  }`}
                  onClick={() => handleSubCounter("index2")}
                >
                  -
                </div>
                <span>{countIndex === "index2" ? count : 0}</span>
                <div
                  className="w-[2rem] h-[2rem] rounded-full border border-[#808080] cursor-pointer flex justify-center items-center text-base font-medium hover:border-[black]
                hover:text-black "
                  onClick={() => handleCounter("index2")}
                >
                  +
                </div>
              </div>
            </div>
            {/* card-3 */}
            <div className=" flex justify-between items-center border-b pb-2">
              <div className="flex flex-col leading-none ">
                <h2 className="text-base font-bold">Infants</h2>
                <p className="text-sm font-normal text-[#808080]">Under 2</p>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-[2rem] h-[2rem] rounded-full border border-[#808080] cursor-pointer justify-center items-center text-base font-medium hover:border-[black] hover:text-black ${
                    count > 0 && countIndex === "index3" ? "flex" : "hidden"
                  }`}
                  onClick={() => handleSubCounter("index3")}
                >
                  -
                </div>
                <span>{countIndex === "index3" ? count : 0}</span>
                <div
                  className="w-[2rem] h-[2rem] rounded-full border border-[#808080] cursor-pointer flex justify-center items-center text-base font-medium hover:border-[black]
                hover:text-black "
                  onClick={() => handleCounter("index3")}
                >
                  +
                </div>
              </div>
            </div>
            {/* card-4 */}
            <div className=" flex justify-between items-center border-b pb-2">
              <div className="flex flex-col leading-none ">
                <h2 className="text-base font-bold">Pets</h2>
                <p className="text-sm font-normal text-[#808080]">
                  Bringing a service animal?
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-[2rem] h-[2rem] rounded-full border border-[#808080] cursor-pointer justify-center items-center text-base font-medium hover:border-[black] hover:text-black ${
                    count > 0 && countIndex === "index4" ? "flex" : "hidden"
                  }`}
                  onClick={() => handleSubCounter("index4")}
                >
                  -
                </div>
                <span>{countIndex === "index4" ? count : 0}</span>
                <div
                  className="w-[2rem] h-[2rem] rounded-full border border-[#808080] cursor-pointer flex justify-center items-center text-base font-medium hover:border-[black]
                hover:text-black "
                  onClick={() => handleCounter("index4")}
                >
                  +
                </div>
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