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

export type Schema = yup.InferType<typeof schema>
