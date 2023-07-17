import { useGetStoriesQuery, useGetSwipersQuery } from '../../api/apiSlice';
import {
  HomeFeatures,
  MainCategory,
  PopularBrands,
  ShowSwiper,
  Story,
  Suggestion,
  DigitalGoods,
  BestSelling,
  SelectionDiscount,
  Blog,
  SuperMarket,
  Swiper,
} from '../../components/index';
import { BsStars } from 'react-icons/bs';
import { AiOutlineFire } from 'react-icons/ai';
import { MdOutlineDiscount } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { TbTargetArrow, TbBuildingCarousel, TbDiscount2 } from 'react-icons/tb';

function MainLayout() {
  const { data: stories, isLoading, isError } = useGetStoriesQuery();
  const {
    data: swipers,
    isLoading: swipersIsLoading,
    isError: swipersIsError,
  } = useGetSwipersQuery();

  if (isLoading || isError || swipersIsError) {
    return;
  } else {
    return (
      <main className="">
        <div className="flex items-center justify-center">
          {stories.map((story) => (
            <Story key={story.id} story={story} />
          ))}
        </div>
        <div className="my-2">
          <Swiper slides={swipers} isLoading={swipersIsLoading} />
        </div>
        <div className="px-4 w-full max-w-[83.5rem] mx-auto">
          {/* BUG پیشنهاد شگفت انگیز و اینا */}
          <HomeFeatures />
        </div>

        {/* super market */}
        <div className="w-full max-w-[83.5rem] mx-auto mt-1 px-4">
          <SuperMarket />
        </div>

        {/* sub images */}
        <div className="w-full max-w-[83.5rem] mx-auto grid grid-cols-2 gap-4 Laptop-L:grid-cols-4 Laptop-L:gap-x-4 Laptop-L:gap-y-0 mt-6 px-4">
          <img
            className="w-full hover:cursor-pointer rounded-2xl"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a1f609ed454fc92d25c77b0bfa9b9224aa88f927_1686467148.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="کمپین - bt - بردگیم - خرداد 1402"
            title="کمپین - bt - بردگیم - خرداد 1402"
          />
          <img
            className="w-full hover:cursor-pointer rounded-2xl"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/d9f038bb5190f34cfead19913f3453a01256e4e0_1684589067.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="برترین برندهای پوشاک نوزادی"
            title="برترین برندهای پوشاک نوزادی"
          />
          <img
            className="w-full hover:cursor-pointer rounded-2xl"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/3056952e59f2e85aa1cad27d79b2f7b060d20bb0_1675849450.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="مراقبت از سلامتی در منزل - بهمن"
            title="مراقبت از سلامتی در منزل - بهمن"
          />
          <img
            className="w-full hover:cursor-pointer rounded-2xl"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/66365cc079fbe146271a57bbfc0d12f65fd5dd36_1673776059.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="لندینگ عطر برای همه "
            title="لندینگ عطر برای همه "
          />
        </div>

        {/* Main Category */}
        <section className="p-4 pb-10 mt-6 w-full max-w-[83.5rem] mx-auto text-center">
          <h3 className="mb-9 text-lg Laptop-L:text-[21px] font-Yekan-medium">
            دسته‌بندی‌های دیجی‌کالا
          </h3>
          <div className="Mobile-L:px-4">
            <MainCategory />
          </div>
        </section>

        {/* sub images */}
        <div className="w-full max-w-[83.5rem] mx-auto grid grid-cols-2 gap-x-4 mt-6 px-4 overflow-hidden">
          <img
            className="hover:cursor-pointer rounded-2xl"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a09ea1a5005458e97a4252fde2709cefba24ce6e_1686376338.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="حراج عینک و ساعت"
            title="حراج عینک و ساعت"
          />
          <img
            className="hover:cursor-pointer rounded-2xl"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/2e5636c98befde37956594ffda05f43bb7178978_1686463859.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="تیشرت و پلوشرت و پیراهن بچگانه"
            title="تیشرت و پلوشرت و پیراهن بچگانه"
          />
        </div>

        {/* Digikala Suggestion */}
        <div className="w-full max-w-[83.5rem] mx-auto text-center px-4 mt-6">
          <h3 className="text-lg Laptop-L:text-[21px] font-Yekan-medium py-8">
            پیشنهاد دیجی‌کالا
          </h3>
          <Suggestion />
        </div>

        {/* Digikala Popular Brands */}
        <div className="w-full max-w-[83.5rem] mx-auto text-center px-4 mt-6">
          <div className="Laptop-L:border Laptop-L:border-[#e0e0e0] rounded-2xl">
            <div className="flex items-center justify-center gap-3 pt-8">
              <BsStars className="text-[#f9bc00] h-6 w-6" />
              <h3 className="text-lg Laptop-L:text-[21px] font-Yekan-medium">
                محبوب‌ترین برندها
              </h3>
            </div>

            <PopularBrands />
          </div>
        </div>

        {/* sub images */}
        <div className="w-full max-w-[83.5rem] mx-auto grid grid-cols-1 gap-y-4 Laptop-L:grid-cols-2 Laptop-L:gap-x-4 mt-6 px-4 overflow-hidden">
          <img
            className="w-full hover:cursor-pointer rounded-2xl"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1e890d43611dd2989fe691398b45c7d12dfa7724_1686138255.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="پارتنرشیپ - سلر"
            title="پارتنرشیپ - سلر"
          />
          <img
            className="w-full hover:cursor-pointer rounded-2xl"
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/fe4f257a66755e7db863d0ef279a4b768ef0b659_1686132676.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="پارتنرشیپ - مچر"
            title="پارتنرشیپ - مچر"
          />
        </div>

        {/* digital goods show */}
        <div className="w-full max-w-[83.5rem] mx-auto text-center Laptop-L:px-4 mt-6">
          <DigitalGoods />
        </div>

        {/* digi-club */}
        <div className="w-full max-w-[83.5rem] mx-auto text-center Laptop-L:px-4 mt-6">
          <div className="p-4 Laptop-L:px-4 Laptop-L:py-3 Laptop-L:rounded-2xl bg-radial">
            <div className="flex flex-col justify-between gap-1 Laptop-L:gap-0 Laptop-L:items-center Laptop-L:flex-row">
              <div className="Laptop-L:mr-6">
                <img
                  src={
                    'https://www.digikala.com/statics/img/svg/club/digiclub-logo-white.svg'
                  }
                  alt="digiclub"
                  className="w-[119px] h-[33px] hover:cursor-pointer"
                />
              </div>
              <div className="flex self-center gap-1">
                <div className="flex flex-col items-center gap-2 overflow-hidden bg-white hover:cursor-pointer rounded-r-xl Laptop-L:gap-0 Laptop-L:flex-row Laptop-L:rounded-xl Laptop-L:overflow-visible">
                  <div className="flex flex-col items-center gap-1 mt-2 Laptop-L:my-0 Laptop-L:mr-4 Laptop-L:gap-0 Laptop-L:flex-row">
                    <TbTargetArrow className="text-[#00bfd6] w-5 h-5" />
                    <span className="pr-2 text-xs font-Yekan-bold text-[#080a38]">
                      چرخ و بخت
                    </span>
                  </div>
                  <div className="border-2 border-white ">
                    <img
                      src={
                        'https://www.digikala.com/statics/img/png/digiclub/wheel-spinner.jpg'
                      }
                      alt="photo "
                      className="h-16 Laptop-L:w-[130px] Laptop-L:h-auto"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 bg-white hover:cursor-pointer Laptop-L:gap-0 Laptop-L:flex-row">
                  <div className="flex flex-col items-center gap-1 mt-2 Laptop-L:my-0 Laptop-L:mr-4 Laptop-L:gap-0 Laptop-L:flex-row">
                    <TbBuildingCarousel className="text-[#00bfd6] w-5 h-5" />
                    <span className="pr-2 text-xs font-Yekan-bold text-[#080a38]">
                      ماموریت ها
                    </span>
                  </div>
                  <div className="border-2 border-white ">
                    <img
                      src={
                        'https://www.digikala.com/statics/img/png/digiclub/missions.png'
                      }
                      alt="photo "
                      className="h-16 Laptop-L:w-[130px] Laptop-L:h-auto"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 overflow-hidden bg-white hover:cursor-pointer Laptop-L:gap-0 Laptop-L:flex-row rounded-l-xl">
                  <div className="flex flex-col items-center gap-1 mt-2 Laptop-L:my-0 Laptop-L:mr-4 Laptop-L:gap-0 Laptop-L:flex-row">
                    <TbDiscount2 className="text-[#00bfd6] w-5 h-5" />
                    <span className="pr-2 text-xs font-Yekan-bold text-[#080a38]">
                      جایزه ها
                    </span>
                  </div>
                  <div className="border-2 border-white ">
                    <img
                      src={
                        'https://www.digikala.com/statics/img/png/digiclub/awards.png'
                      }
                      alt="photo "
                      className="h-16 Laptop-L:w-[130px] Laptop-L:h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best selling products */}
        <div className="w-full max-w-[83.5rem] mx-auto text-center Laptop-L:px-4 mt-6">
          <div className="Laptop-L:border Laptop-L:border-[#e0e0e0] rounded-2xl">
            <div className="relative flex items-center Laptop-L:justify-center gap-3 pt-8 pr-4 Laptop-L:pr-0">
              <AiOutlineFire className="text-[#f9bc00] h-6 w-6" />
              <h3 className="text-lg Laptop-L:text-[21px] font-Yekan-medium">
                پرفروش‌ترین کالاها
              </h3>

              <button className="absolute left-4 top-8 text-[#19bfd3] text-sm font-Yekan-bold hover:cursor-pointer">
                مشاهده همه
              </button>
            </div>
            <BestSelling />
          </div>
        </div>

        {/* Selection discount products */}
        <div className="w-full max-w-[83.5rem] mx-auto text-center px-4  mt-6">
          <div className="Laptop-L:border Laptop-L:border-[#e0e0e0] rounded-2xl pb-5">
            <div className="flex items-center justify-center gap-3 py-8 mb-2">
              <MdOutlineDiscount className="text-[#ef4056] h-6 w-6" />
              <h3 className="text-lg Laptop-L:text-[21px] font-Yekan-medium">
                منتخب محصولات تخفیف و حراج
              </h3>
            </div>
            <SelectionDiscount />
          </div>
        </div>

        {/* Blog */}
        <div className="w-full max-w-[83.5rem] mx-auto text-center px-4  mt-6">
          <div className="flex items-center justify-between px-5 py-4">
            <h3 className="font-Yekan-bold">خواندنی‌ها</h3>
            <span className="flex gap-2 text-xs font-Yekan-bold text-[#19bfd3] hover:cursor-pointer">
              مطالب بیشتر در دیجی‌کالا مگ
              <IoIosArrowBack />
            </span>
          </div>
          <Blog />
        </div>
      </main>
    );
  }
}

export default MainLayout;
