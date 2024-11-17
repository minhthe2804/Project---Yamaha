import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { purcharseApi } from '~/apis/purcharse.api'
import BreadCrumb from '~/components/BreadCrumb'
import { breadCrumb } from '~/constants/BreadCrumb'
import { path } from '~/constants/path'
import { formatCurrency, generateNameId, getIdFromNameId } from '~/utils/utils'

export default function AccountOder() {
    const { nameId } = useParams() // lấy param để tiến hành gọi api sản phẩm
    const id = getIdFromNameId(nameId as string) // thực hiện loại bỏ những thành phần không cần thiết chỉ lấy mỗi id

    const { data: productToPurcharse } = useQuery({
        queryKey: ['purcharse', id],
        queryFn: () => purcharseApi.getProductToPurcharse(id)
    })

    const productPurcharse = productToPurcharse?.data
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
                            <p className='uppercase font-[550] text-[#000bff] text-[16px]'>
                                Đơn hàng #{productPurcharse?.order}
                            </p>
                        </div>

                        <p className='mt-[31px] text-[15px] text-[#333333]'>
                            Ngày {`${productPurcharse?.date} ${productPurcharse?.time}`}
                        </p>
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
                                            <Link
                                                to={path.accountOder.replace(
                                                    ':nameId',
                                                    generateNameId({
                                                        name: productPurcharse?.title as string,
                                                        id: productPurcharse?.id as string
                                                    })
                                                )}
                                            >
                                                {productPurcharse?.title}
                                            </Link>
                                        </td>
                                        <td className='py-4w-[135px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                            {`#${productPurcharse?.order}`}
                                        </td>
                                        <td className='py-4 w-[125px] pl-[15px] border-r-[1px] border-[#817f7f]'>
                                            {formatCurrency(productPurcharse?.price as number)}
                                        </td>
                                        <td className='py-4 w-[100px] pl-[15px] border-r-[1px] border-[#817f7f] text-right pr-[15px]'>
                                            {productPurcharse?.count}
                                        </td>
                                        <td className='py-4 w-[125px] pr-[15px] text-right'>
                                            {formatCurrency(productPurcharse?.totalPrice as number)}
                                        </td>
                                    </tr>

                                    <tr className='text-black text-[15px] border-[1px] border-[#817f7f] text-left'>
                                        <td colSpan={4} className='py-4 pl-[15px] border-[1px] border-[#817f7f]'>
                                            Tạm tính
                                        </td>
                                        <td className='py-4 w-[125px] pr-[15px] text-right'>
                                            {formatCurrency(productPurcharse?.totalPrice as number)}
                                        </td>
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
                                        <td className='py-4 w-[125px] pr-[15px] text-right'>
                                            {formatCurrency(productPurcharse?.totalPrice as number)}
                                        </td>
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
                                Họ tên:
                                <span className='text-[14px] font-medium ml-1'>{productPurcharse?.username}</span>
                            </p>
                            <p className='text-[#4d4d4d] text-[15px] font-[550]'>
                                Số điện thoại:
                                <span className='text-[14px] font-medium ml-1'>{productPurcharse?.phone}</span>
                            </p>
                            <p className='text-[#4d4d4d] text-[15px] font-[550]'>
                                Địa chỉ:
                                <span className='text-[14px] font-medium ml-1'>{productPurcharse?.address}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
