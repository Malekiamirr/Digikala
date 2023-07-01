import {BiLike} from "react-icons/bi";
import { FiInfo} from "react-icons/fi";
import {RxDotFilled} from "react-icons/rx";
import {MdKeyboardArrowLeft} from "react-icons/md";
import {AiFillInfoCircle} from "react-icons/ai";
import {BsXDiamond} from "react-icons/bs";
import {ImPaypal} from "react-icons/im";
import { ProductColors, ProductInsurance, ProductFeatures, ProductSeller } from "../../components";



function ProductInformation({product}) {
  return (
    <>
        {/* product name and category */}
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
        {/*  */}
        <div className="product-grid">
            <div className="min-w-[300px] pb-3">
                {/* product name */}
                <div className="flex items-center">
                    <span className="ml-2 text-xs text-[#c3c3ce]">{product.latinName}</span>
                    <div className="h-px bg-[#e0e0e6] grow"></div>
                </div>
                
                  {/* rating, point of view and questions */}
                <div className="flex items-center">
                {/* Product Rating */}
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

                {/* how many buyer offer this product */}
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

                <div className="min-w-[300px] pb-3">
                    {/* Color */}
                    <ProductColors/>
                </div> 
                {/* Bimeh */}
                <ProductInsurance/>

                <div className="">
                    {/* Features */}
                    <ProductFeatures productValue={product.productsValues}/>   
                            
                    {/* Return description */}
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

            {/* Product Sellers */}
            <ProductSeller price={product.price}/>
        </div>
    </>

  )
}

export default ProductInformation