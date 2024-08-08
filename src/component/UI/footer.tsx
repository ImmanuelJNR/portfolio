import { FC } from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import javaScriptIcon from '../../assets/icons8-javascript-250.svg'
import htmlIcon from "../../assets/icons8-html5-250.svg"
import reactIcon from "../../assets/icons8-react-native-250.svg"
import Git from "../../assets/icons8-git-250.svg"
import Sass from "../../assets/icons8-sass-250.svg"
import typeScript from "../../assets/icons8-typescript-250.svg"
// import Nextjs from "../../assets/icons8-next.js-250.svg"
import tailwind from "../../assets/icons8-tailwind-css.svg"
import css from "../../assets/icons8-css3-250.svg"

export const PreFooter: FC = () =>{
    return(
        <>
        <div className=" flex flex-col w-[90%]  md:w-4/5 mt-10 mb-10">
            <p 
            className="font-headerFont mb-4 text-fontColor text-left text-3xl font-bold ">My skills</p>
            

            <div 
            className=" flex flex-wrap gap-5  justify-around md:flex-nowrap">
                <div className="flex flex-col items-center font-bodyFont  md:w-[100px] w-[3.5rem]   text-fontColor">
                <img src={htmlIcon} className=" w-[100%] h-auto" alt="" />
                <p>Html</p>
                </div>
                <div className="flex flex-col items-center font-bodyFont   md:w-[100px] w-[3.5rem]  text-fontColor">
                <img src={css} className=" w-[100%] h-auto" alt="" />
                <p>CSS</p>
                </div>
                <div className="flex flex-col items-center font-bodyFont  md:w-[100px] w-[3.5rem] text-fontColor">
                <img src={javaScriptIcon} className="w-[100%] h-auto" alt="" />
                <p>JavaScript</p>
                </div>
                <div className="flex flex-col items-center font-bodyFont   md:w-[100px] w-[3.5rem] text-fontColor">
                <img src={Git} className=" w-[100%] h-auto" alt="" />
                <p>Git</p>
                </div>
                <div className="flex flex-col items-center font-bodyFont   md:w-[100px] w-[3.5rem] text-fontColor">
                <img src={Sass} className="w-[100%] h-auto" alt="" />
                <p>Sass</p>
                </div>
                <div className="flex flex-col items-center font-bodyFont  md:w-[100px] w-[3.5rem]  text-fontColor">
                <img src={reactIcon} className="w-[100%] h-auto" alt="" />
                <p>React</p>
                </div>
                <div className="flex flex-col items-center font-bodyFont   md:w-[100px] w-[3.5rem] text-fontColor">
                <img src={typeScript} className="w-[100%] h-auto" alt="" />
                <p>TypeScript</p>
                </div>
                <div className="flex flex-col items-center font-bodyFont  md:w-[100px] w-[3.5rem]  text-fontColor">
                <img src={tailwind} className="w-[100%] h-auto" alt="" />
                <p>Tailwind css</p>
                </div>
            </div>
        </div>
        </>
    )
}
export const Footer: FC = () => {

    return(
        <>
        <div className="flex flex-col items-center md:w-4/5 mt-7 mb-14 w-[90%] ">
            {/* <p className="font-headerFont mb-4 text-fontColor text-3xl font-bold text-center">I'm that guy for your project</p> */}
            <p className="font-headerFont mb-4 text-fontColor text-3xl font-bold text-center">Let's get in touch</p>

            <div className=" block  md:flex  mb-4 md:gap-3">
                <p className="text-center font-bodyFont  text-fontColor"><a href="mailto: elijaheffiong088@gmail.com">elijaheffiong088@gmail.com</a></p>
                <p className="text-center font-bodyFont  text-fontColor"><a href="tel:+2347062644718">+2347062644718</a></p>
            </div>
            <div className="flex gap-5 ">
                <a href="https://github.com/ImmanuelJNR">
                <FaGithub className=" text-fontColor text-5xl "/>
                </a>
                <a href="https://www.linkedin.com/in/elijah-emmanuel-256bb1239/">
                <FaLinkedin className=" text-fontColor text-5xl "/>
                </a>
            </div>
        </div>
        </>
    )
}

