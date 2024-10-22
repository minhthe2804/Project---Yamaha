export default function Categories() {
    return (
        <div className='flex justify-center items-center mt-[47px] gap-10'>
            <div className='flex justify-center items-center gap-2 cursor-pointer group'>
                <p className='text-lg font-[500] group-hover:text-[#ff3237] transiton duration-300 ease-in'>
                    SẢN PHẨM NỔI BẬT
                </p>
                <div className='w-[8px] h-[8px] bg-black rotate-45 group-hover:bg-[#ff3237] transiton duration-300 ease-in'></div>
            </div>
            <div className='flex justify-center items-center gap-2 cursor-pointer group'>
                <p className='text-lg font-[500] group-hover:text-[#ff3237] transiton duration-300 ease-in'>
                    SẢN PHẨM MỚI
                </p>
                <div className='w-[8px] h-[8px] bg-black rotate-45 group-hover:bg-[#ff3237] transiton duration-300 ease-in'></div>
            </div>
            <div className='flex justify-center items-center gap-2 cursor-pointer group'>
                <p className='text-lg font-[500] group-hover:text-[#ff3237] transiton duration-300 ease-in'>
                    SẢN PHẨM BÁN CHẠY
                </p>
                <div className='w-[8px] h-[8px] bg-black rotate-45 group-hover:bg-[#ff3237] transiton duration-300 ease-in'></div>
            </div>
        </div>
    )
}
