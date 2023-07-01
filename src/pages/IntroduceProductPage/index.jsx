import { IntroductionHeader, ProductInformation } from "../../layouts";

import { useGetCustomersCommentQuery } from "../../api/apiSlice";

import {ShowPindo, ProductPhotos, ProductAnotherSellers, DigikalaBuyingBenefits, ProductRelatedVideos, ProductDetailsCategory, ProductIntroduction, ProductSpecifications, ProductUsersScoresAndOpinions, ProductUsersQuestions, ProductStickyInfoBox} from "../../components/index";



function IntroduceProductPage({product}) {
    
    const {data:comments, isLoading, isError} = useGetCustomersCommentQuery();

    if (isLoading || isError) {
        return;
    }
    
  return (
    <div className="max-w-[1676px] w-full mx-auto pt-4">
        <div className="px-5">

            {/* Header */}
            <IntroductionHeader/>
            
            {/* Main Part */}
            <div className="flex">
                {/* Photo and Icons */}
                <ProductPhotos product={product}/>

                {/* Details */}
                <div className="min-w-0 grow">
                    <ProductInformation product={product}/>
                </div>

                {/* Product Sellers */}
                <div className="bg-[#e0e0e6] mr-3 mb-3 w-max min-w-max">
                    <div className="border border-[#e0e0e6]">
                        <div className="flex items-center justify-between px-5 py-3">
                            <h3 className="font-Yekan-bold text-[#080a38]">فروشنده</h3>
                            <span className="text-xs text-[#19bfd3]">۱ فروشنده دیگر</span>
                        </div>
                     </div>
                </div>
            </div>
            
             {/* ‌‌Benefits of buying from Digikala */}
             <DigikalaBuyingBenefits/>

            {/* another sellers */}
            <ProductAnotherSellers price={product.price}/>
         
            {/* related Videos */}
            {product.productVideo[0].video && 
                <ProductRelatedVideos videoUrl={product.productVideo[0].video}/>
            }

            {/* Pindo */}
            <ShowPindo/>

            {/* Sub Image 1 */}
            <div className="px-5 py-4 my-5 overflow-hidden rounded-lg">
                <a href="https://digikala-service.com/">
                    <img src={"https://dkstatics-public.digikala.com/digikala-admin-landing/6318364ab23fcfc2cfaaa1924ec0ec95172e1022_1678538975.jpg"} alt="sub image" className="rounded-lg" />
                </a>
            </div>

            {/* Sub Image 2 */}
            <div className="px-5 py-4 my-5 overflow-hidden rounded-lg">
                <a href="https://digikala-service.com/">
                    <img src={"https://dkstatics-public.digikala.com/digikala-admin-landing/b00e0cf8908bcb4ea3a16c685b4486a83333a38d_1687621025.jpg"} alt="sub image" className="rounded-lg" />
                </a>
            </div>

            {/* Product Details Category */}
            <ProductDetailsCategory/>

            {/* must Details */}
            <div className="flex w-full">
                <div className="min-w-0 grow">

                    {/* introduction */}
                    <ProductIntroduction description={product.description}/>

                    {/* Specifications */}
                    <ProductSpecifications productsValues={product.productsValues}/>

                    {/* Users Scores and opinions*/}
                    <ProductUsersScoresAndOpinions product={product} comments={comments}/>

                    {/* Users Questions */}
                    <ProductUsersQuestions/>
                </div>

                {/* sticky info box */}
                <ProductStickyInfoBox product={product}/>
            </div>
        </div>
    </div>
  )
}

export default IntroduceProductPage;