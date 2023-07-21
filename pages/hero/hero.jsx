import Image from 'next/image'
import Link from 'next/link'
import { BsFillMoonStarsFill, BsGithub, BsLinkedin } from "react-icons/bs"
import { SiFrontendmentor } from "react-icons/si"
import { IconContext } from "react-icons"

const NavIcon = ({ iconComponent, className, href, ariaLabel }) => {
    return (
        <IconContext.Provider
        value={{ 
            className: `${className} cursor-pointer text-white hover:text-green transition-colors duration-200 ease-in-out`,
            size:  '1.3rem'
        }}
        >
        {typeof href === "string" ? (
            <li>
            <Link href={href} target="_blank" aria-label={ariaLabel}>
                {iconComponent}
            </Link>
            </li>
        ) : (
            <li>{iconComponent}</li>
        )}
        </IconContext.Provider>
    );
}
const Hero = () => {
    return (
    <>
        <header className="container relative">
            <nav
                className="flex justify-center items-center flex-wrap gap-[20px_25px]
                            py-10 z-10 relative  
                            md:justify-between"
            >
                <h1 className="font-burton text-2xl text-center flex-[1_0_100%]
                            transition-colors duration-200 ease-in-out
                            hover:text-green 
                            md:flex-1 md:text-left ">
                    huyenluu.
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
        </header>
        <section className="container md:-mt-16 lg:relative">
            <div className="pb-14 border-b border-solid border-white
                            lg:min-h-[calc(42.2rem-3.5rem)]"
            >
            <div className="flex items-center">
                <div className="bg-grey-gradient bg-cover bg-[50%_50%] bg-blend-normal bg-repeat-no-repeat
                            w-[10rem] h-[24rem] 
                            absolute top-0 left-1/2 -translate-x-1/2 z-[2] 
                            flex flex-col justify-end shrink-0
                            md:w-[42%] md:max-w-[27.8rem] md:h-[37.5rem]
                            md:-top-14 md:left-auto md:-right-6 md:-translate-x-0
                            md:order-2
                            lg:right-8
                            xl:right-16"
                >
                <Image
                    className="grayscale w-full"
                    src="/hl-profile2.webp"
                    alt="Huyen Luu profile picture"
                    width={424}
                    height={589}
                />
                </div>
                <Image
                    className="absolute right-1/2 top-[8.1rem] z-[1] 
                            md:top-24 md:right-auto md:left-0 md:-translate-x-1/2"
                    src="/pattern-rings.svg"
                    alt="ring-pattern"
                    width={530}
                    height={129}
                />
                <Image
                    className="absolute top-[14.6rem] -right-14 z-[3]
                            -mb-32 md:top-auto md:right-0 md:translate-x-1/2
                            lg:right-[72px]"
                    src="/pattern-circle.svg"
                    alt="circle-pattern"
                    width={129}
                    height={129}
                />
                <div className="relative text-center mt-64 z-[4]
                                md:text-left md:mt-24 md:max-w-[58%]"
                >
                    <h1 className="mb-6 text-heading-m font-clamp
                                md:mb-16"
                    >
                        Nice to <br className="hidden md:inline-block" />
                        meet you! I'm{" "}
                    <span className="bg-green-gradient bg-[0_100%] bg-repeat-x bg-[length:8px_4px]">
                        Huyen Luu
                    </span>
                    .
                    </h1>
                <p className="text-p mb-6 md:mb-8">I'm a passionate Frontend Developer with a love for crafting captivating interfaces that bring ideas and designs to life. Collaborating with experienced senior developers and designers has elevated my skills and raised my standards, inspiring me to create exceptional user experiences.
                </p>
                <a
                    href="#contact"
                    className="inline-block text-white py-3 text-heading-s uppercase
                            bg-green-gradient bg-[0_100%] bg-repeat-x bg-[length:8px_2px]
                            transition-colors duration-200 ease-in-out
                            hover:text-green hover:no-underline "
                >
                    My resume
                </a>
                </div>
            </div>
            </div>
        </section>
    </>
    );
}
export default Hero;