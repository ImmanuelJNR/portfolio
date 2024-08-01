import { FC } from "react"
import Navbar from "./UI/navbar"
import {Footer, PreFooter} from "./UI/footer"
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { motion, useScroll } from 'framer-motion';
// import { useEffect, useRef } from "react";


const Firstsection = styled.div `
margin: 10% 0;

@media only screen and (max-width: 800px){
margin: 50px 0;
}
`

const Home: FC = () => {
    // const container = useRef()
    // const {scrollProgress} = useScroll[{
    //     target: container,
    //     offset:
        
    // }]


    return (
        <>
            <div  className="flex flex-col items-center">

                <Navbar/>

                <Firstsection className=" w-[90%]  md:w-4/5 flex items-start flex-col ">
                    <div className="md:w-[55%]">
                        <p className="dash-before mb-[24px] font-bodyFont text-fontColor uppercase ">hello</p>
                        <h1 className="font-headerFont mb-4 text-fontColor text-5xl font-bold ">I'm Elijah Emmanuel</h1>
                        <p className="font-bodyFont text-xl text-fontColor font-light leading-8 ">
                            I am <span>seasoned</span> frontend developer who uses frontend tools to create and maintain functional and interactive user-friendly web interface. Beyond the act of just writing codes, I strife to bring solution to real life problems and making the world a better place through programming
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

                <div className="w-[90%] md:w-4/5 flex flex-col md:justify-between md:flex-row  h-fit mt-8 mb-8">
                    <div className="w-full md:w-[45%]">
                        <p className=" font-headerFont  text-stroke text-fontColor text-6xl font-bold ">O1</p>
                        <p className=" text-fontColor font-bold font-bodyFont mt-5 mb-5 text-3xl">Food Ordering App</p>
                        <p className="  text-fontColor font-bodyFont  font-normal leading-8  text-base">
                        Food Ordering App is web app I built using React, TypeScript and JSON. It offers users a wide variety of meals available with price tags, and allows user to make a choice by adding to cart and make payment through paystack which is Integrated into the web app 
                        </p>
                        <p className="font-bold underline text text-fontColor font-bodyFont"><a href="https://immanueljnr.github.io/food-ordering-app/">Live link</a></p>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>

                </div>
                <div className="w-[90%] flex flex-col-reverse md:justify-between md:flex-row md:w-4/5 h-fit mt-8 mb-8">
                    <div className="w-full  md:w-[45%]">
                        <img src="" alt="" />
                    </div>
                    <div className="w-full md:w-[45%]">
                        <p className=" font-headerFont  text-stroke text-fontColor text-6xl font-bold ">O2</p>
                        <p className=" text-fontColor font-bold font-bodyFont mt-5 mb-5  text-3xl">IP Address Tracker</p>
                        <p className="  text-fontColor font-bodyFont  font-normal leading-8  text-base">
                        IP Address Tracker is web app I created from frontend mentor, using react, TypeScript leafletJS and API, the app shows public ip address of the user, the location, time Zone and the Internet service provider 
                        </p>
                        <p className="font-bold underline text text-fontColor font-bodyFont"><a href="https://immanueljnr.github.io/Ip-address-tracker/">Live link</a></p>
                    </div>   

                </div>
                <div className="w-[90%] md:w-4/5 flex justify-between flex-col md:justify-between  md:flex-row h-fit mt-8 mb-8">
                    <div className="w-full md:w-[45%]">
                        <p className=" font-headerFont  text-stroke text-fontColor text-6xl font-bold ">O3</p>
                        <p className=" text-fontColor font-bold font-bodyFont mt-5 mb-5 text-3xl">Countries Info App</p>
                        <p className="  text-fontColor font-bodyFont  font-normal leading-8  text-base">
                        Countries Info App is web app I created from frontend mentor using React, JavaScript and API, the web displays the list of the countries in world and allows user to click on a country and see info about the country 
                        </p>
                        <p className="font-bold underline text text-fontColor font-bodyFont"><a href="https://immanueljnr.github.io/CountriesApp/">Live link</a></p>
                    </div>
                    <div className="w-full md:w-[45%]">
                        <img src="" alt="" />
                    </div>
                </div>
                <PreFooter/>
                <Footer/>

            </div>
        </>
    )
}

export default Home