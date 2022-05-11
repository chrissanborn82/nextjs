import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Tour from './flyouts/Tour';
import Watch from './flyouts/Watch';
import Link from 'next/link';

export const FlyoutContext = React.createContext({
    showFlyout: false,
    toggleFlyout: (flyout: string) => { },
});


export const arHeader = () => {

    const [showFlyout, setShowFlyout] = React.useState(false);
    const [selectedFlyout, setSelectedFlyout] = React.useState("");

    const toggleFlyout = (flyout: string) => {
        if (flyout === selectedFlyout && showFlyout) {
            setShowFlyout(false);
            setSelectedFlyout("");
            return;
        }
        if (!flyout) {
            setShowFlyout(false);
            setSelectedFlyout("");
            return;
        }
        setShowFlyout(true);
        setSelectedFlyout(flyout)
    }

    const MENU = ['TOUR', 'FEATURES', 'WATCH', 'AA', 'A'];
    const MENU_ITEMS = {
        'TOUR': { label: 'On Tour', component: <Tour /> },
        'FEATURES': { label: 'Special Features', component: <Tour /> },
        'WATCH': { label: 'Watch', component: <Watch /> },
        'AA': { label: 'Appraisels Archive' },
        'A': { label: 'Appraisers' }
    }
    const MAJOR_MENU_ITEMS = [
        { label: 'On Tour', key: 'TOUR', component: <Tour /> },
        { label: 'Special Features', key: 'FEATURES' },
        { label: 'Watch', key: 'WATCH' },
    ]
    const MINOR_MENU_ITEMS = [
        { label: 'Appraisels Archive' },
        { label: 'Appraisers' }
    ]


    return (
        <FlyoutContext.Provider value={{ showFlyout: showFlyout, toggleFlyout: (flyout: string) => toggleFlyout(flyout) }}>
            <div className="relative">
                <div className="max-w-full items-center justify-center inline-flex w-full bg-[url('https://www.pbs.org/wgbh/roadshow/roadie-static/graphics/bg-roadshow-pattern.png')]">

                    <Link href={"/"}><a>
                        <span className="my-4 font-extrabold text-white text-4xl">ANTIQUE ROADSHOW</span>
                    </a></Link>
                </div>
                <div className="w-full justify-center text-blue-900 text-sm inline-flex">
                    <ul className="inline-flex">
                        {MENU.map((item) => (
                            <li className="px-5 cursor-pointer" onClick={() => { if (MENU_ITEMS[item].component) toggleFlyout(item) }}>
                                {MENU_ITEMS[item].label}
                                {MENU_ITEMS[item].component && (<KeyboardArrowDownIcon sx={{ fontSize: 10 }} />)}
                            </li>
                        ))}
                    </ul>
                </div>
                {showFlyout && (
                    < div className="top-full px-5 z-50 absolute bg-white w-full">
                        {MENU_ITEMS[selectedFlyout].component}
                    </div>
                )
                }
            </div >
        </FlyoutContext.Provider>
    )
}
export default arHeader;