import {GrHomeRounded} from 'react-icons/gr';
import { TiTick } from 'react-icons/ti';
import { FiTruck } from 'react-icons/fi';
import { BiCheckShield } from 'react-icons/bi';
import convertToPersianNumber from "../../utils/convertToPersianNumber";

function ProductAnotherSellers({price}) {
  return (
    <div className="pb-5 mt-4 border-b-4 border-[#f1f2f4] hidden Laptop-L:block">
      {/* Header */}
      <div className="py-3">
          <p className="font-Yekan-bold text-[#080a38] ">فروشندگان این کالا</p>
          <div className="mt-2 w-[70px] h-[2px] bg-[#ef394e]"></div>
      </div>
      
      {/* box 1 */}
      <div className="p-6 min-w-[240px]">
        <div className="flex justify-between">
            <div className="flex items-center">
                <div className="relative">
                <GrHomeRounded className="w-6 h-6 text-[#3f4064]"/>
                <TiTick className="h-4 w-4 absolute -bottom-2 -left-[0.3rem] bg-[#00a049] rounded-full text-white border-2 border-white "/>
                </div>
                <div className="flex flex-col mr-4">
                    <div className="flex items-center mb-3">
                        <p className="text-[15px] text-[#3f4064] ml-2">روژینا موبایل</p>
                        <p className="text-[11px] font-Yekan-bold text-[#00a049] px-2">منتخب</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-xs text-[#767790] pl-2">
                            <span className="text-[#00a049] text-xs font-Yekan-bold ml-1">۹۳.۱۶٪</span>
                              رضایت از کالا
                        </p>
                        <span className="bg-[#E0E0E6] w-px h-3"></span>
                        <p className="text-xs text-[#767790] pr-2">
                              عملکرد
                            <span className="text-[#00a049] text-xs font-Yekan-bold mr-1">عالی </span>
                        </p>
                    </div>
                      
                </div>
            </div>

            <div className="flex items-center">
                <FiTruck className="scale-x-[-1] w-[18px] h-[18px] text-[#e6123d]"/>
                <p className="mr-2 text-[#767790] text-xs">ارسال دیجی‌کالا از ۱ روز کاری دیگر</p>
            </div>

            <div className="flex items-center">
                <BiCheckShield className="w-5 h-5 text-[#3f4064] mb-1"/>
                <p className="mr-2 text-[#3f4064] text-[15px]">گارانتی ۱۸ ماهه هما تلکام</p>
            </div>

            <div className="flex items-center">
                <p className="text-[19px] font-Yekan-bold text-[#23254e] ml-5">{convertToPersianNumber(parseFloat(price)+1200000)} <span className="text-[11px]">تومان</span></p>
                <button className="px-5 py-3 text-white bg-[#ef4056] rounded-lg text-xs font-Yekan-bold">افزودن به سبد</button>
            </div>  
        </div>
      </div>

      {/* box 2 */}
      <div className="p-6 min-w-[240px] bg-[#f7f7f8] rounded-xl">
        <div className="flex justify-between">
            <div className="flex items-center">
                <div className="relative">
                <GrHomeRounded className="w-6 h-6 text-[#3f4064]"/>
                <TiTick className="h-4 w-4 absolute -bottom-2 -left-[0.3rem] bg-[#00a049] rounded-full text-white border-2 border-white "/>
                </div>
                <div className="flex flex-col mr-4">
                    <div className="flex items-center mb-3">
                        <p className="text-[15px] text-[#3f4064] ml-2">روژینا موبایل</p>
                        <p className="text-[11px] font-Yekan-bold text-[#00a049] px-2">منتخب</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-xs text-[#767790] pl-2">
                            <span className="text-[#00a049] text-xs font-Yekan-bold ml-1">۹۳.۱۶٪</span>
                              رضایت از کالا
                        </p>
                        <span className="bg-[#E0E0E6] w-px h-3"></span>
                        <p className="text-xs text-[#767790] pr-2">
                              عملکرد
                            <span className="text-[#00a049] text-xs font-Yekan-bold mr-1">عالی </span>
                        </p>
                    </div>
                      
                </div>
            </div>

            <div className="flex items-center">
                <FiTruck className="scale-x-[-1] w-[18px] h-[18px] text-[#e6123d]"/>
                <p className="mr-2 text-[#767790] text-xs">ارسال دیجی‌کالا از ۱ روز کاری دیگر</p>
            </div>

            <div className="flex items-center">
                <BiCheckShield className="w-5 h-5 text-[#3f4064] mb-1"/>
                <p className="mr-2 text-[#3f4064] text-[15px]">گارانتی ۱۸ ماهه هما تلکام</p>
            </div>

            <div className="flex items-center">
                <p className="text-[19px] font-Yekan-bold text-[#23254e] ml-5">{convertToPersianNumber(parseFloat(price)+1200000)} <span className="text-[11px]">تومان</span></p>
                <button className="px-5 py-3 text-white bg-[#ef4056] rounded-lg text-xs font-Yekan-bold">افزودن به سبد</button>
            </div>  
        </div>
      </div>
    </div>
  )
}

export default ProductAnotherSellers