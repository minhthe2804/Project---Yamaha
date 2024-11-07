import { useMutation, useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import keyBy from 'lodash/keyBy'
import { useContext, useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { cartApi } from '~/apis/cart.api'
import BreadCrumb from '~/components/BreadCrumb'
import Button from '~/components/Button'
import QuantityController from '~/components/QuantityController'
import { breadCrumb } from '~/constants/breadCrumb'
import { path } from '~/constants/path'
import { toastNotify } from '~/constants/toastNotify'
import { AppContext } from '~/contexts/app.context'
import { CartType } from '~/types/cart.type'
import { formatCurrency, generateNameId } from '~/utils/utils'

export default function Cart() {
    const { extendedCart, setExtendedCart } = useContext(AppContext)
    const [update, setUpdate] = useState<string[]>([])
    const { data: productInCartData, refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: () => cartApi.getCart()
    })

    const navigate = useNavigate()
    const productToCart = productInCartData?.data

    const updateCartMutation = useMutation({
        mutationFn: (bodyData: { id: string; body: CartType }) => cartApi.updateCart(bodyData.id, bodyData.body)
    })

    const deleteCartMutation = useMutation({
        mutationFn: (id: string) => cartApi.deleteCart(id),
        onSuccess: () => {
            refetch()
        }
    })

    useEffect(() => {
        setExtendedCart((prev) => {
            const extendedCartObject = keyBy(prev, 'id')
            return (
                productToCart?.map((cart) => {
                    return {
                        ...cart,
                        checked: Boolean(extendedCartObject[cart.id]?.checked)
                    }
                }) || []
            )
        })
    }, [productToCart, setExtendedCart])

    useEffect(() => {
        return () => {
            history.replaceState(null, '')
        }
    }, [])

    const isAllChecked = useMemo(
        () => (extendedCart.length > 0 ? extendedCart.every((cart) => cart.checked) : false),
        [extendedCart]
    )

    const checkedCart = useMemo(() => extendedCart.filter((cart) => cart.checked), [extendedCart])
    const checkedCartCount = checkedCart.length

    const totalCheckedCartPrice = useMemo(
        () =>
            checkedCart.reduce((total, cart) => {
                return total + cart.price * cart.count
            }, 0),
        [checkedCart]
    )

    const updateCart = useMemo(() => extendedCart.filter((cart) => update.includes(cart.id)), [extendedCart, update])

    const handleCheck = (cartIndex: string | number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked
        setExtendedCart((prev) => {
            return prev.map((cart) => {
                const isChecked = cart.id === cartIndex ? checked : cart.checked
                return {
                    ...cart,
                    checked: isChecked
                }
            })
        })
    }

    const handleCheckAll = () => {
        setExtendedCart((prev) =>
            prev.map((cart) => ({
                ...cart,
                checked: !isAllChecked
            }))
        )
    }

    const handleQuantity = (cartIndex: string, value: number) => {
        setUpdate((prev) => (prev.includes(cartIndex as string) ? prev : [...prev, cartIndex as string]))

        setExtendedCart((prev) => {
            return prev.map((cart) => {
                const newCount = cart.id === cartIndex ? value : cart.count
                return {
                    ...cart,
                    count: newCount
                }
            })
        })
    }

    const handleUpdate = () => {
        updateCart.map((cart) =>
            updateCartMutation.mutate(
                { id: cart.id, body: { ...cart, totalPrice: cart.count * cart.price } },
                { onSuccess: () => refetch() }
            )
        )

        toast.success(toastNotify.cart.updateCart, { autoClose: 2000 })
    }

    const handleDelete = (id: string) => {
        deleteCartMutation.mutate(id)
        toast.success(toastNotify.cart.deleteCart, { autoClose: 2000 })
    }

    const handleManyCart = () => {
        if (checkedCart.length > 0) {
            checkedCart.map((cart) =>
                deleteCartMutation.mutate(cart.id, {
                    onSuccess: () => {
                        refetch()
                    }
                })
            )
            toast.success(toastNotify.cart.deleteCart, { autoClose: 2000 })
        }
    }

    const handleCheckOut = () => {
        navigate(path.checkout, {
            state: {
                checkedCart: checkedCart
            }
        })
    }

    return (
        <div className='pb-[70px]'>
            <BreadCrumb heading={breadCrumb.cart.heading} title={breadCrumb.cart.title} />
            <div className='max-w-[1198px] mx-auto'>
                <div className='w-full border-[2px] border-[#817f7f] uppercase text-[18px] text-[#000bff] font-[600] py-[20px] pl-[11px]'>
                    Giỏ Hàng
                </div>

                {extendedCart.length > 0 ? (
                    <>
                        <div className='mt-[30px] border-[2px] border-[#817f7f] pt-[29px] pb-[39px] px-[18px]'>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-6'>
                                    <p className='text-center text-[15px] text-[#333333]'>
                                        Thông tin chi tiết sản phẩm
                                    </p>
                                </div>
                                <div className='col-span-6'>
                                    <div className='grid grid-cols-6 text-center text-[15px] text-[#333333]'>
                                        <div className='col-span-2'>Đơn giá</div>
                                        <div className='col-span-2'>Số lượng</div>
                                        <div className='col-span-2'>Tổng giá</div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[63px]'>
                                {extendedCart.map((cart) => (
                                    <div className='grid grid-cols-12' key={cart.id}>
                                        <div className='col-span-6 pb-[40px]'>
                                            <div className='flex gap-3'>
                                                <div className='flex items-center'>
                                                    <input
                                                        type='checkbox'
                                                        className='h-5 w-5 accent-[#f35539]'
                                                        checked={cart.checked}
                                                        onChange={handleCheck(cart.id)}
                                                    />
                                                </div>
                                                <div className='w-[240px] h-[200px]'>
                                                    <Link
                                                        to={`${path.home}${generateNameId({ name: cart.title, id: cart.id })}`}
                                                    >
                                                        <img src={cart.previewImage} alt='' className='w-full' />
                                                    </Link>
                                                </div>
                                                <div className='pl-[30px] pt-[10px]'>
                                                    <Link
                                                        to={`${path.home}${generateNameId({ name: cart.title, id: cart.id })}`}
                                                        className='group'
                                                    >
                                                        <p className='text-[14px] text-[#000bff] font-[600] group-hover:text-[#ff3237] transtion duration-200 ease-in'>
                                                            {cart.title}
                                                        </p>
                                                    </Link>
                                                    <p className='mt-[31px] text-[15px] text-[#333333]'>
                                                        Phiên bản: {cart.version}
                                                    </p>
                                                    <p className='mt-[31px] text-[15px] text-[#333333]'>
                                                        Thương hiệu: {cart.vendor}
                                                    </p>
                                                    <p
                                                        className='mt-[2px] text-[13px] text-[#ff3237] cursor-pointer hover:opacity-[0.8] transition duration-200 ease-in'
                                                        onClick={() => handleDelete(cart.id)}
                                                    >
                                                        Xóa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-span-6'>
                                            <div className='grid grid-cols-6'>
                                                <div className='col-span-2 '>
                                                    <div className='flex justify-center mt-[60px]'>
                                                        <p className='text-[16px] text-[#ff3237] font-[600]'>
                                                            {formatCurrency(cart.price)}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='col-span-2'>
                                                    <div className='mt-[55px]'>
                                                        <div className='flex justify-center'>
                                                            <QuantityController
                                                                max={cart.quantity}
                                                                value={cart.count}
                                                                onDecrease={(value) => handleQuantity(cart.id, value)}
                                                                onIncrease={(value) => handleQuantity(cart.id, value)}
                                                                onType={(value) => handleQuantity(cart.id, value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-span-2 '>
                                                    <div className='flex justify-center mt-[60px]'>
                                                        <p className='text-[16px] text-[#ff3237] font-[600]'>
                                                            {formatCurrency(cart.totalPrice)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='mt-[40px] border-[2px] border-[#817f7f] pt-[29px] pb-[39px] px-[18px]'>
                            <div className='grid grid-cols-12 '>
                                <div className='col-span-6'>
                                    <div className='flex items-center gap-5 text-[#333333] text-[15px]'>
                                        <input
                                            type='checkbox'
                                            className='h-5 w-5 accent-[#f35539]'
                                            checked={isAllChecked}
                                            onChange={handleCheckAll}
                                        />
                                        <p>Chọn tất cả ({checkedCartCount})</p>
                                        <p
                                            className='cursor-pointer hover:text-[#ff3237] transition duration-200 ease-in'
                                            onClick={handleManyCart}
                                        >
                                            Xóa
                                        </p>
                                    </div>
                                </div>
                                <div className='col-span-6'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-[17px] text-[16px] font-[550] justify-end'>
                                            <p>Tổng thanh toán ({checkedCartCount} sản phẩm):</p>
                                            <p className='mt-[-4px] text-[22px] text-[#ff3237]'>
                                                {formatCurrency(totalCheckedCartPrice)}
                                            </p>
                                        </div>
                                        <div className='flex gap-2 justify-end mt-[15px]'>
                                            <Button
                                                className={classNames(
                                                    'w-[126px] py-[9px] bg-[#ff3237] rounded-[4px] text-[14px] font-[600] text-[#333333] hover:text-white transition duration-200 ease-in flex items-center justify-center',
                                                    {
                                                        'w-[126px] py-[9px] bg-[#ff3237] opacity-[0.8] rounded-[30px] text-[14px] font-[600] text-[#333333] flex items-center justify-center':
                                                            updateCartMutation.isPending
                                                    }
                                                )}
                                                onClick={handleUpdate}
                                                isLoading={updateCartMutation.isPending}
                                                disabled={updateCartMutation.isPending}
                                            >
                                                CẬP NHẬT
                                            </Button>
                                            <Button
                                                className={classNames(
                                                    'w-[148px] py-[9px] bg-[#ff3237] rounded-[4px] text-[14px] font-[600] text-[#333333] hover:text-white transition duration-200 ease-in flex items-center justify-center',
                                                    {
                                                        // 'w-[148px] py-[9px] bg-[#ff3237] opacity-[0.8] rounded-[30px] text-[14px] font-[600] text-[#333333] flex items-center justify-center pointer-events-none':
                                                        //     addToCartMutation.isPending
                                                    }
                                                )}
                                                onClick={handleCheckOut}
                                                // isLoading={addToCartMutation.isPending}
                                                // disabled={addToCartMutation.isPending}
                                            >
                                                THANH TOÁN
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='flex flex-col items-center justify-center mt-[100px]'>
                        <img
                            className='py-2 w-[300px] grayscale'
                            src='https://simbaeshop.com/images/cart-empty.png'
                            alt=''
                        />

                        <p className='mt-[20px] text-[20px] font-[600] text-[#333333] uppercase opacity-[0.8]'>
                            Giỏ hàng của bạn đang trống
                        </p>

                        <Link
                            to={path.home}
                            className=' mt-[20px] block w-[120px] py-[8px] bg-red-500 text-center rounded-[4px] text-[15px] text-white font-semibold hover:opacity-[0.9] transition duration-200 ease-in'
                        >
                            MUA NGAY
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
