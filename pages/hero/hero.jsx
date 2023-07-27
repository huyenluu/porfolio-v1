import Image from 'next/image'
import { NavIcon } from '../../components/icon'
import { BsFillMoonStarsFill, BsGithub, BsLinkedin } from "react-icons/bs"
import { SiFrontendmentor } from "react-icons/si"

const Hero = () => {
    return (
    <section className="container relative">
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
            <ul className="flex gap-6 items-center">
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
            </ul>
        </nav>
        <div className="md:-mt-16 lg:relative">
            <div className="pb-14 
                            lg:min-h-[calc(42.2rem-3.5rem)]"
            >
            <div className="flex items-center">
                <div className="bg-grey-gradient bg-cover bg-[50%_50%] bg-blend-normal bg-repeat-no-repeat
                            w-[10rem] h-[24rem] 
                            absolute top-0 left-1/2 -translate-x-1/2 z-[2] 
                            flex flex-col justify-end shrink-0
                            md:w-[42%] md:max-w-[27.8rem] md:h-[37.5rem]
                            md:-top-14 md:left-auto md:-right-6 md:-translate-x-0
                            md:order-2"
                >
                <Image
                    className="grayscale w-auto h-auto"
                    src="/hl-profile.png"
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
                <div className="relative text-center mt-64 z-[4] flex flex-col items-center
                                md:text-left md:mt-24 md:max-w-[58%] md:items-start"
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
                    <p className="text-p max-w-md mb-6">
                        I'm a passionate Frontend Developer with a love for crafting captivating interfaces that bring ideas and designs to life. 
                        {/* Collaborating with experienced senior developers and designers has elevated my skills and raised my standards, inspiring me to create exceptional user experiences. */}
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1yLp29N5jCV1_JroKIgArD7dlGd29GQEK/view"
                        target='_blank'
                        className="text-white py-2 text-heading-s uppercase
                                bg-green-gradient bg-[center_100%] bg-repeat-x bg-[length:8px_2px]
                                transition-colors duration-200 ease-in-out
                                hover:text-green hover:no-underline max-w-[151px]"
                    >
                        View resume
                    </a>
                </div>
            </div>
            </div>
        </div>
    </section>
    );
}
export default Hero;