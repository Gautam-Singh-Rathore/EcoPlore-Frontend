import { FiUser, FiShoppingCart, FiHeart } from "react-icons/fi";
import logo from "../../assets/Images/logo.png"
import { VscAccount } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";


export default function Navbar(){
    return (
        <div className=" py-4 sm:py-6 px-4  ">
          {/* Top Section */}
          <div className="flex justify-between items-center">
            {/* Left icons */}
            <div className="flex items-center gap-2">
              <div className="text-4xl block sm:hidden">
                <IoReorderThreeOutline />
              </div>
              <img src={logo} alt="GreenPlore" width={50} height={50} />
              <div className="font-semibold text-lg md:text-2xl lg:text-3xl ">GreenPlore</div>
            </div>
    
            {/* Searchbar - show only on medium and above */}
            <div className="hidden md:flex flex-grow px-6">
              <form className="flex w-full max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 "
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700"
                >
                  <BsSearch/>
                </button>
              </form>
            </div>
    
            {/* Right icons */}
            <div className="flex items-center gap-5 text-xl md:text-2xl lg:text-3xl">
              <VscAccount />
              <BsCart3 />
              <FaRegHeart />
              <button
                type="button"
                className="hidden md:block lg:text-xl text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-1.5"
              >
                Become a Seller
              </button>
            </div>
          </div>
    
          {/* Searchbar on small screens (mobile) */}
          <div className="md:hidden mt-2 ">
            <form className="flex w-full ">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700"
              >
               <BsSearch/>
              </button>
            </form>
          </div>
        </div>
      );
}
