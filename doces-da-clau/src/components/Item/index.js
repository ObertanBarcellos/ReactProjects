import React from "react";
import { PageArea } from "./styled";


export default () => {
    return (
        <PageArea>
           <div className="img">
                <img src={require('./teste.png')} />
           </div>
           <div className="about">
                <text className="titulo">Bolo Padrão</text>
                <div className="textandbutton">
                    <div className="ttext">
                        <text>Algum Texto Padrão</text>
                    </div>
                </div>
                
           </div>
        </PageArea>
    );
}