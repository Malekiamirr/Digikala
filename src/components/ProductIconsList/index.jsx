import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { IoShareSocialSharp } from 'react-icons/io5';
import { TbBellRinging } from 'react-icons/tb';
import { AiOutlineLineChart } from 'react-icons/ai';
import { MdCompare } from 'react-icons/md';
import { HiListBullet } from 'react-icons/hi2';
import { useState } from 'react';
import { PriceChart, ProductNotice, ProductShareLink } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addFavoriteProduct,
  removeFavoriteProduct,
} from '../../app/slices/userSlice';

function ProductIconsList({ product }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [showPriceChart, setShowPriceChart] = useState(false);
  const [isShareLinkOpen, setIsShareLinkOpen] = useState(false);
  const [isProductNoticeOpen, setIsProductNoticeOpen] = useState(false);
  const activeUser = useSelector((state) => state.user.lastLoggedInUser);
  const handleShowPriceChart = () => {
    setShowPriceChart(!showPriceChart);
  };

  const [addToFavorite, setAddToFavorite] = useState(false);
  const navigate = useNavigate();
  const handleAddToFavorive = () => {
    if (isLoggedIn) {
      if (addToFavorite) {
        dispatch(
          addFavoriteProduct({ userId: activeUser.id, product: product })
        );
      } else {
        dispatch(
          removeFavoriteProduct({
            userId: activeUser.id,
            productId: product.id,
          })
        );
      }
      setAddToFavorite(!addToFavorite);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex gap-4 Laptop-L:flex-col">
      <div className="relative group hover:cursor-pointer z-[10]">
        {addToFavorite ? (
          <FaHeart
            onClick={handleAddToFavorive}
            className={`text-[#ef4056] w-6 h-6 ml-4`}
          />
        ) : (
          <FiHeart
            onClick={handleAddToFavorive}
            className={`text-[#3f4064] w-6 h-6 ml-4`}
          />
        )}

        <div className="hidden Laptop-L:group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">
          اضافه به لیست علاقه‌مندی
        </div>
      </div>
      <div className="relative group hover:cursor-pointer z-[10]">
        <IoShareSocialSharp
          onClick={() => setIsShareLinkOpen(true)}
          className="text-[#3f4064] w-6 h-6 ml-4"
        />
        <div className="hidden Laptop-L:group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">
          اشتراک گذاری
        </div>
      </div>
      <div className="relative group hover:cursor-pointer z-[10]">
        <TbBellRinging
          onClick={() => setIsProductNoticeOpen(true)}
          className="text-[#3f4064] w-6 h-6 ml-4"
        />
        <div className="hidden Laptop-L:group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">
          اطلاع‌رسانی شگفت‌انگیز
        </div>
      </div>
      <div
        onClick={handleShowPriceChart}
        className="relative group hover:cursor-pointer z-[10]"
      >
        <AiOutlineLineChart className="text-[#3f4064] w-6 h-6 ml-4" />
        <div className="hidden Laptop-L:group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">
          نمودار قیمت
        </div>
      </div>
      <div className="relative group hover:cursor-pointer z-[10]">
        <MdCompare className="text-[#3f4064] w-6 h-6 ml-4" />
        <div className="hidden Laptop-L:group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">
          مقایسه
        </div>
      </div>
      <div className="relative group hover:cursor-pointer z-[10]">
        <HiListBullet className="text-[#3f4064] w-6 h-6 ml-4" />
        <div className="hidden Laptop-L:group-hover:block absolute top-[50%] -translate-y-[50%] right-7 w-max bg-[#3f4064] p-2 py-3 rounded-lg text-xs text-white">
          اضافه به لیست
        </div>
      </div>

      <ProductShareLink
        isOpen={isShareLinkOpen}
        handleClose={() => setIsShareLinkOpen(false)}
      />
      <ProductNotice
        isOpen={isProductNoticeOpen}
        handleClose={() => setIsProductNoticeOpen(false)}
      />

      <div
        onClick={handleShowPriceChart}
        className={`absolute top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-25 ${
          !showPriceChart && 'hidden'
        }`}
      >
        <PriceChart onClick={handleShowPriceChart} />
      </div>
    </div>
  );
}

export default ProductIconsList;
