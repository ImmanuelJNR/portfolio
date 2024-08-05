import { FC } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';




const Hamburger = styled.div<{ isActive: boolean }> `
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

      const menuVars = {
        initial: {
            scaleY: 0, 
        },
        animate: {
            scaleY: 1,
            transition:{
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0]
            }
        }, 
        exit: {
            scaleY: 0,
            transition:{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    const mobileLinkVars = {
        initial : {
            y: "0",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1]
            }
        },
        open:{
            y:0,
            transition:{
                duration: 0.7,
                ease: [0, 0.55, 45, 1]
            }
        }
    }

    const containerVars = {
        initial: {
            transition:{
                staggerChildren: 0.9,
                
            }
        },
        open: {
            transition:{
                staggerChildren: 0,

            }
        }
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
                        className="block md:hidden gap-5 mt-6 origin-top" 
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"

                    >
                      <motion.div 
                        variants={containerVars}

                      className="overflow-hidden">
                        <motion.p variants={mobileLinkVars} className=" font-bodyFont pt-1 pb-1 text-fontColor hover:text-black" ><a href="">Resume</a></motion.p>
                        <motion.p variants={mobileLinkVars} className=" font-bodyFont pt-1 pb-1  text-fontColor  hover:text-black"><a href="">About Me</a></motion.p>
                        <motion.p variants={mobileLinkVars} className=" font-bodyFont pt-1 pb-1 text-fontColor  hover:text-black"><a href="">Contact</a></motion.p>
                      </motion.div>
                    </motion.div>
                )}
                </AnimatePresence>

            </div>

        </>
    )

}

export default Navbar