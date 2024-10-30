import { useEffect, useMemo, useRef, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import DOMPurify from 'dompurify'
import { toast } from 'react-toastify'

import BreadCrumb from '~/components/BreadCrumb'
import { breadCrumb } from '~/constants/breadCrumb'
import styles from './Product.module.css'
import Button from '~/components/Button'
import ProductTitle from '~/components/ProductTitle'
import { productTitle } from '~/constants/productTitle'
import { formatCurrency, getIdFromNameId } from '~/utils/utils'
import productApi from '~/apis/product.api'
import Product from '~/components/Products/components/Product'
import { ProductsConfig } from '~/types/products.type'
import QuantityController from '~/components/QuantityController'
import { cartApi } from '~/apis/cart.api'
import { CartType } from '~/types/cart.type'
import { path } from '~/constants/path'

const cx = classNames.bind(styles)

export default function ProductDetail() {
    const slideRef = useRef<HTMLDivElement | null>(null)
    const [buyCount, setByCount] = useState<number>(1)
    const [color, setColor] = useState<string>('')
    const imageRef = useRef<HTMLImageElement>(null)
    const slide = useRef<number>(0) // Lưu vị trí cuộn
    const offsetWidth = useRef<number>(0) // Lưu độ rộng của phần tử
    const { nameId } = useParams() // lấy param để tiến hành gọi api sản phẩm
    const id = getIdFromNameId(nameId as string) // thực hiện loại bỏ những thành phần không cần thiết chỉ lấy mỗi id
    let count = 0 // khởi tạo biến đếm để fix lỗi spam nhiều vào button sẽ bị đơ thanh trượt
    const [activeImage, setActiveImage] = useState<string>('')

    const navigate = useNavigate()
    // gọi api xem chi tiết sản phẩm
    const { data: productDetail } = useQuery({
        queryKey: ['productDetail', id],
        queryFn: () => productApi.getProductDetail(id)
    })

    const productData = productDetail?.data // truy xuất đến data thật
    const queryConfig: ProductsConfig = { type: productData?.type } // custom queryconfig chỉ lấy type dựa theo sản phẩm đang xem chi tiết

    // gọi api sản phẩm tương tự cùng type
    const { data: productTypeData } = useQuery({
        queryKey: ['product', queryConfig],
        queryFn: () => productApi.getProduct(queryConfig)
    })

    const productType = productTypeData?.data // truy xuất đến mảng đang chứa các sản phẩm để lặp và render ra giao diện

    // goi api Cart de them san pham vao gio hang
    const addToCartMutation = useMutation({
        mutationFn: (body: CartType) => cartApi.addToCart(body)
    })

    // loại bỏ sản phẩm đang xem chi tiết ở sản phẩm tương tự
    const removeProductDetail = useMemo(() => {
        return productType?.filter((product) => product.id !== productData?.id)
    }, [productData?.id, productType])

    useEffect(() => {
        if (slideRef.current) {
            slide.current = slideRef.current.scrollLeft
            offsetWidth.current = slideRef.current.offsetWidth
        }
    }, [productDetail?.data])

    useEffect(() => {
        if (productData) {
            setActiveImage(productData.images[0])
            setColor(productData.options.values[0])
        }
    }, [productData])

    // xử lí thanh trượt sang phải
    const handleSlideNext = () => {
        if (slideRef.current) {
            if (productData) {
                count += 5
                if (count >= productData.images.length) {
                    count = productData.images.length - 5
                    return
                }
            }
            slide.current += offsetWidth.current
            slideRef.current.scrollLeft = slide.current // Áp dụng vị trí cuộn mới
        }
    }

    // xử lí thanh trượt sang trái
    const handleSlidePrev = () => {
        if (slideRef.current) {
            if (count > 0) {
                count -= 5
            }
            if (slide.current === 0) {
                slide.current = 500
            }
            slide.current -= offsetWidth.current
            slideRef.current.scrollLeft = slide.current // Áp dụng vị trí cuộn mới
        }
    }

    const chooseActive = (img: string, index: number) => {
        setActiveImage(img)
        setColor(productData?.options.values[index] as string)
    }

    const handleZoom = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const image = imageRef.current as HTMLImageElement
        const { naturalWidth, naturalHeight } = image
        // Cách 1: Lấy offsetX, offsetY đơn giản khi chúng ta đã xử lý được bubble event
        const { offsetX, offsetY } = event.nativeEvent

        // Cách 2: Lấy offsetX, offsetY khi chúng ta không xử lý được bubble event
        // const offsetX = event.pageX - (rect.x + window.scrollX)
        // const offsetY = event.pageY - (rect.y + window.scrollY)

        const top = offsetY * (1 - naturalHeight / rect.height)
        const left = offsetX * (1 - naturalWidth / rect.width)
        image.style.width = naturalWidth + 'px'
        image.style.height = naturalHeight + 'px'
        image.style.maxWidth = 'unset'
        image.style.top = top + 'px'
        image.style.left = left + 'px'
    }

    const handleRemoveZoom = () => {
        imageRef.current?.removeAttribute('style')
    }

    const handleBuyCount = (value: number) => {
        setByCount(value)
    }

    const addToCart = () => {
        if (productData) {
            addToCartMutation.mutate(
                {
                    id: productData.id,
                    title: productData.title,
                    previewImage: activeImage,
                    count: buyCount,
                    price: productData.price,
                    vendor: productData.vendor,
                    version: color
                },
                {
                    onSuccess: () => {
                        toast.success('Bạn đã thêm sản phẩm vào giỏ hàng', { autoClose: 3000 })
                    }
                }
            )
        }
    }

    const buyNow = () => {
        if (productData) {
            addToCartMutation.mutate({
                id: productData.id,
                title: productData.title,
                previewImage: activeImage,
                count: buyCount,
                price: productData.price,
                vendor: productData.vendor,
                version: color
            })
            navigate(path.checkout)
        }
    }

    return (
        <div className='pb-[152px]'>
            <BreadCrumb heading={breadCrumb.productDetail.heading} title={breadCrumb.productDetail.title} />
            <div className='max-w-[1198px] mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-5'>
                        <div
                            className='relative w-full overflow-hidden cursor-zoom-in h-[418px]'
                            onMouseMove={handleZoom}
                            onMouseLeave={handleRemoveZoom}
                        >
                            <img
                                src={activeImage}
                                alt=''
                                className='pointer-events-none absolute top-0 left-0 w-full object-cover'
                                ref={imageRef}
                            />
                        </div>
                        <div className='relative grid grid-cols-5 mt-2 group'>
                            {productData && (
                                <>
                                    {productData.images.length > 5 && (
                                        <button
                                            className='absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 translate-x-[-15px] opacity-[0] group-hover:translate-x-[0] group-hover:opacity-[1] transition duration-200 ease-in bg-black/20 text-white'
                                            onClick={handleSlidePrev}
                                        >
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
                                    )}

                                    <div
                                        ref={slideRef}
                                        className={cx(
                                            'flex items-center w-[500px] h-[84px] overflow-auto scroll-smooth',
                                            {
                                                scrollbar: true
                                            }
                                        )}
                                    >
                                        {productData.images.map((image, index) => {
                                            const isActive = image === activeImage
                                            return (
                                                <img
                                                    src={image}
                                                    alt=''
                                                    className={cx(' w-[100px] cursor-pointer object-cover', {
                                                        'border-[2px] border-red-500': isActive
                                                    })}
                                                    key={index}
                                                    onMouseEnter={() => chooseActive(image, index)}
                                                />
                                            )
                                        })}
                                    </div>
                                    {productData.images.length > 5 && (
                                        <button
                                            className='absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 translate-x-[15px] opacity-0 group-hover:translate-x-[0] group-hover:opacity-[1] transition duration-200 ease-in bg-black/20 text-white'
                                            onClick={handleSlideNext}
                                        >
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
                                                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                                                />
                                            </svg>
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                    <div className='col-span-7 pl-[26px] pt-2'>
                        <p className='text-[15px] font-semibold text-[#000bff]'>{productData?.title}</p>
                        <div className='mt-[9px] flex items-center gap-[10px] text-[15px]'>
                            <p>Thương hiệu:</p>
                            <p className='text-[#ff3237] font-[550]'>{productData?.vendor}</p>
                        </div>
                        <div className='flex items-center gap-1 text-[15px]'>
                            <p>Loại:</p>
                            <p className='text-[#ff3237] font-[550]'>{productData?.type}</p>
                        </div>
                        <div className='flex items-center gap-[10px] text-[15px]'>
                            <p>Tình trạng:</p>
                            <p className='text-[#ff3237] font-[550]'>Còn hàng</p>
                        </div>
                        <p className='mt-[16px] text-[24px] font-[600] text-[#ff3237]'>
                            {formatCurrency(Number(productData?.price))}
                        </p>
                        <div className='mt-[16px] w-full h-[1px] bg-[#817f7f]' />
                        <p className='mt-[10px] text-[15px]'>Hotline: 1900 63 66 67</p>
                        <div className='mt-[10px] w-full h-[1px] bg-[#817f7f]' />
                        <p className='text-[15px] mt-[10px]'>Số lượng</p>
                        <div className='flex items-center gap-[35px] mt-[5px]'>
                            <QuantityController
                                onDecrease={handleBuyCount}
                                onIncrease={handleBuyCount}
                                onType={handleBuyCount}
                                value={buyCount}
                                max={productData?.quantity}
                            />
                            <div className='flex items-center gap-1'>
                                <Button
                                    className={cx(
                                        'w-[148px] py-[9px] bg-[#ff3237] rounded-[30px] text-[14px] font-[600] text-[#333333] hover:text-white transition duration-200 ease-in flex items-center justify-center',
                                        {
                                            'w-[148px] py-[9px] bg-[#ff3237] opacity-[0.8] rounded-[30px] text-[14px] font-[600] text-[#333333] flex items-center justify-center pointer-events-none':
                                                addToCartMutation.isPending
                                        }
                                    )}
                                    onClick={addToCart}
                                    isLoading={addToCartMutation.isPending}
                                    disabled={addToCartMutation.isPending}
                                >
                                    THÊM VÀO GIỎ
                                </Button>
                                <Button
                                    className={cx(
                                        'w-[126px] py-[9px] bg-[#ff3237] rounded-[30px] text-[14px] font-[600] text-[#333333] hover:text-white transition duration-200 ease-in flex items-center justify-center',
                                        {
                                            'w-[126px] py-[9px] bg-[#ff3237] opacity-[0.8] rounded-[30px] text-[14px] font-[600] text-[#333333] flex items-center justify-center pointer-events-none':
                                                addToCartMutation.isPending
                                        }
                                    )}
                                    onClick={buyNow}
                                    isLoading={addToCartMutation.isPending}
                                    disabled={addToCartMutation.isPending}
                                >
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
                            __html: DOMPurify.sanitize(productData?.description as string)
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
                    {removeProductDetail &&
                        removeProductDetail.map((product) => (
                            <div className='col-span-3' key={product.id}>
                                <Product product={product} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
