import React from 'react'
import bannerImg from '../../assets/photos/bannerImg.png'

function RightBanner() {
    return (
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative bottom-10">
            <img
                data-aos="zoom-in"
                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[600px] z-10 mix-blend-lighten"
                src={bannerImg}
                alt="bannerImg"
            />
            <div className="absolute bottom-0 w-[350px] h-[250px] lgl:w-[500px] lgl:h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center "></div>
        </div>
    )
};

export default RightBanner