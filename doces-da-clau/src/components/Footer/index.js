import React from "react";
import { PageArea } from "./styled";

export default () => {
    return (
        <PageArea>
           <div className="footer-container">
                <div className="docesdaclau">
                    <div className="clau-name">Claudete Barp</div>
                    <div className="clau-function">Confeitera</div>
                    <div className="clau-contact">Contato (49) 9 9815-4656</div>
                </div>
                <div className="logo">
                    <img src={require("../Header/final-azul.png")} />
                </div>
                <div className="developer">
                    <div className="developer-name">Óbertan Barcellos dos Santos</div>
                    <div className="developer-function">Desenvolvedor do Site</div>
                    <div className="developer-contact">Contato (49) 9 9924-4620</div>
                </div>
           </div>{/* footer-container */}
        </PageArea>
    );
}