import { useState } from "react";

import convertToPersianNumber from "../../utils/convertToPersianNumber"
import convertToPersianTime from "../../utils/convertToPersianTime";
import StarRating from "../StarRating";
import ProgresBar from "../ProgresBar";

import { FiInfo } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import { HiOutlinePlusSm } from "react-icons/hi";
import { GoDash } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineFlag } from "react-icons/ai";


function ProductUsersScoresAndOpinions({product, comments}) {
    

    const [isUseful, setisUseful] = useState({yes: 0, no: 0});

    const handleIsUseful = (which) => {
        which === "yes" ? setisUseful({yes: isUseful.yes + 1 , no : isUseful.no}) : setisUseful({yes: isUseful.yes , no : isUseful.no + 1})
    }

    const handleReportBox = () => {
        document.getElementById("report").classList.toggle("hidden");
    }

    return (
    <div className="mt-4 pb-4 border-b-4 border-b-[#f1f2f4]">
        {/* Header */}
        <div className="py-3">
            <div className="flex items-center grow">
                <h2 className="font-Yekan-bold">امتیاز و دیدگاه کاربران</h2>
            </div>
            <div className="mt-2 bg-[#ef394e] w-[5rem] h-[0.15rem]"></div>
        </div>

        {/*  */}
        <div className="flex items-start justify-start mt-3">
            <div className="sticky ml-16 top-[191.031px] left-0 w-[260px] min-w-[260px]">
                {/* rating */}
                <div className="flex items-center">
                    <p className="ml-1 text-[26px] font-Yekan-medium">{convertToPersianNumber(product.stock)}</p>
                    <p className="text-[10px]">از ۵</p>
                </div>

                {/* Stars */}
                <div className="flex items-center">
                    <div className="mt-1">
                        <StarRating rating={product.stock}/>
                    </div>
                    <p className="mr-2 text-[10px] text-[#9e9fb1]">
                        از مجموع {convertToPersianNumber(product.sellCount)} دیدگاه
                    </p>
                </div>

                {/* The subject of views */}
                <div className="py-4 border-b border-b-[#e0e0e6]">
                    <div className="flex items-center py-3 text-sm font-Yekan-bold text-[#3f4064]">
                        موضوع دیدگاه‌ها  
                    </div>

                    {product.sellerView.map((view, i)=> 
                        <div key={i} className="px-3 pt-3 pb-2 mb-2 border border-[#e0e0e6] min-w-[240px] rounded-lg">
                            <div className="flex items-center">
                                <p className="text-xs font-Yekan-bold text-[#5a5c7a] ml-2">{view.property}</p>
                            </div>
                            <ProgresBar progress={view.rate}/>
                        </div>
                                    )}

                    {/* Warning */}
                    <p className="text-[11px] text-[#9e9fb1]">
                        این جداسازی به صورت آزمایشی انجام شده است و ممکن است دقیق نباشد
                    </p>
                                    
                </div>

                {/* submit view */}
                <p className="mt-4 mb-3 text-[11px] text-[#3f4064]">
                    شما هم درباره این کالا دیدگاه ثبت کنید      
                </p>

                {/* submit view button */}
                <button className="px-3 py-3 mt-4 border border-[#ef4056] w-full rounded-lg">
                    <p className="flex items-center justify-center text-[#ef4056] text-xs font-Yekan-bold">ثبت دیدگاه</p>
                </button>

                {/* digi-club score earning description */}
                <div className="flex mt-3">
                    <div className="mt-1">
                        <FiInfo className="w-[18px] h-[18px] text-[#81858b]"/>
                    </div>
                   <p className="text-[#5a5c7a] text-xs mr-2 leading-6">۵ امتیاز دیجی‌کلاب
                        <br/>
                        پس از تایید شدن دیدگاه، با رفتن به صفحه ماموریت‌های دیجی‌کلاب امتیازتان را دریافت کنید.
                    </p>
                </div>
            </div>
            <div className="min-w-0 grow">
                <div>
                    <div className="flex items-center py-10">
                        <BiLike className="w-4 h-4 text-[#2e7b32] ml-1"/>
                        <p className="ml-2 text-xs font-Yekan-bold text-[#080a38]">
                            ۸۵% (۴۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند
                        </p>
                        <div className="relative hover:cursor-pointer group">
                            <FiInfo className="w-[18px] h-[18px] text-[#9e9fb1]"/>
                            <div className="px-3 py-2 m-2 border border-[#23254e] bg-[#3f4064] max-w-[320px] w-max absolute top-5 left-[50%] -translate-x-[50%] text-xs text-white leading-6 rounded hidden group-hover:block">
                                خریداران کالا با انتخاب یکی از گزینه‌های پیشنهاد یا عدم پیشنهاد، تجربه خرید خود را با کاربران به اشتراک می‌گذارند.
                            </div>
                        </div>
                    </div>
                </div>
                                
                {comments.map((comment,i) =>
                    <article key={i} className="flex py-3 border-t border-[#e0e0e6]">
                        <div className="mt-2 ml-2 w-8 h-5 bg-[#00a049] flex items-center justify-center rounded text-white text-[11px] font-Yekan-bold">
                            ۵.۰
                        </div>

                        <div className="flex justify-between w-full">
                            <div className="w-full">
                                <p className="pb-3 font-Yekan-bold text-[#080a38]">{comment.title}</p>
                                <div className="mt-1">
                                    <div className="flex items-center pb-3 border-b">
                                        <p className="text-[11px] text-[#9e9fb1]">{convertToPersianTime(comment.createdAt)}</p>
                                        <RxDotFilled className="w-4 h-4 m-2 text-[#e0e0e6]"/>
                                        <p className="text-[11px] text-[#9e9fb1]">{comment.name}</p>
                                    </div>

                                    {/* Comments */}
                                    <div className="border-b border-b-[#f1f2f4] mt-8 pb-2 mb-2">
                                        <p className="pt-3 mb-1 break-words text-sm text-[#080a38] leading-5">
                                            {comment.description}
                                        </p>
                                        {comment.positiveComments.map(positive => 
                                            <div key={positive.id} className="flex items-center my-3 text-xs">
                                                <HiOutlinePlusSm className="w-4 h-4 ml-2 text-[#00a049]"/>
                                                {positive.description}
                                            </div>
                                            )}

                                        {comment.negativeComments.map(negative => 
                                            <div key={negative.id} className="flex items-center my-3 text-xs">
                                                <GoDash className="w-4 h-4 ml-2 text-[#d32f2f]"/>
                                                {negative.description}
                                            </div>
                                            )}
                                    </div>
                                                    
                                    {/* is it useful? */}
                                    <div className="flex items-center justify-end pt-3">
                                        <p className="ml-10 text-xs text-[#767790]">آیا این دیدگاه مفید بود؟</p>
                                        <div className="flex items-center">
                                            {/* useful button */}
                                            <button onClick={()=> handleIsUseful("yes")} className="flex items-center px-4 py-1 text-[#9e9fb1]">
                                                {convertToPersianNumber(isUseful.yes)}
                                                <BiLike className="w-5 h-5 text-[#9e9fb1] mr-1"/>
                                            </button>

                                            {/* Unuseful button */}
                                            <button onClick={()=> handleIsUseful("no")} className="flex items-center py-1 text-[#9e9fb1]">
                                                {convertToPersianNumber(isUseful.no)}
                                                <BiLike className="w-5 h-5 text-[#9e9fb1] mr-1 rotate-180 scale-x-[-1]"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={handleReportBox} className="relative pt-1 mr-auto hover:cursor-pointer">
                                <BsThreeDotsVertical className="w-6 h-6 text-[#9e9fb1]"/>
                                <div id="report" className="absolute left-0 p-2 bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] top-10 w-max hidden">
                                    <div className="py-2">
                                        <button className="px-5 py-2">
                                            <div className="flex items-center py-2">
                                                <AiOutlineFlag className="scale-x-[-1] h-6 w-6 text-[#e6123d] ml-4"/>
                                                <p className="font-Yekan-medium">گزارش این دیدگاه</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                                )}
                                
            </div>
        </div>
    </div>
  )
}

export default ProductUsersScoresAndOpinions