import React from "react";
import { PageArea } from "./styled";
import { BsQuestion, BsHouse } from "react-icons/bs";
import { BiCake } from "react-icons/bi";
import { Link } from "react-router-dom";

export default () => {
    return (
        <PageArea>
           <div className="menu-container">
                <Link exact to='/'>
                    <div className="logo">                   
                        <img src={require("./final-azul.png")}/>
                    </div>  {/* logo */}  
                </Link>
                    <div className="menu-icons">
                        <form> 
                            <Link exact to='/'>
                                <div><BsHouse className="icons"/></div>
                            </Link>
                            <Link exact to='/cakes'>
                                <div><BiCake className="icons"/></div>
                            </Link>
                            <Link exact to='/candy'>
                                <div><img src={require("./216696-200.png")}/></div>
                            </Link>
                            <Link exact to='/about'>
                                <div><BsQuestion className="icons"/></div>
                            </Link>
                        </form>
                </div>  {/* menu-icons */}         
           </div>{/* menu-container */}
        </PageArea>
    );
}