import {RiHomeSmileLine} from "react-icons/ri";
import {LuShieldCheck} from "react-icons/lu";
import {FiSave} from "react-icons/fi";
import convertToPersian from "../../utils/convertToPersianNumber";

function ProductStickyInfoBox({product}) {
  return (
    <div className="relative hidden mr-10 Laptop-L:block">
        <div className="sticky top-[230px]">
            <div className="mt-5 mb-2 p-4 border border-[#e0e0e6] bg-[#f1f2f4] w-[300px] rounded-lg">
                <div className="flex pb-3 mb-3 border-b border-b-[#e0e0e6]">
                    {/* Product Image */}
                    <div className="shrink-0">
                        <img className="w-[80px] h-[80px] mix-blend-multiply" src={product.productImage[0].image} alt="" />
                    </div>

                    {/* Product desctiption and color */}
                    <div className="flex flex-col gap-4 mr-5">
                        <p className="text-xs leading-6 line-clamp-2">{product.description}</p>

                        <div className="flex items-center">
                            <div className="rounded-full bg-[#c99212] w-[14px] h-[14px]"></div>
                            <p className="mr-2 text-xs">طلایی</p>
                        </div>
                    </div>
                                
                </div>

                {/* seller Name & Icon */}
                <div className="flex items-center mb-2">
                    <div className="flex items-center ml-2">
                        <RiHomeSmileLine className="w-[18px] h-[18px] text-[#3f4064]"/>
                    </div>
                    <p className="text-xs text-[#3f4064]">روژینو موبایل</p>
                </div>

                {/* Warranty*/}
                <div className="flex items-center mb-2">
                    <div className="flex items-center ml-2">
                        <LuShieldCheck className="w-[18px] h-[18px] text-[#3f4064]"/>
                    </div>
                    <p className="text-xs text-[#3f4064]">گارانتی ۱۸ ماهه هما تلکام</p>
                </div>

                {/* Available in the digikala warehouse */}
                <div className="flex items-center mb-2">
                    <div className="flex items-center ml-2">
                        <FiSave className="w-[18px] h-[18px] text-[#9e9fb1]"/>
                    </div>
                    <p className="text-xs text-[#3f4064]">
                                    موجود در انبار فروشنده  
                    </p>
                </div>

                {/* Price */}
                <div className="flex items-center my-2">
                    <div className="flex items-center gap-1 mr-auto">
                        <div className="text-[19px] font-Yekan-bold text-[#23254e]">
                        {convertToPersian(product.price)}
                        </div>
                        <span className="text-[10px] font-Yekan-bold text-[#23254e]">تومان</span>
                    </div>
                </div>

                {/* Add to Cart button */}
                <div className="flex items-center justify-center px-4 py-2 border rounded-lg bg-[#ef4056] border-[#ef4056] text-xs text-white font-Yekan-bold hover:cursor-pointer">
                افزودن به سبد
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductStickyInfoBox