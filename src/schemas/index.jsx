import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
    email: yup.string().email("ایمیل وارد شده صحیح نیست").required("لطفا این قسمت را خالی نگذارید"),
    password: yup.string().min(8).matches(passwordRules, {message: "Please create a stronger password"}).required("لطفا این قسمت را خالی نگذارید")
})