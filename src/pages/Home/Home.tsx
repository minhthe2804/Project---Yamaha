import Banner from '~/components/Banner'
import Products from '~/components/Products'
import Policy from './components/Policy'
import Aboutus from '../../components/Aboutus'

export default function Home() {
    return (
        <div>
            <Banner />
            <Products />
            <Policy />
            <Aboutus />
        </div>
    )
}
