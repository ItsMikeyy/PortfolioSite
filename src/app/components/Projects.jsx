import Project from "./Project"

const Projects = () => {
    const technologies = [[
        { name: 'Next.js', textColor: 'text-white', bgColor: 'bg-black' },
        { name: 'React', textColor: 'text-white', bgColor: 'bg-blue-500' },
        { name: 'Drizzle', textColor: 'text-white', bgColor: 'bg-purple-600' },
        { name: 'Google Cloud', textColor: 'text-white', bgColor: 'bg-blue-400' },
        { name: 'Vercel', textColor: 'text-white', bgColor: 'bg-black' },
        { name: 'SQL', textColor: 'text-white', bgColor: 'bg-indigo-700' },
    ]];

    return (
        <div className="w-1/2 flex flex-col gap-8">
            <p className="text-3xl">Projects 🚀</p>
            <div className="flex flex-col gap-16">
                <div className="p-2 border-2 rounded-md">
                    <Project title="GoFit" date="Jan 2025 - present" summary="I developed a web application using Next.js, SQLite, and Drizzle for workout, nutrition, and progress tracking. I implemented secure, cloud-based authentication with NextAuth and Google Cloud APIs, and designed responsive, intuitive user interfaces optimized for both mobile and desktop experiences." 
                        technologies={technologies[0]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects