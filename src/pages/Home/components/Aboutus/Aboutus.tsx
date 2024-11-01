import { Link } from "react-router-dom";
import { path } from '~/constants/path'

export default function Aboutus() {
	return (
        <div id='aboutus' className="w-[1198px] flex justify-center mx-auto">
            <div className='pb-8'>
                <div className='aboutus-head text-center relative my-14 uppercase'>
                    <h2 className='relative text-[120px] opacity-10  tracking-wider font-[700]'>Lịch sử</h2>
                    <h3 className='absolute inset-x-0 bottom-0 text-2xl font-[300] leading-10 z-10'>
                        Chào mừng đến với
                        <span className='block font-[750] text-3xl mt-2 bold'>HỆ THỐNG XE MÁY HOÀNG CẦU</span>
                    </h3>
                </div>

                <div className='flex justify-center'>
                    <div className='aboutus-img w-1/2 pr-9'>
                        <Link to={path.home}>
                            <img
                                src='//theme.hstatic.net/200000281285/1000677821/14/aboutus_img.jpg?v=848'
                                alt='Giới thiệu'
                            />
                        </Link>
                    </div>

                    <div className='aboutus-content w-1/2 flex bg-red'>
                        <div className='space-y-4'>
                            
							<h3 className='text-2xl font-[750] uppercase'>
                                <span className='block text-[#ff3237]'>Xe máy Hoàng Cầu</span>
                                <span className='block text-gray-500 text-sm tracking-wider font-normal'>
                                    Bạn đường tin cậy
                                </span>
                            </h3>

							<p className='text-justify text-sm'>
								Với bề dày kinh nghiệm hoạt động trên thị trường xe máy cũng như tinh thần nhiệt
								huyết, tận tâm với từng sản phẩm. Hệ Thống Xe Máy Hoàng Cầu luôn không ngừng nâng
								cao kĩ năng chuyên môn - nghiệp vụ của mỗi nhân viên nhằm mang đến những TRẢI NGHIỆM
								TỐT NHẤT cho quý khách hàng khi đến với từng chi nhánh của chúng tôi.
							</p>
							<p className='text-justify text-sm pt-4'>
								Hệ Thống Xe Máy Hoàng Cầu tự tin là một trong số những điểm đến đáng tin cậy khi Quý
								khách hàng có nhu cầu tham quan và mua sắm <span className='italic'>"xế yêu"</span>{' '}
								cho bản thân và gia đình.
							</p>

                            <div className='author'>
                                <h4 className='name font-bold uppercase'>Trương Văn Cầu</h4>
                                <img
                                    src='//theme.hstatic.net/200000281285/1000677821/14/aboutus_img_author.jpg'
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}