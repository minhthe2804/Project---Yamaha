import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { path } from '~/constants/path'
import Input from '~/components/Input'
import Button from '~/components/Button'
import classNames from 'classnames'

import { useContext, useMemo } from 'react'
import { formatCurrency } from '~/utils/utils'
import { AppContext } from '~/contexts/app.context'

export default function Checkout() {
    const { checkoutRoute } = useContext(AppContext)
    const totalPayment = useMemo(
        () =>
            checkoutRoute?.reduce((total, checkout) => {
                return total + checkout.totalPrice
            }, 0),
        [checkoutRoute]
    )

    return (
        <div>
            <div className='pl-[132px]'>
                <div className='grid grid-cols-12 gap-[67px]'>
                    <div className='col-span-6'>
                        <div className='pt-[49px] h-[100vh]'>
                            <h2 className='text-[28px]'>Hệ Thống Xe máy Hoàng Cầu</h2>
                            <div className='flex items-center gap-[7px] text-[13px] mt-[7px]'>
                                <div className='flex items-center gap-[7px]'>
                                    <Link
                                        to={path.cart}
                                        className='text-[#2b78a0] hover:text-[#48b9f7] transtion duration-200 ease-in'
                                    >
                                        Giỏ hàng
                                    </Link>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-3 h-3'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='m8.25 4.5 7.5 7.5-7.5 7.5'
                                        />
                                    </svg>
                                </div>
                                <div className='flex items-center gap-[7px]'>
                                    <p className='text-[#333333]'>Thông tin vận chuyển</p>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-3 h-3'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='m8.25 4.5 7.5 7.5-7.5 7.5'
                                        />
                                    </svg>
                                </div>
                                <div className='flex items-center gap-[7px]'>
                                    <p className='text-[#999999]'>Phương thức thanh toán</p>
                                </div>
                            </div>
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

                            <form className='mt-[21px] flex flex-col '>
                                <Input
                                    classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[4px] py-[7px] px-[12px] placeholder:text-[13px] text-black focus:border-blue-400 transition duration-300 ease-in text-[15px]'
                                    placeholder='Họ và tên'
                                />
                                <Input
                                    classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[4px] py-[7px] px-[12px] placeholder:text-[13px] text-black focus:border-blue-400 transition duration-300 ease-in text-[15px]'
                                    placeholder='Điện thoại'
                                />
                                <Input
                                    classNameInput='w-full outline-none border-[1px] border-[#e6e6e6] rounded-[4px] py-[7px] px-[12px] placeholder:text-[13px] text-black focus:border-blue-400 transition duration-300 ease-in text-[15px]'
                                    placeholder='Địa chỉ'
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
                    </div>

                    <div className='col-span-6'>
                        <div className='pl-[45px] border-l-[1px] border-[#e1e1e1] pt-[49px] bg-[#fafafa] pr-[132px] flex flex-col gap-[16px] h-[100vh]'>
                            {checkoutRoute &&
                                checkoutRoute.map((checkout) => (
                                    <div className='flex items-center justify-between' key={checkout.id}>
                                        <div className='flex items-center gap-[16px]'>
                                            <div className='w-[64px] h-[64px] rounded-[8px] border-[1px] border-[#e6e6e6] bg-white flex justify-center items-center relative z-[1]'>
                                                <img
                                                    src={checkout.previewImage}
                                                    alt=''
                                                    className='w-full h-[45px] object-cover'
                                                />
                                                <div className='w-[22px] h-[22px] rounded-full bg-[rgba(163_163_163)] absolute text-white text-[13px] flex items-center justify-center top-[-10px] right-[-10px] z-[2]'>
                                                    {checkout.count}
                                                </div>
                                            </div>
                                            <div className='flex flex-col text-[14px]'>
                                                <p className=' text-[#4b4b4b]'>{checkout.title}</p>
                                                <p className='text-[12px] text-[#969696]'>
                                                    Phiên bản: {checkout.version}
                                                </p>
                                            </div>
                                        </div>
                                        <p className='text-[13px] text-[#4b4b4b] '>
                                            {formatCurrency(checkout.totalPrice)}
                                        </p>
                                    </div>
                                ))}
                            <div className='w-full h-[1px] bg-[#e6e6e6]'></div>
                            <div className='flex items-center justify-between'>
                                <p className='text-[#4b4b4b] text-[16px]'>Tổng tiền</p>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='text-[12px] text-[#969696]'>VND</p>
                                    <p className='text-[22px] opacity-[0.8]'>
                                        {formatCurrency(totalPayment as number)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
