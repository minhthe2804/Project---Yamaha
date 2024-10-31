import 'animate.css'
import ProductTitle from '~/components/ProductTitle/ProductTitle'
import { productTitle } from '~/constants/productTitle'

function Articles() {

    return (
        <div id='articles' className='py-24'>
            <div className='wrapper'>
                <div className='articles-head'>
                    <ProductTitle heading={productTitle.articles.heading} />
                </div>

                <div className='articles-body w-full'>
                    <p className='text-sm text-[#34373e] text-center mt-[19px] font-normal pb-12'>
                        Các tin tức mới nhất và hot nhất về thế giới công nghệ xe máy
                    </p>

                    <div className='articles-home'>
                        <div className='state-outer'>
                            <div className='articles-list flex overflow-hidden w-[1198px] mx-auto'>
                                <div className='flex min-w-[599px] text-sm'>
                                    <div className='w-10/12'>
                                        <a href=''>
                                            <img
                                                src='https://file.hstatic.net/200000281285/article/7661717686366-lexi-155-vva-abs-anh-dai-dien_5db3a05a0e1f4617a9929965e1fcca99_large.png'
                                                alt='Yamaha giới thiệu LEXi 155 VVA-ABS hoàn toàn mới'
                                            />
                                        </a>
                                    </div>

                                    <div className='w-10/12 pt-5 px-[20px]'>
                                        <div className='pb-5 border-b border-gray-200'>
                                            <div className='text-lg font-bold text-[#ff3237] mb-2'>
                                                <span className='text-4xl'>07</span>/<span>06</span>/<span>2024</span>
                                            </div>
                                            <div className='font-bold mb-2 uppercase'>
                                                <a href='/blogs/news/yamaha-gioi-thieu-lexi-155-vva-abs-hoan-toan-moi'>
                                                    Yamaha giới thiệu LEXi 155 VVA-ABS hoàn toàn mới
                                                </a>
                                            </div>
                                            <div className='font-light mb-2'>
                                                <svg
                                                    className='svg-inline--fa fa-edit fa-w-18'
                                                    aria-hidden='true'
                                                    data-prefix='far'
                                                    data-icon='edit'
                                                    role='img'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 576 512'
                                                    data-fa-i2svg=''
                                                >
                                                    <path
                                                        fill='currentColor'
                                                        d='M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z'
                                                    ></path>
                                                </svg>{' '}
                                                Đăng bởi: <span className='text-[#ff3237]'>Xe Máy Hoàng Cầu</span>
                                            </div>
                                        </div>

                                        <div className='my-5 text-justify'>
                                            Dự kiến giao hàng tại thị trường Việt Nam ngày 21/6/2024, LEXi 2024 mang
                                            trong mình DNA Maxi, với thiết kế dựa trên khái niệm “Gallant LE...
                                        </div>

                                        <div className='my-10'>
                                            <a
                                                href=''
                                                className='bg-[#3159a64d] rounded-[30px] text-center hover:bg-[#ff3237] hover:shadow-[0_0_20px_10px_rgba(255,50,55,0.3)] text-white font-bold py-[10px] px-[50px]'
                                            >
                                                Xem thêm
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex min-w-[599px] text-sm'>
                                    <div className='w-10/12'>
                                        <a href=''>
                                            <img
                                                src='https://file.hstatic.net/200000281285/article/7661717686366-lexi-155-vva-abs-anh-dai-dien_5db3a05a0e1f4617a9929965e1fcca99_large.png'
                                                alt='Yamaha giới thiệu LEXi 155 VVA-ABS hoàn toàn mới'
                                            />
                                        </a>
                                    </div>

                                    <div className='w-10/12 pt-5 px-[20px]'>
                                        <div className='pb-5 border-b border-gray-200'>
                                            <div className='text-lg font-bold text-[#ff3237] mb-2'>
                                                <span className='text-4xl'>07</span>/<span>06</span>/<span>2024</span>
                                            </div>
                                            <div className='font-bold mb-2 uppercase'>
                                                <a href='/blogs/news/yamaha-gioi-thieu-lexi-155-vva-abs-hoan-toan-moi'>
                                                    Yamaha giới thiệu LEXi 155 VVA-ABS hoàn toàn mới
                                                </a>
                                            </div>
                                            <div className='font-light mb-2'>
                                                <svg
                                                    className='svg-inline--fa fa-edit fa-w-18'
                                                    aria-hidden='true'
                                                    data-prefix='far'
                                                    data-icon='edit'
                                                    role='img'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 576 512'
                                                    data-fa-i2svg=''
                                                >
                                                    <path
                                                        fill='currentColor'
                                                        d='M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z'
                                                    ></path>
                                                </svg>{' '}
                                                Đăng bởi: <span className='text-[#ff3237]'>Xe Máy Hoàng Cầu</span>
                                            </div>
                                        </div>

                                        <div className='my-5 text-justify'>
                                            Dự kiến giao hàng tại thị trường Việt Nam ngày 21/6/2024, LEXi 2024 mang
                                            trong mình DNA Maxi, với thiết kế dựa trên khái niệm “Gallant LE...
                                        </div>

                                        <div className='my-10'>
                                            <a
                                                href=''
                                                className='bg-[#3159a64d] rounded-[30px] text-center hover:bg-[#ff3237] hover:shadow-[0_0_20px_10px_rgba(255,50,55,0.3)] text-white font-bold py-[10px] px-[50px]'
                                            >
                                                Xem thêm
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex min-w-[599px]'>
                                    <div className='articles-item-img'>
                                        <a href=''>
                                            <img
                                                src='//file.hstatic.net/200000281285/article/tet_2ccb3901b7a14745968f07b153c50238_large.png'
                                                alt='THÔNG BÁO NGHỈ TẾT NGUYÊN ĐÁN - GIÁP THÌN 2024'
                                            />
                                        </a>
                                    </div>

                                    <div className='articles-item-content'>
                                        <div className='articles-item-content-info'>
                                            <div className='article-date'>
                                                <span className='article-day'>01</span>/<span>02</span>/
                                                <span>2024</span>
                                            </div>
                                            <div className='article-title'>
                                                <a href='/blogs/news/thong-bao-nghi-tet-nguyen-dan-giap-thin-2024'>
                                                    THÔNG BÁO NGHỈ TẾT NGUYÊN ĐÁN - GIÁP THÌN 2024
                                                </a>
                                            </div>
                                            <div className='article-author'>
                                                <svg
                                                    className='svg-inline--fa fa-edit fa-w-18'
                                                    aria-hidden='true'
                                                    data-prefix='far'
                                                    data-icon='edit'
                                                    role='img'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 576 512'
                                                    data-fa-i2svg=''
                                                >
                                                    <path
                                                        fill='currentColor'
                                                        d='M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z'
                                                    ></path>
                                                </svg>{' '}
                                                Đăng bởi: <span>Xe Máy Hoàng Cầu</span>
                                            </div>
                                        </div>

                                        <div className='articles-item-content-des'>
                                            Hệ thống xe máy, xe điện Hoàng Cầu xin thông báo lịch nghỉ Tết Nguyên Đán -
                                            Xuân Giáp Thìn 2024 như sau...
                                        </div>

                                        <div className='articles-item-content-btn'>
                                            <button>Xem thêm</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex min-w-[599px] '>
                                    <div className='articles-item-img'>
                                        <a href=''>
                                            <img
                                                src='//file.hstatic.net/200000281285/article/405417183_681736424101464_7577826218266775516_n_4f5cb860e14549b492dc556430dcb436_large.png'
                                                alt='UNBOX SIÊU PHẨM MỚI YAMAHA PG-1: FREE TO WANDER - PHIÊU CÙNG TỰ DO'
                                            />
                                        </a>
                                    </div>

                                    <div className='articles-item-content'>
                                        <div className='articles-item-content-info'>
                                            <div className='article-date'>
                                                <span className='article-day'>11</span>/<span>12</span>/
                                                <span>2023</span>
                                            </div>
                                            <div className='article-title'>
                                                <a href=''>
                                                    UNBOX SIÊU PHẨM MỚI YAMAHA PG-1: FREE TO WANDER – PHIÊU CÙNG TỰ DO
                                                </a>
                                            </div>
                                            <div className='article-author'>
                                                <svg
                                                    className='svg-inline--fa fa-edit fa-w-18'
                                                    aria-hidden='true'
                                                    data-prefix='far'
                                                    data-icon='edit'
                                                    role='img'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 576 512'
                                                    data-fa-i2svg=''
                                                >
                                                    <path
                                                        fill='currentColor'
                                                        d='M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z'
                                                    ></path>
                                                </svg>{' '}
                                                Đăng bởi: <span>Xe Máy Hoàng Cầu</span>
                                            </div>
                                        </div>

                                        <div className='articles-item-content-des'>
                                            Ngày 02.12.2024 vừa qua, Yamaha Motor Việt Nam đã tổ chức sự kiện “Unboxing
                                            day” toàn quốc để giới thiệu “siêu tân binh” Yamaha PG-1.&nbs...
                                        </div>

                                        <div className='articles-item-content-btn'>
                                            <button>Xem thêm</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex min-w-[599px]'>
                                    <div className='articles-item-img'>
                                        <a href=''>
                                            <img
                                                src='//file.hstatic.net/200000281285/article/bvj0sxb37ykljvdplfj0_f9ad7bbe4a064f8aa2ba058a75af158a_large.png'
                                                alt='Sh mode 125cc ra mắt phối màu mới nổi bật, tinh tế trên từng chi tiết - Là mốt, chuẩn sang -'
                                            />
                                        </a>
                                    </div>

                                    <div className='articles-item-content'>
                                        <div className='articles-item-content-info'>
                                            <div className='article-date'>
                                                <span className='article-day'>18</span>/<span>11</span>/
                                                <span>2023</span>
                                            </div>
                                            <div className='article-title'>
                                                <a href='/blogs/news/sh-mode-125cc-ra-mat-phoi-mau-moi-noi-bat-tinh-te-tren-tung-chi-tiet'>
                                                    Sh mode 125cc ra mắt phối màu mới nổi bật, tinh tế trên từng chi
                                                    tiết - Là ...
                                                </a>
                                            </div>
                                            <div className='article-author'>
                                                <svg
                                                    className='svg-inline--fa fa-edit fa-w-18'
                                                    aria-hidden='true'
                                                    data-prefix='far'
                                                    data-icon='edit'
                                                    role='img'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 576 512'
                                                    data-fa-i2svg=''
                                                >
                                                    <path
                                                        fill='currentColor'
                                                        d='M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z'
                                                    ></path>
                                                </svg>{' '}
                                                Đăng bởi: <span>Xe Máy Hoàng Cầu</span>
                                            </div>
                                        </div>

                                        <div className='articles-item-content-des'>
                                            Mẫu xe Sh mode 125cc được ra mắt lần đầu vào năm 2013, chính thức gia nhập
                                            dòng xe SH, củng cố vị trí hàng đầu của dòng xe này trong phân...
                                        </div>

                                        <div className='articles-item-content-btn'>
                                            <button>Xem thêm</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex min-w-[599px]'>
                                    <div className='articles-item-img'>
                                        <a href=''>
                                            <img
                                                src='//file.hstatic.net/200000281285/article/di-phuot-bang-xe-dien-1.jpg_fd0aae221f534230826406b7e28e7a4a_large.jpg'
                                                alt='ĐI PHƯỢT BẰNG XE MÁY ĐIỆN: TRẢI NGHIỆM MỚI CHO GIỚI TRẺ'
                                            />
                                        </a>
                                    </div>

                                    <div className='articles-item-content'>
                                        <div className='articles-item-content-info'>
                                            <div className='article-date'>
                                                <span className='article-day'>08</span>/<span>11</span>/
                                                <span>2023</span>
                                            </div>
                                            <div className='article-title'>
                                                <a href=''>ĐI PHƯỢT BẰNG XE MÁY ĐIỆN: TRẢI NGHIỆM MỚI CHO GIỚI TRẺ</a>
                                            </div>
                                            <div className='article-author'>
                                                <svg
                                                    className='svg-inline--fa fa-edit fa-w-18'
                                                    aria-hidden='true'
                                                    data-prefix='far'
                                                    data-icon='edit'
                                                    role='img'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 576 512'
                                                    data-fa-i2svg=''
                                                >
                                                    <path
                                                        fill='currentColor'
                                                        d='M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z'
                                                    ></path>
                                                </svg>{' '}
                                                Đăng bởi: <span>Xe Máy Hoàng Cầu</span>
                                            </div>
                                        </div>

                                        <div className='articles-item-content-des'>
                                            Nhiều người vẫn nghĩ xe máy điện chỉ phù hợp để di chuyển trong khu vực nội
                                            thành. Thực tế, nhiều bạn trẻ hiện nay đã chọn xe máy điện để...
                                        </div>

                                        <div className='articles-item-content-btn'>
                                            <button>Xem thêm</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex min-w-[599px]'>
                                    <div className='articles-item-img'>
                                        <a href=''>
                                            <img
                                                src='//file.hstatic.net/200000281285/article/399424070_902973521187483_1907090962408094944_n_f5039da7f3f5401196d6c83b62017d5c_large.jpg'
                                                alt='Honda Việt Nam giới thiệu Vario 125 hoàn toàn mới - Chất ngông thành thị'
                                            />
                                        </a>
                                    </div>

                                    <div className='articles-item-content'>
                                        <div className='articles-item-content-info'>
                                            <div className='article-date'>
                                                <span className='article-day'>07</span>/<span>11</span>/
                                                <span>2023</span>
                                            </div>
                                            <div className='article-title'>
                                                <a href='/blogs/news/honda-viet-nam-gioi-thieu-vario-125-hoan-toan-moi-chat-ngong-thanh-t'>
                                                    Honda Việt Nam giới thiệu Vario 125 hoàn toàn mới - Chất ngông thành
                                                    thị-
                                                </a>
                                            </div>
                                            <div className='article-author'>
                                                <svg
                                                    className='svg-inline--fa fa-edit fa-w-18'
                                                    aria-hidden='true'
                                                    data-prefix='far'
                                                    data-icon='edit'
                                                    role='img'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 576 512'
                                                    data-fa-i2svg=''
                                                >
                                                    <path
                                                        fill='currentColor'
                                                        d='M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z'
                                                    ></path>
                                                </svg>{' '}
                                                Đăng bởi: <span>Xe Máy Hoàng Cầu</span>
                                            </div>
                                        </div>

                                        <div className='articles-item-content-des'>
                                            Hà Nội, ngày 4 tháng 11 năm 2023, Công ty Honda Việt Nam (HVN) giới thiệu
                                            mẫu xe tay ga hoàn toàn mới Vario 125.Ai cũng sẽ trải qua một q...
                                        </div>

                                        <div className='articles-item-content-btn'>
                                            <button>Xem thêm</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex min-w-[599px] '>
                                    <div className='articles-item-img'>
                                        <a href=''>
                                            <img
                                                src='//file.hstatic.net/200000281285/article/xe-may-cop-rong-cho-nu-va-nam-1_de0a48652b2844b68f9e971fce9068ba_large.jpg'
                                                alt='TOP 5 MẪU XE MÁY CỐP RỘNG CHO NAM VÀ NỮ THOẢI MÁI CHỨA ĐỒ'
                                            />
                                        </a>
                                    </div>

                                    <div className='articles-item-content'>
                                        <div className='articles-item-content-info'>
                                            <div className='article-date'>
                                                <span className='article-day'>06</span>/<span>11</span>/
                                                <span>2023</span>
                                            </div>
                                            <div className='article-title'>
                                                <a href='/blogs/news/top-5-mau-xe-may-cop-rong-cho-nam-va-nu-thoai-mai-chua-do'>
                                                    TOP 5 MẪU XE MÁY CỐP RỘNG CHO NAM VÀ NỮ THOẢI MÁI CHỨA ĐỒ
                                                </a>
                                            </div>
                                            <div className='article-author'>
                                                <svg
                                                    className='svg-inline--fa fa-edit fa-w-18'
                                                    aria-hidden='true'
                                                    data-prefix='far'
                                                    data-icon='edit'
                                                    role='img'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 576 512'
                                                    data-fa-i2svg=''
                                                >
                                                    <path
                                                        fill='currentColor'
                                                        d='M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z'
                                                    ></path>
                                                </svg>{' '}
                                                Đăng bởi: <span>Xe Máy Hoàng Cầu</span>
                                            </div>
                                        </div>

                                        <div className='articles-item-content-des'>
                                            Khi chọn mua xe máy, nhiều khách hàng thường ưu tiên sản phẩm có cốp chứa đồ
                                            rộng rãi để tiện lợi mang theo các món đồ lỉnh kỉnh cũn...
                                        </div>

                                        <div className='articles-item-content-btn'>
                                            <button>Xem thêm</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex min-w-[599px]'>
                                    <div className='articles-item-img'>
                                        <a href=''>
                                            <img
                                                src='//file.hstatic.net/200000281285/article/janus-coc_kv_60x84-media.jpeg_a06a48dc78524388af0e2613d14db013_large.jpg'
                                                alt='YAMAHA JANUS HOÀN TOÀN MỚI VỚI GAM MÀU THỜI THƯỢNG 2023: SHINE YOUR STYLE'
                                            />
                                        </a>
                                    </div>

                                    <div className='articles-item-content'>
                                        <div className='articles-item-content-info'>
                                            <div className='article-date'>
                                                <span className='article-day'>22</span>/<span>09</span>/
                                                <span>2023</span>
                                            </div>
                                            <div className='article-title'>
                                                <a href='/blogs/news/yamaha-janus-hoan-toan-moi-voi-gam-mau-thoi-thuong-2023-shine-your-st'>
                                                    YAMAHA JANUS HOÀN TOÀN MỚI VỚI GAM MÀU THỜI THƯỢNG 2023: SHINE YOUR
                                                    STYLE
                                                </a>
                                            </div>
                                            <div className='article-author'>
                                                <svg
                                                    className='svg-inline--fa fa-edit fa-w-18'
                                                    aria-hidden='true'
                                                    data-prefix='far'
                                                    data-icon='edit'
                                                    role='img'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 576 512'
                                                    data-fa-i2svg=''
                                                >
                                                    <path
                                                        fill='currentColor'
                                                        d='M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z'
                                                    ></path>
                                                </svg>{' '}
                                                Đăng bởi: <span>Xe Máy Hoàng Cầu</span>
                                            </div>
                                        </div>

                                        <div className='articles-item-content-des'>
                                            Công ty TNHH Yamaha Motor Việt Nam vừa cho ra mắt dòng xe Janus màu mới 2023
                                            – Shine your style. Yamaha Janus hoàn toàn mới màu mới ...
                                        </div>

                                        <div className='articles-item-content-btn'>
                                            <button>Xem thêm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='owl-dots'>
                            <div className='owl-dot active'>
                                <span></span>
                            </div>
                            <div className='owl-dot'>
                                <span></span>
                            </div>
                            <div className='owl-dot'>
                                <span></span>
                            </div>
                            <div className='owl-dot'>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles
