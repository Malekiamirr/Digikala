import React from 'react';
import { useState } from 'react';
// images
// icons
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineFire } from 'react-icons/ai';
import { MdOutlineDiscount } from 'react-icons/md';
import { CiDiscount1 } from 'react-icons/ci';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { BsQuestionCircle } from 'react-icons/bs';
import { MdOutlineStorefront } from 'react-icons/md';

const Test = () => {
  const [showSide, setShowSide] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* banner */}
      <div className="w-full cursor-pointer">
        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/aa11c9fcd1a061b171fab7e3865fe8033095be70_1686666584.jpg?x-oss-process=image/quality,q_95/format,webp"
          alt=""
        />
      </div>
      {/* end of banner */}

      {/* header */}
      <header className="flex lg:w-5/5 bg-white lg:container mx-auto flex-col pb-1 px-4">
        {/* logo */}
        <div className=" border-b lg:border-none p-1 w-full items-center flex">
          <a className=" lg:hidden mx-auto my-1" href="#">
            <img
              className="h-6 mt-2"
              src={'https://www.digikala.com/statics/img/svg/logo.svg'}
              alt=""
            />
          </a>
        </div>
        {/* end of logo */}
        {/* nav */}
        <nav className="w-full relative  pt-1 mt-1">
          <div className="w-full flex container-4xl-w mx-auto px-4-md justify-between">
            {/* menu */}

            {/* sidbar */}
            <div
              className={`h-screen lg:inline lg:h-auto p-4 lg:p-0  transition-transform hidden bg-gray-200 lg:bg-white w-80 lg:w-full ${
                !showSide ? 'hidden' : ''
              }`}
              tabIndex="-1"
              aria-labelledby="drawer-navigation-label"
            >
              <div className="py-4 lg:py-0">
                <ul className="space-y-2 flex lg:flex-row">
                  <li
                    className={`py-5 hidden lg:inline ${
                      !showMenu ? 'hidden' : ''
                    }`}
                  >
                    <a
                      onMouseOver={() => setShowMenu(!showMenu)}
                      className="flex lg:hover:border-b-2 lg:border-red-600 duration-75 font-bold cursor-pointer mx-1"
                    >
                      <i className="flex mx-1">
                        <RxHamburgerMenu />
                      </i>
                      <p className="mx-1 text-sm">دسته بندی کالاها</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <GiMilkCarton className="text-gray-500 h-5 w-5 lg:w-4" />
                      </i>
                      <p className=" mx-1 text-xs lg:xs">سوپرمارکت</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <AiOutlineFire className="text-gray-500 h-5 w-5 lg:w-4" />
                      </i>
                      <p className=" mx-1 text-xs lg:xs">پرفروش ترین ها</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <MdOutlineDiscount className="text-gray-500 h-5 w-5 lg:w-4" />
                      </i>
                      <p className=" mx-1 text-xs lg:xs">
                        تخفیف ها و پیشنهاد ها
                      </p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <CiDiscount1 className="text-gray-500 h-5 w-5 lg:w-4" />
                      </i>
                      <p className="mx-1 text-xs lg:xs">شگفت انگیز ها</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <BsQuestionCircle className="text-gray-500 h-5 w-5 lg:w-4" />
                      </i>
                      <p className="text-xs mx-1">سوالی دارید؟</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <MdOutlineStorefront className="text-gray-500 h-5 w-5 lg:w-4" />
                      </i>
                      <p className="text-xs mx-1">در دیجی کالا بفروشید!</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*end of sidbar */}

            {/* end of menu */}

            {/* gps */}
            <div></div>

            <div className="flex felx-row justify-between mr-auto lg:w-20 my-auto">
              <div className="flex flex-nowrap">
                <i className="text-orange-400">
                  <HiOutlineLocationMarker />
                </i>
                {/* <p className="text-xs">ارسال به اردبیل اردبیل</p> */}
                <p className="text-xs">انتخاب شهر</p>
              </div>
              <i className="lg:hidden">
                <MdOutlineKeyboardArrowLeft className="h-5 w-5" />
              </i>
            </div>
            {/* end of gps */}
          </div>
        </nav>
        {/* end of nav */}
      </header>
      {/* en dof header */}
      <MegaMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </>
  );
};

// icons
import { BsPhone } from 'react-icons/bs';
import { AiOutlineLaptop } from 'react-icons/ai';
import { TbSofa } from 'react-icons/tb';
import { RiTShirtLine } from 'react-icons/ri';
import { GiMilkCarton } from 'react-icons/gi';
import { RiPencilRuler2Line } from 'react-icons/ri';
import { TbBabyCarriage } from 'react-icons/tb';
import { RiHeartAddLine } from 'react-icons/ri';
import { FaCampground } from 'react-icons/fa';
import { BiWrench } from 'react-icons/bi';
import { FaCarSide } from 'react-icons/fa';
import { SiIheartradio } from 'react-icons/si';

const MegaMenu = (props) => {
  const listitems = [
    { id: 1, title: 'موبایل', icon: <BsPhone className="h-4 w-4" /> },
    {
      id: 2,
      title: 'کالای دیجیتال',
      icon: <AiOutlineLaptop className="h-4 w-4" />,
    },
    { id: 3, title: 'خانه و آشپزخانه', icon: <TbSofa className="h-4 w-4" /> },
    { id: 4, title: 'مد و پوشاک', icon: <RiTShirtLine className="h-4 w-4" /> },
    {
      id: 5,
      title: 'کالاهای سوپرمارکتی',
      icon: <GiMilkCarton className="h-4 w-4" />,
    },
    {
      id: 6,
      title: 'کتاب لوازم و التحریر هنر',
      icon: <RiPencilRuler2Line className="h-4 w-4" />,
    },
    {
      id: 7,
      title: 'اسباب بازی کودک و نوزاد',
      icon: <TbBabyCarriage className="h-4 w-4" />,
    },
    {
      id: 8,
      title: 'زیبایی و سلامت',
      icon: <RiHeartAddLine className="h-4 w-4" />,
    },
    { id: 9, title: 'ورزش و سفر', icon: <FaCampground className="h-4 w-4" /> },
    {
      id: 10,
      title: 'ابزار و لوازم ساختمانی',
      icon: <BiWrench className="h-4 w-4" />,
    },
    {
      id: 11,
      title: 'خودرو و موتورسیکلت',
      icon: <FaCarSide className="h-4 w-4" />,
    },
    {
      id: 12,
      title: 'محصولات بومی محلی',
      icon: <SiIheartradio className="h-4 w-4" />,
    },
  ];
  const [showItem, setShowItem] = useState(true);

  const [items, setItems] = useState([]);
  const listitem = () => {
    const listitem = [...listitems, ...listitems].map((item) => ({
      ...item,
      id: Math.random(),
    }));
    setItems(listitem);
  };
  return (
    <>
      <div
        id="black"
        style={{ zIndex: '-1' }}
        onMouseOver={() => props.setShowMenu(!props.showMenu)}
        className={`bg-black/50 h-screen sm:mt-[170px] lg:mt-[200px] fixed top-0  w-full overflow-x-hidden overflow-y-auto md:inset-0  max-h-full ${
          !props.showMenu ? 'hidden' : ''
        }`}
      ></div>
      <div
        className={`mx-auto w-4/5 shadow-xl flex flex-row bg-white border h-auto ${
          !props.showMenu ? 'hidden' : ''
        }`}
      >
        <div className="felx flex-col lg:w-1/4 xl:w-1/5  border-l">
          <ul className="h-auto flex flex-col ">
            {listitems.map((items) => (
              <li
                onMouseOver={() => setShowItem(!showItem)}
                className=" my-1 p-4 flex flex-row items-center hover:bg-gray-100 hover:text-red-600 text-xs xl:text-sm cursor-pointer"
                key={items.id}
                title={items.name}
              >
                <i className="ml-2">{items.icon}</i>
                <a href="">{items.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <MenuContent
          showItem={showItem}
          setShowItem={setShowItem}
          items={items}
        />
      </div>
    </>
  );
};

// icons
import { BsChevronLeft } from 'react-icons/bs';

const MenuContent = (props) => {
  const [name, setName] = useState([]);
  const shuffelname = () => {
    const shuffeledname = [...brand, ...brand].map((name) => ({
      ...name,
      id: Math.random(),
    }));
    setName(shuffeledname);
  };
  const brand = [
    { name: 'اپل' },
    { name: 'سامسونگ' },
    { name: 'شیائومی' },
    { name: 'نوکیا' },
    { name: 'هوآوی' },
    { name: 'آنر' },
    { name: 'جی پلاس' },
    { name: 'وان پلاس' },
    { name: 'کاترپیلار' },
    { name: 'ویوو' },
    { name: 'موتورولا' },
    { name: 'جی ال ایکس' },
    { name: 'بلو' },
  ];
  return (
    <>
      {/* content1 */}
      <div
        key={props.items.id}
        className={` flex flex-col  w-4/5 ${!props.showItem ? 'hidden' : ''}`}
      >
        <div className="flex text-xs p-4">
          <p>همه محصولات موبایل</p>
          <i>
            <BsChevronLeft />
          </i>
        </div>

        <div className="flex flex-col ">
          <div className="grid grid-cols-3">
            <div className="flex felx-col  p-2">
              <div className="flex flex-col">
                <div className="flex flex-row items-center hover:text-red-500">
                  <a className="flex items-center" href="#">
                    <h1 className="font-bold p-1 border-r-2 border-red-500 ">
                      برند های مختلف گوشی
                    </h1>
                    <i>
                      <BsChevronLeft />
                    </i>
                  </a>
                </div>
                {/* riz manu */}
                {brand.map((name) => (
                  <div key={name.id} className="flex flex-col p-2 ">
                    <a href="#">
                      <h1 className="text-xs text-gray-500 hover:text-red-500">
                        گوشی {name.name}
                      </h1>
                    </a>
                  </div>
                ))}
                {/* riz manu */}
              </div>
            </div>
            <div className="flex flex-col p-2">
              <div className="flex flex-col">
                <div className="flex flex-row items-center hover:text-red-500">
                  <a className="flex items-center" href="#">
                    <h1 className="font-bold p-1 border-r-2 border-red-500 ">
                      گوشی براساس قیمت
                    </h1>
                    <i>
                      <BsChevronLeft />
                    </i>
                  </a>
                </div>
                {/* riz manu */}
                {brand.map((name) => (
                  <div key={name.id} className="flex fle-col p-2 ">
                    <a href="#">
                      <h1 className="text-xs text-gray-500 hover:text-red-500">
                        گوشی {name.name}
                      </h1>
                    </a>
                  </div>
                ))}
                {/* riz manu */}
              </div>
            </div>
            <div className="flex felx-col p-2">
              <div className="flex flex-col">
                <div className="flex flex-row items-center hover:text-red-500">
                  <a className="flex items-center" href="#">
                    <h1 className="font-bold p-1 border-r-2 border-red-500 ">
                      گوشی براساس حافظه
                    </h1>
                    <i>
                      <BsChevronLeft />
                    </i>
                  </a>
                </div>
                {/* riz manu */}
                {brand.map((name) => (
                  <div className="flex fle-col p-2 ">
                    <a href="#">
                      <h1 className="text-xs text-gray-500 hover:text-red-500">
                        گوشی {name.name}
                      </h1>
                    </a>
                  </div>
                ))}
                {/* riz manu */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content2 */}
    </>
  );
};

export default Test;
