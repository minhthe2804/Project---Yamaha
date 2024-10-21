import { path } from './path'

export const navHeader = [
    {
        name: 'TRANG CHỦ',
        path: path.home
    },
    {
        name: 'SẢN PHẨM ',
        path: path.productList
    },
    {
        name: 'TIN TỨC',
        path: path.news,
        href: "#news"
    },
    {
        name: 'GIỚI THIỆU',
        path: path.introduce
    },
    {
        name: 'LIÊN HỆ',
        path: path.contact
    }
]
