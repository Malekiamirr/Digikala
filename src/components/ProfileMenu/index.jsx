import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BiDiamond } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { TbLogout } from 'react-icons/tb';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { useGetUsersQuery } from '../../api/apiSlice';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../app/slices/loginSlice';
import { useDispatch } from 'react-redux';

function ProfileMenu({ activeUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <>
      <Link to="/">
        <div className="py-4 mx-4 flex items-center border-b border-b-[#f1f2f4]">
          <div className="w-8 h-8">
            <img
              src="https://api.digikala.com/static/files/fd4840b2.svg"
              alt="user"
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between pr-2 grow">
            <span className="text-[15px] font-Yekan-bold text-[#3f4064]">
              {activeUser.name}
            </span>
            <MdKeyboardArrowLeft className="text-[#9e9fb1] w-6 h-6" />
          </div>
        </div>
      </Link>
      <ul>
        <li className="px-4 w-full">
          <a
            href="https://www.digikala.com/digiclub/"
            className="flex items-center"
          >
            <div className="pr-1 pl-5">
              <div className="h-6 w-6">
                <img
                  src="https://www.digikala.com/statics/img/svg/club-point.svg"
                  alt="digi-club score"
                  className="w-full"
                />
              </div>
            </div>
            <div className="border-b py-2 border-b-[#f1f2f4] flex items-center justify-between w-full">
              <span className="text-[#3f4064] text-[15px] font-Yekan-bold">
                دیجی‌کلاب
              </span>
              <div className="flex items-center">
                <span className="text-sm font-Yekan-bold text-[#3f4064]">
                  ۱
                </span>
                <span className="text-[11px] font-Yekan-bold text-[#9e9fb1] mr-1">
                  امتیاز
                </span>
              </div>
            </div>
          </a>
        </li>

        <li className="px-4 w-full">
          <a
            href="https://www.digikala.com/digiclub/"
            className="flex items-center"
          >
            <div className="pr-1 pl-5">
              <BiDiamond className="text-[#c3c3ce] w-6 h-6" />
            </div>
            <div className="border-b py-2 border-b-[#f1f2f4] flex items-center justify-between w-full">
              <span className="text-[#c3c3ce] text-[15px] font-Yekan-bold">
                دیجی‌پلاس
              </span>
              <div className="flex items-center">
                <span className="text-xs font-Yekan-bold text-[#b12ba4] ml-1">
                  خرید اشتراک
                </span>
                <MdKeyboardArrowLeft className="w-[18px] h-[18px] text-[#b12ba4]" />
              </div>
            </div>
          </a>
        </li>

        <li className="px-4 w-full">
          <Link to="/">
            <div className="flex items-center gap-2">
              <div className="pr-1 pl-5">
                <RiShoppingBasketLine className=" w-6 h-6 text-[#3f4064]" />
              </div>
              <span className="py-2 text-[15px] font-Yekan-bold text-[#3f4064] grow border-b border-b-[#f1f2f4]">
                سفارش‌ها
              </span>
            </div>
          </Link>
        </li>

        <li className="px-4 w-full">
          <Link to="profile/lists">
            <div className="flex items-center gap-2">
              <div className="pr-1 pl-5">
                <AiOutlineHeart className=" w-6 h-6 text-[#3f4064]" />
              </div>
              <span className="py-2 text-[15px] font-Yekan-bold text-[#3f4064] grow border-b border-b-[#f1f2f4]">
                لیست‌ها
              </span>
            </div>
          </Link>
        </li>

        <li className="px-4 w-full">
          <Link to="/">
            <div className="flex items-center gap-2">
              <div className="pr-1 pl-5">
                <AiOutlineComment className=" w-6 h-6 text-[#3f4064]" />
              </div>
              <span className="py-2 text-[15px] font-Yekan-bold text-[#3f4064] grow border-b border-b-[#f1f2f4]">
                دیدگاه‌ها‌
              </span>
            </div>
          </Link>
        </li>

        <li className="px-4 w-full">
          <div onClick={handleLogout}>
            <div className="flex items-center gap-2">
              <div className="pr-1 pl-5">
                <TbLogout className=" w-6 h-6 text-[#3f4064]" />
              </div>
              <span className="py-2 text-[15px] font-Yekan-bold text-[#3f4064] grow">
                خروج از حساب کاربری
              </span>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default ProfileMenu;
