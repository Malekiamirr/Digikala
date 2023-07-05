import { useEffect, useState, useRef } from "react";

function ProductDetailsCategory() {
    const [isScrolledUp, setIsScrolledUp] = useState(false);
    const lastScrollPosition = useRef(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
        setIsScrolledUp(scrollPosition < lastScrollPosition.current);
        lastScrollPosition.current = scrollPosition;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <div className={`hidden Laptop-L:block sticky top-[134px] z-10 mt-5 bg-white ${isScrolledUp && "top-[172px]"}`}>
        <div>
            <ul className="flex relative items-center border-b border-b-[#e0e0e6] text-[#767790] text-xs font-Yekan-bold">
                <li className="relative px-4 py-3 hover:cursor-pointer text-[#ef4056]">
                            معرفی
                    <div className="absolute left-[50%] -translate-x-[50%] w-3/4 bottom-0 bg-[#ef4056] rounded-t-md h-1"></div>
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
  )
}

export default ProductDetailsCategory