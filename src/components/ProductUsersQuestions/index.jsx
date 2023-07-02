import {QuestionCard} from '../index';
import {MdOutlineKeyboardArrowLeft} from "react-icons/md";
import {BiSave} from "react-icons/bi";

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
    <div className='Laptop-L:pb-3 mt-4 Laptop-L:border-b-4 border-b-[#f1f2f4]'>
      {/* Header */}
      <div className="px-5 py-3 Laptop-L:px-0">
        <div className="flex items-center grow">
            <h2 className="hidden text-base font-Yekan-bold Laptop-L:block">پرسش ها</h2>
            <h2 className="text-sm font-Yekan-bold Laptop-L:hidden">پرسش و پاسخ‌ها</h2>
        </div>
        <div className="mt-2 bg-[#ef394e] w-[5rem] h-[0.15rem] Laptop-L:block hidden"></div>
      </div>

      {/* Main Part */}
      <div className="flex items-start justify-start px-5 mt-5 Laptop-L:px-0">

        {/* Sticky submit questions */}
        <div className='sticky px-2 pb-3 top-[171.031px] Laptop-L:block hidden'>
          <p className="mb-5 mt-7 min-w-[240px] text-[10px] text-[#3f4064]">
            شما هم درباره این کالا پرسش ثبت کنید  
          </p>
          <button className="px-4 py-2 mt-2 border border-[#ef4056] text-xs font-Yekan-bold rounded-lg text-[#ef4056] w-full">
            ثبت پرسش
          </button>
        </div>

        {/* questions */}
        <div className='flex gap-4 Laptop-L:mr-10 grow Laptop-L:flex-col Laptop-L:gap-0 box-container Laptop-L:overflow-hidden'>
          {questions.map(question=> 
            <QuestionCard key={question.id} question={question}/>
          )}
          <div className="py-3 border-t border-t-[#e0e0e6] Laptop-L:block hidden">
            <button className="flex items-center mt-3 text-[#19bfd3]">
                <p className="text-xs font-Yekan-bold">۵۲ پرسش دیگر</p>
                <MdOutlineKeyboardArrowLeft className="mx-2"/>
            </button>
          </div>
        </div>
      </div>

      {/* Product return procedures */}
      <div className="px-5 bg-[#f2f2f2] my-5 Laptop-L:px-0 Laptop-L:hidden">
        <div className="flex items-center justify-between py-3 border-b border-b-[#e0e0e6]">
            
            <div className="flex items-center">
              <BiSave className="w-6 h-6 text-[#9e9fb1] ml-4"/>
              <p className='text-[#9e9fb1] text-[13px] font-Yekan-bold'>رویه های بازگشت کالا</p>
            </div>
            
            <MdOutlineKeyboardArrowLeft className='w-6 h-6 text-[#9e9fb1]'/>
        </div>

        <div className="flex items-center justify-center py-4">
          <p className='text-[#767790] text-[10px]'>
           شناسه کالا: DKP-
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductUsersQuestions