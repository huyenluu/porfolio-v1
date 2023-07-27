import { NavIcon } from '../../components/icon'
import { BsGithub,BsLink45Deg } from "react-icons/bs"
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({
    id,
    name,
    description,
    technologies,
    github,
    demo,
    image,
    available,
}) => {
    return (
        <motion.div
            className={`bg-green-bg-gradient relative z-10 h-[550px]  w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]`}
        >
            <Image
                src={image}
                alt={name}
                className={`absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] ${id % 2 === 0 ? "right-0" : "left-0"
                    }`}
            />
            <div
                className={`absolute top-0 text-[#0E1016] ${id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
                    } mt-6 flex  items-center justify-center gap-4 lg:mt-10`}
            >
                {available ? (
                    <>
                        <NavIcon
                            iconComponent={<BsGithub />}
                            href={github}
                            ariaLabel="View GitHub Profile"
                        />
                        <NavIcon
                            iconComponent={<BsLink45Deg />}
                            href={demo}
                            ariaLabel="Open Live Demo"
                        />
                    </>
                ) : (
                    <div className=" flex items-center justify-center gap-4">
                        <NavIcon
                            iconComponent={<BsGithub />}
                            href={github}
                            ariaLabel="View GitHub Profile"
                        />
                        <div className=" rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
                            <h3 className="text-[16px] md:text-[18px] lg:text-[20px] ">
                                Coming soon
                            </h3>
                        </div>
                    </div>
                )}
            </div>
            <div
                className={`absolute text-white  ${!(id % 2 === 0)
                        ? "right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4"
                        : "left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4"
                    } mb-10  md:mb-16 lg:mb-14 `}
            >
                <div className="max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none">{name}</div>
                <div className="mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-white ">{description}</div>
                <div className="mt-9 flex gap-4">
                    {technologies.map((tech, id) => (
                        <div className="text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px]" key={id}>{tech}</div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;