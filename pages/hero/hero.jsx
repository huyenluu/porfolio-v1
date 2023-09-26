import Image from 'next/image';
import { NavIcon } from '../../components/icon';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiFrontendmentor } from 'react-icons/si';
import { AiOutlineProfile } from 'react-icons/ai';
import Tooltip from '../../components/tooltip';

const Hero = () => {
    return (
        <section className="container relative overflow-hidden lg:overflow-visible">
            <nav
                className="flex justify-center items-center flex-wrap gap-[20px_25px]
                            py-10 z-10 relative  
                            md:justify-between"
            >
                <h1
                    className="font-burton text-2xl text-center flex-[1_0_100%]
                            transition-colors duration-200 ease-in-out
                            hover:text-green 
                            md:flex-1 md:text-left "
                >
                    huyenluu.
                </h1>
                <ul className="flex gap-6 items-center">
                    <Tooltip content="View Resume">
                        <NavIcon
                            iconComponent={<AiOutlineProfile />}
                            href="https://drive.google.com/file/d/1FJQWmnC7BQ4HSYcxU40D8Q9kZsRHTDjp/view?usp=drivesdk"
                            ariaLabel="View Resume"
                            className="w-6 h-6"
                        />
                    </Tooltip>
                    <Tooltip content="GitHub">
                        <NavIcon
                            iconComponent={<BsGithub />}
                            href="https://github.com/huyenluu"
                            ariaLabel="View GitHub Profile"
                        />
                    </Tooltip>
                    <Tooltip content="LinkedIn">
                        <NavIcon
                            iconComponent={<BsLinkedin />}
                            href="https://www.linkedin.com/in/huyen-luu-59401366/"
                            ariaLabel="View LinkedIn Profile"
                        />
                    </Tooltip>
                    <Tooltip content="Frontend Mentor Profile">
                        <NavIcon
                            iconComponent={<SiFrontendmentor />}
                            href="https://www.frontendmentor.io/profile/huyenluu"
                            ariaLabel="View Frontend Mentor Profile"
                        />
                    </Tooltip>
                </ul>
            </nav>
            <div className="md:-mt-16 lg:relative">
                <div
                    className="pb-14 
                                lg:min-h-[calc(42.2rem-3.5rem)]"
                >
                    <div className="flex items-center">
                        <div
                            className="bg-grey-gradient bg-cover bg-[50%_50%] bg-blend-normal bg-repeat-no-repeat
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
                                -mb-32 
                                md:right-0 md:translate-x-1/2
                                xl:right-[432px] lg:top-[17.6rem]"
                            src="/pattern-circle.svg"
                            alt="circle-pattern"
                            width={129}
                            height={129}
                        />
                        <div
                            className="relative text-center mt-64 z-[4] flex flex-col items-center
                                    md:text-left md:mt-24 md:max-w-[58%] md:items-start"
                        >
                            <h1
                                className="mb-6 text-heading-m font-clamp
                                    md:mb-16"
                            >
                                Nice to{' '}
                                <br className="hidden md:inline-block" />
                                meet you! I'm{' '}
                                <span className="text-green bg-[0_100%] bg-repeat-x bg-[length:8px_4px]">
                                    Huyen Luu
                                </span>
                                .
                            </h1>
                            <p className="text-p max-w-md mb-6">
                                I'm a passionate Frontend Developer with a love
                                for crafting captivating interfaces that bring
                                ideas and designs to life.
                            </p>
                            <a
                                href="#contact"
                                className="text-white py-2 text-button uppercase
                                bg-green-gradient bg-[center_100%] bg-repeat-x bg-[length:8px_2px]
                                transition-colors duration-200 ease-in-out
                                hover:text-green hover:no-underline "
                            >
                                contact me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
