import React from 'react'

function DigikalaBuyingBenefits() {
  return (
    <div className="p-3 mt-3 Laptop-L:border-t border-b-8 Laptop-L:border-b-4 pb-7 border-[#f1f2f4] flex items-center Laptop-L:justify-around justify-between">
        <div className="flex hover:cursor-pointer">
            <div className="flex flex-col items-center Laptop-L:flex-row">
                <img className="w-[42px] h-[42px] ml-2" src={"https://www.digikala.com/statics/img/svg/infosection/express-delivery.svg"} alt="تحویل اکسپرس" />
                <p className="text-[10px] text-center Laptop-L:text-[11px] font-Yekan-bold text-[#9e9fb1]">امکان تحویل اکسپرس</p>
            </div>
        </div>

        <div className="flex hover:cursor-pointer">
            <div className="flex flex-col items-center Laptop-L:flex-row">
                <img className="w-[42px] h-[42px] ml-2" src={"https://www.digikala.com/statics/img/svg/infosection/support.svg"} alt="۲۴ ساعته، ۷ روز هفته" />
                <p className="text-[10px] text-center Laptop-L:text-[11px] font-Yekan-bold text-[#9e9fb1]">۲۴ ساعته، ۷ روز هفته</p>
            </div>
        </div>

        <div className="flex hover:cursor-pointer">
            <div className="flex flex-col items-center Laptop-L:flex-row">
                <img className="w-[42px] h-[42px] ml-2" src={"https://www.digikala.com/statics/img/svg/infosection/cash-on-delivery.svg"} alt="امکان پرداخت در محل" />
                <p className="text-[10px] text-center Laptop-L:text-[11px] font-Yekan-bold text-[#9e9fb1]">امکان پرداخت در محل</p>
            </div>
        </div>

        <div className="flex hover:cursor-pointer">
            <div className="flex flex-col items-center Laptop-L:flex-row">
                <img className="w-[42px] h-[42px] ml-2" src={"https://www.digikala.com/statics/img/svg/infosection/days-return.svg"} alt="هفت روز ضمانت بازگشت کالا" />
                <p className="text-[10px] text-center Laptop-L:text-[11px] font-Yekan-bold text-[#9e9fb1]">هفت روز ضمانت بازگشت کالا</p>
            </div>
        </div>

        <div className="flex hover:cursor-pointer">
            <div className="flex flex-col items-center Laptop-L:flex-row">
                <img className="w-[42px] h-[42px] ml-2" src={"https://www.digikala.com/statics/img/svg/infosection/original-products.svg"} alt="ضمانت اصل بودن کالا" />
                <p className="text-[10px] text-center Laptop-L:text-[11px] font-Yekan-bold text-[#9e9fb1]">ضمانت اصل بودن کالا</p>
            </div>
        </div>
    </div>
  )
}

export default DigikalaBuyingBenefits