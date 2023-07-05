import { useState } from "react";
import {TiTick} from "react-icons/ti";

function ProductColors() {
  const [whichColor, setWhichColor] = useState(1);
  const handleWhichColor = (number) => {
    setWhichColor(number);
  }
  return (
    <div>
        {/* Color text */}
        <div className="py-3">
            <p className="font-Yekan-bold text-[#080a38]">رنگ: {"سبز"}</p>
        </div>
        {/* Color case */}
        <div className="flex items-center">
            <div onClick={()=> handleWhichColor(1)} className={`w-10 h-10 mb-2 ml-2 ${whichColor === 1 ? "border-[#19bfd3] border-4" : "p-1 border"}  rounded-full hover:cursor-pointer`}>
                <div className="bg-[#C99212] w-full h-full rounded-full flex items-center justify-center">
                {whichColor === 1 && <TiTick className="w-5 h-5 text-white"/>}
                </div>
            </div>
            <div onClick={()=> handleWhichColor(2)} className={`w-10 h-10 mb-2 ml-2  rounded-full ${whichColor === 2 ? "border-[#19bfd3] border-4" : "p-1 border"} hover:cursor-pointer`}>
                <div className="bg-[#00E676] w-full h-full rounded-full flex items-center justify-center">
                    {whichColor === 2 && <TiTick className="w-5 h-5 text-white"/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductColors