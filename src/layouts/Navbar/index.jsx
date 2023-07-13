// Images
import logo from '../../assets/imgs/logo.svg';

import { Link } from 'react-router-dom';

import { useState } from 'react';
import { Category, SearchBox } from '../../components/index';
import { NavLink } from 'react-router-dom';
import { useScroll } from '../../hooks/useScroll';

// Icons
import { LuShoppingCart } from 'react-icons/lu';
import { GrLocation, GrCircleQuestion } from 'react-icons/gr';
import { TbDiscount2 } from 'react-icons/tb';
import { MdOutlineDiscount, MdOutlineNoFood } from 'react-icons/md';
import {
  HiOutlineUser,
  HiOutlineLogin,
  HiOutlineMenu,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { BiCaretRight } from 'react-icons/bi';
import { AiOutlineFire } from 'react-icons/ai';

function Navbar() {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const toggleOpenSearchBox = (what) => setOpenSearchBox(what);
  const { y, x, scrollDirection } = useScroll();

  return (
    <>
      <div
        onClick={() => toggleOpenSearchBox(false)}
        className={`pb-3 bg-white ${
          scrollDirection === 'down' ? '' : 'shadow-sm shadow-gray-300'
        }`}
      >
        {/* Navbar Image */}
        <div className="hidden w-full Laptop-L:block">
          <img
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/f9acfcb34442c69cbcebaf56201c558aaca74914_1688218466.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="navbar image"
            className="h-[60px] w-full aspect-[3/2] object-cover"
          />
        </div>

        {/* Navbar Details */}

        <div className="container flex flex-col items-start px-1 Laptop-L:gap-5 Laptop-L:pt-3 Laptop-L:flex-row">
          <div className="flex items-center justify-between w-full px-3 pt-2 pb-3 Laptop-L:hidden border-b border-b-[#f1f2f4]">
            <HiOutlineMenu className="w-5 h-5 text-black Laptop-L:hidden" />
            <img src={logo} alt="logo" className="mt-2 w-[5.75rem] h-6" />
            <GrCircleQuestion className="w-6 h-6 text-black Laptop-L:hidden" />
          </div>

          <img src={logo} alt="logo" className="hidden mt-2 Laptop-L:block" />

          {/* Search box && Account Details*/}
          <div className="flex items-center justify-between w-full gap-4 pt-2 pr-3 Laptop-L:pt-0 Laptop-L:px-0 border-b border-b-[#f1f2f4] Laptop-L:border-none pb-2 Laptop-L:pb-0">
            <SearchBox
              handleClick={() => toggleOpenSearchBox(true)}
              openSearchBox={openSearchBox}
            />
            {/* Shoping && Account */}
            <div className="flex items-center justify-center gap-4 Laptop-L:gap-2 Laptop-L:-mt-2">
              <div className="flex items-center justify-center gap-1 p-2 transition-all rounded-md cursor-pointer">
                {isUserLogin ? (
                  // Account Icons
                  <>
                    <HiOutlineUser className="w-6 h-6 text-[#3f4064] stroke-2" />
                    <BiCaretRight className="hidden Laptop-L:block w-4 h-4 rotate-90 text-[#3f4064]" />
                  </>
                ) : (
                  // Login icons
                  // For Laptop-L and larger
                  <>
                    <div className="hidden Laptop-L:flex items-center gap-2 text-[##080a38] px-4 py-2 border rounded-lg border-[#e0e0e6]">
                      <HiOutlineLogin className="w-6 h-6" />
                      <Link to="login">
                        <p className="text-xs font-Yekan-bold">
                          ورود | ثبت‌نام
                        </p>
                      </Link>
                    </div>

                    {/* For Laptop and smaller */}
                    <div className="flex Laptop-L:hidden items-center gap-2 text-[##080a38]">
                      <HiOutlineLogin className="w-6 h-6" />
                      <Link to="login">
                        <p className="text-xs font-Yekan-bold">ورود</p>
                      </Link>
                    </div>
                  </>
                )}
              </div>

              {/* Divider */}
              <span className="hidden Laptop-L:block h-6 w-px bg-[#E0E0E6] mx-1"></span>

              {/* Shop Basket icons */}
              <div className="relative p-3 rounded-md Laptop-L:hover:bg-[#FDEBED] transition-all cursor-pointer">
                <LuShoppingCart className="w-6 h-6 text-[#3f4064]" />
                {isUserLogin && (
                  <p className="flex justify-center items-center w-5 h-5 absolute bottom-0 -right-1 bg-[#EF4056] text-white text-xs text-center font-Yekan-medium rounded-md border-2 border-white">
                    {/* BUG it should be updated with user product buying */}۳
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between w-full px-4 mt-2 Laptop-L:hidden">
          <div className=" flex items-center text-[#3f4064] text-[11px] cursor-pointer ">
            <HiOutlineLocationMarker className="w-5 h-5 ml-2 text-[#f9a828]" />
            <p>لطفا شهر خود را انتخاب کنید</p>
          </div>
          <IoIosArrowBack className="ml-1 text-lg" />
        </div>
      </div>

      {/* Categories */}
      <div
        className={`hidden Laptop-L:block transition-all duration-500 shadow-sm shadow-gray-300 bg-white ${
          scrollDirection === 'down' ? 'visible' : 'invisible -translate-y-full'
        }`}
      >
        <div className="container flex justify-between transition-all">
          <nav className="container h-10 flex items-center gap-3 pr-1.5 text-xs font-Yekan-regular text-[#5f6487]">
            <Category />

            <span className="w-px h-4 bg-[#E0E0E6]"></span>

            <div className="flex items-center gap-6">
              <NavLink
                to="/supermarket"
                className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-red-600 after:transition-all after:duration-300 after:hover:w-full'
              >
                <div className="flex items-center gap-1">
                  <MdOutlineNoFood className="w-4 h-4 text-[#9e9fb1]" />
                  <p>سوپرمارکت</p>
                </div>
              </NavLink>
              <NavLink
                to="best-selling"
                className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-red-600 after:transition-all after:duration-300 after:hover:w-full'
              >
                <div className="flex items-center gap-1">
                  <AiOutlineFire className="w-4 h-4 text-[#9e9fb1]" />
                  <p>پرفروش‌ترین‌ها</p>
                </div>
              </NavLink>
              <NavLink
                to="discounts"
                className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-red-600 after:transition-all after:duration-300 after:hover:w-full'
              >
                <div className="flex items-center gap-1">
                  <MdOutlineDiscount className="w-4 h-4 text-[#9e9fb1]" />
                  <p>تخفیف‌ها و پیشنهادها</p>
                </div>
              </NavLink>
              <NavLink
                to="incredibles"
                className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-red-600 after:transition-all after:duration-300 after:hover:w-full'
              >
                <div className="flex items-center gap-1">
                  <TbDiscount2 className="w-4 h-4 text-[#9e9fb1]" />
                  <p>شگفت‌انگیزها</p>
                </div>
              </NavLink>
            </div>

            <span className="w-px h-4 bg-[#E0E0E6]"></span>
            <div className="flex items-center gap-6">
              <NavLink
                to="questions"
                className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-red-600 after:transition-all after:duration-300 after:hover:w-full'
              >
                <div className="flex items-center">
                  <p>سوالی دارید؟</p>
                </div>
              </NavLink>
              <NavLink
                to="sell-in-digikala"
                className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-red-600 after:transition-all after:duration-300 after:hover:w-full'
              >
                <div className="flex items-center">
                  <p>در دیجی‌کالا بفروشید!</p>
                </div>
              </NavLink>
            </div>
          </nav>

          {/* Location */}
          <div className="relative flex items-center justify-end w-full max-w-[194px] text-[#3f4064] text-xs pl-4 pb-1 cursor-pointer group">
            <GrLocation className="w-4 h-4 ml-2" />
            <p>لطفا شهر خود را انتخاب کنید</p>
            <div className="absolute invisible group-hover:visible top-full py-4 px-3 rounded-md bg-[#3f4064] text-white text-xs">
              <p>لطفا شهر خود را انتخاب کنید</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
