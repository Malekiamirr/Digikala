import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { loginUser } from '../../app/slices/loginSlice';

import { basicSchema } from '../../schemas';
import { passwordSchema } from '../../schemas';

import { FiArrowRight } from 'react-icons/fi';
import { CgEye } from 'react-icons/cg';
import { RiEyeCloseLine } from 'react-icons/ri';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useGetUsersQuery, useCreateUserMutation } from '../../api/apiSlice';

function LoginPage() {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [createUser, { isLoading: isLoadingCreateUser }] =
    useCreateUserMutation();

  const [isNewUser, setisNewUser] = useState({ create: true, password: '' });
  const [showPasswordPage, setShowPasswordPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    actions.resetForm();
    users.map((user) => {
      if (user.email === values.email) {
        setisNewUser({ create: false, password: user.password });
      }
    });
  };
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser);
    if (isNewUser) {
      passwordFormik.resetForm();
      createUser({
        id: users.length + 1,
        name: '',
        email: values.email,
        password: passwordFormik.values.password,
        createdAt: new Date(),
        updatedAt: new Date(),
        favoriteProducts: [],
        cart: [],
      });
    }
    // BUG
    else {
      if (passwordFormik.values.password === isNewUser.password) {
        passwordFormik.resetForm();
      } else {
        alert('incorrect');
      }
    }
  };

  const {
    values,
    handleBlur,
    touched,
    errors,
    handleSubmit,
    isSubmitting,
    handleChange,
  } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const passwordFormik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: passwordSchema,
    onSubmit: handlePasswordSubmit,
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPasswordPage = () => {
    if (!errors.email) {
      setShowPasswordPage(!showPasswordPage);
    }
    console.log(showPasswordPage);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen gap-4">
      {/* Enter Email */}
      {!showPasswordPage ? (
        <div className="Laptop-L:border w-full rounded-lg Laptop-L:max-w-[400px] p-5 Laptop-L:p-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-[150px] h-[40px]">
              <img
                className="w-full h-full"
                src={'https://www.digikala.com/statics/img/svg/logo.svg'}
                alt="digikala logo"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="mt-5 Laptop-L:text-[19px] font-Yekan-bold text-[#080a38]">
              ورود | ثبت‌نام
            </h1>
            <p className="text-[11px] Laptop-L:text-xs text-[#3f4064] mt-5">
              سلام!
            </p>
            <p className="mb-5 text-[11px] Laptop-L:text-xs text-[#3f4064] mt-2">
              لطفا ایمیل خود را وارد کنید
            </p>

            <form onSubmit={handleSubmit} autoComplete="false">
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                id="email"
                className={`Laptop-L:border bg-[#f1f2f4] Laptop-L:bg-white border-b-2 border-b-[#d32f2f] rounded-lg outline-none text-[15px] Laptop-L:border-[#c3c3ce] w-full py-3 px-4 text-[#3f4064] caret-[#19bfd3] focus:border-[#19bfd3] transition-colors ${
                  errors.email &&
                  touched.email &&
                  'border-[#d32f2f] Laptop-L:border-[#d32f2f] focus:border-[#d32f2f]'
                }`}
              />
              {errors.email && touched.email && (
                <p className="text-xs text-[#b2001a] mt-2">{errors.email}</p>
              )}
              <button
                onClick={toggleShowPasswordPage}
                type="submit"
                className="px-4 py-3 mt-8 bg-[#ef4056] border border-[#ef4056] text-white w-full rounded-lg text-sm font-Yekan-bold"
              >
                ورود
              </button>
            </form>
            <p className="mt-5 text-[10px] Laptop-L:text-[11px] text-[#3f4064]">
              ورود شما به معنای پذیرش
              <a
                href="https://www.digikala.com/page/terms/"
                className="text-[#008eb2]"
              >
                {' '}
                شرایط دیجی‌کالا
              </a>{' '}
              و{' '}
              <a
                href="https://www.digikala.com/page/privacy/"
                className="text-[#008eb2]"
              >
                قوانین حریم‌خصوصی
              </a>{' '}
              است
            </p>
          </div>
        </div>
      ) : (
        <div className="Laptop-L:border w-full rounded-lg Laptop-L:max-w-[400px] p-5 Laptop-L:p-8">
          {/* Logo */}
          <div className="relative flex justify-center">
            <div className="w-[150px] h-[40px]">
              <img
                className="w-full h-full"
                src={'https://www.digikala.com/statics/img/svg/logo.svg'}
                alt="digikala logo"
              />
            </div>
            <FiArrowRight
              onClick={toggleShowPasswordPage}
              className="absolute top-[50%] -translate-y-[50%] right-0 hover:cursor-pointer w-6 h-6 text-[#3f4064]"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="my-5 Laptop-L:text-[19px] font-Yekan-bold text-[#080a38]">
              رمز عبور را وارد کنید
            </h1>
            <form onSubmit={handlePasswordSubmit} autoComplete="false">
              <div
                className={`Laptop-L:border bg-[#f1f2f4] Laptop-L:bg-white border-b-2 ${
                  passwordFormik.errors.password
                    ? 'border-b-[#d32f2f]'
                    : 'border-b-[#19bfd3]'
                } rounded-lg Laptop-L:border-[#c3c3ce] w-full px-4 text-[#3f4064] focus:border-[#19bfd3] transition-colors flex items-center`}
              >
                <input
                  autoComplete="off"
                  onChange={passwordFormik.handleChange}
                  value={passwordFormik.values.password}
                  type={showPassword ? 'type' : 'password'}
                  onBlur={passwordFormik.handleBlur}
                  id="password"
                  className={`py-3 w-full outline-none caret-[#19bfd3] bg-[#f1f2f4] Laptop-L:bg-white`}
                />

                {!showPassword && (
                  <CgEye
                    onClick={toggleShowPassword}
                    className="hover:cursor-pointer w-6 h-6 text-[#23254e]"
                  />
                )}
                {showPassword && (
                  <RiEyeCloseLine
                    onClick={toggleShowPassword}
                    className="hover:cursor-pointer w-6 h-6 text-[#23254e]"
                  />
                )}
              </div>
              {/* Error */}
              {passwordFormik.errors.password &&
                passwordFormik.touched.password && (
                  <p className="text-xs text-[#b2001a] mt-2">
                    {passwordFormik.errors.password ===
                    'password must be at least 8 characters'
                      ? 'رمز عبور باید شامل حروف بزرگ و کوچک و عدد باشد'
                      : passwordFormik.errors.password}
                  </p>
                )}

              <div className="flex items-center text-xs font-Yekan-bold text-[#19bfd3] py-1 px-4 mt-4">
                <p className="hover:cursor-pointer">ورود با رمز یک‌بار مصرف</p>
                <MdKeyboardArrowLeft className="w-5 h-5" />
              </div>
              <div className="flex items-center text-xs font-Yekan-bold text-[#19bfd3] py-1 px-4 mt-3">
                <p className="hover:cursor-pointer">فراموشی رمز عبور</p>
                <MdKeyboardArrowLeft className="w-5 h-5" />
              </div>

              <Link to="..">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="px-4 py-3 mt-8 bg-[#ef4056] border border-[#ef4056] text-white w-full rounded-lg text-sm font-Yekan-bold"
                >
                  تایید
                </button>
              </Link>
            </form>
            <p className="mt-5 text-[10px] Laptop-L:text-[11px] text-[#3f4064]">
              ورود شما به معنای پذیرش
              <a
                href="https://www.digikala.com/page/terms/"
                className="text-[#008eb2]"
              >
                {' '}
                شرایط دیجی‌کالا
              </a>{' '}
              و{' '}
              <a
                href="https://www.digikala.com/page/privacy/"
                className=" text-[#008eb2]"
              >
                قوانین حریم‌خصوصی
              </a>{' '}
              است
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
