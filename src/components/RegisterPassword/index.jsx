import { passwordSchema } from '../../schemas';
import { useFormik } from 'formik';
import { FiArrowRight } from 'react-icons/fi';
import { CgEye } from 'react-icons/cg';
import { RiEyeCloseLine } from 'react-icons/ri';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../app/slices/loginSlice';
import { useCreateUserMutation, useGetUsersQuery } from '../../api/apiSlice';
import { useDispatch } from 'react-redux';
import { setLastLoggedInUser } from '../../app/slices/userSlice';

function RegisterPassword({ setPassword, togglePage, name, email }) {
  const onSubmit = (values, actions) => {
    setPassword(values.password);

    actions.resetForm();

    const newUser = {
      id: users.length + 1,
      name: name,
      email: email,
      password: values.password,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
      favoriteProducts: [],
      cart: [],
    };

    createUser(newUser);
    dispatch(loginUser());
    dispatch(setLastLoggedInUser(newUser));

    navigate('/');
  };
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: passwordSchema,
    onSubmit,
  });

  const dispatch = useDispatch();

  const [createUser] = useCreateUserMutation();
  const { data: users, isLoading, isError } = useGetUsersQuery();
  if (isLoading || isError) {
    return null;
  }
  return (
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
          onClick={togglePage}
          className="absolute top-[50%] -translate-y-[50%] right-0 hover:cursor-pointer w-6 h-6 text-[#3f4064]"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="my-5 Laptop-L:text-[19px] font-Yekan-bold text-[#080a38]">
          رمز عبور را وارد کنید
        </h1>
        <form onSubmit={handleSubmit} autoComplete="false">
          <div
            className={`Laptop-L:border bg-[#f1f2f4] Laptop-L:bg-white border-b-2 ${
              errors.password ? 'border-b-[#d32f2f]' : 'border-b-[#19bfd3]'
            } rounded-lg Laptop-L:border-[#c3c3ce] w-full px-4 text-[#3f4064] focus:border-[#19bfd3] transition-colors flex items-center`}
          >
            <input
              autoComplete="off"
              onChange={handleChange}
              value={values.password}
              type={showPassword ? 'type' : 'password'}
              onBlur={handleBlur}
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
          {errors.password && touched.password && (
            <p className="text-xs text-[#b2001a] mt-2">
              {errors.password === 'password must be at least 8 characters'
                ? 'رمز عبور باید شامل حروف بزرگ و کوچک و عدد باشد'
                : errors.password}
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

          <button
            disabled={isSubmitting}
            type="submit"
            className="px-4 py-3 mt-8 bg-[#ef4056] border border-[#ef4056] text-white w-full rounded-lg text-sm font-Yekan-bold"
          >
            تایید
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
            className=" text-[#008eb2]"
          >
            قوانین حریم‌خصوصی
          </a>{' '}
          است
        </p>
      </div>
    </div>
  );
}

export default RegisterPassword;
