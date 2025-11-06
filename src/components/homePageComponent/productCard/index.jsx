import React from 'react';
import Image from 'next/image';
import { BiCartAdd } from "react-icons/bi";

const ProductCard = ({ products = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
      {products.map((product, index) => (
        <div
          key={index}
          className="single-product p-2 group transition-all duration-500 ease-in-out cursor-pointer hover:bg-white rounded-md hover:shadow-[0px_4px_24px_0px_rgba(0,0,0,0.1)]"
        >
          <div className="product-banner w-full h-[250px]">
            <Image
              className="w-full h-full object-cover"
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
            />
          </div>

          <div className="product-content">
            <p className="line-clamp-2 text-[#555] text-[13px] font-medium py-1">
              {product.title}
            </p>

            <div className="flex justify-between items-center">
              <p className="text-black font-medium text-[15px] flex items-center gap-1">
                Rs.{" "}
                <span className="text-lg font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="line-through text-[13px] text-[#555] font-medium">
                    {product.oldPrice}
                  </span>
                )}
              </p>

              <button className="border-[1.2px] hover:scale-[1.05] transition-all duration-500 ease-in-out border-black rounded-full px-3 py-[2px] flex justify-center items-center">
                <BiCartAdd className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
