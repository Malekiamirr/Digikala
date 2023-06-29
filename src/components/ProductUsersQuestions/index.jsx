import {QuestionCard} from '../index';
import {MdOutlineKeyboardArrowLeft} from "react-icons/md";

function ProductUsersQuestions() {

  const questions = [
    {
      id:1,
      text: "سلام میگن خیلی سنگینه و اذیت میکنه ! درسته ؟"
    },
    {
      id:2,
      text: "درود نات اکتیو یعنی گوشی ریجستر نشده؟"
    },
    {
      id:3,
      text: "سلام آیا پارت نامبر داره"
    },
    {
      id:4,
      text: "با سلام، آیا پایین اومدن نرخ ارز تاثیری در ارزان شدن این محصول داره یا خیر؟"
    },
    {
      id:5,
      text: "سلام چه زمانی باز موجود میکنید رنگ آبیشو؟امکانش هست دیگه موجود نشه؟ 1402/3/18"
    }
  ]

  return (
    <div className='pb-3 mt-4 border-b-4 border-b-[#f1f2f4]'>
      {/* Header */}
      <div className="py-3">
        <div className="flex items-center grow">
            <h2 className="font-Yekan-bold">پرسش ها</h2>
        </div>
        <div className="mt-2 bg-[#ef394e] w-[5rem] h-[0.15rem]"></div>
      </div>

      {/* Main Part */}
      <div className="flex items-start justify-start mt-5">

        {/* Sticky submit questions */}
        <div className='sticky px-2 pb-3 top-[171.031px]'>
          <p className="mb-5 mt-7 min-w-[240px] text-[10px] text-[#3f4064]">
            شما هم درباره این کالا پرسش ثبت کنید  
          </p>
          <button className="px-4 py-2 mt-2 border border-[#ef4056] text-xs font-Yekan-bold rounded-lg text-[#ef4056] w-full">
            ثبت پرسش
          </button>
        </div>

        {/* questions */}
        <div className='mr-10 grow'>
          {questions.map(question=> 
            <QuestionCard key={question.id} question={question}/>
          )}
          <div className="py-3 border-t border-t-[#e0e0e6]">
            <button className="flex items-center mt-3 text-[#19bfd3]">
                <p className="text-xs font-Yekan-bold">۵۲ پرسش دیگر</p>
                <MdOutlineKeyboardArrowLeft className="mx-2"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductUsersQuestions