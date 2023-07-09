import {useState} from 'react'
import { useGetPhoneProductsQuery } from '../../api/apiSlice';

function Test() {
  const [activeIndex, setActiveIndex] = useState(0);
  const {data, isError, isLoading} = useGetPhoneProductsQuery();
  if (isError, isLoading) {
    return;
  }
  const images = data[0].productImage;

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="relative">
      <div className="w-32 overflow-hidden">
        <div className="flex w-full transition-transform duration-300 ease-in-out" style={{ transform: `translateX(${activeIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-2 gap">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full ${
              index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Test