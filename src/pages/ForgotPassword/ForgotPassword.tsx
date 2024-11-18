import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { authApi } from '~/apis/auth.api'

import BreadCrumb from '~/components/BreadCrumb'
import Button from '~/components/Button'
import Input from '~/components/Input'
import { breadCrumb } from '~/constants/BreadCrumb'
import { path } from '~/constants/path'
import { toastNotify } from '~/constants/toastNotify'
import { Schema, schema } from '~/utils/rules'

type FormData = Pick<Schema, 'email' | 'password'>
const forgotPasswordSchema = schema.pick(['email', 'password'])

export default function ForgotPassword() {
    const [errorEmail, setErrorEmail] = useState<string>('')
    const [errorPassword, setErrorPassword] = useState<string>('')
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(forgotPasswordSchema)
    })

    const navigate = useNavigate()
    const { data: dataUser } = useQuery({
        queryKey: ['user'],
        queryFn: () => authApi.login()
    })

    const forgotPasswordMutation = useMutation({
        mutationFn: (bodyData: {
            id: string
            body: {
                name: { firstname: string; lastname: string }
                username: string
                email: string
                password: string
            }
        }) => authApi.forgotPassword(bodyData.id, bodyData.body)
    })

    const onSubmit = handleSubmit((data) => {
        const { email, password } = data
        const findUser = dataUser?.data.find((user) => user.email === email)
        const comparePassword = findUser?.password === password
        if (!findUser) {
            if (errorPassword) {
                setErrorPassword('')
            }
            setErrorEmail(toastNotify.forgotPassword.emailError)
            return
        }
        if (comparePassword) {
            setErrorPassword(toastNotify.forgotPassword.passwordError)
            return
        }
        const bodyData = {
            id: findUser.id,
            body: {
                ...findUser,
                password
            }
        }

        forgotPasswordMutation.mutate(bodyData, {
            onSuccess: () => {
                reset()
                navigate(path.login)
                toast.success(toastNotify.forgotPassword.changePasswordSuccess, {
                    autoClose: 3000
                })
            }
        })
    })

    return (
        <div>
             <Helmet>
                <title>Quên mật khẩu – Hệ Thống Xe máy Hoàng Cầu</title>
                <meta name='description' content='Hệ Thống Xe máy Hoàng Cầu' />
            </Helmet>
            <BreadCrumb heading={breadCrumb.forgotPassword.heading} title={breadCrumb.forgotPassword.title} />
            <div className='flex justify-center pb-[78px]'>
                <div className='w-[382px] flex flex-col'>
                    <div className='w-full border-[2px] border-[#817f7f] pt-[20px] pb-[20px] text-center'>
                        <p className='text-[18px] font-semibold text-[#000bff]'>CÀI ĐẶT LẠI MẬT KHẨU</p>
                    </div>
                    <form className='w-full' onSubmit={onSubmit}>
                        <Input
                            classNameError='text-red-500 text-[14px] mt-[2px] min-h-[20px]'
                            classNameInput='w-full outline-none border-[1px] border-[#817f7f] rounded-[4px] py-[7px] px-[12px] placeholder:text-[15px] text-black focus:border-blue-400 transition duration-300 ease-in text-[15px]'
                            register={register}
                            errorMessage={errors.email?.message}
                            name='email'
                            type='text'
                            placeholder='Email'
                            errorEmail={errorEmail}
                            setErrorEmail={setErrorEmail}
                            inputEmail
                        />
                        <Input
                            classNameError='text-red-500 text-[14px] mt-[2px] min-h-[20px]'
                            classNameInput='w-full outline-none border-[1px] border-[#817f7f] rounded-[4px] py-[7px] px-[12px] placeholder:text-[15px] text-black focus:border-blue-400 transition duration-300 ease-in text-[15px]'
                            register={register}
                            errorMessage={errors.password?.message}
                            name='password'
                            type='text'
                            className='mt-1'
                            placeholder='Password'
                            errorPassword={errorPassword}
                            inputPassword
                            setErrorPassword={setErrorPassword}
                        />
                        <Button
                            className='mt-2 w-full bg-[#ff3237] rounded-[4px] flex items-center justify-center text-[15px] font-[550] py-[8px] hover:bg-[#fe0006] transition duration-300 ease-in'
                            isLoading={forgotPasswordMutation.isPending}
                            disabled={forgotPasswordMutation.isPending}
                        >
                            Xác nhận
                        </Button>
                        <Link
                            to={path.login}
                            className='block mt-[13px] w-full text-center text-[#ff3237] text-[15px] hover:opacity-[0.8] transition duration-200 ease-in '
                        >
                            Bỏ qua
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
