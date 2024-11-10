import BreadCrumb from '~/components/BreadCrumb'
import { breadCrumb } from '~/constants/breadCrumb'
import { contactinfo } from '~/constants/Contactinfo'

export default function Contact() {
    return (
        <div>
            <BreadCrumb heading={breadCrumb.contact.heading} title={breadCrumb.contact.title} />
            <div className='container mx-auto p w-[1198px]'>
                <div className='border-2 border-gray-400 p-5'>
                    <h1 className='text-blue-600 uppercase font-semibold text-lg'>Hệ thống cửa hàng</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 py-5'>
                    {/* Địa chỉ, Số điện thoại và Email */}
                    <div className='space-y-6'>
                        <div className='p-4 rounded-lg text-center'>
                            <h4 className='text-lg font-semibold uppercase'>Địa chỉ trụ sở:</h4>
                            <p className='text-black'>Số 189, Đường Nguyễn Trãi, P.Dĩ An, TP.Dĩ An, tỉnh Bình Dương</p>
                        </div>

                        <div className='p-4 rounded-lg text-center'>
                            <h4 className='text-lg font-semibold uppercase'>Số điện thoại:</h4>
                            <a href='tel:1900 63 66 67' className='text-black'>
                                1900 63 66 67
                            </a>
                        </div>

                        <div className='p-4 rounded-lg text-center'>
                            <h4 className='text-lg font-semibold uppercase'>Email:</h4>
                            <a href='mailto:xemayhoangcau@gmail.com' className='text-black'>
                                xemayhoangcau@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Bản đồ */}
                    <div className='col-span-1 lg:col-span-1'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.798607126305!2d106.75300844994072!3d10.902904792197678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8445027d1e5%3A0xeeaaa2aa1091a98e!2zWWFtYWhhIFRvd24gSG_DoG5nIEPhuqd1!5e0!3m2!1svi!2s!4v1614355874209!5m2!1svi!2s'
                            className='w-full h-96 border-0 rounded-lg'
                            allowFullScreen
                            loading='lazy'
                        ></iframe>
                    </div>

                    {/* Form liên hệ */}
                    <div className='col-span-1 lg:col-span-1'>
                        <h4 className='text-lg font-semibold'>Form liên hệ:</h4>
                        <form action='/contact' method='post' className='space-y-4'>
                            <input name='form_type' type='hidden' value='contact' />
                            <input name='utf8' type='hidden' value='✓' />

                            <input
                                type='text'
                                name='contact[name]'
                                placeholder='Họ tên của bạn'
                                className='w-full border border-gray-500 p-2 rounded focus:ring focus:ring-blue-200'
                                autoCapitalize='words'
                            />

                            <input
                                type='email'
                                name='contact[email]'
                                placeholder='Địa chỉ email của bạn'
                                className='w-full border border-gray-500 p-2 rounded focus:ring focus:ring-blue-200'
                                autoCorrect='off'
                                autoCapitalize='off'
                            />

                            <input
                                type='tel'
                                name='contact[phone]'
                                placeholder='Số điện thoại của bạn'
                                className='w-full border border-gray-500 p-2 rounded focus:ring focus:ring-blue-200'
                                pattern='[0-9\-]*'
                            />

                            <textarea
                                name='contact[body]'
                                placeholder='Nội dung'
                                className='w-full border border-gray-500 p-2 rounded focus:ring focus:ring-blue-200 h-[160px]'
                            ></textarea>

                            <div className='flex justify-end'>
                                <button
                                    type='submit'
                                    className='bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 focus:ring focus:ring-red-300 '
                                >
                                    Gửi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='border-2 border-gray-400 p-5'>
                    <h1 className='text-blue-600 uppercase font-semibold text-lg'>Hệ thống cửa hàng</h1>
                </div>
                <div className='pcontact-shoplist-wrapper pt-5 pb-28'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4'>

                        {contactinfo.map((item, index) => (
                            <div key={index } className='pcontact-shop-item'>
                                <div className='pcontact-shop-img overflow-hidden'>
                                    <img
                                        src={item.image}
                                        alt={item.address}
                                        className='transition-transform duration-300 hover:scale-110 w-full h-[250px]'
                                    />
                                </div>
                                <div className='pcontact-shop-address hover:text-[#ff3237] text-sm py-2'>
                                    <a href='https://g.page/hoangcau8?we' target='_blank'>
                                        <svg
                                            className='svg-inline--fa fa-map-marker-alt fa-w-12 pr-1'
                                            aria-hidden='true'
                                            data-prefix='fas'
                                            data-icon='map-marker-alt'
                                            role='img'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 384 512'
                                            data-fa-i2svg=''
                                        >
                                            <path
                                                fill='currentColor'
                                                d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'
                                            ></path>
                                        </svg>
                                        {item.address}
                                    </a>
                                </div>
                                <div className='pcontact-shop-tel hover:text-[#ff3237] text-sm pb-5'>
                                    <a href='tel:0274 6568 777 - Sale: 0978 274 039 '>
                                        <svg
                                            className='svg-inline--fa fa-phone-volume fa-w-12 pr-1'
                                            aria-hidden='true'
                                            data-prefix='fas'
                                            data-icon='phone-volume'
                                            role='img'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 384 512'
                                            data-fa-i2svg=''
                                        >
                                            <path
                                                fill='currentColor'
                                                d='M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z'
                                            ></path>
                                        </svg>
                                        {item.phone}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
