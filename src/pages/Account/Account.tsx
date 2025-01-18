import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, Outlet, useMatch } from 'react-router-dom'
import { purcharseApi } from '~/apis/purcharse.api'
import BreadCrumb from '~/components/BreadCrumb'
import { breadCrumb } from '~/constants/breadCrumb'
import { path } from '~/constants/path'
import { AppContext } from '~/contexts/app.context'
import { formatCurrency, generateNameId } from '~/utils/utils'

export default function Account() {
    const accountMatch = useMatch(path.account)
    const isAccount = Boolean(accountMatch)
    const { profile } = useContext(AppContext)

    const { data: productInPurcharseData } = useQuery({
        queryKey: ['purcharse'],
        queryFn: () => purcharseApi.getPurcharse()
    })

    const productPurcharse = productInPurcharseData?.data

    const productSortedTime = productPurcharse?.sort((a, b) => {
        const dateTimeA = new Date(`${a.date} ${a.time}`)
        const dateTimeB = new Date(`${b.date} ${b.time}`)
        return dateTimeB.getTime() - dateTimeA.getTime()
    })

    return (
        <div>
            <Helmet>
                <title>Tài khoản – Hệ Thống Xe máy Hoàng Cầu</title>
                <meta name='description' content='Hệ Thống Xe máy Hoàng Cầu' />
            </Helmet>
            {isAccount && (
                <>
                    <BreadCrumb heading={breadCrumb.login.heading} title={breadCrumb.login.title} />

                    <div className='max-w-[1198px] mx-auto'>
                        <div className='w-full border-[2px] border-[#817f7f] pt-[18px] pb-[20px] pl-[9px]'>
                            <p className='uppercase font-[550] text-[#000bff] text-[16px]'>Tài khoản của bạn</p>
                        </div>
                        <div className='w-full h-[1px] bg-[#817f7f] mt-[14px]'></div>
                        <div className='grid grid-cols-12 gap-[33px] pb-[74px]'>
                            {productPurcharse && productPurcharse?.length > 0 ? (
                                <div className='col-span-8'>
                                    <div className='w-full border-[2px] border-[#817f7f] pt-[18px] pb-[20px] pl-[9px] mt-[16px]'>
                                        <p className='uppercase font-[550] text-[#000bff] text-[16px]'>
                                            Lịch sử giao dịch
                                        </p>
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
                                                {productSortedTime && productSortedTime.map((purcharse) => (
                                                    <tr
                                                        className='text-black text-[15px] border-[1px] border-[#817f7f] text-left'
                                                        key={purcharse.id}
                                                    >
                                                        <td className='py-4 w-[105px] pl-[15px] border-r-[1px] border-[#817f7f] text-[#ff3237] hover:text-[#ff7f82] transition duration-200 ease-in '>
                                                            <Link
                                                                to={path.accountOder.replace(
                                                                    ':nameId',
                                                                    generateNameId({
                                                                        name: purcharse.title,
                                                                        id: purcharse.id
                                                                    })
                                                                )}
                                                            >{`#${purcharse.order}`}</Link>
                                                        </td>
                                                        <td className='py-4w-[182px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                                            {`${purcharse.date} ${purcharse.time}`}
                                                        </td>
                                                        <td className='py-4 w-[192px] pl-[15px] border-r-[1px] border-[#817f7f] text-[#ff3237]'>
                                                            Chờ thanh toán
                                                        </td>
                                                        <td className='py-4 w-[195px] pl-[15px] border-r-[1px] border-[#817f7f] text-[#ff3237]'>
                                                            Chờ xác nhận
                                                        </td>
                                                        <td className='py-4 w-[123px] pl-[15px]'>
                                                            {formatCurrency(purcharse.totalPrice)}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ) : (
                                <div className='col-span-8'>
                                    <div className='w-full border-[2px] border-[#817f7f] pt-[18px] pb-[20px] pl-[9px] mt-[16px]'>
                                        <p className='uppercase font-[550] text-[#000bff] text-[16px]'>
                                            Lịch sử giao dịch
                                        </p>
                                    </div>
                                    <p className='mt-[42px] text-[15px] text-[#333333]'>Bạn chưa có đơn hàng nào</p>
                                </div>
                            )}

                            <div className='col-span-4'>
                                <div className='w-full border-[2px] border-[#817f7f] pt-[18px] pb-[20px] pl-[9px] mt-[16px]'>
                                    <p className='uppercase font-[550] text-[#000bff] text-[16px]'>
                                        Thông tin tài khoản
                                    </p>
                                </div>

                                <div className='mt-[39px] flex flex-col gap-[6px]'>
                                    <p className='text-[#4d4d4d] text-[15px] font-[550]'>
                                        Email: <span className='text-[14px] font-medium'>{profile?.email}</span>
                                    </p>
                                    <p className='text-[#4d4d4d] text-[15px] font-[550]'>
                                        Họ tên: <span className='text-[14px] font-medium'>{profile?.username}</span>
                                    </p>
                                    <p className='text-[#4d4d4d] text-[15px] font-[550]'>
                                        Số điện thoại:
                                        <span className='text-[14px] font-medium ml-1'>
                                            {profile?.phone || 'chưa cập nhật'}
                                        </span>
                                    </p>
                                    <p className='text-[#4d4d4d] text-[15px] font-[550]'>
                                        Địa chỉ:
                                        <span className='text-[14px] font-medium ml-1'>
                                            {profile?.address || 'chưa cập nhật'}
                                        </span>
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
                </>
            )}

            <Outlet />
        </div>
    )
}
