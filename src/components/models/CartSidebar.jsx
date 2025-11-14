"use client";
import { useCart } from "@/context/CartContext"; // we’ll make this next
import { motion } from "framer-motion";

export default function CartSidebar() {
  const { isCartOpen, closeCart } = useCart();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isCartOpen ? "0%" : "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 h-full w-[15%] xl:w-[12%] 2xl:w-[14%] bg-white shadow-xl z-[999998989899898998] border-l border-gray-200"
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={closeCart} className="text-gray-500 hover:text-black">
          ✕
        </button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
        {/* cart items go here */}
        <p>Your cart items will appear here.</p>
      </div>
    </motion.div>
  );
}
