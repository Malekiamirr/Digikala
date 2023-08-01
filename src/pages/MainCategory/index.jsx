import { useParams } from 'react-router-dom';
import {
  useGetAmazingOfferQuery,
  useGetMainCategoryQuery,
} from '../../api/apiSlice';

import { v4 as uuidv4 } from 'uuid';

import { BsStars } from 'react-icons/bs';
import { AiOutlineFire } from 'react-icons/ai';
import { MdOutlineDiscount } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { TbTargetArrow, TbBuildingCarousel, TbDiscount2 } from 'react-icons/tb';

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
  AmazingOffer,
} from '../../components/index';

function MainCategoryPage() {
  const params = useParams();

  const { data: mainCategory, isLoading, isError } = useGetMainCategoryQuery();
  const {
    data: amazingOffer,
    isAmazingofferLoading,
    isAmazingOfferError,
  } = useGetAmazingOfferQuery();
  if (isLoading || isError || isAmazingOfferError || isAmazingofferLoading) {
    return <div></div>;
  }
  const category = mainCategory.find(
    (category) => category.slug === params.mainId
  );

  console.log(category);

  const stories = [
    {
      id: 1,
      title: 'خانه‌ی روشن',
      logo: 'https://image.useinsider.com/digikala/defaultImageLibrary/In-Story%2811%29-1684147321.jpeg',
      image:
        'https://image.useinsider.com/digikala/defaultImageLibrary/In-Story-W%2810%29-1684147326.jpeg',
      open: false,
    },
    {
      id: 2,
      title: 'روغن موتور',
      logo: 'https://image.useinsider.com/digikala/defaultImageLibrary/E16200AB-9D2E-4D0E-BAD9-630939E05A84-1685430904.jpeg',
      image:
        'https://image.useinsider.com/digikala/defaultImageLibrary/255DD6D9-D75B-424A-A60D-3D08098B122D-1685431118.jpeg',
      open: false,
    },
    {
      id: 3,
      title: 'تخفیف روز',
      logo: 'https://image.useinsider.com/digikala/defaultImageLibrary/In-Story.Cover%282%29-1685430927.jpeg',
      image:
        'https://image.useinsider.com/digikala/defaultImageLibrary/In-Story.Web.tulipspsd-1685430916.jpeg',
      open: false,
    },
    {
      id: 4,
      title: 'قرعه‌کشی',
      logo: 'https://image.useinsider.com/digikala/defaultImageLibrary/In-Story.Cover.%DA%AF%DB%8C%D9%85-%D9%86%D8%AA.AA-1684932352.jpeg',
      image:
        'https://image.useinsider.com/digikala/defaultImageLibrary/In-Story.web-1684932368.jpeg',
      open: false,
    },
    {
      id: 5,
      title: 'ارسال امروز',
      logo: 'https://image.useinsider.com/digikala/defaultImageLibrary/In-Story-cover-1684931677.jpeg',
      image:
        'https://image.useinsider.com/digikala/defaultImageLibrary/In-Story-web-1684931889.jpeg',
      open: false,
    },
    {
      id: 6,
      title: 'استایل جذاب',
      logo: 'https://image.useinsider.com/digikala/defaultImageLibrary/In-Story%2812%29-1684757102.jpeg',
      image:
        'https://image.useinsider.com/digikala/defaultImageLibrary/In-Story-w%2812%29-1684757098.jpeg',
      open: false,
    },
    {
      id: 7,
      title: 'آفر ویژه',
      logo: 'https://image.useinsider.com/digikala/defaultImageLibrary/In-StoryC%281%29-1684756783.jpeg',
      image:
        'https://image.useinsider.com/digikala/defaultImageLibrary/In-Story-W%2811%29-1684756793.jpeg',
      open: false,
    },
    {
      id: 8,
      title: 'کادوی تولد',
      logo: 'https://image.useinsider.com/digikala/defaultImageLibrary/851B3EA0-B798-4518-81A8-F5D5C371F005-1684147394.jpeg',
      image:
        'https://image.useinsider.com/digikala/defaultImageLibrary/E44434C2-6E2F-4209-9D31-1F9545FD91D2%281%29-1684147398.jpeg',
      open: false,
    },
  ];

  return (
    <main className="">
      <div className="flex items-center justify-center">
        {stories.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </div>

      <div className="my-2">
        <Swiper slides={category.slider} isLoading={isLoading} />
      </div>

      <div className="px-4 w-full max-w-[83.5rem] mx-auto">
        <HomeFeatures />
      </div>

      <div className="Laptop-L:px-4 w-full max-w-[83.5rem] mx-auto">
        <AmazingOffer
          amazingOffer={amazingOffer}
          amazingColor={category.AmazingOfferSliderColor}
        />
      </div>

      {/* super market */}
      <div className="w-full max-w-[83.5rem] mx-auto mt-1 px-4">
        <SuperMarket />
      </div>

      {/* sub images */}
      <div className="w-full max-w-[83.5rem] mx-auto grid grid-cols-2 gap-4 Laptop-L:grid-cols-4 Laptop-L:gap-x-4 Laptop-L:gap-y-0 mt-6 px-4">
        {category.banner.map((banner) => (
          <img
            key={uuidv4()}
            className="w-full hover:cursor-pointer rounded-2xl"
            alt="banner"
            src={banner.image}
          />
        ))}
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
            <h3 className="text-[14.4px] Mobile-M:text-lg Laptop-L:text-[21px] font-Yekan-medium">
              پرفروش‌ترین کالاها
            </h3>

            <button className="absolute left-4 top-8 text-[#19bfd3] text-[11.2px] Mobile-M:text-sm font-Yekan-bold hover:cursor-pointer">
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

export default MainCategoryPage;
