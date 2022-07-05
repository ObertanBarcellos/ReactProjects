import React from "react";
import { PageArea } from "./styled";

export default () => {
    return (
        <PageArea>
           <div className="footer-container">
                <div className="docesdaclau">
                    <div className="clau-name">Claudete Barp</div>
                </div>
                <div className="logo">
                    <img src={require("../Header/final-azul.png")} />
                </div>
                <div className="developer">
                    <div className="developer-name">Óbertan Barcellos dos Santos</div>
                </div>
           </div>{/* footer-container */}
        </PageArea>
    );
}