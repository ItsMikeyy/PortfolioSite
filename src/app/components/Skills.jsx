import Skill from "./Skill"
const Skills = () => {
    return (
        <div className="w-1/2 flex flex-col gap-8">
            <p className="text-3xl ">Skills 🎯</p>
            <div className="w-full flex gap-4 flex-row flex-wrap justify-center" >
                <Skill skillName="HTML" />
                <Skill skillName="CSS" />
                <Skill skillName="JavaScript" />
                <Skill skillName="Next.js / React" />
                <Skill skillName="Java" />
                <Skill skillName="C#" />
                <Skill skillName="C" />
                <Skill skillName="Python" />
                <Skill skillName="GO" />
                <Skill skillName="Node.js" />
                <Skill skillName="Firebase" />
                <Skill skillName="MongoDB" />
                <Skill skillName="Git / GitHub" />
                <Skill skillName="Figma" />
                <Skill skillName="Unity" />
                <Skill skillName="Godot" />
            </div>
        </div>
    )
}

export default Skills