import { FiInfo } from "react-icons/fi";

function ProductSpecifications({productsValues}) {
  return (
    <div className="mt-4 pb-4 border-b-4 border-b-[#f1f2f4]">
        <div className="hidden py-3 Laptop-L:block">
            <div className="flex items-center grow">
                <h2 className="font-Yekan-bold">مشخصات</h2>
            </div>
            <div className="mt-2 bg-[#ef394e] w-[5rem] h-[0.15rem]"></div>
        </div>

        <div className="mt-4 grow">
            <div className="flex flex-col py-4 Laptop-L:flex-row Laptop-L:justify-between">
                <p className="w-64 ml-12 text-sm Laptop-L:text-base font-Yekan-bold">مشخصات</p>
                <div className="grow">
                    {productsValues.map(value=> 
                        <div key={value.id} className="flex items-center">
                        <p className="text-xs Laptop-L:text-base px-2 py-6 ml-4 text-[#767790] w-52">{value.filter}</p>
                        <div className="py-4 grow border-b border-b-[#f1f2f4]">
                            <p className="text-xs flex items-center Laptop-L:text-sm text-[#080a38]">
                                {value.value}
                            </p>
                        </div>
                    </div>
                    )}
                                    
                </div>
            </div>
        </div>
        <div className="flex py-2">
            <FiInfo className="min-w-[18px] min-h-[18px] text-[#81858b] mt-1 Laptop-L:mt-0"/>
            <p className="text-[#767790] mr-1 text-[11px] Laptop-L:text-xs leading-6">هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد فعالسازی را گرفته و حتما در حضور ایشان، دستگاه را از طریق #7777*، برای سیمکارت خود فعالسازی نمایید. آموزش تصویری در آدرس اینترنتی hmti.ir/06
            </p>
        </div>
    </div>
  )
}

export default ProductSpecifications