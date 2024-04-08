import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const distFromRightEdge = screenWidth - x;
        const distFromBottomEdge = screenHeight - y;

        const minDist = 50;
        const maxDist = 250;

        const newScale = Math.max(0, Math.min(1, (Math.min(x, distFromRightEdge, y, distFromBottomEdge) - minDist) / (maxDist - minDist)));

        setScale(newScale);
        setPosition({ x, y });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleLinkHover = () => {
        setScale(0);
    };

    const handleLinkLeave = () => {
        setScale(1);
    };

    useEffect(() => {
        const links = document.querySelectorAll('a');

        links.forEach((link) => {
            link.addEventListener('mouseover', handleLinkHover);
            link.addEventListener('mouseout', handleLinkLeave);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('mouseover', handleLinkHover);
                link.removeEventListener('mouseout', handleLinkLeave);
            });
        };
    }, []);

    return (
        <>
            <div className="w-16 h-16 bg-designColor rounded-full fixed z-50 opacity-50 mix-blend-screen" style={{
                transform: `translate(-50%, -50%) scale(${0 + 1 * scale})`,
                transition: 'transform 0.3s ease',
                left: `${position.x}px`,
                top: `${position.y}px`,
                pointerEvents: 'none'  // Disable pointer events for the cursor
            }}></div>
        </>
    );
};

export default CustomCursor;
