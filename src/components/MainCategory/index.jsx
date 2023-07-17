import { Link } from 'react-router-dom';
import { useGetMainCategoryQuery } from '../../api/apiSlice';

function MainCategory() {
  const { data, isLoading, isError } = useGetMainCategoryQuery();
  if (isLoading || isError) {
    return;
  }

  return (
    <div className="grid grid-cols-2 Mobile-S:grid-cols-3 Laptop-L:grid-cols-6 gap-y-10">
      {data.map((category) => (
        <Link to={`search/category-${category.slug}`}>
          <div className="flex flex-col items-center" key={category.id}>
            <img
              className="w-[90px] h-[90px] Laptop-L:w-[170px] Laptop-L:h-[170px] hover:cursor-pointer"
              src={category.thumbnail}
              alt={category.slug}
            />
            <p className="mt-2 text-[8.8px] Mobile-M:text-[11px] Laptop-L:text-xs font-Yekan-bold text-[#080a38]">
              {category.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MainCategory;
