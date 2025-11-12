"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FaStar } from "react-icons/fa6";

const ProductDetailPage = () => {
    const { slug } = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const productImages = [
        "/deals-product3.avif",
        "/deals-product3.avif",
        "/deals-product3.avif",
        "/deals-product3.avif",
        "/deals-product3.avif",
        "/deals-product3.avif",
        "/deals-product3.avif",
    ];

    return (
        <div className="product-detail-main container mx-auto px-2 2xl:px-22 pt-3 pb-12">
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
                    <div className="flex">
                        {/* Thumbnail Gallery (Left Side) */}
                        <div className="w-[15%] mr-4">
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                direction="vertical"
                                spaceBetween={10}
                                slidesPerView={7}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="product-thumbs-swiper h-[570px]"
                            >
                                {productImages.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={img}
                                            alt={`thumb-${index}`}
                                            width={80}
                                            height={100}
                                            className="cursor-pointer object-cover w-full h-full rounded-lg border hover:border-gray-400 transition-all"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Main Image Swiper */}
                        <div className="w-[80%]">
                            <Swiper
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="product-main-swiper rounded-xl overflow-hidden"
                            >
                                {productImages.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={img}
                                            alt={`main-${index}`}
                                            width={600}
                                            height={700}
                                            className="object-contain w-full h-auto rounded-xl"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[44%] pt-6">
                    <div className="flex items-start gap-4">
                        <h1 className="text-[16px] text-[#222] font-semibold mb-4">
                            Men's Winter Casual PU Leather Jacket, Stand Collar, Zippered Sleeves, Pockets, Classic Fashion Style Coat
                        </h1>
                        <button className="hover:scale-[1.04] transition-all duration-300 ease-in-out">
                            <svg className="product-share" alt="" aria-label="" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="1.4rem" height="1.4rem" aria-hidden="true"><path d="M320 380.6c16 0 29 13 29 29 0 16-13 29-29 29l-42.7 0c-31.1 0-56.3 25.2-56.3 56.3l0 298.7c0 31.1 25.2 56.3 56.3 56.3l469.4 0c31.1 0 56.3-25.2 56.3-56.3l0-298.7c0-31.1-25.2-56.3-56.3-56.3l-42.7 0c-16 0-29-13-29-29 0-16 13-29 29-29l42.7 0c63.2 0 114.3 51.2 114.3 114.3l0 298.7c0 63.2-51.2 114.3-114.3 114.3l-469.4 0c-63.2 0-114.3-51.2-114.3-114.3l0-298.7c0-63.2 51.2-114.3 114.3-114.3l42.7 0z m213.7-251.8l120.7 120.7c11.3 11.3 11.3 29.7 0 41-11.3 11.3-29.7 11.3-41 0l-72.4-72.3 0 340.7c0 16-13 29-29 29-16 0-29-13-29-29l0-338.4-70 70c-10.5 10.5-26.9 11.3-38.2 2.4l-2.8-2.4c-11.3-11.3-11.3-29.7 0-41l120.7-120.7c11.3-11.3 29.7-11.3 41 0z"></path></svg>
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <p>2.8K+ sold</p>

                            <p>
                                Sold by
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
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
