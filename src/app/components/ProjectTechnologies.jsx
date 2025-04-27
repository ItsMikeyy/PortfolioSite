const ProjectTechnologies = (props) => {

    return (
        <div className="flex flex-wrap gap-4">
        {props.technologies.map((tech) => (
          <div
            key={tech.name}
            className={`${tech.bgColor} ${tech.textColor} font-bold text-lg text-center px-4 py-2 rounded-3xl`}
          >
            <p>{tech.name}</p>
          </div>
        ))}
        </div>
    )
}

export default ProjectTechnologies