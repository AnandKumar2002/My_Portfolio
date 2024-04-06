import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {
    return (
        <p className='fixed bottom-10 right-10 z-50 text-5xl mix-blend-screen'>
            <a href="https://wa.me/8219353946" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className='text-designColor' />
            </a>
        </p>
    )
}

export default WhatsApp;


// import React from 'react';
// import { FaWhatsapp } from "react-icons/fa";
// function WhatsApp() {
//     return (
//             <p onClick={() => {
//                 window.open("https://wa.me/821935396", "_blank");
//               }} className='fixed bottom-10 right-10 z-50 text-5xl mix-blend-screen'>
//                 <FaWhatsapp className='text-designColor' />
//             </p>
//     )
// }

// export default WhatsApp;
