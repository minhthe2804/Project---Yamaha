import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import Button from '~/components/Button'
import { path } from '~/constants/path'

export default function ThankYou() {
    return (
        <div>
            <div className='mt-[3px] text-[14px] relative'>
                <p className='text-[20px]'>Đặt hàng thành công</p>
                <p className='text-[#737373] mt-[-4px]'>Mã đơn hàng #100431</p>
                <p className='text-[#4d4d4d] mt-[-4px]'>Cảm ơn bạn đã mua hàng!</p>

                <div className='absolute w-[50px] h-[50px] rounded-full border-[2px] border-[#338dbc] top-[10px] left-[-70px] flex items-center justify-center'>
                    <FontAwesomeIcon icon={faCheck} className='text-[#338dbc] text-[24px]' />
                </div>

            </div>

            <div className='w-full border-[1px] border-[#e6e6e6] rounded-[4px_4px_0_0] pl-[10px] mt-[13px] pt-[8px] pb-[9px] text-[14px] text-[#4d4d4d]'>
                <p className='text-[18px] text-[#333333]'>Thông tin đơn hàng</p>
                <p className='mt-[3px]'>Thông tin vận chuyển</p>
                <p>Họ Tên: rewrwe minh</p>
                <p>Số điện thoại: 0348484848</p>
                <p>Địa chỉ: Hòa Bình</p>
                <p className='text-[#333333] mt-[20px]'>Phương thức thanh toán</p>
                <p className='text-[#737373] mt-[8px]'>Thanh toán trực tiếp tại cửa hàng</p>
            </div>

            <div className='flex items-center justify-between mt-[7px]'>
                <div className='flex items-center'>
                    <div className='w-[16px] h-[16px] bg-[#b5b5b5] rounded-full text-white text-[12px] flex items-center justify-center'>
                        ?
                    </div>
                    <p className='text-[14px] text-[#737373] ml-[7px]'>Cần hỗ trợ?</p>
                    <Link
                        to={path.contact}
                        className='text-[#2b78a0] hover:text-[#48b9f7] transtion duration-200 ease-in text-[14px] ml-[4px]'
                    >
                        Liên hệ
                    </Link>
                </div>
                <Button
                    className={classNames(
                        'w-[166px] py-[17px] bg-[#2b78a0] rounded-[4px] text-[14px] font-[600] text-white hover:bg-[#42ade7] transition duration-200 ease-in flex items-center justify-center mt-[13px]'
                        // {
                        //     'w-[203px] py-[17px] bg-[#2b78a0] opacity-[0.6] rounded-[4px] text-[14px] font-[600] text-white flex items-center justify-center':
                        //         true
                        // }
                    )}
                    // onClick={handleUpdate}
                    // isLoading={true}
                    // disabled={true}
                >
                    Tiếp tục mua hàng
                </Button>
            </div>
            
            <div className='w-full h-[1px] bg-[#e6e6e6] mt-[70px]'></div>
            <p className='text-center text-[13px] text-[#333333] mt-[11px]'>Powered by Haravan</p>
        </div>
    )
}
