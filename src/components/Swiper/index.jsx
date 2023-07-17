import { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import classNames from 'classnames';

const Swiper = ({ slides, isLoading }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides]);

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }
    }, 5000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    resetInterval();
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
    resetInterval();
  };

  if (isLoading) {
    return (
      <div className="relative h-[268px] Laptop-L:h-[350px] bg-gray-200 animate-pulse"></div>
    );
  }

  return (
    <div className="overflow-hidden relative group">
      <div className="overflow-hidden">
        <ul
          className="transition-transform duration-500 ease-in-out flex"
          style={{
            transform: `translateX(${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <li
              key={index}
              className="w-full flex-shrink-0 Laptop-L:h-full h-[268px]"
            >
              <img
                src={slide.image}
                alt={slide.name}
                className="w-full h-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
      {/* Dots */}
      <div className="flex absolute bottom-2 left-[50%] -translate-x-[50%] items-center">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={classNames('rounded-full mx-1 focus:outline-none', {
              'bg-[#080a38] opacity-[0.4] h-1 w-1': index !== currentSlide,
              'bg-white w-4 h-[6px]': index === currentSlide,
            })}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="absolute right-0 Laptop-L:bottom-[42px] bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center">
        <button
          className="border border-[#c3c3ce] rounded-full bg-white Laptop-L:w-10 Laptop-L:h-10 Laptop:w-8 mr-4 Laptop:h-8 w-6 h-6 Tablet:mr-10 ml-1 rotate-180 flex items-center justify-center"
          onClick={goToPrevSlide}
        >
          <MdKeyboardArrowLeft className="Laptop-L:w-6 Laptop-L:h-6 w-4 h-4 text-[#3f4064]" />
        </button>
        <button
          className="border border-[#c3c3ce] rounded-full bg-white Laptop-L:w-10 Laptop-L:h-10 Laptop:w-8 Laptop:h-8 w-6 h-6 mr-1 flex items-center justify-center"
          onClick={goToNextSlide}
        >
          <MdKeyboardArrowLeft className="Laptop-L:w-6 Laptop-L:h-6 w-4 h-4 text-[#3f4064]" />
        </button>
      </div>
    </div>
  );
};

export default Swiper;
