import Image from "next/image"

const Hero = () => {
    return(
        <div className="flex justify-center my-8">
            <div className="p-4 gap-16 flex flex-row items-center text-white justify-around border-3 border-gray-400 rounded-xl">
                <div>
                    <Image 
                        src="/headshot.jpg"
                        width={120}
                        height={120} 
                        style={{ borderRadius: '50%',}}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-bold">Hello my name is Michael Carey!</p>
                    <div>
                        <p className="text-md text-gray-400" >Recent University of Alberta Computer Science graduate </p>
                        <p className="text-md text-gray-400" >I enjoy Web and Game Development</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
   
}

 export default Hero