import classNames from 'classnames'
import BreadCrumb from '~/components/BreadCrumb'
import Button from '~/components/Button'
import QuantityController from '~/components/QuantityController'
import { breadCrumb } from '~/constants/breadCrumb'

export default function Cart() {
    return (
        <div className='pb-[70px]'>
            <BreadCrumb heading={breadCrumb.cart.heading} title={breadCrumb.cart.title} />
            <div className='max-w-[1198px] mx-auto'>
                <div className='w-full border-[2px] border-[#817f7f] uppercase text-[18px] text-[#000bff] font-[600] py-[20px] pl-[11px]'>
                    Giỏ Hàng
                </div>

                <div className='mt-[22px] border-[2px] border-[#817f7f] pt-[29px] pb-[39px] px-[18px]'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-6'>
                            <p className='text-center text-[15px] text-[#333333]'>Thông tin chi tiết sản phẩm</p>
                        </div>
                        <div className='col-span-6'>
                            <div className='grid grid-cols-6 text-center text-[15px] text-[#333333]'>
                                <div className='col-span-2'>Đơn giá</div>
                                <div className='col-span-2'>Số lượng</div>
                                <div className='col-span-2'>Tổng giá</div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 mt-[63px]'>
                        <div className='col-span-6 pb-[40px]'>
                            <div className='flex gap-3'>
                                <div className='flex items-center'>
                                    <input type='checkbox' className='h-5 w-5 accent-[#f35539]' />
                                </div>
                                <div className='w-[240px] h-[200px]'>
                                    <img
                                        src='https://product.hstatic.net/200000281285/product/exciter_150_rc_-_do_den_884a96c87c6a4735abfae1ad2ece623e_medium.png'
                                        alt=''
                                        className='w-full'
                                    />
                                </div>
                                <div className='pl-[30px] pt-[10px]'>
                                    <p className='text-[14px] text-[#000bff] font-[600]'>EXCITER 150</p>
                                    <p className='mt-[31px] text-[15px] text-[#333333]'>Phiên bản: Bản RC / Đỏ Nhám</p>
                                    <p className='mt-[31px] text-[15px] text-[#333333]'>Thương hiệu: YAMAHA</p>
                                    <p className='mt-[2px] text-[13px] text-[#ff3237] cursor-pointer hover:opacity-[0.8] transition duration-200 ease-in'>
                                        Xóa
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-6'>
                            <div className='grid grid-cols-6'>
                                <div className='col-span-2 '>
                                    <div className='flex justify-center mt-[60px]'>
                                        <p className='text-[16px] text-[#ff3237] font-[600]'>44,000,000₫</p>
                                    </div>
                                </div>
                                <div className='col-span-2'>
                                    <div className='mt-[55px]'>
                                        <div className='flex justify-center'>
                                            <QuantityController value={1} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-2 '>
                                    <div className='flex justify-center mt-[60px]'>
                                        <p className='text-[16px] text-[#ff3237] font-[600]'>44,000,000₫</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-6'>
                            <div className='flex gap-3'>
                                <div className='flex items-center'>
                                    <input type='checkbox' className='h-5 w-5 accent-[#f35539]' />
                                </div>
                                <div className='w-[240px] h-[200px]'>
                                    <img
                                        src='https://product.hstatic.net/200000281285/product/14_eafd795d76444c868a352541d4f5c4cb_medium.png'
                                        alt=''
                                        className='w-full'
                                    />
                                </div>
                                <div className='pl-[30px] pt-[10px]'>
                                    <p className='text-[14px] text-[#000bff] font-[600]'>EXCITER 150</p>
                                    <p className='mt-[31px] text-[15px] text-[#333333]'>Phiên bản: Bản RC / Đỏ Nhám</p>
                                    <p className='mt-[31px] text-[15px] text-[#333333]'>Thương hiệu: YAMAHA</p>
                                    <p className='mt-[2px] text-[13px] text-[#ff3237] cursor-pointer hover:opacity-[0.8] transition duration-200 ease-in'>
                                        Xóa
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-6'>
                            <div className='grid grid-cols-6'>
                                <div className='col-span-2 '>
                                    <div className='flex justify-center mt-[60px]'>
                                        <p className='text-[16px] text-[#ff3237] font-[600]'>44,000,000₫</p>
                                    </div>
                                </div>
                                <div className='col-span-2'>
                                    <div className='mt-[55px]'>
                                        <div className='flex justify-center'>
                                            <QuantityController value={1} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-2 '>
                                    <div className='flex justify-center mt-[60px]'>
                                        <p className='text-[16px] text-[#ff3237] font-[600]'>44,000,000₫</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-[40px] border-[2px] border-[#817f7f] pt-[29px] pb-[39px] px-[18px]'>
                    <div className='grid grid-cols-12 '>
                        <div className='col-span-6'>
                            <div className='flex items-center gap-5 text-[#333333] text-[15px]'>
                                <input type='checkbox' className='h-5 w-5 accent-[#f35539]' />
                                <p>Chọn tất cả (0)</p>
                                <p className='cursor-pointer hover:text-[#ff3237] transition duration-200 ease-in'>
                                    Xóa
                                </p>
                            </div>
                        </div>
                        <div className='col-span-6'>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-[17px] text-[16px] font-[550] justify-end'>
                                    <p>Tổng tiền:</p>
                                    <p className='mt-[-4px] text-[22px] text-[#ff3237]'>180,000,000₫</p>
                                </div>
                                <div className='flex gap-2 justify-end mt-[15px]'>
                                    <Button
                                        className={classNames(
                                            'w-[126px] py-[9px] bg-[#ff3237] rounded-[4px] text-[14px] font-[600] text-[#333333] hover:text-white transition duration-200 ease-in flex items-center justify-center',
                                            {
                                                // 'w-[126px] py-[9px] bg-[#ff3237] opacity-[0.8] rounded-[30px] text-[14px] font-[600] text-[#333333] flex items-center justify-center pointer-events-none':
                                                //     addToCartMutation.isPending
                                            }
                                        )}
                                        // onClick={buyNow}
                                        // isLoading={addToCartMutation.isPending}
                                        // disabled={addToCartMutation.isPending}
                                    >
                                        CẬP NHẬT
                                    </Button>
                                    <Button
                                        className={classNames(
                                            'w-[148px] py-[9px] bg-[#ff3237] rounded-[4px] text-[14px] font-[600] text-[#333333] hover:text-white transition duration-200 ease-in flex items-center justify-center',
                                            {
                                                // 'w-[148px] py-[9px] bg-[#ff3237] opacity-[0.8] rounded-[30px] text-[14px] font-[600] text-[#333333] flex items-center justify-center pointer-events-none':
                                                //     addToCartMutation.isPending
                                            }
                                        )}
                                        // onClick={addToCart}
                                        // isLoading={addToCartMutation.isPending}
                                        // disabled={addToCartMutation.isPending}
                                    >
                                        THANH TOÁN
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
