import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { HiOutlineLogin } from 'react-icons/hi';

function CartPage() {
  const [whichPage, setWhichPage] = useState({ cart: true, nextCart: false });
  const handleWhichPage = (which) => {
    if (which === 'cart') {
      setWhichPage({ cart: true, nextCart: false });
    } else {
      setWhichPage({ cart: false, nextCart: true });
    }
  };

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

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
        <div className="">
          <div className="pb-3">
            {/* Digi-Plus */}
            {isLoggedIn && (
              <div className="px-2 py-1 mt-4 border-y Laptop-L:border-none bg-[#F1F2F4] Laptop-L:bg-white Laptop-L:px-0">
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
                            مهلت بیشتر مرجوعی کالا تا ۳۰ روز (جز موبایل و کالای
                            بهداشتی)
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
              </div>
            )}

            {/* Cart Image */}
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
