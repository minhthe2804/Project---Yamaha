import { useState } from 'react'
import { Product as ProductType } from '~/types/Products.type'
import { formatCurrency } from '~/utils/utils'
import 'animate.css'
interface Props {
    product: ProductType
}

export default function Product({ product }: Props) {
    const [featureImage, setFeatureImage] = useState<string>()
    const [animationClass, setAnimationClass] = useState<string>('')

    const handleFeature = () => {
        setFeatureImage(product.media[1].preview_image.src as string)
        setAnimationClass('animate__fadeIn')
        setTimeout(() => {
            setAnimationClass('')
        }, 500)
    }

    const handleFeatureReset = () => {
        setFeatureImage('')
        setAnimationClass('animate__fadeIn')
        setTimeout(() => {
            setAnimationClass('')
        }, 500)
    }

    return (
        <div
            className='pb-[32px] border-2 border-[#f0efef] rounded-[12px] truncate'
            onMouseEnter={handleFeature}
            onMouseLeave={handleFeatureReset}
        >
            <img
                src={featureImage || product.featured_image}
                alt=''
                className={`w-[300px] object-cover cursor-pointer animate__animated ${animationClass}`}
            />
            <div className='w-full px-[14px] pt-[21px]'>
                <p className='text-[12.5px] text-[#181b23] font-[600] opacity-[0.9] hover:text-[#ff3237] transition duration-300 ease-in cursor-pointer'>
                    {product.title}
                </p>
                <div className='w-full h-[1px] bg-[#ededed] mt-[22px]'></div>
                <p className='text-lg font-[600] text-[#ff3237] mt-[28px]'>{formatCurrency(Number(product.price))}</p>
                <button className='w-full p-[12px] bg-[#ff3237] rounded-[30px] mt-[24px] text-white flex items-center justify-center gap-1 hover:shadow-[0_0_20px_5px_rgba(255,50,55,0.3)] transition duration-200 ease-in'>
                    <svg
                        className='svg-inline--fa fa-cart-plus fa-w-18 text-[13px]'
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
                </button>
            </div>
        </div>
    )
}
