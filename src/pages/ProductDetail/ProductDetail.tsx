import classNames from 'classnames/bind'
import DOMPurify from 'dompurify'

import BreadCrumb from '~/components/BreadCrumb'
import { breadCrumb } from '~/constants/breadCrumb'
import styles from './Product.module.css'
import Button from '~/components/Button'
import ProductTitle from '~/components/Products/components/ProductTitle'
import { product, productTitle } from '~/constants/productTitle'

const cx = classNames.bind(styles)
export default function ProductDetail() {
    return (
        <div className='pb-[152px]'>
            <BreadCrumb heading={breadCrumb.productDetail.heading} title={breadCrumb.productDetail.title} />
            <div className='max-w-[1198px] mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-5'>
                        <div className='relative w-full overflow-hidden cursor-zoom-in h-[418px]'>
                            <img
                                src='https://product.hstatic.net/200000281285/product/14_eafd795d76444c868a352541d4f5c4cb_master.png'
                                alt=''
                                className='pointer-events-none absolute top-0 left-0 w-full object-cover'
                            />
                        </div>
                        <div className='relative grid grid-cols-5 mt-2 group'>
                            <button className='absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 translate-x-[-15px] opacity-[0] group-hover:translate-x-[0] group-hover:opacity-[1] transition duration-200 ease-in bg-black/20 text-white'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='h-5 w-5'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M15.75 19.5L8.25 12l7.5-7.5'
                                    />
                                </svg>
                            </button>
                            <div
                                className={cx('flex items-center w-[500px] h-[84px] justify-between overflow-auto', {
                                    scrollbar: true
                                })}
                            >
                                {[0, 0, 0, 0, 0, 0].map((_, index) => (
                                    <img
                                        src='https://product.hstatic.net/200000281285/product/10_1786ce848fe64142bcbba17606d3d1ec_small.png'
                                        alt=''
                                        className=' w-[100px] cursor-pointer object-cover'
                                        key={index}
                                    />
                                ))}
                            </div>
                            <button className='absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 translate-x-[15px] opacity-0 group-hover:translate-x-[0] group-hover:opacity-[1] transition duration-200 ease-in bg-black/20 text-white'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='h-5 w-5'
                                >
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='col-span-7 pl-[26px] pt-2'>
                        <p className='text-[15px] font-semibold text-[#000bff]'>LEXI 155VVA</p>
                        <div className='mt-[9px] flex items-center gap-[10px] text-[15px]'>
                            <p>Thương hiệu:</p>
                            <p className='text-[#ff3237] font-[550]'>YAMAHA</p>
                        </div>
                        <div className='flex items-center gap-1 text-[15px]'>
                            <p>Loại:</p>
                            <p className='text-[#ff3237] font-[550]'>XE TAY GA</p>
                        </div>
                        <div className='flex items-center gap-[10px] text-[15px]'>
                            <p>Tình trạng:</p>
                            <p className='text-[#ff3237] font-[550]'>Còn hàng</p>
                        </div>
                        <p className='mt-[16px] text-[24px] font-[600] text-[#ff3237]'>46,400,000₫</p>
                        <div className='mt-[16px] w-full h-[1px] bg-[#817f7f]' />
                        <p className='mt-[10px] text-[15px]'>Hotline: 1900 63 66 67</p>
                        <div className='mt-[10px] w-full h-[1px] bg-[#817f7f]' />
                        <p className='text-[15px] mt-[10px]'>Số lượng</p>
                        <div className='flex items-center gap-[35px] mt-[5px]'>
                            <div className='flex items-center'>
                                <Button className='w-[32px] py-[15px] border-[1px] border-[#817f7f] rounded-[3px_0_0_3px] group'>
                                    <div className='w-[10px] h-[2px] bg-black group-hover:bg-[#ff3237] transition duration-200 ease-in'></div>
                                </Button>
                                <input
                                    type='text'
                                    className='w-[74px] py-1 border-t-[1px] border-b-[1px] border-[#817f7f] outline-none text-black text-center'
                                    value='1'
                                />
                                <Button className='w-[32px] py-[15px] border-[1px] border-[#817f7f] rounded-[0_3px_3px_0] group'>
                                    <div className='relative w-[10px] h-[2px] bg-black group-hover:bg-[#ff3237] transition duration-200 ease-in'></div>
                                    <div className='w-[10px] h-[2px] bg-black rotate-90 absolute group-hover:bg-[#ff3237] transition duration-200 ease-in'></div>
                                </Button>
                            </div>
                            <div className='flex items-center gap-1'>
                                <Button className='w-[148px] py-[9px] bg-[#ff3237] rounded-[30px] text-[14px] font-[600] text-[#333333] hover:text-white transition duration-200 ease-in'>
                                    THÊM VÀO GIỎ
                                </Button>
                                <Button className='w-[126px] py-[9px] bg-[#ff3237] rounded-[30px] text-[14px] font-[600] text-[#333333] hover:text-white transition duration-200 ease-in'>
                                    MUA NGAY
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[80px] max-w-[1198px] mx-auto'>
                <ProductTitle heading={productTitle.description.heading} className='text-[20px]' />
                <p className='text-sm text-[#34373e] text-center mt-[19px] font-normal'>
                    Những mô tả về sản phẩm của chúng tôi
                </p>

                <div className='text-[18px] mt-[20px]'>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(product.product.description)
                        }}
                    ></div>
                </div>
            </div>

            <div className='mt-[108px] max-w-[1198px] mx-auto'>
                <ProductTitle
                    heading={productTitle.similarProducts.heading}
                    className='text-[20px] text-[#000bff]'
                    background='bg-[#000bff]'
                    border='border-[#000bff]'
                    textColor='text-[#000bff]'
                    width='w-[340px]'
                />
                <p className='text-sm text-[#34373e] text-center mt-[19px] font-normal'>
                    Các sản phẩm mà bạn cũng có thể bạn muốn xem
                </p>
                <div className='grid grid-cols-12 gap-[32px] mt-[52px]'>
                    {' '}
                    {[0, 0, 0, 0].map((_, index) => (
                        <div className='col-span-3' key={index}>
                            <div className='pb-[32px] border-2 border-[#f0efef] rounded-[12px] truncate'>
                                <img
                                    src='https://product.hstatic.net/200000281285/product/exciter_150_gioi_han_-_xam_den_xanh_ef1043aafd9f4ad4a89a2c43d7192de0_large.png'
                                    alt=''
                                    className={`w-[260px] absolute object-cover cursor-pointer animate__animated`}
                                />
                                <div className='w-full px-[14px] pt-[21px] mt-[200px]'>
                                    <p className='text-[14px] text-[#181b23] font-[600] opacity-[0.9] hover:text-[#ff3237] transition duration-300 ease-in cursor-pointer'>
                                        EXITER 150
                                    </p>
                                    <div className='w-full h-[1px] bg-[#ededed] mt-[22px]'></div>
                                    <p className='text-lg font-[600] text-[#ff3237] mt-[28px]'>44.000.000 ₫</p>
                                    <Button className='w-full p-[12px] bg-[#ff3237] rounded-[30px] mt-[24px] text-white flex items-center justify-center gap-1 hover:shadow-[0_0_20px_5px_rgba(255,50,55,0.3)] transition duration-200 ease-in'>
                                        <svg
                                            className='svg-inline--fa fa-cart-plus fa-w-18 text-[13px] '
                                            aria-hidden='true'
                                            data-prefix='fa'
                                            data-icon='cart-plus'
                                            role='img'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 576 512'
                                            data-fa-i2svg=''
                                        >
                                            <path
                                                fill='currentColor'
                                                d='M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z'
                                            ></path>
                                        </svg>
                                        <p className='text-xs font-[600]'>THÊM VÀO GIỎ</p>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
