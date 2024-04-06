import React from 'react'

function SkillsCard({ name, src }) {
  return (
    <div data-aos="zoom-in" className='w-[90%] p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 cursor-pointer'>
      <div className="flex flex-col items-center gap-4 ">
        <img className="w-30 h-30 md:w-40 md:h-40 rounded-xl object-contain group-hover:scale-110 duration-300"
          src={src}
          alt={name}
        />
        <span className="text-lg font-base font-bodyFont text-gray-400">{name}</span>
      </div>
    </div>
  )
}

export default SkillsCard