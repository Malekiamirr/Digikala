import { useState } from 'react';
import { BiSortDown } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiListSettingsFill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { SearchFilter, CheckBox, ShowPhoneCards } from '../../components';
import convertToPersian from '../../utils/convertToPersianNumber';
import { useLoaderData, useParams } from 'react-router-dom';

function ProductListPage() {
  const [whichDropdownIsOpen, setWhichDropdownIsOpen] = useState(0);
  const [isFliterOpen, setIsFliterOpen] = useState(false);
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const [isJustDiscount, setIsJustDiscount] = useState(false);
  const [isMostExpensive, setIsMostExpensive] = useState(false);
  const [isCheapest, setIsCheapest] = useState(false);
  const [isNewest, setIsNewest] = useState(false);
  const [isApple, setIsApple] = useState(false);
  const [isSamsung, setIsSamsung] = useState(false);
  const [isNokia, setIsNokia] = useState(false);
  const [isOneSIMcard, setIsOneSIMcard] = useState(false);
  const [isTwoSIMcard, setIsTwoSIMcard] = useState(false);
  const [isThreeSIMcard, setIsThreeSIMcard] = useState(false);
  const [is2G, setIs2G] = useState(false);
  const [is3G, setIs3G] = useState(false);
  const [is4G, setIs4G] = useState(false);
  const [is5G, setIs5G] = useState(false);
  const [isRAM2, setIsRAM2] = useState(false);
  const [isRAM4, setIsRAM4] = useState(false);
  const [isRAM16, setIsRAM16] = useState(false);

  const params = useParams();
  const phones = useLoaderData();

  let filteredPhones = phones;
  if (isJustDiscount) {
    filteredPhones = filteredPhones.filter((phone) => phone.offer);
  }
  if (isMostExpensive) {
    if (isJustDiscount) {
      filteredPhones = [...phones].sort((a, b) => b.price - a.price);
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = [...phones].sort((a, b) => b.price - a.price);
    }
  }
  if (isCheapest) {
    if (isJustDiscount) {
      filteredPhones = [...phones].sort((a, b) => a.price - b.price);
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = [...phones].sort((a, b) => a.price - b.price);
    }
  }
  if (isNewest) {
    if (isJustDiscount) {
      filteredPhones = [...phones].sort(
        (a, b) =>
          new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
      );
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = [...phones].sort(
        (a, b) =>
          new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
      );
    }
  }

  if (isApple) {
    if (isJustDiscount) {
      filteredPhones = phones.filter(
        (phone) => phone.brand && phone.brand === 'اپل'
      );
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = phones.filter(
        (phone) => phone.brand && phone.brand === 'اپل'
      );
    }
  }

  if (isSamsung) {
    if (isJustDiscount) {
      filteredPhones = filteredPhones.filter(
        (phone) => phone.brand && phone.brand === 'سامسونگ'
      );
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = filteredPhones.filter(
        (phone) => phone.brand && phone.brand === 'سامسونگ'
      );
    }
  }

  if (isNokia) {
    if (isJustDiscount) {
      filteredPhones = filteredPhones.filter(
        (phone) => phone.brand && phone.brand === 'نوکیا'
      );
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = filteredPhones.filter(
        (phone) => phone.brand && phone.brand === 'نوکیا'
      );
    }
  }

  if (isOneSIMcard) {
    if (isJustDiscount) {
      filteredPhones = phones.filter(
        (phone) =>
          phone.productsValues[0] && phone.productsValues[0].value === 'یک عدد'
      );
      filteredPhones = phones.filter((phone) => phone.offer);
    } else {
      filteredPhones = phones.filter(
        (phone) =>
          phone.productsValues[0] && phone.productsValues[0].value === 'یک عدد'
      );
    }
  }

  if (isTwoSIMcard) {
    if (isJustDiscount) {
      filteredPhones = filteredPhones.filter(
        (phone) =>
          phone.productsValues[0] && phone.productsValues[0].value === 'دو عدد'
      );
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = filteredPhones.filter(
        (phone) =>
          phone.productsValues[0] && phone.productsValues[0].value === 'دو عدد'
      );
    }
  }

  if (isThreeSIMcard) {
    if (isJustDiscount) {
      filteredPhones = filteredPhones.filter(
        (phone) =>
          phone.productsValues[0] && phone.productsValues[0].value === 'سه عدد'
      );
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = filteredPhones.filter(
        (phone) =>
          phone.productsValues[0] && phone.productsValues[0].value === 'سه عدد'
      );
    }
  }

  if (is2G) {
    if (isJustDiscount) {
      filteredPhones = filteredPhones.filter(
        (phone) =>
          phone.productsValues[1] && phone.productsValues[1].value === '2G'
      );
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = filteredPhones.filter(
        (phone) =>
          phone.productsValues[1] && phone.productsValues[1].value === '2G'
      );
    }
  }

  if (is3G) {
    if (isJustDiscount) {
      filteredPhones = filteredPhones.filter(
        (phone) =>
          phone.productsValues[1] && phone.productsValues[1].value === '3G'
      );
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = filteredPhones.filter(
        (phone) =>
          phone.productsValues[1] && phone.productsValues[1].value === '3G'
      );
    }
  }

  if (is4G) {
    if (isJustDiscount) {
      filteredPhones = filteredPhones.filter(
        (phone) =>
          phone.productsValues[1] && phone.productsValues[1].value === '4G'
      );
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = filteredPhones.filter(
        (phone) =>
          phone.productsValues[1] && phone.productsValues[1].value === '4G'
      );
    }
  }

  if (is5G) {
    if (isJustDiscount) {
      filteredPhones = filteredPhones.filter(
        (phone) =>
          phone.productsValues[1] && phone.productsValues[1].value === '5G'
      );
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = filteredPhones.filter(
        (phone) => phone.productsValues[1].value === '5G'
      );
    }
  }

  if (isRAM2) {
    if (isJustDiscount) {
      filteredPhones = filteredPhones.filter(
        (phone) => phone.productsValues[2]?.value === 'دو گیگابایت'
      );
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = filteredPhones.filter(
        (phone) => phone.productsValues[2]?.value === 'دو گیگابایت'
      );
    }
  }

  if (isRAM4) {
    if (isJustDiscount) {
      filteredPhones = filteredPhones.filter(
        (phone) => phone.productsValues[2]?.value === 'چهار گیگابایت'
      );
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = filteredPhones.filter(
        (phone) => phone.productsValues[2]?.value === 'چهار گیگابایت'
      );
    }
  }

  if (isRAM16) {
    if (isJustDiscount) {
      filteredPhones = filteredPhones.filter(
        (phone) => phone.productsValues[2]?.value === 'شانزده گیگابایت'
      );
      filteredPhones = filteredPhones.filter((phone) => phone.offer);
    } else {
      filteredPhones = filteredPhones.filter(
        (phone) => phone.productsValues[2]?.value === 'شانزده گیگابایت'
      );
    }
  }

  const handleWhichDropdownIsOpen = (whichOne) => {
    if (whichOne === whichDropdownIsOpen) {
      setWhichDropdownIsOpen(0);
    } else {
      setWhichDropdownIsOpen(whichOne);
    }
  };

  const handleIsFilterOpen = () => {
    setIsFliterOpen(!isFliterOpen);
    if (!isFliterOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const handleIsSortingOpen = () => {
    setIsSortingOpen(!isSortingOpen);
    if (!isSortingOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const handleNewest = () => {
    setIsNewest(true);
    setIsCheapest(false);
    setIsMostExpensive(false);
  };

  const handleMostExpensive = () => {
    setIsMostExpensive(true);
    setIsNewest(false);
    setIsCheapest(false);
  };

  const handleCheapest = () => {
    setIsCheapest(true);
    setIsNewest(false);
    setIsMostExpensive(false);
  };

  const handleRemoveSorting = () => {
    setIsCheapest(false);
    setIsNewest(false);
    setIsMostExpensive(false);
  };

  const handleRemoveFilters = () => {
    setIsJustDiscount(false);
    setIsApple(false);
    setIsSamsung(false);
    setIsNokia(false);
    setIsOneSIMcard(false);
    setIsTwoSIMcard(false);
    setIsThreeSIMcard(false);
    setIs2G(false);
    setIs3G(false);
    setIs4G(false);
    setIs5G(false);
    setIsRAM2(false);
    setIsRAM4(false);
    setIsRAM16(false);
  };

  return (
    <div className="w-full max-w-[1676px] mx-auto">
      <div className="w-full px-5">
        <nav className="flex items-center gap-2 py-5 text-xs text-[#767790]">
          <span>{'فروشگاه اینترنتی دیجی‌کالا'}</span>
          <span>/</span>
          <span>{'موبایل'}</span>
        </nav>
        <div className="flex items-center my-5 font-Yekan-bold text-[#080a38]">
          {'گوشی موبایل'}
        </div>
        <div className="flex items-stretch justify-between gap-4">
          {/* Filter Box */}
          <section className="hidden Laptop-L:block min-w-[270px] w-[250px]">
            <div className="border border-[#e0e0e6] rounded-lg sticy bg-white top-[9rem] left-0">
              <div className="flex items-center justify-between px-5 py-4">
                <p className="text-[#3f4064] text-[19px] font-Yekan-bold">
                  فیلترها
                </p>
                <button
                  onClick={handleRemoveFilters}
                  className="text-[#19bfd3] text-xs font-Yekan-bold"
                >
                  حذف فیلتر ها
                </button>
              </div>
              <div className="flex flex-col pb-4">
                <div className="px-5">
                  {/* brands filter */}
                  <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                    <div
                      onClick={() => handleWhichDropdownIsOpen(1)}
                      className="flex items-center justify-between"
                    >
                      <p>{'برند'}</p>
                      <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]" />
                    </div>
                    <div
                      className={`${
                        whichDropdownIsOpen !== 1 && 'hidden'
                      } pt-2`}
                    >
                      <SearchFilter placeholder={'جستوجو در برند'} />
                      <CheckBox
                        text={{ main: 'apple', sub: 'اپل' }}
                        handleChecked={setIsApple}
                      />
                      <CheckBox
                        text={{ main: 'samsung', sub: 'سامسونگ' }}
                        handleChecked={setIsSamsung}
                      />
                      <CheckBox
                        text={{ main: 'pgone-nokia', sub: 'نوکیا' }}
                        handleChecked={setIsNokia}
                      />
                    </div>
                  </div>
                  {/* just discount products filter */}
                  <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                    <div className="flex items-center justify-between">
                      <p>{'فقط کالا های تخفیف دار'}</p>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          onChange={() => setIsJustDiscount(!isJustDiscount)}
                          checked={isJustDiscount}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#19bfd3]"></div>
                      </label>
                    </div>
                  </div>

                  {/* just available products filter */}
                  <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                    <div className="flex items-center justify-between">
                      <p>{'فقط کالا های موجود'}</p>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#19bfd3]"></div>
                      </label>
                    </div>
                  </div>

                  {/* brands filter */}
                  <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                    <div
                      onClick={() => handleWhichDropdownIsOpen(2)}
                      className="flex items-center justify-between"
                    >
                      <p>{'تعداد سیم‌کارت'}</p>
                      <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]" />
                    </div>
                    <div
                      className={`${
                        whichDropdownIsOpen !== 2 && 'hidden'
                      } pt-2`}
                    >
                      <CheckBox
                        handleChecked={setIsOneSIMcard}
                        text={{ main: 'یک عدد' }}
                      />
                      <CheckBox
                        handleChecked={setIsTwoSIMcard}
                        text={{ main: 'دو عدد' }}
                      />
                      <CheckBox
                        handleChecked={setIsThreeSIMcard}
                        text={{ main: 'سه عدد' }}
                      />
                    </div>
                  </div>

                  {/* communication networks filter */}
                  <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                    <div
                      onClick={() => handleWhichDropdownIsOpen(3)}
                      className="flex items-center justify-between"
                    >
                      <p>{'شبکه های ارتباطی'}</p>
                      <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]" />
                    </div>
                    <div
                      className={`${
                        whichDropdownIsOpen !== 3 && 'hidden'
                      } pt-2`}
                    >
                      <CheckBox handleChecked={setIs2G} text={{ main: '۲G' }} />
                      <CheckBox handleChecked={setIs3G} text={{ main: '۳G' }} />
                      <CheckBox handleChecked={setIs4G} text={{ main: '۴G' }} />
                      <CheckBox handleChecked={setIs5G} text={{ main: '۵G' }} />
                    </div>
                  </div>

                  {/* RAM memory filter */}
                  <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                    <div
                      onClick={() => handleWhichDropdownIsOpen(4)}
                      className="flex items-center justify-between"
                    >
                      <p>{'مقدار RAM'}</p>
                      <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]" />
                    </div>
                    <div
                      className={`${
                        whichDropdownIsOpen !== 4 && 'hidden'
                      } pt-2`}
                    >
                      <SearchFilter placeholder={'جستوجو مقدار RAM'} />
                      <CheckBox
                        handleChecked={setIsRAM4}
                        text={{ main: 'چهار گیگابایت' }}
                      />
                      <CheckBox
                        handleChecked={setIsRAM2}
                        text={{ main: 'دو گیگابایت' }}
                      />
                      <CheckBox
                        handleChecked={setIsRAM16}
                        text={{ main: '۱۶ گیگابایت' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grow">
            <div className="flex flex-col">
              {filteredPhones.length > 0 && (
                <div className="flex border-b">
                  <div
                    onClick={handleIsFilterOpen}
                    className="flex items-center py-3 ml-6 Laptop-L:hidden hover:cursor-pointer"
                  >
                    <RiListSettingsFill className="w-6 h-6 ml-2" />
                    <p className="text-xs font-Yekan-bold">فیلتر</p>
                  </div>
                  <div
                    onClick={handleIsSortingOpen}
                    className="flex items-center py-3 hover:cursor-pointer"
                  >
                    <BiSortDown className="w-6 h-6 ml-2" />
                    <p className="text-xs font-Yekan-bold hover:cursor">
                      مرتب سازی:
                    </p>
                  </div>
                  <div className="items-center justify-between hidden grow Laptop-L:flex">
                    <div className="flex items-center gap-4 pr-4">
                      <span
                        onClick={handleRemoveSorting}
                        className="text-xs hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#767790]"
                      >
                        پرفروش‌ترین‌
                      </span>
                      <span
                        onClick={handleRemoveSorting}
                        className="text-xs hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#767790]"
                      >
                        مرتبط‌ترین
                      </span>
                      <span
                        onClick={handleRemoveSorting}
                        className="text-xs hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#767790]"
                      >
                        پربازدیدترین‌
                      </span>
                      <span
                        onClick={handleNewest}
                        className="text-xs hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#767790]"
                      >
                        جدیدترین‌
                      </span>
                      <span
                        onClick={handleCheapest}
                        className="text-xs hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#767790]"
                      >
                        ارزان‌ترین‌
                      </span>
                      <span
                        onClick={handleMostExpensive}
                        className="text-xs hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#767790]"
                      >
                        گران‌ترین‌
                      </span>
                    </div>
                    <div className="text-xs text-[#767790]">
                      {convertToPersian(filteredPhones.length)}
                    </div>
                  </div>
                </div>
              )}
              <ShowPhoneCards phones={filteredPhones} />
            </div>
          </section>
        </div>
      </div>
      {/* filter window in Laptop size and smaller */}
      <div
        className={`bg-white z-50 absolute h-screen w-full top-0 left-0 right-0 transition-all ${
          !isFliterOpen ? 'translate-y-[100%] hidden' : ''
        }`}
      >
        <div className="px-5 py-4">
          <div className="flex items-center pb-4">
            <IoClose
              onClick={handleIsFilterOpen}
              className="w-6 h-6 ml-5 hover:cursor-pointer"
            />
            <div className="w-full text-sm font-Yekan-bold">فیلتر</div>
            <div
              onClick={handleRemoveFilters}
              className="text-[#19bfd3] text-xs font-Yekan-bold min-w-max"
            >
              حذف فیلترها
            </div>
          </div>
          <div className="py-4">
            <div className="flex flex-col pb-4">
              <div className="px-5">
                {/* brands filter */}
                <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                  <div
                    onClick={() => handleWhichDropdownIsOpen(1)}
                    className="flex items-center justify-between"
                  >
                    <p>{'برند'}</p>
                    <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]" />
                  </div>
                  <div
                    className={`${whichDropdownIsOpen !== 1 && 'hidden'} pt-2`}
                  >
                    <SearchFilter placeholder={'جستوجو در برند'} />
                    <CheckBox
                      text={{ main: 'apple', sub: 'اپل' }}
                      handleChecked={setIsApple}
                    />
                    <CheckBox
                      text={{ main: 'samsung', sub: 'سامسونگ' }}
                      handleChecked={setIsSamsung}
                    />
                    <CheckBox
                      text={{ main: 'pgone-nokia', sub: 'نوکیا' }}
                      handleChecked={setIsNokia}
                    />
                  </div>
                </div>
                {/* just discount products filter */}
                <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                  <div className="flex items-center justify-between">
                    <p>{'فقط کالا های تخفیف دار'}</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#19bfd3]"></div>
                    </label>
                  </div>
                </div>

                {/* just available products filter */}
                <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                  <div className="flex items-center justify-between">
                    <p>{'فقط کالا های موجود'}</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#19bfd3]"></div>
                    </label>
                  </div>
                </div>

                {/* brands filter */}
                <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                  <div
                    onClick={() => handleWhichDropdownIsOpen(2)}
                    className="flex items-center justify-between"
                  >
                    <p>{'تعداد سیم‌کارت'}</p>
                    <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]" />
                  </div>
                  <div
                    className={`${whichDropdownIsOpen !== 2 && 'hidden'} pt-2`}
                  >
                    <CheckBox
                      handleChecked={setIsOneSIMcard}
                      text={{ main: 'یک عدد' }}
                    />
                    <CheckBox
                      handleChecked={setIsTwoSIMcard}
                      text={{ main: 'دو عدد' }}
                    />
                    <CheckBox
                      handleChecked={setIsThreeSIMcard}
                      text={{ main: 'سه عدد' }}
                    />
                  </div>
                </div>

                {/* communication networks filter */}
                <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                  <div
                    onClick={() => handleWhichDropdownIsOpen(3)}
                    className="flex items-center justify-between"
                  >
                    <p>{'تعداد سیم‌کارت'}</p>
                    <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]" />
                  </div>
                  <div
                    className={`${whichDropdownIsOpen !== 3 && 'hidden'} pt-2`}
                  >
                    <CheckBox handleChecked={setIs2G} text={{ main: '۲G' }} />
                    <CheckBox handleChecked={setIs3G} text={{ main: '۳G' }} />
                    <CheckBox handleChecked={setIs4G} text={{ main: '۴G' }} />
                    <CheckBox handleChecked={setIs5G} text={{ main: '۵G' }} />
                  </div>
                </div>

                {/* RAM memory filter */}
                <div className="py-5 border-b border-b-[#f1f2f4] hover:cursor-pointer">
                  <div
                    onClick={() => handleWhichDropdownIsOpen(4)}
                    className="flex items-center justify-between"
                  >
                    <p>{'مقدار RAM'}</p>
                    <MdKeyboardArrowDown className="w-6 h-6 text-[#9e9fb1]" />
                  </div>
                  <div
                    className={`${whichDropdownIsOpen !== 4 && 'hidden'} pt-2`}
                  >
                    <SearchFilter placeholder={'جستوجو مقدار RAM'} />
                    <CheckBox
                      handleChecked={setIsRAM4}
                      text={{ main: 'چهار گیگابایت' }}
                    />
                    <CheckBox
                      handleChecked={setIsRAM2}
                      text={{ main: 'دو گیگابایت' }}
                    />
                    <CheckBox
                      handleChecked={setIsRAM16}
                      text={{ main: '۱۶ گیگابایت' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sort window in Laptop size and smaller */}
      <div
        onClick={handleIsSortingOpen}
        className={`bg-black bg-opacity-30 z-40 absolute h-screen w-full bottom-0 left-0 right-0 transition-all ${
          !isSortingOpen ? 'translate-y-[100%] hidden' : ''
        }`}
      >
        {filteredPhones && (
          <div className="absolute bottom-0 left-0 right-0 z-50 w-full p-5 bg-white h-max rounded-t-3xl">
            <div className="flex items-center pb-4">
              <IoClose
                onClick={handleIsSortingOpen}
                className="w-6 h-6 ml-5 hover:cursor-pointer"
              />
              <div className="w-full font-Yekan-bold">مرتب سازی بر اساس</div>
            </div>
            <div className="flex flex-col gap-4">
              <span
                onClick={handleRemoveSorting}
                className="text-[13px] pt-2 pb-4 border-b border-b-[#f1f2f4] font-Yekan-bold hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#3f4064]"
              >
                پرفروش‌ترین‌
              </span>
              <span
                onClick={handleRemoveSorting}
                className="text-[13px] pt-2 pb-4 border-b border-b-[#f1f2f4] font-Yekan-bold hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#3f4064]"
              >
                مرتبط‌ترین
              </span>
              <span
                onClick={handleRemoveSorting}
                className="text-[13px] pt-2 pb-4 border-b border-b-[#f1f2f4] font-Yekan-bold hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#3f4064]"
              >
                پربازدیدترین‌
              </span>
              <span
                onClick={handleNewest}
                className="text-[13px] pt-2 pb-4 border-b border-b-[#f1f2f4] font-Yekan-bold hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#3f4064]"
              >
                جدیدترین‌
              </span>
              <span
                onClick={handleCheapest}
                className="text-[13px] pt-2 pb-4 border-b border-b-[#f1f2f4] font-Yekan-bold hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#3f4064]"
              >
                ارزان‌ترین‌
              </span>
              <span
                onClick={handleMostExpensive}
                className="text-[13px] pt-2 pb-4 font-Yekan-bold hover:cursor-pointer hover:font-Yekan-bold hover:text-[#ef394e] text-[#3f4064]"
              >
                گران‌ترین‌
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductListPage;
