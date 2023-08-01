import { useState } from 'react';
import {
  useGetCategoryQuery,
  useGetMainCategoryQuery,
} from '../../api/apiSlice';
import { HiOutlineMenu } from 'react-icons/hi';
import { BsPhone, BsAlipay } from 'react-icons/bs';
import { LuWrench, LuBaby, LuSofa } from 'react-icons/lu';
import { TbShirt, TbHeartbeat } from 'react-icons/tb';
import { MdKeyboardArrowLeft, MdOutlineNoFood } from 'react-icons/md';
import { FaCampground } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Category() {
  const [showSubCategory, setShowSubCategory] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('کالای دیجیتال');
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
    return;
  }

  const handleFilterSubCategory = (name) => {
    const filteredSubCategories = category.filter(
      (c) => c.mainCategory === name
    );
    setShowSubCategory(filteredSubCategories);
    setCurrentCategory(name);
  };

  return (
    <div
      onMouseEnter={() => {
        setShowMenu(true);
        document.body.classList.add('overflow-hidden');
      }}
      className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-[#e6123d] after:transition-all after:duration-300 after:hover:w-full py-2'
    >
      {showMenu && (
        <div className="absolute bg-[#080a38] opacity-50 h-screen w-full top-[11rem] left-0"></div>
      )}
      <div className="relative flex items-center gap-2 ml-2 hover:cursor-pointer group">
        <HiOutlineMenu className="w-4 h-4 text-black" />
        <p className="text-[#3F4064] text-[14px] font-Yekan-bold">
          دسته‌بندی کالاها
        </p>
        {showMenu && (
          <div
            onMouseEnter={() => {
              setShowMenu(true);
              document.body.classList.add('overflow-hidden');
            }}
            onMouseLeave={() => {
              setShowMenu(false);
              document.body.classList.remove('overflow-hidden');
            }}
            className="absolute bg-white h-[unset] transition-all duration-300 w-[1639px] z-20 pointer-events-auto top-[31.5px] rounded-b-lg category-shadow"
          >
            <div className="flex w-full h-full">
              <div className="h-full flex flex-col overflow-auto w-[200px] border-l-[1px] border-l-[#f1f2f4]">
                {mainCategory.map((category, i) => (
                  <div
                    onMouseEnter={() => handleFilterSubCategory(category.name)}
                    key={i}
                  >
                    <Link to={`main/${category.slug}`}>
                      <div className="py-3 px-2 w-full border-y border-y-transparent hover:border-y-[#f1f2f4] bg-white hover:bg-[#f1f2f4] bg-opacity-50 group1 text-[#3f4064] hover:text-[#e6123d]">
                        <div className="flex items-center">
                          <span className="text-xs font-Yekan-bold group2">
                            {category.name}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="p-5 overflow-auto grow">
                <div className="flex w-full h-full">
                  <div className="flex flex-col h-full grow">
                    <Link to={showSubCategory?.slug}>
                      <div className="flex items-center gap-1 mb-5">
                        <p className="text-xs font-Yekan-bold text-[#3f4064]">
                          همه محصولات
                          <span> {currentCategory}</span>
                        </p>
                        <MdKeyboardArrowLeft className="w-4 h-4 text-[#3f4064]" />
                      </div>
                    </Link>
                    <div className="h-[440px] flex flex-col flex-wrap">
                      {showSubCategory?.map((category) => (
                        <Link to={`/search/${category.slug}`}>
                          <div
                            className="flex flex-col gap-2"
                            key={category.id}
                          >
                            <div className="flex items-center mt-1 before:content-[' '] before:block before:h-4 before:w-[2px] before:bg-[#ef4056] before:ml-2">
                              <span className="text-sm font-Yekan-bold text-[#080a38]">
                                {category.name}
                              </span>
                              <MdKeyboardArrowLeft className="w-4 h-4 text-[#3f4064]" />
                            </div>
                            {category.subCategory && (
                              <ul className="flex flex-col">
                                {category.subCategory?.map((c) => (
                                  <Link to={`/search/${c.slug}`}>
                                    <li className="text-xs text-[#767790] hover:text-[#e6123d] my-2">
                                      {c.name}
                                    </li>
                                  </Link>
                                ))}
                              </ul>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
