const ProductCardSkeleton = () => {
  return (
    <div className="p-4 border rounded border-gray-50">
      <div className="h-56 mb-4 bg-gray-100 animate-pulse"></div>
      <div className="flex flex-col">
        <div className="w-4/5 h-4 mb-2 bg-gray-100 animate-pulse"></div>
        <div className="w-2/5 h-4 bg-gray-100 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
