import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsDot, BsThreeDotsVertical } from 'react-icons/bs';
import { ImGift, ImPaypal } from 'react-icons/im';
import { BiPlus, BiMinus, BiTrash } from 'react-icons/bi';
import { TbTrash } from 'react-icons/tb';
import { TbTruck } from 'react-icons/tb';
import { FaUserNurse } from 'react-icons/fa';
import { BiSave } from 'react-icons/bi';
import { RxDotFilled } from 'react-icons/rx';
import { FiInfo } from 'react-icons/fi';
import { MdKeyboardArrowLeft, MdOutlineShutterSpeed } from 'react-icons/md';
import { HiOutlineLogin } from 'react-icons/hi';
import convertToPersian from '../../utils/convertToPersianNumber';
import { v4 as uuidv4 } from 'uuid';
import { BsXDiamond } from 'react-icons/bs';
import { useGetProductsQuery } from '../../api/apiSlice';
import { addProduct, removeProduct } from '../../app/slices/userSlice';

function CartPage() {
  const [whichPage, setWhichPage] = useState({ cart: true, nextCart: false });
  const handleWhichPage = (which) => {
    if (which === 'cart') {
      setWhichPage({ cart: true, nextCart: false });
    } else {
      setWhichPage({ cart: false, nextCart: true });
    }
  };
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const activeUser = useSelector((state) => state.user.lastLoggedInUser);

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

  const productCountMap = activeUser?.cart.reduce((countMap, product) => {
    countMap[product.id] = (countMap[product.id] || 0) + 1;
    return countMap;
  }, {});

  const { data: products, isLoading, isError } = useGetProductsQuery();
  if (isLoading || isError) {
    return null;
  }

  return (
    <div className="Laptop-L:p-6 w-full max-w-[1280px] mx-auto">
      <ul className="flex items-center w-full border-b Laptop-L:pt-0">
        <li
          onClick={() => handleWhichPage('cart')}
          className={`${
            whichPage.cart ? 'text-[#ef4056] font-Yekan-bold' : 'text-[#767790]'
          } Laptop-L:text-[15px] text-[13px] px-4 py-2 relative hover:cursor-pointer w-1/2 Laptop-L:w-auto text-center Laptop-L:text-start`}
        >
          سبد خرید
          {whichPage.cart && (
            <span className="absolute h-1 bg-[#ef4056] Laptop-L:w-[80%] w-[93%] left-[50%] -translate-x-[50%] bottom-0 rounded-t-xl"></span>
          )}
        </li>
        <li
          onClick={() => handleWhichPage('nextCart')}
          className={`${
            whichPage.nextCart
              ? 'text-[#ef4056] font-Yekan-bold'
              : 'text-[#767790]'
          } Laptop-L:text-[15px] text-[13px] px-4 py-2 relative hover:cursor-pointer w-1/2 Laptop-L:w-auto text-center Laptop-L:text-start`}
        >
          خرید بعدی
          {whichPage.nextCart && (
            <span className="absolute h-1 bg-[#ef4056] Laptop-L:w-[80%] w-[93%] left-[50%] -translate-x-[50%] bottom-0 rounded-t-xl"></span>
          )}
        </li>
      </ul>
      {/* Cart Page */}
      {whichPage.cart && (
        <div className="relative">
          <div className="pb-3">
            {/* Digi-Plus */}
            {isLoggedIn && (
              <div className="flex flex-col Laptop-L:flex-row gap-4 mt-4 relative">
                <div
                  className={`px-2 py-1 border-y Laptop-L:border-none bg-white Laptop-L:px-0 grow ${
                    activeUser.cart.length === 0 && 'w-full'
                  }`}
                >
                  <div className="pt-4 border border-[#b12ba4] rounded-lg flex relative overflow-hidden bg-white">
                    <div className="flex flex-col w-full Laptop-L:w-1/2">
                      <div className="mr-5">
                        <img
                          className="w-[93px] h-[24px]"
                          src="https://www.digikala.com/statics/img/svg/digiplus/digiplus-purple.svg"
                          alt="digi-plus"
                        />
                      </div>
                      <div className="mr-5">
                        <p className="py-4 text-[13px] Laptop-L:text-[15px] font-Yekan-bold text-[#3f4064]">
                          خدمات ویژه با اشتراک دیجی‌پلاس
                        </p>
                      </div>

                      <div className="pb-4 mr-3 Laptop-L:hidden">
                        <ul className="flex flex-col gap-2">
                          <li className="flex items-center">
                            <BsDot className="w-6 h-6 text-[#b12ba4]" />
                            <h3 className="pr-2 text-[11px] text-[#767790] leading-6">
                              ارسال رایگان این سفارش و ۳ سفارش دیگر (در هرماه
                              اشتراک)
                            </h3>
                          </li>
                          <li className="flex items-center">
                            <BsDot className="w-6 h-6 text-[#b12ba4]" />
                            <h3 className="pr-2 text-[11px] text-[#767790] leading-6">
                              مهلت بیشتر مرجوعی کالا تا ۳۰ روز (جز موبایل و
                              کالای بهداشتی)
                            </h3>
                          </li>
                        </ul>
                      </div>

                      <div className="mb-4 mr-5">
                        <button className="px-4 text-xs font-Yekan-bold py-2 bg-[#b12ba4] text-white rounded-lg flex items-center">
                          دریافت این خدمات ویژه
                          <MdKeyboardArrowLeft className="w-6 h-6 mr-2" />
                        </button>
                      </div>
                    </div>

                    <div className="hidden Laptop-L:block">
                      <ul className="flex flex-col">
                        <li className="flex items-center">
                          <BsDot className="w-6 h-6 text-[#b12ba4]" />
                          <h3 className="pr-2 text-[11px] text-[#767790]">
                            ارسال رایگان این سفارش و ۳ سفارش دیگر (در هرماه
                            اشتراک)
                          </h3>
                        </li>
                        <li className="flex items-center">
                          <BsDot className="w-6 h-6 text-[#b12ba4]" />
                          <h3 className="pr-2 text-[11px] text-[#767790]">
                            مهلت بیشتر مرجوعی کالا تا ۳۰ روز (جز موبایل و کالای
                            بهداشتی)
                          </h3>
                        </li>
                      </ul>
                    </div>

                    <div className="absolute top-0 left-0">
                      <img
                        src="https://www.digikala.com/statics/img/svg/digiplus/digiplus-purple-pattern.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  {activeUser.cart.length > 0 && (
                    <div className="border border-[#e0e0e6] rounded-lg mt-4">
                      <div className="overflow-hidden">
                        {/* Header */}
                        <div className="px-6 whitespace-pre-wrap">
                          <div className="w-full break-words py-3 space-y-2">
                            <div className="flex items-center justify-between">
                              <p className="text-[#080a38] font-Yekan-bold">
                                سبد خرید شما
                              </p>
                              <BsThreeDotsVertical className="w-6 h-6 text-[#9e9fb1] hover:cursor-pointer" />
                            </div>
                            <div className="text-xs text-[#767790]">
                              {convertToPersian(activeUser?.cart.length)} کالا
                            </div>
                          </div>
                        </div>

                        <div className="">
                          {activeUser &&
                            Object.keys(productCountMap).map((productId) => {
                              const product = products.find(
                                (item) => item.id === parseInt(productId)
                              );
                              return (
                                <div
                                  key={uuidv4()}
                                  className="mx-3 py-4 border-b border-[#f1f2f4]"
                                >
                                  <div className="flex flex-col Tablet:grid grid-cols-116px-1fr gap-6">
                                    {/* Product Image */}
                                    <div className="flex flex-col items-center">
                                      <Link to={`product/${product.id}`}>
                                        <div className="w-[114px] h-[114px]">
                                          <img
                                            src={product.thumbnail}
                                            alt="product"
                                            className="w-full h-full mix-blend-multiply"
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
                                    <div className="">
                                      <div className="flex items-center gap-4 mt-2">
                                        <div className="w-[102px] min-w-[102px] min-h-[44px] max-h-[44px] px-2 bg-white bg-opacity-40 addToCartButton-shadow font-Yekan-bold text-[#ef4056] rounded-lg flex gap-2 items-center justify-between">
                                          <BiPlus
                                            onClick={() =>
                                              handleAddProduct(product)
                                            }
                                            className={`${
                                              productCountMap[productId] ===
                                                2 &&
                                              'opacity-30 hover:cursor-auto pointer-events-none'
                                            } w-[18px] h-[18px] hover:cursor-pointer`}
                                          />
                                          <div className="flex flex-col items-center">
                                            <span>
                                              {convertToPersian(
                                                productCountMap[productId]
                                              )}
                                            </span>
                                            {productCountMap[productId] ===
                                              2 && (
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
                                    <div className="mb-3 Laptop-L:mb-0">
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
                            })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {activeUser?.cart.length > 0 && (
                  <div className=" Laptop-L:w-[300px] px-5 py-2 Laptop-L:px-0 Laptop-L:py-0">
                    <div className="pt-2 rounded-lg Laptop-L:border border-[#e0e0e6] h-min">
                      <div className="Laptop-L:px-5 px-2 flex flex-col gap-2 Laptop-L:gap-6 ">
                        <div className="flex items-center justify-between pt-3 text-[#5a5c7a] text-xs font-Yekan-bold">
                          <span>
                            قیمت کالا ها (
                            {convertToPersian(activeUser?.cart.length)})
                          </span>
                          <div className="flex items-center text-[15px] font-Yekan-bold text-[#5a5c7a] gap-1">
                            <span>
                              {convertToPersian(
                                activeUser?.cart.reduce(
                                  (acc, curr) => acc + parseFloat(curr.price),
                                  0
                                )
                              )}
                            </span>
                            <span className="font-Yekan-bold text-xs text-[#5a5c7a]">
                              تومان
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-3 text-[#23254e] text-xs font-Yekan-bold">
                          <span>جمع سبد خرید</span>
                          <div className="flex items-center text-[15px] font-Yekan-bold text-[#23254e] gap-1">
                            <span>
                              {convertToPersian(
                                activeUser?.cart.reduce(
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
                        <button className="rounded-lg px-4 py-3 h-12 text-white bg-[#ef4056] text-sm font-Yekan-bold mt-3 Laptop-L:block hidden">
                          ثبت سفارش
                        </button>
                      </div>
                      <div className="Laptop-L:p-5 py-2 pl-2 Laptop-L:bg-[#f1f2f4] mt-3 Laptop-L:mt-6 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="ml-2">
                            <img
                              className="w-6 h-6"
                              src={
                                'https://www.digikala.com/statics/img/svg/club-point.svg'
                              }
                              alt="club-point photo"
                            />
                          </div>
                          <p className="text-xs font-Yekan-bold text-[#5a5c7a]">
                            دیجی‌کلاب
                          </p>
                          <div className="relative mr-2 hover:cursor-pointer group">
                            <FiInfo className="w-4 h-4 text-[#9e9fb1]" />
                            <div className="hidden px-3 py-3 m-4 Laptop-L:group-hover:block absolute w-max min-w-max left-[50%] -translate-x-[50%] bg-[#23254e] text-white text-xs leading-6 rounded z-50">
                              بعد از پایان مهلت مرجوعی، برای دریافت امتیاز به
                              صفحه
                              <br /> ماموریت‌های کلابی سر بزنید.
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-[10px]">
                          <span className="text-[15px] font-Yekan-bold text-[#23254e]">
                            ۱۵۰
                          </span>{' '}
                          امتیاز
                        </div>
                      </div>
                    </div>
                    <p className="my-3 px-2 Laptop-L:px-0 text-[11px] text-[#767790] leading-7">
                      هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی،
                      کالاها از سبد حذف می‌شوند
                    </p>

                    <div className="bg-white rounded-lg border border-[#e0e0e6] my-3 w-full">
                      <div className="px-3 pb-4">
                        <div className="flex items-center">
                          <ImPaypal className="w-[18px] h-[18px] text-[#0040ff] ml-2 -rotate-2" />
                          <div className="flex items-center justify-between w-full py-3">
                            <p className="text-[15px] font-Yekan-bold text-[#3f4064]">
                              به اعتبار دیجی پی قسطی بخرید
                            </p>
                            <div className="flex items-center">
                              <MdKeyboardArrowLeft className="w-6 h-6 text-[#9e9fb1] hover:cursor-pointer" />
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center mt-2">
                          <div className="relative flex flex-col items-center">
                            <span className="w-[2px] h-4 bg-[#e0e0e6] absolute bottom-[15px]"></span>
                            <RxDotFilled className="w-5 h-5 text-[#0040ff]" />
                          </div>
                          <p className="text-[11px] text-[#767790] mr-2 my-1">
                            ۲,۰۳۳,۳۳۳ تومان پیش پرداخت
                          </p>
                        </div>

                        <div className="flex items-center">
                          <div className="relative flex flex-col items-center">
                            <span className="w-[2px] h-4 bg-[#e0e0e6] absolute bottom-[15px]"></span>
                            <RxDotFilled className="w-5 h-5 text-[#0040ff]" />
                          </div>
                          <p className="text-[11px] text-[#767790] mr-2 my-1">
                            ۱,۸۸۱,۵۰۰ تومان ماهانه (۱۲ قسط)
                          </p>
                        </div>

                        <div className="flex items-center">
                          <div className="relative flex flex-col items-center">
                            <span className="w-[2px] h-4 bg-[#e0e0e6] absolute bottom-[15px]"></span>
                            <RxDotFilled className="w-5 h-5 text-[#0040ff]" />
                          </div>
                          <p className="text-[11px] text-[#767790] mr-2 my-1">
                            اعتبار تا سقف ۲۰,۰۰۰,۰۰۰ تومان
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-[#e0e0e6] flex flex-col gap-2 my-3 py-3 px-2">
                      <div className="flex items-center">
                        <BsXDiamond className="text-[#b12ba4] w-5 h-5 ml-2" />
                        <p className="text-xs text-[#b12ba4]">
                          ارسال{' '}
                          <span class="text-sm font-Yekan-bold"> رایگان </span>{' '}
                          سفارش‌ها برای اعضای دیجی‌پلاس
                        </p>
                      </div>
                      <p class="text-[11px] text-[#23254e] mx-2 leading-6">
                        ۳۹ هزارتومان هزینه ارسال به سراسر ایران برای کاربران غیر
                        دیجی‌پلاس
                      </p>
                    </div>
                  </div>
                )}

                {activeUser?.cart.length > 0 && (
                  <div className="fixed bottom-0 left-0 bg-white shadow-1-top h-20 w-full Laptop-L:hidden">
                    <div className="py-3 px-4">
                      <div className="flex justify-between items-center">
                        <button className="py-3 px-4 bg-[#ef4056] text-white rounded-lg text-sm font-Yekan-bold w-full">
                          ثبت سفارش
                        </button>
                        <div className="flex flex-col gap-2 justify-between items-end mr-4 w-full">
                          <p className="text-[10px] text-[#767790]">
                            جمع سبد‌ خرید
                          </p>
                          <div className="flex justify-start items-center text-xs text-[#23254e] gap-1">
                            <span className="text-[13px] font-Yekan-bold">
                              {convertToPersian(
                                activeUser?.cart.reduce(
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
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Empty Cart Image */}
            {(activeUser?.cart.length === 0 || !activeUser) && (
              <div className="flex Laptop-L:flex-row flex-col-reverse mt-4 gap-4">
                <div className="Laptop-L:border border-b border-[#e0e0e6] Laptop-L:rounded-lg flex relative grow">
                  <div className="grow py-6">
                    <div>
                      <div className="w-[200px] h-[160px] mx-auto">
                        <img
                          className="w-full"
                          src="https://www.digikala.com/statics/img/svg/empty-cart.svg"
                          alt="Cart"
                        />
                      </div>
                    </div>
                    <p className="mt-6 mb-4 Laptop-L:text-[19px] text-base font-Yekan-bold text-[#23254e] text-center">
                      سبد خرید شما خالی است!
                    </p>
                    <p className="Laptop-L:text-xs text-[11px] text-[#5a5c7a] text-center mb-6">
                      می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
                    </p>
                  </div>
                </div>
                {/* Go to Login Page */}
                {!isLoggedIn && (
                  <div className="Laptop-L:w-[300px] mx-10 Tablet:mx-5 Laptop-L:mx-0 custom-box-shadow Laptop-L:shadow-none rounded-lg">
                    <Link to="/login">
                      <div className="py-3 px-4 border border-[#f1f2f4] rounded-lg">
                        <div className="py-3 break-words">
                          <div className="flex items-center mb-2">
                            <div className="shrink-0 ml-2">
                              <HiOutlineLogin className="w-6 h-6 text-[#f9a825]" />
                            </div>
                            <p className="grow font-Yekan-bold text-xs Tablet:text-sm Laptop-L:text-base text-[#080a38]">
                              ورود به حساب کاربری
                            </p>
                            <div className="mr-2">
                              <MdKeyboardArrowLeft className="w-6 h-6 text-[#3f4064]" />
                            </div>
                          </div>
                          <p className="pr-7 text-[11px] Tablet:text-xs text-[#767790] Laptop-L:leading-6 leading-6">
                            برای مشاهده محصولاتی که پیش‌تر به سبد خرید خود اضافه
                            کرده‌اید وارد شوید.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Next Cart Page */}
      {whichPage.nextCart && (
        <div className="flex flex-col-reverse Laptop-L:flex-row mt-4 gap-4">
          <div className="border-b Laptop-L:border border-[#e0e0e6] Laptop-L:rounded-lg flex relative overflow-hidden grow">
            <div className="w-full py-2 Laptop-L:p-6">
              <div>
                <div className="w-[200px] h-[160px] mx-auto">
                  <img
                    className="w-full"
                    src="https://www.digikala.com/statics/img/png/empty-sfl.png"
                    alt="Cart"
                  />
                </div>
              </div>
              <p className="mt-6 mb-4 Laptop-L:text-[19px] text-base font-Yekan-bold text-[#23254e] text-center">
                لیست خرید بعدی شما خالی است!
              </p>
              <p className="Laptop-L:text-xs text-[#5a5c7a] text-center mb-6 px-6 Laptop-L:px-0 leading-7 text-[11px] Laptop-L:leading-6">
                شما می‌توانید محصولاتی که به سبد خرید خود افزوده‌اید و فعلا قصد
                خرید آن‌ها را ندارید، در لیست خرید بعدی قرار داده و هر زمان مایل
                بودید آن‌ها را به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل
                کنید.
              </p>
            </div>
          </div>
          {/* Go To Login Page */}
          {!isLoggedIn && (
            <div className="Laptop-L:w-[300px] Laptop-L:min-w-[300px] mx-10 Tablet:mx-5 Laptop-L:mx-0 custom-box-shadow Laptop-L:shadow-none rounded-lg">
              <Link to="/login">
                <div className="py-3 px-4 border border-[#f1f2f4] rounded-lg">
                  <div className="py-3 break-words">
                    <div className="flex items-center mb-2">
                      <div className="shrink-0 ml-2">
                        <HiOutlineLogin className="w-6 h-6 text-[#f9a825]" />
                      </div>
                      <p className="grow font-Yekan-bold text-xs Tablet:text-sm Laptop-L:text-base text-[#080a38]">
                        ورود به حساب کاربری
                      </p>
                      <div className="mr-2">
                        <MdKeyboardArrowLeft className="w-6 h-6 text-[#3f4064]" />
                      </div>
                    </div>
                    <p className="pr-7 text-[11px] Tablet:text-xs text-[#767790] Laptop-L:leading-6 leading-6">
                      برای مشاهده محصولاتی که پیش‌تر به سبد خرید خود اضافه
                      کرده‌اید وارد شوید.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CartPage;
