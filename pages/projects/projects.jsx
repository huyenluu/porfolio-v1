import ProjectGrid from './projectGrid';

const Projects = () => {
    return (
        <section
            className=" container relative z-10 flex w-full flex-col items-center justify-center bg-black py-14 md:py-18"
            id="Projects"
        >
            <div className="flex justify-between items-center w-full  mb-10 md:mb-16 lg:mb-16">
                <h2 className="text-left text-heading-m text-white lg:text-heading-l">
                    Projects
                </h2>
            </div>
            <ProjectGrid />
        </section>
    );
};

export default Projects;
