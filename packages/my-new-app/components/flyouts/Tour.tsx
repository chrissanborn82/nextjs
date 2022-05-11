import Link from 'next/link'
import { FlyoutContext } from '../arHeader'

export const Tour = () => {

    const tour_links = [{ label: "Learn more about ROADSHOW's 2022 Tour", href: '/tickets' }, { label: "2022 Tour Complete Rules", href: "/rules" }]
    return (
        <FlyoutContext.Consumer>
            {({ showFlyout, toggleFlyout }) =>
                <div className="w-full">
                    <div className="text-sm text-gray-500">Quick links</div>
                    <ul>
                        {tour_links.map((link) => (
                            <li className="text-blue-400 text-sm cursor-pointer hover:underline">
                                <Link href={link.href}><a onClick={() => toggleFlyout("")}>{link.label}</a></Link>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </FlyoutContext.Consumer>
    )
}

export default Tour;