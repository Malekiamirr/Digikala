import {
  useGetCategoryQuery,
  useGetMainCategoryQuery,
} from '../../api/apiSlice';

import { Link } from 'react-router-dom';

import { useState } from 'react';

import {
  MdOutlineNoFood,
  MdOutlineDiscount,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
} from 'react-icons/md';
import { TbDiscount2 } from 'react-icons/tb';
import { AiOutlineFire } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import { TbSmartHome } from 'react-icons/tb';

function Sidebar({ isOpen, toggleOpen }) {
  const [showSubCategory, setShowSubCategory] = useState(null);
  const [showSubSubCategory, setShowSubSubCategory] = useState(null);

  const {
    data: category,
    isLoading: catecoryIsLoading,
    isError: categoryIsError,
  } = useGetCategoryQuery();
  const {
    data: mainCategory,
    isLoading: mainCatecoryIsLoading,
    isErroe: mainCategoryIsError,
  } = useGetMainCategoryQuery();

  if (
    catecoryIsLoading ||
    categoryIsError ||
    mainCatecoryIsLoading ||
    mainCategoryIsError
  ) {
    return <div></div>;
  }

  const handleShowSubCategory = (name) => {
    if (showSubCategory && showSubCategory[0]?.mainCategory === name) {
      setShowSubCategory(null);
    } else {
      const filteredSubCategories = category?.filter(
        (c) => c.mainCategory === name
      );
      setShowSubCategory(filteredSubCategories);
    }
  };

  return (
    <>
      <div
        onClick={toggleOpen}
        className={`fixed right-0 top-0 z-[2] bg-[#080a38] bg-opacity-50 w-[100vw] h-[100vh] duration-300 transition-opacity Laptop-L:hidden ${
          !isOpen && 'opacity-0 -z-50'
        } ${!isOpen && 'pointer-events-none'}`}
      ></div>
      <div
        className={`fixed top-0 z-10 h-full overflow-x-hidden overflow-y-auto sidebar-scroolbar bg-white pb-7 right-0 w-[312px] transform transition-transform duration-300 ease-in-out Laptop-L:hidden ${
          !isOpen ? 'translate-x-[400px]' : 'translate-x-0'
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <div
            onClick={toggleOpen}
            className="mx-5 mb-1 py-5 border-b border-b-[#f1f2f4] flex items-center"
          >
            <img
              src="https://www.digikala.com/statics/img/svg/digi.svg"
              alt="logo"
              className="object-contain h-[24px]"
            />
          </div>
        </Link>

        {/* Diferent Pages */}
        <div className="flex flex-col gap-6 mt-6">
          <div onClick={toggleOpen}>
            <Link to="/incredible-offers">
              <a className="px-5 text-[#3f4064] hover:cursor-pointer break-words flex items-center justify-between">
                <div className="flex items-center grow text-[#3f4064]">
                  <TbDiscount2 className="w-6 h-6 ml-4 text-[#9e9fb1]" />
                  <p className="text-[13px] font-Yekan-bold text-[#3f4064]">
                    شگفت‌انگیزها
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div onClick={toggleOpen}>
            <Link to="/main/food-beverage">
              <a className="px-5 text-[#3f4064] hover:cursor-pointer break-words flex items-center justify-between">
                <div className="flex items-center grow text-[#3f4064]">
                  <MdOutlineNoFood className="w-6 h-6 ml-4 text-[#9e9fb1]" />
                  <p className="text-[13px] font-Yekan-bold text-[#3f4064]">
                    سوپرمارکت
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div onClick={toggleOpen}>
            <Link to="/best-selling">
              <a className="px-5 text-[#3f4064] hover:cursor-pointer break-words flex items-center justify-between">
                <div className="flex items-center grow text-[#3f4064]">
                  <AiOutlineFire className="w-6 h-6 ml-4 text-[#9e9fb1]" />
                  <p className="text-[13px] font-Yekan-bold text-[#3f4064]">
                    پرفروش‌ترین‌ها
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div onClick={toggleOpen}>
            <Link to="/promotion-center">
              <a className="px-5 text-[#3f4064] hover:cursor-pointer break-words flex items-center justify-between">
                <div className="flex items-center grow text-[#3f4064]">
                  <MdOutlineDiscount className="w-6 h-6 ml-4 text-[#9e9fb1]" />
                  <p className="text-[13px] font-Yekan-bold text-[#3f4064]">
                    تخفیف‌ها و پیشنهادها
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div onClick={toggleOpen}>
            <a
              href="https://www.digikala.com/faq/"
              className="px-5 text-[#3f4064] hover:cursor-pointer break-words flex items-center justify-between"
            >
              <div className="flex items-center grow text-[#3f4064]">
                <BsQuestionCircle className="w-6 h-6 ml-4 text-[#9e9fb1]" />
                <p className="text-[13px] font-Yekan-bold text-[#3f4064]">
                  سوالی دارید؟
                </p>
              </div>
            </a>
          </div>
          <div onClick={toggleOpen}>
            <a
              href="https://www.digikala.com/landings/seller-introduction/"
              className="px-5 text-[#3f4064] hover:cursor-pointer break-words flex items-center justify-between"
            >
              <div className="flex items-center grow text-[#3f4064]">
                <TbSmartHome className="w-6 h-6 ml-4 text-[#9e9fb1]" />
                <p className="text-[13px] font-Yekan-bold text-[#3f4064]">
                  در دیجی‌کالا بفروشید!
                </p>
              </div>
            </a>
          </div>

          {/* border */}
          <div className="mx-5 mt-2 mb-1 border-t border-t-[#f1f2f4]"></div>
        </div>

        {/* Grouping */}
        <p className="my-4 pr-5 text-sm font-Yekan-bold text-[#080a38]">
          دسته‌بندی کالاها
        </p>

        <div className="flex flex-col gap-5">
          {mainCategory.map((category) => (
            <div key={category.id}>
              <div
                onClick={() => handleShowSubCategory(category.name)}
                className={`px-5 hover:cursor-pointer break-words flex items-center justify-between text-[#3f4064] ${
                  showSubCategory &&
                  showSubCategory[0]?.mainCategory === category.name &&
                  'text-[#ef394e]'
                }`}
              >
                <div className="flex items-center grow">
                  <span className="text-[13px] font-Yekan-bold">
                    {category.name}
                  </span>
                </div>
                <MdKeyboardArrowDown
                  className={`w-6 h-6 transform transition-all duration-300 ${
                    showSubCategory &&
                    showSubCategory[0]?.mainCategory === category.name &&
                    ' rotate-180'
                  }`}
                />
              </div>

              {showSubCategory &&
                showSubCategory[0]?.mainCategory === category.name && (
                  <div className="bg-[#f1f2f4] border-b border-b-[#f1f2f4] mt-2 pb-2">
                    <div className="pr-5 flex flex-col gap-5">
                      <div onClick={toggleOpen}>
                        <Link to={`main/${category.slug}`}>
                          <a className="px-5">
                            <div className="flex items-center grow">
                              <span className="text-[#9e9fb1] text-xs font-Yekan-bold">
                                همه موارد این دسته
                              </span>
                              <MdKeyboardArrowLeft className="w-4 h-4 text-[#9e9fb1]" />
                            </div>
                          </a>
                        </Link>
                      </div>
                      {showSubCategory &&
                        showSubCategory[0]?.mainCategory === category.name &&
                        showSubCategory?.map((c, i) => (
                          <div key={i}>
                            <div
                              onClick={() => {
                                showSubSubCategory === c.name
                                  ? setShowSubSubCategory(null)
                                  : setShowSubSubCategory(c.name);
                              }}
                              className="px-5 hover:cursor-pointer"
                            >
                              <div
                                className={`flex items-center transition-all duration-300 justify-between grow text-[#3f4064] ${
                                  showSubSubCategory === c.name &&
                                  'text-[#ef394e]'
                                }`}
                              >
                                <span className=" text-[13px] font-Yekan-bold">
                                  {c.name}
                                </span>
                                <MdKeyboardArrowDown
                                  className={`w-6 h-6 transform duration-300 transition-all ${
                                    showSubSubCategory === c.name &&
                                    'rotate-180'
                                  }`}
                                />
                              </div>
                            </div>
                            {showSubSubCategory === c.name && (
                              <div onClick={toggleOpen} className="px-10">
                                <Link to={`${c.slug}`}>
                                  <a className="px-5">
                                    <div className="flex items-center grow">
                                      <span className="text-[#9e9fb1] text-xs font-Yekan-bold">
                                        همه موارد این دسته
                                      </span>
                                      <MdKeyboardArrowLeft className="w-4 h-4 text-[#9e9fb1]" />
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            )}
                            {showSubSubCategory === c.name && (
                              <div className="flex flex-col gap-5">
                                {c.subCategory.map((subCategory) => (
                                  <Link to={`/search/${subCategory.slug}`}>
                                    <div
                                      onClick={toggleOpen}
                                      className="px-10 text-xs text-[#3f4064]"
                                    >
                                      {subCategory.name}
                                    </div>
                                  </Link>
                                ))}
                                <div className="mt-2 mx-5 pb-1 border-t border-t-[#e0e0e6]"></div>
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
