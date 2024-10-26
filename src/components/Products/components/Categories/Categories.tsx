import { categories } from '~/constants/categories'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { path } from '~/constants/path'
import useQueryConfig from '~/hooks/useQueryConfig'
import classNames from 'classnames'

export default function Categories() {
    const queryConfig = useQueryConfig()
    const activeCategory = queryConfig.category
    const navigate = useNavigate()


    const handleCategory = (category: string) => {
        navigate({
            pathname: path.home,
            search: createSearchParams({
                ...queryConfig,
                category
            }).toString()
        })
    }

    return (
        <div className='flex justify-center items-center mt-[47px] gap-10'>
            {categories.map((category, index) => (
                <div
                    className='flex justify-center items-center gap-2 cursor-pointer group'
                    key={index}
                    onClick={() => handleCategory(category)}
                >
                    <p
                        className={classNames(
                            'text-lg font-[500] group-hover:text-[#ff3237] transiton duration-300 ease-in',
                            {
                                'text-[#ff3237]': category === activeCategory
                            }
                        )}
                    >
                        {category}
                    </p>
                    <div
                        className={classNames(
                            'w-[8px] h-[8px] rotate-45 group-hover:bg-[#ff3237] transiton duration-300 ease-in',
                            {
                                'bg-[#ff3237]': category === activeCategory,
                                'bg-black': category !== activeCategory
                            }
                        )}
                    ></div>
                </div>
            ))}
        </div>
    )
}
