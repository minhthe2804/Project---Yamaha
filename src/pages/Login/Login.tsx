import { yupResolver } from '@hookform/resolvers/yup'
import { useQuery } from '@tanstack/react-query'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { authApi } from '~/apis/auth.api'

import BreadCrumb from '~/components/BreadCrumb'
import Button from '~/components/Button'
import Input from '~/components/Input'
import { breadCrumb } from '~/constants/breadCrumb'
import { path } from '~/constants/path'
import { toastNotify } from '~/constants/toastNotify'
import { AppContext } from '~/contexts/app.context'
import { setLoginSuccess, setProfileFromLS } from '~/utils/auth'
import { Schema, schema } from '~/utils/rules'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['email', 'password'])
export default function Login() {
    const { setIsAuthenticated, setProfile } = useContext(AppContext)
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
        resolver: yupResolver(loginSchema)
    })

    const navigate = useNavigate()
    const { data: dataUser } = useQuery({
        queryKey: ['user'],
        queryFn: () => authApi.login()
    })

    const onSubmit = handleSubmit((data) => {
        const { email, password } = data
        const findUser = dataUser?.data.find((user) => user.email === email)
        const comparePassword = findUser?.password === password
        if (!findUser) {
            if (errorPassword) {
                setErrorPassword('')
            }
            setErrorEmail(toastNotify.login.emailError)
            return
        }
        if (!comparePassword) {
            setErrorPassword(toastNotify.login.passwordError)
            return
        }
        setLoginSuccess(findUser.username)
        setProfileFromLS(findUser)
        setIsAuthenticated(true)
        setProfile(findUser)
        reset()
        navigate(path.home)
        toast.success(toastNotify.login.loginSuccess, { autoClose: 3000 })
    })

    return (
        <div>
            <BreadCrumb heading={breadCrumb.login.heading} title={breadCrumb.login.title} />
            <div className='flex justify-center pb-[78px]'>
                <div className='w-[382px] flex flex-col'>
                    <div className='w-full border-[2px] border-[#817f7f] pt-[20px] pb-[20px] text-center'>
                        <p className='text-[18px] font-semibold text-[#000bff]'>ĐĂNG NHẬP</p>
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
                            inputEmail
                            errorEmail={errorEmail}
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
                            errorPassword={errorPassword}
                            inputPassword
                            setErrorPassword={setErrorPassword}
                        />
                        <Button className='mt-2 w-full bg-[#ff3237] rounded-[4px] flex items-center justify-center text-[15px] font-[550] py-[8px] hover:bg-[#fe0006] transition duration-300 ease-in'>
                            Đăng nhập
                        </Button>
                        <Link
                            to={path.home}
                            className='block mt-[13px] w-full text-center text-[#ff3237] text-[15px] hover:opacity-[0.8] transition duration-200 ease-in '
                        >
                            Trở về
                        </Link>
                        <Link
                            to={path.register}
                            className='block mt-[13px] w-full text-center text-[#ff3237] text-[15px] hover:opacity-[0.8] transition duration-200 ease-in '
                        >
                            Đăng kí
                        </Link>
                        <Link
                            to={path.forgotPassword}
                            className='block mt-[13px] w-full text-center text-[#ff3237] text-[15px] hover:opacity-[0.8] transition duration-200 ease-in '
                        >
                            Quên mật khẩu?
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
