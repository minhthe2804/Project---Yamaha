import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

import { breadCrumb } from '~/constants/BreadCrumb'
import BreadCrumb from '~/components/BreadCrumb'
import { path } from '~/constants/path'
import { Schema, schema as registerSchema } from '~/utils/rules'
import Input from '~/components/Input'
import { useMutation, useQuery } from '@tanstack/react-query'
import { authApi } from '~/apis/auth.api'
import { toast } from 'react-toastify'
import { toastNotify } from '~/constants/toastNotify'
import Button from '~/components/Button'

type FormData = Schema
export default function Register() {
    const [errorEmail, setErrorEmail] = useState<string>('')
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: {
            email: '',
            password: '',
            lastname: '',
            name: ''
        },
        resolver: yupResolver(registerSchema)
    })

    const navigate = useNavigate()
    const regiterMutation = useMutation({
        mutationFn: (body: {
            name: { firstname: string; lastname: string }
            username: string
            email: string
            password: string
        }) => authApi.register(body)
    })

    const { data: dataUser } = useQuery({
        queryKey: ['user'],
        queryFn: () => authApi.registerAcount()
    })

    const isEmail = (email: string) => {
        const isEmail = dataUser?.data.some((user) => user.email === email)
        if (isEmail) {
            setErrorEmail(toastNotify.register.emailError)
            return true
        }
        return false
    }

    const onSubmit = handleSubmit((data) => {
        const { email, lastname, name, password } = data
        if (isEmail(email)) return
        const registerAccount = {
            name: {
                firstname: name,
                lastname
            },
            username: name + lastname,
            email,
            password
        }
        regiterMutation.mutate(registerAccount, {
            onSuccess: (data) => {
                console.log(data)
                reset()
                toast.success(toastNotify.register.registerSuccess, { autoClose: 3000 })
                navigate(path.login)
            }
        })
    })

    return (
        <div>
            <BreadCrumb heading={breadCrumb.register.heading} title={breadCrumb.register.title} />
            <div className='flex justify-center pb-[78px]'>
                <div className='w-[382px] flex flex-col'>
                    <div className='w-full border-[2px] border-[#817f7f] pt-[20px] pb-[20px] text-center'>
                        <p className='text-[18px] font-semibold text-[#000bff]'>TẠO TÀI KHOẢN</p>
                    </div>
                    <form className='w-full' onSubmit={onSubmit}>
                        <Input
                            classNameError='text-red-500 text-[14px] mt-[2px] min-h-[20px]'
                            classNameInput='w-full outline-none border-[1px] border-[#817f7f] rounded-[4px] py-[7px] px-[12px] placeholder:text-[15px] text-black focus:border-blue-400 transition duration-300 ease-in text-[15px]'
                            register={register}
                            errorMessage={errors.name?.message}
                            name='name'
                            type='text'
                            placeholder='Tên'
                        />
                        <Input
                            classNameError='text-red-500 text-[14px] mt-[2px] min-h-[20px]'
                            classNameInput='w-full outline-none border-[1px] border-[#817f7f] rounded-[4px] py-[7px] px-[12px] placeholder:text-[15px] text-black focus:border-blue-400 transition duration-300 ease-in text-[15px]'
                            register={register}
                            errorMessage={errors.lastname?.message}
                            name='lastname'
                            type='text'
                            className='mt-1'
                            placeholder='Họ'
                        />
                        <Input
                            classNameError='text-red-500 text-[14px] mt-[2px] min-h-[20px]'
                            classNameInput='w-full outline-none border-[1px] border-[#817f7f] rounded-[4px] py-[7px] px-[12px] placeholder:text-[15px] text-black focus:border-blue-400 transition duration-300 ease-in text-[15px]'
                            register={register}
                            errorMessage={errors.email?.message}
                            name='email'
                            type='text'
                            className='mt-1'
                            placeholder='Email'
                            errorEmail={errorEmail}
                            inputEmail
                            setErrorEmail={setErrorEmail}
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
                        />
                        <Button
                            className='mt-2 w-full bg-[#ff3237] rounded-[4px] flex items-center justify-center text-[15px] font-[550] py-[8px] hover:bg-[#fe0006] transition duration-300 ease-in'
                            isLoading={regiterMutation.isPending}
                            disabled={regiterMutation.isPending}
                        >
                            Đăng ký
                        </Button>
                        <Link
                            to={path.home}
                            className='block mt-[13px] w-full text-center text-[#ff3237] text-[15px] hover:opacity-[0.8] transition duration-200 ease-in '
                        >
                            Trở về
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
