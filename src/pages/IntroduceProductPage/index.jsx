import {RiStore2Line} from "react-icons/ri";
import {AiOutlineLineChart, AiOutlineNotification, AiFillInfoCircle} from "react-icons/ai";
import {IoShareSocialSharp} from "react-icons/io5";
import {TbBellRinging} from "react-icons/tb";
import {HiListBullet} from "react-icons/hi2";
import {FiHeart, FiInfo, FiTruck} from "react-icons/fi";
import {HiOutlinePlusSm} from "react-icons/hi";
import {RxDotFilled} from "react-icons/rx";
import {BiCheckShield, BiLike} from "react-icons/bi";
import {MdKeyboardArrowLeft, MdCompare} from "react-icons/md";
import {BsXDiamond, BsThreeDotsVertical} from "react-icons/bs";
import {ImPaypal} from "react-icons/im";
import {GrHomeRounded} from "react-icons/gr";
import {TiTick} from "react-icons/ti";
import {GoDash} from "react-icons/go";
import {AiOutlineFlag} from "react-icons/ai";

import { useGetCustomersCommentQuery } from "../../api/apiSlice";

import {ShowPindo, StarRating, ProgresBar} from "../../components/index";

import convertToPersianNumber from "../../utils/convertToPersianNumber";
import convertToPersianTime from "../../utils/convertToPersianTime";

import { useState } from "react";

function IntroduceProductPage({product}) {
    const [isIntroductionOpen, setIsIntroductionOpen] = useState(false);
    const [isUseful, setisUseful] = useState({yes: 0, no: 0});

    const handleIsIntroductionOpen = ()=> {
        setIsIntroductionOpen(!isIntroductionOpen);
    }

    const handleIsUseful = (which) => {
        which === "yes" ? setisUseful({yes: isUseful.yes + 1 , no : isUseful.no}) : setisUseful({yes: isUseful.yes , no : isUseful.no + 1})
    }

    const handleReportBox = () => {
        document.getElementById("report").classList.toggle("hidden");
    }

    const {data:comments, isLoading, isError} = useGetCustomersCommentQuery();

    if (isLoading || isError) {
        return;
    }

    console.log(product);
    console.log(comments);
  return (
    <div className="max-w-[1676px] w-full mx-auto pt-4">
        <div className="px-5">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <nav className="py-2 text-[#767790] text-xs flex items-center gap-2">
                    <span>{"دیجی‌کالا"}</span>
                        / 
                    <span>{"موبایل"}</span>
                        / 
                    <span>{"گوشی موبایل"}</span>
                </nav>
                <div className="flex items-center py-2">
                    <button className="ml-8 text-xs text-[#9e9fb1] flex items-center gap-2">
                        <span>ثبت آگهی در پیندو</span>
                        <AiOutlineNotification className="w-[18px] h-[18px]" />
                    </button>
                        
                    <button className="text-xs text-[#9e9fb1] flex items-center gap-2">
                        <span>فروش در دیجی‌کالا</span>
                        <RiStore2Line className="w-[18px] h-[18px]" />
                    </button>
                </div>
            </div>
            
            {/* Main Part */}
            <div className="flex">
                
                {/* Photo and Icons */}
                <div className="ml-4">
                    <div className="flex">
                        <div className="flex mb-2">
                            {/* Icons */}
                            <div className="flex flex-col gap-4">
                                <div className="relative group hover:cursor-pointer">
                                    <FiHeart className="text-[#3f4064] w-6 h-6 ml-4"/>
                                    <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">اضافه به لیست علاقه‌مندی</div>
                                </div>
                                <div className="relative group hover:cursor-pointer">
                                    <IoShareSocialSharp className="text-[#3f4064] w-6 h-6 ml-4"/>
                                    <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">اشتراک گذاری</div>
                                </div>
                                <div className="relative group hover:cursor-pointer">
                                    <TbBellRinging className="text-[#3f4064] w-6 h-6 ml-4"/>
                                    <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">اطلاع‌رسانی شگفت‌انگیز</div>
                                </div>
                                <div className="relative group hover:cursor-pointer">
                                    <AiOutlineLineChart className="text-[#3f4064] w-6 h-6 ml-4"/>
                                    <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">نمودار قیمت</div>
                                </div>
                                <div className="relative group hover:cursor-pointer">
                                    <MdCompare className="text-[#3f4064] w-6 h-6 ml-4"/>
                                    <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">مقایسه</div>
                                </div>
                                <div className="relative group hover:cursor-pointer">
                                    <HiListBullet className="text-[#3f4064] w-6 h-6 ml-4"/>
                                    <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">اضافه به لیست</div>
                                </div>
                            </div>

                            {/* Photo */}
                            <div>
                                <img className="w-1/2 mix-blend-color-burn" src={product.productImage[0].image} alt={product.name} />
                            </div>
                        </div>
                    </div>

                    {/* Sub Images */}
                    <div className="flex mt-5 mb-3">
                       { product.productImage.map((image, i)=>
                         <div key={i} className=" p-1 ml-2 border border-[#e0e0e6] rounded-lg">
                            <img src={image.image} alt="photo" className="w-[72px] h-[72px]"/>
                        </div>)}
                    </div>

                    {/* Report text */}
                    <div className="flex items-center mt-4">
                        <div className="flex items-center gap-2 ml-9">
                            <FiInfo className="text-[#767790]"/>
                            <span className="text-[#767790] text-xs">گزارش نادرستی مشخصات</span>
                        </div>
                        <span className="text-[#9e9fb1] text-[11px]">
                            DKP-10849401
                        </span>
                    </div>
                </div>

                {/* Details */}
                <div className="min-w-0 grow">
                    <div className="flex items-center">
                        <div>
                            <nav className="flex items-center gap-2 text-[#c3c3ce]">
                                <span className=" text-sm font-Yekan-bold text-[#19bfd3]">{"اپل"}</span>
                                    / 
                                <span className=" text-sm font-Yekan-bold text-[#19bfd3]">{"گوشی موبایل اپل"}</span>
                            </nav>
                            <h1 className="text-[19px] font-Yekan-bold text-[#080a38] mb-2">{product.name}</h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-[minmax(300px,auto) minmax(300px,345px)] grid-rows-[0fr 0fr 1fr] gap-4">
                        <div className="min-w-[300px] pb-3">
                            {/* product name */}
                            <div className="flex items-center">
                                <span className="ml-2 text-xs text-[#c3c3ce]">{product.latinName}</span>
                                <div className="h-px bg-[#e0e0e6] grow"></div>
                            </div>

                            {/* rating, point of view and questions */}
                            <div className="flex items-center">
                                {/* Rating */}
                                <div className="flex items-center mt-2">
                                    <img src={"https://www.digikala.com/statics/img/png/star-yellow.png"} className="w-4 h-4" alt="yello star" />
                                    <span className="mr-1 text-xs">۴.۳</span>
                                    <span className="mr-1 text-[11px] text-[#c3c3ce]">{"(۸۴)"}</span>
                                    <RxDotFilled className="mr-1 w-4 h-4 text-[#e0e0e6]"/>
                                </div>
                                {/* point of view */}
                                <div className="flex items-center mt-2">
                                    <span className="mx-1 text-xs text-[#19bfd3]">۱۰۹ دیدگاه</span>
                                    <RxDotFilled className="mr-1 w-4 h-4 text-[#e0e0e6]"/>
                                </div>
                                {/* Questions */}
                                <div className="flex items-center mx-1 mt-2">
                                    <span className="mx-1 text-xs text-[#19bfd3]">۵۱ پرسش</span>
                                </div>
                            </div>

                            {/* */}
                            <div className="flex items-center mt-2">
                                <BiLike className="w-4 h-4 text-[#4caf50] ml-1"/>
                                <p className="ml-2 text-xs text-[#5a5c7a]">{"۸۵"}% (۴۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند</p>
                                <div className="relative flex items-center group hover:cursor-pointer">
                                    <FiInfo className="w-[18px] h-[18px] text-[#9e9fb1]"/>
                                    <div className="absolute top-[100%] -left-40 w-max max-w-[320px] px-3 py-2 m-2 text-xs border border-[#23254e] bg-[#3f4064] text-white rounded leading-7 transition-all hidden group-hover:block">
                                    خریداران کالا با انتخاب یکی از گزینه‌های پیشنهاد یا عدم پیشنهاد، تجربه خرید خود را با کاربران به اشتراک می‌گذارند.
                                    </div>
                                </div>
                            </div>

                            {/* Color */}
                            <div>
                                {/* Color text */}
                                <div className="py-3">
                                    <p className="font-Yekan-bold text-[#080a38]">رنگ: {"سبز"}</p>
                                </div>
                                {/* Color case */}
                                <div className="flex items-center">
                                    <div className="w-10 h-10 p-1 mb-2 ml-2 border rounded-full">
                                        <div className="bg-[#C99212] w-full h-full rounded-full"></div>
                                    </div>
                                    <div className="w-10 h-10 p-1 mb-2 ml-2 border rounded-full">
                                        <div className="bg-[#00E676] w-full h-full rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        {/* Bimeh */}
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

                            <div className="">
                            {/* Features */}
                            <ul className=" min-w-[300px] pb-3 border-b border-b-[#f1f2f4]">
                                <div className="py-3 font-Yekan-bold text-[#080a38]">
                                    ویژگی‌ها
                                </div>
                                {product.productsValues.map(feature=> 
                                    <li key={feature.id} className="flex items-center mb-3">
                                        <RxDotFilled className="w-4 h-4 text-[#9e9fb1]"/>
                                        <p className="text-sm text-[#767790]">{feature.filter} : </p>
                                        <p className="mr-2 text-sm font-Yekan-bold text-[#3f4064]">{feature.value}</p>
                                    </li>    
                                )}
                            </ul>   
                            
                            {/* Info */}
                            <div className="py-3">
                                <div className="flex">
                                    <AiFillInfoCircle className="w-8 h-w-8 mt-1 text-[#81858b]"/>
                                    <div className="mr-1 text-xs text-[#767790] leading-6">
                                    امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد.
                                    تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.
                                    </div>
                                </div>
                            </div>

                            {/* sending, digiplas and digi-pay */}
                            <div className="pt-5 space-y-4">
                                {/* sending */}
                                <div className="flex items-center justify-between border rounded-lg">
                                    <div className="py-3 pl-1 pr-4 text-[#23254e] text-[15px] font-Yekan-bold">
                                        ارسال رایگان برای این کالا  
                                    </div>
                                    <div>
                                        <img className="w-[132px] h-[60px]" src={"https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg"} alt="truck" />
                                    </div>
                                </div>

                                {/* digi-plus */}
                                <div className="border rounded-lg">
                                    <div className="px-3 pb-4">
                                        <div className="flex items-center">
                                            <BsXDiamond className="w-[18px] h-[18px] text-[#b12ba4] ml-2"/>
                                            <div className="flex items-center justify-between w-full py-3">
                                                <p className="text-[15px] font-Yekan-bold text-[#3f4064]">ویژه اعضای دیجی‌پلاس</p>
                                                <div className="flex items-center">
                                                    <p className="text-xs font-Yekan-bold text-[#19bfd3]">خرید اشتراک</p>
                                                    <MdKeyboardArrowLeft className="w-[18px] h-[18px] text-[#19bfd3]"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center mt-2">
                                            <div className="relative flex flex-col items-center">
                                                <span className="w-[2px] h-3 bg-[#e0e0e6] absolute bottom-[13px]"></span>
                                                <RxDotFilled className="w-5 h-5 text-[#b12ba4]"/>
                                            </div>
                                            <p className="text-[11px] text-[#767790] mr-2">ارسال رایگان</p>
                                        </div>
                                    </div>
                                </div>

                                {/* digi-pay */}
                                <div className="border rounded-lg">
                                    <div className="px-3 pb-4">
                                        <div className="flex items-center">
                                            <ImPaypal className="w-[18px] h-[18px] text-[#0040ff] ml-2 -rotate-2"/>
                                            <div className="flex items-center justify-between w-full py-3">
                                                <p className="text-[15px] font-Yekan-bold text-[#3f4064]">به اعتبار دیجی پی قسطی بخرید</p>
                                                <div className="flex items-center">
                                                    <MdKeyboardArrowLeft className="w-6 h-6 text-[#9e9fb1]"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center mt-2">
                                            <div className="relative flex flex-col items-center">
                                                <span className="w-[2px] h-4 bg-[#e0e0e6] absolute bottom-[15px]"></span>
                                                <RxDotFilled className="w-5 h-5 text-[#0040ff]"/>
                                            </div>
                                            <p className="text-[11px] text-[#767790] mr-2 my-1">۲,۰۳۳,۳۳۳ تومان پیش پرداخت</p>
                                        </div>

                                        <div className="flex items-center">
                                            <div className="relative flex flex-col items-center">
                                                <span className="w-[2px] h-4 bg-[#e0e0e6] absolute bottom-[15px]"></span>
                                                <RxDotFilled className="w-5 h-5 text-[#0040ff]"/>
                                            </div>
                                            <p className="text-[11px] text-[#767790] mr-2 my-1">۱,۸۸۱,۵۰۰ تومان ماهانه (۱۲ قسط)</p>
                                        </div>

                                        <div className="flex items-center">
                                            <div className="relative flex flex-col items-center">
                                                <span className="w-[2px] h-4 bg-[#e0e0e6] absolute bottom-[15px]"></span>
                                                <RxDotFilled className="w-5 h-5 text-[#0040ff]"/>
                                            </div>
                                            <p className="text-[11px] text-[#767790] mr-2 my-1">اعتبار تا سقف ۲۰,۰۰۰,۰۰۰ تومان</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="bg-[#e0e0e6] mr-3 mb-3 w-max min-w-max">
                    <div className="border border-[#e0e0e6]">
                        <div className="flex items-center justify-between px-5 py-3">
                            <h3 className="font-Yekan-bold text-[#080a38]">فروشنده</h3>
                            <span className="text-xs text-[#19bfd3]">۱ فروشنده دیگر</span>
                        </div>
                    </div>
                </div>
            </div>
             {/* Features of buying from Digikala */}
             <div className="p-3 mt-3 border-t border-b-4 pb-7 border-[#f1f2f4] flex items-center justify-around">
                <div className="flex hover:cursor-pointer">
                    <div className="flex items-center">
                        <img className="w-[42px] h-[42px] ml-2" src={"https://www.digikala.com/statics/img/svg/infosection/express-delivery.svg"} alt="تحویل اکسپرس" />
                        <p className="text-[11px] font-Yekan-bold text-[#9e9fb1]">امکان تحویل اکسپرس</p>
                    </div>
                </div>

                <div className="flex hover:cursor-pointer">
                    <div className="flex items-center">
                        <img className="w-[42px] h-[42px] ml-2" src={"https://www.digikala.com/statics/img/svg/infosection/support.svg"} alt="۲۴ ساعته، ۷ روز هفته" />
                        <p className="text-[11px] font-Yekan-bold text-[#9e9fb1]">۲۴ ساعته، ۷ روز هفته</p>
                    </div>
                </div>

                <div className="flex hover:cursor-pointer">
                    <div className="flex items-center">
                        <img className="w-[42px] h-[42px] ml-2" src={"https://www.digikala.com/statics/img/svg/infosection/cash-on-delivery.svg"} alt="امکان پرداخت در محل" />
                        <p className="text-[11px] font-Yekan-bold text-[#9e9fb1]">امکان پرداخت در محل</p>
                    </div>
                </div>

                <div className="flex hover:cursor-pointer">
                    <div className="flex items-center">
                        <img className="w-[42px] h-[42px] ml-2" src={"https://www.digikala.com/statics/img/svg/infosection/days-return.svg"} alt="هفت روز ضمانت بازگشت کالا" />
                        <p className="text-[11px] font-Yekan-bold text-[#9e9fb1]">هفت روز ضمانت بازگشت کالا</p>
                    </div>
                </div>

                <div className="flex hover:cursor-pointer">
                    <div className="flex items-center">
                        <img className="w-[42px] h-[42px] ml-2" src={"https://www.digikala.com/statics/img/svg/infosection/original-products.svg"} alt="ضمانت اصل بودن کالا" />
                        <p className="text-[11px] font-Yekan-bold text-[#9e9fb1]">ضمانت اصل بودن کالا</p>
                    </div>
                </div>
            </div>

            {/* another sellers */}
            <div className="pb-5 mt-4 border-b-4 border-[#f1f2f4]">
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
                            <p className="text-[19px] font-Yekan-bold text-[#23254e] ml-5">{convertToPersianNumber(parseFloat(product.price)+1200000)} <span className="text-[11px]">تومان</span></p>
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
                            <p className="text-[19px] font-Yekan-bold text-[#23254e] ml-5">{convertToPersianNumber(parseFloat(product.price)+1200000)} <span className="text-[11px]">تومان</span></p>
                            <button className="px-5 py-3 text-white bg-[#ef4056] rounded-lg text-xs font-Yekan-bold">افزودن به سبد</button>
                        </div>  
                    </div>
                </div>
            </div>

            {/* related Videos */}
            {product.productVideo[0].video && 
                <div className="p-4 pr-5 mt-4 border border-b-4 border-[#f1f2f4]">
                <p className="py-3 font-Yekan-bold text-[#080a38]">ویدئوهای مرتبط</p>
                <div className="overflow-hidden bg-white rounded-xl">
                    <div className="max-w-sm overflow-hidden max-h-96 rounded-xl">
                        <video src={product.productVideo[0].video} controls></video>
                    </div>
                </div>
                <div className="flex items-center mt-6">
                    <div className="overflow-hidden rounded-full">
                        <img className="w-6 h-6" src={"https://dkstatics-public.digikala.com/digikala-content-x-profile/a1b8075bb77a0f3f065ff9034fca7a2fd7fda6f2_1684912182.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80"} alt="Person" />
                    </div>
                    <span className="mr-2 text-[#9e9fb1] text-xs">
                        Sodopack
                    </span>
                </div>
                </div>
            }

            {/* Pindo */}
            <ShowPindo/>

            {/* Sub Image 1 */}
            <div className="px-5 py-4 my-5 overflow-hidden rounded-lg">
                <a href="https://digikala-service.com/">
                    <img src={"https://dkstatics-public.digikala.com/digikala-admin-landing/6318364ab23fcfc2cfaaa1924ec0ec95172e1022_1678538975.jpg"} alt="sub image" className="rounded-lg" />
                </a>
            </div>

            {/* Sub Image 2 */}
            <div className="px-5 py-4 my-5 overflow-hidden rounded-lg">
                <a href="https://digikala-service.com/">
                    <img src={"https://dkstatics-public.digikala.com/digikala-admin-landing/b00e0cf8908bcb4ea3a16c685b4486a83333a38d_1687621025.jpg"} alt="sub image" className="rounded-lg" />
                </a>
            </div>

            {/* Product Details */}
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

            {/* must Details */}
            <div className="flex w-full">
                <div className="min-w-0 grow">
                    <article className="mt-4 pb-5 border-b-4 border-b-[#f1f2f4]">
                        <div className="py-3">
                            <div className="flex items-center grow">
                                <h2 className="font-Yekan-bold">معرفی</h2>
                            </div>
                            <div className="mt-2 bg-[#ef394e] w-[5rem] h-[0.1rem]"></div>
                        </div>
                        <div className={`text-sm text-[#23254e] leading-7 ${!isIntroductionOpen && "line-clamp-3"}`}>
                            {product.description}
                        </div>
                        <button onClick={handleIsIntroductionOpen} className="mt-2 mb-3 text-[#19bfd3] flex items-center text-xs font-Yekan-bold">
                            بیشتر
                            <MdKeyboardArrowLeft className="w-[18px] h-[18px]"/>
                        </button>
                    </article>

                    {/* Specifications */}
                    <div className="mt-4 pb-4 border-b-4 border-b-[#f1f2f4]">
                        <div className="py-3">
                            <div className="flex items-center grow">
                                <h2 className="font-Yekan-bold">مشخصات</h2>
                            </div>
                            <div className="mt-2 bg-[#ef394e] w-[5rem] h-[0.15rem]"></div>
                        </div>

                        <div className="mt-4 grow">
                            <div className="flex justify-between py-4">
                                <p className="w-64 ml-12 font-Yekan-bold">مشخصات</p>
                                <div className="grow">
                                    {product.productsValues.map(value=> 
                                        <div key={value.id} className="flex items-center">
                                        <p className="px-2 py-6 ml-4 text-sm text-[#767790] w-52">{value.filter}</p>
                                        <div className="py-4 grow border-b border-b-[#f1f2f4]">
                                            <p className="flex items-center text-sm text-[#080a38]">
                                                {value.value}
                                            </p>
                                        </div>
                                    </div>
                                    )}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center py-2">
                            <FiInfo className="w-[18px] h-[18px] text-[#81858b]"/>
                            <p className="text-[#767790] mr-2 text-xs">هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد فعالسازی را گرفته و حتما در حضور ایشان، دستگاه را از طریق #7777*، برای سیمکارت خود فعالسازی نمایید. آموزش تصویری در آدرس اینترنتی hmti.ir/06
                            </p>
                        </div>
                    </div>

                    {/* Scores and opinions of users */}
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
                            <div className="sticky ml-16 top-[171.031px] w-[260px] min-w-[260px] z-50">
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
                    
                </div>

                {/* features */}
                <div className="mr-10"></div>
            </div>
        </div>
    </div>
  )
}

export default IntroduceProductPage