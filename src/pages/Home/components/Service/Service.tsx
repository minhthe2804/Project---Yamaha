import { useState } from 'react';
import ProductTitle from '~/components/ProductTitle/ProductTitle';
import { productTitle } from '~/constants/productTitle';
import { serviceinfo } from '~/constants/Serviceinfo';
import 'animate.css';

function Service() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div id='service' className='text-white bg-[#181b23] relative max-h-[500px] py-[100px]'>
            <div className='service-head'>
                <div className='wrapper'>
                    <ProductTitle heading={productTitle.service.heading} textColor='#fff' />
                </div>
            </div>

            <div className='service-desc text-center pt-[20px] pb-[50px]'>
                Dịch vụ chăm sóc khách hàng đa dạng và phong phú
            </div>

            <div className='home-section-body'>
                <div className='service-video'>
                    <div className='video-wrapper h-[100px]'>
                        {/* <iframe
                            width='100%'
                            height='100%'
                            className='absolute w-full'
                            src='https://www.youtube.com/embed/bXB5VSlV00k?&autoplay=1&controls=0&showinfo=0&rel=0&loop=1&mute=1&playlist=bXB5VSlV00k'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                        ></iframe> */}
                        <div className='absolute inset-0 bg-black opacity-100 top-[250px] h-[505px]'></div>
                    </div>
                </div>

                <div className='wrapper'>
                    <div className='inner'>
                        <div id='owl-service'>
                            <div className='owl-stage-outer '>
                                <div
                                    className='flex justify-center items-center min-w-[1198px]'
                                    style={{ borderRightColor: 'rgba(129, 127, 127, 0.1)' }}
                                >
                                    {serviceinfo.map((service, index) => (
                                        <div
                                            key={index}
                                            className='service-item relative w-72 h-80 p-6 bg-[#1f2229] overflow-hidden transform transition-all duration-300 hover:bg-white hover:text-black group border-r border-solid border-inherit'
                                            onMouseEnter={() => setActiveIndex(index)}
                                            onMouseLeave={() => setActiveIndex(null)}
                                        >
                                            <div className='service-img relative mt-4'>
                                                <img
                                                    src={service.img}
                                                    alt={service.title}
                                                    className='w-[64px] h-[64px] mx-auto mb-[30px] transition-opacity duration-300 absolute inset-0'
                                                />
                                                <img
                                                    src={service.hoverImg}
                                                    alt={service.title}
                                                    className='w-[64px] h-[64px] mx-auto mb-[30px] transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute inset-0'
                                                />
                                            </div>
                                            <div className='service-content mt-28 text-center'>
                                                <div className='service-title text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-red-500 uppercase'>
                                                    {service.title}
                                                </div>
                                                <div className='service-desc text-sm text-white group-hover:text-black pb-[50px] overflow-ellipsis overflow-hidden line-clamp-2 h-[100px]'>
                                                    {service.description}
                                                </div>
                                                <a
                                                    href={service.link}
                                                    className={`service-viewmore text-lg font-bold text-black transition-opacity duration-300 ${
                                                        activeIndex === index
                                                            ? 'animate__animated animate__fadeInUp'
                                                            : 'opacity-0'
                                                    }`}
                                                    style={{ display: activeIndex === index ? 'block' : 'none' }}
                                                >
                                                    Xem thêm
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;
