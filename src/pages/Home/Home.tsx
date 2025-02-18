import Banner from '~/components/Banner'
import Products from '~/components/Products'
import Policy from './components/Policy'
import Aboutus from '~/pages/Home/components/Aboutus'
import Articles from './components/Articles'
import Service from './components/Service'
import Newsletters from './components/Newsletters'
import { Helmet } from 'react-helmet-async'

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Trang chủ – Hệ Thống Xe máy Hoàng Cầu</title>
                <meta name='description' content='Hệ Thống Xe máy Hoàng Cầu' />
            </Helmet>
            <Banner />
            <Products />
            <Policy />
            <Articles />
            <Service />
            <Newsletters />
            <Aboutus />
        </div>
    )
}
