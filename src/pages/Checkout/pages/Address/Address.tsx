import classNames from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Button from '~/components/Button'
import Input from '~/components/Input'
import { path } from '~/constants/path'
import { userSchema, UserSchema } from '~/utils/rules'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InputNumber from '~/components/InputNumber'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/contexts/app.context'
import { setProfileFromLS } from '~/utils/auth'
import { useMutation } from '@tanstack/react-query'
import { authApi } from '~/apis/auth.api'

type FormData = UserSchema
export default function Address() {
    const { setIsAddress, profile, setProfile } = useContext(AppContext)
    const {
        control,
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: {
            username: '',
            phone: '',
            address: ''
        },
        resolver: yupResolver(userSchema)
    })

    const navigate = useNavigate()
    const updateProfileMutation = useMutation({
        mutationFn: (bodyData: {
            id: string
            body: {
                name: { firstname: string; lastname: string }
                username: string
                email: string
                password: string
                address: string
                phone: string
            }
        }) => authApi.forgotPassword(bodyData.id, bodyData.body)
    })

    const onSubmit = handleSubmit((data) => {
        if (profile) {
            updateProfileMutation.mutate(
                {
                    id: profile.id,
                    body: {
                        ...profile,
                        phone: data.phone as string,
                        address: data.address
                    }
                },
                {
                    onSuccess: (data) => {
                        setProfile(data.data)
                        setProfileFromLS(data.data)
                    }
                }
            )
            setIsAddress(true)
            navigate(path.checkoutPayment)
        }
    })

    useEffect(() => {
        if (profile) {
            setValue('username', profile.username)
            setValue('phone', profile.phone)
            setValue('address', profile.address as string)
        }
    }, [profile, setValue])

    return (
        <div>
            <p className='text-[18px] mt-[9px] text-[#333333]'>Thông tin thanh toán</p>
            <div className='flex items-center gap-[14px] mt-[16px]'>
                <div className='w-[50px] h-[50px] bg-slate-400 rounded-[8px] flex justify-center items-center'>
                    <FontAwesomeIcon icon={faUser} className='text-white text-[20px]' />
                </div>
                <div className='flex flex-col text-[14px]'>
                    <p className=' text-[#737373]'>rewrwe minh (minhthe280403@gmail.com)</p>
                    <p className='text-[#2b78a0] hover:text-[#48b9f7] transtion duration-200 ease-in cursor-pointer'>
                        Đăng xuất
                    </p>
                </div>
            </div>

            <form className='mt-[21px] flex flex-col ' onSubmit={onSubmit}>
                <Input
                    classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[4px] py-[7px] px-[12px] placeholder:text-[13px] text-black focus:border-blue-400 transition duration-300 ease-in text-[15px]'
                    classNameError='text-red-500 text-[13px] mt-[2px] min-h-[24px]'
                    placeholder='Họ và tên'
                    name='username'
                    register={register}
                    type='text'
                    errorMessage={errors.username?.message}
                />
                <Controller
                    control={control}
                    name='phone'
                    render={({ field }) => (
                        <InputNumber
                            classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[4px] py-[7px] px-[12px] placeholder:text-[13px] text-black focus:border-blue-400 transition duration-300 ease-in text-[15px]'
                            classNameError='text-red-500 text-[13px] mt-[2px] min-h-[24px]'
                            placeholder='Điện thoại'
                            errorMessage={errors.phone?.message}
                            {...field}
                            onChange={(event) => {
                                field.onChange(event)
                            }}
                        />
                    )}
                />
                <Input
                    classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[4px] py-[7px] px-[12px] placeholder:text-[13px] text-black focus:border-blue-400 transition duration-300 ease-in text-[15px]'
                    classNameError='text-red-500 text-[13px] mt-[2px] min-h-[24px]'
                    name='address'
                    register={register}
                    type='text'
                    placeholder='Địa chỉ'
                    errorMessage={errors.address?.message}
                />

                <div className='flex items-center justify-between mt-[7px]'>
                    <Link
                        to={path.cart}
                        className='text-[#2b78a0] hover:text-[#48b9f7] transtion duration-200 ease-in text-[14px]'
                    >
                        Giỏ hàng
                    </Link>
                    <Button
                        className={classNames(
                            'w-[203px] py-[17px] bg-[#2b78a0] rounded-[4px] text-[14px] font-[600] text-white hover:bg-[#42ade7] transition duration-200 ease-in flex items-center justify-center'
                            // {
                            //     'w-[203px] py-[17px] bg-[#2b78a0] opacity-[0.6] rounded-[4px] text-[14px] font-[600] text-white flex items-center justify-center':
                            //         true
                            // }
                        )}
                        // onClick={handleUpdate}
                        // isLoading={true}
                        // disabled={true}
                    >
                        Phương thức thanh toán
                    </Button>
                </div>
            </form>

            <div className='w-full h-[1px] bg-[#e6e6e6] mt-[58px]'></div>
            <p className='text-center text-[13px] text-[#333333] mt-[11px]'>Powered by Haravan</p>
        </div>
    )
}
