import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdOutlineContentCopy } from 'react-icons/md';
import copyURL from '../../utils/copyUrl';

function ProductShareLink({ isOpen, handleClose }) {
  const [isCopyied, setisCopyied] = useState(false);
  const handleCopyUrl = () => {
    setisCopyied(true);
    copyURL();
  };
  if (isOpen) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
  return (
    <div
      className={`${
        isOpen ? 'opacity-100 z-50' : 'opacity-0 -z-30'
      } fixed top-0 left-0 w-full h-screen bg-black bg-opacity-30 transform transition-transform duration-200`}
    >
      <div className="Laptop-L:max-w-[80vh] Laptop-L:min-w-[460px] w-full Laptop-L:w-auto bg-white absolute Laptop-L:top-[50%] left-[50%] -translate-x-[50%] Laptop-L:-translate-y-[50%] rounded-t-2xl Laptop-L:rounded-lg bottom-0 pb-10 Laptop-L:pb-0 Laptop-L:bottom-auto">
        <div className="flex items-center w-full px-5">
          <div className="flex items-center justify-between border-b-2 border-b-[#e0e0e6] w-full py-4">
            <span className="font-Yekan-bold text-[#080a38]">اشتراک‌گذاری</span>
            <IoClose
              onClick={handleClose}
              className="w-6 h-6 text-[#3f4064] hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="px-5 py-6">
          <div className="pb-4">
            <p className="text-sm">
              این کالا را با دوستان خود به اشتراک بگذارید!
            </p>
            <div className="flex items-center justify-center w-full mt-4">
              <button
                onClick={handleCopyUrl}
                className="flex items-center justify-center border border-[#080a38] text-xs font-Yekan-bold px-4 py-2 w-full rounded-lg hover:cursor-pointer"
              >
                <MdOutlineContentCopy className="w-5 h-5 text-[#3f4064] rotate-18 ml-2" />
                <span>{isCopyied ? 'کپی شد' : 'کپی کردن لینک'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductShareLink;
