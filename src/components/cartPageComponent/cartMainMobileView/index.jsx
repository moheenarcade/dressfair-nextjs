"use client";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GoCircle } from "react-icons/go";
import { IoIosArrowDown, IoMdCheckmark } from "react-icons/io";
import { AnimatePresence } from "framer-motion";
import { BsCheckCircleFill, BsExclamationCircle, BsThreeDots } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import CartExploreProducts from "../cartExploreProducts";
import ProductListingMobile from "@/components/homePageMobile/productListingMobile";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa6";
import MobileCartListBottomModal from "@/components/models/MobileCartListBottomModal";
import { CgClose } from "react-icons/cg";
// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CartMainMobileView = () => {
    const { isCartOpen, closeCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);
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

        <>
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
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsModalOpen(true);
                        }}
                        className="w-[35%] flex flex-col">
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

            {/* Modal */}
            <MobileCartListBottomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="relative w-full">
                    <div className="border-b border-b-gray-200 pb-3 px-3">
                        <p className="text-center text-lg text-[#000] font-[600]">Price details</p>
                        <p className="text-[#0a8800] flex justify-center items-center gap-1 text-[14px] text-center font-[500]">
                            <IoMdCheckmark className="text-xl" /> Temu purchase protection
                        </p>
                    </div>
                    <div className="absolute right-2 top-0">
                        <button onClick={() => setIsModalOpen(false)}>
                            <CgClose className="text-xl" />
                        </button>
                    </div>
                    <div className="px-3 flex items-center py-2 gap-2">
                        <p className="text-[#000] text-[16px] font-[500]">Cart (14)</p>
                        <p className="text-[#fb7701] text-[12px]">1 item may sell out today!</p>
                    </div>

                    <div className="cart-item-slider">
                        <div className="cart-item-slider py-3">
                            <Swiper
                                spaceBetween={5}
                                slidesPerView={3}
                                centeredSlides={false}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                            
                                modules={[Autoplay, Pagination, Navigation]}
                                className="cartSwiper"
                            >
                                {cartItems.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="single-item shadow-lg p-1 border border-gray-200 rounded-sm">
                                            <Image width={100} height={100} src={item.img} alt="product banner" />
                                            <div className="flex items-center justify-between">
                                                <p className="text-[14px] font-[600]"><span className="text-[11px]">Rs.</span>3129 <span>5x</span></p>
                                                <p className="text-[#8d8c8c] text-[13px] font-semibold relative w-fit"><span className="absolute top-[9px] bg-[#FB7701] w-full h-[2px]"></span>5232</p>
                                            </div>
                                            <p className="text-[#fb7701] text-[13px] font-[500]">
                                                47% OFF
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <div className="px-3">
                        <div className="cart-product-list py-3 border-y border-gray-200">
                            <div className="flex items-center justify-between">
                                <p className="text-black text-[15px] font-[500]">Item(s) total:</p>
                                <p className="text-[#777777] text-[15px] line-through font-[500]">Rs. 154,992</p>
                            </div>
                            <div className="flex items-center justify-between pt-1">
                                <p className="text-black text-[15px] font-[500]">Item(s) discount:</p>
                                <p className="text-[#fb7701] text-[15px] font-[500]">-Rs. 96,635</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <p className="text-black text-[15px] font-[600]">Total:</p>
                            <p className="text-[#0a8800] text-[17px] font-[600]">
                                <span className="bg-[#fb7701] py-[2px] px-1 rounded-sm text-[12px] text-white mr-1">
                                    62% OFF
                                </span>
                                <span className="text-[14px]">Rs.</span>
                                154,992
                            </p>
                        </div>
                        <div className="border border-[#0a8800] rounded-md p-2 mt-1 relative">
                            <svg className="box-1bqlm right-2 -top-3 absolute" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 8" width="1em" height="1em" fill="#0a8800" alt="bubble_arrow" style={{ stroke: ' rgb(10, 136, 0)' }}><path d="M0.913721065,9 C2.56449311,9 4.14234104,8.31987419 5.27579998,7.1197412 L10.5459737,1.53955726 C11.3043971,0.73652071 12.5702105,0.700354613 13.3732471,1.45877803 C13.4009372,1.48492978 13.4278746,1.51186717 13.4540263,1.53955726 L18.7242,7.1197412 C19.857659,8.31987419 21.4355069,9 23.0862789,9"></path></svg>
                            <p className="text-[15px] text-[#0a8800] font-[600]">
                                <Image className="inline mr-1" width={15} height={15} src="/dollor-coverd.avif" alt="price coverd" />
                                Your order is covered by our Price Match Guarantee. Proceed to checkout now!
                            </p>
                        </div>
                        <p className="text-[13px] text-[#777676] font-[500] pt-1 pb-22">
                            Please refer to your final actual payment amount.
                        </p>
                    </div>

                    <div className="fixed left-0 right-0 w-full bottom-0 py-3 px-1 md:px-6 z-[99999] bg-white block lg:hidden">
                        <div className="flex items-center gap-1 justify-between rounded-full py-2 px-3 bg-white" style={{ boxShadow: "0 .04rem .1rem 0 rgba(0, 0, 0, .16)" }}>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-[35%] flex flex-col">
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
            </MobileCartListBottomModal>
        </>
    )
}

export default CartMainMobileView;
