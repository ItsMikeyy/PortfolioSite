import Skill from "./Skill"
const Skills = () => {
    const skills = [
        { name: 'HTML', textColor: 'text-white', bgColor: 'bg-orange-500' },
        { name: 'CSS', textColor: 'text-white', bgColor: 'bg-blue-500' },
        { name: 'JavaScript', textColor: 'text-black', bgColor: 'bg-yellow-400' },
        { name: 'Next.js / React', textColor: 'text-white', bgColor: 'bg-black' },
        { name: 'Java', textColor: 'text-white', bgColor: 'bg-red-600' },
        { name: 'C#', textColor: 'text-white', bgColor: 'bg-purple-700' },
        { name: 'C', textColor: 'text-white', bgColor: 'bg-blue-700' },
        { name: 'Python', textColor: 'text-white', bgColor: 'bg-blue-400' },
        { name: 'GO', textColor: 'text-white', bgColor: 'bg-cyan-600' },
        { name: 'Node.js', textColor: 'text-white', bgColor: 'bg-green-600' },
        { name: 'Firebase', textColor: 'text-black', bgColor: 'bg-yellow-300' },
        { name: 'MongoDB', textColor: 'text-white', bgColor: 'bg-green-700' },
        { name: 'Git / GitHub', textColor: 'text-white', bgColor: 'bg-gray-800' },
        { name: 'Figma', textColor: 'text-white', bgColor: 'bg-pink-500' },
        { name: 'Unity', textColor: 'text-white', bgColor: 'bg-gray-900' },
        { name: 'Godot', textColor: 'text-white', bgColor: 'bg-blue-500' },
      ];
      
    return (
        <div className="w-full max-w-4xl flex flex-col gap-8 px-4">
            <p className="text-3xl text-center sm:text-left">Skills 🎯</p>

            <div className="w-full flex gap-4 flex-wrap justify-center sm:justify-start">
                {skills.map(({ name, textColor, bgColor }) => (
                    <Skill
                    key={name}
                    skillName={name}
                    textColor={textColor}
                    bgColor={bgColor}
                    />
                ))}
            </div>
        </div>

    )
}

export default Skills