import react from 'react';
import { useGetCategoryQuery, useGetMainCategoryQuery } from "../../api/apiSlice";
import { HiOutlineMenu } from "react-icons/hi";
import {BsPhone, BsAlipay} from "react-icons/bs";
import {LuWrench, LuBaby, LuSofa} from "react-icons/lu";
import {TbShirt, TbHeartbeat} from "react-icons/tb";
import {MdOutlineNoFood} from "react-icons/md"
import {FaCampground} from "react-icons/fa";

function Category() {
  const {data:category, isLoading:catecoryIsLoading, isError:categoryIsError} = useGetCategoryQuery();
  const {data:mainCategory, isLoading:mainCatecoryIsLoading, isErroe:mainCategoryIsError} = useGetMainCategoryQuery();

  if (catecoryIsLoading || categoryIsError || mainCatecoryIsLoading || mainCategoryIsError) {
    return;
  }

  return (
    <div
      className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-[#e6123d] after:transition-all after:duration-300 after:hover:w-full'
    >
      <div className='relative flex items-center gap-2 ml-2 hover:cursor-pointer'>
        <HiOutlineMenu className='w-4 h-4 text-black' />
        <p className='text-[#3F4064] text-[14px] font-Yekan-bold'>
          دسته‌بندی کالاها
        </p>
        {/* <div className="absolute bg-white shadow-xl top-8">
          {mainCategory.map(mc=> <div className="px-2 py-3 w-[175.26px] font-Yekan-bold hover:text-[#e6123d] hover:bg-[#eee]" key={mc.id}>
            <p>{mc.name}</p>
            </div>) }
        </div> */}
      </div>
    </div>
  );
}

export default Category;
