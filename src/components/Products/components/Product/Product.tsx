import { useMemo, useState } from 'react'
import { useContext } from 'react'
import { Product as ProductType } from '~/types/products.type'
import { formatCurrency, generateNameId } from '~/utils/utils'
import 'animate.css'
import Button from '~/components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { path } from '~/constants/path'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { CartType } from '~/types/cart.type'
import { cartApi } from '~/apis/cart.api'
import { toast } from 'react-toastify'
import { toastNotify } from '~/constants/toastNotify'
import { AppContext } from '~/contexts/app.context'

interface Props {
    product: ProductType
    border?: string
}

export default function Product({ product, border = '[#f0efef]' }: Props) {
    const { isAuthenticated } = useContext(AppContext)
    const [featureImage, setFeatureImage] = useState<string>()
    const [animationClass, setAnimationClass] = useState<string>('')
    const queryClient = useQueryClient()

    const navigate = useNavigate()

    const { data: productInCartData, refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: () => cartApi.getCart()
    })

    const updateCartMutation = useMutation({
        mutationFn: (bodyData: { id: string; body: CartType }) => cartApi.updateCart(bodyData.id, bodyData.body)
    })

    const productToCart = productInCartData?.data

    const checkIdToCart = useMemo(
        () => productToCart?.find((cart) => cart.id === product.id),
        [product.id, productToCart]
    )

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

    // goi api Cart de them san pham vao gio hang
    const addToCartMutation = useMutation({
        mutationFn: (body: CartType) => cartApi.addToCart(body)
    })

    const checkProductToCart = () => {
        if (productToCart) {
            const checkProduct = productToCart.some((cart) => cart.version === product.options.values[0])
            return checkProduct
        }
    }

    const addToCart = () => {
        if (isAuthenticated) {
            if (product) {
                if (!checkProductToCart()) {
                    addToCartMutation.mutate(
                        {
                            id: product.id,
                            title: product.title,
                            previewImage: product.images[0],
                            count: 1,
                            price: product.price,
                            totalPrice: product.price * 1,
                            vendor: product.vendor,
                            version: product.options.values[0],
                            quantity: product.quantity
                        },
                        {
                            onSuccess: () => {
                                toast.success(toastNotify.productDetail.addtoCartSuccess, { autoClose: 3000 })
                                queryClient.invalidateQueries({ queryKey: ['cart'] })
                            }
                        }
                    )
                    return
                }
                updateCartMutation.mutate(
                    {
                        id: checkIdToCart?.id as string,
                        body: {
                            ...checkIdToCart,
                            count:
                                (checkIdToCart?.count as number) + 1 > product.quantity
                                    ? product.quantity
                                    : (checkIdToCart?.count as number) + 1,
                            totalPrice: ((checkIdToCart?.count as number) + 1) * (checkIdToCart?.price as number)
                        } as CartType
                    },
                    {
                        onSuccess: () => {
                            toast.success(toastNotify.productDetail.addtoCartSuccess, { autoClose: 3000 })
                            refetch()
                        }
                    }
                )
            }
            return
        }
        navigate(path.login)
    }

    console.log(checkIdToCart)
    return (
        <div
            className={`pb-[32px] border-2 ${border} rounded-[12px] truncate pt-1 pl-1`}
            onMouseEnter={handleFeature}
            onMouseLeave={handleFeatureReset}
        >
            <Link to={`${path.home}${generateNameId({ name: product.title, id: product.id })}`}>
                <img
                    src={featureImage || product.featured_image}
                    alt=''
                    className={`w-[260px] absolute object-cover cursor-pointer animate__animated ${animationClass}`}
                />
            </Link>
            <div className='w-full px-[14px] pt-[21px] mt-[200px]'>
                <p className='text-[14px] text-[#181b23] font-[600] opacity-[0.9] hover:text-[#ff3237] transition duration-300 ease-in cursor-pointer'>
                    {product.title}
                </p>
                <div className='w-full h-[1px] bg-[#ededed] mt-[22px]'></div>
                <p className='text-lg font-[600] text-[#ff3237] mt-[28px]'>{formatCurrency(Number(product.price))}</p>
                <Button
                    className='w-full p-[12px] bg-[#ff3237] rounded-[30px] mt-[24px] text-white flex items-center justify-center gap-1 hover:shadow-[0_0_20px_5px_rgba(255,50,55,0.3)] transition duration-200 ease-in'
                    onClick={addToCart}
                >
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
    )
}
