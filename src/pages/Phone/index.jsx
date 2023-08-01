import { useState } from 'react';
import {
  useGetMainCategoryQuery,
  useGetPopularPhonesQuery,
} from '../../api/apiSlice';
import { ShowSwiper, Swiper } from '../../components';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BsQuestion } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';

function PhonePage() {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(0);

  const handleDropdownIsOpen = (whichOne) => {
    if (whichOne === isDropDownOpen) {
      setIsDropDownOpen(0);
    } else {
      setIsDropDownOpen(whichOne);
    }
  };

  const { data, isLoading, isError } = useGetMainCategoryQuery();
  const {
    data: popularPhones,
    isLoading: ppIsLoading,
    isError: ppIsError,
  } = useGetPopularPhonesQuery();
  if (isError || isLoading || ppIsLoading || ppIsError) {
    return;
  }

  const sliders = data[0].slider;

  return (
    <div>
      {/* Sliders */}
      <Swiper slides={sliders} />

      {/* All phones Photo */}
      <div className="mx-auto my-4 px-2 w-full max-w-[768px] Laptop-L:max-w-[1280px]">
        <img
          className="hidden hover:cursor-pointer rounded-lg Laptop-L:block"
          src={
            'https://dkstatics-public.digikala.com/digikala-static/3f193f7457ebf3d944161501a1280e870e20f563_1684750400.jpg'
          }
          alt="photo"
        />
        <img
          className="hover:cursor-pointer rounded-lg Laptop-L:hidden"
          src={
            'https://dkstatics-public.digikala.com/digikala-static/40c0f65c25f447d52ef03249bb9aad9d2c1f3210_1684750374.jpg'
          }
          alt="photo"
        />
      </div>

      {/* popular and button phones */}
      <div className="mx-auto my-4 px-2 w-full max-w-[768px] Laptop-L:max-w-[1280px]">
        <div className="flex flex-col justify-between border rounded-lg Laptop-L:flex-row">
          {popularPhones.map((phone) => (
            <div
              key={phone.id}
              className={`${phone.id === 1 && 'border-l'} py-2 px-5`}
            >
              <h4 className="text-[#23254e] font-Yekan-bold mb-2">
                {phone.categoryName}
              </h4>
              <div className="grid grid-cols-3 Laptop-L:grid-cols-4">
                {phone.products.map((product) => (
                  <div
                    className={`${
                      (product.id === 21 || product.id === 11) &&
                      'col-span-2 row-span-2 border-l'
                    }`}
                    key={product.id}
                  >
                    <img
                      src={product.thumbnail}
                      alt="phone image"
                      className={`p-2 hover:cursor-pointer ${
                        (product.id === 12 || product.id === 22) &&
                        'Laptop-L:border-l border-b-2 Laptop-L:border-b'
                      } ${
                        (product.id === 23 || product.id === 13) &&
                        'Laptop-L:border-b -translate-y-px'
                      } ${
                        (product.id === 24 || product.id === 14) &&
                        'border-l -translate-y-px hidden Laptop-L:block'
                      } ${
                        (product.id === 25 || product.id === 15) &&
                        'hidden Laptop-L:block'
                      }`}
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center mt-2 mb-3">
                <button class="flex items-center justify-center text-[#19bfd3] text-xs font-Yekan-bold">
                  مشاهده
                  <IoIosArrowBack className="w-4 h-w-4 text-[#19bfd3]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* most sells phones */}

      {/* based on brand phones */}
      <div className="mx-auto px-2 my-4 w-full max-w-[768px] Laptop-L:max-w-[1280px]">
        <div className="px-5 py-3 Tablet:p-4 Tablet:pb-10">
          <div className="text-center mb-9">
            <h3 className="font-Yekan-medium text-[21px]">گوشی بر اساس برند</h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 Tablet:gap-x-0 gap-y-4 Laptop-L:gap-0 Laptop-L:justify-around">
            <div className="flex flex-col items-center justify-center w-[28%] Laptop-L:w-auto hover:cursor-pointer ">
              <img
                src={
                  'https://dkstatics-public.digikala.com/digikala-static/8d5598d0f8e669811f0193afce9f63b36ac8fb5d_1656485450.png'
                }
                alt="xiaomi logo"
                className="w-[90px] Laptop-L:w-auto"
              />
              <p className="text-xs font-Yekan-bold text-[#080a38] mt-2">
                شیائومی
              </p>
            </div>

            <div className="flex flex-col items-center justify-center w-[28%] Laptop-L:w-auto hover:cursor-pointer">
              <img
                src={
                  'https://dkstatics-public.digikala.com/digikala-static/29b540363843f131d878b66d6914a0b71c3b84f9_1656485435.png'
                }
                alt="samsung logo"
                className="w-[90px] Laptop-L:w-auto"
              />
              <p className="text-xs font-Yekan-bold text-[#080a38] mt-2">
                سامسونگ
              </p>
            </div>

            <div className="flex flex-col items-center justify-center w-[28%] Laptop-L:w-auto hover:cursor-pointer">
              <img
                src={
                  'https://dkstatics-public.digikala.com/digikala-static/d31d399022c6b65094bbeb93cc34e5ab38a967d1_1656485401.png'
                }
                alt="apple logo"
                className="w-[90px] Laptop-L:w-auto"
              />
              <p className="text-xs font-Yekan-bold text-[#080a38] mt-2">اپل</p>
            </div>

            <div className="flex flex-col items-center justify-center w-[28%] Laptop-L:w-auto hover:cursor-pointer">
              <img
                src={
                  'https://dkstatics-public.digikala.com/digikala-static/184d8d92aafcb365ed8945f541d6e9429baa9c95_1665869031.png'
                }
                alt="nokia logo"
                className="w-[90px] Laptop-L:w-auto"
              />
              <p className="text-xs font-Yekan-bold text-[#080a38] mt-2">
                نوکیا
              </p>
            </div>

            <div className="flex flex-col items-center justify-center w-[28%] Laptop-L:w-auto hover:cursor-pointer">
              <img
                src={
                  'https://dkstatics-public.digikala.com/digikala-static/f2f4f79392d7951d660b2f809c8c6f2a7f3a183f_1656485388.png'
                }
                alt="Huawei logo"
                className="w-[90px] Laptop-L:w-auto"
              />
              <p className="text-xs font-Yekan-bold text-[#080a38] mt-2">
                هوآوی
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* based on price phones */}
      <div className="mx-auto px-2 my-4 w-full max-w-[768px] Laptop-L:max-w-[1280px]">
        <div className="p-4 pb-10">
          <div className="text-center mb-9">
            <h3 className="font-Yekan-medium text-[21px]">گوشی بر اساس برند</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <img
              src={
                'https://dkstatics-public.digikala.com/digikala-static/9dd2a07f4c1fdf0774f2308c33664bf106399205_1656260898.jpg'
              }
              alt="price range photo"
              className="hover:cursor-pointer Laptop-L:w-[170px] Laptop-L:h-[170px] w-[90px] h-[90px]"
            />

            <img
              src={
                'https://dkstatics-public.digikala.com/digikala-static/9c3b7d45fb5c1c9445e252f286373b40e428b592_1656260930.jpg'
              }
              alt="price range photo"
              className="hover:cursor-pointer Laptop-L:w-[170px] Laptop-L:h-[170px] w-[90px] h-[90px]"
            />

            <img
              src={
                'https://dkstatics-public.digikala.com/digikala-static/cab105341070614f85b0b13c869b28efc9ece317_1656326217.jpg'
              }
              alt="price range photo"
              className="hover:cursor-pointer Laptop-L:w-[170px] Laptop-L:h-[170px] w-[90px] h-[90px]"
            />

            <img
              src={
                'https://dkstatics-public.digikala.com/digikala-static/c5f50da7c2b47e47fb75ca4ba1fd92e0c6d5e19a_1656261053.jpg'
              }
              alt="price range photo"
              className="hover:cursor-pointer Laptop-L:w-[170px] Laptop-L:h-[170px] w-[90px] h-[90px]"
            />

            <img
              src={
                'https://dkstatics-public.digikala.com/digikala-static/e59f0e0dadb7fc18ef96a06dc72360daa4023c67_1656261118.jpg'
              }
              alt="price range photo"
              className="hover:cursor-pointer Laptop-L:w-[170px] Laptop-L:h-[170px] w-[90px] h-[90px]"
            />
          </div>
        </div>
      </div>

      {/* sub photos */}
      <div className="mx-auto px-2 my-4 w-full max-w-[768px] Laptop-L:max-w-[1280px]">
        <div className="flex flex-col items-center justify-center gap-4 Laptop-L:flex-row">
          <div className="hover:cursor-pointer rounded-lg Laptop-L:w-[39rem] overflow-hidden">
            <img
              src={
                'https://dkstatics-public.digikala.com/digikala-adservice-banners/0aa91809f34e862a6cb5ed46eca4bb4d434088d0_1665866601.jpg?x-oss-process=image/quality,q_95'
              }
              alt="انبار تکانی کالا ها"
            />
          </div>
          <div className="hover:cursor-pointer rounded-lg Laptop-L:w-[39rem] overflow-hidden">
            <img
              src={
                'https://dkstatics-public.digikala.com/digikala-adservice-banners/8f7fee88ea78523d1323c4c15d657b70c05e3fc2_1665865917.jpg?x-oss-process=image/quality,q_95'
              }
              alt="جدید ترین انبار ها"
            />
          </div>
        </div>
      </div>

      {/* based on features phones */}
      <div className="mx-auto px-2 my-4 w-full max-w-[768px] Laptop-L:max-w-[1280px]">
        <div className="p-4 pb-10">
          <div className="text-center mb-9">
            <h3 className="font-Yekan-medium text-[21px]">
              گوشی بر اساس ویژگی
            </h3>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-8">
            <div className="overflow-hidden rounded-lg w-[90px] h-[90px] hover:cursor-pointer Laptop-L:w-auto Laptop-L:h-auto">
              <img
                src={
                  'https://dkstatics-public.digikala.com/digikala-static/9ede15d35a59cc917bf4750b0680bf05c4068137_1665867227.jpg'
                }
                alt="feature photo"
              />
            </div>
            <div className="overflow-hidden rounded-lg w-[90px] h-[90px] hover:cursor-pointer Laptop-L:w-auto Laptop-L:h-auto">
              <img
                src={
                  'https://dkstatics-public.digikala.com/digikala-static/7d44978aa728499ff48f7395de384e86c436db9f_1665867313.jpg'
                }
                alt="feature photo"
              />
            </div>
            <div className="overflow-hidden rounded-lg w-[90px] h-[90px] hover:cursor-pointer Laptop-L:w-auto Laptop-L:h-auto">
              <img
                src={
                  'https://dkstatics-public.digikala.com/digikala-static/bfeb6cc629a0d81cd2713d30d8b65ed0233d96a1_1665867293.jpg'
                }
                alt="feature photo"
              />
            </div>
            <div className="overflow-hidden rounded-lg w-[90px] h-[90px] hover:cursor-pointer Laptop-L:w-auto Laptop-L:h-auto">
              <img
                src={
                  'https://dkstatics-public.digikala.com/digikala-static/b711b172b120ee7316278e3a93be2e2528da1168_1665867193.jpg'
                }
                alt="feature photo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* sub photos */}
      <div className="mx-auto px-2 my-4 w-full max-w-[768px] Laptop-L:max-w-[1280px]">
        <div className="grid items-center justify-center grid-cols-2 gap-4 Laptop-L:flex Laptop-L:flex-row">
          <div className="hover:cursor-pointer overflow-hidden rounded-lg">
            <img
              src={
                'https://dkstatics-public.digikala.com/digikala-adservice-banners/0f75cab224c64719c2aa71d941fbef42e945da37_1665866432.jpg?x-oss-process=image/quality,q_95'
              }
              alt="گوشی های دکمه ای"
            />
          </div>
          <div className="hover:cursor-pointer overflow-hidden rounded-lg">
            <img
              src={
                'https://dkstatics-public.digikala.com/digikala-adservice-banners/1849c1452cb5743206529a9377ead659193dee22_1665865997.jpg?x-oss-process=image/quality,q_95'
              }
              alt="گوشی های پرچم دار"
            />
          </div>
          <div className="hover:cursor-pointer col-span-2 overflow-hidden rounded-lg">
            <img
              src={
                'https://dkstatics-public.digikala.com/digikala-adservice-banners/66fc336a8e101499b79a482bf85718e06cba4aaa_1665866504.jpg?x-oss-process=image/quality,q_95'
              }
              alt="جدید ترین گوشی های دو سیم کارت"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* description */}
      <div className="mx-auto px-2 my-4 w-full max-w-[768px] Laptop-L:max-w-[1280px]">
        <article className="text-[#9e9fb1] pt-4 leading-9">
          <div>
            <h1 className="text-3xl text-[#5a5c7a] font-Yekan-bold py-3">
              گوشی موبایل و لوازم جانبی
            </h1>
            <p className="pb-6">
              <strong>گوشی موبایل</strong> و تلفن هوشمند یک تلفن همراه با یک
              کامپیوتر یکپارچه و سایر ویژگی‌هایی است که در اصل به تلفن‌ها مرتبط
              نیستند. از میان این ویژگی‌ها می‌توان به سیستم‌عامل، وب‌گردی و
              قابلیت اجرای برنامه‌های نرم‌افزاری اشاره کرد. گوشی‌های هوشمند بخشی
              از زندگی روزمره ما هستند و نه‌تنها به ما کمک می‌کنند که با دیگران
              در ارتباط بمانیم بلکه امکانات بسیار گسترده‌تری مانند عکاسی و
              فیلمبرداری، بازی کردن، کتاب خواندن و غیره را در اختیار ما قرار
              می‌دهند. از سوی دیگر، برای استفاده از برخی از این امکانات و
              همچنین، مراقبت از سلامت گوشی هوشمند به یک سری لوازم جانبی نیاز
              داریم. به همین دلیل، ما قصد داریم شما را با انواع گوشی‌های هوشمند
              و لوازم جانبی آن‌ها آشنا کنیم.
            </p>
          </div>
          <div className={`${!isDescriptionOpen && 'hidden'}`}>
            <h2 className="text-[#5a5c7a] font-Yekan-bold py-3 text-2xl">
              انواع برندهای گوشی‌های هوشمند
            </h2>
            <p className="pb-4">
              برندهای بسیار معروف گوشی‌های هوشمند شامل{' '}
              <span className="text-[#19bfd3] hover:cursor-pointer">
                گوشی اپل یا موبایل آیفون
              </span>{' '}
              <span className="text-[#19bfd3] hover:cursor-pointer">
                گوشی شیائومی,{' '}
              </span>{' '}
              <span className="text-[#19bfd3] hover:cursor-pointer">
                گوشی سامسونگ
              </span>
              ،{' '}
              <span className="text-[#19bfd3] hover:cursor-pointer">
                گوشی هوآوی
              </span>{' '}
              <span className="text-[#19bfd3] hover:cursor-pointer">
                گوشی وان پلاس
              </span>
              ، گوشی ردمی، گوشی اوپو،{' '}
              <span className="text-[#19bfd3] hover:cursor-pointer">
                موبایل پیکسل گوگل
              </span>
              ، موبایل سونی، موبایل نوکیا،{' '}
              <span className="text-[#19bfd3] hover:cursor-pointer">
                گوشی موتورولا
              </span>
              ، گوشی ال جی، گوشی ریلمی و گوشی آنر می‌شوند. بااین‌حال، فهرست
              برندهای گوشی‌های هوشمند تنها به این موارد محدود نمی‌شود. برخی دیگر
              از برندهای تولیدکننده موبایل هوشمند که ممکن است اسم آن‌ها را کمتر
              شنیده باشید عبارت‌اند از:
            </p>
            <ul className="pb-6 list-disc">
              <li className="hover:cursor-pointer">
                <p className="text-[#19bfd3]"> اینفینیکس</p>
              </li>
              <li className="hover:cursor-pointer">
                <p className="text-[#19bfd3]">موبایل جی پلاس</p>
              </li>
              <li className="hover:cursor-pointer">
                <p className="text-[#19bfd3]">موبایل ایرانی جی ال ایکس</p>
              </li>
              <li className="hover:cursor-pointer">
                <p className="text-[#19bfd3]">گوشی موبایل دوجی</p>
              </li>
              <li className="hover:cursor-pointer">
                <p className="text-[#19bfd3]">گوشی موبایل بلو</p>
              </li>
              <li className="hover:cursor-pointer">
                <p className="text-[#19bfd3]">گوشی موبایل کاترپیلار</p>
              </li>
              <li className="hover:cursor-pointer">
                <p className="text-[#19bfd3]">گوشی موبایل جیونی</p>
              </li>
            </ul>
          </div>

          <div className={`${!isDescriptionOpen && 'hidden'}`}>
            <h2 className="text-[#5a5c7a] font-Yekan-bold py-3 text-2xl">
              انواع گوشی‌های هوشمند بر اساس قیمت
            </h2>
            <p className="pb-6">
              طبیعتا هرچقدر بودجه‌ای که برای خرید گوشی موبایل هوشمند در نظر
              می‌گیرید بیشتر باشد، امکان اینکه بتوانید یک گوشی باکیفیت تهیه کنید
              بیشتر می‌شود. بااین‌حال، این بدین معنی نیست که با بودجه کم اصلا
              امکان خرید موبایل را ندارید. قیمت موبایل با توجه به امکانات آن
              متفاوت است. برای مثال، ممکن است تعجب کنید اما در حال حاضر در مرجع
              موبایل،{' '}
              <span className="text-[#19bfd3] hover:cursor-pointer">
                گوشی تا 2 میلیون تومان
              </span>{' '}
              نیز در دسترس است که این موارد، گوشی ساده و ارزان محسوب می‌شوند. از
              سوی دیگر، وقتی بودجه خود را افزایش می‌دهید و برای مثال، می‌خواهید{' '}
              <span className="text-[#19bfd3] hover:cursor-pointer">
                گوشی تا 5 میلیون یا گوشی تا 7 میلیون
              </span>{' '}
              تومان تهیه کنید، احتمال اینکه بتوانید در بازار موبایل یک تلفن
              همراه از برندهای معروف مثل موبایل هواوی، موبایل شیائومی و موبایل
              های سامسونگ تهیه کنید افزایش می‌یابد. هرچند که میتوانید{' '}
              <span className="text-[#19bfd3] hover:cursor-pointer">
                خرید اقساطی گوشی
              </span>{' '}
              را هم به عنوان یک انتخاب در نظر بگیرید. قیمت موبایل سامسونگ a51
              نیز در همین محدوده است. بااین‌حال، برای خرید گوشی‌های پرچم‌دار
              برندها لازم است محدوده بودجه را گوشی تا 15 میلیون تومان یا{' '}
              <span className="text-[#19bfd3] hover:cursor-pointer">
                گوشی 15 تا 30 میلیون
              </span>{' '}
              در نظر بگیرید. در این شرایط، برخی خرید موبایل قسطی یا موبایل دست
              دوم از موبایل فروشی تهران را در نظر می‌گیرند. قیمت گوشی بر اساس رم
              دستگاه نیز متفاوت باشد که گوشی‌ها دارای رم با ظرفیت 2، 3، 4، 6، 8
              و 12 هستند. هرچه رم گوشی بالاتر باشد، عملکرد دستگاه سریع‌تر است.
              اگر به دنبال گوشی موبایل با رم مناسب هستید، موبایل 6 رام مانند
              موبایل پوکو x3 پرو می‌تواند انتخاب خوبی برای شما باشد.
            </p>
          </div>

          <div className={`${!isDescriptionOpen && 'hidden'}`}>
            <h2 className="text-[#5a5c7a] font-Yekan-bold py-3 text-2xl">
              انواع گوشی بر اساس دوربین اصلی
            </h2>
            <p className="pb-6">
              تلفن‌های همراه علاوه بر دوربین سلفی معمولا دارای لنز اصلی، لنز
              فوق‌عریض، لنز تله فوتو و سنسور تشخیص عمق هستند. اگرچه وجود سه مورد
              آخر بسته به مدل گوشی متفاوت است اما همه گوشی‌های هوشمند، دوربین
              اصلی را دارند که کیفیت آن بر اساس تعداد پیکسل‌های سنسور مشخص
              می‌شود و به چند دسته 13، 16، 32، 48، 64 و 108 مگاپیکسلی تقسیم
              می‌شود. اگر می‌خواهید گوشی حرفه‌ای برای عکاسی تهیه کنید،{' '}
              <span className="text-[#19bfd3] hover:cursor-pointer">
                خرید اقساطی گوشی{' '}
              </span>{' '}
              نیز می‌تواند برای شما مناسب باشد.
            </p>
          </div>

          <div className={`${!isDescriptionOpen && 'hidden'}`}>
            <h2 className="text-[#5a5c7a] font-Yekan-bold py-3 text-2xl">
              انواع لوازم جانبی گوشی
            </h2>
            <p>
              لوازم جانبی موبایل چیست؟ این روزها وقتی گوشی هوشمند تهیه کنید یک
              بسته کامل دریافت می‌کنید. بااین‌حال، گوشی‌های هوشمند تنها یک
              پلتفرم هستند و می‌توان آن‌ها را با استفاده از لوازم جانبی موبایل و
              کامپیوتر ارتقا داد. برخی از لوازم جانبی مفید برای گوشی‌های هوشمند
              شامل ،
              <span className="text-[#19bfd3] hover:cursor-pointer">
                پاور بانک، هدفون، کیس و کاور
              </span>{' '}
              محافظ صفحه‌نمایش و غیره می‌شوند. برخی از افراد به دنبال لوازم
              جانبی موبایل و کامپیوتر و برخی از افراد به دنبال لوازم جانبی لوکس
              موبایل یا لوازم جانبی موبایل فانتزی هستند. هر نوع لوازم جانبی که
              برای گوشی هوشمند بخواهید در فروشگاه‌ها در دسترس شما خواهند بود. از
              سوی دیگر، لوازم جانبی جالب موبایل و خاص ترین لوازم جانبی موبایل
              می‌توانند بر اساس برند دستگاه متفاوت باشند. برای مثال، از میان
              آن‌ها می‌توان به لوازم جانبی موبایل موتورولا، لوازم جانبی موبایل
              نوکیا،{' '}
              <span className="text-[#19bfd3] hover:cursor-pointer">
                لوازم جانبی موبایل هواوی
              </span>
              ، لوازم جانبی موبایل شیائومی و غیره اشاره کرد.
            </p>
          </div>
        </article>

        <button
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          className={`text-[#19bfd3] hover:cursor-pointer text-sm font-Yekan-bold flex items-center ${
            isDescriptionOpen && 'pt-12'
          }`}
        >
          مشاهده {isDescriptionOpen ? 'کمتر' : 'بیشتر'}
          <MdKeyboardArrowDown
            className={`w-6 h-6 ${isDescriptionOpen && 'rotate-180'}`}
          />
        </button>
      </div>

      {/* most frequent questions */}
      <div className="mx-auto px-2 my-4 w-full max-w-[768px] Laptop-L:max-w-[1280px]">
        <div className="flex flex-col items-center">
          <div className="p-4 mt-6 mb-3 rounded-full w-14 h-14 bg-[#F3FBFC] flex items-center justify-center">
            <div className="border-2 flex items-center justify-center rounded-lg text-[#19bfd3] border-[#19bfd3]">
              <BsQuestion className="w-6 h-6" />
            </div>
          </div>
          <div className="my-3 text-center">
            <h3 className="font-Yekan-medium text-[21px]">
              سوالات متداول گوشی موبایل
            </h3>
          </div>
        </div>

        {/* dropdown */}
        <div>
          <div className="pb-4 border-b boeder-b">
            <div
              onClick={() => handleDropdownIsOpen(1)}
              className="flex items-center justify-between py-4 hover:cursor-pointer"
            >
              <h4 className="pb-2 font-Yekan-bold text-[15px]">
                ارزان ترین سایت خرید گوشی کدام فروشگاه است؟
              </h4>
              <MdKeyboardArrowDown className="w-6 h-6" />
            </div>
            <p
              className={`text-sm text-[#3f4064] leading-8 ${
                isDropDownOpen !== 1 ? 'hidden' : ''
              }`}
            >
              ✓ فروشگاه اینترنتی دیجی‌کالا به عنوان یک مرجع جامع با قیمت‌های به
              روز، این امکان را فراهم کرده که بتوانید جدیدترین و ارزان ترین
              گوشی‌های بازار در طرح‌ها و رنگ‌های متنوع مانند{' '}
              <span className="text-[#0000ee] font-Yekan-bold">
                گوشی موبایل سامسونگ
              </span>{' '}
              و{' '}
              <span className="text-[#0000ee] font-Yekan-bold">
                گوشی موبایل شیائومی
              </span>{' '}
              را مقایسه و خریداری کنید.
            </p>
          </div>

          <div className="pb-4 border-b boeder-b">
            <div
              onClick={() => handleDropdownIsOpen(2)}
              className="flex items-center justify-between py-4 hover:cursor-pointer"
            >
              <h4 className="pb-2 font-Yekan-bold text-[15px]">
                آیا قیمت انواع گوشی ها در دیجی کالا به روز هستند؟
              </h4>
              <MdKeyboardArrowDown className="w-6 h-6" />
            </div>
            <p
              className={`text-sm text-[#3f4064] leading-8 ${
                isDropDownOpen !== 2 ? 'hidden' : ''
              }`}
            >
              ✓ بله، تمام قیمت های گوشی ها مانند{' '}
              <span className="text-[#0000ee] font-Yekan-bold">
                گوشی موبایل سامسونگ
              </span>{' '}
              و{' '}
              <span className="text-[#0000ee] font-Yekan-bold">
                گوشی موبایل هواوی
              </span>{' '}
              در فروشگاه اینترنتی دیجی کالا به روز هستند و شما می توانید با
              مراجعه به صفحه ی گوشی مورد نظرتان بعد از مقایسه قیمت ها، آنلاین
              خرید کنید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhonePage;
