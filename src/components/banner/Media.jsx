import React from 'react'
import { FaGithub, FaPhone, FaLinkedinIn, FaEye, FaDownload } from "react-icons/fa";
import { SiGmail, } from "react-icons/si";
import Anand_Kumar_Resume from '../../assets/photos/Anand_Kumar_Resume.pdf'

function Media() {
    return (
        <div className="flex flex-col gap-6 justify-between">
            <div>
                <h2 className="text-designColor uppercase font-titleFont mb-4">
                    Find me in
                </h2>
                <div className="flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/01anand-kumar/"
                        target='_blank'
                    >
                        <span className="bannerIcon">
                            <FaLinkedinIn
                            />
                        </span>
                    </a>
                    <a
                        href="https://github.com/anandkumar2002"
                        target='_blank'
                    >
                        <span className="bannerIcon">
                            <FaGithub />
                        </span>
                    </a>
                    <a
                        href="https://wa.me/8219353946"
                        target='_blank'
                    >
                        <span className="bannerIcon">
                            <FaPhone />
                        </span>
                    </a>
                    <a
                        href="mailto:anandkumar101002@gmail.com"
                        target='_blank'
                    >
                        <span className="bannerIcon">
                            <SiGmail />
                        </span>
                    </a>
                </div>
            </div>
            <div className='flex gap-4'>
                <a
                    href={Anand_Kumar_Resume}
                    target='_blank'
                >
                    <span className='bannerIcon w-56'>
                        <p className='mr-2'>Resume</p>
                        <FaEye />
                    </span>
                </a>
                <a
                    href={Anand_Kumar_Resume} download="Anand_Kumar_Resume"
                    target='_blank'
                >
                    <span className='bannerIcon'>
                        <FaDownload />
                    </span>
                </a>
            </div>
        </div >
    )
}

export default Media