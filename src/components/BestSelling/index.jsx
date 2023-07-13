import { useGetBestSellingQuery } from "../../api/apiSlice";

function BestSelling() {
  const {data:products, isLoading, isError} = useGetBestSellingQuery();
  if (isLoading || isError) {
    return;
  }

  return (
    <div className="overflow-hidden">
      <div className="flex justify-between gap-4 px-2 overflow-hidden mt-7">
       {products.map((product , i)=> (
          <div key={i} className="flex flex-col gap-2 w-1/4 min-w-[25%] py-4">
            {product.map(item=>
              <div key={item.id} className="flex items-center justify-center py-6">
                  <img src={item.image} alt={item.description} className="w-[86px] h-[86px] ml-3"/>
                  <span className="relative ml-3 text-[26px] text-[#19bfd3] font-Yekan-extraBold">{item.number}</span>
                  <div className="relative flex flex-col justify-center min-h-[50px] grow text-start">
                    <p className="text-xs text-[#3f4064] leading-7 line-clamp-2">{item.description}</p>
                    <div className="absolute left-0 w-full h-px bg-[#F1F2F4] -bottom-10"></div>
                  </div>
              </div>
            )}

          </div>
        ))}
     </div>
    </div>
    
  )
}

export default BestSelling