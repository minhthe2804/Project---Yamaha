import Footer from '~/components/Footer'
import Header from '~/components/Header'

interface Props {
    children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
    return (
        <div className='h-[10000px]'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
