import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsDot, BsThreeDotsVertical } from 'react-icons/bs';
import { ImGift, ImPaypal } from 'react-icons/im';
import { BiPlus, BiMinus, BiTrash, BiLogoPaypal } from 'react-icons/bi';
import { TbTrash } from 'react-icons/tb';
import { TbTruck } from 'react-icons/tb';
import { FaUserNurse } from 'react-icons/fa';
import { BiSave } from 'react-icons/bi';
import { RxDotFilled } from 'react-icons/rx';
import { FiInfo } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {
  MdKeyboardArrowLeft,
  MdOutlineShutterSpeed,
  MdSpeed,
} from 'react-icons/md';
import { HiOutlineLogin } from 'react-icons/hi';
import convertToPersian from '../../utils/convertToPersianNumber';
import { v4 as uuidv4 } from 'uuid';
import { BsXDiamond } from 'react-icons/bs';
import { useGetProductsQuery } from '../../api/apiSlice';
import {
  addProduct,
  removeFavoriteProduct,
  removeProduct,
} from '../../app/slices/userSlice';

function FavoriteListPage() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const activeUser = useSelector((state) => state.user.lastLoggedInUser);
  const dispatch = useDispatch();

  const handleRemoveFormFavorite = (id) => {
    dispatch(removeFavoriteProduct({ userId: activeUser.id, productId: id }));
    console.log(activeUser);
  };

  const productCountMap = activeUser?.favoriteProducts.reduce(
    (countMap, product) => {
      countMap[product.id] = (countMap[product.id] || 0) + 1;
      return countMap;
    },
    {}
  );

  const { data: products, isLoading, isError } = useGetProductsQuery();
  if (isLoading || isError) {
    return null;
  }

  return (
    <div className="Laptop-L:p-6 w-full max-w-[1280px] mx-auto hover:favorite-backdrop hover:cursor-pointer">
      <ul className="flex items-center w-full border-b Laptop-L:pt-0">
        <li
          className={`
            text-[#ef4056] font-Yekan-bold' : 'text-[#767790] Laptop-L:text-[15px] text-[13px] px-4 py-2 relative hover:cursor-pointer w-1/2 Laptop-L:w-auto text-center Laptop-L:text-start`}
        >
          لیست علاقه‌‌مندی
          <span className="absolute h-1 bg-[#ef4056] Laptop-L:w-[80%] w-[93%] left-[50%] -translate-x-[50%] bottom-0 rounded-t-xl"></span>
        </li>
      </ul>
      {/* Cart Page */}
      <div className="flex mb-4 flex-col gap-8 items-center pt-4">
        <div className="p-2 rounded-lg self-end flex items-center bg-[#0040FF] bg-opacity-5">
          <div className="flex items-center">
            <BiLogoPaypal className="w-6 h-6 text-[#0040FF]" />
            <span className="text-xs text-[#3f4064] mr-1 ml-4">
              با اﻋﺘﺒﺎر دﯾﺠﯽ‌ﭘﯽ، ﻗﺴﻄﯽ بخرید
            </span>
          </div>
          <div className="flex items-center">
            <p className="text-xs font-Yekan-bold text-[#0040ff]">
              درخواست اعتبار
            </p>
            <MdKeyboardArrowLeft className="w-6 h-6 text-[#0040ff]" />
          </div>
        </div>

        <div className="flex flex-wrap items-center">
          {activeUser &&
            Object.keys(productCountMap).map((productId, i) => {
              const product = products.find(
                (item) => item.id === parseInt(productId)
              );
              if (product) {
              }
              return (
                <div
                  key={i}
                  className={`Laptop:w-1/2 w-full flex flex-col border-b ${
                    activeUser.favoriteProducts.length === 1 &&
                    'w-full border-b border-l-0'
                  } ${i % 2 == 0 && 'border-l'} `}
                >
                  <img
                    className="w-[150px] h-[150px] mt-4 self-center"
                    src={product.thumbnail}
                    alt=""
                  />
                  <div className="h-[56px]"></div>
                  <p className="h-[56px] text-xs font-Yekan-bold text-[#3f4064] p-4 leading-7">
                    {product.name}
                  </p>
                  <div className="flex items-center p-4 mt-4 self-start gap-2">
                    <MdSpeed className="w-[18px] h-[18px] text-[#1028ff]" />
                    <p className="text-[11px] text-[#5a5c7a]">ارسال فردا</p>
                  </div>

                  <div className="flex items-center gap-2 self-end text-[#3f4064] px-9 py-4">
                    <span className="font-Yekan-bold">
                      {convertToPersian(product.price)}
                    </span>
                    <span className="text-xs text-[] font-Yekan-bold">
                      تومان
                    </span>
                  </div>
                  <div className="flex items-center mt-2 w-full p-4 gap-4">
                    <button
                      onClick={() => handleRemoveFormFavorite(product.id)}
                      className="flex items-center gap-2  text-[#767790] px-4 py-2 rounded-lg border border-[#e0e0e6] text-xs font-Yekan-bold"
                    >
                      <BiTrash className="w-6 h-6 text-[#9e9fb1]" />
                      حذف
                    </button>
                    <div className="w-full">
                      <Link to={`/product/${product.id}`}>
                        <button className="flex items-center justify-center border rounded-lg border-[#ef4056] text-xs font-Yekan-bold text-[#ef4056] w-full py-2">
                          <AiOutlineShoppingCart className="w-6 h-6 ml-2" />
                          اضافه به سبد
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default FavoriteListPage;
