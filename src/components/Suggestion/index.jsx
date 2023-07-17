import { useGetCategoryQuery } from '../../api/apiSlice';

function Suggestion() {
  const { data, isLoading, isError } = useGetCategoryQuery();
  if (isError || isLoading) {
    return;
  }

  return (
    <div className="overflow-hidden">
      <div className="flex flex-wrap justify-between border border-[#e0e0e0] rounded-2xl my-1 gap-2">
        {data.map((category, i) =>
          category.image ? (
            <div className="w-[160px] min-w-[160px] px-1 py-4 flex flex-col items-center justify-center">
              <div className="p-3 rounded-full bg-[#f1f2f4] w-[84px] h-[84px]">
                <div className="w-[60px] h-[60px]"></div>
              </div>
              <p className="mt-2 text-sm line-clamp-1">
                {category.suggestionName || category.name}
              </p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Suggestion;
