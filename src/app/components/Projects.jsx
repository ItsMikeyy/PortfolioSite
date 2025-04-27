import Project from "./Project"

const Projects = () => {
    return (
        <div className="w-1/2 flex flex-col gap-8">
            <p className="text-3xl">Projects 🚀</p>
            <div className="flex flex-col gap-16">
                <div className="p-2 border-2 rounded-md">
                    <Project title="GoFit" date="Jan 2025 - present" summary="I developed a web application using Next.js, SQLite, and Drizzle for workout, nutrition, and progress tracking. I implemented secure, cloud-based authentication with NextAuth and Google Cloud APIs, and designed responsive, intuitive user interfaces optimized for both mobile and desktop experiences." />
                </div>
            </div>
        </div>
    )
}

export default Projects