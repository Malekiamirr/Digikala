import React from 'react'

function ProductRelatedVideos({videoUrl}) {
  return (
    <div className="px-0 Laptop-L:p-4 Laptop-L:pr-5 mt-4 Laptop-L:border border-b-8 Lapto-L:border-b-4 border-[#f1f2f4] px-5 Laptop-L:px-0">
        <p className="text-sm Laptop-L:text-base py-4 font-Yekan-bold text-[#080a38]">ویدئوهای مرتبط</p>
        <div className="overflow-hidden bg-white Laptop-L:rounded-xl">
            <div className="max-w-sm overflow-hidden max-h-96 Laptop-L:rounded-xl">
                <video src={videoUrl} controls></video>
            </div>
        </div>
        <div className="flex items-center mt-6 mb-6 Laptop-L:mb-0">
            <div className="overflow-hidden rounded-full">
                <img className="w-6 h-6" src={"https://dkstatics-public.digikala.com/digikala-content-x-profile/a1b8075bb77a0f3f065ff9034fca7a2fd7fda6f2_1684912182.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80"} alt="Person" />
            </div>
            <span className="mr-2 text-[#9e9fb1] text-xs">
                Sodopack
            </span>
        </div>
    </div>
  )
}

export default ProductRelatedVideos