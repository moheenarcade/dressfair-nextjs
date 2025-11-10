"use client"
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from "../../../public/temu-logo.png";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { RiChatSmile3Line, RiGitRepositoryPrivateFill, RiGitRepositoryPrivateLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import Counrty from "../../../public/pak-eng.avif";
import HeaderTopContent from '../headerTopContent';
import { TfiMenuAlt } from "react-icons/tfi";
import MobileHeaderSearchModel from '../models/mobileHeaderSearchModel';
import MobileCategories from '../mobileCategories';
import MobileUserPopup from "../../components/mobileUserPopup/index";
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import AllCatIcon from "../../../public/all-category-icon.avif";
import CatImage from "../../../public/prsonilized_product.avif";
import { FaChevronRight } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import SearchBarHeader from '../searchBarHeader';
import SignInModal from '../models/SignInModal';
import { BiSupport } from "react-icons/bi";
import { AiOutlineMessage, AiOutlinePropertySafety, AiOutlineSafety } from 'react-icons/ai';


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

const Header = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/' || pathname === '/home';
    const [showMobileSearchModel, setMobileSearchModel] = useState(false);
    const [showMobileCategory, setMobileCategory] = useState(false);
    const [showUserMobileDropdown, setShowUserMobileDropdown] = useState(false);
    const [showMobileUser, setShowMobileUser] = useState(false);
    const popupRef = useRef(null);
    const buttonRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState(categoriesData[0]);
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [showSignInModal, setShowSignInModal] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setShowMobileUser(false);
            }
        };

        if (showMobileUser) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showMobileUser]);

    useEffect(() => {
        if (showMegaMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showMegaMenu]);


    return (
        <>
            <header>
                <div className={`pb-2 border-b hidden xl:block ${isHomePage ? 'bg-[#E02222] border-b-[#E02222]' : 'bg-white border-b-[#DFDFDF]'}`}>
                    <HeaderTopContent />
                    <nav className='container mx-auto px-2 2xl:px-22 z-[99999999999]'>
                        <div className="flex items-center justify-between gap-4">
                            <div className="w-[50px] shrink-0">
                                <Link href="/">
                                    <Image className="w-full h-auto" width={200} height={300} src='https://backend.dressfair.com/image/cache/catalog/logo-01-200x50.png' alt="Logo" />
                                </Link>
                            </div>

                            {/* Menu Links */}
                            <ul className="flex items-center shrink-0">
                                <Link href="/best-seller">
                                    <li className={` ${isHomePage ? "text-white " : "text-[#222222]"} relative flex items-center gap-1 font-semibold cursor-pointer  text-[14px] px-3 py-1 group rounded-md `}>
                                        <span className={`${isHomePage ? "bg-[#BA0000]" : "bg-[#eeeeee]"} absolute inset-0 h-[50px] my-auto rounded-full scale-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-100 `}></span>
                                        <svg
                                            viewBox="0 0 1024 1024"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            fill={`${isHomePage ? "white" : "#222222"} `}
                                            className="relative z-10"
                                        >
                                            <title>Best-Selling Items</title>
                                            <path d="M542.7 34.1c58.8 0 110.7 40.1 127.6 98.8l0.7 2.5 0.5 1.1c0.3 0.9 0.6 1.8 0.9 2.7l0.7 2.8c6.2 29.5 9.5 59.1 9.5 88.8 0 26.2-2.4 52.3-7.2 78l-1.8 9.2 145.4 0.1c2.5 0 5 0.2 7.5 0.5l1.1 0.1 2.7 0.2c41.3 3.2 79.2 25.6 102.2 61.6l2.6 4.2c15.3 25.2 22.4 54.8 20.2 84.5l0.1-1.4 0.1-1.1 0 1.1c0.1 5.4-0.3 10.6-1.2 15.3l-0.8 3.4-74 340c-2.1 8.1-5.5 15.7-10.1 22.4l0.4-0.8 1.2-1.8-1.6 3.2c-9.9 18.7-23.9 34.8-40.8 47l-4.6 3.2c-21.9 14.4-47 21.9-72.5 21.9-0.9 0-1.7 0-2.5-0.1l-612.3-0.2c-36.4 0-66.4-29.7-68.2-67.4l-0.1-3.6c-0.1-1.6-0.2-2.7 0-4l0.3-389.6c0-34.8 24.3-64.4 57.2-70.1l3.4-0.4c102-11.9 169.3-32.5 200-59 42.2-36.2 80.1-108.7 80.1-154.3 0-78.4 59-138.7 133.3-138.8z m-218.4 460.8c-28.3 0-51.2 22.9-51.2 51.2l0 204.8c0 28.3 22.9 51.2 51.2 51.2 28.3 0 51.2-22.9 51.2-51.2l0-204.8c0-28.3-22.9-51.2-51.2-51.2z"></path>
                                        </svg>
                                        {/* 🔹 active indicator bar */}
                                        {pathname === "/best-seller" && (
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#FB7701] rounded-full"></div>
                                        )}
                                        <span className="relative z-10">Best-Selling Items</span>
                                    </li>
                                </Link>
                                <Link href="/star-rated">
                                <li className={` ${isHomePage ? "text-white " : "text-[#222222]"} relative group flex items-center gap-1 font-semibold cursor-pointer  text-[14px] px-3 py-1 `}>
                                    <span className={`${isHomePage ? "bg-[#BA0000]" : "bg-[#eeeeee]"} absolute inset-0 h-[50px] my-auto rounded-full scale-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-100 `}></span>
                                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="relative z-10" alt="" aria-label="" fill={`${isHomePage ? "white" : "#222222"} `} aria-hidden="true"><title>5-Star Rated</title><path d="M848.7 133.8c62.1 0 112.5 52.1 112.4 116.3l0 481c0 64.2-50.4 116.3-112.4 116.3l-212.5 0c-8.9 0-17.5 3.6-23.6 10.1l-86.8 90.5-0.8 0.8c-13 12.6-33.7 12.3-46.4-0.6l-88.5-90.9c-6.2-6.3-14.6-9.9-23.4-9.9l-191.4 0c-59.3 0-107.9-47.4-112.1-107.6l-0.3-8.7 0-481c0-64.2 50.4-116.3 112.4-116.3z m-329.7 178.4c-10-3.4-20.8 2.1-24.1 12.4l-34.2 106.1-108.2 0.8c-6 0-11.7 3-15.2 8-6.3 8.8-4.5 21.1 4 27.6l87.1 66.4-32.7 106.6c-1.8 5.9-0.8 12.4 2.7 17.4 6.1 8.9 18.1 10.9 26.6 4.6l88-65.1 88 65.1c4.9 3.6 11.1 4.6 16.8 2.7 10-3.3 15.6-14.4 12.4-24.7l-32.6-106.6 87-66.4c4.8-3.7 7.7-9.5 7.8-15.7 0.1-10.9-8.4-19.8-19-19.9l-108.1-0.8-34.2-106.1c-1.9-5.9-6.4-10.5-12.1-12.4z"></path></svg>
                                    <span className="relative z-10">5-Star Rated</span>
                                    {/* 🔹 active indicator bar */}
                                    {pathname === "/star-rated" && (
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#FB7701] rounded-full"></div>
                                    )}
                                </li>
                                </Link>
                                <Link href="/new-in">

                                <li className={` ${isHomePage ? "text-white " : "text-[#222222]"} relative group flex items-center gap-1 font-semibold cursor-pointer text-[14px] px-3 py-1 `}>
                                    <span className={`${isHomePage ? "bg-[#BA0000]" : "bg-[#eeeeee]"} absolute inset-0 h-[50px] my-auto rounded-full scale-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-100 `}></span>
                                    <span className="relative z-10"> New In</span>
                                    {/* 🔹 active indicator bar */}
                                    {pathname === "/new-in" && (
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#FB7701] rounded-full"></div>
                                    )}
                                </li>
                                </Link>

                                {/* Categories trigger and mega menu */}
                                <div
                                    className="relative z-[999999999999]"
                                    onMouseEnter={() => setShowMegaMenu(true)}
                                    onMouseLeave={() => setShowMegaMenu(false)}
                                >
                                    <li 
                                      onMouseEnter={() => {
                                        setShowMegaMenu(true);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className={`${isHomePage ? "text-white" : "text-[#222222]"} relative cursor-pointer flex items-center gap-2 group py-1 px-3 text-[14px] font-semibold `}>
                                        <span className={`${isHomePage ? "bg-[#BA0000]" : "bg-[#eeeeee]"} absolute inset-0 h-[50px] my-auto rounded-full scale-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-100`}></span>
                                        <span className="relative z-10">Categories</span>
                                        <IoIosArrowDown className="relative z-10" />
                                    </li>

                                    {/* Overlay (dark background) */}
                                    {showMegaMenu && (
                                        <div
                                            className="fixed top-30 inset-0 bg-black/50"
                                            onClick={() => setShowMegaMenu(false)}
                                        ></div>
                                    )}
                                    {showMegaMenu && (
                                        <div
                                            className="absolute left-1/2 top-[30px] transform -translate-x-1/2 z-[60]
                 w-0 h-0 
                 border-l-[10px] border-l-transparent 
                 border-r-[10px] border-r-transparent 
                 border-b-[10px] border-b-white
                 "
                                        />
                                    )}
                                    {/* Mega Menu */}
                                    <div
                                        className={`fixed left-0 top-[110px] mx-auto right-0 overflow-hidden rounded-md z-[9999999] bg-white shadow-lg transition-all duration-300 ease-in-out ${showMegaMenu ? "opacity-100 visible" : "opacity-0 invisible"
                                            }`}
                                        style={{ height: "70vh", width: "50%" }}
                                        onMouseEnter={() => setShowMegaMenu(true)}
                                        onMouseLeave={() => setShowMegaMenu(false)}
                                    >
                                        <div className="flex h-full">
                                            {/* Left Side Categories */}
                                            <div className="w-1/4 bg-[#f6f6f6] border-r border-gray-200 overflow-y-auto">
                                                <ul>
                                                    {categoriesData.map((cat) => (
                                                        <li
                                                            key={cat.id}
                                                            onMouseEnter={() => setActiveCategory(cat)}
                                                            className={`py-3 px-4 flex justify-between items-center cursor-pointer text-sm font-semibold ${activeCategory.id === cat.id
                                                                ? "bg-white text-black border-l-4 border-[#fb7701]"
                                                                : "text-gray-600 hover:bg-white hover:text-black border-l-4 border-l-transparent"
                                                                }`}
                                                        >
                                                            {cat.name} <GoChevronRight className='text-[14px] text-gray-400' />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Right Side Subcategories */}
                                            <div className="w-3/4 p-4 overflow-y-auto">
                                                <h3 className="font-bold text-lg mb-4">{activeCategory.name}</h3>
                                                <div className="grid grid-cols-5 gap-4">
                                                    {activeCategory.subcategories.map((sub) => (
                                                        <div key={sub.id} className="cursor-pointer group hover:scale-[1.06] tarnsition-all duration-500 ease-in-out  flex flex-col items-center text-center">
                                                            <Image
                                                                src={sub.image}
                                                                alt={sub.name}
                                                                className="w-[80px] h-[80px] rounded-full object-cover"
                                                            />
                                                            <p className="mt-2 text-[14px]">{sub.name}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>

                            {/* Search Bar (Auto-width Section) */}
                            <SearchBarHeader />
                            {/* Right Icons */}
                            <ul className="flex items-center shrink-0">
                                <li onClick={() => setShowSignInModal(true)} className={`${isHomePage ? "text-white" : "text-[#222222]"} relative group py-1 px-3 flex items-center gap-1 cursor-pointer `}>
                                    <span className={`${isHomePage ? "bg-[#BA0000]" : "bg-[#eeeeee]"} absolute inset-0 h-[50px] my-auto rounded-full scale-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-100`}></span>
                                    <FaRegUser className="text-xl relative z-10" />
                                    <span className="leading-4 relative z-10">
                                        <span className="text-[13px]"> Sign in / Register</span> <br />
                                        <b className="text-[14px]">Order & Account</b>
                                    </span>
                                </li>

                                <li className={`${isHomePage ? "text-white" : "text-[#222222]"} relative group py-1 px-3 cursor-pointer font-semibold flex gap-1 items-center text-[14px]`}>
                                    {/* Background animation */}
                                    <span className={`${isHomePage ? "bg-[#BA0000]" : "bg-[#eeeeee]"} absolute inset-0 h-[50px] my-auto rounded-full scale-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-100`}></span>

                                    {/* Main content */}
                                    <span className="relative z-10 flex items-center gap-1">
                                        <RiChatSmile3Line className="text-xl" />
                                        Support
                                    </span>

                                    {/* Dropdown menu */}
                                    <ul
                                        className="absolute left-1/2 top-full py-3 mt-1 w-62 bg-white invisible group-hover:visible text-black rounded-md shadow-lg opacity-0 translate-y-2 
    group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ease-in-out z-20 transform -translate-x-1/2"
                                    >
                                        <div
                                            className="absolute left-1/2 top-[-8px] transform -translate-x-1/2 z-[60]
                 w-0 h-0 
                 border-l-[10px] border-l-transparent 
                 border-r-[10px] border-r-transparent 
                 border-b-[10px] border-b-white
                 "
                                        />
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer tetx-[14px] font-[500] flex items-center gap-1"><BiSupport className='text-lg' />
                                            Support center</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer tetx-[14px] font-[500] flex items-center gap-1"><AiOutlineSafety className='text-lg' />Safety center</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer tetx-[14px] font-[500] flex items-center gap-1"><RiChatSmile3Line className='text-lg' />Chat with dressfair</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer tetx-[14px] font-[500] flex items-center gap-1"><AiOutlinePropertySafety className='text-lg' />Dressfair purchase protection</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer tetx-[14px] font-[500] flex items-center gap-1"><RiGitRepositoryPrivateLine className='text-lg' />Privacy policy</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer tetx-[14px] font-[500] flex items-center gap-1"><AiOutlineMessage className='text-lg' />Term of use</li>
                                    </ul>
                                </li>
                                <li className={`${isHomePage ? "text-white" : "text-[#222222]"} relative group py-1 px-3 cursor-pointer font-semibold text-[14px]`}>
                                    <span className={` ${isHomePage ? "bg-[#BA0000]" : "bg-[#eeeeee]"} absolute inset-0 h-[50px] my-auto rounded-full scale-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-100`}></span>
                                    <span className="relative z-10 flex items-center gap-1">
                                        <Image className='w-4 h-4 rounded-full' src={Counrty} alt="country flag" />
                                        English
                                    </span>

                                    {/* Dropdown menu */}
                                    <ul
                                        className="absolute left-1/2 top-full py-3 mt-1 w-62 bg-white invisible group-hover:visible text-black rounded-md shadow-lg opacity-0 translate-y-2 
    group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ease-in-out z-20 transform -translate-x-1/2"
                                    >
                                        <div
                                            className="absolute left-1/2 top-[-8px] transform -translate-x-1/2 z-[60]
                 w-0 h-0 
                 border-l-[10px] border-l-transparent 
                 border-r-[10px] border-r-transparent 
                 border-b-[10px] border-b-white
                 "
                                        />
                                        <div className="px-4 py-2">
                                            <label className='text-[17px] font-normal'>Language</label>
                                            <div className="lang-radio py-3 border-b border-b-gray-200">
                                                <div className='flex items-center gap-2 text-[15px] font-normal'><div className='bg-white rounded-full border-4 border-black w-4 h-4'></div> English</div>

                                            </div>

                                            <div className="pt-3">
                                                <label className='text-[17px] font-normal'>Currency</label>
                                                <div className="lang-radio pb-3 pt-2 border-b border-b-gray-200">
                                                    <p className='flex items-center gap-2 text-[15px] font-normal'>PKR: <b>Rs.</b></p>
                                                </div>
                                            </div>

                                            <div className="pt-3">
                                                <p className="text-gray-600 font-normal flex gap-2">
                                                    <Image
                                                        className="w-4 h-4 rounded-full inline-block"
                                                        src={Counrty}
                                                        alt="country flag"
                                                    />
                                                    <span>You are shopping on Temu Pakistan.</span>
                                                </p>

                                                <button className='mt-3 py-1 px-2 rounded-full font-semibold text-md border hover:border-black hover:scale-[1.02] transition-all duration-500 ease-in-out border-gray-500 w-full text-center'>
                                                    Change country/region
                                                </button>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li className={` ${isHomePage ? "text-white" : "text-[#222222]"} relative group py-1 px-3 cursor-pointer `}>
                                    <span className={`${isHomePage ? "bg-[#BA0000]" : "bg-[#eeeeee]"} absolute inset-0 min-w-[50px] mx-auto h-[50px] my-auto rounded-full scale-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-100`}></span>
                                    <FiShoppingCart className="text-xl relative z-10" />
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="mobile-header py-1 px-2 lg:px-16 border-b-[#DFDFDF] border-b block xl:hidden">
                    <div className="flex justify-between items-center gap-4">
                        <div className="w-[50px] shrink-0">
                            <Link href="/">
                                <Image
                                    className="w-full h-auto"
                                    width={200}
                                    height={300}
                                    src="https://backend.dressfair.com/image/cache/catalog/logo-01-200x50.png"
                                    alt="Logo"
                                />
                            </Link>
                        </div>

                        {/* Responsive Search Box */}
                        <div onClick={() => setMobileSearchModel(true)} className="flex-1 min-w-[80px] max-w-[800px] bg-[#ececec] rounded-full py-2 px-3 flex items-center gap-2">
                            <FiSearch className="text-gray-600 text-[clamp(16px,1.5vw,20px)]" />
                            <p className="font-[500] text-gray-600 text-[clamp(14px,1.2vw,16px)] truncate">
                                Search
                            </p>
                        </div>

                        <button className='menu-icons-mobile' onClick={() => setMobileCategory(prev => !prev)}>
                            <TfiMenuAlt className="text-2xl" />
                        </button>
                        <div className="relative user-dropdown-container">
                            <button
                                ref={buttonRef}
                                className="menu-icons-mobile"
                                onClick={() => setShowMobileUser(prev => !prev)}
                            >
                                <FaRegUser className="text-2xl" />
                            </button>
                        </div>
                        <button>
                            <FiShoppingCart className="text-2xl" />
                        </button>
                    </div>
                </div>
            </header>

            <SignInModal
                isOpen={showSignInModal}
                onClose={() => setShowSignInModal(false)}
            />

            {showMobileCategory && (
                <MobileCategories />
            )}
            {showMobileUser && (
                <div ref={popupRef}>
                    <MobileUserPopup />
                </div>
            )}
            <MobileHeaderSearchModel isOpen={showMobileSearchModel} onClose={() => setMobileSearchModel(false)} />
        </>
    )
}

export default Header;
