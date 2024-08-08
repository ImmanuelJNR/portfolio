import { FC } from "react"
import Navbar from "./UI/navbar"
import {Footer, PreFooter} from "./UI/footer"
import styled from "styled-components";
import { Link } from "react-router-dom";
import foodOrdering from ".././assets/Frame 4.svg"
import CountriesProject from ".././assets/Frame 5.svg"
import IP_tracker from ".././assets/Frame 6.svg"


const Firstsection = styled.div `
margin: 10% 0;

@media only screen and (max-width: 800px){
margin: 50px 0;
}
`

const Home: FC = () => {


    return (
        <>
            <div  className="flex flex-col items-center overflow-x-hidden">

                <Navbar/>

                <Firstsection className=" w-[90%]  md:w-4/5 flex items-start flex-col ">
                    <div className="md:w-[55%]">
                        <p className="dash-before mb-[24px] font-bodyFont text-fontColor uppercase ">hello</p>
                        <h1 className="font-headerFont mb-4 text-fontColor text-5xl font-bold ">I'm Elijah Emmanuel</h1>
                        <p className="font-bodyFont text-xl text-fontColor font-light leading-8 ">
                         I am seasoned frontend developer who uses software programming tools to create and maintain functional and interactive user-friendly web interface. Beyond just writing codes, I strive to innovate solutions to real life problems and make the world a better place through software development
                        </p>
                    </div>
                    <Link to="/about">
                    <button className="bg-btnColor mt-[24px] border-solid border-white border text-white text-base rounded pt-[14px] pb-[14px] pl-[24px] pr-[24px]">More About Me</button>
                    </Link>
                </Firstsection>

                <div className="w-[90%] flex items-center md:justify-end md:w-4/5 text-left" >
                    <hr className="w-[120px] bg-fontColor h-[1px] border-0" />
                    <p className="featured font-bodyFont pl-[10px] text-fontColor uppercase ">Featured Projects</p>
                </div>

                <div className="w-[90%] md:w-4/5 flex flex-col md:justify-between md:items-center md:flex-row  h-fit mt-8 mb-8">
                    <div
                     className="w-full md:w-[45%] md:mb-0 mb-12">
                        <p className=" font-headerFont  text-stroke text-fontColor text-6xl font-bold ">O1</p>
                        <p className=" text-fontColor font-bold font-bodyFont  mt-5 mb-5 text-3xl">Food Ordering App</p>
                        <p className="  text-fontColor font-bodyFont  font-normal leading-8  text-base">
                         The Food Ordering App is a web app I built using React, TypeScript, and JSON. It offers users a wide variety of meals available with price tags and allows them to make a choice by adding them to their cart and making payments through Paystack, which is integrated into the web app.
                        </p>
                        <p className="font-bold underline text text-fontColor font-bodyFont"><a href="https://immanueljnr.github.io/food-ordering-app/">Live link</a></p>
                    </div>
                    < div 
                   
                    className="w-full  md:w-[45%]">
                        <img src={foodOrdering} className="w-full" alt="" />
                    </div>

                </div>
                <div className="w-[90%] flex flex-col-reverse md:items-center md:justify-between md:flex-row md:w-4/5 h-fit mt-8 mb-8">
                    <div
                     
                    className="w-full  md:w-[45%] ">
                        <img src={IP_tracker} className="w-full" alt="" />
                    </div>
                    <div  
                    className="w-full md:w-[45%] md:mb-0 mb-12">
                        <p className=" font-headerFont  text-stroke text-fontColor text-6xl font-bold ">O2</p>
                        <p className=" text-fontColor font-bold font-bodyFont mt-5 mb-5  text-3xl">IP Address Tracker</p>
                        <p className="  text-fontColor font-bodyFont  font-normal leading-8  text-base">                    
                        IP Address Tracker is a web app I replicated from a frontend mentor website using React, TypeScript, LeafletJS, and an API. The app detects the public IP address of the user, the location, the time zone, and the Internet service provider.
 
                        </p>
                        <p className="font-bold underline text text-fontColor font-bodyFont"><a href="https://immanueljnr.github.io/Ip-address-tracker/">Live link</a></p>
                    </div>   

                </div>
                <div className="w-[90%] md:w-4/5 flex justify-between flex-col md:items-center md:justify-between  md:flex-row h-fit mt-8 mb-8">
                    <div 
                    className="w-full md:w-[45%] md:mb-0 mb-12">
                        <p className=" font-headerFont  text-stroke text-fontColor text-6xl font-bold ">O3</p>
                        <p className=" text-fontColor font-bold font-bodyFont mt-5 mb-5 text-3xl">Countries Info App</p>
                        <p className="  text-fontColor font-bodyFont  font-normal leading-8  text-base">
                        Countries Info App is a web app I replicated from a frontend mentor using React, JavaScript, and API. The web app displays the list of countries in the world and allows users to click on a country and see information about the country. I implemented search and filter functionality on this project to enhance the user experience. This way, the user can quickly access the country of his choice without having to go through the stress of scrolling.
                        </p>
                        <p className="font-bold underline text text-fontColor font-bodyFont"><a href="https://immanueljnr.github.io/CountriesApp/">Live link</a></p>
                    </div>
                    <div 
                    className="w-full md:w-[45%]">
                        <img src={CountriesProject} className="w-full" alt="" />
                    </div>
                </div>
                <PreFooter/>
                <Footer/>

            </div>
        </>
    )
}

export default Home