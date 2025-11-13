"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function LayoutContent({ children }) {
  const { isCartOpen } = useCart();

  return (
    <motion.div
      animate={{
        width: isCartOpen ? "calc(100% - 130px)" : "100%", // sidebar width
      }}
      transition={{ type: "spring", stiffness: 250, damping: 30 }}
      className="relative min-h-screen bg-white origin-right overflow-hidden"
      style={{
        transformOrigin: "right center", // shrink only from right
      }}
    >
      <Header />
      {children}
      <Footer />
    </motion.div>
  );
}
