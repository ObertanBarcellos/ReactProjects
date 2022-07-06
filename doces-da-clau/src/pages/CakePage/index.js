import React from "react";
import { PageArea } from "./styled";

 function CakePage(props) {

    return (
        <PageArea>
           <text className="text-main">{props.name ?? "Bolo Padrão"}</text>
           <div className="home-container"> 
                
           </div>{/* home-container */}
        </PageArea>
    );
}

export default CakePage;