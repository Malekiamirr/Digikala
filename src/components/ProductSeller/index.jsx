import {GrHomeRounded} from "react-icons/gr";
import {TiTick} from "react-icons/ti";
import {LuShieldCheck} from "react-icons/lu";
import {FiSave} from "react-icons/fi";
import {TbTruckDelivery} from "react-icons/tb";
import { FiInfo} from "react-icons/fi";
import {MdKeyboardArrowLeft, MdOutlineDiscount} from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";

import convertToPersian from "../../utils/convertToPersianNumber";

function ProductSeller({price}) {
  return (
    <div className="border-t-[#f1f2f4] Laptop-L:mr-3 Laptop-L:border-t-0">
        <div className="mb-3 rounded-lg bg-white product-box-background Laptop-L:border Laptop-L:border-[#e0e0e6] h-min">
            {/* Header */}
            <div className="px-5 py-4 Laptop-L:px-6">
                <h3 className="text-sm Laptop-L:text-base font-Yekan-bold text-[#080a38]">
                    فروشنده 
                </h3>
            </div>
                    
            <div className="flex px-5 py-3 Laptop-L:px-6">
                <div className="relative ml-4">
                    <GrHomeRounded className="w-5 h-5 text-[#3f4064]"/>
                    <TiTick className="h-4 w-4 absolute top-3 left-0 bg-[#00a049] rounded-full text-white border-2 border-white "/>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center mb-1">
                        <p className="text-[13px] Laptop-L:text-[15px] text-[#3f4064] ml-2">روژینو موبایل</p>
                        <p className=" text-[#00a049] text-[10px] Laptop-L:text-[11px] font-Yekan-bold px-2">منتخب</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-[11px] Laptop-L:text-xs text-[#767790]"><span className="text-[#b1b64d] font-Yekan-bold ml-1">۷۳٪</span> رضایت از کالا</p>
                        <span className="w-px h-3 bg-[#e0e0e6] mx-2"></span>
                        <p className="text-xs text-[#767790]">عملکرد <span className="text-[10px] Laptop-L:text-[11px] text-[#00a049] font-Yekan-bold">عالی</span></p>
                    </div>
                </div>
            </div>

            <div className="px-5 Laptop-L:px-6">
                <div className="py-3 border-t border-t-[#e0e0e6] flex items-center">
                    <LuShieldCheck className="w-6 h-6 text-[#3f4064] ml-4" />
                    <p className="text-xs font-Yekan-bold text-[#3f4064]">گارانتی ۱۸ ماهه هما تلکام</p>
                </div>
            </div>

            <div className="px-5 Laptop-L:px-6">
                <div className="flex flex-col py-3 border-t border-t-[#e0e0e6]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FiSave className="w-6 h-6 text-[#3f4064] ml-4" />
                            <p className="text-[15px] font-Yekan-bold text-[#3f4064]">موجود در انبار فروشنده</p>
                        </div>
                        <MdKeyboardArrowLeft className="w-6 h-6 text-[#9e9fb1]"/>
                    </div>

                    <div className="flex items-start pt-6 ml-3">
                        <div className="relative flex flex-col items-center">
                            <span className="w-[2px] h-3 bg-[#e0e0e6] absolute bottom-[15px]"></span>
                            <RxDotFilled className="w-5 h-5 text-[#9e9fb1]"/>
                        </div>

                        <div className="flex items-center mr-4">
                            <TbTruckDelivery className="w-5 h-5 scale-x-[-1] mx-1 text-[#3f4064]"/>
                            <p className="text-xs text-[#767790]">ارسال دیجی‌کالا از ۱ روز کاری دیگر</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 Laptop-L:px-6">
                <div className="flex items-center py-3 border-t border-b border-[#e0e0e6]">
                    <div className="ml-4">
                        <img className="w-6 h-6" src={"https://www.digikala.com/statics/img/svg/club-point.svg"} alt="club-point photo" />
                    </div>
                    <p className="text-xs font-Yekan-bold text-[#3f4064]">۱۵۰ امتیاز دیجی‌کلاب</p>
                    <div className="relative mr-2 hover:cursor-pointer group">
                        <FiInfo className="w-4 h-4 text-[#9e9fb1]"/>
                        <div className="hidden px-3 py-3 m-4 Laptop-L:group-hover:block absolute w-max min-w-max left-[50%] -translate-x-[50%] bg-[#23254e] text-white text-xs leading-6 rounded">
                                بعد از پایان مهلت مرجوعی، برای دریافت امتیاز به صفحه<br/> ماموریت‌های کلابی سر بزنید.
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full px-5 py-3 Laptop-L:relative Laptop-L:shadow-none Laptop-L:w-auto bg-white shadow-[0px_-2px_3px_0px_#00000024] product-box-background Laptop-L:px-6">
                <div className="py-4">
                    <div className="grid items-end grid-cols-2 justify-items-end Laptop-L:block">
                        <div className="flex flex-col justify-between gap-6 Laptop-L:gap-0 Laptop-L:flex-row Laptop-L:items-center">
                            <div className="flex flex-row-reverse items-center Laptop-L:flex-row">
                                <FiInfo className="text-[#9e9fb1] w-4 h-4"/>
                                <p className="ml-2 Laptop-L:ml-0 Laptop-L:mr-2 text-[11px] text-[#767790]">قیمت فروشنده</p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-[19px] font-Yekan-bold text-[#23254e] ml-1">{convertToPersian(price)}</span>
                                <span className="text-[10px] font-Yekan-bold">تومان</span>
                            </div>
                        </div>

                        <button className="py-3 px-4 border border-[#ef4056] bg-[#ef4056] font-Yekan-bold text-white text-xs w-full rounded-lg mt-2 order-first">
                            افزودن به سبد
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col-reverse Laptop-L:flex-col">
            {/* Pricing process */}
            <div className="flex items-center justify-between px-5 py-3 border-y-8 Laptop-L:border border-[#f1f2f4] Laptop-L:rounded">
                <div className="flex items-center">
                    <FiInfo className="w-[18px] h-[18px] text-[#81858b] ml-2" />
                    <p className="text-xs text-[#5a5c7a]">فرآیند قیمت‌گذاری و نظارت بر قیمت</p>
                </div>

                <MdKeyboardArrowLeft className="w-6 h-6 text-[#9e9fb1]"/>
            </div>

            {/* Better Price? */}
            <div className="flex items-center justify-end px-5 pb-6 mt-4 hover:cursor-pointer Laptop-L:pb-0 Laptop-L:px-0">
                <p className="text-[11px] text-[#9e9fb1]">قیمت بهتری سراغ دارید؟</p>
                <MdOutlineDiscount className="scale-x-[-1] text-[#9e9fb1] mr-2 w-4 h-4"/>
            </div> 
        </div>
        
    </div>
  )
}

export default ProductSeller