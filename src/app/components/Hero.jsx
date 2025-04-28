import Image from "next/image"

const Hero = () => {
    return(
        <div className="flex justify-center my-8 w-1/2">
            <div className="flex flex-col p-4 text-white justify-around border-3 border-gray-400 rounded-xl w-full">
                <div className="p-4 gap-16 flex flex-row items-center justify-center border-b-2 border-gray-700">
                    <div>
                        <Image 
                            src="/headshot.jpg"
                            alt="headshot"
                            width={120}
                            height={120} 
                            style={{ borderRadius: '50%',}}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl font-bold">Michael Carey</p>
                        <div>
                            <p className="text-md text-gray-400" >Recent University of Alberta Computer Science graduate </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 justify-between flex flex-row items-center">
                    <div>
                        <p className="text-md font-bold">📍 Edmonton, AB</p>
                        <p className="text-md font-bold">✉️ careyamichael2002@gmail.com</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <img src="/linkedin.png" />
                        <img src="/github.png" />
                    </div>
                </div>
            </div>
            
        </div>
    )
   
}

 export default Hero