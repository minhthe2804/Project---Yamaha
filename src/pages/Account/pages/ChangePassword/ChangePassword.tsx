import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { authApi } from '~/apis/auth.api'
import BreadCrumb from '~/components/BreadCrumb'
import Button from '~/components/Button'
import Input from '~/components/Input'
import { breadCrumb } from '~/constants/breadCrumb'
import { toastNotify } from '~/constants/toastNotify'
import { AppContext } from '~/contexts/app.context'
import { setProfileFromLS } from '~/utils/auth'
import { ChangePasswordSchema, changePasswordSchema } from '~/utils/rules'

type FormData = ChangePasswordSchema
export default function ChangePassword() {
    const [errorPassword, setErrorPassword] = useState<string>('')
    const { profile, setProfile } = useContext(AppContext)
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: {
            password: '',
            new_password: '',
            confirm_password: ''
        },
        resolver: yupResolver(changePasswordSchema)
    })

    const { data: dataUser, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: () => authApi.login()
    })

    const changePasswordMutation = useMutation({
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
        }) => authApi.updateProfile(bodyData.id, bodyData.body)
    })

    const onSubmit = handleSubmit((data) => {
        const { new_password } = data
        const findUser = dataUser?.data.find((user) => user.email === profile?.email)
        const comparePassword = findUser?.password === new_password
        if (comparePassword) {
            setErrorPassword(toastNotify.forgotPassword.passwordError)
            return
        }
        if (findUser && profile) {
            const bodyData = {
                id: findUser.id,
                body: {
                    ...findUser,
                    username: profile.username,
                    address: profile.address as string,
                    phone: profile.phone as string,
                    password: new_password
                }
            }
            changePasswordMutation.mutate(bodyData, {
                onSuccess: () => {
                    refetch()
                    setValue('password', new_password)
                    setValue('new_password', '')
                    setValue('confirm_password', '')
                }
            })
            setProfile({
                ...profile,
                username: profile.username,
                address: profile.address as string,
                phone: profile.phone as string,
                password: new_password
            })
            setProfileFromLS({
                ...profile,
                username: profile.username,
                address: profile.address as string,
                phone: profile.phone as string,
                password: new_password
            })
            toast.success(toastNotify.updateProfile.updateSuccess, {
                autoClose: 2000
            })
        }
    })

    useEffect(() => {
        if (profile) {
            setValue('password', profile.password)
        }
    }, [profile, setValue])

    return (
        <div className='bg-[#f5f5f5] pb-16'>
            <Helmet>
                <title>Đổi mật khẩu – Hệ Thống Xe máy Hoàng Cầu</title>
                <meta name='description' content='Hệ Thống Xe máy Hoàng Cầu' />
            </Helmet>
            <BreadCrumb heading={breadCrumb.ChangePassword.heading} title={breadCrumb.ChangePassword.title} />
            <div className='max-w-[720px] mx-auto'>
                <div className='w-full shadow pt-[18px] pb-[20px] pl-[9px] bg-white mt-[5px]'>
                    <p className='uppercase font-[550] text-[#000bff] text-[18px] text-center'>Đổi mật khẩu</p>
                </div>

                <div className='w-full h-[1px] bg-[#d1cfcf] mt-[16px]'></div>

                <div className='w-full bg-white rounded-sm px-6 pt-6 pb-10 shadow mt-[16px]'>
                    <h2 className='text-[18px] text-[#111827]'>Đổi mật khẩu</h2>
                    <p className='text-[14px] text-[#374151] mt-[3px]'>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                    <div className='w-full h-[1px] bg-gray-200 mt-[22px]'></div>

                    <form className='px-[48px] flex flex-col mt-[20px]' onSubmit={onSubmit}>
                        <div className='flex items-center gap-[28px] text-[14px] text-[#4b5563] mt-[18px]'>
                            <label className='w-[98px] text-right mt-[-24px]'>Mật khẩu cũ</label>
                            <Input
                                classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[2px] py-[7px] px-[12px] placeholder:text-[13px] text-[#374151] focus:border-blue-400 transition duration-300 ease-in text-[14px]'
                                classNameError='text-red-500 text-[13px] mt-[2px] min-h-[26px]'
                                className='w-[70%] relative'
                                name='password'
                                placeholder='Mật khẩu cũ'
                                type='password'
                                register={register}
                                errorMessage={errors.password?.message}
                            />
                        </div>
                        <div className='flex items-center gap-[28px] text-[14px] text-[#4b5563]'>
                            <label className='w-[98px] text-right mt-[-24px]'>Mật khẩu mới</label>
                            <Input
                                classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[2px] py-[7px] px-[12px] placeholder:text-[13px] text-[#374151] focus:border-blue-400 transition duration-300 ease-in text-[14px]'
                                classNameError='text-red-500 text-[13px] mt-[2px] min-h-[26px] '
                                className='w-[70%] relative'
                                name='new_password'
                                placeholder='Mật khẩu mới'
                                type='password'
                                register={register}
                                errorMessage={errors.new_password?.message}
                                errorPassword={errorPassword}
                                setErrorPassword={setErrorPassword}
                                inputPassword
                            />
                        </div>
                        <div className='flex items-center gap-[28px] text-[14px] text-[#4b5563]'>
                            <label className='w-[98px] text-right whitespace-nowrap ml-[-15px] mt-[-24px]'>
                                Nhập lại mật khẩu
                            </label>
                            <Input
                                classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[2px] py-[7px] px-[12px] placeholder:text-[13px] text-[#374151] focus:border-blue-400 transition duration-300 ease-in text-[14px] ml-[15px]'
                                classNameError='text-red-500 text-[13px] mt-[2px] min-h-[26px] '
                                className='w-[70%] relative'
                                name='confirm_password'
                                placeholder='Nhập lại mật khẩu'
                                type='password'
                                register={register}
                                errorMessage={errors.confirm_password?.message}
                            />
                        </div>
                        <Button
                            className={classNames(
                                'w-[80px] py-[8px] bg-[#2b78a0] rounded-[2px] text-[14px] font-[600] text-white hover:bg-[#42ade7] transition duration-200 ease-in flex items-center justify-center mt-[6px] ml-[127px]',
                                {
                                    'w-[80px] py-[17px] bg-[#2b78a0] opacity-[0.6] rounded-[4px] text-[14px] font-[600] text-white flex items-center justify-center':
                                        changePasswordMutation.isPending
                                }
                            )}
                            isLoading={changePasswordMutation.isPending}
                            disabled={changePasswordMutation.isPending}
                        >
                            Lưu
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
