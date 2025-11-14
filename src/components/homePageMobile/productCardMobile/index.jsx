import React, { useState } from 'react';
import Image from 'next/image';
import { BiCartAdd } from "react-icons/bi";
import { RiStarFill } from 'react-icons/ri';
import Link from 'next/link';
import MobileAddToCartBottomModal from '@/components/models/MobileAddToCartBottomModal';
import { CgClose } from 'react-icons/cg';
import ProductColorSize from '@/components/productDetailPageComponent/productColorSize';


const ProductCardMobile = ({ products = [] }) => {
        const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2">
                {products.map((product, index) => (
                    <Link key={index} href={`/p/${product.id}`}>
                        <div

                            className="single-product group transition-all duration-500 ease-in-out cursor-pointer hover:bg-white rounded-md hover:shadow-[0px_4px_24px_0px_rgba(0,0,0,0.1)]"
                        >
                            <div className="product-banner w-full aspect-square">
                                <Image
                                    className="w-full h-full object-cover rounded-sm"
                                    src={product.image}
                                    alt={product.title}
                                    width={300}
                                    height={300}
                                />
                            </div>

                            <div className="product-content">
                                <p className="line-clamp-1 text-[#555] text-[13px] font-medium py-1">
                                    {product.title}
                                </p>
                                <div className="deals-rating flex items-center gap-1">
                                    <div className="flex items-center text-[13px] gap-1">
                                        {[...Array(5)].map((_, index) => (
                                            <RiStarFill
                                                key={index}
                                                className={index < Math.floor(product.rating) ? 'text-black' : 'text-gray-300'}
                                            />
                                        ))} <span className='text-[#777] font-semibold'>2323</span>
                                    </div>
                                    <p className='text-[13px]'>{product.reviewCount}</p>
                                </div>
                                <div className="flex justify-between items-center pb-2">
                                    <p className="text-black flex-wrap font-medium text-[13px] flex items-center gap-1">
                                        Rs.<span className="text-[15px] font-bold">{product.price}</span>
                                        {product.sold && (
                                            <span className="text-[11px] text-[#555] font-medium flex items-center">
                                                <svg xmlns='http://www.w3.org/2000/svg' className='text-[#fb7701]' viewBox='0 0 1024 1024' style={{ width: '1em', height: '1em' }} fill='#fb7701' overflow='hidden'><path d='M433.9 8.5C580.2 94.2 679 249.2 682.6 427c29.6-29.3 51.3-66.4 61.6-107.8l.6-3.1c86.9 67.1 142.7 170.9 142.7 287.4 0 6.9-.2 13.8-.6 20.7.4 6.4.6 12.8.6 19.3 0 202.3-168.1 366.3-375.5 366.3s-375.5-164-375.5-366.3c0-101.3 42.1-192.9 110.3-259.3 88.6-101.4 152.8-223.8 183.4-358.4l3.7-17.3z' fill='#fb7701' /></svg> {product.sold}+sold
                                            </span>
                                        )}
                                    </p>

                                    <button
                                        onClick={(e) => {
                                            e.preventDefault(); // prevent link navigation
                                            e.stopPropagation(); // stop the click from bubbling up
                                            setIsModalOpen(true);
                                        }}
                                        className="border hover:scale-[1.05] transition-all duration-500 ease-in-out border-black rounded-full px-2 py-[1px] flex justify-center items-center">
                                        <BiCartAdd className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>


            {/* Modal */}
            <MobileAddToCartBottomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="">
                    <div className="flex justify-between pb-3">
                        <div className="flex gap-2">
                            <Image className="w-18 h-18 rounded-sm" width={100} height={100} src='/deals-product3.avif' alt="product " />
                            <div className="pr-4">
                                <p className="line-clamp-1 text-[14px] text-[#666] font-semibold">New Fashion Men's Four Seasons Comfy Casual Running Shoes</p>
                                <div className="flex gap-1 items-center pt-1">
                                    <p className="line-through text-[#222] text-[14px] font-semibold">44,127</p>
                                    <p className="text-[#222] text-[14px] font-semibold">Rs. <span className="text-xl">12,252</span></p>
                                </div>
                                <p className="text-[#fb7701] border border-[#fb7701] rounded-sm px-2 font-semibold w-fit text-[14px]">72% OFF limited time</p>
                            </div>
                        </div>
                        <div className="">
                            <button onClick={() => setIsModalOpen(false)}>
                                <CgClose className="text-xl" />
                            </button>
                        </div>
                    </div>
                    <ProductColorSize />
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="mt-4 bg-[#fb5d01] hover:bg-[#fb7701] text-white py-3 px-6 rounded-full w-full font-semibold"
                    >
                        Confirm Add to Cart
                    </button>
                </div>
            </MobileAddToCartBottomModal>
        </>
    )
}

export default ProductCardMobile;
