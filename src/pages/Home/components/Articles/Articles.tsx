import 'animate.css'
import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import ProductTitle from '~/components/ProductTitle/ProductTitle'
import { productTitle } from '~/constants/productTitle'
import { articlesinfo } from '~/constants/Articlesinfo'
import styles from './Articles.module.css'

import { useRef } from 'react'

const cx = classNames.bind(styles)

function Articles() {
    // Reference to the articles list container
    const slideRef = useRef<HTMLDivElement | null>(null)
    const [index, setIndex] = useState<number>(0)
    const slide = useRef<number>(0) // Lưu vị trí cuộn
    const offsetWidth = useRef<number>(0) // Lưu độ rộng của phần tử
    // Function to scroll left or right

    useEffect(() => {
        if (slideRef.current) {
            slide.current = slideRef.current.scrollLeft
            offsetWidth.current = slideRef.current.offsetWidth
        }
    }, [])

    const handleScroll = (number: number) => {
        if (slideRef.current) {
            if (number === 0) {
                slide.current = 0
                slideRef.current.scrollLeft = slide.current
                setIndex(number)
                return
            }
            if (number === 3) {
                slide.current = 3594
                slideRef.current.scrollLeft = slide.current
                setIndex(number)
                return
            }
            setIndex(number)
            const scrollIndex = 1198
            slide.current = scrollIndex * number
            slideRef.current.scrollLeft = slide.current // Áp dụng vị trí cuộn mới
        }
    }

    return (
        <div id='news' className='py-24'>
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
                            <div
                                ref={slideRef}
                                className={cx('articles-list flex w-[1198px] mx-auto scroll-smooth overflow-auto', {
                                    scrollbar: true
                                })}
                            >
                                {articlesinfo.map((item, index) => (
                                    <div key={index} className='flex min-w-[599px] text-sm'>
                                        <div className='w-10/12'>
                                            <div className='overflow-hidden rounded-md'>
                                                <a href={item.linkStatus}>
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className='transition-transform duration-300 hover:scale-110 w-full'
                                                    />
                                                </a>
                                            </div>
                                        </div>

                                        <div className='w-10/12 pt-5 px-[20px]'>
                                            <div className='pb-5 border-b border-gray-200'>
                                                <div className='text-lg font-bold text-[#ff3237] mb-2'>
                                                    <span className='text-4xl'>{item.day}</span>/
                                                    <span>{item.month}</span>/<span>{item.year}</span>
                                                </div>
                                                <div className='font-bold mb-2 uppercase overflow-ellipsis overflow-hidden line-clamp-2'>
                                                    <a href={item.linkStatus}>{item.title}</a>
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
                                                    Đăng bởi: <span className='text-[#ff3237]'>{item.author}</span>
                                                </div>
                                            </div>

                                            <div className='my-5 text-justify overflow-ellipsis overflow-hidden line-clamp-5 h-[100px]'>
                                                {item.description}
                                            </div>

                                            <div className='my-10'>
                                                <a
                                                    href=''
                                                    className='bg-[#315aa6] rounded-[30px] text-center hover:bg-[#ff3237] hover:shadow-[0_0_20px_10px_rgba(255,50,55,0.3)] text-white font-bold py-[10px] px-[50px] transition duration-200 ease-in'
                                                >
                                                    Xem thêm
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='relative'>
                            <div className='flex items-center gap-6 absolute left-[50%] transform -translate-x-[50%] top-[-10px]'>
                                {[0, 0, 0, 0].map((_, number) => {
                                    const isActive = index === number
                                    return (
                                        <div
                                            className={cx(
                                                'w-[16px] h-[16px] border hover:border-[#ff3237] transition duration-300 rotate-45 relative group cursor-pointer',
                                                {
                                                    'border border-[#ff3237]': isActive,
                                                    'border-transparent border-[#ff3237]': !isActive
                                                }
                                            )}
                                            key={number}
                                            onClick={() => handleScroll(number)}
                                        >
                                            <div
                                                className={cx(
                                                    'w-[8px] h-[8px] group-hover:bg-[#ff3237] transition duration-300 ease-in absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2',
                                                    {
                                                        'bg-[#ff3237]': isActive,
                                                        'bg-black': !isActive
                                                    }
                                                )}
                                            ></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles
