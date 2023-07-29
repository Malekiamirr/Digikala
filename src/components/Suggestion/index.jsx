import { Link } from 'react-router-dom';
import { useGetCategoryQuery } from '../../api/apiSlice';

function Suggestion() {
  const { data, isLoading, isError } = useGetCategoryQuery();
  if (isError || isLoading) {
    return;
  }

  return (
    <div className="">
      <div className="grid grid-cols-7 auto-cols-[160px] justify-between border border-[#e0e0e0] rounded-2xl my-1 gap-2">
        {data.map((category, i) =>
          category.image ? (
            <div className="w-[160px] min-w-[160px] px-1 py-4 flex flex-col items-center justify-center hover:cursor-pointer">
              <Link to="product-list">
                <div className="p-3 rounded-full bg-[#f1f2f4] w-[84px] h-[84px]">
                  <div className="w-[60px] h-[60px]">
                    <img
                      className="w-full mix-blend-multiply"
                      src={category.image}
                      alt="image"
                    />
                  </div>
                </div>
              </Link>
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
