const ProjectLinks = ({ githubLink, liveLink }) => {
    return (
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white text-center rounded-lg font-semibold hover:bg-gray-700 transition w-full sm:w-auto"
          >
            GitHub
          </a>
        )}
  
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white text-center rounded-lg font-semibold hover:bg-blue-500 transition w-full sm:w-auto"
          >
            View Live
          </a>
        )}
      </div>
    );
  };
  
  export default ProjectLinks;
  