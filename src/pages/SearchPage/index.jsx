import { useEffect, useState } from "react";
import {BiSortDown} from "react-icons/bi";
import {MdKeyboardArrowDown} from "react-icons/md";
import {RiListSettingsFill} from "react-icons/ri";
import {IoClose} from "react-icons/io5";
import { SearchFilter,CheckBox, PhoneCard, ShowPhoneCards } from "../../components";
import { useGetPhoneProductsQuery } from "../../api/apiSlice";


function SerachPage() {
    
  const [whichDropdownIsOpen, setWhichDropdownIsOpen] = useState(0);
  const [isFliterOpen, setIsFliterOpen] = useState(false);
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const [isJustDiscount, setIsJustDiscount] = useState(false);

  
  const {data: phones, isLoading , isError} = useGetPhoneProductsQuery();
  if (isError || isLoading) {
      return;
  }
  const brands = phones.map(phone=> phone.subCategorySlug);
  const uniqueBrands = [... new Set(brands)];
  const brandsName = phones.map(phone=> phone.subCategory);
  const uniqueBrandsName = [... new Set(brandsName)];

  let filteredPhones = phones;
  if (isJustDiscount) {
      filteredPhones = phones.filter(phone=> phone.offer);
  }
 
  const handleWhichDropdownIsOpen = (whichOne) => {
    if (whichOne === whichDropdownIsOpen) {setWhichDropdownIsOpen(0)}
    else {setWhichDropdownIsOpen(whichOne)};
  }

  const handleIsFilterOpen = () => {
    setIsFliterOpen(!isFliterOpen);
  }

  const handleIsSortingOpen = () => {
    setIsSortingOpen(!isSortingOpen);
  }

  return (
    <div className="w-full max-w-[1676px] mx-auto">
        <div className="w-full px-5">
            <nav className="flex items-center gap-2 py-5 text-xs text-[#767790]">
                <span>{"فروشگاه اینترنتی دیجی‌کالا"}</span>
                <span>/</span>
                <span>{"موبایل"}</span>
            </nav>
            <div className="flex items-center my-5 font-Yekan-bold text-[#080a38]">{"گوشی موبایل"}</div>
            <div className="flex items-stretch justify-between gap-4">
                {/* Filter Box */}
                <section className="hidden Laptop-L:block min-w-[270px] w-[250px]">
                    <div className="border border-[#e0e0e6] rounded-lg sticky top-[9rem]">
                        <div className="flex items-center justify-between px-5 py-4">
                            <p className="text-[#3f4064] text-[19px] font-Yekan-bold">فیلترها</p>
                            <button className="text-[#19bfd3] text-xs font-Yekan-bold">حذف فیلتر ها</button>
                        </div>
                        <div className="flex flex-col pb-4">
                            <div className="px-5">
                                {/* brands filter */}
                                <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                                    <div onClick={()=> handleWhichDropdownIsOpen(1)} className="flex items-center justify-between">
                                        <p>{"برند"}</p>
                                        <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]"/> 
                                    </div>
                                    <div className={`${whichDropdownIsOpen !== 1 && "hidden"} pt-2`}>
                                        <SearchFilter placeholder={"جستوجو در برند"}/>
                                        {uniqueBrands.map((brand, i) => <CheckBox key={brand} text={{main: brand, sub: uniqueBrandsName[i]}}/>)}
                                        
                                    </div>
                                </div>
                                {/* just discount products filter */}
                                <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <p>{"فقط کالا های تخفیف دار"}</p> 
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" onChange={()=> setIsJustDiscount(!isJustDiscount)} checked={isJustDiscount} className="sr-only peer"/>
                                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#19bfd3]"></div>
                                        </label>    
                                    </div>
                                </div>

                                {/* just available products filter */}
                                <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <p>{"فقط کالا های موجود"}</p> 
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer"/>
                                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#19bfd3]"></div>
                                        </label>    
                                    </div>
                                </div>

                                {/* brands filter */}
                                <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                                    <div onClick={()=> handleWhichDropdownIsOpen(2)} className="flex items-center justify-between">
                                        <p>{"تعداد سیم‌کارت"}</p>
                                        <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]"/> 
                                    </div>
                                    <div className={`${whichDropdownIsOpen !== 2 && "hidden"} pt-2`}>
                                        <CheckBox text={{main: "یک عدد"}} />
                                        <CheckBox text={{main: "دو عدد"}} />
                                        <CheckBox text={{main: "سه عدد"}} />
                                    </div>
                                </div>

                                {/* communication networks filter */}
                                <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                                    <div onClick={()=> handleWhichDropdownIsOpen(3)} className="flex items-center justify-between">
                                        <p>{"شبکه های ارتباطی"}</p>
                                        <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]"/> 
                                    </div>
                                    <div className={`${whichDropdownIsOpen !== 3 && "hidden"} pt-2`}>
                                        <CheckBox text={{main: "۲G"}} />
                                        <CheckBox text={{main: "۳G"}} />
                                        <CheckBox text={{main: "۴G"}} />
                                        <CheckBox text={{main: "۵G"}} />
                                    </div>
                                </div>

                                {/* RAM memory filter */}
                                <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                                    <div onClick={()=> handleWhichDropdownIsOpen(4)} className="flex items-center justify-between">
                                        <p>{"مقدار RAM"}</p>
                                        <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]"/> 
                                    </div>
                                    <div className={`${whichDropdownIsOpen !== 4 && "hidden"} pt-2`}>
                                        <SearchFilter placeholder={"جستوجو مقدار RAM"}/>
                                        <CheckBox text={{main: "چهار گیگابایت"}} />
                                        <CheckBox text={{main: "دو گیگابایت"}} />
                                        <CheckBox text={{main: "یک گیگابایت"}} />
                                        <CheckBox text={{main: "شش گیگابایت"}} />
                                        <CheckBox text={{main: "سه گیگابایت"}} />
                                        <CheckBox text={{main: "هشت گیگابایت"}} />
                                        <CheckBox text={{main: "۱۲ گیگابایت"}} />
                                        <CheckBox text={{main: "۱۶ گیگابایت"}} />
                                    </div>
                                </div>

                                 {/* RAM memory filter */}
                                 <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                                    <div onClick={()=> handleWhichDropdownIsOpen(5)} className="flex items-center justify-between">
                                        <p>{"حافظه داخلی"}</p>
                                        <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]"/> 
                                    </div>
                                    <div className={`${whichDropdownIsOpen !== 5 && "hidden"} pt-2`}>
                                        <SearchFilter placeholder={"جستوجو حافظه داخلی..."}/>
                                        <CheckBox text={{main: "۶۴ گیگابایت"}} />
                                        <CheckBox text={{main: "۱۶ گیگابایت"}} />
                                        <CheckBox text={{main: "۳۲ گیگابایت"}} />
                                        <CheckBox text={{main: "هشت گیگابایت"}} />
                                        <CheckBox text={{main: "چهار گیگابایت"}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grow">
                    <div className="flex flex-col">
                        <div className="flex border-b">
                            <div onClick={handleIsFilterOpen} className="flex items-center py-3 ml-6 Laptop-L:hidden">
                                <RiListSettingsFill className="w-6 h-6 ml-2"/>
                                <p className="text-xs font-Yekan-bold">فیلتر</p>
                            </div>
                            <div className="flex items-center py-3">
                                <BiSortDown className="w-6 h-6 ml-2"/>
                                <p onClick={handleIsSortingOpen} className="text-xs font-Yekan-bold">مرتب سازی:</p>
                            </div>
                            <div className="items-center justify-between hidden grow Laptop-L:flex">
                                <div className="flex items-center gap-4 pr-4">
                                    <span className="text-xs hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#767790]">پرفروش‌ترین‌</span>
                                    <span className="text-xs hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#767790]">مرتبط‌ترین</span>
                                    <span className="text-xs hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#767790]">پربازدیدترین‌</span>
                                    <span className="text-xs hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#767790]">جدیدترین‌</span>
                                    <span className="text-xs hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#767790]">ارزان‌ترین‌</span>
                                    <span className="text-xs hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#767790]">گران‌ترین‌</span>
                                </div>
                                <div className="text-xs text-[#767790]">
                                    {"۱۲۴۵ کالا"}
                                </div>
                            </div>
                        </div>
                        <ShowPhoneCards phones={filteredPhones}/>
                    </div>
                </section>
            </div>
        </div>
        {/* filter window in Laptop size and smaller */}
        <div className={`bg-white z-50 absolute h-screen w-full top-0 left-0 right-0 transition-all ${!isFliterOpen ? "translate-y-[100%] hidden" : ""}`}>
            <div className="px-5 py-4">
                <div className="flex items-center pb-4">
                    <IoClose onClick={handleIsFilterOpen} className="w-6 h-6 ml-5" />
                    <div className="w-full text-sm font-Yekan-bold">فیلتر</div>
                    <div className="text-[#19bfd3] text-xs font-Yekan-bold min-w-max">حذف فیلترها</div>
                </div>
                <div className="py-4">
                    <div className="flex flex-col pb-4">
                        <div className="px-5">
                            {/* brands filter */}
                            <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                                <div onClick={()=> handleWhichDropdownIsOpen(1)} className="flex items-center justify-between">
                                    <p>{"برند"}</p>
                                    <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]"/> 
                                </div>
                                <div className={`${whichDropdownIsOpen !== 1 && "hidden"} pt-2`}>
                                    <SearchFilter placeholder={"جستوجو در برند"}/>
                                    <CheckBox text={{main: "Samsung", sub: "سامسونگ"}}/>
                                </div>
                            </div>
                            {/* just discount products filter */}
                            <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <p>{"فقط کالا های تخفیف دار"}</p> 
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer"/>
                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#19bfd3]"></div>
                                    </label>    
                                </div>
                            </div>

                            {/* just available products filter */}
                            <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <p>{"فقط کالا های موجود"}</p> 
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer"/>
                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#19bfd3]"></div>
                                    </label>    
                                </div>
                            </div>

                            {/* brands filter */}
                            <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                                <div onClick={()=> handleWhichDropdownIsOpen(2)} className="flex items-center justify-between">
                                    <p>{"تعداد سیم‌کارت"}</p>
                                    <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]"/> 
                                </div>
                                <div className={`${whichDropdownIsOpen !== 2 && "hidden"} pt-2`}>
                                    <CheckBox text={{main: "یک عدد"}} />
                                    <CheckBox text={{main: "دو عدد"}} />
                                    <CheckBox text={{main: "سه عدد"}} />
                                </div>
                            </div>

                            {/* communication networks filter */}
                            <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                                <div onClick={()=> handleWhichDropdownIsOpen(3)} className="flex items-center justify-between">
                                    <p>{"تعداد سیم‌کارت"}</p>
                                    <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]"/> 
                                </div>
                                <div className={`${whichDropdownIsOpen !== 3 && "hidden"} pt-2`}>
                                    <CheckBox text={{main: "۲G"}} />
                                    <CheckBox text={{main: "۳G"}} />
                                    <CheckBox text={{main: "۴G"}} />
                                    <CheckBox text={{main: "۵G"}} />
                                </div>
                            </div>

                            {/* RAM memory filter */}
                            <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                                <div onClick={()=> handleWhichDropdownIsOpen(4)} className="flex items-center justify-between">
                                    <p>{"مقدار RAM"}</p>
                                    <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]"/> 
                                </div>
                                <div className={`${whichDropdownIsOpen !== 4 && "hidden"} pt-2`}>
                                    <SearchFilter placeholder={"جستوجو مقدار RAM"}/>
                                    <CheckBox text={{main: "چهار گیگابایت"}} />
                                    <CheckBox text={{main: "دو گیگابایت"}} />
                                    <CheckBox text={{main: "یک گیگابایت"}} />
                                    <CheckBox text={{main: "شش گیگابایت"}} />
                                    <CheckBox text={{main: "سه گیگابایت"}} />
                                    <CheckBox text={{main: "هشت گیگابایت"}} />
                                    <CheckBox text={{main: "۱۲ گیگابایت"}} />
                                    <CheckBox text={{main: "۱۶ گیگابایت"}} />
                                </div>
                            </div>

                            {/* RAM memory filter */}
                            <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                                <div onClick={()=> handleWhichDropdownIsOpen(5)} className="flex items-center justify-between">
                                    <p>{"حافظه داخلی"}</p>
                                    <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]"/> 
                                </div>
                                <div className={`${whichDropdownIsOpen !== 5 && "hidden"} pt-2`}>
                                    <SearchFilter placeholder={"جستوجو حافظه داخلی..."}/>
                                    <CheckBox text={{main: "۶۴ گیگابایت"}} />
                                    <CheckBox text={{main: "۱۶ گیگابایت"}} />
                                    <CheckBox text={{main: "۳۲ گیگابایت"}} />
                                    <CheckBox text={{main: "هشت گیگابایت"}} />
                                    <CheckBox text={{main: "چهار گیگابایت"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* sort window in Laptop size and smaller */}
        <div onClick={handleIsSortingOpen} className={`bg-black bg-opacity-30 z-40 absolute h-screen w-full bottom-0 left-0 right-0 transition-all ${!isSortingOpen ? "translate-y-[100%] hidden" : ""}`}>
            <div className="absolute bottom-0 left-0 right-0 z-50 w-full p-5 bg-white h-max rounded-t-3xl"> 
                <div className="flex items-center pb-4">
                    <IoClose onClick={handleIsSortingOpen} className="w-6 h-6 ml-5" />
                    <div className="w-full font-Yekan-bold">مرتب سازی بر اساس</div>
                </div>          
                    <div className="flex flex-col gap-4">
                        <span className="text-[13px] pt-2 pb-4 border-b border-b-[#f1f2f4] font-Yekan-bold hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#3f4064]">پرفروش‌ترین‌</span>
                        <span className="text-[13px] pt-2 pb-4 border-b border-b-[#f1f2f4] font-Yekan-bold hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#3f4064]">مرتبط‌ترین</span>
                        <span className="text-[13px] pt-2 pb-4 border-b border-b-[#f1f2f4] font-Yekan-bold hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#3f4064]">پربازدیدترین‌</span>
                        <span className="text-[13px] pt-2 pb-4 border-b border-b-[#f1f2f4] font-Yekan-bold hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#3f4064]">جدیدترین‌</span>
                        <span className="text-[13px] pt-2 pb-4 border-b border-b-[#f1f2f4] font-Yekan-bold hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#3f4064]">ارزان‌ترین‌</span>
                        <span className="text-[13px] pt-2 pb-4 font-Yekan-bold hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#3f4064]">گران‌ترین‌</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SerachPage