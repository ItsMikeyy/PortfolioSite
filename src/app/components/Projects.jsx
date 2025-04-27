import Project from "./Project"

const Projects = () => {
    const technologies = [
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
    ];

    return (
        <div className="w-1/2 flex flex-col gap-8">
            <p className="text-3xl">Projects 🚀</p>
            <div className="flex flex-col gap-16">
                <div className="p-2 border-2 rounded-md">
                    <Project 
                        title="Blackjack" 
                        date="April 2025" 
                        summary="Developed a fully functional Blackjack game using Godot Engine and GDScript. The game includes card dealing, player interactions, and game logic, with a focus on 2D game development and UI/UX design. Implemented event handling for player actions such as hitting and standing, creating an engaging and interactive experience." 
                        technologies={technologies[0]}
                        links={["",""]}
                    />
                </div>
                <div className="p-2 border-2 rounded-md">
                    <Project 
                        title="GoFit" 
                        date="Jan 2025 - present" 
                        summary="I developed a web application using Next.js, SQLite, and Drizzle for workout, nutrition, and progress tracking. I implemented secure, cloud-based authentication with NextAuth and Google Cloud APIs, and designed responsive, intuitive user interfaces optimized for both mobile and desktop experiences." 
                        technologies={technologies[1]}
                        links={["https://github.com/ItsMikeyy/GoFit", "https://go-fit-kappa.vercel.app/"]}
                    />
                </div>
                <div className="p-2 border-2 rounded-md">
                    <Project 
                        title="Event Check-In App" 
                        date="Jan 2024 - Apr 2024" 
                        summary="Led a team of five in developing a mobile event check-in app, featuring QR code sign-ups and event creation. Utilized Figma for UI/UX design, Android Studio for development, and Firebase for database and authentication. Collaborated through GitHub and followed Agile practices to deliver a seamless, user-friendly experience." 
                        technologies={technologies[2]}
                        links={["https://github.com/CMPUT301W24T38/Collatz301",""]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects