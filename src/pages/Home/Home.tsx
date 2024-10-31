import Banner from '~/components/Banner'
import Products from '~/components/Products'
import Policy from './components/Policy'
import Aboutus from '~/pages/Home/components/Aboutus'
import Articles from './components/Articles'
import Service from './components/Service'
import Newsletters from './components/Newsletters'

export default function Home() {
    return (
        <div>
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
