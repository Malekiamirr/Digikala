import {ProductIconsList} from "../index";
import {FiInfo} from "react-icons/fi";

function ProductPhotos({product}) {
  return (
    <div className="ml-4">
        <div className="flex">
            <div className="flex mb-2">
                {/* Icons */}
                <ProductIconsList/>

                {/* Photo */}
                <div>
                    <img className="w-1/2 mix-blend-color-burn" src={product.productImage[0].image} alt={product.name} />
                </div>
            </div>
        </div>

        {/* Sub Images */}
        <div className="flex mt-5 mb-3">
                       { product.productImage.map((image, i)=>
             <div key={i} className=" p-1 ml-2 border border-[#e0e0e6] rounded-lg">
                <img src={image.image} alt="photo" className="w-[72px] h-[72px]"/>
            </div>)}
        </div>

        {/* Report text */}
        <div className="flex items-center mt-4">
            <div className="flex items-center gap-2 ml-9">
                <FiInfo className="text-[#767790]"/>
                <span className="text-[#767790] text-xs">گزارش نادرستی مشخصات</span>
            </div>
            <span className="text-[#9e9fb1] text-[11px]">
                            DKP-10849401
            </span>
        </div>
    </div>
  )
}

export default ProductPhotos