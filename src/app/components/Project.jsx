import ProjectLinks from "./ProjectLinks"
import ProjectTechnologies from "./ProjectTechnologies"

const Project = (props) => {
    return (
        <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-4 w-2xl p-2 border-r-2">
                <p className="text-xl font-bold">{props.title}</p>
                <div className="flex flex-row justify-between">
                    <p className="text-md text-gray-400">{props.date}</p>
                </div>
           
                <p className="text-xl text-gray-200 ">{props.summary}</p>
                <ProjectLinks githubLink={props.links[0]} liveLink={props.links[1]} />
            </div>
            <div className="flex gap-4 mt-4">


            </div>
            <div className="">
                <p className="text-lg font-bold py-2">Tools / Skills</p>
                <div className="flex flex-wrap gap-2">
                    <ProjectTechnologies technologies={props.technologies} />
                    
                </div>
            </div>
        </div>
    )
}

export default Project