import WorkExperience from "./WorkExperience"

const Experience = () => {
    return (
        <div className="w-full md:w-1/2 px-4 sm:px-10 lg:px-0 mx-auto flex flex-col gap-8">
            <p className="text-3xl">Experience 💼</p>
            <div className="flex flex-col gap-16">
                <WorkExperience
                    title="Loblaws - Real Canadian Superstore - Replenishment Clerk PT"
                    date="Oct 2018 - Present"
                    location="Edmonton, AB"
                    summary="I managed inventory replenishment and allocation to maintain efficient stock levels, provided outstanding customer service that earned an award, and mentored new team members while occasionally stepping into manager responsibilities."
                />
                <WorkExperience
                    title="Edmonton Multicultural Innovative Society (Volunteer)"
                    date="July 2024 - August 2024"
                    location="Edmonton, AB (Remote)"
                    summary="I designed and developed a website for the Edmonton Multicultural Innovative Society using Wix, collaborating closely with the organization to tailor the design and content to meet their specific goals and audience needs."
                />
                <WorkExperience
                    title="Everything AI - Full Stack Web Developer Intern (2 months)"
                    date="June 2024 - July 2024"
                    location="Edmonton, AB (Remote)"
                    summary="I successfully integrated course content and plugins into Moodle, enhancing the platform's educational capabilities and user experience. I also co-developed course outlines and a comprehensive database management systems course tailored for high school students, while working effectively with a team in a fast-paced environment to deliver high-quality solutions under tight deadlines."
                />
            </div>
        </div>
    )
}

export default Experience