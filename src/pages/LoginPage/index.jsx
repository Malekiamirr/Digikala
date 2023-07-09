import { useFormik } from "formik";
import { useState } from "react";

import { basicSchema } from "../../schemas";
import {FiArrowRight} from "react-icons/fi";
import {CgEye} from "react-icons/cg";
import {RiEyeCloseLine} from "react-icons/ri";
import {MdKeyboardArrowLeft} from "react-icons/md";

const onSubmit = () => {
    console.log("Submitted!!!!");
}

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const {values, handleBlur, errors, handleSubmit, handleChange} = useFormik({
    initialValues: {
        email: "",
        password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  })

  return (
    <div className='flex items-center justify-center w-full h-screen gap-4'>
        {/* Enter Email */}
        <div className="Laptop-L:border w-full rounded-lg Laptop-L:max-w-[400px] p-5 Laptop-L:p-8">
            {/* Logo */}
            <div className='flex justify-center'>
                <div className='w-[150px] h-[40px]'>
                    <img className='w-full h-full' src={"https://www.digikala.com/statics/img/svg/logo.svg"} alt="digikala logo" />
                </div>
            </div>
            <div className='flex flex-col'>
                <h1 className='mt-5 Laptop-L:text-[19px] font-Yekan-bold text-[#080a38]'>ورود | ثبت‌نام</h1>
                <p className='text-[11px] Laptop-L:text-xs text-[#3f4064] mt-5'>سلام!</p>
                <p className='mb-5 text-[11px] Laptop-L:text-xs text-[#3f4064] mt-2'>لطفا ایمیل خود را وارد کنید</p>

                <form onSubmit={handleSubmit} autoComplete='false'>
                    <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" id="email" className={`Laptop-L:border bg-[#f1f2f4] Laptop-L:bg-white border-b-2 border-b-[#d32f2f] rounded-lg outline-none text-[15px] Laptop-L:border-[#c3c3ce] w-full py-3 px-4 text-[#3f4064] caret-[#19bfd3] focus:border-[#19bfd3] transition-colors ${errors.email && "border-[#d32f2f] Laptop-L:border-[#d32f2f] focus:border-[#d32f2f]"}`}/>
                    {errors.email && 
                        <p className="text-xs text-[#b2001a] mt-2">{errors.email}</p>
                    }
                    <button className="px-4 py-3 mt-8 bg-[#ef4056] border border-[#ef4056] text-white w-full rounded-lg text-sm font-Yekan-bold">ورود</button>
                </form>
                <p className='mt-5 text-[10px] Laptop-L:text-[11px] text-[#3f4064]'>
                 ورود شما به معنای پذیرش<a href='https://www.digikala.com/page/terms/' className='text-[#008eb2]'> شرایط دیجی‌کالا</a> و <a href='https://www.digikala.com/page/privacy/' className=' text-[#008eb2]'>قوانین حریم‌خصوصی</a> است
                </p>
            </div>
        </div>
            
        
    </div>
  )
}

export default LoginPage