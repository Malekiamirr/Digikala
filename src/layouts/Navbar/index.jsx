// Images
import logo from '../../assets/imgs/logo.svg';

import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import { useScroll } from '../../hooks/useScroll';
import { useDispatch, useSelector } from 'react-redux';

import {
  Category,
  ProfileMenu,
  SearchBox,
  Sidebar,
} from '../../components/index';
import { NavLink } from 'react-router-dom';

// Icons
import { LuShoppingCart } from 'react-icons/lu';
import { GrLocation, GrCircleQuestion } from 'react-icons/gr';
import { FaUserNurse } from 'react-icons/fa';
import { TbDiscount2 } from 'react-icons/tb';
import { RxDotFilled } from 'react-icons/rx';
import {
  MdKeyboardArrowLeft,
  MdOutlineDiscount,
  MdOutlineNoFood,
  MdOutlineShutterSpeed,
} from 'react-icons/md';
import {
  HiOutlineUser,
  HiOutlineLogin,
  HiOutlineMenu,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { BiCaretRight, BiPlus, BiSave, BiTrash, BiMinus } from 'react-icons/bi';
import { AiOutlineFire } from 'react-icons/ai';
import { TbTruck } from 'react-icons/tb';
import convertToPersian from '../../utils/convertToPersianNumber';
import { useGetProductsQuery } from '../../api/apiSlice';
import { addProduct, removeProduct } from '../../app/slices/userSlice';

function Navbar() {
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const activeUser = useSelector((state) => state.user.lastLoggedInUser);

  const productCountMap = activeUser?.cart.reduce((countMap, product) => {
    countMap[product.id] = (countMap[product.id] || 0) + 1;
    return countMap;
  }, {});

  const toggleOpenSearchBox = (what) => setOpenSearchBox(what);
  const toggleShowProfileMenu = (which) => setShowProfileMenu(which);
  const toggleShowSidebar = () => setShowSidebar(!showSidebar);
  const handleAddProduct = (product) => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      dispatch(addProduct({ userId: activeUser.id, product: product }));
      console.log(activeUser);
    }
  };

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct({ userId: activeUser.id, productId: product.id }));
    console.log(activeUser);
  };

  const { y, x, scrollDirection } = useScroll();
  const dispatch = useDispatch();
  const { data: products, isLoading, isError } = useGetProductsQuery();
  if (isLoading || isError) {
    return null;
  }

  return (
    <>
      <div
        onClick={() => {
          if (showProfileMenu) {
            setShowProfileMenu(false);
          }
        }}
        className={`pb-3 bg-white ${
          scrollDirection === 'down' ? '' : 'shadow-sm shadow-gray-300'
        }`}
      >
        {/* Navbar Image */}
        <div
          onClick={() => toggleOpenSearchBox(false)}
          className="hidden w-full Laptop-L:block"
        >
          <img
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/2e7c79bb2031d1a2f5a3530b7c0bf5c342394aee_1689489380.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="navbar image"
            className="h-[60px] w-full aspect-[3/2] object-cover hover:cursor-pointer"
          />
        </div>

        {/* Navbar Details */}

        <div className="container flex flex-col items-start px-1 Laptop-L:gap-5 Laptop-L:pt-3 Laptop-L:flex-row">
          <div className="flex items-center justify-between w-full px-3 pt-2 pb-3 Laptop-L:hidden border-b border-b-[#f1f2f4]">
            <HiOutlineMenu
              onClick={() => {
                toggleShowSidebar();
                toggleOpenSearchBox(false);
              }}
              className="w-5 h-5 text-black Laptop-L:hidden hover:cursor-pointer"
            />
            <img src={logo} alt="logo" className="mt-2 w-[5.75rem] h-6" />
            <GrCircleQuestion className="w-6 h-6 text-black Laptop-L:hidden" />
          </div>

          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="hidden mt-2 Laptop-L:block hover:cursor-pointer"
            />{' '}
          </Link>

          {/* Search box && Account Details*/}
          <div className="flex items-center justify-between w-full gap-4 pt-2 pr-3 Laptop-L:pt-0 Laptop-L:px-0 border-b border-b-[#f1f2f4] Laptop-L:border-none pb-2 Laptop-L:pb-0">
            <SearchBox
              handleClick={() => toggleOpenSearchBox(true)}
              openSearchBox={openSearchBox}
            />
            {/* Shoping && Account */}
            <div
              onClick={() => toggleOpenSearchBox(false)}
              className="flex items-center justify-center gap-4 Laptop-L:gap-2 Laptop-L:-mt-2"
            >
              <div
                onClick={() => toggleShowProfileMenu(!showProfileMenu)}
                className="relative flex items-center justify-center gap-1 p-2 transition-all rounded-md cursor-pointer"
              >
                {isLoggedIn ? (
                  // Account Icons
                  <>
                    <HiOutlineUser className="w-6 h-6 text-[#3f4064] stroke-2" />
                    <BiCaretRight className="hidden Laptop-L:block w-4 h-4 rotate-90 text-[#3f4064]" />
                    <div
                      className={`${
                        showProfileMenu && 'Laptop-L:block'
                      } hidden absolute top-[100%] left-0 pb-2 rounded-lg bg-white w-[256px] profile-menu-box-shadow z-10`}
                    >
                      <ProfileMenu activeUser={activeUser} />
                    </div>
                  </>
                ) : (
                  // Login icons
                  // For Laptop-L and larger
                  <>
                    <Link to="login">
                      <div className="hidden Laptop-L:flex items-center gap-2 text-[##080a38] px-4 py-2 border rounded-lg border-[#e0e0e6]">
                        <HiOutlineLogin className="w-6 h-6" />
                        <p className="text-xs font-Yekan-bold">
                          ورود | ثبت‌نام
                        </p>
                      </div>
                    </Link>

                    {/* For Laptop and smaller */}
                    <Link to="login">
                      <div className="flex Laptop-L:hidden items-center gap-2 text-[##080a38]">
                        <HiOutlineLogin className="w-6 h-6" />
                        <p className="text-xs font-Yekan-bold">ورود</p>
                      </div>
                    </Link>
                  </>
                )}
              </div>

              {/* Divider */}
              <span className="hidden Laptop-L:block h-6 w-px bg-[#E0E0E6] mx-1"></span>

              {/* Shop Basket icons */}
              <div className="relative p-3 rounded-md Laptop-L:hover:bg-[#FDEBED] transition-all cursor-pointer group">
                <Link to="checkout/cart">
                  <LuShoppingCart className="w-6 h-6 text-[#3f4064]" />
                </Link>
                {isLoggedIn && (
                  <p
                    className={`${
                      activeUser?.cart.length > 0 ? '' : 'hidden'
                    } flex justify-center items-center w-5 h-5 absolute bottom-0 -right-1 bg-[#EF4056] text-white text-xs text-center font-Yekan-medium rounded-md border-2 border-white`}
                  >
                    {activeUser && convertToPersian(activeUser.cart.length)}
                  </p>
                )}

                {/* Mini basket */}
                {isLoggedIn && activeUser.cart.length > 0 && (
                  <div
                    className={`group-hover:opacity-100 group-hover:z-50 -z-50 opacity-0 pointer-events-none group-hover:pointer-events-auto rounded-lg absolute left-0 top-full w-[400px] mini-cart-shadow bg-white transition-opacity duration-300`}
                  >
                    {/* Header */}
                    <div className="px-3 py-2 flex items-center justify-between">
                      <span className="text-xs text-[#5a5c7a]">
                        {convertToPersian(activeUser.cart.length)} کالا
                      </span>
                      <Link to={'/checkout/cart'}>
                        <div className="flex items-center mr-auto text-xs font-Yekan-bold text-[#19bfd3]">
                          <span>مشاهده‌ی سبد خرید</span>
                          <MdKeyboardArrowLeft className="w-5 h-5 text-[#19bfd3]" />
                        </div>
                      </Link>
                    </div>
                    {/* Show Products */}
                    <div className="overflow-auto max-h-[360px]">
                      {activeUser &&
                        Object.keys(productCountMap).map((productId) => {
                          const product = products.find(
                            (item) => item.id === parseInt(productId)
                          );
                          if (product) {
                            return (
                              <div
                                key={uuidv4()}
                                className="mx-3 py-4 border-b border-[#f1f2f4]"
                              >
                                <div className="grid grid-cols-116px-1fr gap-6">
                                  {/* Product Image */}
                                  <div className="flex flex-col items-center">
                                    <Link to={`product/${product.id}`}>
                                      <div className="w-[114px] h-[114px]">
                                        <img
                                          src={product.thumbnail}
                                          alt="product"
                                          className="w-full h-full"
                                        />
                                      </div>
                                    </Link>
                                    <div className="flex items-center py-2 mt-2 flex-col"></div>
                                  </div>
                                  {/* Product Description */}
                                  <div className="overflow-hidden">
                                    <div>
                                      <h3 className="mb-2 text-sm font-Yekan-bold leading-7 text-[#23254e]">
                                        {product.name}
                                      </h3>
                                      <div>
                                        <div className="flex items-center">
                                          <BiSave className="w-[18px] h-[18px] text-[#19bfd3] ml-2" />
                                          <p className="text-xs text-[#5a5c7a] mr-2 my-1">
                                            موجود در انبار فروشنده و دیجی‌کالا
                                          </p>
                                        </div>
                                        <div className="flex items-center mt-2">
                                          <div className="relative flex flex-col items-center">
                                            <span className="w-[2px] h-2 bg-[#e0e0e6] absolute bottom-[15px]"></span>
                                            <RxDotFilled className="w-5 h-5 text-[#19bfd3]" />
                                          </div>
                                          <p className="text-xs text-[#5a5c7a] mr-2 my-2 flex items-center gap-2">
                                            <TbTruck className="text-[#e6123d] w-4 h-4" />
                                            ارسال دیجی‌کالا
                                          </p>
                                        </div>

                                        <div className="flex items-center">
                                          <div className="relative flex flex-col items-center">
                                            <span className="w-[2px] h-4 bg-[#e0e0e6] absolute bottom-[15px]"></span>
                                            <RxDotFilled className="w-5 h-5 text-[#19bfd3]" />
                                          </div>
                                          <p className="text-xs text-[#5a5c7a] mr-2 my-2 flex items-center gap-2">
                                            <FaUserNurse className="text-[#d86b00] w-4 h-4" />
                                            ارسال فروشنده
                                          </p>
                                        </div>

                                        <div className="flex items-center">
                                          <div className="relative flex flex-col items-center">
                                            <span className="w-[2px] h-4 bg-[#e0e0e6] absolute bottom-[15px]"></span>
                                            <RxDotFilled className="w-5 h-5 text-[#19bfd3]" />
                                          </div>
                                          <p className="text-xs text-[#5a5c7a] mr-2 my-2 flex items-center gap-2">
                                            <MdOutlineShutterSpeed className="text-[#1028ff] w-4 h-4" />
                                            ارسال فوری (شهر تهران)
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Add & Remove button */}
                                  <div>
                                    <div className="flex items-center gap-4 mt-2">
                                      <div className="w-[102px] min-w-[102px] min-h-[44px] max-h-[44px] px-2 bg-white bg-opacity-40 addToCartButton-shadow font-Yekan-bold text-[#ef4056] rounded-lg flex gap-2 items-center justify-between">
                                        <BiPlus
                                          onClick={() =>
                                            handleAddProduct(product)
                                          }
                                          className={`${
                                            productCountMap[productId] === 2 &&
                                            'opacity-30 hover:cursor-auto pointer-events-none'
                                          } w-[18px] h-[18px] hover:cursor-pointer`}
                                        />
                                        <div className="flex flex-col items-center">
                                          <span>
                                            {convertToPersian(
                                              productCountMap[productId]
                                            )}
                                          </span>
                                          {productCountMap[productId] === 2 && (
                                            <span className="text-[11px] text-[#c3c3ce]">
                                              حداکثر
                                            </span>
                                          )}
                                        </div>
                                        {productCountMap[productId] > 1 ? (
                                          <BiMinus
                                            onClick={() =>
                                              handleRemoveProduct(product)
                                            }
                                            className={`w-[18px] h-[18px] hover:cursor-pointer`}
                                          />
                                        ) : (
                                          <BiTrash
                                            onClick={() =>
                                              handleRemoveProduct(product)
                                            }
                                            className="w-[18px] h-[18px] hover:cursor-pointer"
                                          />
                                        )}
                                      </div>
                                    </div>
                                  </div>

                                  {/* price */}
                                  <div>
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <div className="flex items-center justify-start ml-4 gap-1">
                                          <span className="text-[19px] font-Yekan-bold text-[#23254e]">
                                            {convertToPersian(product.price)}
                                          </span>
                                          <span className="font-Yekan-bold text-xs text-[#23254e]">
                                            تومان
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex items-center flex-row-reverse"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          } else return null;
                        })}
                    </div>

                    {/* Total Price */}
                    <div className="flex items-center py-2 px-3 border-t border-t-[#f1f2f4]">
                      <div className="flex flex-col h-full justify-between ml-auto">
                        <p className="text-[11px] text-[#767790] my-2">
                          مبلغ قابل پرداخت
                        </p>
                        <div>
                          <div className="flex items-center justify-start gap-2">
                            <span>
                              {convertToPersian(
                                activeUser.cart.reduce(
                                  (acc, curr) => acc + parseFloat(curr.price),
                                  0
                                )
                              )}
                            </span>
                            <span className="font-Yekan-bold text-xs text-[#23254e]">
                              تومان
                            </span>
                          </div>
                        </div>
                      </div>
                      <Link to="checkout/cart">
                        <button className="rounded-lg px-4 py-3 h-12 text-white bg-[#ef4056] text-sm font-Yekan-bold">
                          ثبت سفارش
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div
          onClick={() => toggleOpenSearchBox(false)}
          className="flex items-center justify-between w-full px-4 mt-2 Laptop-L:hidden"
        >
          <div className=" flex items-center text-[#3f4064] text-[11px] cursor-pointer ">
            <HiOutlineLocationMarker className="w-5 h-5 ml-2 text-[#f9a828]" />
            <p>لطفا شهر خود را انتخاب کنید</p>
          </div>
          <IoIosArrowBack className="ml-1 text-lg" />
        </div>
      </div>

      {/* Categories */}
      <div
        onClick={() => toggleOpenSearchBox(false)}
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
                to="incredible-offers"
                className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-[#ef394e] after:hover:w-full'
              >
                <div className="flex items-center gap-1">
                  <TbDiscount2 className="w-4 h-4 text-[#9e9fb1]" />
                  <p>شگفت‌انگیزها</p>
                </div>
              </NavLink>
              <NavLink
                to="main/food-beverage"
                className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-[#ef394e] after:hover:w-full'
              >
                <div className="flex items-center gap-1">
                  <MdOutlineNoFood className="w-4 h-4 text-[#9e9fb1]" />
                  <p>سوپرمارکت</p>
                </div>
              </NavLink>
              <NavLink
                to="best-selling"
                className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-[#ef394e] after:hover:w-full'
              >
                <div className="flex items-center gap-1">
                  <AiOutlineFire className="w-4 h-4 text-[#9e9fb1]" />
                  <p>پرفروش‌ترین‌ها</p>
                </div>
              </NavLink>
              <NavLink
                to="promotion-center"
                className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-[#ef394e] after:hover:w-full'
              >
                <div className="flex items-center gap-1">
                  <MdOutlineDiscount className="w-4 h-4 text-[#9e9fb1]" />
                  <p>تخفیف‌ها و پیشنهادها</p>
                </div>
              </NavLink>
            </div>

            <span className="w-px h-4 bg-[#E0E0E6]"></span>
            <div className="flex items-center gap-6">
              <a
                href="https://www.digikala.com/faq/"
                className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-[#ef394e] after:hover:w-full'
              >
                <div className="flex items-center">
                  <p>سوالی دارید؟</p>
                </div>
              </a>
              <a
                href="https://www.digikala.com/landings/seller-introduction/"
                className='after:content-[" "] after:block after:w-0 after:h-[2px] after:mt-1 after:bg-[#ef394e] after:hover:w-full'
              >
                <div className="flex items-center">
                  <p>در دیجی‌کالا بفروشید!</p>
                </div>
              </a>
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

      {/* Sidebar menu */}
      <Sidebar isOpen={showSidebar} toggleOpen={toggleShowSidebar} />
    </>
  );
}

export default Navbar;
