import { useState } from "react";
import {MdKeyboardArrowLeft} from "react-icons/md";

function ProductIntroduction({description}) {
  const [isIntroductionOpen, setIsIntroductionOpen] = useState(false);

  const handleIsIntroductionOpen = ()=> {
        setIsIntroductionOpen(!isIntroductionOpen);
  }

  return (
    <article className="mt-4 pb-5 border-b-4 border-b-[#f1f2f4]">
        <div className="py-3">
            <div className="flex items-center grow">
                <h2 className="font-Yekan-bold">معرفی</h2>
            </div>
            <div className="mt-2 bg-[#ef394e] w-[5rem] h-[0.1rem]"></div>
        </div>
        <div className={`text-sm text-[#23254e] leading-7 ${!isIntroductionOpen && "line-clamp-3"}`}>
            {description}
        </div>
        <button onClick={handleIsIntroductionOpen} className="mt-2 mb-3 text-[#19bfd3] flex items-center text-xs font-Yekan-bold">
            بیشتر
            <MdKeyboardArrowLeft className="w-[18px] h-[18px]"/>
        </button>
    </article>
  )
}

export default ProductIntroduction