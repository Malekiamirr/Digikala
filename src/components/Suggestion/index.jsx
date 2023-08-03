import { Link } from 'react-router-dom';
import { useGetCategoryQuery } from '../../api/apiSlice';
import { v4 as uuidv4 } from 'uuid';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useState } from 'react';

function Suggestion() {
  const [cordinate, setCordinate] = useState(0);
  const { data, isLoading, isError } = useGetCategoryQuery();
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
    <div className="Laptop-L:overflow-hidden overflow-x-scroll box-container relative group border rounded-2xl">
      {/* left button */}
      <button
        onClick={() => {
          handleMove('left');
        }}
        disabled={cordinate === 6}
        className={`${
          cordinate === 6 && 'group-hover:invisible'
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
        style={{ transform: `translateX(${cordinate * 165}px)` }}
      >
        {data.map((category, i) =>
          category.image ? (
            <div
              key={uuidv4()}
              className="w-[162px] min-w-[162px] px-1 py-4 flex flex-col items-center justify-center hover:cursor-pointer border-l"
            >
              <Link to="/search">
                <div className="p-3 rounded-full bg-[#f1f2f4] w-[84px] h-[84px]">
                  <div className="w-[60px] h-[60px]">
                    <img
                      className="w-full mix-blend-multiply"
                      src={category.image}
                      alt="image"
                    />
                  </div>
                </div>
              </Link>
              <p className="mt-2 text-sm line-clamp-1">
                {category.suggestionName || category.name}
              </p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Suggestion;
