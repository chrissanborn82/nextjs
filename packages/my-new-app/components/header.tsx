import Image from "next/image";
import Search from "./search-container";
export const Header = () => (
    <div className="max-w-full my-2 items-center justify-between inline-flex px-5 w-full">

        <div className="justify-start inline-flex items-center">
            <div className="items-center border-r border-blue-600">
                <Image
                    alt="PBS"
                    src="https://jaws-prod.cdn.pbs.org/1.30.0/header/img/pbs_logo.svg"
                    width={90}
                    height={30}
                />
            </div>
            <div className="items-center pl-2">
                <Image
                    alt="WGBH"
                    src="https://image.pbs.org/stations/wgbh-color-single-brand-logo-bm3AAGH.png?resize=200x&amp;format=png"
                    width={60}
                    height={30}
                />
            </div>
        </div>
        <div className="items-center inline-flex mr-5">
            <ul className="hidden lg:inline-flex font-sans font-medium text-base px-10 text-blue-600">

                <li className="px-10 "> Shows</li>
                <li className="px-10"> Videos</li>
                <li className="px-10"> TV Schedule</li>
            </ul>
            <Search />

        </div>
    </div>
)