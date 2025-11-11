"use client";
import React, { useRef, useState } from "react";
import { LiaFilterSolid } from "react-icons/lia";
import { useOutsideClick } from "./useOutsideClick";

const filters = [
    "Filters",
    "Sort by: Relevance",
    "Color",
    "Size",
    "Type",
    "Style",
    "Material",
    "Closure Type",
    "Dress Length",
    "Neck Style",
    "Sleeve Length",
    "Pattern",
    "Occasion",
    "Season",
];

const sortOptions = [
    "Relevance",
    "Price: Low to High",
    "Price: High to Low",
    "Newest Arrivals",
    "Best Rated",
];

const colorOptions = ["Red", "Blue", "Green", "Yellow", "Black", "White"];

const CategoryFilters = () => {
    const dropdownRef = useRef(null);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState({
        "Sort by: Relevance": "Relevance",
        Color: [],
    });

    useOutsideClick(dropdownRef, () => setOpenDropdown(null));

    const handleSelect = (label, value) => {
        if (label === "Color") {
            setSelectedFilters((prev) => {
                const alreadySelected = prev.Color.includes(value);
                const newColors = alreadySelected
                    ? prev.Color.filter((c) => c !== value)
                    : [...prev.Color, value];
                return { ...prev, Color: newColors };
            });
            return;
        }

        setSelectedFilters((prev) => ({ ...prev, [label]: value }));
        setOpenDropdown(null);
    };

    const getLabelText = (label) => {
        if (label === "Color") {
            return selectedFilters.Color.length === 0
                ? "Color"
                : `Color (${selectedFilters.Color.length})`;
        }
        if (label === "Sort by: Relevance") {
            return `Sort by: ${selectedFilters[label]}`;
        }
        return selectedFilters[label] || label;
    };

    return (
        <div ref={dropdownRef} className="relative w-full">
            <div id="filter-scroll" className="flex items-center gap-2 px-2 relative w-full">
                <ul className="flex gap-2 items-center w-max">
                    {filters.map((label, i) => (
                        <li key={i} className="relative">
                            <button
                                onClick={() => setOpenDropdown(openDropdown === label ? null : label)}
                                className="flex whitespace-nowrap items-center h-[40px] cursor-pointer gap-1 rounded-full py-2 px-3 bg-[#f6f6f6] text-[#555] text-[14px]"
                            >
                                {i === 0 && <LiaFilterSolid />}
                                {getLabelText(label)}
                            </button>
                            {openDropdown === label && label === "Sort by: Relevance" && (
                                <div className="absolute left-0 top-[110%] z-[9999] bg-white border border-gray-200 shadow-lg rounded-lg p-2 w-44">
                                    <div className="absolute left-1/3 top-[-10px] transform -translate-x-1/2 w-0 h-0 
                      border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-gray-200"></div>

                                    <ul className="flex flex-col text-sm text-gray-700">
                                        {sortOptions.map((option, idx) => (
                                            <li
                                                key={idx}
                                                onClick={() => handleSelect(label, option)}
                                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded text-[14px]"
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {openDropdown === "Color" && (
                    <div className="absolute left-0 right-0 top-[50px] z-[9999] w-full">
                        <div className="relative w-full mx-auto rounded-lg bg-white p-4 shadow-xl border border-gray-200">
                            <div className="absolute left-1/5 top-[-10px] transform -translate-x-1/2 w-0 h-0 
                      border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-gray-200"></div>

                            {/* Color Options */}
                            <ul className="flex flex-wrap gap-3 border-b border-gray-200 pb-4">
                                {colorOptions.map((color, idx) => (
                                    <li
                                        key={idx}
                        
                                        onClick={() => handleSelect("Color", color)}
                                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded text-[14px] flex flex-col items-center gap-2"
                                    >
                                        <div
                                            className={`w-14 h-14 rounded-full border-[2px] p-[2px] transition-all duration-150 ${selectedFilters.Color.includes(color) ? "border-black scale-110" : "border-gray-300"
                                                }`}
                                        >
                                            <div
                                                className="w-full h-full rounded-full shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]"
                                                style={{ backgroundColor: color.toLowerCase() }}
                                            ></div>
                                        </div>
                                        <span className="text-[14px]">{color}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4 flex gap-3 justify-end px-6">
                                <button
                                    onClick={() => setSelectedFilters((prev) => ({ ...prev, Color: [] }))}
                                    className="py-2 px-6 border border-[#949494] text-black font-semibold rounded-full hover:border-black"
                                >
                                    Reset
                                </button>
                                <button className="py-2 px-6 rounded-full bg-[#fb7701] text-white font-semibold">
                                    Show 100+ Result
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryFilters;
