import {FiArrowLeft} from "react-icons/fi";

function SuperMarket() {
  return (
    <div className="relative flex flex-col gap-2 Laptop-L:gap-0 items-start Laptop-L:flex-row Laptop-L:items-center justify-between px-5 pt-4 pb-3 Laptop-L:px-10 Laptop-L:pt-5 Laptop-L:pb-4 overflow-hidden bg-[#EFF1F1] rounded-2xl">
        <img src={"https://www.digikala.com/statics/img/svg/typography/freshPattern.svg"} alt="background supermarket" className="absolute top-0 left-0"/>
        <div className="flex items-center">
            <img src={"https://www.digikala.com/statics/img/png/amazing/fresh.png"} alt="basket" className="w-[40px] h-[38px] Laptop-L:w-[66px] Laptop-L:h-[62px]" />
            <img src={"https://www.digikala.com/statics/img/svg/typography/fresh.svg"} alt="شگفت انگیز سوپر مارکتی" className="w-[190px] h-[20px] Laptop-L:w-[250px] Laptop-L:h-[28px] mr-2 Laptop-L:mx-5"/>
            <button className="hidden min-[1280px]:block px-3 py-1 bg-[#39ae00] rounded-full text-sm font-Yekan-bold text-white">تا ۵۲٪ تخفیف</button>
        </div>

        <div className="z-10 flex items-center justify-between w-full gap-2 Laptop-L:w-auto">
            <div className="Laptop-L:mr-4">
                <div className="flex flex-wrap justify-end items-center gap-2 overflow-hidden max-h-[74px] px-2 ">
                    <div className="relative p-2 bg-white rounded-full hover:cursor-pointer">
                        <img src={"https://dkstatics-public.digikala.com/digikala-products/cbf2a3236a59c6ff07d826241ba8297257487503_1631619781.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"} alt="photo mask" className="w-[50px] h-[50px] rounded-full" />
                    <span className="absolute -right-1 bottom-px bg-[#ef394e] py-0.5 px-1.5 text-xs font-Yekan-bold text-white rounded-full ">۳۵٪</span>
                    </div>

                    <div className="relative p-2 bg-white rounded-full hover:cursor-pointer">
                        <img src={"https://dkstatics-public.digikala.com/digikala-products/a2eefe13ebb7309d3a08283cee78f3c67811a0ca_1670744463.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"} alt="photo baby" className="w-[50px] h-[50px] rounded-full" />
                    <span className="absolute -right-1 bottom-px bg-[#ef394e] py-0.5 px-1.5 text-xs font-Yekan-bold text-white rounded-full ">۱۵٪</span>
                    </div>

                    <div className="relative p-2 bg-white rounded-full hover:cursor-pointer">
                        <img src={"https://dkstatics-public.digikala.com/digikala-products/090cce48dc40058d6833c22d38f534a3938d4fc2_1610271092.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} alt="photo mask" className="w-[50px] h-[50px] rounded-full" />
                    <span className="absolute -right-1 bottom-px bg-[#ef394e] py-0.5 px-1.5 text-xs font-Yekan-bold text-white rounded-full ">۴۰٪</span>
                    </div>

                    <div className="relative hidden p-2 bg-white rounded-full hover:cursor-pointer Laptop-L:block">
                        <img src={"https://dkstatics-public.digikala.com/digikala-products/8288bf95b387cbd7e4be17e0c9bc34c40529bcf5_1683102532.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} alt="photo mask" className="w-[50px] h-[50px] rounded-full" />
                    <span className="absolute -right-1 bottom-px bg-[#ef394e] py-0.5 px-1.5 text-xs font-Yekan-bold text-white rounded-full ">۲۹٪</span>
                    </div>

                    <div className="relative hidden p-2 bg-white rounded-full hover:cursor-pointer Laptop-L:block">
                        <img src={"https://dkstatics-public.digikala.com/digikala-products/06705c9c23278358593e404c5ddaf9a5a5cdf4c4_1667469123.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} alt="photo mask" className="w-[50px] h-[50px] rounded-full" />
                    <span className="absolute -right-1 bottom-px bg-[#ef394e] py-0.5 px-1.5 text-xs font-Yekan-bold text-white rounded-full ">۱۸٪</span>
                    </div>

                    <div className="relative hidden p-2 bg-white rounded-full hover:cursor-pointer Laptop-L:block">
                        <img src={"https://dkstatics-public.digikala.com/digikala-products/ca02564ede4b668e0e56bf735d0182fc1b3525dd_1681645313.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"} alt="photo mask" className="w-[50px] h-[50px] rounded-full" />
                    <span className="absolute -right-1 bottom-px bg-[#ef394e] py-0.5 px-1.5 text-xs font-Yekan-bold text-white rounded-full ">۵۲٪</span>
                    </div>
                </div>
            </div>
            <button className="items-center hidden gap-2 px-5 py-3 bg-white rounded-full Laptop-L:flex">
                <p className="text-xs font-Yekan-bold text-[#39ae00]">بیش از ۱۰۰ کالا</p>
                <FiArrowLeft className="w-5 h-5 text-[#39ae00]"/>
            </button>

            <div className="flex items-center justify-center bg-white rounded-full Laptop-L:hidden w-11 h-11">
                <FiArrowLeft className="w-5 h-5 text-[#39ae00]"/>
            </div>
        </div>
    </div>
  )
}

export default SuperMarket