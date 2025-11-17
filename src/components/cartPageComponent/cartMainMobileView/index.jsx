"use client";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GoCircle } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence } from "framer-motion";
import { BsCheckCircleFill, BsExclamationCircle, BsThreeDots } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import CartExploreProducts from "../cartExploreProducts";
import ProductListingMobile from "@/components/homePageMobile/productListingMobile";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa6";


const CartMainMobileView = () => {
    const { isCartOpen, closeCart } = useCart();
    const [openQty, setOpenQty] = useState(false);
    const [selectedQty, setSelectedQty] = useState(1);
    const qtyOptions = [0, 1, 2, 3, 4, 5];

    const [cartItems, setCartItems] = useState([
        { id: 1, img: "/deals-product5.avif", price: 13233, selected: true, qty: 1, openQty: false },
        { id: 2, img: "/deals-product5.avif", price: 13233, selected: true, qty: 1, openQty: false },
        { id: 3, img: "/deals-product5.avif", price: 13233, selected: true, qty: 1, openQty: false },
        { id: 4, img: "/deals-product5.avif", price: 13233, selected: true, qty: 1, openQty: false },
        { id: 5, img: "/deals-product5.avif", price: 13233, selected: true, qty: 1, openQty: false },
    ]);

    const allSelected = cartItems.length > 0 && cartItems.every(item => item.selected);


    useEffect(() => {
        if (cartItems.length === 0) {
            closeCart();
        }
    }, [cartItems, closeCart]);

    const toggleQtyDropdown = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, openQty: !item.openQty } : { ...item, openQty: false }
            )
        );
    };

    const toggleSelectAll = () => {
        const updated = cartItems.map((item) => ({
            ...item,
            selected: !allSelected,
        }));
        setCartItems(updated);
    };

    const toggleSingle = (id) => {
        const updated = cartItems.map((item) =>
            item.id === id ? { ...item, selected: !item.selected } : item
        );
        setCartItems(updated);
    };

    const updateQty = (id, qty) => {
        setCartItems(prev =>
            prev
                .map(item => (item.id === id ? { ...item, qty, openQty: false } : item))
                .filter(item => item.qty > 0)
        );
    };
    return (

        <div className=''>
            <div className="w-full xl:w-[65%]">
                <div className="cart-list pt-2 px-3">
                    <div className="flex items-center z-[99999] justify-between py-2 sticky top-0 bg-white">
                        <div
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={toggleSelectAll}
                        >
                            {allSelected ? (
                                <BsCheckCircleFill className="text-2xl text-[#222] border border-white" />
                            ) : (
                                <GoCircle className="text-2xl text-black" />
                            )}

                            <p className="text-[16px] text-[#222] font-[600]">
                                All
                            </p>
                        </div>
                        <p className="text-[#000] text-[18px] font-bold">
                            Cart <span className="font-normal"> ({cartItems.filter(item => item.selected).length})</span>
                        </p>
                        <button>
                            <BsThreeDots className="text-2xl" />
                        </button>
                    </div>
                    <div className="free-shipping flex items-center justify-between border border-gray-200 py-2 px-2 rounded-md">
                        <p className='flex gap-1 items-center text-[13px]  text-[#000000] font-semibold'><GiCheckMark className='text-[#088703] text-lg' />
                            Free shipping special for you</p>
                        <p className='text-[12px] text-[#000000]'>
                            Limited-time
                        </p>
                    </div>

                    <div className="cart-items pt-4 flex flex-col gap-5 pb-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="single-item flex gap-1 items-center">
                                <button
                                    className=" "
                                    onClick={() => toggleSingle(item.id)}
                                >
                                    {item.selected ? (
                                        <BsCheckCircleFill className="text-lg text-[#222]" />
                                    ) : (
                                        <GoCircle className="text-lg text-black" />
                                    )}
                                </button>
                                <div className="flex gap-4">
                                    <div className="border border-gray-100 overflow-hidden rounded-md">
                                        <Image
                                            className="w-[280px] h-auto"
                                            width={100}
                                            height={100}
                                            src={item.img}
                                            alt="product banner"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-between">
                                        <div className="flex gap-2 items-start">
                                            <p className="line-clamp-1 text-[#666] text-[12px] font-[500]">24-Hour Long-Lasting Body & Deodorant Spray - Non-Sticky, Refreshing Aroma, Elegant Design for Men & Women, Perfect for Dates, Outdoor Activities, Ideal Gift, Daily Use</p>
                                            <button>
                                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" aria-hidden="true" fill="#888"><path d="M603.4 96c47.7 0 86.9 36.4 91.3 82.9l0.5 8.8-0.1 75.1 168.9 0c24.7 0 44.8 20.1 44.8 44.8 0 22.7-16.9 41.4-38.7 44.4l-6.1 0.4-20.5 0-46.2 436.2c-5.5 52.1-47.2 92.3-98.5 96.9l-9.7 0.4-354.2 0c-52.4 0-96.8-37.2-106.7-87.7l-1.5-9.6-46.2-436.2-20.5 0c-24.7 0-44.8-20.1-44.8-44.8 0-22.7 16.9-41.4 38.7-44.3l6.1-0.5 169 0 0-75.1c0-47.7 36.4-86.9 82.9-91.3l8.8-0.4 182.7 0z m149.9 256.4l-482.7 0 45.2 426.7c0.9 8.4 7.1 15 15 16.8l4.1 0.4 354.2 0c8.4 0 15.7-5.4 18.2-13.1l0.9-4.1 45.1-426.7z m-149.9-166.8l-182.7 0c-0.8 0-1.5 0.4-1.8 1.1l-0.3 1 0 75.1 186.9 0 0.1-75.1c0-0.8-0.4-1.5-1.1-1.8l-1.1-0.3z"></path></svg>
                                            </button>
                                        </div>
                                        <div className="flex justify-between w-full items-center border-b border-b-gray-200">
                                            <div className="text-center text-[#222222] text-[16px] font-semibold py-2 flex items-center gap-1">
                                                <span className="text-[12px]">Rs.</span>{item.price}
                                                <p className="text-[#757575] text-[11px] font-normal relative"><span className="absolute top-[8px] bg-[#FB7701] w-full h-[2px]"></span>27452</p>
                                                <p className="text-[#fb7701] border border-[#fb7701] px-1 p-px rounded-sm text-[10px]">
                                                    -47%
                                                </p>
                                            </div>
                                            <div className="select-qty-option relative w-[50px]">
                                                <div
                                                    className="border border-[#aaa] font-semibold rounded-sm px-2 py-px text-sm cursor-pointer flex justify-between items-center bg-white"
                                                    onClick={() => toggleQtyDropdown(item.id)}
                                                >
                                                    <span>{item.qty}</span>
                                                    <span
                                                        className={`transform transition-transform duration-300 ${item.openQty ? "rotate-180" : ""
                                                            }`}
                                                    >
                                                        <IoIosArrowDown />
                                                    </span>
                                                </div>

                                                <AnimatePresence>
                                                    {item.openQty && (
                                                        <motion.ul
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="absolute top-full left-0 w-full bg-white border border-gray-100 mt-px rounded-md shadow-md overflow-hidden z-50"
                                                        >
                                                            {qtyOptions.map((qty) => (
                                                                <motion.li
                                                                    key={qty}
                                                                    whileHover={{ backgroundColor: "#f3f3f3" }}
                                                                    className="px-3 py-2 text-sm cursor-pointer font-semibold"
                                                                    onClick={() => updateQty(item.id, qty)}
                                                                >
                                                                    {qty}
                                                                </motion.li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-[#f6f6f6] py-2 px-3">
                    <p className="text-[#777777] text-[13px] font-[500]">
                        <BsExclamationCircle className="inline mr-1" />
                        Item availability and pricing are not guaranteed until payment is final.
                    </p>
                </div>

                <div className="bg-white py-3 border-b-gray-200 border-b-3">
                    <ul className="flex gap-1">
                        <li className="flex flex-col gap-1 justify-start items-center text-center">
                            <Image width={20} height={20} src="/safepaymentgreenicon.webp" alt="safe payment" />
                            <p className="text-[#777] font-[500] text-[13px] leading-[15px]">Safe Payment Options</p>
                        </li>
                        <li className="flex flex-col gap-1 justify-start items-center text-center">
                            <Image width={20} height={20} src="/safepaymentgreenicon.webp" alt="safe payment" />
                            <p className="text-[#777] font-[500] text-[13px] leading-[15px]">Secure privacy</p>
                        </li>
                        <li className="flex flex-col gap-1 justify-start items-center text-center">
                            <Image width={20} height={20} src="/safepaymentgreenicon.webp" alt="safe payment" />
                            <p className="text-[#777] font-[500] text-[13px] leading-[15px]">Temu Purchase Protection</p>
                        </li>
                        <li className="flex flex-col gap-1 justify-start items-center text-center">
                            <Image width={20} height={20} src="/safepaymentgreenicon.webp" alt="safe payment" />
                            <p className="text-[#777] font-[500] text-[13px] leading-[15px]">Delivery guarantee</p>
                        </li>
                        <li className="flex flex-col gap-1 justify-start items-center text-center">
                            <Image width={20} height={20} src="/safepaymentgreenicon.webp" alt="safe payment" />
                            <p className="text-[#777] font-[500] text-[13px] leading-[15px]">Temu's Tree Planting Program</p>
                        </li>
                    </ul>
                </div>
                <ProductListingMobile />
            </div>

            <div className="fixed left-0 right-0 w-full bottom-0 py-3 px-1 md:px-6 z-[99999] bg-white block lg:hidden">
                <div className="flex items-center gap-1 justify-between rounded-full py-2 px-3 bg-white" style={{ boxShadow: "0 .04rem .1rem 0 rgba(0, 0, 0, .16)" }}>
                    <button className="w-[35%] flex flex-col">
                        <span className="text-[#000000] text-[16px] md:text-xl font-[500] line-through">
                            154,992
                        </span>
                        <div className="flex items-center">
                        <span className="text-[14px] font-[600] text-[#FB7701]">
                            Rs. <span className="text-[18px] md:text-2xl">57,357</span>
                        </span>
                        <FaChevronUp className="text-md" />
                        </div>
                    </button>
                    <Link href="#" className="w-[65%]">
                    <button className="bg-[#fb5d01] w-full hover:bg-[#fb7701] hover:scale-[1.03] text-white font-semibold flex flex-col justify-center text-[13px] py-1 px-5 lg:px-6 rounded-full transition-all duration-300 ease-in-out">
                        <span className="text-[15px] md:text-xl">Last day for 62.9% off</span>
                        <span className="text-[12px] md:text-md">Checkout (14) | 10 : 46  : 37</span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartMainMobileView;
