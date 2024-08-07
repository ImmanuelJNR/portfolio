import { FC } from "react"
import Navbar from "./UI/navbar"
import { Footer } from "./UI/footer"
import ProfileImage from '.././assets/Frame 1.svg'
import ProfileImage2 from '.././assets/Screenshot_20240720_224623_Photos.jpg'


const Aboutme: FC = () => {
    return (
        <div className="flex flex-col items-center">
            <Navbar/>
            <div className=" w-[90%] md:w-4/5 md:flex-row mt-24 mb-24">
                <p className="dash-before text-fontColor mb-4 md:mb-0">ABOUT ME</p>
                <div className=" flex flex-col-reverse justify-between md:flex-row ">
                    <div className="w-full md:w-[45%]">
                        <p  className="text-fontColor font-bold text-2xl font-headerFont mt-6 mb-6">I am a seasoned frontend developer who is driven by purpose</p>
                        <p className=" text-fontColor font-bodyFont  font-light leading-8  text-base"> I am seasoned front-end developer who uses software development tools to create and maintain functional and interactive user-friendly Web interfaces. Beyond the act of just writing codes, I strive to <span className="font-bold">innovate solutions</span>  to real life problems and make the world a better place through software development. I have <span className="font-bold">4+ years</span> of experience in software development    
                        Throughout my career, I have had the privilege of collaborating with designers, co-developers, and experts in other fields to develop products that serve users effectively and align with business objectives. I have also single-handedly developed some projects from scratch to finish, which shows not just the ability to utilize my skills but also the ability to ensure self-discipline to achieve certain goals even when not supervised.
                        Knowing that the tech industry is a fast-growing industry, I read extensively and research daily to keep myself up to date with current trends in software development.

                        </p>

                        <p  className="text-fontColor font-bold text-2xl font-headerFont mt-6 mb-6">My tried-and-true building process</p>
                        <p className=" text-fontColor font-bodyFont  font-light leading-8  text-base mb-5 ">
                        Here is a brief summary of my development process. First and foremost, I make sure I understand the problem; this involves understanding the UI/UX design and the necessary functionalities for implementation. </p>
                        
                        <p className=" text-fontColor font-bodyFont  font-light leading-8  text-base mb-5 ">Secondly, I research the problem so as to gather more information about it and decide on the tools that would be the best fit for the project.</p> 
                        
                        <p className=" text-fontColor font-bodyFont  font-light leading-8  text-base mb-5">Furthermore, I take is to break down the project into manageable tasks. This could involve defining the components, writing down the algorithms, and planning the routes.</p>
                        
                        <p className=" text-fontColor font-bodyFont  font-light leading-8  text-base mb-5 ">Next, I jump into my code editor and perform the magic using best practices to ensure the code is maintainable, scalable, and of high performance.</p>
                        
                        <p className=" text-fontColor font-bodyFont  font-light leading-8  text-base mb-5"> Then lastly I perform thorough testing to ensure the solution meets functional and non-functional requirements</p>
                        
                        <p className=" text-fontColor font-bodyFont  font-light leading-8  text-base mt-6 ">
                        Transitioning into the tech industry from a background with minimal exposure to computers presented its challenges. However, through consistent effort, discipline, and dedication, I can confidently say that the journey has been rewarding, with dreams increasingly becoming a reality. At this stage in my career, I have come to value hard work and discipline over innate talent. Above all, I hold a deep belief in the grace provided by God, which guides and supports me.

                        </p>
                    </div>
                   




                    <div className="w-full md:w-[40%]">
                        <img src={ProfileImage2} className="w-full" alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Aboutme