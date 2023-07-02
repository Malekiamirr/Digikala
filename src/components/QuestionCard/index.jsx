import {TbQuestionMark} from "react-icons/tb";
import {MdOutlineKeyboardArrowLeft} from "react-icons/md";

function QuestionCard({question}) {
  return (
    <article className={`p-4 pt-3 Laptop-L:px-0 Laptop-L:py-4 border rounded-lg Laptop-L:rounded-none min-w-[270px] w-[270px] min-h-[226px] h-[226px] Laptop-L:h-auto Laptop-L:w-auto Laptop-L:border-0 ${question.id!== 1 && " Laptop-L:border-t Laptop-L:border-t-[#e0e0e6]"}`}>
        <div className='flex Laptop-L:items-center'>
            <TbQuestionMark className="min-w-[20px] min-h-[20px] mt-1 ml-4 text-[#19bfd3] border-2 border-[#19bfd3] rounded-lg"/>
            <p className="text-[13px] leading-7 line-clamp-3 Laptop-L:text-[15px]">{question.text}</p>
        </div>
        <div className='mt-4 mr-10 border-t border-t-[#f1f2f4] pb-2 Laptop-L:block hidden'>
            <button className="flex items-center px-4 py-1 mt-3 text-[#19bfd3]">
                <p className="text-xs font-Yekan-bold">ثبت پاسخ‌</p>
                <MdOutlineKeyboardArrowLeft className="mx-2"/>
            </button>
        </div>
    </article>
  )
}

export default QuestionCard