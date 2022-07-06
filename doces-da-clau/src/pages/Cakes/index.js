import React from "react";
import { PageArea } from "./styled";

import Item from "../../components/Item";

 function Cakes () {

    const items = [
        { "name": "Bolo KitKat", "description": "Descrição Bolo KitKat", "url": require("../itemsImgs/teste.png") },
        { "name": "Brigadeiro", "description": "Descrição Brigadeiro", "url": require("../itemsImgs/Brigadeiro.png") }

    ]

    return (
        <PageArea>
           <text className="text-main">Bolos</text>
           <div className="home-container"> 
                <Item url={items[0].url} text={items[0].name} description={items[0].description}/>
                <Item url={items[0].url} text={items[0].name} description={items[0].description}/>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
           </div>{/* home-container */}
        </PageArea>
    );
}

export default Cakes;