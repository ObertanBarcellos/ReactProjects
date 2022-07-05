import React from "react";
import { PageArea } from "./styled";


function Page (props) {
    return (
        <PageArea>
           <div className="img">
                <img src={props.url ?? require('./teste.png')} />
           </div>
           <div className="about">
                <text className="titulo">{props.text ?? 'Bolo Padrão'}</text>
                <div className="textandbutton">
                    <div className="ttext">
                        <text>{props.description ?? 'Algum Texto Padrão'}</text>
                    </div>
                </div>
                
           </div>
        </PageArea>
    );
}

export default Page;