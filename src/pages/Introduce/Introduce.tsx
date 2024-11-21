import { Helmet } from 'react-helmet-async'
import BreadCrumb from '~/components/BreadCrumb'
import { breadCrumb } from '~/constants/breadCrumb'

export default function Introduce() {
    return (
        <div>
            <Helmet>
                <title>Giới thiệu – Hệ Thống Xe máy Hoàng Cầu</title>
                <meta name='description' content='Hệ Thống Xe máy Hoàng Cầu' />
            </Helmet>
            <BreadCrumb heading={breadCrumb.introduce.heading} title={breadCrumb.introduce.title} />

            <section id='page-wrapper'>
                <div className='wrapper max-w-[1198px] mx-auto pb-[100px]'>
                    <div className='inner text-sm'>
                        <div className='grid'>
                            <div className='grid__item large--one-whole'>
                                <div className='border-2 border-gray-400 p-5'>
                                    <h1 className='text-blue-600 uppercase font-semibold text-lg'>Giới Thiệu</h1>
                                </div>
                                <div className='mt-5 text-lg'>
                                    <p className='flex mb-5'>
                                        <img
                                            src='//file.hstatic.net/200000281285/file/hc9_e9f0da83c4a04b59acb95b57d9b50e99_grande.jpg'
                                            alt='Hoàng Cầu Store'
                                            className='rounded shadow-lg'
                                        />
                                    </p>
                                    <p className='mb-4 text-gray-700 leading-relaxed'>
                                        Hệ thống xe máy Hoàng Cầu được thành lập vào ngày 04 tháng 04 năm 2007. Với mục
                                        tiêu trở thành đại lí cung cấp xe máy chính hãng trong nước và nhập khẩu, dịch
                                        vụ bảo hành và sửa chữa xe máy tốt nhất Việt Nam.
                                    </p>
                                    <p className='mb-4 text-gray-700 leading-relaxed'>
                                        Với phương châm{' '}
                                        <strong className='font-semibold'>“Lấy khách hàng làm trung tâm”</strong>, chúng
                                        tôi thiết kế doanh nghiệp với tầm nhìn đứng về phía khách hàng và luôn hướng đến
                                        khách hàng.
                                    </p>
                                    <p className='mb-4 text-gray-700 leading-relaxed'>
                                        Với phương châm đó, khi khách hàng đến với Hoàng Cầu, quý khách sẽ được trải
                                        nghiệm những sản phẩm ưu việt được tư vấn bởi những nhân viên chuyên nghiệp và
                                        nhiều kinh nghiệm. Bên cạnh việc cung cấp sản phẩm, dịch vụ bảo hành bảo dưỡng
                                        và sửa chữa của chúng tôi cũng được trang bị những máy móc hiện đại, tân tiến
                                        cùng đội ngũ kỹ thuật viên lành nghề chắc chắn sẽ làm hài lòng quý khách khi
                                        trao gửi những chiếc xe yêu quý của mình.
                                    </p>
                                    <p className='mb-4 text-gray-700 leading-relaxed'>
                                        Trải qua 15 năm phát triển, Hệ thống xe máy Hoàng Cầu đã khẳng định được vị trí
                                        của mình cũng như để lại nhiều ấn tượng tốt cho hàng trăm ngàn khách hàng trên
                                        toàn quốc. Chúng tôi cam kết sẽ luôn đồng hành cùng khách hàng trên mọi nẻo
                                        đường, xứng đáng{' '}
                                        <strong className='font-semibold'>là bạn đường tin cậy của mọi người.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
