import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollPercentage(scrolled);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div className="w-full fixed top-20 transform mdl:z-50 ">
            <div className="w-100 mdl:h-[1.5px] h-[2px] bg-bodyColor rounded-xl overflow-hidden">
                <div className="h-full bg-designColor" style={{ width: `${scrollPercentage}%` }} />
            </div>
        </div>
    );
};

export default ScrollIndicator;
