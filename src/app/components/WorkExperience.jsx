const WorkExperience = (props) => {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-xl font-bold">{props.title}</p>
            <div className="flex flex-row justify-between">
                <p className="text-md text-gray-400">{props.location}</p>
                <p className="text-md text-gray-400">{props.date}</p>
            </div>
            <p className="text-xl text-gray-200 ">{props.summary}</p>
        </div>
    )
}

export default WorkExperience