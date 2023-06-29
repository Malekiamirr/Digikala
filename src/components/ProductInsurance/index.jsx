import {MdKeyboardArrowLeft} from "react-icons/md";

function ProductInsurance() {
  return (
    <div className="my-2">
        {/* Header Text */}
        <p className="mb-3 font-Yekan-bold">بیمه</p>
                            
        {/* Box */}
        <div className="rounded-lg border border-[#e0e0e6]">
            <div className="p-2 space-y-2">
                <p className="text-xs font-Yekan-bold text-[#3f4064]">بیمه تجهیزات دیجیتال - بیمه پارسیان</p>
                <div className="flex items-center justify-between mt-1 text-sm font-Yekan-bold text-[#3f4064]">
                    <span>۲,۰۵۴,۶۵۰ تومان</span>
                    <div className="flex items-center">
                        <p className="text-xs font-Yekan-bold text-[#19bfd3]">جزییات</p>
                        <MdKeyboardArrowLeft className="w-[18px] h-[18px] text-[#19bfd3]"/>
                    </div>
                </div>
            </div>
        </div>          
    </div>
  )
}

export default ProductInsurance