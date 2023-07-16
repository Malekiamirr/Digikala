import ProductCardSkeleton from '../ProductCardSkeleton';
import { PhoneCard } from '../index';
import { MdInfo } from 'react-icons/md';

function ShowPhoneCards({ phones }) {
  if (phones.length) {
    return (
      <div className="grid gird-cols-1 min-[640px]:grid-cols-2 min-[1280px]:grid-cols-3 min-[1440px]:grid-cols-4 min-[1676px]:grid-cols-5">
        {phones.map((phone, i) => (
          //   <ProductCardSkeleton />
          <PhoneCard key={phone.id} index={i + 1} product={phone} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="p-5 pb-3 w-full flex items-center flex-col">
        <div className="mb-5 h-auto w-[200px] Laptop-L:w-[236px]">
          <img
            className="w-full"
            src="https://www.digikala.com/statics/img/svg/plp/not-found.svg"
            alt="not-found"
          />
        </div>
        <div className="border px-5 py-4 max-w-[480px] w-full rounded-lg border-[#e0e0e6] flex flex-col gap-2">
          <div className="flex items-center">
            <MdInfo className="w-5 h-5 text-[#f9a825] ml-4" />
            <p className="Laptop:text-[15px] Mobile-S:text-[13px] text-[11px] text-[#3f4064] font-Yekan-bold leading-5 Mobile-S:leading-7">
              کالایی با این مشخصات پیدا نکردیم
            </p>
          </div>
          <p className="mr-9 Mobile-S:text-xs text-[9px] text-[#767790] leading-4 Mobile-S:leading-6">
            پیشنهاد می‌کنیم فیلترها را تغییر دهید
          </p>
        </div>
      </div>
    );
  }
}

export default ShowPhoneCards;
