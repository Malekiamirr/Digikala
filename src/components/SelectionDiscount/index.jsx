import { CountDownTimer } from "..";
import {useGetSelectionDiscountQuery} from "../../api/apiSlice";
import {BsPlusCircle} from "react-icons/bs";

function SelectionDiscount() {
  const {data:products, isLoading, isError} = useGetSelectionDiscountQuery();
  if (isLoading || isError) {
    return;
  }
  
  return (
    <div className="grid grid-cols-2 Laptop-L:grid-cols-5 min-[1280px]:grid-cols-6">
      {products.map(product=> (
        <div key={product.id} className={`hover:cursor-pointer px-6 py-3 ${product.id > 12 ? "min-[1280px]:border-b-0" : "min-[1280px]:border-b"} ${product.id > 15 ? "Laptop-L:border-b-0" : "Laptop-L:border-b"} ${product.id > 16 ? "border-b-0" : "border-b"} ${product.id % 2 === 1 ? "border-l" : ""} ${product.id % 5 === 0 ? "Laptop-L:border-l-0" : "Laptop-L:border-l"} ${product.id % 6 === 0 ? "min-[1280px]:border-l-0" : "min-[1280px]:border-l"}`}>   
          <div className="relative flex items-center justify-center Laptop-L:py-3 Laptop-L:px-2">
            <img src={product.image} className="w-[130px] h-[130px] Laptop-L:w-[150px] Laptop-L:h-[150px] Laptop-L:mx-[23px]" />
            {product.plusIcon && <BsPlusCircle className="w-6 h-6 absolute text-[#ef4056] bottom-5 right-5"/>}
          </div>

          <div className="flex justify-between">
            <p className="bg-[#ef4056] text-white rounded-full px-2 mr-1 text-xs font-Yekan-bold flex justify-center items-center">{product.discount}٪</p>
            <p className="font-Yekan-bold text-[#3f4064] text-sm Laptop-L:text-base">{product.discountPrice} <span className="text-xs">تومان</span></p>
          </div>

          <div className="flex justify-end pl-5 mt-2">
            <span className="text-xs text-[#c3c3ce] line-through">{product.mainPrice}</span>
          </div>

          {product.soldOut && 
            <div className="hidden w-full h-1 my-2 rotate-180 bg-gray-200 rounded-full Laptop-L:block">
              <div className={`bg-[#ef4056] h-1 rounded-full`} style={{width: `${product.soldOutPercent}`}}></div>
            </div>
          }

          <div className="flex justify-between">
            {product.soldOut && 
            <div className="hidden text-[11px] Laptop-L:flex items-center gap-3">
              <span className="text-[#ef4056] text-[10px]">{product.soldOut}</span>
              <span className="text-[#767790]">فروش رفته</span> 
            </div>}
            {product.timeLeft && 
              <div className="flex justify-end w-full pt-4 pb-2 Laptop-L:w-auto Laptop-L:py-0 Laptop-L:block">
                <CountDownTimer duration={product.secondLeft}/>
              </div>
            }
          </div>

        </div>
      ))}
    </div>
  )
}

export default SelectionDiscount