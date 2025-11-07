"use client";
import React, { useState, useRef } from "react";
import ProductCardMobile from "../productCardMobile";
import ProductImage from "../../../../public/deals-product4.avif";
import ProductImage2 from "../../../../public/deals-product3.avif";

const products = [
  { id: 1, title: "Men's Jacket - Milano Italia", price: 1899,rating: 4.5, sold: '1k', image: ProductImage, category: "Men" },
  { id: 2, title: "Wireless Earbuds Pro 5.0", price: 2999,rating: 4.5, sold: '23k', image: ProductImage2, category: "Electronics" },
  { id: 3, title: "Smart Watch Series 8", price: 8499,rating: 4.5, sold: '2k', image: ProductImage, category: "Electronics" },
  { id: 4, title: "Stylish Handbag for Women", price: 2499, rating: 4.5, sold: '12k', image: ProductImage2, category: "Crafts" },
  { id: 5, title: "Casual Sneakers for Men", price: 3599, rating: 4.5, sold: '21k', image: ProductImage, category: "Men" },
  { id: 6, title: "Hair Dryer Pro 2200W", price: 1999, rating: 4.5, sold: '32k', image: ProductImage, category: "Beauty" },
  { id: 7, title: "Smart Home Security Camera",rating: 5, price: 5499, sold: '2k', image: ProductImage2, category: "Electronics" },
  { id: 8, title: "Toy Car Set for Kids",rating: 4.5, price: 1499, sold: '23k', image: ProductImage, category: "Crafts" },
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
  const [activeTab, setActiveTab] = useState("All");

  // Filter products based on active tab
  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((p) => p.category === activeTab);

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

      {/* Product List */}
      <div className="mt-1">
        <ProductCardMobile products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductListingMobile;
