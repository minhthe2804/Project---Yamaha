import { Link, Outlet, useMatch } from 'react-router-dom'
import BreadCrumb from '~/components/BreadCrumb'
import { breadCrumb } from '~/constants/BreadCrumb'
import { path } from '~/constants/path'

export default function Account() {
    const accountMatch = useMatch(path.account)
    const isAccount = Boolean(accountMatch)

    
    return (
        <div>
            <BreadCrumb heading={breadCrumb.login.heading} title={breadCrumb.login.title} />
            {isAccount && (
                <div className='max-w-[1198px] mx-auto'>
                    <div className='w-full border-[2px] border-[#817f7f] pt-[18px] pb-[20px] pl-[9px]'>
                        <p className='uppercase font-[550] text-[#000bff] text-[16px]'>Tài khoản của bạn</p>
                    </div>
                    <div className='w-full h-[1px] bg-[#817f7f] mt-[14px]'></div>
                    <div className='grid grid-cols-12 gap-[33px] pb-[74px]'>
                        <div className='col-span-8'>
                            <div className='w-full border-[2px] border-[#817f7f] pt-[18px] pb-[20px] pl-[9px] mt-[16px]'>
                                <p className='uppercase font-[550] text-[#000bff] text-[16px]'>Lịch sử giao dịch</p>
                            </div>

                            <div className='w-full mt-[33px]'>
                                <table className='min-w-full'>
                                    <thead>
                                        <tr className='text-black text-[15px] border-[1px] border-[#817f7f] text-left'>
                                            <th className='py-4 w-[105px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                                Đơn hàng
                                            </th>
                                            <th className='py-4w-[182px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                                Ngày
                                            </th>
                                            <th className='py-4 w-[192px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                                Tình trạng thanh toán
                                            </th>
                                            <th className='py-4 w-[195px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                                Tình trạng vận chuyển
                                            </th>
                                            <th className='py-4 w-[123px] pl-[15px]'>Tổng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='text-black text-[15px] border-[1px] border-[#817f7f] text-left'>
                                            <td className='py-4 w-[105px] pl-[15px] border-r-[1px] border-[#817f7f] text-[#ff3237] hover:text-[#ff7f82] transition duration-200 ease-in '>
                                                <Link to={path.accountOder}>#100431</Link>
                                            </td>
                                            <td className='py-4w-[182px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                                11/11/2024 09:27:24
                                            </td>
                                            <td className='py-4 w-[192px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                                pending
                                            </td>
                                            <td className='py-4 w-[195px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                                not fulfilled
                                            </td>
                                            <td className='py-4 w-[123px] pl-[15px]'>88,000,000₫</td>
                                        </tr>

                                        <tr className='text-black text-[15px] border-[1px] border-[#817f7f] text-left'>
                                            <td className='py-4 w-[105px] pl-[15px] border-r-[1px] border-[#817f7f] text-[#ff3237] hover:text-[#ff7f82] transition duration-200 ease-in '>
                                                <Link to={path.accountOder}>#100431</Link>
                                            </td>
                                            <td className='py-4w-[182px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                                11/11/2024 09:27:24
                                            </td>
                                            <td className='py-4 w-[192px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                                pending
                                            </td>
                                            <td className='py-4 w-[195px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                                not fulfilled
                                            </td>
                                            <td className='py-4 w-[123px] pl-[15px]'>88,000,000₫</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='col-span-4'>
                            <div className='w-full border-[2px] border-[#817f7f] pt-[18px] pb-[20px] pl-[9px] mt-[16px]'>
                                <p className='uppercase font-[550] text-[#000bff] text-[16px]'>Thông tin tài khoản</p>
                            </div>

                            <div className='mt-[39px] flex flex-col gap-[6px]'>
                                <p className='text-black text-[17px] font-[550]'>
                                    Email: <span className='text-[15px]'>minhthe2804@gmail.com</span>
                                </p>
                                <p className='text-black text-[17px] font-[550]'>
                                    Họ tên: <span className='text-[15px]'>minhthe</span>
                                </p>
                                <p className='text-black text-[17px] font-[550]'>
                                    Số điện thoại: <span className='text-[15px] '>0383395765</span>
                                </p>
                                <p className='text-black text-[17px] font-[550]'>
                                    Địa chỉ: <span className='text-[15px] '>Hòa Bình</span>
                                </p>
                            </div>

                            <div className='flex items-center text-[#ff3237] text-[15px] gap-[15px] mt-[20px]'>
                                <Link
                                    to={path.updateProfile}
                                    className='hover:text-[#ff7f82] transition duration-200 ease-in'
                                >
                                    Cập nhật thông tin
                                </Link>
                                <Link
                                    to={path.changePassword}
                                    className='hover:text-[#ff7f82] transition duration-200 ease-in'
                                >
                                    Đổi mật khẩu
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Outlet />
        </div>
    )
}
