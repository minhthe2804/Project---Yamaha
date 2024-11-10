import * as yup from 'yup'

export const schema = yup.object({
    name: yup.string().required('Tên là bắt buộc'),
    lastname: yup.string().required('Họ là bắt buộc'),
    email: yup
        .string()
        .required('Email là bắt buộc')
        .email('Email không đúng định dạng')
        .min(5, 'Độ dài từ 5 - 160 ký tự')
        .max(160, 'Độ dài từ 5 - 160 ký tự'),
    password: yup
        .string()
        .required('Mật khẩu là bắt buộc')
        .min(6, 'Độ dài từ 6 - 160 ký tự')
        .max(160, 'Độ dài từ 6 - 160 ký tự')
})

export const userSchema = yup.object({
    username: yup.string().required('Bạn cần phải nhập họ tên').max(160, 'Độ dài tối đa là 160 kí tự'),
    phone: yup
        .string()
        .matches(
            /^(0|\+84)(3[2-9]|5[2689]|7[06-9]|8[1-5]|9[0-9])[0-9]{7}$/,
            'Số điện thoại không đúng định dạng'
        )
        .max(20, 'Độ dài tối đa là 20 kí tự'),
    address: yup.string().required('Bạn cần phải nhập địa chỉ').max(160, 'Độ dài tối đa là 160 kí tự')
})

export type Schema = yup.InferType<typeof schema>
export type UserSchema = yup.InferType<typeof userSchema>
