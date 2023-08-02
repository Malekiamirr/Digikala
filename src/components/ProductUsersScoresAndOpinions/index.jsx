import { useState } from 'react';

import convertToPersianNumber from '../../utils/convertToPersianNumber';
import convertToPersianTime from '../../utils/convertToPersianTime';
import StarRating from '../StarRating';
import ProgresBar from '../ProgresBar';

import { FiInfo } from 'react-icons/fi';
import { BiLike } from 'react-icons/bi';
import { RxDotFilled } from 'react-icons/rx';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { GoDash } from 'react-icons/go';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineFlag, AiOutlineMessage } from 'react-icons/ai';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { RegisterComment } from '../index';

function ProductUsersScoresAndOpinions({ product, comments }) {
  const [isUseful, setisUseful] = useState({ yes: 0, no: 0 });
  const [showAddComment, setShowAddComment] = useState(false);

  const toggleAddComment = () => {
    setShowAddComment(!showAddComment);
    if (!showAddComment) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const handleIsUseful = (which) => {
    which === 'yes'
      ? setisUseful({ yes: isUseful.yes + 1, no: isUseful.no })
      : setisUseful({ yes: isUseful.yes, no: isUseful.no + 1 });
  };

  const handleReportBox = () => {
    document.getElementById('report').classList.toggle('hidden');
  };

  return (
    <div className="mt-4 pb-4 border-b-4 border-b-[#f1f2f4] px-5 Laptop-L:px-0">
      {/* Header */}
      <div className="py-3">
        <div className="flex items-center grow">
          <h2 className="hidden Laptop-L:block font-Yekan-bold">
            امتیاز و دیدگاه کاربران
          </h2>
          <div className="flex items-center justify-between w-full Laptop-L:hidden">
            <h2 className="text-sm font-Yekan-bold">دیدگاه‌ها</h2>
            <span className="text-[11px] text-[#19bfd3]">
              {convertToPersianNumber(comments.length)} دیدگاه
            </span>
          </div>
        </div>
        <div className="mt-2 bg-[#ef394e] w-[5rem] h-[0.15rem] hidden Laptop-L:block"></div>
      </div>

      {/*  */}
      <div className="flex items-start justify-start mt-3">
        <div className="sticky ml-16 top-[191.031px] left-0 w-[260px] min-w-[260px] hidden Laptop-L:block">
          {/* rating */}
          <div className="flex items-center">
            <p className="ml-1 text-[26px] font-Yekan-medium">
              {convertToPersianNumber(product.stock)}
            </p>
            <p className="text-[10px]">از ۵</p>
          </div>

          {/* Stars */}
          <div className="flex items-center">
            <div className="mt-1">
              <StarRating rating={product.stock} />
            </div>
            <p className="mr-2 text-[10px] text-[#9e9fb1]">
              از مجموع {convertToPersianNumber(product.sellCount)} دیدگاه
            </p>
          </div>

          {/* The subject of views */}
          <div className="py-4 border-b border-b-[#e0e0e6]">
            <div className="flex items-center py-3 text-sm font-Yekan-bold text-[#3f4064]">
              موضوع دیدگاه‌ها
            </div>

            {product.sellerView.map((view, i) => (
              <div
                key={i}
                className="px-3 pt-3 pb-2 mb-2 border border-[#e0e0e6] min-w-[240px] rounded-lg"
              >
                <div className="flex items-center">
                  <p className="text-xs font-Yekan-bold text-[#5a5c7a] ml-2">
                    {view.property}
                  </p>
                </div>
                <ProgresBar progress={view.rate} />
              </div>
            ))}

            {/* Warning */}
            <p className="text-[11px] text-[#9e9fb1]">
              این جداسازی به صورت آزمایشی انجام شده است و ممکن است دقیق نباشد
            </p>
          </div>

          {/* submit view */}
          <p className="mt-4 mb-3 text-[11px] text-[#3f4064]">
            شما هم درباره این کالا دیدگاه ثبت کنید
          </p>

          {/* submit view button */}
          <button
            onClick={toggleAddComment}
            className="px-3 py-3 mt-4 border border-[#ef4056] w-full rounded-lg"
          >
            <p className="flex items-center justify-center text-[#ef4056] text-xs font-Yekan-bold">
              ثبت دیدگاه
            </p>
          </button>

          {/* digi-club score earning description */}
          <div className="flex mt-3">
            <div className="mt-1">
              <FiInfo className="w-[18px] h-[18px] text-[#81858b]" />
            </div>
            <p className="text-[#5a5c7a] text-xs mr-2 leading-6">
              ۵ امتیاز دیجی‌کلاب
              <br />
              پس از تایید شدن دیدگاه، با رفتن به صفحه ماموریت‌های دیجی‌کلاب
              امتیازتان را دریافت کنید.
            </p>
          </div>
        </div>
        <div className="min-w-0 grow">
          <div className="hidden Laptop-L:block">
            <div className="flex items-center py-10">
              <BiLike className="w-4 h-4 text-[#2e7b32] ml-1" />
              <p className="ml-2 text-xs font-Yekan-bold text-[#080a38]">
                ۸۵% (۴۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند
              </p>
              <div className="relative hover:cursor-pointer group">
                <FiInfo className="w-[18px] h-[18px] text-[#9e9fb1]" />
                <div className="px-3 py-2 m-2 border border-[#23254e] bg-[#3f4064] max-w-[320px] w-max absolute top-5 left-[50%] -translate-x-[50%] text-xs text-white leading-6 rounded hidden group-hover:block">
                  خریداران کالا با انتخاب یکی از گزینه‌های پیشنهاد یا عدم
                  پیشنهاد، تجربه خرید خود را با کاربران به اشتراک می‌گذارند.
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 box-container Laptop-L:overflow-hidden Laptop-L:flex-col Laptop-L:gap-0">
            {comments.map((comment, i) => (
              <article
                key={i}
                className="flex py-3 p-4 Laptop-L:px-0 border Laptop-L:border-0 Laptop-L:border-t border-[#e0e0e6] rounded-lg Laptop-L:rounded-none min-w-[270px] w-[270px] Laptop-L:w-auto"
              >
                <div className="Laptop-L:flex mt-2 ml-2 w-8 h-5 bg-[#00a049] hidden items-center justify-center rounded text-white text-[11px] font-Yekan-bold">
                  ۵.۰
                </div>

                <div className="flex flex-col justify-between w-full Laptop-L:flex-row">
                  <div className="w-full">
                    <p className="pb-3 font-Yekan-bold text-[#080a38] text-sm leading-6 Laptop-L:text-base h-8 Laptop-L:h-auto">
                      {comment.title}
                    </p>
                    <div className="mt-1">
                      <div className="items-center hidden pb-3 border-b Laptop-L:flex">
                        <p className="text-[11px] text-[#9e9fb1]">
                          {convertToPersianTime(comment.createdAt)}
                        </p>
                        <RxDotFilled className="w-4 h-4 m-2 text-[#e0e0e6]" />
                        <p className="text-[11px] text-[#9e9fb1]">
                          {comment.name}
                        </p>
                        {comment.buyer && (
                          <p className="px-2 py-1 bg-[#f2f2f2] text-[#767790] text-[11px] font-Yekan-bold mr-2 rounded-full">
                            خریدار
                          </p>
                        )}
                      </div>

                      {/* Comments */}
                      <div className="Laptop-L:border-b Laptop-L:border-b-[#f1f2f4] mt-8 pb-2 mb-2">
                        {comment.isSuggested && (
                          <div className="flex items-center mb-2">
                            <BiLike className="w-4 h-4 text-[#00a049]" />
                            <p className="text-xs text-[#00a049] mr-2">
                              پیشنهاد میکنم
                            </p>
                          </div>
                        )}
                        <p className="pt-1 Laptop-L:pt-3 mb-1 break-words Laptop-L:text-sm text-xs font-Yekan-bold Laptop-L:font-Yekan-regular text-[#080a38] leading-6 Laptop-L:leading-5">
                          {comment.description}
                        </p>
                        {comment.positiveComments.map((positive) => (
                          <div
                            key={positive.id}
                            className="items-center hidden my-3 text-xs Laptop-L:flex"
                          >
                            <HiOutlinePlusSm className="w-4 h-4 ml-2 text-[#00a049]" />
                            {positive.description}
                          </div>
                        ))}

                        {comment.negativeComments.map((negative) => (
                          <div
                            key={negative.id}
                            className="items-center hidden my-3 text-xs Laptop-L:flex"
                          >
                            <GoDash className="w-4 h-4 ml-2 text-[#d32f2f]" />
                            {negative.description}
                          </div>
                        ))}
                      </div>

                      {/* is it useful? */}
                      <div className="items-center justify-end hidden pt-3 Laptop-L:flex">
                        <p className="ml-10 text-xs text-[#767790]">
                          آیا این دیدگاه مفید بود؟
                        </p>
                        <div className="flex items-center">
                          {/* useful button */}
                          <button
                            onClick={() => handleIsUseful('yes')}
                            className="flex items-center px-4 py-1 text-[#9e9fb1]"
                          >
                            {convertToPersianNumber(isUseful.yes)}
                            <BiLike className="w-5 h-5 text-[#9e9fb1] mr-1" />
                          </button>

                          {/* Unuseful button */}
                          <button
                            onClick={() => handleIsUseful('no')}
                            className="flex items-center py-1 text-[#9e9fb1]"
                          >
                            {convertToPersianNumber(isUseful.no)}
                            <BiLike className="w-5 h-5 text-[#9e9fb1] mr-1 rotate-180 scale-x-[-1]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={handleReportBox}
                    className="relative hidden pt-1 mr-auto hover:cursor-pointer Laptop-L:block"
                  >
                    <BsThreeDotsVertical className="w-6 h-6 text-[#9e9fb1]" />
                    <div
                      id="report"
                      className="absolute left-0 p-2 bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] top-10 w-max hidden"
                    >
                      <div className="py-2">
                        <button className="px-5 py-2">
                          <div className="flex items-center py-2">
                            <AiOutlineFlag className="scale-x-[-1] h-6 w-6 text-[#e6123d] ml-4" />
                            <p className="font-Yekan-medium">
                              گزارش این دیدگاه
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 Laptop-L:hidden">
                    <span className="text-[10px] text-[#9e9fb1]">
                      {convertToPersianTime(comment.createdAt)}
                    </span>
                    <RxDotFilled className="w-4 h-4 text-[#e0e0e6]" />
                    <span className="text-[10px] text-[#9e9fb1]">
                      {comment.name}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Your thought */}
          {/* Fix نظرسنجی اینپوت BUG */}
          <div className="flex mt-4 Laptop-L:hidden">
            <AiOutlineMessage className="w-5 h-5 text-[#3f4064] ml-4" />
            <div
              onClick={toggleAddComment}
              className="flex flex-col w-full gap-2 pb-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[#3f4064] font-Yekan-bold text-[13px]">
                  دیدگاه خود را درباره این کالا بنویسید
                </span>
                <MdKeyboardArrowLeft className="w-6 h-6 text-[#9e9fb1] hover:cursor-pointer" />
              </div>
              <p className="text-[#9e9fb1] text-[11px]">۵ امتیاز دیجی‌کلاب</p>
              <p className="text-[#9e9fb1] text-[11px]">
                پس از تایید شدن دیدگاه، با رفتن به صفحه ماموریت‌های دیجی‌کلاب
                امتیازتان را دریافت کنید.
              </p>
            </div>
          </div>
        </div>
      </div>

      {showAddComment && (
        <RegisterComment onClose={toggleAddComment} product={product} />
      )}
    </div>
  );
}

export default ProductUsersScoresAndOpinions;
