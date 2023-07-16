import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email('ایمیل وارد شده صحیح نیست')
    .required('لطفا این قسمت را خالی نگذارید'),
  name: yup.string().min(3).required('لطفا این قسمت را خالی نگذارید'),
});

export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message:
        'رمز عبور باید حد اقل ۸ کاراکتر و شامل حروف بزرگ، کوچک و عدد باشد',
    })
    .required('لطفا این قسمت را خالی نگذارید'),
});
