import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import Weather_App from '../../assets/photos/Weather_App.jpeg'
import Blog_App from '../../assets/photos/Blog_App.jpg'
import Apple_Vision_Pro from '../../assets/photos/Apple_Vision_Pro.png'
import Portfolio from '../../assets/photos/Portfolio.png'
import Password_Generator from '../../assets/photos/Password_Generator.png'

function Projects() {
    return (
        <section
            id='projects'
            className='w-full py-10 border-b-[1px] border-b-black'>
            <div className="flex justify-center items-center text-center">
                <Title
                    des={
                        <span>
                            My <span className='text-designColor'>Projects</span>
                        </span>}
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
                <ProjectCard
                    title='Blog App'
                    src={Blog_App}
                    githubLink={'https://github.com/anandkumar2002/Blog-App-with-Appwrite'}
                    hostedLink={'https://blog-app-with-appwrite-three.vercel.app/'}
                    techstack={'React.js, JavaScript, Tailwind , React Hook Form, Redux Toolkit, Router, Appwrite.'}
                    features={<ul className="list-disc list-inside">
                        <li>Developed responsive blog app.</li>
                        <li>Implemented Login/Logout or SignUp functionality.</li>
                        <li>Ensured only user's posts are editable or deletable.</li>
                        <li>Improved UI design.</li>
                    </ul>
                    }
                />
                <ProjectCard
                    title='Weather App'
                    src={Weather_App}
                    githubLink={'https://github.com/anandkumar2002/React-Weather-App'}
                    hostedLink={'https://anandkumar2002.github.io/React-Weather-App/'}
                    techstack={'React.js, JavaScript, Tailwind, OpenWeatherMap API.'}
                    features={<ul className="list-disc list-inside">
                        <li>Provided current updates and forecasts for global weather conditions.</li>
                        <li>Integrated features for accessing current updates, hourly forecasts, and daily forecasts.</li>
                        <li>Enabled Celsius to Fahrenheit conversion.</li>
                    </ul>
                    }
                />
                <ProjectCard
                    title='Portfolio Website'
                    src={Portfolio}
                    githubLink={'https://github.com/anandkumar2002/My_Portfolio'}
                    hostedLink={'https://anandkumar2002.github.io/My_Portfolio/'}
                    techstack={'React.js, JavaScript, Tailwind, React-icons, React-scroll.'}
                    features={<ul className="list-disc list-inside">
                        <li>Developed a fully responsive website.</li>
                        <li>Implemented scrolling functionality.</li>
                        <li>Added animations on page load.</li>
                        <li>Integrated a functional contact form using Web3Forms.</li>
                    </ul>
                    }
                />
                <ProjectCard
                    title='Apple Vision Pro Clone'
                    src={Apple_Vision_Pro}
                    githubLink={'https://github.com/anandkumar2002/Apple-Vision-Pro-website-clone-using-HTML-CSS-JAVASCRIPT-'}
                    hostedLink={'https://anandkumar2002.github.io/Apple-Vision-Pro-website-clone-using-HTML-CSS-JAVASCRIPT-/'}
                    techstack={'JavaScript, CSS, HTML, GSAP (GreenSock Animation Platform)'}
                    features={<ul className="list-disc list-inside">
                        <li>Developed a UI clone of the Apple Vision Pro website.</li>
                        <li>Developed a fully responsive website.</li>
                        <li>Implemented scrolling functionality.</li>
                        <li>Added animations on page load.</li>
                    </ul>
                    }
                />
                <ProjectCard
                    title='Password Generator'
                    src={Password_Generator}
                    githubLink={'https://github.com/anandkumar2002/Password-Generator-by-using-React'}
                    hostedLink={'https://anandkumar2002.github.io/Password-Generator-by-using-React/'}
                    techstack={'React.js ,JavaScript, Tailwind, React Hooks.'}
                    features={<ul className="list-disc list-inside">
                        <li>Generated strong, random passwords of specified length.</li>
                        <li>Included optional requirements such as numbers and special characters.</li>
                        <li>Implemented 'Copy Password' feature for user convenience and security.</li>
                    </ul>
                    }
                />

            </div>
        </section>
    )
}

export default Projects