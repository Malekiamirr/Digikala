import {RiStarFill} from "react-icons/ri";
import generateRandomRating from "../../utils/generateRandomRating";
import convertToPersianNumber from "../../utils/convertToPersianNumber";

function PhoneCard({product, index}) {
  return (
    <div className={`${index % 5 !== 0 ? 'min-[1676px]:border-l' : ""} ${index % 4 !== 0 ? "min-[1440px]:border-l" : ""} ${index % 3 !== 0 ? "min-[1280px]:border-l" : ""} ${index % 2 !== 0 ? "min-[640px]:border-l" : ""} border-b min-[640px]:px-2 min-[640px]:py-3 transition-all duration-75 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:cursor-pointer`}>
        <div className="min-[640px]:hidden"><br/></div>
        <div className="flex items-start min-[640px]:block">
            <div className="mb-1 flex min-[640px]:items-center min-[640px]:justify-center w-max min-w-max">
                <img src={product.thumbnail} alt={product.category} className="w-[118px] h-[118px] min-[640px]:w-60 min-[640px]:h-60"/>
            </div>
            <div>
                <div className="px-2 text-[#81858b] bg-[#F2F2F2] rounded-full flex items-center gap-2 max-w-fit mb-1">
                    <img className="w-[18px] h-[18px]" src={"https://dkstatics-public.digikala.com/digikala-static/40103386d101974d18b40cee05e8d62823a657fa_1678547065.png"} alt="truck image" />
                    <span className="text-[11px] font-Yekan-bold text-[]">ارسال رایگان</span>
                </div>
                <div>
                    <p className="text-xs leading-[1.7rem] font-Yekan-bold text-[#3f4064] line-clamp-2">{product.name}</p>
                </div>
                <div className="flex justify-end gap-2 pt-2">
                    <p className="text-xs font-Yekan-bold text-[#3f4064]">{convertToPersianNumber(generateRandomRating())}</p>
                    <RiStarFill className="h-4 w-4 text-[#f9bc00]"/>
                </div>
                    <div className={`flex items-center ${product.offer ? "justify-between" : "justify-end"} pt-4`}>
                        {product.offer && <div className="px-1 text-white bg-[#ef394e] rounded-2xl flex items-center justify-center h-5 w-[34px]">
                            <span className="text-xs font-Yekan-bold">{convertToPersianNumber(product.offer)}٪</span>
                        </div>}
                        <div className="flex items-center gap-1">
                            <p className="text-base font-Yekan-bold text-[#3f4064]">
                                {product.offer ? 
                                convertToPersianNumber(product.price *  ((100 - product.offer) / 100)) : convertToPersianNumber(product.price)}
                            </p>
                            <span className="text-xs text-[#3f4064] font-Yekan-bold">تومان</span>
                        </div>
                </div>
                {product.offer && <div className="flex items-center justify-end pt-2 pl-5">
                    <p className="text-xs text-[#c3c3ce] line-through">
                        {convertToPersianNumber(product.price)}
                    </p>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default PhoneCard