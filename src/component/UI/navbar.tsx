import { FC } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import Resume from  "../../assets/ElijahEmmanuelResume.pdf"




const Hamburger = styled.div<{ isActive: boolean }>`
    width: 50px;
    height: 35px;
    border: 1px solid #70685b;
    border-radius: 4px;
    padding: 8px 10px;
    cursor: pointer;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
     transition: transform 0.5s, opacity 0.3s; // Added opacity transition
    transform-origin: center; 
    // gap: 5px;

    .dash{
        width: 100%;
        height: 2px;
        background: #70685b;
        transition: transform 0.3s, opacity 0.3s; // Transition for each dash
        
        // margin: 4px 0;
    }

    .dash:nth-child(1) {
        transform: ${({ isActive }) =>
            isActive ? 'rotate(-45deg)  translate(-5px, 6px)' : 'none'};
    }

    .dash:nth-child(2) {
        opacity: ${({ isActive }) => (isActive ? '0' : '1')};
    }

    .dash:nth-child(3) {
        transform: ${({ isActive }) =>
            isActive ? 'rotate(45deg) translate(-5px, -6px)' : 'none'};
    }

    @media only screen and (max-width: 767px){
      display: flex;
    }

`

const Navbar: FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const clickHamburger = () => {
        setToggleMenu(prevState => !prevState)
    }

     
    



    const mobileLinkVars = {
        initial: {
            opacity: 0,
            y: 20, // Start from below
            transition: {
                duration: 0.5,
            },
        },
        animate: {
            opacity: 1,
            y: 0, // Move to the original position
            transition: {
                duration: 0.5,
                ease: [0, 0.55, 0.45, 1],
            },
        },
        exit: {
            opacity: 0,
            y: 20, // Move down
            transition: {
                duration: 0.3,
                ease: [0.37, 0, 0.63, 1],
            },
        },
    };

    const containerVars = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.3, // Stagger children on entrance
                delayChildren: 0.1, // Optional: delay before starting stagger
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.3, // Stagger children on exit
                staggerDirection: -1, // Stagger in reverse order
            },
        },
    };



    return (
        <>
            <div className="md:w-4/5 mt-7 w-[90%] ">

                <div className=" flex justify-between items-center  w-full">
                    <p className="font-headerFont underline-before text-fontColor font-bold "><Link to="/">Elijah Emmanuel</Link></p>
                    
                    <div className="hidden md:flex  gap-5">
                        <p className=" font-bodyFont text-fontColor hover:text-black"><a href={Resume} download>Resume</a></p>
                        <p className=" font-bodyFont text-fontColor  hover:text-black"> <Link to="/about">About Me</Link> </p>
                        <p className=" font-bodyFont text-fontColor  hover:text-black "><a href="mailto: elijaheffiong088@gmail.com">Contact</a></p>
                    </div>
                
                
                    <Hamburger className="" onClick={clickHamburger} isActive={toggleMenu}>
                        <div className="dash"></div>
                        <div className="dash"></div>
                        <div className="dash"></div>
                    </Hamburger>
                </div>
                <AnimatePresence>

                {toggleMenu && (
                    <motion.div 
                        className="block md:hidden gap-5 mt-6 origin-top" 
                        variants={containerVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"

                    >
                      <motion.div 
                    
                       className="overflow-hidden font-light text-xl">
                        <motion.p variants={mobileLinkVars} className=" font-bodyFont pt-1 pb-1 text-fontColor hover:text-black" ><a href={Resume} download>Resume</a></motion.p>
                        <motion.p variants={mobileLinkVars} className=" font-bodyFont pt-1 pb-1  text-fontColor  hover:text-black"><Link to="/about">About Me</Link></motion.p>
                        <motion.p variants={mobileLinkVars} className=" font-bodyFont pt-1 pb-1 text-fontColor  hover:text-black"><a href="mailto: elijaheffiong088@gmail.com">Contact</a></motion.p>
                      </motion.div>
                    </motion.div>
                )}
                </AnimatePresence>

            </div>

        </>
    )

}

export default Navbar