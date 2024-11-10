import BreadCrumb from '~/components/BreadCrumb'
import { breadCrumb } from '~/constants/breadCrumb'

export default function Introduce() {
    return (
        <div>
            <BreadCrumb heading={breadCrumb.introduce.heading} title={breadCrumb.introduce.title} />
        </div>
    )
}
