import { IoMdMenu } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import user from "../images/user.png";

const Navbar = () => {
  return (
    <div className="flex px-14 h-16 justify-between items-center bg-[#000000] opacity-95 sticky text-white">
      <div className="flex gap-8 items-center text-2xl ">
        <div>
          <IoMdMenu />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <FaYoutube className="text-3xl text-red-600" />
          <span className="text-2xl font-medium">Youtube</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form>
          <div className="flex bg-zinc-900 items-center h-10 px-3 pr-4 rounded-3xl">
            <div className="flex gap-5 items-center pr-5">
              <input
                type="text"
                placeholder="search"
                className="w-96 bg-zinc-900 focus:outline-none border-none "
              />
            </div>
            <button className="flex items-center justify-center ">
              <IoSearchOutline />
            </button>
          </div>
        </form>

        <div className="text-xl p-3 rounded-full bg-zinc-800">
          <FaMicrophone />
        </div>
      </div>
      <div className="flex gap-8 items-center text-2xl ">
        <MdOutlineVideoCall />
        <div className="relative">
          <IoMdNotificationsOutline />
          <span className="absolute bottom-3 left-3 text-sm rounded-full bg-red-500 px-1">
            9+
          </span>
        </div>

        <img src={user} alt="logo" className="w-9 h-9 rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
