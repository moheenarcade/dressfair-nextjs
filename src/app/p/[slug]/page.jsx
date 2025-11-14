"use client";
import { useState } from "react";
import ProductDetailMain from "@/components/productDetailPageComponent/productDetailMain";

const ProductDetailPage = () => {

    return (
        <>
            <div className='container mx-auto hidden xl:block xl:px-2 2xl:px-22 py-4 xl:py-6'>
                <ProductDetailMain />
            </div>

            <div className='block xl:hidden px-2 lg:px-16 py-4 xl:py-6'>
                <ProductDetailMain />
            </div>
        </>
    );
};

export default ProductDetailPage;
