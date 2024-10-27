interface Props {
    heading?: string
    className?: string
    background?: string
    border?: string
    textColor?: string
    width?: string
}

export default function ProductTitle({
    heading,
    className,
    background = 'bg-[#e6e5e5]',
    border = 'border-[#e6e5e5]',
    textColor = 'text-black',
    width = 'w-[292px]'
}: Props) {
    return (
        <div className='flex justify-center items-center gap-3'>
            <div className='flex flex-col gap-[4px] items-end'>
                <div className={`w-[150px] h-[1px] ${background}`}></div>
                <div className={`w-[268px] h-[1px] ${background}`}></div>
                <div className={`w-[150px] h-[1px] ${background}`}></div>
            </div>
            <div
                className={`relative text-[24px] font-[650] opacity-[0.9] ${width} border-t-[3px] border-b-[3px] ${border} text-center pt-[10px] pb-[10px]`}
            >
                <div className='flex items-center justify-center gap-5 '>
                    <p className={`text-[19px] mt-2 ${textColor}`}>*</p>
                    <p className={className}>{heading}</p>
                    <p className={`text-[19px] mt-2 ${textColor}`}>*</p>
                </div>
                <div className={`w-[34px] h-[3px] ${background} absolute rotate-[115deg] left-[-10px] bottom-[12px]`} />
                <div className={`w-[34px] h-[3px] ${background} absolute rotate-[-115deg] left-[-10px] top-[12px]`} />
                <div className={`w-[34px] h-[3px] ${background} absolute rotate-[65deg] right-[-10px] bottom-[12px]`} />
                <div className={`w-[34px] h-[3px] ${background} absolute rotate-[-65deg] right-[-10px] top-[12px]`} />
            </div>
            <div className='flex flex-col gap-[4px] items-start'>
                <div className={`w-[150px] h-[1px] ${background}`}></div>
                <div className={`w-[268px] h-[1px] ${background}`}></div>
                <div className={`w-[150px] h-[1px] ${background}`}></div>
            </div>
        </div>
    )
}
