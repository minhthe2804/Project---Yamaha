import classNames from 'classnames'
import BreadCrumb from '~/components/BreadCrumb'
import Button from '~/components/Button'
import Input from '~/components/Input'
import { breadCrumb } from '~/constants/BreadCrumb'

export default function ChangePassword() {
    return (
        <div className='bg-[#f5f5f5] pb-16'>
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

                    <form className='px-[48px] flex flex-col mt-[20px]'>
                        <div className='flex items-center gap-[28px] text-[14px] text-[#4b5563] mt-[18px]'>
                            <label className='w-[98px] text-right'>Mật khẩu cũ</label>
                            <Input
                                classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[2px] py-[7px] px-[12px] placeholder:text-[13px] text-[#374151] focus:border-blue-400 transition duration-300 ease-in text-[14px]'
                                classNameError='text-red-500 text-[13px] mt-[2px] '
                                className='w-[70%]'
                                placeholder='Mật khẩu cũ'
                                type='password'
                                // register={register}
                                // type='text'
                                // errorMessage={errors.username?.message}
                            />
                        </div>
                        <div className='flex items-center gap-[28px] text-[14px] text-[#4b5563] mt-[18px]'>
                            <label className='w-[98px] text-right'>Mật khẩu mới</label>
                            <Input
                                classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[2px] py-[7px] px-[12px] placeholder:text-[13px] text-[#374151] focus:border-blue-400 transition duration-300 ease-in text-[14px]'
                                classNameError='text-red-500 text-[13px] mt-[2px] '
                                className='w-[70%]'
                                placeholder='Mật khẩu mới'
                                type='password'
                                // register={register}
                                // type='text'
                                // errorMessage={errors.username?.message}
                            />
                        </div>
                        <div className='flex items-center gap-[28px] text-[14px] text-[#4b5563] mt-[18px]'>
                            <label className='w-[98px] text-right whitespace-nowrap ml-[-15px]'>
                                Nhập lại mật khẩu
                            </label>
                            <Input
                                classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[2px] py-[7px] px-[12px] placeholder:text-[13px] text-[#374151] focus:border-blue-400 transition duration-300 ease-in text-[14px] ml-[15px]'
                                classNameError='text-red-500 text-[13px] mt-[2px] '
                                className='w-[70%]'
                                placeholder='Nhập lại mật khẩu'
                                type='password'
                                // register={register}
                                // type='text'
                                // errorMessage={errors.username?.message}
                            />
                        </div>
                        <Button
                            className={classNames(
                                'w-[80px] py-[8px] bg-[#2b78a0] rounded-[2px] text-[14px] font-[600] text-white hover:bg-[#42ade7] transition duration-200 ease-in flex items-center justify-center mt-[33px] ml-[127px]'
                                // {
                                //     'w-[203px] py-[17px] bg-[#2b78a0] opacity-[0.6] rounded-[4px] text-[14px] font-[600] text-white flex items-center justify-center':
                                //         true
                                // }
                            )}
                            // onClick={handleUpdate}
                            // isLoading={true}
                            // disabled={true}
                        >
                            Lưu
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
