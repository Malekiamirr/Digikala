import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [slides, isDragging]);

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

  const handleDragStart = (event) => {
    setIsDragging(true);
    setDragStartX(event.clientX || event.touches[0].clientX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (event) => {
    if (!isDragging) return;

    const currentX = event.clientX || event.touches[0].clientX;
    const diffX = currentX - dragStartX;
    const sliderWidth = sliderRef.current.offsetWidth;
    const slideWidth = sliderWidth / slides.length;

    if (diffX >= slideWidth / 2 && currentSlide !== 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
      setIsDragging(false);
      resetInterval();
    } else if (diffX <= -slideWidth / 2 && currentSlide !== slides.length - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
      setIsDragging(false);
      resetInterval();
    }
  };

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

  return (
    <div
      className="relative"
      onMouseLeave={handleDragEnd}
      onTouchEnd={handleDragEnd}
    >
      <div
        className="flex"
        ref={sliderRef}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={handleDragMove}
        onTouchMove={handleDragMove}
      >
        {slides.map((slide, index) => (
          <button
            key={index}
            className={classNames(
              'h-2 w-2 rounded-full mx-1 focus:outline-none',
              {
                'bg-gray-900': index === currentSlide,
                'bg-gray-300': index !== currentSlide,
              }
            )}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-900 hover:text-gray-600 transition-colors duration-200 focus:outline-none"
          onClick={goToPrevSlide}
        >
          Previous
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-900 hover:text-gray-600 transition-colors duration-200 focus:outline-none"
          onClick={goToNextSlide}
        >
          Next
        </button>
        <div className="overflow-hidden">
          <ul
            className="transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              display: 'flex',
              transitionProperty: 'transform',
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((slide, index) => (
              <li key={index} className="w-full flex-shrink-0">
                <img src={slide.image} alt={slide.caption} className="w-full" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slider;
