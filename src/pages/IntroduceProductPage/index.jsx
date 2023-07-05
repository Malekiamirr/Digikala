import { IntroductionHeader, ProductInformation } from "../../layouts";

import { useGetCustomersCommentQuery } from "../../api/apiSlice";

import {ShowPindo, ProductPhotos, ProductAnotherSellers, DigikalaBuyingBenefits, ProductRelatedVideos, ProductDetailsCategory, ProductIntroduction, ProductSpecifications, ProductUsersScoresAndOpinions, ProductUsersQuestions, ProductStickyInfoBox ,PriceChart} from "../../components/index";



function IntroduceProductPage({product}) {
    
    const {data:comments, isLoading, isError} = useGetCustomersCommentQuery();

    if (isLoading || isError) {
        return;
    }
    
  return (
    <div className="max-w-[1676px] w-full mx-auto pt-4">
        <div className="Laptop-L:px-5">

            {/* Header */}
            <IntroductionHeader/>
            
            {/* Main Part */}
            <div className="flex flex-col Laptop-L:flex-row">
                {/* Photo and Icons */}
                <ProductPhotos product={product}/>

                {/* Details */}
                <div className="min-w-0 grow">
                    <ProductInformation product={product}/>
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
            <div className="hidden px-5 py-4 my-5 overflow-hidden rounded-lg Laptop-L:block">
                <a href="https://digikala-service.com/">
                    <img src={"https://dkstatics-public.digikala.com/digikala-admin-landing/6318364ab23fcfc2cfaaa1924ec0ec95172e1022_1678538975.jpg"} alt="sub image" className="rounded-lg" />
                </a>
            </div>
            
            {/* sub-image in small screen */}
            <div className="px-5 py-4 my-5 overflow-hidden rounded-lg Laptop-L:hidden Laptop-L:px-0">
                <a href="https://digikala-service.com/">
                    <img src={"https://dkstatics-public.digikala.com/digikala-admin-landing/025ec5fcc64cd2d1d403ee1bb95061fa26eaa7e3_1678538985.jpg"} alt="sub image" className="h-full rounded-lg" />
                </a>
            </div>

            {/* Sub Image 2 */}
            <div id="intro" className="hidden px-5 py-4 my-5 overflow-hidden rounded-lg Laptop-L:block">
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