import { useGetBrandsQuery } from '../../api/apiSlice';

function PopularBrands() {
  const { data: brands, isLoading, isError } = useGetBrandsQuery();

  if (isError || isLoading) {
    return;
  }

  return (
    <div className="flex px-3 pt-2 pb-6 mt-3 overflow-hidden">
      {brands.map((brand) => (
        <div key={brand.id} className="flex items-center">
          <div className="hover:cursor-pointer w-[110px] h-[110px] flex items-center justify-center">
            <img
              src={brand.image}
              alt={`${brand.name} icon`}
              className="w-full"
            />
          </div>
          <span className="w-px h-full mx-4 bg-slate-200"></span>
        </div>
      ))}
    </div>
  );
}

export default PopularBrands;
