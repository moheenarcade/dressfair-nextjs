"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";
import { FaFreeCodeCamp, FaStar } from "react-icons/fa6";
import PromotionalContent from "../../../../public/productdetail-promotional-content.avif";
import { LuCheck } from "react-icons/lu";
import PriceSection from "../../../../public/priceicons.avif";
import { HiQuestionMarkCircle } from "react-icons/hi";
import ProductMainSlider from "@/components/productDetailPageComponent/productMainSlider";
import ProductColorSize from "@/components/productDetailPageComponent/productColorSize";
import { FaShippingFast } from "react-icons/fa";
import { RiCashLine } from "react-icons/ri";
import ExploreInterestProducts from "@/components/productDetailPageComponent/exploreInterestProducts";

const ProductDetailPage = () => {

    return (
        <div className="product-detail-main relative container mx-auto px-2 2xl:px-22 pt-3 pb-12">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-[52%] flex flex-col">
                    <div className="breadcrupms pb-3">
                        <ul className="flex items-center gap-1 text-[#777] text-sm">
                            <Link href="/"><li>Home</li></Link>
                            <GoChevronRight />
                            <Link href="#"><li>Mens clothing</li></Link>
                            <GoChevronRight />
                            <li className="text-black">Mens winter clothing</li>
                        </ul>
                    </div>
                    <ProductMainSlider />
                </div>

                <div className="w-full lg:w-[44%] pt-8 self-start lg:sticky top-0">

                    <div className="flex items-start gap-4">
                        <h1 className="text-[16px] text-[#222] font-[500] mb-2">
                            Men's Winter Casual PU Leather Jacket, Stand Collar, Zippered Sleeves, Pockets, Classic Fashion Style Coat
                        </h1>
                        <button className="hover:scale-[1.04] transition-all duration-300 ease-in-out">
                            <svg className="product-share" alt="" aria-label="" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="1.4rem" height="1.4rem" aria-hidden="true"><path d="M320 380.6c16 0 29 13 29 29 0 16-13 29-29 29l-42.7 0c-31.1 0-56.3 25.2-56.3 56.3l0 298.7c0 31.1 25.2 56.3 56.3 56.3l469.4 0c31.1 0 56.3-25.2 56.3-56.3l0-298.7c0-31.1-25.2-56.3-56.3-56.3l-42.7 0c-16 0-29-13-29-29 0-16 13-29 29-29l42.7 0c63.2 0 114.3 51.2 114.3 114.3l0 298.7c0 63.2-51.2 114.3-114.3 114.3l-469.4 0c-63.2 0-114.3-51.2-114.3-114.3l0-298.7c0-63.2 51.2-114.3 114.3-114.3l42.7 0z m213.7-251.8l120.7 120.7c11.3 11.3 11.3 29.7 0 41-11.3 11.3-29.7 11.3-41 0l-72.4-72.3 0 340.7c0 16-13 29-29 29-16 0-29-13-29-29l0-338.4-70 70c-10.5 10.5-26.9 11.3-38.2 2.4l-2.8-2.4c-11.3-11.3-11.3-29.7 0-41l120.7-120.7c11.3-11.3 29.7-11.3 41 0z"></path></svg>
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <p className="text-[#757575] text-[15px]">2.8K+ sold</p>
                            <div className="bg-black h-3 w-px"></div>
                            <p className="flex items-center gap-1">
                                Sold by.
                                <Image className="w-4 h-4 rounded-full" src={PromotionalContent} alt="promotional content" />
                                <GoChevronRight />
                            </p>
                        </div>

                        <div className="product-rating flex items-center gap-1">
                            <p>
                                4.7
                            </p>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>

                    <div className="prices-sec flex items-center flex-wrap gap-2 pt-3 pb-4">
                        <p className="text-[#000000] text-[20px] font-semibold relative">
                            <span className="absolute top-[15px] bg-[#FB7701] w-full h-[2.5px]"></span>
                            27452
                        </p>
                        <div className="flex items-end text-[#FB7701]">
                            <Image className="w-4 h-4" src={PriceSection} alt="promotional content" />
                            <p className="text-[20px] font-semibold leading-[20px]">Rs. <span className="text-[28px]">13,661</span></p>
                        </div>
                        <p className="text-[#FB7701] text-[15px] font-bold border border-[#FB7701] rounded-sm px-1 leading-[18px]">
                            50% OFF limited time
                        </p>
                        <p className="text-[#FB7701] flex items-center gap-2 text-[15px] font-bold border border-[#FB7701] rounded-sm px-1 leading-[18px]">
                            ALMOST SOLD OUT <HiQuestionMarkCircle />
                        </p>
                    </div>
                    <div className="promotional-sec mb-4 flex items-center gap-6 bg-[#eb0101] rounded-md overflow-hidden">
                        <Image className="w-30 h-10" src={PromotionalContent} alt="promotional content" />
                        <div className="flex items-center gap-3">
                            <p className="text-white flex items-center gap-1 font-semibold"><LuCheck /> Free shipping</p>
                            <div className="bg-white h-4 w-px"></div>
                            <p className="text-white flex items-center gap-1 font-semibold"><LuCheck /> Rs.280 Credit for delay</p>
                        </div>
                    </div>
                    <ProductColorSize />

                    <div className="pt-6 flex items-center gap-4">
                        <button className="bg-[#fb5d01] hover:bg-[#fb7701] hover:scale-[1.03] text-white font-semibold text-lg py-3 px-6 rounded-full w-full transition-all duration-300 ease-in-out">
                            Add to cart!
                        </button>
                        <button className="bg-[#fb5d01] main-button-buy hover:bg-[#fb7701] hover:scale-[1.03] text-white font-semibold text-lg py-3 px-6 rounded-full w-full transition-all duration-300 ease-in-out">
                            Buy now
                        </button>
                    </div>

                    <div className="shipping-info pt-8">
                        <div className=" pb-3 border-b border-b-gray-300">
                            <p className="text-[16px] flex items-center gap-2 text-[#0A8800] font-semibold">
                            <FaShippingFast className="text-xl" />
                                Fast Shipping</p>
                            <p className="text-gray-600 text-[14px]">Normally delivered in 2-3 days</p>
                        </div>
                        <div className="py-3 border-b border-b-gray-300">
                            <p className="text-[16px] flex items-center gap-2 text-[#0A8800] font-semibold">
                            <FaFreeCodeCamp className="text-xl"/>
                                Free Shipping</p>
                            <p className="text-gray-600 text-[14px]">Free Shipping Over Shopping 150 AED.</p>
                        </div>
                        <div className="py-3 border-b border-b-gray-300">
                            <p className="text-[16px] flex items-center gap-2 text-[#0A8800] font-semibold">
                            <RiCashLine />
                                Cash On Delivery</p>
                            <p className="text-gray-600 text-[14px]">Pay when you receive your order</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="explore-interest pt-18">
                <h3 className="text-[#222] font-bold text-[18px] px-2">Explore your interests</h3>
                <ExploreInterestProducts />
            </div>
        </div>
    );
};

export default ProductDetailPage;
