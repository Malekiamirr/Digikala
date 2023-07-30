import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useSelector } from 'react-redux';

function ProductNotice({ isOpen, handleClose }) {
  const activeUser = useSelector((state) => state.user.lastLoggedInUser);
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(!isChecked);
    handleChecked(!isChecked);
  };

  return (
    <div
      className={`${
        isOpen ? 'opacity-100 z-50' : 'opacity-0 -z-30'
      } fixed top-0 left-0 w-full h-screen bg-black bg-opacity-30 transform transition-transform duration-200`}
    >
      <div className="Laptop-L:max-w-[80vh] Laptop-L:min-w-[460px] w-full Laptop-L:w-auto bg-white absolute Laptop-L:top-[50%] left-[50%] -translate-x-[50%] Laptop-L:-translate-y-[50%] rounded-t-2xl Laptop-L:rounded-lg bottom-0 Laptop-L:bottom-auto">
        <div className="flex items-center w-full px-5">
          <div className="flex items-center justify-between border-b-2 border-b-[#e0e0e6] w-full py-4">
            <span className="font-Yekan-bold text-[#080a38]">اطلاع‌رسانی</span>
            <IoClose
              onClick={handleClose}
              className="w-6 h-6 text-[#3f4064] hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="px-5 py-6">
          <div className="pb-4">
            <p className="text-[#080a38] font-Yekan-bold">
              اگر کالا شگفت‌انگیز شد، چطور به شما اطلاع دهیم؟
            </p>
            <div className="flex items-center w-full gap-4 mt-6">
              <input
                id="default-checkbox"
                type="checkbox"
                onChange={handleChange}
                checked={isChecked}
                className="text-2xl w-[18px] h-[18px] text-blue-600 accent-[#008eb2]"
              />

              <span className="text-xs font-Yekan-bold text-[#3f4064]">
                ارسال ایمیل به {activeUser.email}
              </span>
            </div>
            <div className="flex w-full mt-6 Laptop-L:justify-end">
              <button
                onClick={handleClose}
                className="px-8 py-2 bg-[#ef4056] text-white text-sm font-Yekan-bold rounded-lg Laptop-L:w-auto w-full"
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductNotice;
