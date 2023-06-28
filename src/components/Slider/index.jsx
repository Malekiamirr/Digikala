import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { ChevronLeftIcon } from "../../assets/imgs/icons/Icons";

function Slider() {
  return (
    <>
      <Swiper
        dir='rtl'
        slidesPerView={4}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide className='mr-10 min-w-max flex justify-center items-center gap-2 border border-[#E0E0E6] px-2 py-2 rounded-full text-[14px] font-Yekan-bold'>
          <span className='text-[#3F4064]'>کاور کیس ایرپاد</span>
          <ChevronLeftIcon className='w-3 h-3 stroke-2' />
        </SwiperSlide>
        <SwiperSlide className='min-w-max flex justify-center items-center gap-2 border border-[#E0E0E6] px-2 py-2 rounded-full text-[14px] font-Yekan-bold'>
          <span className='text-[#3F4064]'>شلوارک ورزشی مردانه</span>
          <ChevronLeftIcon className='w-3 h-3 stroke-2' />
        </SwiperSlide>
        <SwiperSlide className='min-w-max flex justify-center items-center gap-2 border border-[#E0E0E6] px-2 py-2 rounded-full text-[14px] font-Yekan-bold'>
          <span className='text-[#3F4064]'>poco x4 5g </span>
          <ChevronLeftIcon className='w-3 h-3 stroke-2' />
        </SwiperSlide>
        <SwiperSlide className='min-w-max flex justify-center items-center gap-2 border border-[#E0E0E6] px-2 py-2 rounded-full text-[14px] font-Yekan-bold'>
          <span className='text-[#3F4064]'>اسباب بازی جنگی</span>
          <ChevronLeftIcon className='w-3 h-3 stroke-2' />
        </SwiperSlide>
        <SwiperSlide className='min-w-max flex justify-center items-center gap-2 border border-[#E0E0E6] px-2 py-2 rounded-full text-[14px] font-Yekan-bold'>
          <span className='text-[#3F4064]'>کاور کیس ایرپاد</span>
          <ChevronLeftIcon className='w-3 h-3 stroke-2' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
