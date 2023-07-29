import react from 'react';
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

  return (
    <div className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-[#e6123d] after:transition-all after:duration-300 after:hover:w-full'>
      {/* <div className="absolute bg-[#080a38] opacity-50 h-screen w-full z-10 top-0 left-0"></div> */}
      <div className="relative flex items-center gap-2 ml-2 hover:cursor-pointer group">
        <HiOutlineMenu className="w-4 h-4 text-black" />
        <p className="text-[#3F4064] text-[14px] font-Yekan-bold">
          دسته‌بندی کالاها
        </p>
        <div className="absolute bg-white h-[unset] hidden transition-all duration-300 w-[1639px] z-20 pointer-events-auto top-[31.5px] rounded-b-lg category-shadow group-hover:block">
          <div className="flex w-full h-full">
            <div className="h-full flex flex-col overflow-auto w-[200px] border-l-[1px] border-l-[#f1f2f4]">
              {mainCategory.map((category, i) => (
                <div key={i}>
                  <Link to={category.slug}>
                    <div className="py-3 px-2 w-full border-y border-y-transparent hover:border-y-[#f1f2f4] bg-white hover:bg-[#f1f2f4] bg-opacity-50 group1">
                      <div className="flex items-center">
                        <span className="text-xs font-Yekan-bold text-[#3f4064] group2">
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
                  <Link to={mainCategory[0].slug}>
                    <div className="flex items-center gap-1 mb-5">
                      <p className="text-xs font-Yekan-bold text-[#3f4064]">
                        همه محصولات <span>{mainCategory[0].name}</span>
                      </p>
                      <MdKeyboardArrowLeft className="w-4 h-4 text-[#3f4064]" />
                    </div>
                  </Link>
                  <ul className="h-[440px]"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
