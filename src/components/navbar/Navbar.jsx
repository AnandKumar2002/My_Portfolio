import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { NavLinksData } from './NavLinksData'
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import Media from '../banner/Media'
import LayoutOfLeftBanner from '../banner/LayoutOfLeftBanner';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    console.log(showMenu);

    return (
        <div className='w-full sticky top-0 z-50 bg-bodyColor h-20 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 shadow-2xl shadow-black  lgl:px-14 px-4'>
            <div className='px-5'>
                <h1 className='uppercase cursor-pointer text-4xl font-bold'>
                    <span className='text-designColor '>A</span>nand</h1>
            </div>
            <div>
                <ul className='hidden mdl:inline-flex items-center gap-6 lg:gap-10 '>
                    {
                        NavLinksData.map(({ _id, title, link }) => (
                            <li
                                className='text-base font-normal relative text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 overflow-hidden hover:overflow-visible group'
                                key={_id}>
                                <Link
                                    activeClass='active'
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {title}
                                    <span className="w-full h-[2px] bg-designColor rounded-lg inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                {showMenu ? <span
                    onClick={() => setShowMenu(false)}
                    className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
                >
                    <MdClose />
                </span> :
                    <span
                        onClick={() => setShowMenu(!showMenu)}
                        className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
                    >
                        <RiMenu3Line />
                    </span>}
                {showMenu && (
                    <div data-aos="fade-right" className="w-[85%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                        <div className="flex flex-col gap-8 py-2 relative">
                            <div>
                                <LayoutOfLeftBanner />
                            </div>
                            <ul className="flex flex-col gap-4">
                                {NavLinksData.map((item) => (
                                    <li
                                        key={item._id}
                                        className="text-base font-normal relative text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 overflow-hidden hover:overflow-visible group"
                                    >
                                        <Link
                                            onClick={() => setShowMenu(false)}
                                            activeClass="active"
                                            to={item.link}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >
                                            {item.title}
                                            <span className="w-full h-[2px] bg-designColor rounded-lg inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>

                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col gap-4">
                                <Media />
                            </div>
                            {/* <span
                                onClick={() => setShowMenu(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                            >
                                <MdClose />
                            </span> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Navbar