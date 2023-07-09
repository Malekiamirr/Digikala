import {FiHeart} from "react-icons/fi";
import {IoShareSocialSharp} from "react-icons/io5";
import {TbBellRinging} from "react-icons/tb";
import {AiOutlineLineChart} from "react-icons/ai";
import {MdCompare} from "react-icons/md";
import {HiListBullet} from "react-icons/hi2";
import { useState } from "react";
import {PriceChart} from "../index";
function ProductIconsList() {

  const [showPriceChart, setShowPriceChart] = useState(false);
  const handleShowPriceChart = () => {
    setShowPriceChart(!showPriceChart);
    console.log(showPriceChart)
  }


  return (
    <div className="flex gap-4 Laptop-L:flex-col">
        <div className="relative group hover:cursor-pointer z-[10]">
            <FiHeart className="text-[#3f4064] w-6 h-6 ml-4"/>
            <div className="hidden Laptop-L:group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">اضافه به لیست علاقه‌مندی</div>
        </div>
        <div className="relative group hover:cursor-pointer z-[10]">
            <IoShareSocialSharp className="text-[#3f4064] w-6 h-6 ml-4"/>
            <div className="hidden Laptop-L:group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">اشتراک گذاری</div>
        </div>
        <div className="relative group hover:cursor-pointer z-[10]">
            <TbBellRinging className="text-[#3f4064] w-6 h-6 ml-4"/>
            <div className="hidden Laptop-L:group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">اطلاع‌رسانی شگفت‌انگیز</div>
        </div>
        <div onClick={handleShowPriceChart} className="relative group hover:cursor-pointer z-[10]">
            <AiOutlineLineChart className="text-[#3f4064] w-6 h-6 ml-4"/>
            <div className="hidden Laptop-L:group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">نمودار قیمت</div>
        </div>
        <div className="relative group hover:cursor-pointer z-[10]">
            <MdCompare className="text-[#3f4064] w-6 h-6 ml-4"/>
            <div className="hidden Laptop-L:group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">مقایسه</div>
        </div>
        <div className="relative group hover:cursor-pointer z-[10]">
            <HiListBullet className="text-[#3f4064] w-6 h-6 ml-4"/>
            <div className="hidden Laptop-L:group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">اضافه به لیست</div>
        </div>

        <div onClick={handleShowPriceChart} className={`absolute top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-25 ${!showPriceChart && "hidden"}`}>
            <PriceChart onClick={handleShowPriceChart}/>
        </div>

    </div>
    
  )
}

export default ProductIconsList