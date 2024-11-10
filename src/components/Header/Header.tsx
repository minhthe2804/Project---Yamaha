import { path } from '~/constants/path'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useMutation, useQuery } from '@tanstack/react-query'
import classNames from 'classnames/bind'
import { useContext } from 'react'
import { generateNameId } from '~/utils/utils'
import Popover from '../Popover'
import { navHeader } from '~/constants/navHeader'
import styles from './Header.module.css'
import { AppContext } from '~/contexts/app.context'
import { clearLS } from '~/utils/auth'
import { toast } from 'react-toastify'
import { toastNotify } from '~/constants/toastNotify'
import { cartApi } from '~/apis/cart.api'
import { formatCurrency } from '~/utils/utils'
import { checkoutApi } from '~/apis/checkout.api'

const cx = classNames.bind(styles)
const MAX_CART = 3
export default function Header() {
    const { isAuthenticated, profile, setIsAuthenticated, setProfile, setIsCheckout } = useContext(AppContext)

    const { data: productInCartData, refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: () => cartApi.getCart()
    })

    const deleteCartMutation = useMutation({
        mutationFn: (id: string) => cartApi.deleteCart(id),
        onSuccess: () => {
            refetch()
        }
    })

    const { data: checkoutProductData, refetch: refresh } = useQuery({
        queryKey: ['checkout'],
        queryFn: () => checkoutApi.getCheckout()
    })

    const deleteProductToCheckoutMutation = useMutation({
        mutationFn: (id: string) => checkoutApi.deleteCheckout(id),
        onSuccess: () => {
            refresh()
        }
    })

    const productToCart = productInCartData?.data
    const checkoutProduct = checkoutProductData?.data
    const productDataCount = productToCart?.length

    const handleDelete = (id: string) => {
        deleteCartMutation.mutate(id)
        toast.success(toastNotify.cart.deleteCart, { autoClose: 2000 })
    }

    const handleLogout = () => {
        clearLS()
        setIsAuthenticated(false)
        setProfile(null)
        setIsCheckout(false)
        productToCart?.map((cart) => deleteCartMutation.mutate(cart.id))
        checkoutProduct?.map((checkout) => deleteProductToCheckoutMutation.mutate(checkout.id))
        toast.success(toastNotify.logOut.logOutSuccess, { autoClose: 3000 })
    }

    return (
        <header className='bg-[#ff3237]'>
            <div className='max-w-[1268px] mx-auto'>
                <div className='grid grid-cols-12 pt-[13px] pb-[17px]'>
                    <Link to={path.home} className='col-span-5'>
                        <img
                            src='https://theme.hstatic.net/200000281285/1000677821/14/logo.png?v=848'
                            alt=''
                            className='w-[150px] h-[50px]'
                        />
                    </Link>
                    <nav className='col-span-5 '>
                        <ul className='flex pt-[17px] pl-[33px]'>
                            {navHeader.map((nav, index) =>
                                !nav.href ? (
                                    <li className='pl-[20px] flex items-center group' key={index}>
                                        <Link
                                            to={nav.path}
                                            className='text-sm font-[550] text-white group-hover:text-[#b80319] transition duration-300 ease-in-out'
                                        >
                                            {nav.name}
                                        </Link>
                                    </li>
                                ) : (
                                    <li className='pl-[20px] flex items-center group' key={index}>
                                        <a
                                            href={nav.href}
                                            className='text-sm font-[550] text-white group-hover:text-[#b80319] transition duration-300 ease-in-out'
                                        >
                                            {nav.name}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </nav>
                    <div className='col-span-2'>
                        <div className='mt-[17px] ml-[95px] flex text-white '>
                            <Popover
                                className='relative cursor-pointer hover:text-[#b80319] transition duration-300 ease-in-out pb-5 px-3'
                                renderPopover={
                                    <div className='rounded-md w-[500px] h-[40px] bg-[#b80319]'>
                                        <form className='flex flex-shrink-0 w-full h-full items-center'>
                                            <input
                                                type='text'
                                                className={cx(
                                                    'text-sm font-[400] rounded-md w-full h-full bg-transparent outline-none border-none text-white pl-[15px]',
                                                    { 'search-input': true }
                                                )}
                                                placeholder='Tìm kiếm ...'
                                            />
                                            <div className='w-[30px] text-center cursor-pointer text-white'>
                                                <FontAwesomeIcon className='text-[15px]' icon={faMagnifyingGlass} />
                                            </div>
                                        </form>
                                        <div className='bg-white w-full shadow-md'>
                                            {[0, 0, 0].map((_, index) => (
                                                <div className='flex w-full items-center ease-in' key={index}>
                                                    <img
                                                        src='https://product.hstatic.net/200000281285/product/r15_-_den_nham_a2c029016f4d4fa2a27994fc2fd09110_icon.png'
                                                        alt=''
                                                        className='w-[50px] hover:bg-slate-300 transition duration-200 ease-in cursor-pointer'
                                                    />
                                                    <div className='flex items-center ml-1 hover:bg-gradient-to-r from-[#f9f9f9] to-[#e7e2e2d8] transition duration-200 justify-between text-sm w-full h-[40px] cursor-pointer pr-2'>
                                                        <p className=''>Yamaha</p>
                                                        <p className=''>10.000.000đ</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                }
                                placement='bottom-end'
                                as='div'
                                blogTop={75}
                                blogRight={135}
                                arrowRight={15}
                                arrowTop={0}
                                transformOrigin='410'
                            >
                                <FontAwesomeIcon className='text-[17px] ' icon={faMagnifyingGlass} />
                            </Popover>
                            <Popover
                                className='cursor-pointer hover:text-[#b80319] transition duration-300 ease-in-out pb-5 px-3'
                                renderPopover={
                                    <div className='relative rounded-md w-[200px] h-[140px] bg-[#b80319]'>
                                        <div className='flex flex-col text-[13.5px] font-[500] text-white pl-[18px] gap-5 h-full justify-center'>
                                            {isAuthenticated && (
                                                <>
                                                    <Link
                                                        to={path.account}
                                                        className='uppercase hover:translate-x-[10px] hover:text-[#ff7f82] transition duration-300 ease-in '
                                                    >
                                                        {`Chào, ${profile?.username}`}
                                                    </Link>
                                                    <button
                                                        className='text-left uppercase hover:translate-x-[10px] hover:text-[#ff7f82] transition duration-300 ease-in '
                                                        onClick={handleLogout}
                                                    >
                                                        Thoát
                                                    </button>
                                                </>
                                            )}

                                            {!isAuthenticated && (
                                                <>
                                                    <Link
                                                        to={path.login}
                                                        className='hover:translate-x-[10px] hover:text-[#ff7f82] transition duration-300 ease-in '
                                                    >
                                                        ĐĂNG NHẬP
                                                    </Link>
                                                    <Link
                                                        to={path.register}
                                                        className='hover:translate-x-[10px] hover:text-[#ff7f82] transition duration-300 ease-in '
                                                    >
                                                        ĐĂNG KÍ
                                                    </Link>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                }
                                placement='bottom-end'
                                as='div'
                                blogTop={75}
                                blogRight={100}
                                arrowRight={10}
                                arrowTop={0}
                                transformOrigin='190'
                            >
                                <FontAwesomeIcon className='text-[17px]' icon={faUser} />
                            </Popover>
                            <Popover
                                className='cursor-pointer hover:text-[#b80319] transition duration-300 ease-in-out pb-5 px-3'
                                renderPopover={
                                    <div className='relative rounded-md w-[284px] bg-[#b80319] pb-4'>
                                        {productToCart && productToCart.length > 0 ? (
                                            <div className='px-1'>
                                                <div className='flex w-full items-center pt-2'>
                                                    <p className='text-sm text-white font-semibold'>
                                                        Giỏ hàng của tôi ({productDataCount})
                                                    </p>
                                                </div>

                                                {productToCart &&
                                                    productToCart.slice(0, MAX_CART).map((cart, index) => (
                                                        <div key={index}>
                                                            <div className='flex w-full items-start pt-4'>
                                                                <Link
                                                                    className=''
                                                                    to={`${path.home}${generateNameId({ name: cart.title, id: cart.id })}`}
                                                                >
                                                                    <img
                                                                        src={cart.previewImage}
                                                                        alt=''
                                                                        className='w-[80px]'
                                                                    />
                                                                </Link>

                                                                <div className='flex flex-col text-xs text-white font-[200] pl-4 pb-4'>
                                                                    <Link
                                                                        to={`${path.home}${generateNameId({ name: cart.title, id: cart.id })}`}
                                                                        className='text-sm font-semibold pb-1 hover:text-[#fd515c] transition duration-300 ease-in'
                                                                    >
                                                                        {cart.title}
                                                                    </Link>
                                                                    <p>Phiên bản: {cart.version}</p>
                                                                    <p>Số lượng: {cart.count}</p>
                                                                    <p>Giá/sp: {formatCurrency(cart.price)}</p>
                                                                </div>
                                                                <svg
                                                                    className='svg-inline--fa fa-times fa-w-12 text-[#fd515c] ml-auto mt-[22px] cursor-pointer'
                                                                    aria-hidden='true'
                                                                    data-prefix='fa'
                                                                    data-icon='times'
                                                                    role='img'
                                                                    xmlns='http://www.w3.org/2000/svg'
                                                                    viewBox='0 0 384 512'
                                                                    data-fa-i2svg
                                                                    onClick={() => handleDelete(cart.id)}
                                                                >
                                                                    <path
                                                                        fill='currentColor'
                                                                        d='M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z'
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div className='w-full border-t-[1px] border-[#817f7f] border-dashed'></div>
                                                        </div>
                                                    ))}

                                                <div className='flex gap-2 justify-center mt-[15px]'>
                                                    <Link
                                                        to={path.cart}
                                                        className='w-[131px] py-[9px] bg-[#ff3237] rounded-[4px] text-[14px] font-[600] text-white  flex items-center justify-center'
                                                    >
                                                        XEM GIỎ HÀNG
                                                    </Link>

                                                    <Link
                                                        to={path.checkout}
                                                        className='w-[131px] py-[9px] bg-[#ff3237] rounded-[4px] text-[14px] font-[600] text-white  flex items-center justify-center'
                                                    >
                                                        THANH TOÁN
                                                    </Link>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='px-1 pb-2'>
                                                <div className='flex w-full pt-2'>
                                                    <p className='text-sm text-white font-semibold'>Giỏ hàng trống</p>
                                                </div>
                                                <img
                                                    className='py-2'
                                                    src='https://simbaeshop.com/images/cart-empty.png'
                                                    alt=''
                                                />
                                            </div>
                                        )}
                                    </div>
                                }
                                placement='bottom-end'
                                as='div'
                                blogTop={75}
                                blogRight={60}
                                arrowRight={10}
                                arrowTop={0}
                                transformOrigin='200'
                            >
                                <Link to={path.cart} className='relative'>
                                    <FontAwesomeIcon className=' text-[17px]' icon={faCartShopping} />
                                    {productToCart && productToCart.length > 0 && (
                                        <span className='absolute left-[12px] top-[-12px] rounded-full bg-white w-[16px] h-[16px] text-[12px] text-[#ff3237] text-center'>
                                            {productDataCount}
                                        </span>
                                    )}
                                </Link>
                            </Popover>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
