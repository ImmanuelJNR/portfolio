import { FC } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';



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
    transition: transform 0.3s;
    transform-origin: center; 
    // gap: 5px;

    .dash{
        width: 100%;
        height: 2px;
        background: #70685b;
        
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


    return (
        <>
            <div className="md:w-4/5 mt-7 w-[90%] ">

                <div className=" flex justify-between items-center  w-full">
                    <p className="font-headerFont underline-before text-fontColor font-bold "><Link to="/">Elijah Emmanuel</Link></p>
                    
                    <div className="hidden md:flex  gap-5">
                        <p className=" font-bodyFont text-fontColor hover:text-black"><a href="">Resume</a></p>
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
                        className="block md:hidden gap-5 mt-6"
                        // initial={{ opacity: 0, y: -20 }} // Start with hidden state
                        // animate={{ opacity: 1, y: 0 }}  // End with visible state
                        // exit={{ opacity: 0, y: -20 }}   // Fade out and slide up
                        transition={{ 
                            duration: 0.5, 
                            staggerChildren: 0.2  // Stagger the child animations by 0.2 seconds
                        }}
                    >
                        <motion.p className=" font-bodyFont  text-fontColor hover:text-black"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        ><a href="">Resume</a></motion.p>
                        <motion.p className=" font-bodyFont  text-fontColor  hover:text-black"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        ><a href="">About Me</a></motion.p>
                        <motion.p className=" font-bodyFont  text-fontColor  hover:text-black"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        ><a href="">Contact</a></motion.p>
                    </motion.div>
                )}
                </AnimatePresence>

            </div>

        </>
    )

}

export default Navbar