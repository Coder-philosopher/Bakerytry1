import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="h-[95px] w-full bg-gradient-to-r from-[#8D6E63] via-[#A67C52] to-[#8D6E63] flex justify-between items-center shadow-lg">
        <div className="h-[88px] font-playfair w-[220px] px-[27px] py-[8px] text-[#d5a624] font-bold bg-[#4271F4] text-[24px] rounded-xl border-2 border-solid border-[#F4C542] hover:cursor-pointer hover:opacity-95 transform transition-transform hover:scale-105">
          <span>
            The <span className="text-[#F4C542]">Heritage</span> <br />{" "}
            <span className="text-[#F4C542]">Bakehouse</span>
          </span>
        </div>

        {/* Navigation Menu */}
        <div className="mx-8 h-full w-[750px] rounded-xl hidden">
          <ul
            className="flex h-full items-center font-playfair justify-around
           text-[#f6d26f] text-[18px] font-bold space-x-6"
          >
            <li>
              <NavLink
                className="group bg-[#7f6137] px-5 py-4 border-2 border-solid border-[#D8C3A5] rounded-lg hover:cursor-pointer hover:opacity-80 hover:bg-[#F4C542] transition-all duration-200 ease-in-out flex items-center"
                to=" "
              >
                <span className="material-icons text-[#D8C3A5] group-hover:text-[#7f6137]">
                  Home
                </span>
                <span className="ml-2">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="group bg-[#7f6137] px-5 py-4 border-2 border-solid border-[#D8C3A5] rounded-lg hover:cursor-pointer hover:opacity-80 hover:bg-[#F4C542] transition-all duration-200 ease-in-out flex items-center"
                to="Products"
              >
                <span className="material-icons text-[#D8C3A5] group-hover:text-[#7f6137]">
                  Store
                </span>
                <span className="ml-2">Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Testimonials"
                className="group bg-[#7f6137] px-5 py-4 border-2 border-solid border-[#D8C3A5] rounded-lg hover:cursor-pointer hover:opacity-80 hover:bg-[#F4C542] transition-all duration-200 ease-in-out flex items-center"
              >
                <span className="material-icons text-[#D8C3A5] group-hover:text-[#7f6137]">
                  Star
                </span>
                <span className="ml-2">Testimonials</span>
              </NavLink>
            </li>
            <li className="group bg-[#7f6137] px-5 py-4 border-2 border-solid border-[#D8C3A5] rounded-lg hover:cursor-pointer hover:opacity-80 hover:bg-[#F4C542] transition-all duration-200 ease-in-out flex items-center">
              <span className="material-icons text-[#D8C3A5] group-hover:text-[#7f6137]">
                visibility
              </span>
              <span className="ml-2">Glimpse Inside</span>
            </li>
          </ul>
        </div>

        {/* Bag and Accounts Section */}
        <div className="h-full w-[300px] font-quicksand font-extrabold rounded-2xl flex px-4 justify-between items-center text-[#4271F4]">
          <div className="group bg-[#F4C542] px-3 py-3 rounded-xl border-2 border-solid border-[#4271F4] hover:cursor-pointer hover:bg-[#d5a624] transition-all duration-200 ease-in-out transform hover:scale-105 flex flex-col items-center">
            <span className="text-[18px]">Your Bag</span>
            <span className="material-symbols-outlined font-extrabold text-2xl">
              local_mall
            </span>
          </div>
          <div className="group bg-[#F4C542] px-3 py-3 rounded-xl border-2 border-solid border-[#4271F4] hover:cursor-pointer hover:bg-[#d5a624] transition-all duration-200 ease-in-out transform hover:scale-105 flex flex-col items-center">
            <span className="text-[18px]">Accounts</span>
            <span className="material-symbols-outlined font-extrabold text-2xl">
              person_pin
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
