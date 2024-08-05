import { FC } from "react"
import Navbar from "./UI/navbar"
import { Footer } from "./UI/footer"
import ProfileImage from '.././assets/Frame 1.svg'

const Aboutme: FC = () => {
    return (
        <div className="flex flex-col items-center">
            <Navbar/>
            <div className=" w-[90%] md:w-4/5 md:flex-row mt-24 mb-24">
                <p className="dash-before text-fontColor mb-4 md:mb-0">ABOUT ME</p>
                <div className=" flex flex-col-reverse justify-between md:flex-row ">
                    <div className="w-full md:w-[45%]">
                        <p  className="text-fontColor font-bold text-2xl font-headerFont mt-6 mb-6">I am a seasoned frontend developer who is driven by purpose</p>
                        <p className=" text-fontColor font-bodyFont  font-light leading-8  text-base"> I am seasoned front-end developer who uses front-end tools to create and maintain functional and interactive user-friendly Web interfaces. Beyond the act of just writing codes, I strife to bring solutions to real life problems and making the world a better place through software development. I have 4+ years of experience in software development 
                        Throughout my career, I have had the privilege of collaborating with designers, Co-developers and expert of other  fields to develop products that serve users effectively and as well align with business objectives. I have also single handedly developed some projects from scratch to finish, which shows not just the ability to utilise my skills but also ensure self discipline to achieve certain goals even when not supervised.
                        Knowing that the tech industry is a fast growing industry, I read extensively and research daily to keep my self up to date with current trends in software development.
                        </p>

                        <p  className="text-fontColor font-bold text-2xl font-headerFont mt-6 mb-6">My Coding Process</p>
                        <p className=" text-fontColor font-bodyFont  font-light leading-8  text-base">
                        Here is a brief of my Development process. First and foremost, I make sure, I  understand the problem, this involves understanding the ux design and  it flow as well as the target audience. secondly I research about the problem, so as to gather more information about the problem, in other to decide on the  tools that would be a best fit for the project. The next important step I take is to break the project into important manageable task,  this could involve defining the components, writting down the algorithms, and planning the routes. Then I jump into my code editor and perform the magic using best practices to ensure the code is maintainable, scalable and of high performance. Then lastly I perform thorough testing to ensure the solution meets functional and non-functional requirements 
                        </p>
                        <p className=" text-fontColor font-bodyFont  font-light leading-8  text-base mt-6">
                        Breaking into tech from a background with a very little exposure to computers, it was a bit challenging. But with consistency, discipline and hardwork, I would say the journey is worth it, dreams are becoming reality. 
                        At this point of my career, I would say I believe in hardwork and discipline over talent but mostly I believe in God who gives grace to all men
                        </p>
                    </div>
                   




                    <div className="w-full md:w-[40%]">
                        <img src={ProfileImage} alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Aboutme