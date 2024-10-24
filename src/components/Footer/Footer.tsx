export default function Footer() {
    return (
        <footer
            id='footer'
            className="text-white bg-[#3159a6] bg-cover bg-center bg-no-repeat pt-[100px] pb-0 px-0 border-t-2 border-[#ff3237] bg-[url('https://theme.hstatic.net/200000281285/1000677821/14/ft_bg_img.jpg?v=848')]"
        >
            <div className='container mx-auto flex justify-between px-40 text-xs'>
                <div className='w-1/3'>
                    <div className='mb-4'>
                        <a href='/'>
                            <img
                                src='//theme.hstatic.net/200000281285/1000677821/14/ft_logo.png?v=848'
                                alt='Hệ Thống Xe máy Hoàng Cầu'
                                className='h-12'
                            />
                        </a>
                    </div>
                    <div className='mb-4'>
                        HỆ THỐNG XE MÁY HOÀNG CẦU chuyên cung cấp các dòng xe Honda, Yamaha, SYM, Suzuki, xe nhập
                        khẩu,.... chính hãng, cam kết mang đến những sản phẩm, phụ tùng chất lượng nhất đến tay người
                        tiêu dùng.
                    </div>
                    <div className='flex items-center mb-2'>
                        <svg
                            className='w-5 h-5 mr-2'
                            aria-hidden='true'
                            data-prefix='fas'
                            data-icon='map-marker-alt'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 384 512'
                        >
                            <path
                                fill='currentColor'
                                d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'
                            ></path>
                        </svg>
                        <span>Địa chỉ: Số 189, Đường Nguyễn Trãi, P.Dĩ An, TP.Dĩ An, tỉnh Bình Dương</span>
                    </div>
                    <div className='flex items-center mb-2'>
                        <svg
                            className='w-5 h-5 mr-2'
                            aria-hidden='true'
                            data-prefix='fas'
                            data-icon='phone'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                        >
                            <path
                                fill='currentColor'
                                d='M493.397 24.615l-104-23.997c-11.314-2.611-22.879 3.252-27.456 13.931l-48 111.997a24 24 0 0 0 6.862 28.029l60.617 49.596c-35.973 76.675-98.938 140.508-177.249 177.248l-49.596-60.616a24 24 0 0 0-28.029-6.862l-111.997 48C3.873 366.516-1.994 378.08.618 389.397l23.997 104C27.109 504.204 36.748 512 48 512c256.087 0 464-207.532 464-464 0-11.176-7.714-20.873-18.603-23.385z'
                            ></path>
                        </svg>
                        <span>
                            Số điện thoại:{' '}
                            <a href='tel:1900 63 66 67' className='no-underline'>
                                1900 63 66 67
                            </a>
                        </span>
                    </div>
                    <div className='flex items-center mb-2'>
                        <svg
                            className='w-5 h-5 mr-2'
                            aria-hidden='true'
                            data-prefix='fas'
                            data-icon='envelope'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                        >
                            <path
                                fill='currentColor'
                                d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
                            ></path>
                        </svg>
                        <span>
                            Email:{' '}
                            <a href='mailto:xemayhoangcau@gmail.com' className='no-underline'>
                                xemayhoangcau@gmail.com
                            </a>
                        </span>
                    </div>
                </div>

                <div className='w-1/2 flex flex-col'>
                    <h3 className='text-lg font-semibold mb-2 text-center pb-4'>HỆ THỐNG SHOWROOM</h3>
                    <div className='flex justify-between'>
                        <div className='w-1/2 pr-2'>
                            <ul className='space-y-2'>
                                <li className='hover:translate-x-[10px] hover:text-[#ff3237] transition duration-300 ease-in'>
                                    <a href='tel:+0978274039' className='no-underline'>
                                        <b>YAMAHA TOWN HOÀNG CẦU - 08</b>
                                        <p>☎: 0274 6568 777 📞: 0978 274 039</p>
                                        <p className='pt-4'>
                                            ĐC: Số 189, Đường Nguyễn Trãi, P. Dĩ An, TP. Dĩ An, Tỉnh Bình Dương.
                                        </p>
                                    </a>
                                </li>
                                <li className='hover:translate-x-[10px] hover:text-[#ff3237] transition duration-300 ease-in'>
                                    <a href='tel:+0981547039' className='no-underline'>
                                        <b>YAMAHA TOWN HOÀNG CẦU - 09</b>
                                        <p>☎: 02746 566 605 📞: 0981 547 039</p>
                                        <p className='pt-4'>
                                            ĐC: Số 6, Đường ĐT746, P. Khánh Bình, Thị Xã Tân Uyên, Tỉnh Bình Dương.
                                        </p>
                                    </a>
                                </li>
                                <li className='hover:translate-x-[10px] hover:text-[#ff3237] transition duration-300 ease-in'>
                                    <a href='tel:+0971467039' className='no-underline'>
                                        <b>HOÀNG CẦU CHI NHÁNH 2</b>
                                        <p>☎: 02854 432 212 📞: 0971 467 039</p>
                                        <p className='pt-4'>ĐC: Số 7-9, QL 1K, P. Linh Xuân, Thủ Đức, Tp. HCM</p>
                                    </a>
                                </li>
                                <li className='hover:translate-x-[10px] hover:text-[#ff3237] transition duration-300 ease-in'>
                                    <a href='tel:+0973524039' className='no-underline'>
                                        <b>HOÀNG CẦU CHI NHÁNH 3</b>
                                        <p>☎: 02854 034 142 📞: 0973 524 039</p>
                                        <p className='pt-4'>
                                            ĐC: 1231/2A Đường Nam Khu Chế Xuất, KP.2, P.Bình Chiểu, Thủ Đức, TP.HCM
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='w-1/2 pl-2'>
                            <ul className='space-y-2'>
                                <li className='hover:translate-x-[10px] hover:text-[#ff3237] transition duration-300 ease-in'>
                                    <a href='tel:+0978274039' className='no-underline'>
                                        <b>YAMAHA TOWN HOÀNG CẦU - 08</b>
                                        <p>☎: 0274 6568 777 📞: 0978 274 039</p>
                                        <p className='pt-4'>
                                            ĐC: Số 189, Đường Nguyễn Trãi, P. Dĩ An, TP. Dĩ An, Tỉnh Bình Dương.
                                        </p>
                                    </a>
                                </li>
                                <li className='hover:translate-x-[10px] hover:text-[#ff3237] transition duration-300 ease-in'>
                                    <a href='tel:+0981547039' className='no-underline'>
                                        <b>YAMAHA TOWN HOÀNG CẦU - 09</b>
                                        <p>☎: 02746 566 605 📞: 0981 547 039</p>
                                        <p className='pt-4'>
                                            ĐC: Số 6, Đường ĐT746, P. Khánh Bình, Thị Xã Tân Uyên, Tỉnh Bình Dương.
                                        </p>
                                    </a>
                                </li>
                                <li className='hover:translate-x-[10px] hover:text-[#ff3237] transition duration-300 ease-in'>
                                    <a href='tel:+0971467039' className='no-underline'>
                                        <b>HOÀNG CẦU CHI NHÁNH 2</b>
                                        <p>☎: 02854 432 212 📞: 0971 467 039</p>
                                        <p className='pt-4'>ĐC: Số 7-9, QL 1K, P. Linh Xuân, Thủ Đức, Tp. HCM</p>
                                    </a>
                                </li>
                                <li className='hover:translate-x-[10px] hover:text-[#ff3237] transition duration-300 ease-in'>
                                    <a href='tel:+0973524039' className='no-underline'>
                                        <b>HOÀNG CẦU CHI NHÁNH 3</b>
                                        <p>☎: 02854 034 142 📞: 0973 524 039</p>
                                        <p className='pt-4'>
                                            ĐC: 1231/2A Đường Nam Khu Chế Xuất, KP.2, P.Bình Chiểu, Thủ Đức, TP.HCM
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='w-1/6 pl-4'>
                    <h3 className='text-lg font-semibold pb-4'>Liên kết nhanh</h3>
                    <ul className='space-y-2'>
                        <li className='hover:translate-x-[10px] hover:text-[#ff3237] transition duration-300 ease-in'>
                            <a href='/' className='no-underline'>
                                Giới thiệu
                            </a>
                        </li>
                        <li className='hover:translate-x-[10px] hover:text-[#ff3237] transition duration-300 ease-in'>
                            <a href='/' className='no-underline'>
                                Chính sách đổi trả
                            </a>
                        </li>
                        <li className='hover:translate-x-[10px] hover:text-[#ff3237] transition duration-300 ease-in'>
                            <a href='/' className='no-underline'>
                                Hướng dẫn thanh toán
                            </a>
                        </li>
                        <li className='hover:translate-x-[10px] hover:text-[#ff3237] transition duration-300 ease-in'>
                            <a href='/' className='no-underline'>
                                Liên hệ
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='px-40 mt-5 text-xs'>
                <ul>
                    <li className='flex items-center'>
                        <img
                            src='//theme.hstatic.net/200000281285/1000677821/14/icon_user.png?v=848'
                            className='mr-[10px] pb-4 '
                        />{' '}
                        Người đại diện: TRƯƠNG VĂN CẦU
                    </li>
                    <li className='flex items-center'>
                        <img
                            src='//theme.hstatic.net/200000281285/1000677821/14/icon_gpkd.png?v=848'
                            className='mr-[10px]  '
                        />{' '}
                        GPKD Số: 0312907562; cấp ngày 21/09/2020 tại Sở Kế Hoạch và Đầu Tư Tỉnh Bình Dương
                    </li>
                </ul>

                <div className='ft-copyrights-content pt-20 pb-10'>Copyrights © 2021 by Xe máy Hoàng Cầu</div>
            </div>
        </footer>
    )
}
