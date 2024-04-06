import React from 'react'
import Title from '../layouts/Title';

function About() {
    return (
        <div id='about' className='py-10 lgl:py-14 border-b-[1px] border-black'>
            <div className="flex justify-center items-center text-center">
            <Title
                des={
                    <span>
                        Let Me <span className='text-designColor'>Introduce</span> Myself
                    </span>
                }
            />
            </div>
            {/* <h1 className='text-5xl text-center font-bold'>LET ME <span className='text-designColor'>INTRODUCE </span>MYSELF</h1> */}
            <div className='lgl:flex justify-center items-center text-base font-bodyFont leading-6 tracking-wide'>
                <div data-aos="zoom-in" className=' w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col'>
                    <img
                        className=' rounded-3xl h-[300px] lgl:h-[250px]'
                        src="https://cdn.dribbble.com/users/2726/screenshots/2362705/angulardribbble.gif"
                        alt="Image"
                    />
                </div>
                <div data-aos="zoom-in" className='w-full lgl:w-[65%] lgl:px-20 pt-10 lgl:pt-0'>
                    <p>
                        Hi, I'm <span className='text-designColor'>Anand Kumar</span>, a motivated and enthusiastic <span className='text-designColor' >front-end developer</span>. I love exploring different tech stacks and environments to create innovative solutions. I'm eager to start my career with a company that values <span className='text-designColor'>growth</span> and <span className='text-designColor'>continuous improvement</span>.
                    </p>
                    <br />
                    <p>
                        My passion for coding began when I wrote my first <span className='text-designColor'>"Hello, world!"</span> program, and I've been dedicated to learning and growing in web development ever since. I thrive in collaborative environments and am always seeking new challenges to enhance my skills. As a <span className='text-designColor'>fresher</span>, I am <span className='text-designColor'>eager</span> to learn from experienced professionals and contribute my enthusiasm and fresh perspective to projects. My goal is to leverage my passion for coding and creativity to contribute to <span className='text-designColor'>impactful projects</span> and drive <span className='text-designColor'>positive</span> positive change in the tech industry.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;