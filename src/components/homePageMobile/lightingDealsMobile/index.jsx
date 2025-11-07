import React from 'react';
import { GoChevronRight } from "react-icons/go";


const LightingDealsMobile = () => {

    return (
        <div className='px-3'>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" class="titleIcon-2JJIM"><path d="M347.4 8.1l376.3 0c14.9 0 26.9 12.1 27 26.9 0 3.7-0.8 7.4-2.3 10.8l-135 309.4 0 0 264.6 0c14.9 0 26.9 12.1 27 26.9 0 6.9-2.6 13.5-7.4 18.5l-572.1 607.7c-10.2 10.8-27.3 11.3-38.1 1.1-7.2-6.8-10.1-17-7.6-26.6l103.7-388.4 0 0-236.8 0c-14.9 0-26.9-12.1-26.9-27 0-3.2 0.6-6.5 1.7-9.5l200.7-532.4c4-10.5 14-17.4 25.2-17.4z"></path></svg>
                    <p>
                        Lightning deals
                    </p>
                    <GoChevronRight />
                </div>
                <p>
                    Limited time offer
                </p>
            </div>
        </div>
    )
}

export default LightingDealsMobile;
