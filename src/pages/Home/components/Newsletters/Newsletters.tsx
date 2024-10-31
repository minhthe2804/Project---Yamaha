function Newsletters() {
    return (
        <div id='newletter' className='text-white bg-[#c7c7c7] py-[100px] text-center'>
            <div className='wrapper '>
                <div className='inner max-w-[800px] mx-auto'>
                    <div className='newsletters-text mb-[50px]'>
                        <div className='newsletters-title text-[#ff3237] uppercase font-[550]'>
                            Những sản phẩm đặc biệt
                        </div>
                        <div className='newsletters-text-1 block font-[750] text-xl bold uppercase mb-[15px]'>
                            Đăng kí nhận tin tức cùng chúng tôi
                        </div>
                        <div className='newsletters-text-2 text-sm'>
                            Nhập email để đăng kí nhận những tin tức về sản phẩm mới nhất của chúng tôi nhé
                        </div>
                    </div>

                    <div className='sub-wrapper relative px-[100px]'>
                        <form className="relative " >

                        <input
                            className='rounded-[30px] w-[100%] h-[60px] pl-[25px] pr-[70px] border-inherit'
                            placeholder='Nhập email...'
                            type='email'
                        />
                        <button
                            type='submit'
                            className='w-[50px] h-[50px] rounded-full bg-[#315aa6] text-center absolute top-[5px] right-[5px] hover:bg-[#ff3237] hover:shadow-[0_0_20px_10px_rgba(255,50,55,0.3)] transition duration-200 ease-in'
                            name='subscribe'
                            id='subscribe'
                            value='GỬI'
                        >
                            <svg
                                className='svg-inline--fa fa-angle-right fa-w-8'
                                aria-hidden='true'
                                data-prefix='fa'
                                data-icon='angle-right'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 256 512'
                                data-fa-i2svg=''
                            >
                                <path
                                    fill='currentColor'
                                    d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'
                                ></path>
                            </svg>
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default Newsletters