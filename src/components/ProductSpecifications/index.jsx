import { FiInfo } from "react-icons/fi";

function ProductSpecifications({productsValues}) {
  return (
    <div className="mt-4 pb-4 border-b-4 border-b-[#f1f2f4]">
        <div className="py-3">
            <div className="flex items-center grow">
                <h2 className="font-Yekan-bold">مشخصات</h2>
            </div>
            <div className="mt-2 bg-[#ef394e] w-[5rem] h-[0.15rem]"></div>
        </div>

        <div className="mt-4 grow">
            <div className="flex justify-between py-4">
                <p className="w-64 ml-12 font-Yekan-bold">مشخصات</p>
                <div className="grow">
                    {productsValues.map(value=> 
                        <div key={value.id} className="flex items-center">
                        <p className="px-2 py-6 ml-4 text-sm text-[#767790] w-52">{value.filter}</p>
                        <div className="py-4 grow border-b border-b-[#f1f2f4]">
                            <p className="flex items-center text-sm text-[#080a38]">
                                {value.value}
                            </p>
                        </div>
                    </div>
                    )}
                                    
                </div>
            </div>
        </div>
        <div className="flex items-center py-2">
            <FiInfo className="w-[18px] h-[18px] text-[#81858b]"/>
            <p className="text-[#767790] mr-2 text-xs">هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد فعالسازی را گرفته و حتما در حضور ایشان، دستگاه را از طریق #7777*، برای سیمکارت خود فعالسازی نمایید. آموزش تصویری در آدرس اینترنتی hmti.ir/06
            </p>
        </div>
    </div>
  )
}

export default ProductSpecifications