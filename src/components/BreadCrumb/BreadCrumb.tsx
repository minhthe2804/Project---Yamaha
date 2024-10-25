interface Props {
    heading?: string
    title?: string
}

export default function BreadCrumb({ heading, title }: Props) {
    return (
        <div className='w-full h-[300px] bg-[url("https://theme.hstatic.net/200000281285/1000677821/14/breadcrumb_bg5.png?v=848")] bg-no-repeat bg-center bg-cover py-[30px] relative'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#00000080]' />
            <div className='w-full h-full flex flex-col items-center justify-center text-white relative z-[2] gap-1'>
                <h2 className='text-[22px] font-semibold'>{heading}</h2>
                <p className='text-[15px] font-[500]'>{title}</p>
            </div>
        </div>
    )
}
