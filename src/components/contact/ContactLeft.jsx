import React from 'react'
import Media from '../banner/Media'
import ShackHand from '../../assets/photos/ShackHand.avif'

function ContactLeft() {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                data-aos="zoom-in"
                className='w-full h-64 object-cover rounded-lg'
                src={ShackHand}
                alt='Shack_Hand'
                style={{ backgroundColor: 'transparent' }}
            />
            <div data-aos="zoom-in" className='flex flex-col gap-4 '>
                <h3 className='text-3xl font-bold text-white'>
                    <span className='text-designColor'>A</span>nand <span className='text-designColor'>K</span>umar
                </h3>
                <p className='text-lg font-bold text-gray-400 hover:text-designColor group'>
                    Front-end Developer <span className='group-hover:text-gray-400 text-designColor'>|</span> React Developer
                </p>
                <p className='text-base text-gray-400 tracking-wide hover:text-gray-300'>
                    A highly skilled and enthusiastic Front-end Web Developer proficient in cutting-edge technologies such as React JS, Redux, Router, Tailwind and other industry-leading libraries and frameworks.
                </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Phone: <span className='text-lightText'>+91 821-935-3946</span>
                </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Email: <span className='text-lightText'>anandkumar101002@gmail.com</span>
                </p>
            </div>
            <div>
                <Media />
            </div>
        </div>
    )
}

export default ContactLeft