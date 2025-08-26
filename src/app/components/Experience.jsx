import WorkExperience from "./WorkExperience"

const Experience = () => {
    return (
        <div className="w-full lg:w-3/5 px-4 sm:px-6 lg:px-0 mx-auto flex flex-col gap-8">
            <p className="text-3xl">Experience 💼</p>
            <div className="flex flex-col gap-16">
            <WorkExperience
                    title="Everything AI - Full Stack Web Developer (2 months)"
                    date="June 2024 - July 2024 & June 2025 - August 2025"
                    location="Edmonton, AB (Remote)"
                    summary="At Everything AI, I worked as a Full Stack Web Developer, where I built and deployed a PDF/PPTX-to-MP3 application using Next.js and FastAPI, and developed a real-time meeting management system by integrating BigBlueButton APIs to automate virtual classrooms. I also created course material on database management systems, integrated and optimized Moodle for over 100 users, and contributed to Agile sprints while collaborating with cross-functional teams to deliver secure, user-focused solutions."
            />
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
                
            </div>
        </div>
    )
}

export default Experience