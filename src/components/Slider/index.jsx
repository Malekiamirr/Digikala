import { useRef, useState } from 'react';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { ChevronLeftIcon } from '../../assets/imgs/icons/Icons';

function Slider() {
  return (
    <div className="flex gap-3 overflow-x-auto box-container">
      <div className="mr-10 min-w-max hover:cursor-pointer flex justify-center items-center gap-2 border border-[#E0E0E6] px-2 py-2 rounded-full text-[14px] font-Yekan-bold">
        <span className="text-[#3F4064]">کاور کیس ایرپاد</span>
        <ChevronLeftIcon className="w-3 h-3 stroke-2" />
      </div>
      <div className="min-w-max hover:cursor-pointer flex justify-center items-center gap-2 border border-[#E0E0E6] px-2 py-2 rounded-full text-[14px] font-Yekan-bold">
        <span className="text-[#3F4064]">شلوارک ورزشی مردانه</span>
        <ChevronLeftIcon className="w-3 h-3 stroke-2" />
      </div>
      <div className="min-w-max hover:cursor-pointer flex justify-center items-center gap-2 border border-[#E0E0E6] px-2 py-2 rounded-full text-[14px] font-Yekan-bold">
        <span className="text-[#3F4064]">poco x4 5g </span>
        <ChevronLeftIcon className="w-3 h-3 stroke-2" />
      </div>
      <div className="min-w-max hover:cursor-pointer flex justify-center items-center gap-2 border border-[#E0E0E6] px-2 py-2 rounded-full text-[14px] font-Yekan-bold">
        <span className="text-[#3F4064]">اسباب بازی جنگی</span>
        <ChevronLeftIcon className="w-3 h-3 stroke-2" />
      </div>
      <div className="min-w-max hover:cursor-pointer flex justify-center items-center gap-2 border border-[#E0E0E6] px-2 py-2 rounded-full text-[14px] font-Yekan-bold">
        <span className="text-[#3F4064]">کاور کیس ایرپاد</span>
        <ChevronLeftIcon className="w-3 h-3 stroke-2" />
      </div>
    </div>
  );
}

export default Slider;
