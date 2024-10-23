import Categories from './components/Categories'
import Product from './components/Product'
import ProductTitle from './components/ProductTitle'

export default function Products() {
    return (
        <div className='mt-[180px] max-w-[1198px] mx-auto'>
            <ProductTitle />
            <p className='text-sm text-[#34373e] text-center mt-[19px] font-normal'>
                Cùng tham quan các sản phẩm nổi bật mới nhất của chúng tôi
            </p>
            <Categories />
            <Product />
        </div>
    )
}
