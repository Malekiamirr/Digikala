import { IoClose } from 'react-icons/io5';
import { BiPlay } from 'react-icons/bi';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useState } from 'react';
import convertToPersian from '../../utils/convertToPersianNumber';

function OfficialImages({ product, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? product.productImage.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === product.productImage.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-30 z-[50]"
      ></div>
      <div className="bg-white w-full h-screen Laptop-L:h-[70vh] Laptop-L:w-[956px] rounded-lg z-50 fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] Laptop-L:overflow-y-auto">
        {/* Header */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between border-b border-b-[#e0e0e6]">
            <p className="flex flex-col items-center justify-between gap-3 px-4">
              <p className="text-[#ef4056] font-Yekan-bold">تصاویر رسمی</p>
              <span className="w-full h-1 rounded-t-lg bg-[#ef4056]"></span>
            </p>
            <div className="flex items-center justify-end px-4">
              <IoClose
                onClick={onClose}
                className="w-6 h-6 mb-1 text-[#3f4064] hover:cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Main Part */}
        <div className="flex Laptop-L:flex-row flex-col">
          {/* Swiper */}
          <div className="Laptop-L:w-3/5 pr-5 overflow-hidden relative group self-center Laptop-L:self-auto">
            <div className="overflow-hidden">
              <ul
                className="transition-transform duration-500 ease-in-out flex"
                style={{
                  transform: `translateX(${currentSlide * 100}%)`,
                }}
              >
                {product.productImage.map((slide, index) => (
                  <li key={index} className="w-full flex-shrink-0">
                    <img
                      src={slide.image}
                      alt={'image'}
                      className="w-auto Laptop-L:w-full Laptop-L:h-full h-[360px] object-cover mx-auto Laptop-L:mx-0"
                    />
                  </li>
                ))}
              </ul>
            </div>
            {/* Buttons */}
            <div className="absolute right-8 Laptop-L:right-0 Laptop-L:top-0 top-[60%] Laptop-L:bottom-[42px] bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center Laptop-L:justify-between w-full">
              <button
                className={`border border-[#c3c3ce] rounded-full bg-white Laptop-L:w-10 Laptop-L:h-10 Laptop:w-8 mr-4 Laptop:h-8 w-6 h-6 Tablet:mr-10 ml-1 rotate-180 flex items-center justify-center`}
                onClick={goToPrevSlide}
              >
                <MdKeyboardArrowLeft className="Laptop-L:w-6 Laptop-L:h-6 w-4 h-4 text-[#3f4064]" />
              </button>
              <button
                className={`border border-[#c3c3ce] rounded-full bg-white Laptop-L:w-10 Laptop-L:h-10 Laptop:w-8 Laptop:h-8 w-6 h-6 mr-1 flex items-center justify-center`}
                onClick={goToNextSlide}
              >
                <MdKeyboardArrowLeft className="Laptop-L:w-6 Laptop-L:h-6 w-4 h-4 text-[#3f4064]" />
              </button>
            </div>
          </div>

          {/* Sub Images */}
          <div className="flex flex-col Laptop-L:w-2/5 w-full mx-7">
            {/* Small size counter */}
            <div className="flex items-center justify-center gap-1 mb-4 Laptop-L:hidden text-[13px] text-black">
              <span>{convertToPersian(product.productImage.length)}</span>
              <span>/</span>
              <span>{convertToPersian(currentSlide + 1)}</span>
            </div>
            {/* Intro */}
            <div className="py-3 break-words hidden Laptop-L:block">
              <div className="flex items-center grow">
                <p className="grow font-Yekan-bold text-[#080a38] leading-9">
                  {product.name}
                </p>
              </div>
            </div>

            {/* Small Images */}
            <div className="flex flex-wrap">
              {product.productImage.map((image, i) => (
                <div
                  onClick={() => setCurrentSlide(i)}
                  key={i}
                  className="hover:cursor-pointer"
                >
                  <div
                    className={`w-20 h-auto Laptop-L:w-[62px] Laptop-L:h-[62px] border-2 rounded-lg ml-2 mb-3 overflow-hidden ${
                      currentSlide === i && 'border-[#19bfd3]'
                    }`}
                  >
                    <img src={image.image} alt="photo" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfficialImages;
