import { Link } from 'react-router-dom'
import BreadCrumb from '~/components/BreadCrumb'
import { breadCrumb } from '~/constants/BreadCrumb'
import { path } from '~/constants/path'

export default function AccountOder() {
    return (
        <div>
            <BreadCrumb heading={breadCrumb.login.heading} title={breadCrumb.login.title} />

            <div className='max-w-[1198px] mx-auto'>
                <div className='w-full border-[2px] border-[#817f7f] pt-[18px] pb-[20px] pl-[9px]'>
                    <p className='uppercase font-[550] text-[#000bff] text-[16px]'>Tài khoản của bạn</p>
                </div>
                <div className='w-full h-[1px] bg-[#817f7f] mt-[14px]'></div>

                <Link
                    to={path.account}
                    className='mt-[14px] text-[15px] text-[#ff3237] hover:text-[#ff7f82] transition duration-200 ease-in block'
                >
                    Trở về tài khoản
                </Link>

                <div className='grid grid-cols-12 gap-[33px] pb-[74px]'>
                    <div className='col-span-8'>
                        <div className='w-full border-[2px] border-[#817f7f] pt-[18px] pb-[20px] pl-[9px] mt-[16px]'>
                            <p className='uppercase font-[550] text-[#000bff] text-[16px]'>Đơn hàng #100431</p>
                        </div>

                        <p className='mt-[31px] text-[15px] text-[#333333]'>Ngày 11/11/2024 09:27:24</p>
                        <div className='w-full mt-[10px]'>
                            <table className='min-w-full'>
                                <thead>
                                    <tr className='text-black text-[15px] border-[1px] border-[#817f7f] text-left'>
                                        <th className='py-4 w-[308px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                            Sản phẩm
                                        </th>
                                        <th className='py-4 w-[135px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                            Mã sản phẩm
                                        </th>
                                        <th className='py-4 w-[125px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                            Giá
                                        </th>
                                        <th className='py-4 w-[100px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                            Số lượng
                                        </th>
                                        <th className='py-4 w-[125px] pl-[15px] text-right pr-[15px]'>Tổng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-black text-[15px] border-[1px] border-[#817f7f] text-left'>
                                        <td className='py-4 w-[308px] pl-[15px] border-r-[1px] border-[#817f7f] text-[#ff3237] hover:text-[#ff7f82] transition duration-200 ease-in '>
                                            <Link to={path.accountOder}>EXCITER 150 - Bản RC / Trắng Đỏ Đen</Link>
                                        </td>
                                        <td className='py-4w-[135px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                            #100431
                                        </td>
                                        <td className='py-4 w-[125px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                            44,000,000₫
                                        </td>
                                        <td className='py-4 w-[100px] pl-[15px] border-r-[1px] border-[#817f7f] text-right pr-[15px]'>
                                            2
                                        </td>
                                        <td className='py-4 w-[125px] pr-[15px] text-right'>88,000,000₫</td>
                                    </tr>

                                    <tr className='text-black text-[15px] border-[1px] border-[#817f7f] text-left'>
                                        <td colSpan={4} className='py-4 pl-[15px] border-[1px] border-[#817f7f]'>
                                            Tạm tính
                                        </td>
                                        <td className='py-4 w-[125px] pr-[15px] text-right'>88,000,000₫</td>
                                    </tr>

                                    <tr className='text-black text-[15px] border-[1px] border-[#817f7f] text-left'>
                                        <td colSpan={4} className='py-4 pl-[15px] border-[1px] border-[#817f7f]'>
                                            Vận chuyển (Nhận hàng trực tiếp tại cửa hàng)
                                        </td>
                                        <td className='py-4 w-[125px] pr-[15px] text-right'>0₫</td>
                                    </tr>

                                    <tr className='text-black text-[15px] border-[1px] border-[#817f7f] text-left font-[550]'>
                                        <td colSpan={4} className='py-4 pl-[15px] border-[1px] border-[#817f7f] '>
                                            Tổng
                                        </td>
                                        <td className='py-4 w-[125px] pr-[15px] text-right'>88,000,000₫</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='col-span-4'>
                        <div className='w-full border-[2px] border-[#817f7f] pt-[18px] pb-[20px] pl-[9px] mt-[16px]'>
                            <p className='uppercase font-[550] text-[#000bff] text-[16px]'>Địa chỉ thanh toán</p>
                        </div>

                        <div className='mt-[39px] flex flex-col gap-[6px]'>
                            <p className='text-[#4d4d4d] text-[15px] font-[550]'>
                                Tình trạng thanh toán:
                                <span className='text-[14px] font-medium ml-2 text-[#ff3237]'>Chờ thanh toán</span>
                            </p>
                            <p className='text-[#4d4d4d] text-[15px] font-[550]'>
                                Họ tên: <span className='text-[14px] font-medium ml-1'>minhthe</span>
                            </p>
                            <p className='text-[#4d4d4d] text-[15px] font-[550]'>
                                Số điện thoại: <span className='text-[14px] font-medium ml-1'>0383395765</span>
                            </p>
                            <p className='text-[#4d4d4d] text-[15px] font-[550]'>
                                Địa chỉ: <span className='text-[14px] font-medium ml-1'>Hòa Bình</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
