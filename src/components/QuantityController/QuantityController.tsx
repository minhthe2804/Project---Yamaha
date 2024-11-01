import { useState } from 'react'
import InputNumber, { InputNumberProps } from '../InputNumber'
import Button from '../Button'

interface Props extends InputNumberProps {
    max?: number
    onIncrease?: (value: number) => void
    onDecrease?: (value: number) => void
    onType?: (value: number) => void
    onFocusOut?: (value: number) => void
}

export default function QuantityController({ max, onIncrease, onDecrease, onFocusOut, onType, value, ...rest }: Props) {
    const [localValue, setLocalValue] = useState(Number(value) || 0)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let _value = Number(event.target.value)
        if (max !== undefined && _value > max) {
            _value = max
        } else if (_value < 1) {
            _value = 1
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onType && onType(_value)

        // xét localValue State
        setLocalValue(_value)
    }

    const increase = () => {
        // eslint-disable-next-line prefer-const
        let _value = Number(value || localValue) + 1

        if (max !== undefined && _value > max) {
            _value = max
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onIncrease && onIncrease(_value)
        setLocalValue(_value)
    }

    const decrease = () => {
        // eslint-disable-next-line prefer-const
        let _value = Number(value || localValue) - 1

        if (_value < 1) {
            _value = 1
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onDecrease && onDecrease(_value)
        setLocalValue(_value)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onFocusOut && onFocusOut(Number(event.target.value))
    }

    return (
        <div className={'flex items-center'}>
            <Button
                className='w-[32px] py-[15px] border-[1px] border-[#817f7f] rounded-[3px_0_0_3px] group'
                onClick={decrease}
            >
                <div className='w-[10px] h-[2px] bg-black group-hover:bg-[#ff3237] transition duration-200 ease-in'></div>
            </Button>
            <InputNumber
                value={value || localValue}
                classNameInput='w-[74px] py-1 border-t-[1px] border-b-[1px] border-[#817f7f] outline-none text-black text-center'
                classNameError='hidden'
                className=''
                onChange={handleChange}
                onBlur={handleBlur}
                {...rest}
            />
            <Button
                className='w-[32px] py-[15px] border-[1px] border-[#817f7f] rounded-[0_3px_3px_0] group'
                onClick={increase}
            >
                <div className='relative w-[10px] h-[2px] bg-black group-hover:bg-[#ff3237] transition duration-200 ease-in'></div>
                <div className='w-[10px] h-[2px] bg-black rotate-90 absolute group-hover:bg-[#ff3237] transition duration-200 ease-in'></div>
            </Button>
        </div>
    )
}
