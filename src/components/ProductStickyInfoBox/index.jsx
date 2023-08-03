import { RiHomeSmileLine } from 'react-icons/ri';
import { LuShieldCheck } from 'react-icons/lu';
import { FiSave } from 'react-icons/fi';
import convertToPersian from '../../utils/convertToPersianNumber';
import { useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct, removeProduct } from '../../app/slices/userSlice';
import { BiTrash } from 'react-icons/bi';

function ProductStickyInfoBox({ product }) {
  const [addToProduct, setAddToProduct] = useState(0);
  const activeUser = useSelector((state) => state.user.lastLoggedInUser);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      dispatch(addProduct({ userId: activeUser.id, product: product }));
      console.log(activeUser);
      setAddToProduct(addToProduct + 1);
      console.log(`product ${addToProduct}`);
    }
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct({ userId: activeUser.id, productId: product.id }));
    setAddToProduct(addToProduct - 1);
    console.log(`product ${addToProduct}`);
    console.log(activeUser);
  };

  return (
    <div className="relative hidden mr-10 Laptop-L:block">
      <div className="sticky top-[230px]">
        <div className="mt-5 mb-2 p-4 border border-[#e0e0e6] bg-[#f1f2f4] w-[300px] rounded-lg">
          <div className="flex pb-3 mb-3 border-b border-b-[#e0e0e6]">
            {/* Product Image */}
            <div className="shrink-0">
              <img
                className="w-[80px] h-[80px] mix-blend-multiply"
                src={product.productImage[0].image}
                alt=""
              />
            </div>

            {/* Product desctiption and color */}
            <div className="flex flex-col gap-4 mr-5">
              <p className="text-xs leading-6 line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center">
                <div className="rounded-full bg-[#c99212] w-[14px] h-[14px]"></div>
                <p className="mr-2 text-xs">طلایی</p>
              </div>
            </div>
          </div>

          {/* seller Name & Icon */}
          <div className="flex items-center mb-2">
            <div className="flex items-center ml-2">
              <RiHomeSmileLine className="w-[18px] h-[18px] text-[#3f4064]" />
            </div>
            <p className="text-xs text-[#3f4064]">روژینو موبایل</p>
          </div>

          {/* Warranty*/}
          <div className="flex items-center mb-2">
            <div className="flex items-center ml-2">
              <LuShieldCheck className="w-[18px] h-[18px] text-[#3f4064]" />
            </div>
            <p className="text-xs text-[#3f4064]">گارانتی ۱۸ ماهه هما تلکام</p>
          </div>

          {/* Available in the digikala warehouse */}
          <div className="flex items-center mb-2">
            <div className="flex items-center ml-2">
              <FiSave className="w-[18px] h-[18px] text-[#9e9fb1]" />
            </div>
            <p className="text-xs text-[#3f4064]">موجود در انبار فروشنده</p>
          </div>

          {/* Price */}
          <div className="flex items-center my-2">
            <div className="flex items-center gap-1 mr-auto">
              <div className="text-[19px] font-Yekan-bold text-[#23254e]">
                {convertToPersian(product.price)}
              </div>
              <span className="text-[10px] font-Yekan-bold text-[#23254e]">
                تومان
              </span>
            </div>
          </div>

          {/* Add to Cart button */}
          {addToProduct === 0 && (
            <button
              onClick={handleAddProduct}
              className="py-3 px-4 border border-[#ef4056] bg-[#ef4056] font-Yekan-bold text-white text-xs w-full rounded-lg mt-2 order-first"
            >
              افزودن به سبد
            </button>
          )}
          {addToProduct > 0 && (
            <div className="flex items-center gap-4 mt-2">
              <div className="w-[102px] min-w-[102px] min-h-[44px] max-h-[44px] px-2 bg-white bg-opacity-40 addToCartButton-shadow font-Yekan-bold text-[#ef4056] rounded-lg flex gap-2 items-center justify-between">
                <BiPlus
                  onClick={handleAddProduct}
                  className={`${
                    addToProduct === 2 &&
                    'opacity-30 hover:cursor-auto pointer-events-none'
                  } w-[18px] h-[18px] hover:cursor-pointer`}
                />
                <div className="flex flex-col items-center">
                  <span>{convertToPersian(addToProduct)}</span>
                  {addToProduct === 2 && (
                    <span className="text-[11px] text-[#c3c3ce]">حداکثر</span>
                  )}
                </div>
                {addToProduct > 1 ? (
                  <BiMinus
                    onClick={handleRemoveProduct}
                    className={`w-[18px] h-[18px] hover:cursor-pointer`}
                  />
                ) : (
                  <BiTrash
                    onClick={handleRemoveProduct}
                    className="w-[18px] h-[18px] hover:cursor-pointer"
                  />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-[#3f4064]">در سبد شما</span>
                <div className="flex items-center gap-1">
                  <span className="text-[10px]">مشاهده</span>
                  <span className="text-xs text-[#19bfd3]">سبد خرید</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductStickyInfoBox;
