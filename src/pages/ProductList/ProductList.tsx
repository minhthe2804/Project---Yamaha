import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import productApi from '~/apis/product.api'
import BreadCrumb from '~/components/BreadCrumb'
import Product from '~/components/Products/components/Product'
import { priceRanges, types } from '~/constants/asideFilter'
import { breadCrumb } from '~/constants/breadCrumb'
import { Product as ProductType } from '~/types/products.type'

const initialPage = [0, 12]
export default function ProductList() {
    const [productData, setProductData] = useState<ProductType[]>([])
    const [pages, setPages] = useState<number[]>()
    const [active, setActive] = useState<number>(0)
    const [typeProduct, setTypeProduct] = useState<string>('')
    const [checkType, setCheckType] = useState<number | null>()
    const [checkPriceRange, setCheckPriceRange] = useState<number | null>()
    const [minPrice, setMinPrice] = useState<number | null>(null)
    const [maxPrice, setMaxPrice] = useState<number | null>(null)
    const [implement, setImplement] = useState<boolean>(false)

    const { data: productListData } = useQuery({
        queryKey: ['product'],
        queryFn: () => productApi.getProductList()
    })

    useEffect(() => {
        if (productListData) {
            setProductData(productListData?.data)
        }
    }, [productListData])

    const handleCheckPriceRange = (index: number, priceMin: number, priceMax: number, enabled: boolean) => {
        setCheckPriceRange(index)
        if (productListData) {
            setMinPrice(priceMin)
            setMaxPrice(priceMax)
            setImplement(enabled)
            if (typeProduct) {
                const filterTypeProducts = productListData.data.filter((product) => product.type === typeProduct) // van de loi o day
                const filteredProducts = filterTypeProducts.filter((product) =>
                    enabled ? product.price >= priceMin && product.price <= priceMax : product.price >= priceMax
                )
                const sortedProducts = filteredProducts.sort((a, b) => {
                    return a.price - b.price
                })
                setProductData(sortedProducts)
                return
            }
            const filteredProducts = productListData.data.filter((product) =>
                enabled ? product.price >= priceMin && product.price <= priceMax : product.price >= priceMax
            )
            const sortedProducts = filteredProducts.sort((a, b) => {
                return a.price - b.price
            })
            setProductData(sortedProducts)
        }
    }

    const handleCheckType = (index: number, type: string) => {
        setCheckType(index)
        setPages([0, 24])
        if (productListData) {
            const filterTypeProducts = productListData.data.filter((product) => product.type === type)
            const filteredProducts = filterTypeProducts.filter((product) =>
                implement
                    ? product.price >= Number(minPrice) && product.price <= Number(maxPrice)
                    : product.price >= Number(maxPrice)
            )
            const sortedProducts = filteredProducts.sort((a, b) => {
                return a.price - b.price
            })
            setProductData(sortedProducts)
            setTypeProduct(type)
        }
    }

    const handleReset = () => {
        if (productListData) {
            setTypeProduct('')
            setCheckType(null)
            setCheckPriceRange(null)
            setMinPrice(null)
            setMaxPrice(null)
            setImplement(false)
            setPages([0, 12])
            setActive(0)
            setProductData(productListData?.data.slice(0, 12))
        }
    }

    const handlePage = (page: number, index: number) => {
        if (productListData) {
            setActive(index)
            setProductData(productListData?.data)
            setPages(page === 1 ? [0, 12] : [13, 19])
        }
    }

    console.log(productData)
    return (
        <div>
            <BreadCrumb heading={breadCrumb.productList.heading} title={breadCrumb.productList.title} />
            <div className='max-w-[1198px] mx-auto'>
                <div className='grid grid-cols-12 gap-[33px] pb-[50px]'>
                    <div className='col-span-3 '>
                        <div className='w-full border-[2px] border-[#817f7f] rounded-[4px]'>
                            <div className='px-[9px] pt-[19px]'>
                                <h2
                                    className='pl-[10px] text-[15px] font-[550] text-[#000bff] cursor-pointer'
                                    onClick={handleReset}
                                >
                                    DANH MỤC
                                </h2>
                                <div className='w-full h-[1px] bg-[#817f7f] mt-[10px]'></div>

                                <div className='pl-[10px] text-[15px] text-black mt-[10px] hover:text-[#ff3237] transition duration-200 ease-in'>
                                    <p className='text-[#000bff] font-[550] uppercase'>Loại sản phẩm</p>
                                    <div className='mt-[24px]'>
                                        {types.map((type, index) => (
                                            <div
                                                className='text-[14.5px] flex items-center gap-3 text-[#333333] pb-[6px]'
                                                key={index}
                                            >
                                                <input
                                                    type='checkbox'
                                                    className='h-4 w-4 accent-[#f35539]'
                                                    checked={checkType === index}
                                                    onChange={() => handleCheckType(index, type)}
                                                />
                                                <p>{type}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='w-full h-[1px] bg-[#817f7f] mt-[7px]'></div>

                                <div className='pl-[10px] text-[15px] text-black mt-[10px] hover:text-[#ff3237] transition duration-200 ease-in'>
                                    <p className='text-[#000bff] font-[550] uppercase'>Khoảng Giá</p>
                                    <div className='mt-[24px]'>
                                        {priceRanges.map((priceRange, index) => (
                                            <div
                                                className='text-[14.5px] flex items-center gap-3 text-[#333333] pb-[6px]'
                                                key={index}
                                            >
                                                <input
                                                    type='checkbox'
                                                    className='h-4 w-4 accent-[#f35539]'
                                                    checked={checkPriceRange === index}
                                                    onChange={() =>
                                                        handleCheckPriceRange(
                                                            index,
                                                            priceRange.priceMin,
                                                            priceRange.priceMax,
                                                            priceRange.enabled
                                                        )
                                                    }
                                                />
                                                <p>{priceRange.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-9 '>
                        <div className='w-full flex items-center border-[2px] border-[#817f7f] rounded-[4px] py-[15px] px-[11px]'>
                            <p className='uppercase text-[15px] font-[550] text-[#000bff]'>Tất cả sản phẩm</p>
                            <div className='flex items-center gap-3 ml-auto'>
                                <p className='text-[14px] text-[#333333]'>Sắp xếp</p>
                                <select className='w-[205px] py-[6px] outline-none border-[1px] border-[#817f7f] rounded-[30px] text-[14.5px] px-2 text-[#333333]'>
                                    <option value='T'>Tùy chọn</option>
                                    <option value='s'>Sản phẩm bán chạy</option>
                                    <option value='s'>Theo bảng chữ cái từ A-Z</option>
                                    <option value='s'>Theo bảng chữ cái từ Z-A</option>
                                    <option value='s'>Giá từ thấp đến cao</option>
                                    <option value='s'>Giá từ cao đến thấp</option>
                                    <option value='s' selected>
                                        Mới nhất
                                    </option>
                                    <option value='s'>Cũ nhất</option>
                                </select>
                            </div>
                        </div>
                        <div className='grid grid-cols-9 mt-[33px] gap-[32px]'>
                            {productData.slice(...(pages || initialPage)).map((product) => (
                                <div className='col-span-3' key={product.id}>
                                    <Product product={product} border='border-[#817f7f]' />
                                </div>
                            ))}
                        </div>
                        {productData.slice(...(pages || initialPage)).length > 0 && !types.includes(typeProduct) && (
                            <div className='w-full flex items-center justify-center border-[2px] border-[#817f7f] rounded-[4px] py-[10px] px-[11px] mt-[30px]'>
                                <div className='w-full flex items-center justify-center gap-3'>
                                    {[1, 2].map((page, index) => (
                                        <div
                                            className={classNames(
                                                'w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-[#ff3237] hover:text-white transition duration-200 ease-in cursor-pointer',
                                                {
                                                    'bg-[#ff3237] text-white': active === index,
                                                    'bg-slate-200 text-black': active !== index
                                                }
                                            )}
                                            key={index}
                                            onClick={() => handlePage(page, index)}
                                        >
                                            {page}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
