import { useFormik } from 'formik';
import { basicSchema } from '../../schemas';

function RegisterEmail({ setEmail, setName, togglePage }) {
  const onSubmit = (values, actions) => {
    setEmail(values.email);
    setName(values.name);
    actions.resetForm();
    togglePage();
  };

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
      email: '',
      name: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="flex items-center justify-center w-full h-screen gap-4">
      {/* Enter Email */}
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

          <form autoComplete="false" onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="mb-5 text-[11px] Laptop-L:text-xs text-[#3f4064] mt-2 block"
            >
              لطفا ایمیل خود را وارد کنید
            </label>
            <input
              value={values.email}
              onChange={handleChange}
              type="email"
              id="email"
              className={`Laptop-L:border bg-[#f1f2f4] Laptop-L:bg-white border-b-2 border-b-transparent rounded-lg outline-none text-[15px] Laptop-L:border-[#c3c3ce] w-full py-3 px-4 text-[#3f4064] caret-[#19bfd3] focus:border-[#19bfd3] transition-colors ${
                errors.email
                  ? 'border-[#d32f2f] Laptop-L:border-[#d32f2f] focus:border-[#d32f2f]'
                  : ''
              }`}
            />

            {errors.email && (
              <p className="text-xs text-[#b2001a] mt-2">{errors.email}</p>
            )}

            <label
              htmlFor="name"
              className="my-5 پ text-[11px] Laptop-L:text-xs text-[#3f4064] block"
            >
              لطفا نام خود را وارد کنید
            </label>

            <input
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              id="name"
              className={`Laptop-L:border bg-[#f1f2f4] Laptop-L:bg-white rounded-lg outline-none text-[15px] Laptop-L:border-[#c3c3ce] w-full py-3 px-4 text-[#3f4064] caret-[#19bfd3] border-b-2 border-b-transparent focus:border-[#19bfd3] transition-colors ${
                errors.name &&
                touched.name &&
                'border-[#d32f2f] Laptop-L:border-[#d32f2f] focus:border-[#d32f2f]'
              }`}
            />

            {errors.name && touched.name && (
              <p className="text-xs text-[#b2001a] mt-2">{errors.name}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
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
    </div>
  );
}

export default RegisterEmail;
