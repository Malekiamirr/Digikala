import {BiArrowBack} from "react-icons/bi";

function ShowPindo() {
  return (
    <div className="relative pt-3 pb-5 mt-4 border-b-4 border-[#f1f2f4] bg-[#f1f2f4] -z-20 overflow-hidden">

        {/* Background */}
        <div className="absolute top-0 left-0 -z-10">
            <img src={"https://www.digikala.com/_next/static/media/PindoTouchPointBackground.f54ee21d.svg"} alt="background" />
        </div>
        <div className="absolute top-0 right-0 -z-10">
            <img src={"https://www.digikala.com/_next/static/media/PindoTouchPointBackground.f54ee21d.svg"} alt="background" />
        </div>
        <div className="absolute top-0 left-[40%] -z-10">
            <img src={"https://www.digikala.com/_next/static/media/PindoTouchPointBackground.f54ee21d.svg"} alt="background" />
        </div>

        {/* Main */}
        <div className="z-20 flex flex-col justify-between gap-4 Laptop-L:gap-0 Laptop-L:items-center Laptop-L:flex-row">
            <div className="flex items-center mr-7 self">
                <div className="ml-5">
                    <img className="w-[60px] h-[60px] z-20" src={"https://www.digikala.com/statics/img/svg/pindo.svg"} alt="pindo logo" />
                </div>
                <div className="flex flex-col items-center">
                    <div>
                        <img className="w-[93px] h-[28]" src={"https://www.digikala.com/statics/img/svg/Pindo-logo.svg"} alt="Pindo" />
                    </div>
                    <p className="mt-2 text-xs font-Yekan-bold">
                        رایگان آگهی بگذارید!
                    </p>
                </div>
            </div>

            <div className="mr-10 ml-7">
                <div className="flex items-center">
                    <div className="ml-6">
                        <div className="flex items-center ml-3">
                            <div className="ml-3">
                                <img src={"https://dkstatics-public.digikala.com/digikala-c2c-advertisements/9ab92f5d3ec14b053bf714fcf2ce71e00bc80deb_1685715167.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90/watermark,image_ZGstdy9mODgyZmQ2MjYwZTkwYmNiYmEzYmJkZWE1Mzg0OGRiMDRiNmE1ZmZmXzE2NjczODUyODkucG5n,t_90,g_se,x_15,y_15"} className="w-auto h-[74px] object-contain aspect-[3/4]" alt="pindo product" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[11px] font-Yekan-bold text-[#9e9fb1]">فروش نقد اقساطی</p>
                                <span className="text-[11px] font-Yekan-bold">۷۱,۵۰۰,۰۰۰ <span className="text-[10px]">تومان</span></span>
                                        
                            </div>
                        </div>
                    </div>

                    <div className="ml-6">
                        <div className="flex items-center ml-3">
                            <div className="ml-3">
                                <img src={"https://dkstatics-public.digikala.com/digikala-c2c-advertisements/f1c5d2c216b94a05e4f78faeca61d519e68d645a_1684841924.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90/watermark,image_ZGstdy9mODgyZmQ2MjYwZTkwYmNiYmEzYmJkZWE1Mzg0OGRiMDRiNmE1ZmZmXzE2NjczODUyODkucG5n,t_90,g_se,x_15,y_15"} className="w-auto h-[74px] object-contain aspect-[3/4]" alt="pindo product" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[11px] font-Yekan-bold text-[#9e9fb1]">فروش نقد اقساطی</p>
                                <span className="text-[11px] font-Yekan-bold">۷۱,۴۰۰,۰۰۰ <span className="text-[10px]">تومان</span></span>
                                        
                            </div>
                        </div>
                    </div>

                    <div className="ml-6">
                        <div className="flex items-center ml-3">
                            <div className="ml-3">
                                <img src={"https://dkstatics-public.digikala.com/digikala-c2c-advertisements/4a064df509a68698948b0eeca1198d6dd112f686_1680281109.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90/watermark,image_ZGstdy9mODgyZmQ2MjYwZTkwYmNiYmEzYmJkZWE1Mzg0OGRiMDRiNmE1ZmZmXzE2NjczODUyODkucG5n,t_90,g_se,x_15,y_15"} className="w-auto h-[74px] object-contain aspect-[3/4]" alt="pindo product" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[11px] font-Yekan-bold text-[#9e9fb1]">فروش نقد اقساطی</p>
                                <span className="text-[11px] font-Yekan-bold">۷۲,۸۰۰,۰۰۰ <span className="text-[10px]">تومان</span></span>
                                        
                            </div>
                        </div>
                    </div>
                            
                    <div className="hidden ml-6 bg-white rounded-full Laptop-L:block">
                        <button className="flex items-center p-5 text-[#28367f] text-xs font-Yekan-bold">
                                    آگهی‌های مرتبط 
                            <BiArrowBack className="w-6 h-6 mr-3"/>  
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowPindo