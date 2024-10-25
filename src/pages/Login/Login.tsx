import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import BreadCrumb from '~/components/BreadCrumb'
import Input from '~/components/Input'
import { breadCrumb } from '~/constants/BreadCrumb'
import { path } from '~/constants/path'
import { Schema, schema } from '~/utils/rules'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['email', 'password'])
export default function Login() {
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

    const onSubmit = handleSubmit((data) => {
        console.log(data)
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
                        <button className='mt-2 w-full bg-[#ff3237] rounded-[4px] flex items-center justify-center text-[15px] font-[550] py-[7px] hover:bg-[#fe0006] transition duration-300 ease-in'>
                            Đăng nhập
                        </button>
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
                            to={path.register}
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
