const ProductCardSkeleton = () => {
  return (
    <div className="border border-gray-100 rounded p-4">
      <div className="h-56 bg-gray-200 animate-pulse mb-4"></div>
      <div className="flex flex-col">
        <div className="h-4 bg-gray-200 w-4/5 mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-200 w-2/5 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
