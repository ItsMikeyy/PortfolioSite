const ProjectLinks = (props) => {
    return (
        <div className="flex justify-start gap-4">
            <a
                href={props.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
            >
                GitHub
            </a>

            <a
                href={props.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition"
            >
                View Live
            </a>
        </div>
    )
}
export default ProjectLinks