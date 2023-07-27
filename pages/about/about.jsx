

const FRONTEND_TOOLS = [
    "JavaScriptES6+",
    "React",
    "NextJs",
    "Redux",
    "Redux Toolkit",
    "Angular.js",
    "React Testing Library",
    "Git/GitHub",
    "HTML5",
];
const  UI_LIBRARIES = [
    "CSS",
    "CSS3/SCSS/SASS",
    "Tailwind CSS",
    "Material UI",
    "Framer Motion",
    "Bootstrap",
]
const BACKEND_TOOLS =[
    'Node.js',
    'Express',
    'Firebase',
    'SQL',
    'MongoDB',
]

export default function About() {
    return (
        <section className="container py-14">
            <div className="flex flex-col justify-center md:flex-row md:justify-between">
                <div className="w-full md:w-[55%] mb-14">
                    <h1 className="text-heading-m mb-14">Few words about me</h1>
                    <p className="text-p text-grey-light [&>span]:font-bold [&>span]:text-green">
                        I'm a <span>software engineer</span> with a unique <span>business background</span>. My passion for web development sparked when I stumbled upon a scholarship opportunity at Wild Code School. Enrolling in their 10-month Full Stack BootCamp in Bucharest, I discovered my love for coding. Since then, I've been on a <span>continuous learning journey</span>, taking various online courses to stay up-to-date with the latest technologies.
                        <br className="mb-4"/>
                        Currently, I work at <span>Avira (now a part of Gen)</span> on a customer platform project. I handle custom marketing campaigns and platform redesigns to enhance customer experiences, boost revenue, and reduce unsubscribe rates. Collaborating with experienced developers and designers has elevated my skills and inspired me to create <span>exceptional user experiences</span>.
                        <br className="mb-4"/>
                        On a personal note, I'm a <span>proud mother</span> of two wonderful kids, teaching me about unconditional <span>love and responsibility</span>. I cherish outdoor activities like hiking, camping, and responsible travel.
                        <br className="mb-4"/>
                    </p>
                </div>
                <div className="w-full md:w-[35%]">
                    <h3 className="text-heading-m mb-14 circle-sketch-highlight">My skills</h3>
                    <div className="mb-8">
                        <h3  className="text-heading-s mb-4 green-underline-header text-green cursor-default">Frontend Tools</h3>
                        <ul className="flex flex-wrap gap-2 font-semibold text-l">
                            {FRONTEND_TOOLS.map((tool, index) => {
                                return (<li key={index}>{tool}</li>)
                            })}
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-heading-s mb-4 green-underline-header text-green cursor-default"
                        >UI Libraries</h3>
                        <ul className="flex flex-wrap gap-2 font-semibold text-l">
                            {UI_LIBRARIES.map((tool, index) => {
                                return (<li key={index}>{tool}</li>)
                            })}
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3  className="text-heading-s mb-4 green-underline-header text-green cursor-default">Backend Tools</h3>
                        <ul className="flex flex-wrap gap-2 font-semibold text-l">
                            {BACKEND_TOOLS.map((tool, index) => {
                                return (<li key={index}>{tool}</li>)
                            })}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
