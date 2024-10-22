import Categories from './components/Categories'
import Product from './components/Product'

export default function Products() {
    return (
        <div className='mt-[180px] max-w-[1198px] mx-auto'>
            <div className='flex justify-center items-center gap-3'>
                <div className='w-[250px] h-[4px] bg-black opacity-[0.8]'></div>
                <div className='text-[24px] font-[650] opacity-[0.9]'>
                    <p>SẢN PHẨM</p>
                </div>
                <div className='w-[250px] h-[4px] bg-black opacity-[0.8]'></div>
            </div>
            <p className='text-sm text-[#34373e] text-center mt-[10px] font-normal'>
                Cùng tham quan các sản phẩm nổi bật mới nhất của chúng tôi
            </p>
            <Categories />
            <Product />
        </div>
    )
}
