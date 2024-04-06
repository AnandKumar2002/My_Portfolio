import React from 'react'
import Title from '../layouts/Title'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

function Contact() {
    return (
        <section id='contact' className='w-full py-10 border-b-[1px] border-b-black'>
            <div className="flex justify-center items-center text-center">
                <Title
                    des={
                        <span>
                            Contact With <span className='text-designColor'>Me</span>
                        </span>}
                />
            </div>
            <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
                <ContactLeft />
                <ContactRight />
            </div>
        </section>
    )
}

export default Contact