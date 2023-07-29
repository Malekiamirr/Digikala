import { useState } from 'react';
import { useGetBestSellingQuery } from '../../api/apiSlice';
import { MdKeyboardArrowLeft } from 'react-icons/md';

function BestSelling() {
  const { data: products, isLoading, isError } = useGetBestSellingQuery();
  const [cordinate, setCordinate] = useState(0);
  if (isLoading || isError) {
    return;
  }

  const handleMove = (which) => {
    if (which === 'left') {
      setCordinate(cordinate + 1);
    }
    if (which === 'right') {
      setCordinate(cordinate - 1);
    }
  };

  return (
    <div className="relative overflow-x-scroll Laptop-L:overflow-hidden box-container group">
      {/* left button */}
      <button
        onClick={() => {
          handleMove('left');
        }}
        disabled={cordinate === 2}
        className={`${
          cordinate === 2 && 'group-hover:invisible'
        } Laptop-L:group-hover:flex hidden border rounded-full absolute left-[8px] top-[50%] -translate-y-[70%] bg-white z-10 items-center justify-center h-10 w-10 border-[#e0e0e6]`}
      >
        <MdKeyboardArrowLeft className="w-6 h-6 text-[#3f4064] opacity-70" />
      </button>
      {/* right button */}
      <button
        onClick={() => {
          handleMove('right');
        }}
        disabled={cordinate === 0}
        className={`${
          cordinate === 0 && 'group-hover:invisible'
        } transition-all Laptop-L:group-hover:flex hidden border rounded-full absolute right-[8px] top-[50%] -translate-y-[70%] bg-white z-10 items-center justify-center h-10 w-10 border-[#e0e0e6] rotate-180`}
      >
        <MdKeyboardArrowLeft className="w-6 h-6 text-[#3f4064] opacity-70" />
      </button>

      <div
        className="flex justify-between w-auto h-auto gap-4 px-2 transition-transform duration-300 transform mt-7"
        style={{ transform: `translateX(${cordinate * 330}px)` }}
      >
        {products.map((product, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 min-w-[280px] Laptop-L:w-[24%] Laptop-L:min-w-[24%] py-4 hover:cursor-pointer"
          >
            {product.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center py-6"
              >
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-[86px] h-[86px]"
                />
                <span className="relative ml-3 text-[26px] text-[#19bfd3] font-Yekan-extraBold">
                  {item.number}
                </span>
                <div className="relative flex flex-col justify-center min-h-[50px] grow text-start">
                  <p className="text-[11px] Laptop-L:text-xs text-[#3f4064] leading-7 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="absolute left-0 w-full h-px bg-[#F1F2F4] -bottom-10"></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSelling;
