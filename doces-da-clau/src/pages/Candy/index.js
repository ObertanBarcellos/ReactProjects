import React from "react";
import { PageArea } from "./styled";

import Item from "../../components/Item";

 function Candy () {

    const items = [
        { "name": "Bolo KitKat", "description": "Descrição Bolo KitKat", "url": require("../itemsImgs/teste.png") },
        { "name": "Brigadeiro", "description": "Descrição Brigadeiro", "url": require("../itemsImgs/Brigadeiro.png") }

    ]

    return (
        <PageArea>
           <text className="text-main">Doces</text>
           <div className="home-container"> 
                <Item url={items[1].url} text={items[1].name} description={items[1].description}/>
                <Item url={items[1].url} text={items[1].name} description={items[1].description}/>
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

export default Candy;