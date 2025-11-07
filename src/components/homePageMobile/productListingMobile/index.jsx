"use client";
import React, { useState, useRef } from "react";
import ProductCardMobile from "../productCardMobile";
import ProductImage from "../../../../public/deals-product4.avif";
import ProductImage2 from "../../../../public/deals-product3.avif";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
    "Recommended", "Men's Fashion", "Women's Fashion", "Electronics", "Mobiles",
    "Home & Kitchen", "Beauty & Health", "Sports", "Toys", "Gadgets",
    "Books", "Automotive", "Jewelry", "Footwear", "Accessories",
    "Stationery", "Gaming", "Pets", "Travel", "Music",
    "Outdoor", "Smart Home", "Baby Products", "Office Supplies", "Fitness"
];

const products = [
    { id: 1, title: "Men's Jacket - Milano Italia", price: 1899, rating: 5, sold: '1k', image: ProductImage, category: "Men" },
    { id: 2, title: "Wireless Earbuds Pro 5.0", price: 2999, rating: 5, sold: '23k', image: ProductImage2, category: "Electronics" },
    { id: 3, title: "Smart Watch Series 8", price: 8499, rating: 4.5, sold: '2k', image: ProductImage, category: "Electronics" },
    { id: 4, title: "Stylish Handbag for Women", price: 2499, rating: 4.5, sold: '12k', image: ProductImage2, category: "Crafts" },
    { id: 5, title: "Casual Sneakers for Men", price: 3599, rating: 4.5, sold: '21k', image: ProductImage, category: "Men" },
    { id: 6, title: "Hair Dryer Pro 2200W", price: 1999, rating: 4.5, sold: '32k', image: ProductImage, category: "Beauty" },
    { id: 7, title: "Smart Home Security Camera", rating: 5, price: 5499, sold: '2k', image: ProductImage2, category: "Electronics" },
    { id: 8, title: "Toy Car Set for Kids", rating: 4.5, price: 1499, sold: '23k', image: ProductImage, category: "Crafts" },
];

const tabsProductList = [
    "All",
    "5-Star Rated",
    "Best-Selling Items",
    "New In",
    "Men",
    "Crafts",
];

const ProductListingMobile = () => {
    const tabsContainerRef = useRef(null);
       const swiperRef = useRef(null);
    const [activeTab, setActiveTab] = useState("All");
    const [selectedCategory, setSelectedCategory] = useState(null);
    // ✅ Filter logic
    const filteredProducts = products.filter((p) => {
        if (activeTab === "All") return true;
        if (activeTab === "5-Star Rated") return p.rating === 5;
        if (activeTab === "Best-Selling Items") return parseInt(p.sold) > 10;
        if (activeTab === "New In") return p.id > 5;
        return p.category === activeTab;
    });
    const handleTabClick = (tab) => {
        setActiveTab(tab);

        // Smooth scroll to keep active tab visible
        const tabElement = document.getElementById(`tab-${tab}`);
        if (tabElement && tabsContainerRef.current) {
            tabsContainerRef.current.scrollTo({
                left: tabElement.offsetLeft - tabsContainerRef.current.offsetLeft,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="tabs-main pt-3 pb-4 px-2">
            {/* Tabs */}
            <div
                ref={tabsContainerRef}
                className="overflow-x-auto scrollbar-hide whitespace-nowrap"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
            >
                <ul className="flex text-[#777777] font-semibold gap-4 text-[15px] min-w-max px-2">
                    {tabsProductList.map((tab) => (
                        <li
                            key={tab}
                            id={`tab-${tab}`}
                            onClick={() => handleTabClick(tab)}
                            className={`cursor-pointer transition-all duration-300
               ${activeTab === tab
                                    ? 'text-black border-b-3 border-black font-bold'
                                    : 'hover:text-gray-800'
                                }`}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
            </div>

            {activeTab === "5-Star Rated" && (
                <div className="product-list-cat pb-4 relative px-2 mt-3">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".category-swiper-next",
                            prevEl: ".category-swiper-prev",
                        }}
                        spaceBetween={10}
                        slidesPerView={"auto"}
                        freeMode={false}
                        loop={true}
                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 8 },
                            480: { slidesPerView: 3, spaceBetween: 10 },
                            640: { slidesPerView: 4, spaceBetween: 10 },
                            768: { slidesPerView: 5, spaceBetween: 10 },
                            1024: { slidesPerView: 6, spaceBetween: 10 },
                            1280: { slidesPerView: 8, spaceBetween: 10 },
                        }}
                        className="category-swiper"
                    >
                        {categories.map((cat, index) => (
                            <SwiperSlide key={index} className="!w-auto">
                                <button
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`single-cat flex items-center justify-center w-fit py-1 px-3 border-[1.7px] rounded-full transition-all duration-500 ease-in-out font-semibold text-[12px] text-nowrap ${selectedCategory === cat
                                            ? " text-black border-black"
                                            : "border-[#555] text-[#555] hover:shadow-md hover:scale-[1.02]"
                                        }`}
                                >
                                    {cat}
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
            <div className="mt-1">
                <ProductCardMobile products={filteredProducts} />
            </div>
        </div>
    );
};

export default ProductListingMobile;
