import ProductTitle from "~/components/ProductTitle/ProductTitle"
import { productTitle } from "~/constants/productTitle"
function Service() {
    return (
        <div id='service' className='text-white py-[100px]  bg-[#181b23]'>
            <div className='service-head '>
                <div className='wrapper'>
                    <ProductTitle heading={productTitle.service.heading} textColor='#fff' />
                </div>
            </div>
            <div className='service-desc text-center pt-[20px] pb-[50px]'>Dịch vụ chăm sóc khách hàng đa dạng và phong phú</div>

            <div className="home-section-body">
                
		    </div>
	    </div>
    )
}

export default Service