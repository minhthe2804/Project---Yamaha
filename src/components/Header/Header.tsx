import { path } from '~/constants/path'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Popover from '../Popover'
import { navHeader } from '~/constants/navHeader'
import styles from './Header.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Header() {
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
                                initialOpen
                            >
                                <FontAwesomeIcon className='text-[17px] ' icon={faMagnifyingGlass} />
                            </Popover>
                            <Popover
                                className='cursor-pointer hover:text-[#b80319] transition duration-300 ease-in-out pb-5 px-3'
                                renderPopover={
                                    <div className='relative rounded-md w-[200px] h-[140px] bg-[#b80319]'>
                                        <div className='flex flex-col text-[13.5px] font-[500] text-white pl-[18px] gap-5 h-full justify-center'>
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
                                    <div className='relative rounded-md w-[284px] bg-[#b80319]'>
                                        {/* Products in cart */}
                                        {/* <div className='px-1'>
                                                    <div className='flex w-full items-center pt-2 pb-4'>
                                                        <p className='text-sm text-white font-semibold'>
                                                            Giỏ hàng của tôi (1 sản phẩm)
                                                        </p>
                                                        <svg
                                                            className='svg-inline--fa fa-times fa-w-12 text-white ml-auto'
                                                            aria-hidden='true'
                                                            data-prefix='fa'
                                                            data-icon='times'
                                                            role='img'
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            viewBox='0 0 384 512'
                                                            data-fa-i2svg
                                                        >
                                                            <path
                                                                fill='currentColor'
                                                                d='M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z'
                                                            />
                                                        </svg>
                                                    </div>
        
                                                    <div className='flex w-full items-start'>
                                                        <Link className='' to={path.productDetail}>
                                                            <img
                                                                src='https://product.hstatic.net/200000281285/product/exciter_150_rc_-_do_den_884a96c87c6a4735abfae1ad2ece623e_small.png'
                                                                alt=''
                                                                className='w-[80px]'
                                                            />
                                                        </Link>
        
                                                        <div className='flex flex-col text-xs text-white font-[200] pl-4 pb-4'>
                                                            <Link
                                                                to={path.productDetail}
                                                                className='text-sm font-semibold pb-1 hover:text-[#fd515c] transition duration-300 ease-in'
                                                            >
                                                                EXCITER 150
                                                            </Link>
                                                            <p>Bản RC / Đỏ Nhám</p>
                                                            <p>Số lượng: 1</p>
                                                            <p>Giá/sp: 44,000,000₫</p>
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
                                                        >
                                                            <path
                                                                fill='currentColor'
                                                                d='M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z'
                                                            />
                                                        </svg>
                                                    </div>
        
                                                    <div className='flex w-full items-start pb-4'>
                                                        <Link className='' to={path.productDetail}>
                                                            <img
                                                                src='https://product.hstatic.net/200000281285/product/exciter_150_rc_-_do_den_884a96c87c6a4735abfae1ad2ece623e_small.png'
                                                                alt=''
                                                                className='w-[80px]'
                                                            />
                                                        </Link>
        
                                                        <div className='flex flex-col text-xs text-white font-[200] pl-4'>
                                                            <Link
                                                                to={path.productDetail}
                                                                className='text-sm font-semibold pb-1 hover:text-[#fd515c] transition duration-300 ease-in'
                                                            >
                                                                EXCITER 150
                                                            </Link>
                                                            <p>Bản RC / Đỏ Nhám</p>
                                                            <p>Số lượng: 1</p>
                                                            <p>Giá/sp: 44,000,000₫</p>
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
                                                        >
                                                            <path
                                                                fill='currentColor'
                                                                d='M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z'
                                                            />
                                                        </svg>
                                                    </div>
                                                </div> */}

                                        <div className='px-1 pb-2'>
                                            <div className='flex w-full pt-2'>
                                                <p className='text-sm text-white font-semibold'>Giỏ hàng trống</p>
                                                <svg
                                                    className='svg-inline--fa fa-times fa-w-12 text-white ml-auto'
                                                    aria-hidden='true'
                                                    data-prefix='fa'
                                                    data-icon='times'
                                                    role='img'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 384 512'
                                                    data-fa-i2svg
                                                >
                                                    <path
                                                        fill='currentColor'
                                                        d='M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z'
                                                    />
                                                </svg>
                                            </div>
                                            <img
                                                className='py-2'
                                                src='https://simbaeshop.com/images/cart-empty.png'
                                                alt=''
                                            />
                                        </div>
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
                                <FontAwesomeIcon className='text-[17px]' icon={faCartShopping} />
                            </Popover>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
