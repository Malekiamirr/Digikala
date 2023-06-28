import { useGetBestSellingQuery } from "../../api/apiSlice";

function BestSelling() {
  const {data:products, isLoading, isError} = useGetBestSellingQuery();
  if (isLoading || isError) {
    return;
  }

  return (
    <div className="flex justify-between gap-4 px-2 overflow-hidden mt-7">
       {products.map((product , i)=> (
          <div key={i} className="flex flex-col gap-2 w-1/4 min-w-[25%] py-4">
            {product.map(item=>
              <div key={item.id} className="flex items-center justify-center">
                  <img src={item.image} alt={item.description} className="w-[86px] h-[86px] ml-3"/>
                  <span className="relative ml-3 text-2xl text-[#19bfd3] font-Yekan-extraBold">{item.number}</span>
                  <div className="flex relative flex-col grow justify-center before:contetnt-[' '] before:block before:h-px before:bg-[#e0e0e0] before:absolute before:left-0 before:-bottom-[6px] before:w-full text-start">
                      <p className="text-xs text-[#3f4064] leading-7">{item.description}</p>
                  </div>
              </div>
            )}

          </div>
        ))}
    </div>
  )
}

export default BestSelling