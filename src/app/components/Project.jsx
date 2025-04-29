import ProjectLinks from "./ProjectLinks"
import ProjectTechnologies from "./ProjectTechnologies"

const Project = (props) => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 w-full px-4">
            <div className="flex flex-col gap-4 w-full lg:w-2/3 p-4 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-700">
                <p className="text-xl font-bold">{props.title}</p>
                    <div className="flex justify-between text-gray-400 text-md">
                        <p>{props.date}</p>
                    </div>
                <p className="text-lg text-gray-200">{props.summary}</p>
                <ProjectLinks githubLink={props.links[0]} liveLink={props.links[1]} />
            </div>
            <div className="flex flex-col w-full lg:w-1/3 gap-2">
                <p className="text-lg font-bold py-2">Tools / Skills</p>
                <div className="flex flex-wrap gap-2">
                    <ProjectTechnologies technologies={props.technologies} />
                </div>
            </div>
        </div>
    )
}

export default Project