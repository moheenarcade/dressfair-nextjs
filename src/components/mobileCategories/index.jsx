"use client";
import React, { useEffect, useState } from "react";
import { TbChevronRight } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import Image from 'next/image';
import AllCatIcon from "../../../public/all-category-icon.avif";
import CatImage from "../../../public/prsonilized_product.avif";
import Link from "next/link";


const categoriesData = [
    {
        id: 1,
        name: "Featured",
        subcategories: [
            { id: 101, name: "Personalized Products", image: CatImage },
            { id: 102, name: "Accessories", image: CatImage },
            { id: 103, name: "Bags & Wallets", image: CatImage },
            { id: 104, name: "Shoes", image: CatImage },
            { id: 105, name: "Beauty Essentials", image: CatImage },
            { id: 106, name: "Smart Watches", image: CatImage },
            { id: 107, name: "Jewelry Sets", image: CatImage },
            { id: 108, name: "Perfumes", image: CatImage },
            { id: 109, name: "Makeup Kits", image: CatImage },
            { id: 110, name: "Travel Accessories", image: CatImage },
            { id: 111, name: "T-Shirts", image: CatImage },
            { id: 112, name: "Sunglasses", image: CatImage },
            { id: 113, name: "Belts", image: CatImage },
            { id: 114, name: "Hats & Caps", image: CatImage },
            { id: 115, name: "Gift Boxes", image: CatImage },
            { id: 116, name: "Bluetooth Speakers", image: CatImage },
            { id: 117, name: "Gadgets", image: CatImage },
            { id: 118, name: "Stationery", image: CatImage },
            { id: 119, name: "Keychains", image: CatImage },
            { id: 120, name: "Custom Prints", image: CatImage },
        ],
    },
    {
        id: 2,
        name: "Home & Kitchen",
        subcategories: [
            { id: 201, name: "Furniture", image: CatImage },
            { id: 202, name: "Decor", image: CatImage },
            { id: 203, name: "Kitchenware", image: CatImage },
            { id: 204, name: "Bedding", image: CatImage },
            { id: 205, name: "Storage Solutions", image: CatImage },
            { id: 206, name: "Cleaning Supplies", image: CatImage },
            { id: 207, name: "Cookware Sets", image: CatImage },
            { id: 208, name: "Dinnerware", image: CatImage },
            { id: 209, name: "Curtains", image: CatImage },
            { id: 210, name: "Lighting", image: CatImage },
            { id: 211, name: "Wall Art", image: CatImage },
            { id: 212, name: "Rugs", image: CatImage },
            { id: 213, name: "Mirrors", image: CatImage },
            { id: 214, name: "Cushions", image: CatImage },
            { id: 215, name: "Bathroom Accessories", image: CatImage },
            { id: 216, name: "Kitchen Storage", image: CatImage },
            { id: 217, name: "Table Linen", image: CatImage },
            { id: 218, name: "Home Fragrance", image: CatImage },
            { id: 219, name: "Plants & Pots", image: CatImage },
            { id: 220, name: "Outdoor Furniture", image: CatImage },
        ],
    },
    {
        id: 3,
        name: "Electronics",
        subcategories: [
            { id: 301, name: "Smartphones", image: CatImage },
            { id: 302, name: "Laptops", image: CatImage },
            { id: 303, name: "Headphones", image: CatImage },
            { id: 304, name: "Tablets", image: CatImage },
            { id: 305, name: "Smartwatches", image: CatImage },
            { id: 306, name: "Cameras", image: CatImage },
            { id: 307, name: "Gaming Consoles", image: CatImage },
            { id: 308, name: "Monitors", image: CatImage },
            { id: 309, name: "Printers", image: CatImage },
            { id: 310, name: "Drones", image: CatImage },
            { id: 311, name: "Bluetooth Speakers", image: CatImage },
            { id: 312, name: "Chargers & Cables", image: CatImage },
            { id: 313, name: "Power Banks", image: CatImage },
            { id: 314, name: "Projectors", image: CatImage },
            { id: 315, name: "TVs", image: CatImage },
            { id: 316, name: "Earbuds", image: CatImage },
            { id: 317, name: "Computer Accessories", image: CatImage },
            { id: 318, name: "Home Appliances", image: CatImage },
            { id: 319, name: "Wearable Tech", image: CatImage },
            { id: 320, name: "VR Devices", image: CatImage },
        ],
    },
    {
        id: 4,
        name: "Fashion",
        subcategories: [
            { id: 401, name: "Men’s Clothing", image: CatImage },
            { id: 402, name: "Women’s Clothing", image: CatImage },
            { id: 403, name: "Kids’ Clothing", image: CatImage },
            { id: 404, name: "Shoes", image: CatImage },
            { id: 405, name: "Bags", image: CatImage },
            { id: 406, name: "Jewelry", image: CatImage },
            { id: 407, name: "Watches", image: CatImage },
            { id: 408, name: "Hats & Scarves", image: CatImage },
            { id: 409, name: "Belts", image: CatImage },
            { id: 410, name: "Sunglasses", image: CatImage },
            { id: 411, name: "Underwear", image: CatImage },
            { id: 412, name: "Sportswear", image: CatImage },
            { id: 413, name: "Formalwear", image: CatImage },
            { id: 414, name: "Outerwear", image: CatImage },
            { id: 415, name: "Sleepwear", image: CatImage },
            { id: 416, name: "Beachwear", image: CatImage },
            { id: 417, name: "Ethnic Wear", image: CatImage },
            { id: 418, name: "Accessories", image: CatImage },
            { id: 419, name: "Handbags", image: CatImage },
            { id: 420, name: "Seasonal Sale", image: CatImage },
        ],
    },

];

const MobileCategories = ({ onClose }) => {
    const [activeCategory, setActiveCategory] = useState(categoriesData[0]);
    // ✅ Disable body scroll when component mounts
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (

        <>
            <div className="mobile-cat-sec bg-white w-full h-[100vh] lg:h-screen fixed block xl:hidden z-[99999999999]">
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
                                // <Link onClick={() => onClose()}  key={cat.id} href={`/c/${cat.name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')}`}>
                                    <li

                                        onClick={() => setActiveCategory(cat)}
                                        className={`py-2 px-2 border-l-3 cursor-pointer ${activeCategory.id === cat.id
                                            ? "border-l-[#fb7701] bg-white text-black"
                                            : "border-l-transparent hover:border-l-[#fb7701] hover:bg-white text-[#555]"
                                            }`}
                                    >
                                        {cat.name}
                                    </li>
                                // </Link>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side Subcategories */}
                    <div className="right-side w-full px-2 pt-2 overflow-y-scroll pb-30">
                        <p className="text-[14px] font-semibold text-black">
                            {activeCategory.name}
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-3">
                            {activeCategory.subcategories.map((sub) => (
                                <Link onClick={() => onClose()}  href={`/c/${activeCategory.name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')}/${sub.name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')}`}
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
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MobileCategories;
