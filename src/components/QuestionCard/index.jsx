import {TbQuestionMark} from "react-icons/tb";
import {MdOutlineKeyboardArrowLeft} from "react-icons/md";

function QuestionCard({question}) {
  return (
    <article className={`py-4 ${question.id!== 1 && "border-t border-t-[#e0e0e6]"}`}>
        <div className='flex items-center'>
            <TbQuestionMark className="w-6 h-6 mt-1 ml-4 text-[#19bfd3] border-2 border-[#19bfd3] rounded-lg"/>
            <p className="text-[15px]">{question.text}</p>
        </div>
        <div className='mt-4 mr-10 border-t border-t-[#f1f2f4] pb-2'>
            <button className="flex items-center px-4 py-1 mt-3 text-[#19bfd3]">
                <p className="text-xs font-Yekan-bold">ثبت پاسخ‌</p>
                <MdOutlineKeyboardArrowLeft className="mx-2"/>
            </button>
        </div>
    </article>
  )
}

export default QuestionCard