import {useGetDigitalGoodsQuery} from "../../api/apiSlice";
import {IoIosArrowBack} from "react-icons/io";

function DigitalGoods() {
  const {data:products, isLoading, isError} = useGetDigitalGoodsQuery();

  if (isLoading || isError) {
    return;
  }
  
  return (
    <div className="Laptop-L:border Laptop-L:border-[#e0e0e0] rounded-2xl overflow-hidden">
        <div className="flex flex-col justify-between Laptop-L:divide-x Laptop-L:flex-row">
            {products.map((product,i)=> (
                <>
                    <div key={i} className="w-full px-5 py-3 Laptop-L:w-1/4">
                        <div className="mb-2 text-start">
                            <h4 className="text-base font-Yekan-bold text-[#23254e]">{product.name}</h4>
                            <p className="text-[11px] text-[#767790]">بر اساس بازدید های شما</p>
                        </div>
                        
                        <div className="grid grid-cols-2 justify-items-center">
                            {product.items.map((item, i)=> ( 
                                <div key={item.id} className={`${item.id==1 ? "border-l border-b": ""} ${item.id==2 ? "border-b": ""} ${item.id==3 ? "border-l": ""} p-2 Laptop-L:p-3`}>
                                    <img className="Laptop-L:w-32 Laptop-L:h-32" src={item.image} alt={product.name} />
                                    <span className="w-px h-60 bg-slate-400"></span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-1 mb-3">
                        <button className="flex items-center justify-center text-[#19bfd3] text-xs font-Yekan-bold">
                            مشاهده همه
                        <IoIosArrowBack />
                        </button>
                        </div>

                    </div> 
                    {product.id ==1 && <span className="w-px min-h-full bg-slate-400"></span> }
                </>
            ))}
        </div>
        
    </div>
  )
}

export default DigitalGoods