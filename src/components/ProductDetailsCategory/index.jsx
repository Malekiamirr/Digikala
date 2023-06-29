import React from 'react'

function ProductDetailsCategory() {
  return (
    <div className="sticky top-0 z-50 mt-5 bg-white">
        <div>
            <ul className="flex items-center border-b border-b-[#e0e0e6] text-[#767790] text-xs font-Yekan-bold">
                <li className="relative px-4 py-3 hover:cursor-pointer text-[#ef4056]">
                            معرفی
                    <div className="absolute left-[50%] -translate-x-[50%] w-3/4 bottom-0 bg-[#ef4056] rounded-t-md h-1"></div>
                </li>
                <li className="relative px-4 py-3 hover:cursor-pointer">
                            بررسی تخصصی
                    <div className="absolute left-[50%] -translate-x-[50%] w-3/4 bottom-0 bg-[#ef4056] rounded-t-md h-1 hidden"></div>
                </li>
                <li className="relative px-4 py-3 hover:cursor-pointer">
                            مشخصات
                    <div className="absolute left-[50%] -translate-x-[50%] w-3/4 bottom-0 bg-[#ef4056] rounded-t-md h-1 hidden"></div>
                </li>
                <li className="relative px-4 py-3 hover:cursor-pointer">
                            دیدگاه‌ها
                    <div className="absolute left-[50%] -translate-x-[50%] w-3/4 bottom-0 bg-[#ef4056] rounded-t-md h-1 hidden"></div>
                </li>
                <li className="relative px-4 py-3 hover:cursor-pointer">
                            پرسش‌ها
                    <div className="absolute left-[50%] -translate-x-[50%] w-3/4 bottom-0 bg-[#ef4056] rounded-t-md h-1 hidden"></div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ProductDetailsCategory