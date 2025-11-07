"use client"
import HeroSection from '@/components/homePageComponent/heroSection';
import React, { useState, useRef } from 'react';
import WhyChosseMobileSec from '../whyChosseMobileSec';
import LightingDealsMobile from '../lightingDealsMobile';

const TopTabsSection = () => {
    const [activeTab, setActiveTab] = useState('All');
    const tabsContainerRef = useRef(null);
    const tabs = [
        'All', 'Women', 'Home', 'Sports', 'Men', 'Crafts',
        'Electronics', 'Jewelry', 'Kids', 'Toy', 'Bags',
        'Beauty', 'Office'
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        const tabElement = document.getElementById(`tab-${tab}`);
        if (tabElement && tabsContainerRef.current) {
            const container = tabsContainerRef.current;
            const scrollLeft = tabElement.offsetLeft - container.offsetLeft;
            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className='tabs-main pt-2 pb-2 px-2'>
                {/* Scrollable container */}
                <div
                    ref={tabsContainerRef}
                    className='overflow-x-auto scrollbar-hide whitespace-nowrap'
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                > <ul className='flex text-[#777777] font-semibold gap-4 text-[15px] min-w-max px-2'>
                        {tabs.map((tab) => (
                            <li
                                key={tab}
                                id={`tab-${tab}`}
                                className={`cursor-pointer transition-all duration-200 ${activeTab === tab
                                    ? 'text-black border-b-3 border-black font-bold'
                                    : 'hover:text-gray-800'
                                    }`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            {/* Tab content area */}
            <div className="">
                {activeTab === 'All' &&
                    <>
                        <HeroSection />
                        <WhyChosseMobileSec />
                        <LightingDealsMobile />
                    </>
                }
                {activeTab === 'Women' && <div>Women's Products Component</div>}
                {activeTab === 'Home' && <div>Home Products Component</div>}
                {activeTab === 'Sports' && <div>Sports Products Component</div>}
                {activeTab === 'Men' && <div>Men's Products Component</div>}
                {activeTab === 'Crafts' && <div>Crafts Component</div>}
                {activeTab === 'Electronics' && <div>Electronics Component</div>}
                {activeTab === 'Jewelry' && <div>Jewelry Component</div>}
                {activeTab === 'Kids' && <div>Kids Component</div>}
                {activeTab === 'Toy' && <div>Toy Component</div>}
                {activeTab === 'Bags' && <div>Bags Component</div>}
                {activeTab === 'Beauty' && <div>Beauty Component</div>}
                {activeTab === 'Office' && <div>Office Component</div>}
            </div>
        </>

    );
};

export default TopTabsSection;
