import { FC } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const Hamburger = styled.div `
    width: 50px;
    height: 35px;
    border: 1px solid #70685b;
    border-radius: 4px;
    padding: 8px 10px;
    cursor: pointer;
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    .dash{
        width: 100%;
        height: 2px;
        background: #70685b;
        
        // margin: 4px 0;
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
                
                
                    <Hamburger className="" onClick={clickHamburger}>
                        <div className="dash"></div>
                        <div className="dash"></div>
                        <div className="dash"></div>
                    </Hamburger>
                </div>
                {toggleMenu && (
                    <div className="block md:hidden  gap-5">
                        <p className=" font-bodyFont  text-fontColor hover:text-black"><a href="">Resume</a></p>
                        <p className=" font-bodyFont  text-fontColor  hover:text-black"><a href="">About Me</a></p>
                        <p className=" font-bodyFont  text-fontColor  hover:text-black "><a href="">Contact</a></p>
                    </div>
                )}

            </div>

        </>
    )

}

export default Navbar