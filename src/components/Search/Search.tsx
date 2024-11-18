import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMemo, useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'

import Popover from '../Popover'
import styles from './Search.module.css'
import { useQuery } from '@tanstack/react-query'
import productApi from '~/apis/product.api'
import { schema, Schema } from '~/utils/rules'
import { formatCurrency, generateNameId } from '~/utils/utils'
import { path } from '~/constants/path'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
type FormData = Pick<Schema, 'search'>
const nameSchema = schema.pick(['search'])
export default function Search() {
    const [productSearch, setProductSearch] = useState<string>('')
    const { register, handleSubmit, reset } = useForm<FormData>({
        defaultValues: {
            search: ''
        },
        resolver: yupResolver(nameSchema)
    })

    const { data: productListData } = useQuery({
        queryKey: ['product'],
        queryFn: () => productApi.getProductList()
    })

    const productsData = productListData?.data
    const searchProduct = useMemo(() => {
        return productsData?.filter((product) => product.title.slice(0, 2) === productSearch.toUpperCase())
    }, [productSearch, productsData])

    const onSubmitSearch = handleSubmit((data) => {
        const { search } = data
        setProductSearch(search)
    })

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductSearch(event.target.value)
    }

    return (
        <div>
            <Popover
                className='relative cursor-pointer hover:text-[#b80319] transition duration-300 ease-in-out pb-5 px-3'
                renderPopover={
                    <div className='rounded-md w-[500px] h-[40px] bg-[#b80319]'>
                        <form className='flex flex-shrink-0 w-full h-full items-center' onSubmit={onSubmitSearch}>
                            <input
                                type='text'
                                className={cx(
                                    'text-sm font-[400] rounded-md w-full h-full bg-transparent outline-none border-none text-white pl-[15px]',
                                    { 'search-input': true }
                                )}
                                placeholder='Tìm kiếm ...'
                                autoComplete='off'
                                {...register('search')}
                                onChange={(event) => handleSearch(event)}
                            />
                            <div className='w-[30px] text-center cursor-pointer text-white'>
                                <FontAwesomeIcon className='text-[15px]' icon={faMagnifyingGlass} />
                            </div>
                        </form>
                        <div className='bg-white w-full shadow-md'>
                            {searchProduct &&
                                searchProduct.map((product) => (
                                    <div className='' key={product.id}>
                                        <Link
                                            to={`${path.home}${generateNameId({ name: product.title, id: product.id })}`}
                                            className='flex w-full items-center ease-in'
                                        >
                                            <img
                                                src={product.featured_image}
                                                alt=''
                                                className='w-[50px] hover:bg-slate-300 transition duration-200 ease-in cursor-pointer'
                                            />
                                            <div className='flex items-center ml-1 hover:bg-gradient-to-r from-[#f9f9f9] to-[#e7e2e2d8] transition duration-200 justify-between text-sm w-full h-[40px] cursor-pointer pr-2'>
                                                <p className=''>{product.title}</p>
                                                <p className=''>{formatCurrency(product.price)}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            {productSearch && searchProduct?.length === 0 && (
                                <div className='flex w-full items-center ease-in'>
                                    <div className='flex items-center ml-1 hover:bg-gradient-to-r from-[#f9f9f9] to-[#e7e2e2d8] transition duration-200 justify-between text-sm w-full h-[40px] cursor-pointer pr-2'>
                                        <p className='ml-[10px]'>Không tìm thấy sản phẩm phù hợp</p>
                                    </div>
                                </div>
                            )}
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
                setProductSearch={setProductSearch}
                reset={reset}
            >
                <FontAwesomeIcon className='text-[17px] ' icon={faMagnifyingGlass} />
            </Popover>
        </div>
    )
}
