import BreadCrumb from '~/components/BreadCrumb'
import { breadCrumb } from '~/constants/breadCrumb'

export default function Account() {
    return (
        <div>
            <BreadCrumb heading={breadCrumb.login.heading} title={breadCrumb.login.title} />
        </div>
    )
}
