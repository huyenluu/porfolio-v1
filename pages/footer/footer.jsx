import { NavIcon } from '../../components/icon';
import { BsFillMoonStarsFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiFrontendmentor } from 'react-icons/si';

export default function Footer() {
    return (
        <footer className="relative bg-grey-dark">
            <nav
                className=" container flex justify-center items-center flex-wrap gap-[20px_25px]
                            border-t border-white
                            py-10 z-10 relative  
                            md:justify-between"
            >
                <h1
                    className="text-xl text-center flex-[1_0_100%]
                            md:flex-1 md:text-left "
                >
                    copyright 2023
                </h1>
                <ul className="flex gap-6">
                    <NavIcon
                        iconComponent={<BsGithub />}
                        href="https://github.com/huyenluu"
                        ariaLabel="View GitHub Profile"
                    />
                    <NavIcon
                        iconComponent={<BsLinkedin />}
                        href="https://www.linkedin.com/in/huyen-luu-59401366/"
                        ariaLabel="View LinkedIn Profile"
                    />
                    <NavIcon
                        iconComponent={<SiFrontendmentor />}
                        href="https://www.frontendmentor.io/profile/huyenluu"
                        ariaLabel="View Frontend Mentor Profile"
                    />
                    <NavIcon iconComponent={<BsFillMoonStarsFill />} />
                </ul>
            </nav>
        </footer>
    );
}
