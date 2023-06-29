import {AiOutlineNotification} from "react-icons/ai";
import {RiStore2Line} from "react-icons/ri";

function IntroductionHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
                <nav className="py-2 text-[#767790] text-xs flex items-center gap-2">
                    <span>{"دیجی‌کالا"}</span>
                        / 
                    <span>{"موبایل"}</span>
                        / 
                    <span>{"گوشی موبایل"}</span>
                </nav>
                <div className="flex items-center py-2">
                    <button className="ml-8 text-xs text-[#9e9fb1] flex items-center gap-2">
                        <span>ثبت آگهی در پیندو</span>
                        <AiOutlineNotification className="w-[18px] h-[18px]" />
                    </button>
                        
                    <button className="text-xs text-[#9e9fb1] flex items-center gap-2">
                        <span>فروش در دیجی‌کالا</span>
                        <RiStore2Line className="w-[18px] h-[18px]" />
                    </button>
                </div>
    </div>
  )
}

export default IntroductionHeader