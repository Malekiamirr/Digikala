import { RxDotFilled } from "react-icons/rx";

function ProductFeatures({productValue}) {
  return (
    <>
        <ul className=" min-w-[300px] pb-3 border-b border-b-[#f1f2f4]">
            <div className="text-sm Laptop-L:text-base py-3 font-Yekan-bold text-[#080a38]">
                ویژگی‌ها
            </div>
                {productValue.map(feature=> 
                <li key={feature.id} className="flex items-center mb-3">
                    <RxDotFilled className="w-4 h-4 text-[#9e9fb1]"/>
                    <p className="text-xs Laptop-L:text-sm text-[#767790]">{feature.filter} : </p>
                    <p className="mr-2 text-xs Laptop-L:text-sm font-Yekan-bold text-[#3f4064]">{feature.value}</p>
                </li>    
                )}
        </ul>
    </>
  )
}

export default ProductFeatures;