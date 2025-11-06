"use client";
import React, { useState } from "react";
import { TbChevronRight } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import Image from 'next/image';
import AllCatIcon from "../../../public/all-category-icon.avif";
import CatImage from "../../../public/prsonilized_product.avif";


const categoriesData = [
    {
      id: 1,
      name: "Featured",
      subcategories: [
        { id: 1, name: "View All", image: AllCatIcon },
        { id: 2, name: "Personalized Products", image: CatImage },
        { id: 3, name: "Accessories", image: CatImage },
        { id: 4, name: "Bags & Wallets", image: CatImage },
        { id: 5, name: "Shoes", image: CatImage },
        { id: 6, name: "Beauty Essentials", image: CatImage },
        { id: 7, name: "Jewelry", image: CatImage },
        { id: 8, name: "Gadgets", image: CatImage },
        { id: 9, name: "Smart Watches", image: CatImage },
        { id: 10, name: "Gift Items", image: CatImage },
        { id: 11, name: "Hair Accessories", image: CatImage },
        { id: 12, name: "Belts", image: CatImage },
        { id: 13, name: "Cosmetics", image: CatImage },
        { id: 14, name: "Perfumes", image: CatImage },
        { id: 15, name: "Phone Accessories", image: CatImage },
        { id: 16, name: "Decor Lights", image: CatImage },
        { id: 17, name: "Daily Use", image: CatImage },
        { id: 18, name: "Limited Offers", image: CatImage },
        { id: 19, name: "Trending Now", image: CatImage },
        { id: 20, name: "Top Rated", image: CatImage },
      ],
    },
    {
      id: 2,
      name: "Home & Kitchen",
      subcategories: [
        { id: 21, name: "View All", image: AllCatIcon },
        { id: 22, name: "Furniture", image: CatImage },
        { id: 23, name: "Decor", image: CatImage },
        { id: 24, name: "Kitchenware", image: CatImage },
        { id: 25, name: "Cookware", image: CatImage },
        { id: 26, name: "Storage", image: CatImage },
        { id: 27, name: "Appliances", image: CatImage },
        { id: 28, name: "Serveware", image: CatImage },
        { id: 29, name: "Wall Decor", image: CatImage },
        { id: 30, name: "Home Improvement", image: CatImage },
        { id: 31, name: "Tools", image: CatImage },
        { id: 32, name: "Gardening", image: CatImage },
        { id: 33, name: "Bedding", image: CatImage },
        { id: 34, name: "Curtains", image: CatImage },
        { id: 35, name: "Cushions", image: CatImage },
        { id: 36, name: "Bathroom Essentials", image: CatImage },
        { id: 37, name: "Lighting", image: CatImage },
        { id: 38, name: "Fans", image: CatImage },
        { id: 39, name: "Rugs", image: CatImage },
        { id: 40, name: "Storage Bins", image: CatImage },
      ],
    },
    {
      id: 3,
      name: "Women's Clothing",
      subcategories: [
        { id: 41, name: "View All", image: AllCatIcon },
        { id: 42, name: "Tops", image: CatImage },
        { id: 43, name: "Dresses", image: CatImage },
        { id: 44, name: "Bottoms", image: CatImage },
        { id: 45, name: "Jumpsuits", image: CatImage },
        { id: 46, name: "Activewear", image: CatImage },
        { id: 47, name: "Nightwear", image: CatImage },
        { id: 48, name: "Party Wear", image: CatImage },
        { id: 49, name: "Sweaters", image: CatImage },
        { id: 50, name: "Coats & Jackets", image: CatImage },
        { id: 51, name: "Blazers", image: CatImage },
        { id: 52, name: "Jeans", image: CatImage },
        { id: 53, name: "Shorts", image: CatImage },
        { id: 54, name: "Skirts", image: CatImage },
        { id: 55, name: "Cardigans", image: CatImage },
        { id: 56, name: "Ethnic Wear", image: CatImage },
        { id: 57, name: "Dupattas", image: CatImage },
        { id: 58, name: "Accessories", image: CatImage },
        { id: 59, name: "T-Shirts", image: CatImage },
        { id: 60, name: "Outerwear", image: CatImage },
      ],
    },
    {
      id: 4,
      name: "Women's Curve Clothing",
      subcategories: [
        { id: 61, name: "View All", image: AllCatIcon },
        { id: 62, name: "Curve Tops", image: CatImage },
        { id: 63, name: "Curve Dresses", image: CatImage },
        { id: 64, name: "Curve Bottoms", image: CatImage },
        { id: 65, name: "Curve Jeans", image: CatImage },
        { id: 66, name: "Curve Skirts", image: CatImage },
        { id: 67, name: "Curve Outerwear", image: CatImage },
        { id: 68, name: "Curve Blazers", image: CatImage },
        { id: 69, name: "Curve Partywear", image: CatImage },
        { id: 70, name: "Curve Sweaters", image: CatImage },
        { id: 71, name: "Curve T-Shirts", image: CatImage },
        { id: 72, name: "Curve Activewear", image: CatImage },
        { id: 73, name: "Curve Nightwear", image: CatImage },
        { id: 74, name: "Curve Dupattas", image: CatImage },
        { id: 75, name: "Curve Ethnic Wear", image: CatImage },
        { id: 76, name: "Curve Suits", image: CatImage },
        { id: 77, name: "Curve Jackets", image: CatImage },
        { id: 78, name: "Curve Accessories", image: CatImage },
        { id: 79, name: "Curve Shorts", image: CatImage },
        { id: 80, name: "Curve Coats", image: CatImage },
      ],
    },
  ];
  

const MobileCategories = () => {
    const [activeCategory, setActiveCategory] = useState(categoriesData[0]);

    return (

        <>
            <div className="mobile-cat-sec bg-white w-full h-[90vh] fixed block xl:hidden">
                <div className="cat-top-strip bg-[#FEEFE1] px-2 py-2 flex justify-between items-center">
                    <p className='flex items-center gap-1 text-[#000000] text-sm'>
                        <FaCheck className='text-[#0b8802] text-lg' />
                        <span className='font-semibold'> Free shipping for you</span>
                    </p>
                    <p className='flex items-center gap-1 text-[#4B4743] text-[12px] font-semibold'>
                        Limited-time offer
                        <TbChevronRight className='text-lg' />
                    </p>
                </div>

                <div className="cat-list h-full flex">
                    {/* Left Side Categories */}
                    <div className="left-side bg-[#f6f6f6] w-[34%] h-full overflow-y-scroll pb-12">
                        <ul className="mobile-cat-list text-[13px] font-semibold">
                            {categoriesData.map((cat) => (
                                <li
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`py-2 px-2 border-l-3 cursor-pointer ${activeCategory.id === cat.id
                                        ? "border-l-[#fb7701] bg-white text-black"
                                        : "border-l-transparent hover:border-l-[#fb7701] hover:bg-white text-[#555]"
                                        }`}
                                >
                                    {cat.name}
                                </li>
                            ))}
                        </ul>
                    </div>
           
                    {/* Right Side Subcategories */}
                    <div className="right-side w-full px-2 pt-2 overflow-y-scroll pb-12">
                        <p className="text-[14px] font-semibold text-black">
                            {activeCategory.name}
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-3">
                            {activeCategory.subcategories.map((sub) => (
                                <div
                                    key={sub.id}
                                    className="single-cat cursor-pointer flex flex-col items-center"
                                >
                                    <Image
                                        className="w-[90%] h-auto rounded-full"
                                        src={sub.image}
                                        alt={sub.name}
                                    />
                                    <p className="text-[13px] font-normal text-center mt-1">
                                        {sub.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MobileCategories;
