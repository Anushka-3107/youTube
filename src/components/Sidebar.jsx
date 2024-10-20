import { GoHomeFill } from "react-icons/go";
import { SiYoutubemusic } from "react-icons/si";
import { AiOutlineLike } from "react-icons/ai";

import {
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineWatchLater 
}from "react-icons/md";

const Sidebar = () => {

    const mainLinks = [
        {
            icon: <GoHomeFill className="text-xl"/>,
            name:'Home',
        },
        {
            icon: <MdSubscriptions className="text-xl"/>,
            name:'Subscriptions',
        },
        {
            icon: <SiYoutubemusic className="text-xl"/>,
            name:'Music',
        },
    ];

    const otherLinks = [
        {
            icon: <MdOutlineVideoLibrary className="text-xl"/>,
            name:'Library',
        },
        {
            icon: <MdOutlineWatchLater className="text-xl"  />,
            name: 'Watch Later',
        },
        {
            icon: <MdHistory className="text-xl"/>,
            name:'History',
        },
        {
            icon: <AiOutlineLike className="text-xl"/>,
            name:'History',
        },

    ]



  return (
    <div className="bg-[#0f0f0f] w-2/12 pr-5 p-3 text-white overflow-auto pb-8 h-screen">
        <ul className="flex flex-col  border-b-2 border-b-[#3f3f3f] ">
            {mainLinks.map(({icon,name})=>{
                return(
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === 'Home'? 'bg-[#272727]' : ''} rounded-xl`}>
                        <a href="#" className="flex items-center gap-5">
                            {icon}
                            <span className="text-sm tracking-wider">{name}</span>
                        </a>
                    </li>
                )
            })}
        </ul>

        <ul className="flex flex-col ">
            {otherLinks.map(({icon,name})=>{
                return(
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === 'Home'? 'bg-[#272727]' : ''} rounded-xl`}>
                        <a href="#" className="flex items-center gap-5">
                            {icon}
                            <span className="text-sm tracking-wider">{name}</span>
                        </a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Sidebar