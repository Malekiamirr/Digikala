import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import convertToPersian from '../../utils/convertToPersianNumber';

function RegisterQuestion({onClose}) {
    const [text, setText] = useState("");
    
    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        setText("");
    }

  return (
    <div className={`fixed top-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-20`}>
    <div className="w-[420px] h-[60px] bg-white rounded-lg -translate-y-[200%]">
        {/* Header */}
        <div className="px-5">
            <div className='flex items-center justify-between border-b border-b-[#e0e0e6]'>
                <p className='py-3 text-[#080a38] font-Yekan-bold'>پرسش خود را درباره این کالا ثبت کنید</p>
                <IoClose onClick={onClose} className='w-6 h-6 text-[#3f4064] hover:cursor-pointer'/>
            </div>
        </div>
        {/* Textarea */}
        <div className="bg-white">
            <div className="px-5 py-4">
                <div className='border border-[#e0e0e6] rounded-lg flex items-center justify-center'>
                    <div className='w-full'>
                        <textarea name="question" maxLength="100" onChange={handleText} value={text} className='w-full px-3 py-2 outline-none resize-none text-[15px] text-[#3f4064]'></textarea>
                    </div>
                </div>

                <div className='flex items-center justify-end text-xs text-[#9e9fb1] py-1'>
                    {convertToPersian(text.length)} / ۱۰۰
                </div>
            </div>
        </div>

        <div className="bg-white shadow-[0px_1px_4px_3px_#00000024] py-4 px-5">
            <div className="flex flex-col items-center">
                <button onClick={handleSubmit} className={`${text.length > 7 ? "bg-[#ef4056]" : "bg-[#e0e0e6]"} px-4 py-3 w-full rounded-lg text-sm font-Yekan-bold text-white`}>ثبت پرسش</button>
                <p className='mt-2 text-[10px]'>ثبت پرسش به معنی موافقت با <a href='https://www.digikala.com/page/comments-rules/' className='text-[#19bfd3]'>قوانین انتشار دیجی‌کالا</a>قاست.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default RegisterQuestion