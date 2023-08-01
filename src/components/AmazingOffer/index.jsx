import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import convertToPersian from '../../utils/convertToPersianNumber';
import { useState } from 'react';

function AmazingOffer({ amazingOffer, amazingColor, amazingPhoto }) {
  const [cordinate, setCordinate] = useState(0);
  const gradientStyle = amazingColor?.color1
    ? {
        background: `linear-gradient(90deg, ${amazingColor.color1}, ${amazingColor.color2})`,
      }
    : { background: `linear-gradient(90deg, ${'#ef4056'}, ${'#ef394e'})` };

  const handleMove = (which) => {
    if (which === 'left') {
      setCordinate(cordinate + 1);
    }
    if (which === 'right') {
      setCordinate(cordinate - 1);
    }
  };

  return (
    <div
      className={`mt-6 mb-2 px-[2px] py-5 Laptop-L:rounded-2xl overflow-hidden group relative`}
      style={gradientStyle}
    >
      {/* left button */}
      <button
        onClick={() => {
          handleMove('left');
        }}
        disabled={cordinate === 7}
        className={`${
          cordinate === 7 && 'group-hover:invisible'
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
      <div className="overflow-x-scroll Laptop-L:overflow-hidden box-container">
        <div
          className="flex items-center transition-transform duration-300 transform"
          style={{
            transform: `translateX(${cordinate * 182}px)`,
          }}
        >
          <div className="ml-[2px]">
            <div className="ml-2 mr-5">
              <Link to="/incredible-offers">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="w-[92px] h-[77px]">
                    <img
                      className="w-full"
                      src={
                        'https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg'
                      }
                      alt="پیشنهاد شگفت انگیز"
                    />
                  </div>
                  <div className="w-[145px] h-[115px]">
                    <img
                      className=""
                      src={
                        amazingPhoto
                          ? amazingPhoto
                          : 'https://www.digikala.com/statics/img/png/specialCarousel/box.png'
                      }
                      alt="box"
                    />
                  </div>
                  <div className="flex items-center mt-4 text-sm text-white font-Yekan-bold">
                    <span>مشاهده همه</span>
                    <MdKeyboardArrowLeft className="w-[18px] h-[18px]" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {amazingOffer?.map((product, i) => (
            <div key={i} className="ml-[2px]">
              <Link to={`/product/${product.id}`}>
                <div
                  className={`${
                    i === 0 && 'rounded-r-lg'
                  } p-4 pt-3 w-[182px] max-w-[182px] min-w-[182px] bg-white flex flex-col items-center gap-8 h-[260px]`}
                >
                  <div className="w-[150px] h-[150px]">
                    <img src={product.thumbnail} alt={product.name} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-8">
                      <div className="px-2 py-[2px] text-xs font-Yekan-bold bg-[#ef394e] text-white rounded-full">
                        {convertToPersian(product.stock)}٪
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <span className="text-[#3f4064] font-Yekan-bold text-sm">
                          {convertToPersian(
                            ((100 - product.stock) * product.price) / 100
                          )}
                        </span>
                        <span className="text-[11px] text-[#3f4064] font-Yekan-bold">
                          تومان
                        </span>
                      </div>
                    </div>
                    <div className="pl-5 mr-auto">
                      <div className=" text-[#c3c3ce] text-xs line-through">
                        {convertToPersian(product.price)}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <div className="ml-[2px]">
            <div
              className={`rounded-l-lg p-4 pt-3 w-[182px] max-w-[182px] min-w-[182px] bg-white flex flex-col items-center justify-center gap-8 h-[260px]`}
            >
              <Link to="/product-list">
                <div className="flex flex-col items-center h-full">
                  <div className="p-3 border rounded-full border-[#19bfd3]">
                    <BiArrowBack className="w-5 h-5 text-[#19bfd3]" />
                  </div>
                  <p className="text-sm font-Yekan-bold text-[#3f4064] pt-3">
                    مشاهده همه
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmazingOffer;
