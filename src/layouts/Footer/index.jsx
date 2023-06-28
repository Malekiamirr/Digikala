import {RiArrowUpSLine} from "react-icons/ri";
import {BsInstagram, BsSkype, BsLinkedin, BsCardImage} from "react-icons/bs";
import {SiAparat} from "react-icons/si";
import { useGetFooterBrandsQuery } from "../../api/apiSlice";
import image from "../../assets/imgs/digi.svg";
import express from "../../assets/imgs/express-delivery.svg";
import cashOnDelivery from "../../assets/imgs/cash-on-delivery.svg";
import daysReturn from "../../assets/imgs/days-return.svg";
import originalProducts from "../../assets/imgs/original-products.svg";
import support from "../../assets/imgs/support.svg";
import footerLogo from "../../assets/imgs/footerlogo2.png";
import googlePlay from "../../assets/imgs/google-play.svg";
import coffeBazzar from "../../assets/imgs/coffe-bazzar.svg";
import myket from "../../assets/imgs/myket.svg";
import sibApp from "../../assets/imgs/sib-app.svg";
import more from "../../assets/imgs/More.svg";
import rezi from "../../assets/imgs/rezi.png";
import kasbokar from "../../assets/imgs/kasbokar.png";
function Footer() {
    const {data:brands, isLoading, isError} = useGetFooterBrandsQuery();
    if (isLoading || isError) {
        return;
    }

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

  return (
    <footer className="w-full bg-white border-t border-t-[##f1f2f4] mt-12 pt-8">
        <div className="w-full max-w-[104.75rem] mx-auto">
            <div className="px-5">
                <div className="flex items-center justify-between">
                    <img src={image} alt="دیجی‌کالا" className="ml-4 h-[30px]"/>
                    <button onClick={goToTop} className="flex items-center text-[#9e9fb1] text-xs font-Yekan-bold py-2 px-4 gap-1 border border-[#e0e0e6] rounded-lg">
                    بازگشت به بالا
                    <RiArrowUpSLine className="w-6 h-6"/>
                    </button>
                </div>

                <div className="flex mt-3 text-xs text-[#3f4064] mb-4 Laptop-L:mb-0">
                    <span>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
                    <div className="px-5 text-[#9e9fb1] font-bold">|</div>
                    <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
                </div>

                <div className="items-center justify-between hidden my-8 Laptop-L:flex">
                    <a href="#" className="flex flex-col items-center justify-center w-full py-3">
                        <img src={express} alt="اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس" className="w-14 h-14"/>
                        <p className="text-[11px] text-[#3f4064]">اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
                    </a>

                    <a href="#" className="flex flex-col items-center justify-center w-full py-3">
                        <img src={cashOnDelivery} alt="امکان پرداخت در محل" className="w-14 h-14"/>
                        <p className="text-[11px] text-[#3f4064]">امکان پرداخت در محل</p>
                    </a>

                    <a href="#" className="flex flex-col items-center justify-center w-full py-3">
                        <img src={support} alt="۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ" className="w-14 h-14"/>
                        <p className="text-[11px] text-[#3f4064]">۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</p>
                    </a>

                    <a href="#" className="flex flex-col items-center justify-center w-full py-3">
                        <img src={daysReturn} alt="هفت روز ضمانت بازگشت کالا" className="w-14 h-14"/>
                        <p className="text-[11px] text-[#3f4064]">هفت روز ضمانت بازگشت کالا</p>
                    </a>

                    <a href="#" className="flex flex-col items-center justify-center w-full py-3">
                        <img src={originalProducts} alt="" className="w-14 h-14"/>
                        <p className="text-[11px] text-[#3f4064]">ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</p>
                    </a>
                </div>

                <div className="grid grid-cols-2 mb-8 Laptop-L:flex Laptop-L:justify-between">
                    <div className="flex flex-col">
                    <p className="mb-4 text-[#3f4064] Laptop-L:text-base font-Yekan-bold text-sm">با دیجی‌کالا</p>
                    <a href="#" className="mb-4 Laptop_L:text-sm text-xs text-[#767790]">اتاق خبر دیجی‌کالا</a>
                    <a href="#" className="mb-4 Laptop_L:text-sm text-xs text-[#767790]">فروش در دیجی‌کالا</a>
                    <a href="#" className="mb-4 Laptop_L:text-sm text-xs text-[#767790]">فرصت‌های شغلی</a>
                    <a href="#" className="mb-4 Laptop_L:text-sm text-xs text-[#767790]">
                        گزارش تخلف در دیجی‌کالا
                    </a>
                    <a href="#" className="mb-4 Laptop_L:text-sm text-xs text-[#767790]">تماس با دیجی‌کالا</a>
                    <a href="#" className="mb-4 Laptop_L:text-sm text-xs text-[#767790]">درباره دیجی‌کالا</a>
                    </div>

                    <div className="flex flex-col">
                    <p className="mb-4 text-[#3f4064] Laptop-L:text-base font-Yekan-bold text-sm">خدمات مشتریان</p>
                    <a href="#" className="mb-4 Laptop_L:text-sm text-xs text-[#767790]">پاسخ به پرسش‌های متداول</a>
                    <a href="#" className="mb-4 Laptop_L:text-sm text-xs text-[#767790]">رویه‌های بازگرداندن کالا</a>
                    <a href="#" className="mb-4 Laptop_L:text-sm text-xs text-[#767790]">شرایط استفاده</a>
                    <a href="#" className="mb-4 Laptop_L:text-sm text-xs text-[#767790]">
                    حریم خصوصی
                    </a>
                    <a href="#" className="mb-4 Laptop_L:text-sm text-xs text-[#767790]">گزارش باگ</a>
                    </div>

                    <div className="flex flex-col col-span-2">
                    <p className="mb-4 text-[#3f4064] Laptop-L:text-base font-Yekan-bold text-sm">راهنمای خرید از دیجی‌کالا</p>
                    <a href="#" className="mb-4 Laptop_L:text-sm text-xs text-[#767790]">نحوه ثبت سفارش</a>
                    <a href="#" className="mb-4 Laptop_L:text-sm text-xs text-[#767790]">رویه ارسال سفارش</a>
                    <a href="#" className="mb-4 Laptop_L:text-sm text-xs text-[#767790]">شیوه‌های پرداخت</a>
                    </div>

                    <div className="flex flex-col col-span-2">
                        <div className="flex justify-between Laptop-L:flex-col" >
                            <h4 className="mb-6 text-[#3f4064] Laptop-L:text-base font-Yekan-bold text-sm">همراه ما باشید!</h4>
                            <div className="flex">
                                <a href="https://www.instagram.com/digikalacom/" className="ml-8">
                                    <div className="flex">
                                        <BsInstagram className="w-6 h-6 Laptop-L:w-8 Laptop-L:h-8 text-[#9e9fb1]"/>
                                    </div>
                                </a>

                                <a href="https://twitter.com/digikalacom" className="ml-8">
                                    <div className="flex">
                                        <BsSkype className="w-6 h-6 Laptop-L:w-8 Laptop-L:h-8 text-[#9e9fb1]"/>
                                    </div>
                                </a>

                                <a href="https://www.linkedin.com/company/digikala/mycompany/" className="ml-8">
                                    <div className="flex">
                                        <BsLinkedin className="w-6 h-6 Laptop-L:w-8 Laptop-L:h-8 text-[#9e9fb1]"/>
                                    </div>
                                </a>

                                <a href="https://www.aparat.com/digikala/" className="Laptop:ml-8">
                                    <div className="flex">
                                        <SiAparat className="w-6 h-6 Laptop-L:w-8 Laptop-L:h-8 text-[#9e9fb1]"/>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="mb-3 font-Yekan-bold text-[#3f4064]">با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</h4>
                            <div>
                                <form className="flex">
                                    <div className="flex items-center justify-center px-2 bg-[#f1f2f4] rounded-lg w-full">
                                        <div className="w-full px-2">
                                            <input type="email" placeholder="ایمیل شما" className="bg-transparent outline-none text-[#3f4064] text-[15px]"/>
                                        </div>
                                    </div>
                                    <button className="px-4 py-3 mr-2 rounded-lg bg-[#e0e0e6] text-white">ثبت</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 Laptop-L:gap-0 Laptop-L:flex-row items-center justify-between px-5 py-2 text-white mb-7 bg-[#3c4b6d] rounded-lg">
                    <div className="flex items-center">
                        <div>
                            <img src={footerLogo} alt="آیکون دیجی‌کالا" className="w-6 h-6 Laptop-L:w-11 Laptop-L:h-11"/>
                        </div>
                        <div className="text-base Laptop-L:text-[21px] font-Yekan-medium mr-4">دانلود اپلیکیشن دیجی‌کالا</div>
                    </div>

                    <div className="flex items-center justify-end">
                        <div className="min-[1061px]:flex grid grid-cols-2 Laptop:flex Laptop-L:grid Laptop-L:grid-cols-3 items-center justify-end">
                            <a href="https://trc.metrix.ir/au9qq6/" title="دریافت از گوگل‌پلی" className="m-2">
                                <img src={googlePlay} alt="دریافت از گوگل‌پلی" className="w-full rounded h-11"/>
                            </a>

                            <a href="https://trc.metrix.ir/k3of5r/" title="دریافت از کافه بازار" className="m-2">
                                <img src={coffeBazzar} alt="دریافت از کافه بازار" className="w-full rounded h-11"/>
                            </a>

                            <a href="https://myket.ir/app/com.digikala?utm_source=search-ads-gift&utm_medium=cpc" title="دریافت از مایکت" className="m-2">
                                <img src={myket} alt="دریافت از مایکت" className="w-full rounded h-11"/>
                            </a>

                            <a href="https://trc.metrix.ir/4gluyi/" title="دریافت از سیب‌اپ" className="m-2">
                                <img src={sibApp} alt="دریافت از سیب‌اپ" className="w-full rounded h-11"/>
                            </a>
                        </div>
                        <a href="#" className="hidden mr-4 Laptop-L:block">
                            <div className="bg-white border border-[#e0e0e6] rounded w-10 h-10">
                                <img src={more} alt="بیشتر" className="object-cover w-10 h-10"/>
                            </div>
                        </a>
                    </div>
                    <button className="flex items-center gap-1 mt-2 text-xs text-white Laptop-L:hidden font-Yekan-bold">
                        مشاهده بیشتر
                        <RiArrowUpSLine className="-rotate-90"/>
                    </button>
                </div>

                <div className="py-8 border-t border-t-[#f1f2f4] flex flex-col Laptop-L:flex-row  justify-between Laptop-L:items-start">
                        <div className="Laptop:ml-10">
                            <div className="">
                                <h1 className="text-lg font-Yekan-medium text-[#3f4064]">فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین.
                                </h1>
                                <p className="text-xs text-[#767790] leading-6">
                                    یک<strong> خرید</strong> اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
                                </p>
                            </div>
                            <button className="flex items-center gap-1 mt-2 text-xs font-Yekan-bold text-[#19bfd3]">
                                مشاهده بیشتر
                                <RiArrowUpSLine className="-rotate-90"/>
                            </button>
                        </div>

                        <div className="flex items-center justify-center w-full gap-2 mt-8 Laptop-L:mt-0 Laptop-L:justify-end">
                            <div className="p-4 border border-[#e0e0e6] rounded-lg">
                                <img src={rezi} alt="نماد الکترونیک" className="w-16 h-16"/>
                            </div>

                            <div className="p-4 border border-[#e0e0e6] rounded-lg">
                                <img src={kasbokar} alt="کسب و کار" className="w-16 h-16"/>
                            </div>

                            <div className="p-4 border border-[#e0e0e6] rounded-lg">
                                <BsCardImage alt="نماد الکترونیک" className="w-16 h-16 text-[#e0e0e6]"/>
                            </div>
                        </div>
                </div>

                <div className="border-t py-8 border-t-[#f1f2f4] text-[10px] Laptop-L:text-[11px] text-[#767790] text-center">
                برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.
                </div>
            </div>
        </div>

        <div className="w-full bg-[#f1f2f4]">
        <div className="w-full max-w-[104.75rem] mx-auto">
            <div className="grid grid-cols-3 Laptop-L:grid-cols-9">
                {brands.map((brand)=> (
                    <a key={brand.id} href={brand.url} className={`border-b ${(brand.id == 9 || brand.id== 18) ? "" : "border-l"} border-[#e0e0e6] flex items-center justify-center`}>
                        <img src={brand.image} alt="brand image" className="w-20 h-20"/>
                    </a>
                ))}
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer