import Project from "./Project"

const Projects = () => {
    const technologies = [
        [
            { name: 'Next.js', textColor: 'text-white', bgColor: 'bg-black' },
            { name: 'Clerk', textColor: 'text-white', bgColor: 'bg-pink-600' },
            { name: 'Inngest', textColor: 'text-white', bgColor: 'bg-blue-700' },
            { name: 'Drizzle ORM', textColor: 'text-white', bgColor: 'bg-green-600' },
            { name: 'shadcn/ui', textColor: 'text-white', bgColor: 'bg-gray-800' },
            { name: 'PostgreSQL', textColor: 'text-white', bgColor: 'bg-blue-900' }

        ],
        [
            { name: 'Godot Engine', textColor: 'text-white', bgColor: 'bg-gray-900' },
            { name: 'GDScript', textColor: 'text-white', bgColor: 'bg-blue-600' },
            { name: '2D Game Development', textColor: 'text-white', bgColor: 'bg-green-500' },
            { name: 'UI/UX Design', textColor: 'text-white', bgColor: 'bg-purple-600' },
            { name: 'Game Logic', textColor: 'text-white', bgColor: 'bg-red-500' },
            { name: 'Event Handling', textColor: 'text-white', bgColor: 'bg-indigo-700' },
        ],
        [
            { name: 'Next.js', textColor: 'text-white', bgColor: 'bg-black' },
            { name: 'React', textColor: 'text-white', bgColor: 'bg-blue-500' },
            { name: 'Drizzle', textColor: 'text-white', bgColor: 'bg-purple-600' },
            { name: 'Google Cloud', textColor: 'text-white', bgColor: 'bg-blue-400' },
            { name: 'Vercel', textColor: 'text-white', bgColor: 'bg-black' },
            { name: 'SQL', textColor: 'text-white', bgColor: 'bg-indigo-700' },
        ],
        [
            { name: 'Android Studio', textColor: 'text-white', bgColor: 'bg-green-500' },
            { name: 'Firebase', textColor: 'text-white', bgColor: 'bg-yellow-500' },
            { name: 'Figma', textColor: 'text-white', bgColor: 'bg-gray-900' },
            { name: 'GitHub', textColor: 'text-white', bgColor: 'bg-black' },
            { name: 'Agile Practices', textColor: 'text-white', bgColor: 'bg-blue-600' },
        ],
        [
            { name: 'HTML', textColor: 'text-white', bgColor: 'bg-orange-500' },
            { name: 'CSS', textColor: 'text-white', bgColor: 'bg-blue-500' },
            { name: 'JavaScript', textColor: 'text-black', bgColor: 'bg-yellow-300' },
            { name: 'p5.js', textColor: 'text-white', bgColor: 'bg-pink-500' },
            { name: 'Sorting Algorithms', textColor: 'text-white', bgColor: 'bg-purple-600' },
            { name: 'Pathfinding Algorithms', textColor: 'text-white', bgColor: 'bg-green-600' },
            { name: 'Algorithm Visualization', textColor: 'text-white', bgColor: 'bg-indigo-700' }
        ]
    ];

    return (
        <div className="w-full lg:w-3/5 px-4 sm:px-6 lg:px-0 mx-auto flex flex-col gap-8">
            <p className="text-3xl">Projects 🚀</p>
            <div className="flex flex-col gap-16">
                <div className="p-2 border-2 rounded-md">
                    <Project
                        title="AI - Powered Job Board"
                        date="June 2025 (Currently in progress)"
                        summary="Currently learning how to build a job board to enhance my skills in: authentication, payments, AI models, organization/user permissions, background jobs, and much more."
                        technologies={technologies[0]}
                        links={["https://github.com/ItsMikeyy/job-listings", ""]}
                    />
                </div>
                <div className="p-2 border-2 rounded-md">
                    <Project
                        title="Blackjack"
                        date="April 2025"
                        summary="Developed a fully functional Blackjack game using Godot Engine and GDScript. The game includes card dealing, player interactions, and game logic, with a focus on 2D game development and UI/UX design. Implemented event handling for player actions such as hitting and standing, creating an engaging and interactive experience."
                        technologies={technologies[1]}
                        links={["", ""]}
                    />
                </div>
                <div className="p-2 border-2 rounded-md">
                    <Project
                        title="GoFit"
                        date="Jan 2025 (Currently on pause)"
                        summary="I developed a web application using Next.js, SQLite, and Drizzle for workout, nutrition, and progress tracking. I implemented secure, cloud-based authentication with NextAuth and Google Cloud APIs, and designed responsive, intuitive user interfaces optimized for both mobile and desktop experiences."
                        technologies={technologies[2]}
                        links={["https://github.com/ItsMikeyy/GoFit", "https://go-fit-kappa.vercel.app/"]}
                    />
                </div>
                <div className="p-2 border-2 rounded-md">
                    <Project
                        title="Event Check-In App"
                        date="Jan 2024 - Apr 2024"
                        summary="Led a team of five in developing a mobile event check-in app, featuring QR code sign-ups and event creation. Utilized Figma for UI/UX design, Android Studio for development, and Firebase for database and authentication. Collaborated through GitHub and followed Agile practices to deliver a seamless, user-friendly experience."
                        technologies={technologies[3]}
                        links={["https://github.com/CMPUT301W24T38/Collatz301", ""]}
                    />
                </div>
                <div className="p-2 border-2 rounded-md">
                    <Project
                        title="Sorting and Pathfinding Visualizer"
                        date="Nov 2023"
                        summary="Developed a sorting and pathfinding visualizer using JavaScript and p5.js. The application allows users to visualize sorting algorithms like Bubble Sort, Quick Sort, and Merge Sort, as well as pathfinding algorithms like DFS and BFS. The visualizer provides a clear and interactive way to understand how these algorithms work, with customizable settings for speed and visualization options."
                        technologies={technologies[4]}
                        links={["https://github.com/ItsMikeyy/PathFinding", "https://itsmikeyy.github.io/PathFinding/"]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects