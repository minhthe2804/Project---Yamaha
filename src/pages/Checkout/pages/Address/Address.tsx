import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Button from '~/components/Button'
import Input from '~/components/Input'
import { path } from '~/constants/path'

export default function Address() {
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
        </div>
    )
}
