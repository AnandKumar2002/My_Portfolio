import React from 'react'
import Title from '../layouts/Title'
import Card from './card'
// import { motion } from 'framer-motion'

function Education() {
  return (
    // <motion.div
    // initial={{ opacity: 0, y: -50 }}
    // animate={{ opacity: 1, y: 0 }}
    // exit={{ opacity: 0, y: -50 }}
    // transition={{ duration: 0.5 }}
    // >
    <section id='education' className='w-full py-10 border-b-[1px] border-b-black'>
      <div className="flex justify-center items-center text-center">
        <Title
          des={
            <span>
              My <span className='text-designColor'>Education</span>
            </span>}
        />
      </div>
      <div className='font-titleFont'>
        <p className='text-sm text-designColor tracking-[4px]'>2017-2024</p>
        <h2 className='text-4xl font-bold'>Education Quality</h2>
      </div>
      <div className=' w-full mt-10 border-l-[6px] border-l-black border-opacity-30 flex flex-col'>
        <Card
          title="Web Development"
          subTitle="Aptech Learning ( Sep 2023 - Mar 2024 )"
          result="Grade : A"
          des=""
        />
        <Card
          title="Bachelor of Science in Computer Science"
          subTitle="Rajiv Gandhi Government Degree College, Chaura Maidan, Shimla-4 ( Aug 2020 - Aug 2023 )"
          result="CGPA : 7.66 /10"
        />
        <Card
          title="NON - MEDICAL "
          subTitle="Government Senior Secondary School in Sanjauli, Shimla-6 ( Apr 2019 - Apr 2020 )"
          result="70.2%"
        />
        
      </div>
    </section>
    // </motion.div>
  )
}

export default Education