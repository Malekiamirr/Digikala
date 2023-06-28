import { useState } from "react";
import { Slider } from "..";
import { BiSearch } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openSearchBox, setOpenSearchBox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //FIX Fetching searched product
    // ..
    setSearchTerm(" ");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full Laptop-L:w-[600px]">
        <div
          onClick={() => setOpenSearchBox(true)}
          className={`relative  rounded-lg bg-[#F1F2F4] transition-all ${
            openSearchBox
              ? "bg-white border border-slate-200 shadow rounded-b-none rounded-t-lg"
              : ""
          }`}
        >
          <div
            className={`mx-4 flex items-center gap-4 h-11
          ${openSearchBox ? "border-b border-[#19BFD3]" : ""}`}
          >
            <BiSearch
              className={`w-6 h-6 text-[#A3A4B5] ${
                openSearchBox ? "text-black" : ""
              }`}
            />
            <input
              type='text'
              className={`w-full h-full bg-transparent placeholder:text-[#767790] placeholder:text-xs outline-none`}
              placeholder='جستجو'
              value={searchTerm}
              onChange={handleChange}
            />
          </div>

          <div
            className={`${
              openSearchBox ? "" : "hidden"
            } absolute w-[600px] -right-px pt-3 pb-4 pr-4 rounded-b-lg bg-white border border-slate-200 border-t-0 shadow`}
          >
            <div className='flex items-center gap-3 py-5'>
              <AiOutlineFire className='w-6 h-6 stroke-2 text-[#A3A4B5]' />
              <p className='text-[#3f4064] font-Yekan-bold text-[15px]'>
                جستجوهای پرطرفدار
              </p>
            </div>
            <div className='-mt-2'>
              <Slider />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchBox;
