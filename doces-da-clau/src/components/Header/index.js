import React from "react";
import { PageArea } from "./styled";
import { BsQuestion, BsHouse } from "react-icons/bs";
import { BiCake } from "react-icons/bi";

export default () => {
    return (
        <PageArea>
           <div className="menu-container">
                <div className="logo"><img src={require("./final-azul.png")}/></div>  {/* logo */}  
                <div className="menu-icons">
                    <form> 
                        <div><BsHouse className="icons"/></div>
                        <div><BiCake className="icons"/></div>
                        <div></div>
                        <div><BsQuestion className="icons"/></div>
                    </form>
                </div>  {/* menu-icons */}         
           </div>{/* menu-container */}
        </PageArea>
    );
}