import { useState } from 'react';
import { useGetPhoneProductsQuery } from '../../api/apiSlice';
import ProductCardSkeleton from '../../components/ProductCardSkeleton';

function Test() {
  return (
    <div className="w-96">
      <ProductCardSkeleton />;
    </div>
  );
}

export default Test;
