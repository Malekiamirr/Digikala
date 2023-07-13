import {useGetCategoryQuery} from "../../api/apiSlice";

function Suggestion() {
  const {data, isLoading, isError} = useGetCategoryQuery();
  if (isError || isLoading) {
    return;
  }

  return (
    <div className="grid grid-cols-7 border border-[#e0e0e0] rounded-2xl my-1 overflow-hidden">
        {data.map((category,i)=> category.image ? (
            <div key={i} className={`hover:cursor-pointer flex flex-col items-center justify-center p-4 px-4 border-l ${i >6 && "border-t"}`}>
                <div className="p-1 Laptop-L:p-3 bg-[#f1f2f4] rounded-full">
                <img className="min-w-[2rem] min-h-[2rem] Laptop-L:max-w-[70px] Laptop-L:max-h-[70px] w-auto h-auto Laptop-L:w-[60px] Laptop-L:h-[60px] mix-blend-multiply aspect-[3/4] object-contain" src={category.image} alt={category.name} />
                </div>
                <p className="mt-2 text-sm line-clamp-1">{category.suggestionName || category.name}</p>
            </div>
        ) : null)}
    </div>
  )
}

export default Suggestion