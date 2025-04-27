import Image from "next/image"
import ProjectLinks from "./ProjectLinks"

const Project = (props) => {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col gap-4 w-3/4">
                <p className="text-xl font-bold">{props.title}</p>
                <div className="flex flex-row justify-between">
                    <p className="text-md text-gray-400">{props.date}</p>
                </div>
           
                <p className="text-xl text-gray-200 ">{props.summary}</p>
                <ProjectLinks githubLink="https://github.com/ItsMikeyy/GoFit" liveLink="https://go-fit-kappa.vercel.app/" />
            </div>
            <div className="flex gap-4 mt-4">


            </div>
            <div className="">
                <p className="text-lg font-bold py-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                    <div className="bg-black text-white font-bold text-lg text-center px-4 py-2 rounded-3xl">
                        <p>Next.js</p>
                    </div>
                    <div className="bg-blue-500 text-white font-bold text-lg text-center px-4 py-2 rounded-3xl">
                        <p>React</p>
                    </div>
                    <div className="bg-purple-600 text-white font-bold text-lg text-center px-4 py-2 rounded-3xl">
                        <p>Drizzle</p>
                    </div>
                    <div className="bg-blue-400 text-white font-bold text-lg text-center px-4 py-2 rounded-3xl">
                        <p>Google Cloud</p>
                    </div>
                    <div className="bg-black text-white font-bold text-lg text-center px-4 py-2 rounded-3xl">
                        <p>Vercel</p>
                    </div>
                    <div className="bg-indigo-700 text-white font-bold text-lg text-center px-4 py-2 rounded-3xl">
                        <p>SQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project