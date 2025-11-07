// "use client"
// import HeroSection from '@/components/homePageComponent/heroSection';
// import React, { useState, useRef } from 'react';
// import WhyChosseMobileSec from '../whyChosseMobileSec';
// import LightingDealsMobile from '../lightingDealsMobile';
// import PromotionalSliderMobile from '../promotionalSliderMobile';
// import ProductListingMobile from '../productListingMobile';

// const TopTabsSection = () => {
//     const [activeTab, setActiveTab] = useState('All');
//     const tabsContainerRef = useRef(null);
//     const tabs = [
//         'All', 'Women', 'Home', 'Sports', 'Men', 'Crafts',
//         'Electronics', 'Jewelry', 'Kids', 'Toy', 'Bags',
//         'Beauty', 'Office'
//     ];

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//         const tabElement = document.getElementById(`tab-${tab}`);
//         if (tabElement && tabsContainerRef.current) {
//             const container = tabsContainerRef.current;
//             const scrollLeft = tabElement.offsetLeft - container.offsetLeft;
//             container.scrollTo({
//                 left: scrollLeft,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     return (
//         <>
//             <div className='tabs-main pt-2 pb-2 px-2'>
//                 {/* Scrollable container */}
//                 <div
//                     ref={tabsContainerRef}
//                     className='overflow-x-auto scrollbar-hide whitespace-nowrap'
//                     style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//                 > <ul className='flex text-[#777777] font-semibold gap-4 text-[15px] min-w-max px-2'>
//                         {tabs.map((tab) => (
//                             <li
//                                 key={tab}
//                                 id={`tab-${tab}`}
//                                 className={`cursor-pointer transition-all duration-200 ${activeTab === tab
//                                     ? 'text-black border-b-3 border-black font-bold'
//                                     : 'hover:text-gray-800'
//                                     }`}
//                                 onClick={() => handleTabClick(tab)}
//                             >
//                                 {tab}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//             </div>
//             {/* Tab content area */}
//             <div className="">
//                 {activeTab === 'All' &&
//                     <>
//                         <HeroSection />
//                         <WhyChosseMobileSec />
//                         <LightingDealsMobile />
//                         <PromotionalSliderMobile />
//                         <ProductListingMobile />
//                     </>
//                 }
//                 {activeTab === 'Women' && <div>Women's Products Component</div>}
//                 {activeTab === 'Home' && <div>Home Products Component</div>}
//                 {activeTab === 'Sports' && <div>Sports Products Component</div>}
//                 {activeTab === 'Men' && <div>Men's Products Component</div>}
//                 {activeTab === 'Crafts' && <div>Crafts Component</div>}
//                 {activeTab === 'Electronics' && <div>Electronics Component</div>}
//                 {activeTab === 'Jewelry' && <div>Jewelry Component</div>}
//                 {activeTab === 'Kids' && <div>Kids Component</div>}
//                 {activeTab === 'Toy' && <div>Toy Component</div>}
//                 {activeTab === 'Bags' && <div>Bags Component</div>}
//                 {activeTab === 'Beauty' && <div>Beauty Component</div>}
//                 {activeTab === 'Office' && <div>Office Component</div>}
//             </div>
//         </>

//     );
// };

// export default TopTabsSection;


"use client"
import HeroSection from '@/components/homePageComponent/heroSection';
import React, { useState, useRef } from 'react';
import WhyChosseMobileSec from '../whyChosseMobileSec';
import LightingDealsMobile from '../lightingDealsMobile';
import PromotionalSliderMobile from '../promotionalSliderMobile';
import ProductListingMobile from '../productListingMobile';

const TopTabsSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabsContainerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const tabs = [
    'All', 'Women', 'Home', 'Sports', 'Men', 'Crafts',
    'Electronics', 'Jewelry', 'Kids', 'Toy', 'Bags',
    'Beauty', 'Office'
  ];

  // Scroll active tab into view
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const tabElement = document.getElementById(`tab-${tab}`);
    if (tabElement && tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const scrollLeft = tabElement.offsetLeft - container.offsetLeft;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  // Swipe detection
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    const currentIndex = tabs.indexOf(activeTab);

    // threshold: minimal swipe distance
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < tabs.length - 1) {
        // Swiped left → next tab
        handleTabClick(tabs[currentIndex + 1]);
      } else if (diff < 0 && currentIndex > 0) {
        // Swiped right → previous tab
        handleTabClick(tabs[currentIndex - 1]);
      }
    }
  };

  return (
    <>
      <div className='tabs-main pt-2 pb-2 px-2'>
        <div
          ref={tabsContainerRef}
          className='overflow-x-auto scrollbar-hide whitespace-nowrap'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <ul className='flex text-[#777777] font-semibold gap-4 text-[15px] min-w-max px-2'>
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

      {/* Tab content with swipe gesture */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="overflow-hidden"
      >
        {activeTab === 'All' && (
          <>
            <HeroSection />
            <WhyChosseMobileSec />
            <LightingDealsMobile />
            <PromotionalSliderMobile />
            <ProductListingMobile />
          </>
        )}
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
