import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import classNames from 'classnames'
import { useContext, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { authApi } from '~/apis/auth.api'
import BreadCrumb from '~/components/BreadCrumb'
import Button from '~/components/Button'
import Input from '~/components/Input'
import InputNumber from '~/components/InputNumber'
import { breadCrumb } from '~/constants/BreadCrumb'
import { toastNotify } from '~/constants/toastNotify'
import { AppContext } from '~/contexts/app.context'
import { setProfileFromLS } from '~/utils/auth'
import { userSchema, UserSchema } from '~/utils/rules'

type FormData = UserSchema
export default function UpdateProfile() {
    const { profile, setProfile } = useContext(AppContext)
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
        const { username, phone, address } = data
        if (profile) {
            updateProfileMutation.mutate({
                id: profile.id,
                body: {
                    ...profile,
                    phone: data.phone as string,
                    address: data.address
                }
            })
            setProfile({
                ...profile,
                username: username,
                address: address,
                phone: phone
            })
            setProfileFromLS({
                ...profile,
                username: username,
                address: address,
                phone: phone
            })
            toast.success(toastNotify.updateProfile.updateSuccess, {
                autoClose: 2000
            })
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
        <div className='bg-[#f5f5f5] pb-16'>
            <BreadCrumb heading={breadCrumb.updateProfile.heading} title={breadCrumb.updateProfile.title} />
            <div className='max-w-[720px] mx-auto'>
                <div className='w-full shadow pt-[18px] pb-[20px] pl-[9px] bg-white mt-[5px]'>
                    <p className='uppercase font-[550] text-[#000bff] text-[18px] text-center'>Cập nhật thông tin</p>
                </div>

                <div className='w-full h-[1px] bg-[#d1cfcf] mt-[16px]'></div>

                <div className='w-full bg-white rounded-sm px-6 pt-6 pb-10 shadow mt-[16px]'>
                    <h2 className='text-[18px] text-[#111827]'>Hồ Sơ Của Tôi</h2>
                    <p className='text-[14px] text-[#374151] mt-[3px]'>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                    <div className='w-full h-[1px] bg-gray-200 mt-[22px]'></div>

                    <form className='px-[48px] flex flex-col mt-[40px] ' onSubmit={onSubmit}>
                        <div className='flex items-center gap-[23px] text-[14px] text-[#374151]'>
                            <label className='w-[84px] text-right text-[#4b5563]'>Email</label>
                            <p className=''>minhthe2804@gmail.com</p>
                        </div>
                        <div className='flex gap-[23px] text-[14px] text-[#4b5563] mt-[18px]'>
                            <label className='w-[84px] text-right mt-2'>Họ Tên</label>
                            <Input
                                classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[2px] py-[7px] px-[12px] placeholder:text-[13px] text-[#374151] focus:border-blue-400 transition duration-300 ease-in text-[14px]'
                                classNameError='text-red-500 text-[13px] mt-[2px] min-h-[26px]'
                                className='w-[80%]'
                                placeholder='Họ tên'
                                register={register}
                                type='text'
                                name='username'
                                errorMessage={errors.username?.message}
                            />
                        </div>
                        <div className='flex gap-[23px] text-[14px] text-[#4b5563]'>
                            <label className='w-[84px] text-right mt-2'>Số điện thoại</label>
                            <Controller
                                control={control}
                                name='phone'
                                render={({ field }) => (
                                    <InputNumber
                                        classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[2px] py-[7px] px-[12px] placeholder:text-[13px] text-[#374151] focus:border-blue-400 transition duration-300 ease-in text-[14px]'
                                        classNameError='text-red-500 text-[13px] mt-[2px] min-h-[26px]'
                                        placeholder='Số điện thoại'
                                        className='w-[80%]'
                                        errorMessage={errors.phone?.message}
                                        {...field}
                                        onChange={(event) => {
                                            field.onChange(event)
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div className='flex gap-[23px] text-[14px] text-[#4b5563]'>
                            <label className='w-[84px] text-right mt-2'>Địa chỉ</label>
                            <Input
                                classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[2px] py-[7px] px-[12px] placeholder:text-[13px] text-[#374151] focus:border-blue-400 transition duration-300 ease-in text-[14px]'
                                classNameError='text-red-500 text-[13px] mt-[2px] min-h-[26px]'
                                className='w-[80%]'
                                name='address'
                                placeholder='Địa chỉ'
                                register={register}
                                type='text'
                                errorMessage={errors.address?.message}
                            />
                        </div>
                        <Button
                            className={classNames(
                                'w-[80px] py-[8px] bg-[#2b78a0] rounded-[2px] text-[14px] font-[600] text-white hover:bg-[#42ade7] transition duration-200 ease-in flex items-center justify-center mt-[6px] ml-[107px]',
                                {
                                    'w-[80px] py-[17px] bg-[#2b78a0] opacity-[0.6] rounded-[4px] text-[14px] font-[600] text-white flex items-center justify-center':
                                        updateProfileMutation.isPending
                                }
                            )}
                            isLoading={updateProfileMutation.isPending}
                            disabled={updateProfileMutation.isPending}
                        >
                            Lưu
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
