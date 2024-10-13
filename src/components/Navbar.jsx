import { IoMdMenu } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className="flex px-14 h-16 justify-between items-center bg-[#312929] opacity-95 sticky">
        <div className="flex gap-8 items-center text-2xl text-white">
            <div>
            <IoMdMenu />
            </div>
            <div className="flex gap-2 items-center justify-center">
            <FaYoutube  className="text-3xl text-red-600" />
            <span className="text-2xl font-bold">Youtube</span>
            </div>

            <div className="flex items-center justify-center gap-5">
                <form>
                    <div className="flex bg-zinc-900 items-center h-10 px-3 pr-4 rounded-2xl">
                        <div className="flex gap-5 items-center pr-5">
                            <input type="text" placeholder="search" className="w-96 bg-zinc-900 focus:outline-none border-none " />
                        </div>
                        <button className="rounded-r-3xl flex items-center justify-center bg-zinc-800">
                            <IoSearchOutline className=""/>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Navbar