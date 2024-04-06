import React from 'react'
import Media from './Media'
import LayoutOfLeftBanner from './LayoutOfLeftBanner';

function LeftBanner() {
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20 ">
            {/* LayoutOfLeftBanner */}
            <LayoutOfLeftBanner />
            {/* Media */}
            <Media />
        </div>
    )
}

export default LeftBanner;