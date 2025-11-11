"use client";
import React, { useRef, useState } from "react";
import { LiaFilterSolid } from "react-icons/lia";
import { useOutsideClick } from "./useOutsideClick";
import SidebarFilterModal from "../components/models/SidebarFilterModal";

const filters = [
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
const sizeOptions = ["S", "M", "L", "XL", "XXL", "Free Size"];
const typeOptions = ["Casual", "Formal", "Party", "Evening", "Summer"];
const styleOptions = ["Modern", "Classic", "Vintage", "Bohemian", "Minimalist"];
const materialOptions = ["Cotton", "Polyester", "Silk", "Wool", "Linen", "Denim"];
const closureOptions = ["Zipper", "Buttons", "Hook & Eye", "Velcro", "Elastic"];
const dressLengthOptions = ["Mini", "Knee Length", "Midi", "Maxi", "Ankle"];
const neckStyleOptions = ["Round", "V-Neck", "Collar", "Boat Neck", "Square"];
const sleeveLengthOptions = ["Sleeveless", "Short", "3/4", "Long"];
const patternOptions = ["Solid", "Striped", "Floral", "Plaid", "Polka Dot", "Print"];
const occasionOptions = ["Casual", "Formal", "Wedding", "Party", "Office", "Beach"];
const seasonOptions = ["Spring", "Summer", "Fall", "Winter", "All Season"];

const CategoryFilters = () => {
    const dropdownRef = useRef(null);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        "Sort by: Relevance": "Relevance",
        Color: [],
        Size: [],
        Type: [],
        Style: [],
        Material: [],
        "Closure Type": [],
        "Dress Length": [],
        "Neck Style": [],
        "Sleeve Length": [],
        Pattern: [],
        Occasion: [],
        Season: [],
    });

    const [buttonPositions, setButtonPositions] = useState({});

    useOutsideClick(dropdownRef, () => setOpenDropdown(null));

    const handleSelect = (label, value) => {
        if (label !== "Sort by: Relevance") {
            setSelectedFilters((prev) => {
                const alreadySelected = prev[label].includes(value);
                const newValues = alreadySelected
                    ? prev[label].filter((v) => v !== value)
                    : [...prev[label], value];
                return { ...prev, [label]: newValues };
            });
        } else {
            setSelectedFilters((prev) => ({ ...prev, [label]: value }));
            setOpenDropdown(null);
        }
    };

    // New function to handle filter changes from sidebar
    const handleSidebarFilterChange = (label, value) => {
        handleSelect(label, value);
    };

    // Function to reset all filters
    const handleResetAll = () => {
        setSelectedFilters({
            "Sort by: Relevance": "Relevance",
            Color: [],
            Size: [],
            Type: [],
            Style: [],
            Material: [],
            "Closure Type": [],
            "Dress Length": [],
            "Neck Style": [],
            "Sleeve Length": [],
            Pattern: [],
            Occasion: [],
            Season: [],
        });
    };

    const getLabelText = (label) => {
        if (label !== "Sort by: Relevance" && selectedFilters[label]?.length >= 0) {
            return selectedFilters[label].length === 0
                ? label
                : `${label} (${selectedFilters[label].length})`;
        }
        if (label === "Sort by: Relevance") {
            return `Sort by: ${selectedFilters[label]}`;
        }
        return label;
    };

    const renderDropdownContent = (label) => {
        const optionsMap = {
            "Sort by: Relevance": sortOptions,
            Color: colorOptions,
            Size: sizeOptions,
            Type: typeOptions,
            Style: styleOptions,
            Material: materialOptions,
            "Closure Type": closureOptions,
            "Dress Length": dressLengthOptions,
            "Neck Style": neckStyleOptions,
            "Sleeve Length": sleeveLengthOptions,
            Pattern: patternOptions,
            Occasion: occasionOptions,
            Season: seasonOptions,
        };

        const options = optionsMap[label] || [];

        if (label === "Sort by: Relevance") {
            return (
                <ul className="flex flex-col text-sm text-gray-700">
                    {options.map((option, idx) => (
                        <li
                            key={idx}
                            onClick={() => handleSelect(label, option)}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded text-[14px]"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            );
        }

        return (
            <>
                <ul className={`flex flex-wrap gap-3 border-b border-gray-200 pb-4 ${label === "Color" ? "" : "px-4"}`}>
                    {options.map((option, idx) => (
                        <li
                            key={idx}
                            onClick={() => handleSelect(label, option)}
                            className={`cursor-pointer rounded text-[14px] flex flex-col items-center gap-2 ${label === "Color" ? "px-3 py-2" : ""}`}
                        >
                            {label === "Color" ? (
                                <>
                                    <div
                                        className={`w-14 h-14 rounded-full border-[2px] p-[2px] transition-all duration-150 ${selectedFilters[label].includes(option)
                                            ? "border-black scale-110"
                                            : "border-gray-300"
                                            }`}
                                    >
                                        <div
                                            className="w-full h-full rounded-full shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]"
                                            style={{ backgroundColor: option.toLowerCase() }}
                                        ></div>
                                    </div>
                                    <span className="text-[14px]">{option}</span>
                                </>
                            ) : (
                                <div
                                    className={`px-4 py-2 rounded-full border-[2px] transition-all duration-150 ${selectedFilters[label].includes(option)
                                        ? "border-black bg-black text-white scale-105"
                                        : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                                        } flex items-center justify-center`}
                                >
                                    <span className="font-semibold text-[14px]">{option}</span>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="pt-4 flex gap-3 justify-end px-6">
                    <button
                        onClick={() => setSelectedFilters((prev) => ({ ...prev, [label]: [] }))}
                        className="py-2 px-6 border border-[#949494] text-black font-semibold rounded-full hover:border-black transition-colors"
                    >
                        Reset
                    </button>
                    <button
                        onClick={() => setOpenDropdown(null)}
                        className="py-2 px-6 rounded-full bg-[#fb7701] text-white font-semibold hover:bg-[#e56a00] transition-colors"
                    >
                        Show {options.length * 10}+ Results
                    </button>
                </div>
            </>
        );
    };

    const isFullWidthDropdown = (label) => {
        return !["Sort by: Relevance"].includes(label);
    };

    const handleDropdownToggle = (label, event) => {
        if (openDropdown === label) {
            setOpenDropdown(null);
        } else {
            if (event && event.currentTarget) {
                const button = event.currentTarget;
                const scrollContainer = document.getElementById("filter-scroll");
                if (scrollContainer) {
                    const buttonRect = button.getBoundingClientRect();
                    const containerRect = scrollContainer.getBoundingClientRect();
                    const relativeLeft = buttonRect.left - containerRect.left;
                    const buttonCenter = relativeLeft + buttonRect.width / 2;
                    const percentage = (buttonCenter / containerRect.width) * 100;

                    setButtonPositions(prev => ({
                        ...prev,
                        [label]: Math.max(10, Math.min(90, percentage))
                    }));
                }
            }
            setOpenDropdown(label);
        }
    };

    return (
        <>
            <div ref={dropdownRef} className="relative w-full">
                <div id="filter-scroll" className="flex items-center gap-2 px-2 relative w-full">
                    {/* <div className="flex items-center w-full gap-2">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="flex items-center h-[40px] cursor-pointer gap-1 rounded-full py-2 px-3 bg-[#f6f6f6] text-[#555] text-[14px] hover:bg-[#eaeaea] hover:text-black transition-all"
                        >
                            <LiaFilterSolid size={18} /> Filters
                        </button>
                        <ul className="flex gap-2 items-center w-max">
                            {filters.map((label, i) => (
                                <li key={i} className="relative">
                                    <button
                                        onClick={(e) => handleDropdownToggle(label, e)}
                                        className="flex whitespace-nowrap items-center h-[40px] cursor-pointer gap-1 rounded-full py-2 px-3 bg-[#f6f6f6] text-[#555] text-[14px] hover:bg-[#eaeaea] hover:text-black transition-all"
                                    >
                                        {getLabelText(label)}
                                    </button>

                                    {openDropdown === label && !isFullWidthDropdown(label) && (
                                        <div className="absolute left-1/2 top-[110%] z-[9999] bg-white border border-gray-200 shadow-lg rounded-lg p-2 w-44 transform -translate-x-1/2">
                                            <div className="absolute left-1/2 top-[-10px] transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-gray-200"></div>
                                            {renderDropdownContent(label)}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    <div className="relative w-full">
                        {/* Left Scroll Button */}
                        <button
                            onClick={() => {
                                const scrollContainer = document.getElementById("filter-scroll-container");
                                scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
                            }}
                            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 items-center justify-center hover:bg-gray-100 transition"
                        >
                            &#8592;
                        </button>

                        {/* Scrollable Filter Section */}
                        <div
                            id="filter-scroll-container"
                            className="flex items-center gap-2 overflow-x-auto scrollbar-hide scroll-smooth px-2"
                        >
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="flex items-center h-[40px] cursor-pointer gap-1 rounded-full py-2 px-3 bg-[#f6f6f6] text-[#555] text-[14px] hover:bg-[#eaeaea] hover:text-black transition-all flex-shrink-0"
                            >
                                <LiaFilterSolid size={18} /> Filters
                            </button>
                            <ul className="flex gap-2 items-center w-max flex-nowrap">
                                {filters.map((label, i) => (
                                    <li key={i} className="relative flex-shrink-0">
                                        <button
                                            onClick={(e) => handleDropdownToggle(label, e)}
                                            className="flex whitespace-nowrap items-center h-[40px] cursor-pointer gap-1 rounded-full py-2 px-3 bg-[#f6f6f6] text-[#555] text-[14px] hover:bg-[#eaeaea] hover:text-black transition-all"
                                        >
                                            {getLabelText(label)}
                                        </button>
                                        {openDropdown === label && !isFullWidthDropdown(label) && (
                                            <div className="absolute left-1/2 top-[110%] z-[9999] bg-white border border-gray-200 shadow-lg rounded-lg p-2 w-44 transform -translate-x-1/2">
                                                <div className="absolute left-1/2 top-[-10px] transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-gray-200"></div>
                                                {renderDropdownContent(label)}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            onClick={() => {
                                const scrollContainer = document.getElementById("filter-scroll-container");
                                scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
                            }}
                            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 items-center justify-center hover:bg-gray-100 transition"
                        >
                            &#8594;
                        </button>
                    </div>

                    {/* Full-width Dropdowns */}
                    {openDropdown && isFullWidthDropdown(openDropdown) && (
                        <div className="absolute left-0 right-0 top-[44px] z-[9999] w-full">
                            <div className="relative w-full mx-auto rounded-lg bg-white p-4 shadow-xl border border-gray-200">
                                {/* Dynamic Caret */}
                                <div
                                    className="absolute top-[-10px] transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-gray-200"
                                    style={{ left: `${buttonPositions[openDropdown] || 50}%` }}
                                ></div>
                                {renderDropdownContent(openDropdown)}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Sidebar Filter Modal */}
            <SidebarFilterModal
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                selectedFilters={selectedFilters}
                onFilterChange={handleSidebarFilterChange}
                onResetAll={handleResetAll}
            />
        </>
    );
};

export default CategoryFilters;