import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useGetBrandsQuery } from '../../api/apiSlice';
import { useState } from 'react';

function PopularBrands() {
  const { data: brands, isLoading, isError } = useGetBrandsQuery();
  const [cordinate, setCordinate] = useState(0);
  if (isError || isLoading) {
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
    <div className="Laptop-L:overflow-hidden overflow-x-scroll box-container relative group">
      {/* left button */}
      <button
        onClick={() => {
          handleMove('left');
        }}
        disabled={cordinate === 11}
        className={`${
          cordinate === 11 && 'group-hover:invisible'
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
        className={`flex px-3 pt-2 pb-6 mt-3 transform transition-transform duration-300 w-auto h-auto`}
        style={{ transform: `translateX(${cordinate * 142}px)` }}
      >
        {brands.map((brand) => (
          <div key={brand.id} className="flex items-center">
            <div className="hover:cursor-pointer w-[70px] h-[70px] Laptop-L:w-[110px] Laptop-L:h-[110px] flex items-center justify-center">
              <img
                src={brand.image}
                alt={`${brand.name} icon`}
                className="w-full"
              />
            </div>
            <span className="w-px h-full mx-4 bg-slate-200"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularBrands;
