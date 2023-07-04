import { IoClose } from 'react-icons/io5'
import { useEffect, useState } from 'react';
import {BiPlus} from "react-icons/bi";
import {TbTrash} from "react-icons/tb";

function RegisterComment() {
    const [circlePosition, setCirclePosition] = useState(0);
    const [commentInput, setCommentInput] = useState("");
    const [PositivePointComment, setPositivePointComment] = useState("");
    const [NegativePointComment, setNegativePointComment] = useState("");
    const [positivePoints, setPositivePoints] = useState([]);
    const [negativePoints, setNegativePoints] = useState([]);
    const [textareaValue, setTextareaValue] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [isClose, setIsClose] = useState(false);
    const [isValidToSubmit, setIsValidToSubmit] = useState({commentInput: false, textareaValue: false})

  const handleDrag = (event) => {
    const newPosition = event.clientX;
    // Adjust newPosition based on the container's width or your specific requirements

    setCirclePosition(newPosition);
  };

  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
  }

  const handlePositivePointComment = (e) => {
    setPositivePointComment(e.target.value);
  }

  const handleNegativePointsComment = (e) => {
    setNegativePointComment(e.target.value);
  }

  const handleTextareaValue = (e) => {
    setTextareaValue(e.target.value)
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleIsClose = () => {
    setIsClose(!isClose)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentInput && textareaValue) {
        setCommentInput("");
        setIsChecked(false);
        setNegativePointComment("");
        setPositivePointComment("");
        setTextareaValue("");
        setPositivePoints("");
        setNegativePoints("");
        setIsValidToSubmit({commentInput: false, textareaValue: false})
        console.log("both false");
    }

    if (commentInput && textareaValue.length === 0) {
        setIsValidToSubmit({commentInput: false, textareaValue: true})
    }

    if (commentInput.length === 0 && textareaValue) {
        setIsValidToSubmit({commentInput: true, textareaValue: false})
    }

    if (commentInput.length === 0 && textareaValue.length === 0) {
        setIsValidToSubmit({commentInput: true, textareaValue: true})
        
    }
  }

  useEffect(() => {
    if (commentInput) {
        setIsValidToSubmit({commentInput:false ,textareaValue:isValidToSubmit.textareaValue })
    }

    if(textareaValue) {
        setIsValidToSubmit({commentInput: isValidToSubmit.commentInput , textareaValue: false})
    }

  }, [commentInput, textareaValue])

  const addPositivePoints = () => {
    setPositivePoints([...positivePoints, PositivePointComment]);
    setPositivePointComment("");
  }

  const addNegativePoints = () => {
    setNegativePoints([...negativePoints, NegativePointComment]);
    setNegativePointComment("");
  }


  return (
    <div className={`${isClose && "hidden"} absolute top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-20`}>
            <div className="bg-white Laptop-L:w-[800px] Laptop-L:rounded-lg h-screen Laptop-L:max-h-[80vh] overflow-y-clip Laptop-L:h-full w-full pb-[70px] Laptop-L:pb-14">
                <div className='px-5'>
                    <div className='border-b border-b-[#e0e0e6] flex items-center justify-between '>
                        <div className='flex flex-col gap-2 py-3'>
                            <h3 className='text-[#080a38] font-Yekan-bold'>دیدگاه شما</h3>
                            <p className='text-xs text-[#767790]'>{"در مورد گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو"}</p>
                        </div>

                        {/* Close Button */}
                        <IoClose onClick={handleIsClose} className='w-6 h-6 text-[#3f4064] hover:cursor-pointer'/>
                    </div>
                    
                </div>

                <div className='h-[100%] py-4 overflow-y-scroll'>
                    <div>
                        <div className="flex h-[100%] px-5">
                        {/* inputs */}
                        <div className='grow min-w-[calc(50%-8px)]'>
                            <form onSubmit={handleSubmit}
                                >
                                <div className="flex flex-col px-3 pt-4 pb-6">
                                    {/* Give Score */}
                                    <div className="flex flex-col items-center justify-center border-b">
                                        <p><span className='ml-1 text-[#b2001a]'>*</span>امتیاز دهید!:</p>
                                        <div className="relative w-full h-16">
                                            <div className="absolute left-0 right-0 transform -translate-y-1/2 top-1/2">
                                                {/* Line */}
                                                <div className="h-1 bg-gray-300"></div>

                                                {/* Draggable Circle */}
                                                <div
                                                className="absolute top-0 right-0 transform translate-x-1/2 translate-y-[-50%] w-5 h-5 bg-[#f9bc00] rounded-full cursor-move"
                                                style={{ left: circlePosition }}
                                                draggable="true"
                                                onDrag={handleDrag}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className='py-6 text-[#080a38] font-Yekan-bold'>
                                        دیدگاه خود را شرح دهید
                                    </p>

                                    {/* Say Your Comment */}
                                    <div className='flex flex-col'>
                                        <p className='mb-2 text-sm'>عنوان نظر</p>
                                        <div className='px-2 border border-[#e0e0e6] h-[48px] rounded-lg flex items-center justify-center'>
                                            <div className='w-full'>
                                                <input type="text" value={commentInput} onChange={handleCommentInput} className='px-2 outline-none text-[15px] text-[#3f4064] caret-[#ef4056]'/>
                                            </div>
                                        </div>
                                        {/* error message */}
                                        {isValidToSubmit.commentInput && <p className='text-xs text-[#b2001a] font-Yekan-bold py-3'>اینجا را خالی نگذارید</p>}
                                    </div>

                                    {/* Positive Points */}
                                    <div className='flex flex-col pt-[18px] pb-6 mt-3'>
                                        <p className='mb-2 text-sm'>نکات مثبت</p>
                                        <div className='px-2 border border-[#e0e0e6] h-[48px] rounded-lg flex items-center justify-center'>
                                            <div className='flex items-center justify-between w-full'>
                                                <input type="text" value={PositivePointComment} onChange={handlePositivePointComment} className='px-2 outline-none text-[15px] text-[#3f4064] caret-[#ef4056]'/>
                                                <BiPlus onClick={addPositivePoints} className="w-6 h-6 text-[#9e9fb1] hover:cursor-pointer"/>
                                            </div>
                                        </div>

                                        {/* show Positive Points */}
                                        <div className='flex flex-col mt-2'>
                                            {positivePoints.length > 0 && positivePoints.map((point, i)=> {
                                                <div key={i} className='flex items-center justify-between'>
                                                    <div className='flex items-center'>
                                                        <BiPlus className='w-5 h-5 text-[#4caf50]'/>
                                                        <p className='mr-2 text-xs'>{point}</p>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <TbTrash className="text-[#9e9fb1] w-5 h-5"/>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                    </div>

                                    {/* Negative Points */}
                                    <div className='flex flex-col pt-[18px] pb-6 mt-3'>
                                        <p className='mb-2 text-sm'>نکات منفی</p>
                                        <div className='px-2 border border-[#e0e0e6] h-[48px] rounded-lg flex items-center justify-center'>
                                            <div className='flex items-center justify-between w-full'>
                                                <input type="text" value={NegativePointComment} onChange={handleNegativePointsComment} className='px-2 outline-none text-[15px] text-[#3f4064] caret-[#ef4056]'/>
                                                <BiPlus onClick={addNegativePoints} className="w-6 h-6 text-[#9e9fb1] hover:cursor-pointer"/>
                                            </div>
                                        </div>

                                        {/* show Positive Points */}
                                        <div className='flex flex-col mt-2'>
                                            {negativePoints.length > 0 && negativePoints.map((point, i)=> {
                                                <div key={i} className='flex items-center justify-between'>
                                                    <div className='flex items-center'>
                                                        <BiPlus className='w-5 h-5 text-[#4caf50]'/>
                                                        <p className='mr-2 text-xs'>{point}</p>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <TbTrash className="text-[#9e9fb1] w-5 h-5"/>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                    </div>  

                                    {/* text of comment */}
                                    <div className="flex flex-col mt-2">
                                        <p className="mb-2 text-sm">متن نظر <span className='text-[#b2001a]'>*</span></p>
                                        <div className="px-2 border border-[#e0e0e6] rounded-lg flex items-center">
                                            <div className="grow">
                                                <textarea value={textareaValue} onChange={handleTextareaValue} className='px-1 text-[#3f4064] caret-[#ef4056] text-[15px] resize-none outline-none py-2' placeholder='برای ما بنویسید...' name='comment' cols="30" rows="5"></textarea>
                                            </div>
                                        </div>

                                        {/* error message */}
                                        {isValidToSubmit.textareaValue && <p className='text-xs text-[#b2001a] font-Yekan-bold py-3'>اینجا را خالی نگذارید</p>}
                                    </div>

                                    {/* Send as Unknown */}
                                    <div className='flex items-center pt-4 pb-5 my-1'>
                                        <label className='flex items-center'>
                                            <input className='accent-[#0fabc6] w-4 h-4'
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                            />
                                        </label>
                                        <p className='mr-5 text-xs font-Yekan-bold'>ارسال دیدگاه به صورت ناشناس</p>
                                    </div>
                                                                        
                                </div>

                            </form>
                        </div>

                        {/* Description */}
                        <div className="hidden px-4 py-5 mr-5 border rounded-lg Laptop-L:block">
                            {/* Heaeder */}
                            <div className="py-3">
                                <p className='font-Yekan-bold text-[#080a38] leading-5 mb-4'>دیگران را با نوشتن نظرات خود، برای انتخاب این محصول راهنمایی کنید.
                                </p>
                            </div>

                            {/* Main text */}
                            <div className='text-xs leading-7'>
                                <p className='text-xs text-[#2980b9] font-Yekan-bold mb-2'>لطفا پیش از ارسال نظر، خلاصه قوانین زیر را مطالعه کنید:
                                </p>

                                <ul>
                                    <li className="">لازم است محتوای ارسالی منطبق برعرف و شئونات جامعه و با بیانی رسمی و عاری از لحن تند، تمسخرو توهین باشد.
                                    </li>
                                    <li className="">از ارسال لینک‌ سایت‌های دیگر و ارایه‌ی اطلاعات شخصی نظیر شماره تماس، ایمیل و آی‌دی شبکه‌های اجتماعی پرهیز کنید.
                                    </li>
                                    <li className="">
                                        <strong>
                                        در نظر داشته باشید هدف نهایی از ارائه‌ی نظر درباره‌ی کالا ارائه‌ی اطلاعات مشخص و مفید برای راهنمایی سایر کاربران در فرآیند انتخاب و خرید یک محصول است.
                                        </strong>
                                        </li>
                                    <li className="">
                                    با توجه به ساختار بخش نظرات، از پرسیدن سوال یا درخواست راهنمایی در این بخش خودداری کرده و سوالات خود را در بخش «پرسش و پاسخ» مطرح کنید.
                                    </li>
                                </ul>

                                <h3 className='text-sm text-[#e74c34] font-Yekan-bold py-2'>
                                افزودن عکس و ویدیو به نظرات:
                                </h3>

                                <ul>
                                    <li>
                                    با مطالعه‌ی <a href='https://www.digikala.com/mag/how-to-create-compelling-lifestyle-product-photographs/' className='text-[#2980b9] underline font-Yekan-bold'>این لینک</a> می‌توانید مفید‌ترین الگوی عکاسی از کالایی که خریداری کرده‌اید را مشاهده کنید.
                                    </li>
                                </ul>

                                <p className='text-[#2980b9] font-Yekan-bold'>
                                پیشنهاد می‌شود قوانین کامل ثبت نظر را در <a href='https://www.digikala.com/page/comments-rules/' className='underline'>این صفحه</a> مطالعه کنید.
                                </p>

                                <p>
                                هرگونه نقد و نظر در خصوص سایت دیجی‌کالا، مشکلات دریافت خدمات و درخواست کالا و نیز گزارش تخلف فروش (نظیر گزارش کالای غیراصل یا مغایر) را با ایمیل  <a href='' className='text-[#0000EE] font-Yekan-bold'>info@digikala.com</a> یا با شماره‌ی  <span className='text-[#0000EE] font-Yekan-bold'> ۶۱۹۳۰۰۰۰ - ۰۲۱</span>  در میان بگذارید و از نوشتن آن‌ها در بخش نظرات خودداری کنید.
                                </p>
                            </div>
                        </div>
                        </div>

                        {/* Submit comment */}
                        <div className="flex items-center gap-10 justify-between p-5 bg-white shadow-[0px_-5px_8px_1px_#00000024]">
                            <button onClick={handleSubmit} className="px-4 py-3 bg-[#ef4056] text-white text-sm font-Yekan-bold rounded-lg grow">
                                ثبت دیدگاه
                            </button>

                            <p className="text-[11px] font-Yekan-medium">
                            ثبت دیدگاه به معنی <span className='text-[#19bfd3]'>موافقت باقوانین انتشار</span> دیجی‌کالااست.
                            </p>
                        </div>
                    </div>
                    

                    
                </div>
            </div>
    </div>
  )
}

export default RegisterComment