import { useState } from "react";

import ImageMagnify from "../ImageMagnify";
import OfficialImages from "../OfficialImages";

import {ProductIconsList} from "../index";
import {FiInfo} from "react-icons/fi";
import {FaRegPlayCircle} from "react-icons/fa";
import {BsThreeDots} from "react-icons/bs";

function ProductPhotos({product}) {
    const [isClose, setIsClose] = useState(true);

    const handleIsClose = ()=> {
        setIsClose(!isClose);
    }

    return (
    <div className="ml-4">
        <div className="flex flex-col mb-2 Laptop-L:flex-row">
            {/* Icons */}
            <div className="self-end Laptop-L:self-auto">
                <ProductIconsList/>
            </div>

                {/* Photo */}
            <div>
                <ImageMagnify product={product}/>
            </div>
        </div>

        {/* Sub Images */}
        <div className="hidden mt-5 mb-3 Laptop-L:flex">
            <div  onClick={handleIsClose} className=" p-1 ml-2 border border-[#e0e0e6] rounded-lg hover:cursor-pointer relative">
                {product.productVideo[0] && <img src={product.thumbnail} alt="photo" className="w-[72px] h-[72px] blur-sm opacity-50"/>}
                <FaRegPlayCircle className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-6 h-6 text-[#3f4064]"/>
            </div>
            { product.productImage.map((image, i)=>
             <div key={i} className=" p-1 ml-2 border border-[#e0e0e6] rounded-lg hover:cursor-pointer">
                <img src={image.image} alt="photo" className="w-[72px] h-[72px]"/>
            </div>)}

            <div  onClick={handleIsClose} className=" p-1 ml-2 border border-[#e0e0e6] rounded-lg hover:cursor-pointer relative">
                {product.productVideo[0] && <img src={product.productImage[0].image} alt="photo" className="w-[72px] h-[72px] blur-sm opacity-50"/>}
                <BsThreeDots className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-6 h-6 text-[#3f4064]"/>
            </div>
        </div>

        {/* Report text */}
        <div className="items-center hidden mt-4 Laptop-L:flex">
            <div className="flex items-center gap-2 ml-9">
                <FiInfo className="text-[#767790]"/>
                <span className="text-[#767790] text-xs">گزارش نادرستی مشخصات</span>
            </div>
            <span className="text-[#9e9fb1] text-[11px]">
                DKP-10849401
            </span>
        </div>

        {/* Official images */}
        {!isClose && <OfficialImages product={product} onClose={handleIsClose}/>}
        
    </div>
  )
}

export default ProductPhotos