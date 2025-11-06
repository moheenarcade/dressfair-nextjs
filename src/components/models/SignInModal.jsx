"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import LoginCar from "../../../public/LOGINCAR.avif";
import Image from "next/image";
import FreeReturnimg from "../../../public/loginapidadjustment.avif";

const SignInModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-lg">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
                onClick={onClose}
              >
                <RxCross2 size={22} />
              </button>

              {/* Header */}
              <h2 className="text-xl font-semibold text-center">Sign in / Register</h2>
              <p className="text-center text-[#0a8800] text-sm mt-1 flex items-center justify-center gap-1">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" class="_3HY1FB1F" aria-hidden="true"><path d="M512 30.7c138.6 0 250.9 112.3 250.9 250.9l0 61.4 35.8 0c59.5 0 108.2 46.1 112.4 104.6l0.3 8.1 0 419.8c0 62.2-50.4 112.6-112.7 112.7l-573.4 0c-62.2 0-112.6-50.4-112.7-112.7l0-419.8c0-62.2 50.4-112.6 112.7-112.7l35.8 0 0-61.4c0-134.8 106.3-244.8 239.7-250.6l11.2-0.3z m0 506.9c-22.6 0-41 18.3-41 41l0 174c0 22.6 18.3 41 41 41 22.6 0 41-18.3 41-41l0-174c0-22.6-18.3-41-41-41z m0-414.7c-87.7 0-158.7 71.1-158.7 158.7l0 56.3 317.4 0 0-56.3c0-84.6-66.2-153.8-149.7-158.5l-9-0.2z"></path></svg>    
                </span> All data is safeguarded
              </p>

              {/* Benefits */}
              <div className="flex justify-around py-8">
                <div className="flex flex-col items-center">
                  <span className="text-2xl">
                    <Image className="w-12 h-12" src={LoginCar} alt="free shipping"/>
                  </span>
                  <p className="text-md font-medium">Free shipping</p>
                  <p className="text-xs">On all orders</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl">
                  <Image className="w-12 h-12" src={FreeReturnimg} alt="free shipping"/>
                  </span>
                  <p className="text-md font-medium">Free returns</p>
                  <p className="text-xs ">Up to 90 days</p>
                </div>
              </div>

                <label htmlFor="email" className="font-semibold">
                    Email or phone number
                </label>
              {/* Input */}
              <input
                type="text"
                placeholder="Email or phone number"
                className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-[#E67E22] mt-2"
              />

              {/* Continue Button */}
              <button className="bg-orange-500 text-white rounded-full py-2 font-semibold w-full mt-4 hover:bg-orange-600 transition">
                Continue
              </button>

              {/* Trouble signing in */}
              <p className="text-center text-sm text-gray-500 mt-3 cursor-pointer hover:text-orange-500">
                Trouble signing in?
              </p>

              {/* Divider */}
              <div className="flex items-center my-4">
                <hr className="flex-1 border-gray-300" />
                <span className="mx-2 text-gray-500 text-sm">Or continue with other ways</span>
                <hr className="flex-1 border-gray-300" />
              </div>

              {/* Social login */}
              <div className="flex justify-center gap-4 mb-4">
                <button className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition">
                  <FcGoogle size={24} />
                </button>
                <button className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition">
                  <FaFacebookF size={24} className="text-blue-600" />
                </button>
                <button className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition">
                  <AiFillApple size={24} />
                </button>
              </div>

              {/* Footer */}
              <p className="text-center text-xs text-gray-500">
                By continuing, you agree to our{" "}
                <span className="text-blue-600 cursor-pointer">Terms of Use</span> and{" "}
                <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SignInModal;
